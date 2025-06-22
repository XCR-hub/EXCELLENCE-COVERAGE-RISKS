# API Tunnel de Souscription

Cette documentation résume l'utilisation des Web Services fournis par Néoliane pour créer et gérer une souscription sans passer par l'extranet.

## Authentification
Les appels nécessitent un `access_token` obtenu via l'API d'authentification. Le jeton doit être transmis dans l'en-tête `Authorization` sous la forme :

```
Authorization: Bearer <access_token>
```

## Création du panier
`POST https://api.neoliane.fr/nws/public/v1/api/cart`

Corps d'exemple :
```json
{
  "total_amount": "36.28",
  "profile": {
    "date_effect": { "year": "2020", "month": "4", "day": "4" },
    "zipcode": "06200",
    "members": [
      {
        "concern": "a1",
        "birthyear": "1979",
        "regime": "1",
        "products": [
          { "product_id": "538", "formula_id": "3847" }
        ]
      }
    ],
    "producttype": "sante"
  }
}
```

La réponse contient notamment un `lead_id` à utiliser pour la création de la souscription.

## Création de la souscription
`POST https://api.neoliane.fr/nws/public/v1/api/subscription`

Corps d'exemple :
```json
{
  "lead_id": "20",
  "signtype": "1",
  "features": ["CANCELLATION_LETTER_BETA"]
}
```

La réponse indique la première étape à réaliser (`currentstep`) ainsi que l'URL de validation.

## Étapes de souscription
Les étapes peuvent inclure :
- `stepconcern` : informations sur les adhérents
- `stepbank` : coordonnées bancaires
- `stepfuneral` : informations obsèques (le cas échéant)
- `stepcancellation` : mandat de résiliation (optionnel)

Chaque étape s'effectue via une requête `PUT` dont l'URL et le `stepId` sont fournis par la précédente réponse.

## Upload de documents
Une fois les étapes terminées, les documents requis (BA, SEPA, mandats…) sont transmis via :
`POST https://api.neoliane.fr/nws/public/v1/api/subscription/{subId}/document`

Exemple :
```json
{
  "type": 2,
  "content": "<base64_encode(document.pdf)>",
  "contract_ids": ["227"]
}
```

## Validation des contrats
Chaque contrat doit être validé séparément :
`PUT https://api.neoliane.fr/nws/public/v1/api/contract/{contractId}/validate`

Une réponse positive confirme le statut du contrat.

---

Ce fichier propose un aperçu condensé de la documentation. Pour plus de détails (paramètres optionnels, messages d'erreur…), se référer à la documentation complète fournie par Néoliane.
