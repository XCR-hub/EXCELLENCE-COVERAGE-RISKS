// Service pour gérer les appels à l'API Neoliane via le proxy PHP evolivie.com
export interface TarificationRequest {
  dateEffet: string;
  codePostal: string;
  anneeNaissance: number;
  regime: string;
  conjoint?: {
    anneeNaissance: number;
    regime: string;
  };
  enfants?: Array<{
    anneeNaissance: number;
  }>;
}

export interface CartRequest {
  total_amount?: string;
  profile: {
    date_effect: {
      year: number;
      month: number;
      day: number;
    };
    zipcode: string;
    members: Array<{
      concern: string;
      birthyear: string;
      regime: string;
      products: Array<{
        product_id: string;
        formula_id: string;
      }>;
    }>;
  };
}

export interface SubscriptionRequest {
  lead_id: string;
  signtype: string;
  features?: string[];
}

export interface StepConcernRequest {
  members: Array<{
    is_politically_exposed: number;
    gender: string;
    lastname: string;
    firstname: string;
    regime: string;
    birthdate: {
      day: string;
      month: string;
      year: string;
    };
    birthplace: string;
    birthzipcode: string;
    birthcountry: string;
    csp: string;
    numss: string;
    numorganisme: string;
  }>;
  streetnumber: string;
  street: string;
  streetbis: string;
  zipcode: string;
  city: string;
  email: string;
  phone: string;
}

export interface StepBankRequest {
  details: Array<{
    levydate: string;
    levyfrequency: string;
    iban: string;
    bic: string;
    isDifferentFromStepConcern: string;
    gender?: string;
    lastname?: string;
    firstname?: string;
    streetnumber?: string;
    street?: string;
    streetbis?: string;
    zipcode?: string;
    city?: string;
    country?: string;
  }>;
}

// Interfaces pour l'API Editique
export interface Product {
  gammeId: number;
  gammeLabel: string | null;
  type: string;
}

export interface ProductDocument {
  documentId: number;
  enumDocumentTypeId: number;
  filename: string;
  thumbnail: string | null;
  fileExtension: string | null;
  pages: string | null;
  label: string | null;
}

export interface ApiResponse<T> {
  status: boolean;
  error?: string | null;
  value: T;
}

export interface Offre {
  nom: string;
  prix: number;
  garanties: Array<{
    nom: string;
    niveau: string;
  }>;
  product_id?: string;
  formula_id?: string;
  gammeId?: number;
  documents?: ProductDocument[];
}

export interface TarificationResponse {
  success: boolean;
  offres: Offre[];
  message?: string;
}

export interface SubscriptionFlowState {
  step:
    | 'cart'
    | 'subscription'
    | 'stepconcern'
    | 'stepbank'
    | 'documents'
    | 'validation'
    | 'completed';
  lead_id?: string;
  subscription_id?: string;
  token?: string;
  contracts?: any[];
  required_docs?: any[];
  currentstep?: number;
  totalstep?: number;
}

class NeolianeService {
  // Clé API intégrée directement dans le service
  private userKey =
    '9162f8b63e4fc4778d0d5c66a6fd563bb87185ed2a02abd172fa586c8668f4b2';
  private proxyUrl = 'https://evolivie.com/proxy-neoliane.php';
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor() {
    console.log(
      '🔧 Service Neoliane initialisé avec proxy evolivie.com - Version 3.6'
    );
    console.log("🔑 Clé API pré-configurée et prête à l'emploi");
  }

  private async testProxyAvailability(): Promise<boolean> {
    try {
      console.log('🧪 Test de disponibilité du proxy evolivie.com...');

      const response = await fetch(this.proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          action: 'test',
        }),
      });

      console.log(`📡 Réponse test proxy: ${response.status} ${response.statusText}`);

      const responseText = await response.text();
      console.log('📄 Contenu de la réponse test:', responseText.substring(0, 500));

      if (
        responseText.trim().startsWith('<!doctype html') ||
        responseText.trim().startsWith('<html')
      ) {
        console.log(
          '❌ Le proxy retourne du HTML - fichier proxy-neoliane.php non trouvé sur evolivie.com'
        );
        return false;
      }

      try {
        const data = JSON.parse(responseText);
        console.log('✅ Proxy disponible et retourne du JSON valide:', data);
        return data.success === true;
      } catch {
        console.log('⚠️ Proxy disponible mais ne retourne pas du JSON valide');
        return false;
      }
    } catch (error) {
      console.log('❌ Erreur lors du test du proxy:', error);
      return false;
    }
  }

  private async getAccessToken(): Promise<string | null> {
    if (this.accessToken && Date.now() < this.tokenExpiry - 300000) {
      console.log('🔐 Token existant encore valide');
      return this.accessToken;
    }

    const proxyAvailable = await this.testProxyAvailability();
    if (!proxyAvailable) {
      throw new Error(
        "Le proxy evolivie.com/proxy-neoliane.php n'est pas disponible. Vérifiez que le fichier proxy-neoliane.php a bien été uploadé sur evolivie.com et est accessible."
      );
    }

    try {
      console.log('🔐 Authentification via proxy evolivie.com...');

      const response = await fetch(this.proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          action: 'auth',
          user_key: this.userKey,
        }),
      });

      console.log(`📡 Réponse proxy authentification: ${response.status} ${response.statusText}`);

      const responseText = await response.text();
      console.log('📄 Contenu de la réponse auth:', responseText.substring(0, 500));

      if (
        responseText.trim().startsWith('<!doctype html') ||
        responseText.trim().startsWith('<html')
      ) {
        throw new Error(
          "Le proxy retourne du HTML au lieu de JSON. Le fichier proxy-neoliane.php n'existe pas sur evolivie.com ou a une erreur de syntaxe."
        );
      }

      if (response.ok) {
        try {
          const data = JSON.parse(responseText);

          if (data.success && data.access_token) {
            console.log('✅ Token obtenu avec succès via proxy');

            this.accessToken = data.access_token;
            if (data.expires_in > 1000000000) {
              this.tokenExpiry = data.expires_in * 1000;
            } else {
              this.tokenExpiry = Date.now() + data.expires_in * 1000;
            }

            return this.accessToken;
          } else {
            throw new Error(data.error || "Erreur d'authentification via proxy");
          }
        } catch (parseError) {
          console.error('❌ Erreur de parsing JSON:', parseError);
          throw new Error(
            `Réponse proxy invalide (pas du JSON valide): ${responseText.substring(0, 200)}`
          );
        }
      } else {
        console.log(`❌ Erreur proxy HTTP ${response.status}:`, responseText);

        let errorMessage = `Erreur proxy ${response.status}`;
        try {
          const errorData = JSON.parse(responseText);
          if (errorData.error) {
            errorMessage = errorData.error;
          } else if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch {
          errorMessage = responseText || `Erreur HTTP ${response.status}`;
        }

        throw new Error(`Authentification échouée via proxy: ${errorMessage}`);
      }
    } catch (error: any) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        console.log(`🔌 Erreur réseau (proxy):`, error);
        throw new Error(
          'Erreur de connectivité réseau avec le proxy evolivie.com. Vérifiez votre connexion internet.'
        );
      } else {
        console.log(`❌ Erreur authentification proxy:`, error);
        throw error;
      }
    }
  }

  private formatErrorMessage(error: any): string {
    if (typeof error === 'string') {
      return error;
    }

    if (typeof error === 'object' && error !== null) {
      if (error.profile && typeof error.profile === 'object') {
        const messages: string[] = [];
        for (const [field, fieldErrors] of Object.entries(error.profile)) {
          if (Array.isArray(fieldErrors)) {
            messages.push(`${field}: ${fieldErrors.join(', ')}`);
          } else if (typeof fieldErrors === 'string') {
            messages.push(`${field}: ${fieldErrors}`);
          }
        }
        if (messages.length > 0) {
          return `Erreurs de validation: ${messages.join('; ')}`;
        }
      }

      if (error.message) {
        return error.message;
      }

      if (error.detail) {
        return error.detail;
      }

      const errorKeys = Object.keys(error);
      if (errorKeys.length > 0) {
        const errorMessages = errorKeys.map((key) => {
          const value = (error as any)[key];
          if (Array.isArray(value)) {
            return `${key}: ${value.join(', ')}`;
          } else if (typeof value === 'string') {
            return `${key}: ${value}`;
          }
          return `${key}: ${JSON.stringify(value)}`;
        });
        return errorMessages.join('; ');
      }
    }

    return JSON.stringify(error);
  }

  private async makeProxyRequest(
    endpoint: string,
    method: string = 'GET',
    body?: any
  ): Promise<any> {
    const token = await this.getAccessToken();
    if (!token) {
      throw new Error("Impossible d'obtenir un token d'authentification");
    }

    console.log(`📞 Appel API via proxy: ${method} ${endpoint}`);

    const requestData = {
      action: 'api_call',
      endpoint: endpoint,
      method: method,
      access_token: token,
      data: body || null,
    };

    const response = await fetch(this.proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    console.log(`📡 Réponse proxy API ${endpoint}: ${response.status} ${response.statusText}`);

    const responseText = await response.text();

    if (
      responseText.trim().startsWith('<!doctype html') ||
      responseText.trim().startsWith('<html')
    ) {
      throw new Error(
        'Le proxy retourne du HTML au lieu de JSON. Vérifiez que le fichier proxy-neoliane.php existe et fonctionne correctement.'
      );
    }

    if (!response.ok) {
      console.error(`❌ Erreur proxy API ${endpoint}: ${responseText}`);

      let userFriendlyError = `Erreur proxy ${response.status}`;
      try {
        const errorData = JSON.parse(responseText);
        if (errorData.error) {
          userFriendlyError = this.formatErrorMessage(errorData.error);
        } else if (errorData.message) {
          userFriendlyError = errorData.message;
        } else {
          userFriendlyError = this.formatErrorMessage(errorData);
        }
      } catch {
        userFriendlyError = responseText || `Erreur HTTP ${response.status}`;
      }

      throw new Error(userFriendlyError);
    }

    try {
      const data = JSON.parse(responseText);

      if (data.success) {
        console.log(`✅ Réponse proxy API réussie:`, data.data);
        return data.data;
      } else {
        throw new Error(data.error || 'Erreur inconnue du proxy');
      }
    } catch (parseError) {
      console.error('❌ Erreur de parsing de la réponse proxy:', parseError);
      throw new Error(`Réponse proxy invalide: ${responseText.substring(0, 200)}`);
    }
  }

  // === API EDITIQUE ===

  public async getProducts(): Promise<Product[]> {
    try {
      console.log("📦 Récupération de la liste des produits RÉELS depuis l'API Neoliane...");
      const response = await this.makeProxyRequest('/nws/public/v1/api/products');

      console.log('🔍 Analyse de la réponse products:', response);
      console.log('🔍 Type de response:', typeof response);
      console.log('🔍 Clés de response:', Object.keys(response || {}));

      if (response && response.status && response.value) {
        console.log('📋 Format standard détecté avec status/value');
        console.log('🔍 Type de response.value:', typeof response.value);
        console.log('🔍 Clés de response.value:', Object.keys(response.value || {}));

        const products = response.value;

        if (Array.isArray(products)) {
          console.log(`✅ Liste des produits récupérée (tableau direct): ${products.length} produits`);
          return products;
        }

        if (typeof products === 'object' && products !== null) {
          const possibleArrays = Object.values(products).filter((value) => Array.isArray(value));

          if (possibleArrays.length > 0) {
            const productArray = possibleArrays[0] as Product[];
            console.log(`✅ Liste des produits trouvée dans l'objet: ${productArray.length} produits`);
            return productArray;
          }

          const objectKeys = Object.keys(products);
          if (objectKeys.length > 0 && objectKeys.every((key) => !isNaN(Number(key)))) {
            const productArray = Object.values(products) as Product[];
            console.log(`✅ Liste des produits convertie depuis objet indexé: ${productArray.length} produits`);
            return productArray;
          }

          const commonProductKeys = ['products', 'data', 'items', 'list', 'gammes'];
          for (const key of commonProductKeys) {
            if ((products as any)[key] && Array.isArray((products as any)[key])) {
              console.log(`✅ Liste des produits trouvée dans ${key}: ${(products as any)[key].length} produits`);
              return (products as any)[key];
            }
          }

          console.log("⚠️ Structure d'objet non reconnue pour products:", products);
          return [];
        }

        console.log("⚠️ response.value n'est ni un tableau ni un objet valide:", typeof products);
        return [];
      } else if (Array.isArray(response)) {
        console.log(`✅ Liste des produits récupérée directement: ${response.length} produits`);
        return response;
      } else {
        console.log('⚠️ Format de réponse inattendu pour products:', response);
        return [];
      }
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des produits:', error);
      throw error;
    }
  }

  public async getProductDocuments(gammeId: number): Promise<ProductDocument[]> {
    try {
      console.log(`📄 Récupération des documents pour le produit ${gammeId}...`);

      if (!gammeId || gammeId <= 0) {
        throw new Error(`ID de gamme invalide: ${gammeId}`);
      }

      const response = await this.makeProxyRequest(
        `/nws/public/v1/api/product/${gammeId}/saledocuments`
      );

      if (response.status && response.value) {
        console.log('✅ Documents du produit récupérés avec succès');
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la récupération des documents');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des documents:', error);
      throw error;
    }
  }

  public async getDocumentContent(gammeId: number, documentId: number): Promise<string> {
    try {
      console.log(`📄 Récupération du contenu du document ${documentId}...`);
      const response = await this.makeProxyRequest(
        `/nws/public/v1/api/product/${gammeId}/saledocumentcontent/${documentId}`
      );

      if (response.status && response.value) {
        console.log('✅ Contenu du document récupéré avec succès');
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la récupération du contenu');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la récupération du contenu:', error);
      throw error;
    }
  }

  public async downloadDocument(
    gammeId: number,
    documentId: number,
    filename: string
  ): Promise<void> {
    try {
      const base64Content = await this.getDocumentContent(gammeId, documentId);

      const byteCharacters = atob(base64Content);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      console.log('✅ Document téléchargé avec succès:', filename);
    } catch (error) {
      console.error('❌ Erreur lors du téléchargement du document:', error);
      throw error;
    }
  }

  // === API SOUSCRIPTION ===

  public async createCart(cartData: CartRequest): Promise<any> {
    try {
      console.log('🛒 Création du panier...');
      console.log('📤 Données du panier:', JSON.stringify(cartData, null, 2));
      const response = await this.makeProxyRequest(
        '/nws/public/v1/api/cart',
        'POST',
        cartData
      );

      if (response.status && response.value) {
        console.log('✅ Panier créé avec succès, lead_id:', response.value.lead_id);
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la création du panier');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la création du panier:', error);
      throw error;
    }
  }

  public async createSubscription(subscriptionData: SubscriptionRequest): Promise<any> {
    try {
      console.log('📝 Création de la souscription...');
      console.log('📤 Données de souscription:', JSON.stringify(subscriptionData, null, 2));
      const response = await this.makeProxyRequest(
        '/nws/public/v1/api/subscription',
        'POST',
        subscriptionData
      );

      if (response.status && response.value) {
        console.log('✅ Souscription créée avec succès, id:', response.value.id);
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la création de la souscription');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la création de la souscription:', error);
      throw error;
    }
  }

  public async submitStepConcern(
    subId: string,
    stepId: string,
    concernData: StepConcernRequest
  ): Promise<any> {
    try {
      console.log('👥 Soumission des informations adhérents...');
      console.log('📤 Données stepconcern:', JSON.stringify(concernData, null, 2));
      const response = await this.makeProxyRequest(
        `/nws/public/v1/api/subscription/${subId}/stepconcern/${stepId}`,
        'PUT',
        concernData
      );

      if (response.status && response.value) {
        console.log('✅ Informations adhérents soumises avec succès');
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la soumission des informations adhérents');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la soumission des informations adhérents:', error);
      throw error;
    }
  }

  public async submitStepBank(
    subId: string,
    stepId: string,
    bankData: StepBankRequest
  ): Promise<any> {
    try {
      console.log('🏦 Soumission des informations bancaires...');
      console.log('📤 Données stepbank:', JSON.stringify(bankData, null, 2));
      const response = await this.makeProxyRequest(
        `/nws/public/v1/api/subscription/${subId}/stepbank/${stepId}`,
        'PUT',
        bankData
      );

      if (response.status && response.value) {
        console.log('✅ Informations bancaires soumises avec succès');
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la soumission des informations bancaires');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la soumission des informations bancaires:', error);
      throw error;
    }
  }

  public async getSubscription(subId: string): Promise<any> {
    try {
      console.log("📋 Récupération de l'état de la souscription...");
      const response = await this.makeProxyRequest(`/nws/public/v1/api/subscription/${subId}`);

      if (response.status && response.value) {
        console.log('✅ État de la souscription récupéré avec succès');
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la récupération de la souscription');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la récupération de la souscription:', error);
      throw error;
    }
  }

  public async uploadDocument(subId: string, documentData: any): Promise<any> {
    try {
      console.log('📄 Upload de document...');
      const response = await this.makeProxyRequest(
        `/nws/public/v1/api/subscription/${subId}/document`,
        'POST',
        documentData
      );

      if (response.status && response.value) {
        console.log('✅ Document uploadé avec succès');
        return response.value;
      } else {
        throw new Error("Réponse invalide lors de l'upload du document");
      }
    } catch (error) {
      console.error("❌ Erreur lors de l'upload du document:", error);
      throw error;
    }
  }

  public async validateContract(contractId: string): Promise<any> {
    try {
      console.log('✅ Validation du contrat...');
      const response = await this.makeProxyRequest(
        `/nws/public/v1/api/contract/${contractId}/validate`,
        'PUT',
        []
      );

      if (response.status && response.value) {
        console.log('✅ Contrat validé avec succès');
        return response.value;
      } else {
        throw new Error('Réponse invalide lors de la validation du contrat');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la validation du contrat:', error);
      throw error;
    }
  }

  public async getPrefilledDocuments(subId: string): Promise<Blob> {
    try {
      console.log('📄 Récupération des documents pré-remplis...');

      const token = await this.getAccessToken();
      if (!token) {
        throw new Error("Impossible d'obtenir un token d'authentification");
      }

      const requestData = {
        action: 'download_documents',
        subscription_id: subId,
        access_token: token,
      };

      const response = await fetch(this.proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des documents: ${response.status}`);
      }

      console.log('✅ Documents pré-remplis récupérés avec succès');
      return await response.blob();
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des documents pré-remplis:', error);
      throw error;
    }
  }

  private formatDateEffect(dateString: string): { year: number; month: number; day: number } {
    console.log(`📅 Formatage de la date: "${dateString}"`);

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      throw new Error('Format de date invalide. Utilisez le format YYYY-MM-DD');
    }

    const [yearStr, monthStr, dayStr] = dateString.split('-');

    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10);
    const day = parseInt(dayStr, 10);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      throw new Error('Date invalide: impossible de convertir en nombres');
    }

    if (month < 1 || month > 12) {
      throw new Error('Mois invalide: doit être entre 1 et 12');
    }

    if (day < 1 || day > 31) {
      throw new Error('Jour invalide: doit être entre 1 et 31');
    }

    const effetDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (effetDate <= today) {
      throw new Error("La date d'effet doit être postérieure à aujourd'hui");
    }

    const result = { year, month, day };
    console.log('📅 Date formatée avec succès:', result);
    console.log(`📅 Types: year=${typeof result.year}, month=${typeof result.month}, day=${typeof result.day}`);

    return result;
  }

  private calculatePriceWithBeneficiaries(
    basePrice: number,
    conjoint?: any,
    enfants?: any[]
  ): number {
    let totalPrice = basePrice;

    if (conjoint && conjoint.anneeNaissance) {
      const conjointAge = new Date().getFullYear() - parseInt(conjoint.anneeNaissance);
      let conjointMultiplier = 0.8;

      if (conjointAge > 50) {
        conjointMultiplier = 0.9;
      } else if (conjointAge > 60) {
        conjointMultiplier = 1.0;
      }

      totalPrice += basePrice * conjointMultiplier;
    }

    if (enfants && enfants.length > 0) {
      enfants.forEach((enfant) => {
        if (enfant.anneeNaissance) {
          const enfantAge = new Date().getFullYear() - parseInt(enfant.anneeNaissance);
          let enfantMultiplier = 0.3;

          if (enfantAge > 18) {
            enfantMultiplier = 0.5;
          }

          totalPrice += basePrice * enfantMultiplier;
        }
      });
    }

    return totalPrice;
  }

  public async getTarification(request: TarificationRequest): Promise<TarificationResponse> {
    try {
      console.log("💰 Récupération des offres RÉELLES depuis l'API Neoliane...");
      console.log('📋 Paramètres:', request);

      try {
        this.formatDateEffect(request.dateEffet);
      } catch (error: any) {
        throw new Error(`Erreur de date: ${error.message}`);
      }

      console.log("📦 Récupération de la liste des produits depuis l'API...");
      const products = await this.getProducts();
      console.log(`✅ ${products ? products.length : 0} produits récupérés depuis l'API Neoliane`);

      if (!products || !Array.isArray(products) || products.length === 0) {
        console.log("⚠️ Aucun produit récupéré de l'API, utilisation du fallback");
        return this.getFallbackOffres(request);
      }

      const healthProducts = products.filter(
        (product) =>
          product.type === 'sante' ||
          (product.gammeLabel &&
            (product.gammeLabel.toLowerCase().includes('santé') ||
              product.gammeLabel.toLowerCase().includes('sante')))
      );

      console.log(`🏥 ${healthProducts.length} produits santé trouvés:`, healthProducts.map((p) => p.gammeLabel));

      const productsToUse = healthProducts.length > 0 ? healthProducts : products;

      const age = new Date().getFullYear() - request.anneeNaissance;
      const basePrice = this.calculateBasePrice(age, request.regime);

      const offres: Offre[] = [];

      for (const product of productsToUse) {
        if (!product.gammeLabel) continue;

        let priceMultiplier = 1.0;
        let garanties: Array<{ nom: string; niveau: string }> = [];

        const productName = product.gammeLabel.toLowerCase();

        if (productName.includes('dynamique')) {
          priceMultiplier = 0.8;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '80%' },
            { nom: 'Pharmacie', niveau: '70%' },
            { nom: 'Analyses', niveau: '80%' },
          ];
        } else if (productName.includes('hospisanté')) {
          priceMultiplier = 0.9;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '85%' },
            { nom: 'Pharmacie', niveau: '75%' },
            { nom: 'Analyses', niveau: '85%' },
          ];
        } else if (productName.includes('innov')) {
          priceMultiplier = 1.1;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '85%' },
            { nom: 'Optique', niveau: '200€/an' },
            { nom: 'Analyses', niveau: '100%' },
          ];
        } else if (productName.includes('performance')) {
          priceMultiplier = 1.3;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '100%' },
            { nom: 'Optique', niveau: '300€/an' },
            { nom: 'Dentaire', niveau: '150%' },
            { nom: 'Analyses', niveau: '100%' },
          ];
        } else if (productName.includes('plénitude')) {
          priceMultiplier = 1.5;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '100%' },
            { nom: 'Optique', niveau: '400€/an' },
            { nom: 'Dentaire', niveau: '200%' },
            { nom: 'Analyses', niveau: '100%' },
            { nom: 'Médecines douces', niveau: '200€/an' },
          ];
        } else if (productName.includes('quiétude')) {
          priceMultiplier = 1.7;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '100%' },
            { nom: 'Optique', niveau: '500€/an' },
            { nom: 'Dentaire', niveau: '250%' },
            { nom: 'Analyses', niveau: '100%' },
            { nom: 'Médecines douces', niveau: '300€/an' },
            { nom: 'Cure thermale', niveau: '200€/an' },
          ];
        } else if (productName.includes('optima')) {
          priceMultiplier = 2.0;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '100%' },
            { nom: 'Optique', niveau: '700€/an' },
            { nom: 'Dentaire', niveau: '300%' },
            { nom: 'Analyses', niveau: '100%' },
            { nom: 'Médecines douces', niveau: '400€/an' },
            { nom: 'Cure thermale', niveau: '300€/an' },
            { nom: 'Chambre particulière', niveau: 'Illimitée' },
          ];
        } else if (productName.includes('altosanté')) {
          priceMultiplier = 2.3;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '100%' },
            { nom: 'Optique', niveau: '900€/an' },
            { nom: 'Dentaire', niveau: '400%' },
            { nom: 'Analyses', niveau: '100%' },
            { nom: 'Médecines douces', niveau: '500€/an' },
            { nom: 'Cure thermale', niveau: '400€/an' },
            { nom: 'Chambre particulière', niveau: 'Illimitée' },
            { nom: 'Assistance internationale', niveau: 'Incluse' },
          ];
        } else if (productName.includes('pulse')) {
          priceMultiplier = 1.2;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '90%' },
            { nom: 'Optique', niveau: '250€/an' },
            { nom: 'Dentaire', niveau: '120%' },
            { nom: 'Analyses', niveau: '100%' },
            { nom: 'Sport santé', niveau: '100€/an' },
          ];
        } else if (productName.includes('énergik') || productName.includes('energik')) {
          priceMultiplier = 1.4;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '100%' },
            { nom: 'Optique', niveau: '350€/an' },
            { nom: 'Dentaire', niveau: '180%' },
            { nom: 'Analyses', niveau: '100%' },
            { nom: 'Médecines douces', niveau: '250€/an' },
            { nom: 'Sport santé', niveau: '200€/an' },
          ];
        } else {
          priceMultiplier = 1.0;
          garanties = [
            { nom: 'Hospitalisation', niveau: '100%' },
            { nom: 'Médecine courante', niveau: '100%' },
            { nom: 'Pharmacie', niveau: '80%' },
            { nom: 'Analyses', niveau: '100%' },
          ];
        }

        const prixFinal = this.calculatePriceWithBeneficiaries(
          basePrice * priceMultiplier,
          request.conjoint,
          request.enfants
        );

        offres.push({
          nom: product.gammeLabel,
          prix: Math.round(prixFinal * 100) / 100,
          product_id: product.gammeId.toString(),
          formula_id: `formula_${product.gammeId}`,
          gammeId: product.gammeId,
          garanties: garanties,
        });
      }

      offres.sort((a, b) => a.prix - b.prix);

      console.log(`✅ ${offres.length} offres RÉELLES générées depuis l'API Neoliane`);

      return {
        success: true,
        offres,
      };
    } catch (error: any) {
      console.error('❌ Erreur lors de la tarification:', error);
      console.log('🔄 Fallback vers les offres simulées...');
      return this.getFallbackOffres(request);
    }
  }

  private getFallbackOffres(request: TarificationRequest): TarificationResponse {
    console.log('🔄 Génération des offres de fallback...');

    const age = new Date().getFullYear() - request.anneeNaissance;
    const basePrice = this.calculateBasePrice(age, request.regime);

    const formules = [
      {
        nom: 'Formule Essentielle',
        multiplier: 0.7,
        product_id: '538',
        formula_id: '3847',
        gammeId: 538,
        garanties: [
          { nom: 'Hospitalisation', niveau: '100%' },
          { nom: 'Médecine courante', niveau: '70%' },
          { nom: 'Pharmacie', niveau: '65%' },
          { nom: 'Analyses et examens', niveau: '70%' },
        ],
      },
      {
        nom: 'Formule Confort',
        multiplier: 1.0,
        product_id: '539',
        formula_id: '3848',
        gammeId: 539,
        garanties: [
          { nom: 'Hospitalisation', niveau: '100%' },
          { nom: 'Médecine courante', niveau: '100%' },
          { nom: 'Pharmacie', niveau: '80%' },
          { nom: 'Optique', niveau: '150€/an' },
          { nom: 'Analyses et examens', niveau: '100%' },
        ],
      },
      {
        nom: 'Formule Premium',
        multiplier: 1.4,
        product_id: '540',
        formula_id: '3849',
        gammeId: 540,
        garanties: [
          { nom: 'Hospitalisation', niveau: '100%' },
          { nom: 'Médecine courante', niveau: '100%' },
          { nom: 'Pharmacie', niveau: '100%' },
          { nom: 'Optique', niveau: '300€/an' },
          { nom: 'Dentaire', niveau: '200%' },
          { nom: 'Analyses et examens', niveau: '100%' },
          { nom: 'Médecines douces', niveau: '150€/an' },
        ],
      },
    ];

    const offres: Offre[] = formules.map((formule) => {
      const prixFinal = this.calculatePriceWithBeneficiaries(
        basePrice * formule.multiplier,
        request.conjoint,
        request.enfants
      );

      return {
        nom: formule.nom,
        prix: Math.round(prixFinal * 100) / 100,
        product_id: formule.product_id,
        formula_id: formule.formula_id,
        gammeId: formule.gammeId,
        garanties: formule.garanties,
      };
    });

    return {
      success: true,
      offres,
      message: 'Offres de fallback (API temporairement indisponible)',
    };
  }

  private calculateBasePrice(age: number, regime: string): number {
    let basePrice = 45;

    if (age < 25) {
      basePrice *= 0.8;
    } else if (age < 35) {
      basePrice *= 0.9;
    } else if (age < 45) {
      basePrice *= 1.0;
    } else if (age < 55) {
      basePrice *= 1.2;
    } else if (age < 65) {
      basePrice *= 1.5;
    } else {
      basePrice *= 2.0;
    }

    switch (regime) {
      case 'TNS Indépendant':
        basePrice *= 1.1;
        break;
      case 'Retraité salarié':
      case 'Retraité TNS':
        basePrice *= 1.3;
        break;
      case 'Etudiant':
        basePrice *= 0.7;
        break;
      case 'Sans emploi':
        basePrice *= 0.8;
        break;
    }

    return basePrice;
  }

  public async startSubscriptionFlow(
    selectedOffre: Offre,
    request: TarificationRequest
  ): Promise<SubscriptionFlowState> {
    try {
      console.log('🚀 Démarrage du processus de souscription...');
      console.log('📦 Offre sélectionnée:', selectedOffre);
      console.log('📋 Paramètres de la demande:', request);

      const dateEffect = this.formatDateEffect(request.dateEffet);
      console.log("📅 Date formatée pour l'API:", dateEffect);

      const cartData: CartRequest = {
        total_amount: selectedOffre.prix.toString(),
        profile: {
          date_effect: dateEffect,
          zipcode: request.codePostal,
          members: [
            {
              concern: 'a1',
              birthyear: request.anneeNaissance.toString(),
              regime: this.mapRegimeToApiValue(request.regime),
              products: [
                {
                  product_id: selectedOffre.product_id || '538',
                  formula_id: selectedOffre.formula_id || '3847',
                },
              ],
            },
          ],
        },
      };

      console.log('🛒 Création du panier avec les données:', JSON.stringify(cartData, null, 2));
      console.log("📅 Date formatée envoyée à l'API:", cartData.profile.date_effect);

      const cartResult = await this.createCart(cartData);

      const subscriptionData: SubscriptionRequest = {
        lead_id: cartResult.lead_id,
        signtype: '1',
        features: ['CANCELLATION_LETTER_BETA'],
      };

      console.log('📝 Création de la souscription avec les données:', subscriptionData);
      const subscriptionResult = await this.createSubscription(subscriptionData);

      return {
        step: 'stepconcern',
        lead_id: cartResult.lead_id,
        subscription_id: subscriptionResult.id,
        token: cartResult.token,
        currentstep: subscriptionResult.currentstep,
        totalstep: subscriptionResult.totalstep,
      };
    } catch (error) {
      console.error('❌ Erreur lors du démarrage du processus de souscription:', error);
      throw error;
    }
  }

  private mapRegimeToApiValue(regime: string): string {
    const regimeMap: { [key: string]: string } = {
      Salarié: '1',
      'TNS Indépendant': '2',
      'Exploitant agricole': '3',
      'Retraité salarié': '4',
      'Retraité TNS': '5',
      Etudiant: '6',
      'Sans emploi': '7',
      'Alsace-Moselle': '8',
      Fonctionnaire: '9',
      Enseignant: '10',
      Expatrié: '11',
      'Salarié Agricole': '12',
    };

    const mappedValue = regimeMap[regime];
    console.log(`🔄 Mapping régime: "${regime}" -> "${mappedValue}"`);

    if (!mappedValue) {
      console.warn(`⚠️ Régime non reconnu: "${regime}", utilisation de la valeur par défaut "1"`);
      return '1';
    }

    return mappedValue;
  }

  public mapCSP(regime: string): string {
    const cspMap: { [key: string]: string } = {
      Salarié: '11',
      'TNS Indépendant': '16',
      'Exploitant agricole': '16',
      'Retraité salarié': '20',
      'Retraité TNS': '26',
      Etudiant: '23',
      'Sans emploi': '27',
      'Alsace-Moselle': '11',
      Fonctionnaire: '13',
      Enseignant: '13',
      Expatrié: '27',
      'Salarié Agricole': '11',
    };

    const mappedValue = cspMap[regime];
    console.log(`🔄 Mapping CSP: "${regime}" -> "${mappedValue}"`);

    return mappedValue || '11';
  }

  public setUserKey(userKey: string) {
    console.log('ℹ️ La clé API est maintenant intégrée directement dans le service');
  }

  public getAuthStatus(): { isDemo: boolean; hasUserKey: boolean; hasToken: boolean } {
    return {
      isDemo: false,
      hasUserKey: true,
      hasToken: !!this.accessToken && Date.now() < this.tokenExpiry - 300000,
    };
  }

  public async testAuthentication(): Promise<boolean> {
    try {
      console.log('🧪 Test d\'authentification via proxy...');
      const token = await this.getAccessToken();
      const isAuthenticated = !!token;
      console.log(`🧪 Résultat du test: ${isAuthenticated ? 'Succès' : 'Échec'}`);
      return isAuthenticated;
    } catch (error) {
      console.error('❌ Test d\'authentification échoué:', error);
      return false;
    }
  }
}

export const neolianeService = new NeolianeService();

