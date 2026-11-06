CREATE SCHEMA IF NOT EXISTS xcr_private;
REVOKE ALL ON SCHEMA xcr_private FROM PUBLIC;
CREATE OR REPLACE FUNCTION xcr_private.health()
RETURNS TABLE(tables integer,users integer,poles integer)
LANGUAGE sql SECURITY DEFINER SET search_path=pg_catalog AS $$
 SELECT (SELECT count(*)::integer FROM pg_tables WHERE schemaname='public'),
 (SELECT count(*)::integer FROM auth.users),(SELECT count(*)::integer FROM public.poles)
$$;
CREATE TABLE IF NOT EXISTS xcr_private.sessions (
 id uuid PRIMARY KEY, user_id uuid NOT NULL REFERENCES auth.users(id),
 refresh_hash text UNIQUE NOT NULL, expires_at timestamptz NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now(), revoked_at timestamptz
);
CREATE TABLE IF NOT EXISTS xcr_private.auth_requests (
 token_hash text PRIMARY KEY, user_id uuid NOT NULL REFERENCES auth.users(id),
 kind text NOT NULL, redirect_to text, expires_at timestamptz NOT NULL, used_at timestamptz
);
CREATE TABLE IF NOT EXISTS xcr_private.outbox (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),recipient text NOT NULL,subject text NOT NULL,
 body_text text NOT NULL DEFAULT '',body_html text,status text NOT NULL DEFAULT 'pending',
 attempts integer NOT NULL DEFAULT 0,available_at timestamptz NOT NULL DEFAULT now(),
 created_at timestamptz NOT NULL DEFAULT now(),sent_at timestamptz
);
CREATE OR REPLACE FUNCTION xcr_private.user_lookup(p_id uuid,p_email text)
RETURNS TABLE(id uuid,email text,encrypted_password text,email_confirmed_at timestamptz,
 created_at timestamptz,updated_at timestamptz,raw_user_meta_data jsonb,deleted_at timestamptz,
 banned_until timestamptz,is_active boolean,profile_role text)
LANGUAGE sql SECURITY DEFINER SET search_path=pg_catalog,public AS $$
 SELECT u.id,u.email::text,u.encrypted_password::text,u.email_confirmed_at,u.created_at,u.updated_at,
 u.raw_user_meta_data,u.deleted_at,u.banned_until,coalesce(p.is_active,false),p.role::text
 FROM auth.users u LEFT JOIN public.profiles p ON p.id=u.id
 WHERE (p_id IS NOT NULL AND u.id=p_id) OR (p_id IS NULL AND lower(u.email)=lower(p_email)) LIMIT 1
$$;
CREATE OR REPLACE FUNCTION xcr_private.change_password(p_id uuid,p_hash text)
RETURNS void LANGUAGE sql SECURITY DEFINER SET search_path=pg_catalog AS $$
 UPDATE auth.users SET encrypted_password=p_hash,updated_at=now() WHERE id=p_id
$$;
CREATE OR REPLACE FUNCTION xcr_private.find_invitation(p_token text,p_email text)
RETURNS TABLE(email text,first_name text,invitation_token text)
LANGUAGE sql SECURITY DEFINER SET search_path=pg_catalog AS $$
 SELECT i.email,i.first_name,i.invitation_token FROM public.user_invitations i
 WHERE i.invitation_token=p_token AND lower(i.email)=lower(p_email)
$$;
CREATE OR REPLACE FUNCTION xcr_private.submit_lead(data jsonb)
RETURNS TABLE(id uuid,reference text)
LANGUAGE plpgsql SECURITY DEFINER SET search_path=pg_catalog,public AS $$
DECLARE selected_pole uuid;new_id uuid:=gen_random_uuid();new_reference text;
BEGIN
 SELECT p.id INTO selected_pole FROM public.poles p
 ORDER BY (coalesce(to_jsonb(p)->>'slug','')=coalesce(data->>'pole','')) DESC,p.id LIMIT 1;
 IF selected_pole IS NULL THEN RAISE EXCEPTION 'No insurance department configured';END IF;
 new_reference:=public.generate_lead_reference();
 INSERT INTO public.leads(id,reference,pole_id,first_name,last_name,email,phone,company_name,siret,
 subject,message,form_type,form_data,metadata,source,priority)
 VALUES(new_id,new_reference,selected_pole,data->>'first_name',data->>'last_name',data->>'email',
 nullif(data->>'phone',''),nullif(data->>'company',''),nullif(data->>'siret',''),
 data->>'subject',data->>'message',data->>'form_type',coalesce(data->'form_data','{}'),
 coalesce(data->'metadata','{}'),'website',CASE WHEN data->>'priority'='high' THEN 'haute' ELSE 'normale' END::public.lead_priority);
 RETURN QUERY SELECT new_id,new_reference;
END
$$;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA xcr_private FROM PUBLIC;
GRANT USAGE ON SCHEMA xcr_private TO xcr_site_web;
GRANT SELECT,INSERT,UPDATE,DELETE ON ALL TABLES IN SCHEMA xcr_private TO xcr_site_web;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA xcr_private TO xcr_site_web;
GRANT USAGE ON SCHEMA public,auth,extensions TO anon,authenticated;
GRANT EXECUTE ON FUNCTION auth.uid(),auth.role(),auth.jwt(),auth.email() TO anon,authenticated;
DO $$DECLARE r record;BEGIN
 FOR r IN SELECT tablename FROM pg_tables WHERE schemaname='public' AND rowsecurity LOOP
  EXECUTE format('GRANT SELECT,INSERT,UPDATE,DELETE ON public.%I TO anon,authenticated',r.tablename);
 END LOOP;
END$$;
GRANT USAGE,SELECT ON ALL SEQUENCES IN SCHEMA public TO anon,authenticated;
NOTIFY pgrst,'reload schema';
