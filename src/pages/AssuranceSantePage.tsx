import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { neolianeService, TarificationRequest, Offre, SubscriptionFlowState } from '../services/neolianeService';

const AssuranceSantePage = () => {
  const [formData, setFormData] = useState({
    dateEffet: '',
    codePostal: '',
    anneeNaissance: '',
    regime: 'Salarié'
  });
  const [offers, setOffers] = useState<Offre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<SubscriptionFlowState | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOffers([]);
    setSubscription(null);
    try {
      const req: TarificationRequest = {
        dateEffet: formData.dateEffet,
        codePostal: formData.codePostal,
        anneeNaissance: parseInt(formData.anneeNaissance, 10),
        regime: formData.regime
      };
      const result = await neolianeService.getTarification(req);
      if (result.success) {
        setOffers(result.offres);
      } else {
        setError(result.message || 'Erreur de tarification');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (offre: Offre) => {
    try {
      const req: TarificationRequest = {
        dateEffet: formData.dateEffet,
        codePostal: formData.codePostal,
        anneeNaissance: parseInt(formData.anneeNaissance, 10),
        regime: formData.regime
      };
      const result = await neolianeService.startSubscriptionFlow(offre, req);
      setSubscription(result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Assurance Santé | XCR Courtier</title>
      </Helmet>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold mb-6">Assurance Santé</h1>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
            <div>
              <label className="block text-sm font-medium">Date d'effet</label>
              <input name="dateEffet" type="date" value={formData.dateEffet} onChange={handleChange} required className="border p-2 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Code postal</label>
              <input name="codePostal" value={formData.codePostal} onChange={handleChange} required className="border p-2 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Année de naissance</label>
              <input name="anneeNaissance" value={formData.anneeNaissance} onChange={handleChange} required className="border p-2 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Régime</label>
              <select name="regime" value={formData.regime} onChange={handleChange} className="border p-2 w-full">
                <option>Salarié</option>
                <option>TNS Indépendant</option>
                <option>Exploitant agricole</option>
                <option>Retraité salarié</option>
                <option>Retraité TNS</option>
                <option>Etudiant</option>
                <option>Sans emploi</option>
              </select>
            </div>
            <button type="submit" className="bg-primary-600 text-white px-4 py-2 rounded">Voir les offres</button>
          </form>
          {loading && <p className="mt-4">Chargement...</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {offers.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Offres disponibles</h2>
              {offers.map((offer, idx) => (
                <div key={idx} className="border p-4 mb-4 rounded">
                  <h3 className="font-semibold">{offer.nom}</h3>
                  <p className="mb-2">{offer.prix} € / mois</p>
                  <button onClick={() => handleSubscribe(offer)} className="bg-primary-600 text-white px-3 py-1 rounded">
                    Souscrire
                  </button>
                </div>
              ))}
            </div>
          )}
          {subscription && (
            <div className="mt-8 border p-4 rounded">
              <h2 className="font-bold mb-2">Souscription créée</h2>
              <p>Lead ID : {subscription.lead_id}</p>
              <p>Subscription ID : {subscription.subscription_id}</p>
              <p>Étape : {subscription.step}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AssuranceSantePage;
