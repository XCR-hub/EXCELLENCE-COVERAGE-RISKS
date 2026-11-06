# xcr.fr

La version active est dans `selfhost/` : site récupéré le 6 novembre 2026, API Node, PostgreSQL et PostgREST sur SERVEUR-XCR, derrière le proxy HTTPS Cloudflare. Aucun service Netlify ou Supabase n’est utilisé par cette version.

Installation locale : `npm --prefix selfhost ci`, puis `npm test` et `npm run build`.

Le serveur utilise `F:\XCR-Site\app`, la base `xcr_site` et les ports locaux 18896/18897. Les tâches `XCR Site Native Runtime` et `XCR Site Native Backup` assurent le démarrage et les sauvegardes quotidiennes. Les secrets sont chiffrés avec DPAPI et protégés par les droits SYSTEM/administrateurs.

La base a été clonée depuis `supa_cfuzzizrfiqz` : 97 tables métier, un marqueur de restauration et un compte utilisateur. La source restaurée et son archive sont conservées. Les sauvegardes nouvelles vont dans `F:\XCR-Site\backups`.

Les contenus publics, les règles PostgreSQL du CRM, les sessions, la récupération du mot de passe, les devis et la file SMTP disposent d’un backend natif. Les automatisations IA, la synchronisation IMAP et la publication sociale restent à raccorder ; leurs anciennes fonctions renvoient une erreur explicite. Le dépôt de nouveaux documents et l’inscription sur invitation doivent également être raccordés à leur interface native.

La source TypeScript récente de Bolt n’était pas disponible. `selfhost/recovered` contient les ressources publiques récupérées ; le build les adapte au backend natif. Les anciens `src/`, `public/` et configurations restent des références historiques de 2025 (commit `771c147`), sans rôle dans la version active.

Les rapports de récupération et de contrôle sont dans `F:\XCR-Site\recovery-20261106`. Aucun export de données ou secret de production ne doit entrer dans Git.
