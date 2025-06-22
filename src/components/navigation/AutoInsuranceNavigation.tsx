import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Car, Truck, Users, Building2 } from 'lucide-react';

interface NavSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const NavSection: React.FC<NavSectionProps> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-semibold">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      <div 
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className={`mt-2 pl-2 space-y-2 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

const AutoInsuranceNavigation: React.FC = () => {
  return (
    <nav className="bg-primary-800 text-white p-4 rounded-lg shadow-lg" aria-label="Navigation assurance automobile">
      <h2 className="text-xl font-bold mb-4 border-b border-primary-600 pb-2">
        Nos Solutions Assurance Auto
      </h2>
      
      {/* Personal Auto Section */}
      <NavSection 
        title="Assurance Auto Particuliers" 
        icon={<Car className="h-5 w-5" />}
        defaultOpen={true}
      >
        <Link 
          to="/assurance-auto-tous-risques" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Assurance Tous Risques
        </Link>
        <Link 
          to="/assurance-auto-au-tiers" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Assurance au Tiers
        </Link>
        <Link 
          to="/assurance-auto-conducteurs-resilies" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Conducteurs Résiliés
        </Link>
        <Link 
          to="/assurance-auto-au-kilometre" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Assurance au Kilomètre
        </Link>
        <Link 
          to="/assurance-auto-jeune-conducteur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Jeune Conducteur
        </Link>
        <Link 
          to="/assurance-auto-malus" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Assurance Malus
        </Link>
      </NavSection>
      
      {/* Professional Transport Section */}
      <NavSection 
        title="Transport Professionnel" 
        icon={<Users className="h-5 w-5" />}
      >
        <Link 
          to="/assurance-auto/transport/taxi" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Assurance Taxi
        </Link>
        <Link 
          to="/assurance-auto/transport/vtc" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Assurance VTC/Covoiturage
        </Link>
        <Link 
          to="/assurance-auto/transport/voyageurs" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Transport de Voyageurs
        </Link>
        <Link 
          to="/assurance-auto/transport/professionnels-route" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Professionnels de la Route
        </Link>
      </NavSection>
      
      {/* Fleet Management Section */}
      <NavSection 
        title="Gestion de Flottes" 
        icon={<Truck className="h-5 w-5" />}
      >
        <Link 
          to="/assurance-auto/flottes/compte-propre" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Flottes Entreprises
        </Link>
        <Link 
          to="/assurance-auto/flottes/transport-marchandises" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Flottes Transport de Marchandises
        </Link>
        <Link 
          to="/assurance-auto/flottes/transport-voyageurs" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Flottes Transport de Voyageurs
        </Link>
      </NavSection>
      
      <div className="mt-6 pt-4 border-t border-primary-600">
        <Link 
          to="/assurance-auto" 
          className="flex items-center justify-center w-full py-3 bg-secondary-400 hover:bg-secondary-500 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          <Building2 className="h-5 w-5 mr-2" />
          Toutes nos solutions auto
        </Link>
      </div>
    </nav>
  );
};

export default AutoInsuranceNavigation;