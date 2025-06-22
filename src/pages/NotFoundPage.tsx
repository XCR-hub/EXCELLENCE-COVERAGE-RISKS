import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { MetaTags } from '../components/seo/MetaTags';
import { Button } from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <>
      <MetaTags
        title="Page non trouvée - Erreur 404 | XCR Courtier"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou contactez-nous."
        keywords={["erreur 404", "page non trouvée", "XCR courtier"]}
        canonicalUrl="https://xcr-courtier.fr/404"
      />
      
      <div className="min-h-screen pt-32 pb-12 flex flex-col items-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-9xl font-bold text-primary-800">404</h1>
          <p className="mt-4 text-2xl text-gray-600 text-center">Oups ! La page que vous recherchez semble introuvable.</p>
          
          <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="primary"
              href="/"
              ariaLabel="Retour à l'accueil"
            >
              <Home className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              ariaLabel="Retour à la page précédente"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Page précédente
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;