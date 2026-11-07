GRANT authenticated TO xcr_site_web;
CREATE TABLE IF NOT EXISTS xcr_private.storage_objects(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),bucket text NOT NULL,object_key text NOT NULL,
 blob_name text NOT NULL,filename text NOT NULL,mime_type text NOT NULL,size bigint NOT NULL,
 sha256 text NOT NULL,owner_user_id uuid REFERENCES auth.users(id),prospect_id uuid REFERENCES public.prospects(id),
 created_at timestamptz NOT NULL DEFAULT now(),deleted_at timestamptz,
 CONSTRAINT storage_owner CHECK(owner_user_id IS NOT NULL OR prospect_id IS NOT NULL)
);
CREATE UNIQUE INDEX IF NOT EXISTS xcr_storage_active_key ON xcr_private.storage_objects(bucket,object_key) WHERE deleted_at IS NULL;
CREATE TABLE IF NOT EXISTS xcr_private.automation_runs(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),rule_id uuid NOT NULL REFERENCES public.crm_automation_rules(id),
 entity_id uuid NOT NULL,event_type text NOT NULL,status text NOT NULL DEFAULT 'processing',
 created_at timestamptz NOT NULL DEFAULT now(),finished_at timestamptz,error_message text,
 UNIQUE(rule_id,entity_id,event_type)
);
CREATE TABLE IF NOT EXISTS xcr_private.mail_imports(
 mailbox text NOT NULL,folder text NOT NULL,uid_validity text NOT NULL,uid bigint NOT NULL,
 email_id uuid NOT NULL REFERENCES public.email_messages(id),created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(mailbox,folder,uid_validity,uid)
);
CREATE TABLE IF NOT EXISTS xcr_private.ai_jobs(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),user_id uuid NOT NULL REFERENCES auth.users(id),
 operation text NOT NULL,payload jsonb NOT NULL,status text NOT NULL DEFAULT 'pending',
 result jsonb,error_message text,created_at timestamptz NOT NULL DEFAULT now(),started_at timestamptz,finished_at timestamptz
);
CREATE OR REPLACE FUNCTION xcr_private.invitation_lookup(p_token text)
RETURNS jsonb LANGUAGE sql SECURITY DEFINER SET search_path=pg_catalog AS $$
 SELECT to_jsonb(i) FROM public.user_invitations i
 WHERE (i.invitation_token=p_token OR i.code=p_token) AND i.status='pending' AND i.expires_at>now() LIMIT 1
$$;
CREATE OR REPLACE FUNCTION xcr_private.invitation_accept(p_id uuid,p_token text,p_email text,p_hash text)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path=pg_catalog,public AS $$
DECLARE invitation public.user_invitations%ROWTYPE;new_id uuid:=gen_random_uuid();
BEGIN
 SELECT * INTO invitation FROM public.user_invitations WHERE id=p_id FOR UPDATE;
 IF NOT FOUND OR invitation.invitation_token<>p_token OR invitation.status<>'pending' OR invitation.expires_at<=now() OR lower(invitation.email)<>lower(p_email) THEN
  RAISE EXCEPTION 'Invitation expired or invalid' USING ERRCODE='22023';
 END IF;
 IF invitation.role NOT IN ('admin','pole_manager','client','user') THEN RAISE EXCEPTION 'Invalid invitation role' USING ERRCODE='22023';END IF;
 IF EXISTS(SELECT 1 FROM auth.users WHERE lower(email)=lower(p_email)) THEN RAISE EXCEPTION 'Account already exists' USING ERRCODE='23505';END IF;
 INSERT INTO auth.users(id,aud,role,email,encrypted_password,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at)
 VALUES(new_id,'authenticated','authenticated',lower(p_email),p_hash,now(),'{"provider":"email","providers":["email"]}'::jsonb,
 jsonb_build_object('first_name',invitation.first_name,'last_name',invitation.last_name),now(),now());
 INSERT INTO public.profiles(id,email,first_name,last_name,role,is_active) VALUES(new_id,lower(p_email),invitation.first_name,invitation.last_name,invitation.role::public.user_role,true)
 ON CONFLICT(id) DO UPDATE SET first_name=EXCLUDED.first_name,last_name=EXCLUDED.last_name,role=EXCLUDED.role,is_active=true;
 UPDATE public.user_invitations SET status='accepted',accepted_at=now(),used_at=now(),used_by=lower(p_email) WHERE id=invitation.id;
 RETURN new_id;
END$$;
CREATE OR REPLACE FUNCTION xcr_private.invitation_lookup_by_id(p_id uuid)
RETURNS jsonb LANGUAGE sql SECURITY DEFINER SET search_path=pg_catalog AS $$
 SELECT to_jsonb(i) FROM public.user_invitations i WHERE i.id=p_id AND i.status='pending' AND i.expires_at>now()
$$;
CREATE OR REPLACE FUNCTION xcr_private.own_accepted_invitation(p_user uuid,p_id text)
RETURNS jsonb LANGUAGE sql SECURITY DEFINER SET search_path=pg_catalog AS $$
 SELECT to_jsonb(i) FROM public.user_invitations i JOIN auth.users u ON lower(u.email)=lower(i.email)
 WHERE u.id=p_user AND i.status='accepted' AND (i.id::text=p_id OR i.code=p_id OR i.invitation_token=p_id) LIMIT 1
$$;
CREATE OR REPLACE FUNCTION xcr_private.portal_read(p_token text,p_table text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path=pg_catalog,public AS $$
DECLARE prospect public.prospects%ROWTYPE;result jsonb;
BEGIN
 SELECT * INTO prospect FROM public.prospects WHERE access_token=p_token AND status='active' AND (token_expires_at IS NULL OR token_expires_at>now());
 IF NOT FOUND THEN RETURN NULL;END IF;
 IF p_table='prospects' THEN RETURN jsonb_build_array(to_jsonb(prospect)-'access_token');
 ELSIF p_table='prospect_documents' THEN SELECT coalesce(jsonb_agg(to_jsonb(d) ORDER BY d.created_at DESC),'[]'::jsonb) INTO result FROM public.prospect_documents d WHERE d.prospect_id=prospect.id;
 ELSIF p_table='prospect_quotes' THEN SELECT coalesce(jsonb_agg(to_jsonb(q) ORDER BY q.created_at DESC),'[]'::jsonb) INTO result FROM public.prospect_quotes q WHERE q.prospect_id=prospect.id AND q.status<>'draft';
 ELSE RAISE EXCEPTION 'Portal resource not allowed' USING ERRCODE='42501';END IF;
 RETURN result;
END$$;
CREATE OR REPLACE FUNCTION xcr_private.portal_change(p_token text,p_table text,p_target uuid,p_data jsonb)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path=pg_catalog,public AS $$
DECLARE prospect public.prospects%ROWTYPE;result jsonb;obj xcr_private.storage_objects%ROWTYPE;
BEGIN
 SELECT * INTO prospect FROM public.prospects WHERE access_token=p_token AND status='active' AND (token_expires_at IS NULL OR token_expires_at>now());
 IF NOT FOUND THEN RAISE EXCEPTION 'Portal access expired' USING ERRCODE='42501';END IF;
 IF p_table='prospects' THEN
  IF p_target<>prospect.id THEN RAISE EXCEPTION 'Portal resource not found' USING ERRCODE='P0002';END IF;
  UPDATE public.prospects SET last_access_at=now() WHERE id=prospect.id RETURNING to_jsonb(prospects)-'access_token' INTO result;
 ELSIF p_table='prospect_documents' THEN
  SELECT * INTO obj FROM xcr_private.storage_objects WHERE id=(p_data->>'_object_id')::uuid AND prospect_id=prospect.id AND deleted_at IS NULL;
  IF NOT FOUND THEN RAISE EXCEPTION 'Uploaded object not found' USING ERRCODE='P0002';END IF;
  IF p_target IS NULL THEN
   INSERT INTO public.prospect_documents(prospect_id,document_type,document_name,file_url,file_size,mime_type,status,uploaded_at)
   VALUES(prospect.id,left(p_data->>'document_type',80),obj.filename,p_data->>'file_url',obj.size,obj.mime_type,'uploaded',now()) RETURNING to_jsonb(prospect_documents) INTO result;
  ELSE
   UPDATE public.prospect_documents SET document_name=obj.filename,file_url=p_data->>'file_url',file_size=obj.size,mime_type=obj.mime_type,status='uploaded',uploaded_at=now()
   WHERE id=p_target AND prospect_id=prospect.id RETURNING to_jsonb(prospect_documents) INTO result;
  END IF;
 ELSIF p_table='prospect_quotes' THEN
  IF p_data->>'status' NOT IN ('viewed','accepted','declined') THEN RAISE EXCEPTION 'Quote action not allowed' USING ERRCODE='42501';END IF;
  UPDATE public.prospect_quotes SET status=p_data->>'status',viewed_at=coalesce(viewed_at,now()),response_at=CASE WHEN p_data->>'status' IN ('accepted','declined') THEN now() ELSE response_at END,updated_at=now()
  WHERE id=p_target AND prospect_id=prospect.id AND status IN ('sent','viewed') AND (valid_until IS NULL OR valid_until>=CURRENT_DATE)
  RETURNING to_jsonb(prospect_quotes) INTO result;
 ELSE RAISE EXCEPTION 'Portal resource not allowed' USING ERRCODE='42501';END IF;
 IF result IS NULL THEN RAISE EXCEPTION 'Portal resource not found' USING ERRCODE='P0002';END IF;
 RETURN jsonb_build_array(result);
END$$;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA xcr_private FROM PUBLIC;
GRANT SELECT,INSERT,UPDATE,DELETE ON ALL TABLES IN SCHEMA xcr_private TO xcr_site_web;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA xcr_private TO xcr_site_web;
NOTIFY pgrst,'reload schema';
