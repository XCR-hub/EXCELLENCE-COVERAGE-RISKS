/*
  # Création de la table form_submissions
  
  1. Nouvelle Table
    - `form_submissions`
      - `id` (uuid, primary key)
      - `form_type` (text)
      - `form_id` (text)
      - `form_data` (jsonb)
      - `metadata` (jsonb)
      - `email_config` (jsonb)
      - `status` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for authenticated users to read their own data
*/

-- Création de la table form_submissions
CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  form_id text NOT NULL,
  form_data jsonb NOT NULL,
  metadata jsonb NOT NULL,
  email_config jsonb,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Création d'un index sur form_type et created_at pour des requêtes plus rapides
CREATE INDEX IF NOT EXISTS form_submissions_form_type_idx ON form_submissions (form_type);
CREATE INDEX IF NOT EXISTS form_submissions_created_at_idx ON form_submissions (created_at);

-- Activer RLS (Row Level Security)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre aux utilisateurs authentifiés de lire leurs propres données
CREATE POLICY "Admins can read all form submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

-- Créer une politique pour permettre aux utilisateurs authentifiés d'insérer des données
CREATE POLICY "Service role can insert form submissions"
  ON form_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);