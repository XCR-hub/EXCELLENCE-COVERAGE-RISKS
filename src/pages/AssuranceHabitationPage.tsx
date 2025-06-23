import React from 'react';
import { Helmet } from 'react-helmet-async';
import InsuranceForm from '../components/forms/InsuranceForm';
import OfficialLinksSection from '../components/common/OfficialLinksSection';

const AssuranceHabitationPage = () => {
  return (
    <>
      <Helmet>
        <title>Assurance Habitation | Devis Gratuit en Ligne | XCR Courtier</title>
        <meta
          name="description"
          content="Obtenez votre devis d'assurance habitation gratuitement avec XCR Courtier. Protégez efficacement votre logement et vos biens."/>
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-habitation" />
      </Helmet>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-primary-800">Assurance Habitation</h1>
          <p className="mb-8 text-gray-700">Pour une couverture complète de votre logement et de vos biens, faites confiance à notre expertise.</p>
          <InsuranceForm type="habitation" />
        </div>
      </section>
      <OfficialLinksSection />
    </>
  );
};

export default AssuranceHabitationPage;
