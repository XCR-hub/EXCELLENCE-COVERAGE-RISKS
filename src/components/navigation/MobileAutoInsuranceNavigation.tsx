import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Car, Truck, Users, Building2, Menu, X } from 'lucide-react';

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
        className="w-full flex items-center justify-between p-3 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-expanded={isOpen}
        aria-controls={`mobile-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-semibold">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      <div 
        id={`mobile-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className={`mt-2 pl-2 space-y-2 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

const MobileAutoInsuranceNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-between w-full p-4 bg-primary-800 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-auto-insurance-menu"
      >
        <div className="flex items-center">
          <Car className="h-5 w-5 mr-2" />
          <span className="font-semibold">Solutions Assurance Auto</span>
        </div>
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      
      <div 
        id="mobile-auto-insurance-menu"
        className={`bg-primary-800 text-white p-4 rounded-lg shadow-lg mb-6 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!isMenuOpen}
      >
        <h2 className="text-xl font-bold mb-4 border-b border-primary-600 pb-2" id="mobile-menu-title">
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
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Assurance Tous Risques
          </Link>
          <Link 
            to="/assurance-auto-au-tiers" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Assurance au Tiers
          </Link>
          <Link 
            to="/assurance-auto-conducteurs-resilies" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Conducteurs Résiliés
          </Link>
          <Link 
            to="/assurance-auto-au-kilometre" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Assurance au Kilomètre
          </Link>
          <Link 
            to="/assurance-auto-jeune-conducteur" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Jeune Conducteur
          </Link>
          <Link 
            to="/assurance-auto-malus" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
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
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Assurance Taxi
          </Link>
          <Link 
            to="/assurance-auto/transport/vtc" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Assurance VTC/Covoiturage
          </Link>
          <Link 
            to="/assurance-auto/transport/voyageurs" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Transport de Voyageurs
          </Link>
          <Link 
            to="/assurance-auto/transport/professionnels-route" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
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
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Flottes Entreprises
          </Link>
          <Link 
            to="/assurance-auto/flottes/transport-marchandises" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Flottes Transport de Marchandises
          </Link>
          <Link 
            to="/assurance-auto/flottes/transport-voyageurs" 
            className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Flottes Transport de Voyageurs
          </Link>
        </NavSection>
        
        <div className="mt-6 pt-4 border-t border-primary-600">
          <Link 
            to="/assurance-auto" 
            className="flex items-center justify-center w-full py-3 bg-secondary-400 hover:bg-secondary-500 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <Building2 className="h-5 w-5 mr-2" />
            Toutes nos solutions auto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileAutoInsuranceNavigation;