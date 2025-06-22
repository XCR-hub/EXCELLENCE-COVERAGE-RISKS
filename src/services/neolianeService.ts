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
  // User API key is provided via environment variable for security
  private userKey = import.meta.env.VITE_NEOLIANE_USER_KEY || '';
  private proxyUrl = 'https://evolivie.com/proxy-neoliane.php';
  private accessToken: string | null = null;
  private tokenExpiry = 0;

  constructor() {
    console.log(
      '🔧 Service Neoliane initialisé avec proxy evolivie.com - Version 3.6'
    );
  }

  private async testProxyAvailability(): Promise<boolean> {
    try {
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

      const responseText = await response.text();
      if (
        responseText.trim().startsWith('<!doctype html') ||
        responseText.trim().startsWith('<html')
      ) {
        return false;
      }
      try {
        const data = JSON.parse(responseText);
        return data.success === true;
      } catch {
        return false;
      }
    } catch {
      return false;
    }
  }

  private async getAccessToken(): Promise<string | null> {
    if (this.accessToken && Date.now() < this.tokenExpiry - 300000) {
      return this.accessToken;
    }

    const proxyAvailable = await this.testProxyAvailability();
    if (!proxyAvailable) {
      throw new Error('Proxy Neoliane indisponible');
    }

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

    const responseText = await response.text();
    if (
      responseText.trim().startsWith('<!doctype html') ||
      responseText.trim().startsWith('<html')
    ) {
      throw new Error('Réponse proxy invalide');
    }
    const data = JSON.parse(responseText);
    if (data.success && data.access_token) {
      this.accessToken = data.access_token;
      if (data.expires_in > 1000000000) {
        this.tokenExpiry = data.expires_in * 1000;
      } else {
        this.tokenExpiry = Date.now() + data.expires_in * 1000;
      }
      return this.accessToken;
    }
    throw new Error(data.error || 'Authentification échouée');
  }

  private async makeProxyRequest(
    endpoint: string,
    method: string = 'GET',
    body?: any
  ): Promise<any> {
    const token = await this.getAccessToken();
    if (!token) {
      throw new Error("Impossible d'obtenir de token");
    }

    const requestData = {
      action: 'api_call',
      endpoint,
      method,
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

    const responseText = await response.text();
    if (
      responseText.trim().startsWith('<!doctype html') ||
      responseText.trim().startsWith('<html')
    ) {
      throw new Error('Réponse proxy invalide');
    }

    const data = JSON.parse(responseText);
    if (data.success) {
      return data.data;
    }
    throw new Error(data.error || 'Erreur proxy');
  }

  public async getProducts(): Promise<Product[]> {
    const response = await this.makeProxyRequest('/nws/public/v1/api/products');
    if (response && response.status && response.value) {
      return response.value;
    }
    return [];
  }

  public async getProductDocuments(gammeId: number): Promise<ProductDocument[]> {
    const response = await this.makeProxyRequest(
      `/nws/public/v1/api/product/${gammeId}/saledocuments`
    );
    if (response.status && response.value) {
      return response.value;
    }
    throw new Error('Réponse invalide');
  }

  public async getDocumentContent(
    gammeId: number,
    documentId: number
  ): Promise<string> {
    const response = await this.makeProxyRequest(
      `/nws/public/v1/api/product/${gammeId}/saledocumentcontent/${documentId}`
    );
    if (response.status && response.value) {
      return response.value;
    }
    throw new Error('Réponse invalide');
  }

  public async createCart(cartData: CartRequest): Promise<any> {
    const response = await this.makeProxyRequest(
      '/nws/public/v1/api/cart',
      'POST',
      cartData
    );
    if (response.status && response.value) {
      return response.value;
    }
    throw new Error('Réponse invalide');
  }

  public async createSubscription(subscriptionData: SubscriptionRequest): Promise<any> {
    const response = await this.makeProxyRequest(
      '/nws/public/v1/api/subscription',
      'POST',
      subscriptionData
    );
    if (response.status && response.value) {
      return response.value;
    }
    throw new Error('Réponse invalide');
  }

  public async getSubscription(subId: string): Promise<any> {
    const response = await this.makeProxyRequest(
      `/nws/public/v1/api/subscription/${subId}`
    );
    if (response.status && response.value) {
      return response.value;
    }
    throw new Error('Réponse invalide');
  }

  private formatDateEffect(dateString: string): {
    year: number;
    month: number;
    day: number;
  } {
    const [yearStr, monthStr, dayStr] = dateString.split('-');
    return {
      year: parseInt(yearStr, 10),
      month: parseInt(monthStr, 10),
      day: parseInt(dayStr, 10),
    };
  }

  private calculateBasePrice(age: number, regime: string): number {
    let basePrice = 45;
    if (age < 25) basePrice *= 0.8;
    else if (age < 35) basePrice *= 0.9;
    else if (age < 45) basePrice *= 1.0;
    else if (age < 55) basePrice *= 1.2;
    else if (age < 65) basePrice *= 1.5;
    else basePrice *= 2.0;

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

  private calculatePriceWithBeneficiaries(
    basePrice: number,
    conjoint?: any,
    enfants?: any[]
  ): number {
    let totalPrice = basePrice;
    if (conjoint && conjoint.anneeNaissance) {
      totalPrice += basePrice * 0.8;
    }
    if (enfants && enfants.length > 0) {
      enfants.forEach(() => {
        totalPrice += basePrice * 0.3;
      });
    }
    return totalPrice;
  }

  public async getTarification(
    request: TarificationRequest
  ): Promise<TarificationResponse> {
    try {
      const products = await this.getProducts();
      if (!products || products.length === 0) {
        return this.getFallbackOffres(request);
      }
      const healthProducts = products.filter(
        (p) => p.type === 'sante'
      );
      const productsToUse =
        healthProducts.length > 0 ? healthProducts : products;
      const age = new Date().getFullYear() - request.anneeNaissance;
      const basePrice = this.calculateBasePrice(age, request.regime);
      const offres: Offre[] = [];
      for (const product of productsToUse) {
        if (!product.gammeLabel) continue;
        const prixFinal = this.calculatePriceWithBeneficiaries(basePrice);
        offres.push({
          nom: product.gammeLabel,
          prix: Math.round(prixFinal * 100) / 100,
          product_id: product.gammeId.toString(),
          formula_id: `formula_${product.gammeId}`,
          gammeId: product.gammeId,
          garanties: [],
        });
      }
      offres.sort((a, b) => a.prix - b.prix);
      return {
        success: true,
        offres,
      };
    } catch {
      return this.getFallbackOffres(request);
    }
  }

  private getFallbackOffres(request: TarificationRequest): TarificationResponse {
    const age = new Date().getFullYear() - request.anneeNaissance;
    const basePrice = this.calculateBasePrice(age, request.regime);
    const offres: Offre[] = [
      {
        nom: 'Formule Essentielle',
        prix: basePrice * 0.7,
        product_id: '538',
        formula_id: '3847',
        gammeId: 538,
        garanties: [],
      },
      {
        nom: 'Formule Confort',
        prix: basePrice,
        product_id: '539',
        formula_id: '3848',
        gammeId: 539,
        garanties: [],
      },
      {
        nom: 'Formule Premium',
        prix: basePrice * 1.4,
        product_id: '540',
        formula_id: '3849',
        gammeId: 540,
        garanties: [],
      },
    ];
    return { success: true, offres };
  }

  public async startSubscriptionFlow(
    selectedOffre: Offre,
    request: TarificationRequest
  ): Promise<SubscriptionFlowState> {
    const dateEffect = this.formatDateEffect(request.dateEffet);
    const cartData: CartRequest = {
      total_amount: selectedOffre.prix.toString(),
      profile: {
        date_effect: dateEffect,
        zipcode: request.codePostal,
        members: [
          {
            concern: 'a1',
            birthyear: request.anneeNaissance.toString(),
            regime: '1',
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
    const cartResult = await this.createCart(cartData);
    const subscriptionData: SubscriptionRequest = {
      lead_id: cartResult.lead_id,
      signtype: '1',
      features: ['CANCELLATION_LETTER_BETA'],
    };
    const subscriptionResult = await this.createSubscription(subscriptionData);
    return {
      step: 'stepconcern',
      lead_id: cartResult.lead_id,
      subscription_id: subscriptionResult.id,
      token: cartResult.token,
      currentstep: subscriptionResult.currentstep,
      totalstep: subscriptionResult.totalstep,
    };
  }
}

export const neolianeService = new NeolianeService();
