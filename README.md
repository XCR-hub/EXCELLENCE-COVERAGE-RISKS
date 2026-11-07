# xcr.fr

La version active est dans `selfhost/` : site récupéré le 6 novembre 2026, API Node, PostgreSQL et PostgREST sur SERVEUR-XCR, derrière le proxy HTTPS Cloudflare. Aucun service Netlify ou Supabase n’est utilisé par cette version.

Installation locale : `npm --prefix selfhost ci`, puis `npm test` et `npm run build`.

Le serveur utilise `F:\XCR-Site\app`, la base `xcr_site` et les ports locaux 18896/18897. Les tâches `XCR Site Native Runtime` et `XCR Site Native Backup` assurent le démarrage et les sauvegardes quotidiennes. Les secrets sont chiffrés avec DPAPI et protégés par les droits SYSTEM/administrateurs.

La base a été clonée depuis `supa_cfuzzizrfiqz` : 97 tables métier, un marqueur de restauration et un compte utilisateur. La source restaurée et son archive sont conservées. Les sauvegardes nouvelles vont dans `F:\XCR-Site\backups`.

Les contenus publics, le CRM, les sessions, la récupération du mot de passe, les devis et la file SMTP disposent d’un backend natif. Les invitations permettent une inscription contrôlée par le rôle et l’adresse enregistrés par le cabinet. Les documents sont conservés hors du répertoire public, avec contrôle par utilisateur, dossier prospect ou lien signé limité à une heure. Les sauvegardes quotidiennes incluent les fichiers documentaires.

L’import IMAP de contact@xcr.fr lit la boîte INBOX sans modifier les messages du serveur mail. Il évite les doublons par UID et neutralise le HTML des messages. Les pièces jointes autorisées utilisent le stockage privé. Le chatbot, la classification des emails et les brouillons d’articles, FAQ et pages villes utilisent le moteur IA local sur 127.0.0.1:11884. Les générations et classifications sont placées dans une file persistante, avec suivi de leur résultat dans l’interface. Les brouillons sont courts pour tenir compte de la puissance du moteur ; les dix FAQ sont générées par lots. Un échec ou une réponse invalide du moteur est signalé ; les contenus générés attendent une validation avant publication. Le traitement de la file éditoriale porte sur un contenu à la fois.

Le moteur CRM traite les événements lead à partir des données de la base, avec journal et dédoublonnage par règle, demande et événement. Les modèles email doivent être présents et actifs. Les règles planifiées et les actions spécifiques aux devis ne sont pas lancées par ce moteur. La collecte RSS enregistre des titres et liens en brouillon. La publication sur les réseaux sociaux reste à raccorder aux comptes du cabinet.

La source TypeScript récente de Bolt n’était pas disponible. `selfhost/recovered` contient les ressources publiques récupérées ; le build les adapte au backend natif. Les anciens `src/`, `public/` et configurations restent des références historiques de 2025 (commit `771c147`), sans rôle dans la version active.

Les rapports de récupération et de contrôle sont dans `F:\XCR-Site\recovery-20261106`. Aucun export de données ou secret de production ne doit entrer dans Git.
