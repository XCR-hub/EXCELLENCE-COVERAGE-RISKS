import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Building2, Hammer, HardHat, Wrench, Zap, Droplet, PenTool, Brush } from 'lucide-react';

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

const DecennaleMetierNavigation: React.FC = () => {
  return (
    <nav className="bg-primary-800 text-white p-4 rounded-lg shadow-lg" aria-label="Navigation assurance décennale par métier">
      <h2 className="text-xl font-bold mb-4 border-b border-primary-600 pb-2">
        Assurance Décennale par Métier
      </h2>
      
      {/* Gros Œuvre Section */}
      <NavSection 
        title="Gros Œuvre" 
        icon={<Building2 className="h-5 w-5" />}
        defaultOpen={true}
      >
        <Link 
          to="/assurance-decennale-macon" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Maçon
        </Link>
        <Link 
          to="/assurance-decennale-charpentier" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Charpentier
        </Link>
        <Link 
          to="/assurance-decennale-couvreur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Couvreur
        </Link>
        <Link 
          to="/assurance-decennale-terrassier" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Terrassier
        </Link>
        <Link 
          to="/assurance-decennale-betonneur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Bétonneur
        </Link>
        <Link 
          to="/assurance-decennale-ferrailleur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Ferrailleur
        </Link>
        <Link 
          to="/assurance-decennale-demolisseur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Démolisseur
        </Link>
      </NavSection>
      
      {/* Second Œuvre Section */}
      <NavSection 
        title="Second Œuvre" 
        icon={<Wrench className="h-5 w-5" />}
      >
        <Link 
          to="/assurance-decennale-electricien" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Électricien
        </Link>
        <Link 
          to="/assurance-decennale-plombier" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Plombier
        </Link>
        <Link 
          to="/assurance-decennale-chauffagiste" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Chauffagiste
        </Link>
        <Link 
          to="/assurance-decennale-plaquiste" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Plaquiste
        </Link>
        <Link 
          to="/assurance-decennale-peintre" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Peintre
        </Link>
        <Link 
          to="/assurance-decennale-carreleur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Carreleur
        </Link>
        <Link 
          to="/assurance-decennale-menuisier" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Menuisier
        </Link>
      </NavSection>
      
      {/* Finitions & Aménagement Section */}
      <NavSection 
        title="Finitions & Aménagement" 
        icon={<Brush className="h-5 w-5" />}
      >
        <Link 
          to="/assurance-decennale-platrier" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Platrier
        </Link>
        <Link 
          to="/assurance-decennale-solier" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Solier
        </Link>
        <Link 
          to="/assurance-decennale-cuisiniste" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Cuisiniste
        </Link>
        <Link 
          to="/assurance-decennale-serrurier" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Serrurier
        </Link>
        <Link 
          to="/assurance-decennale-ravaleur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Ravaleur
        </Link>
      </NavSection>
      
      {/* Spécialités Section */}
      <NavSection 
        title="Spécialités" 
        icon={<HardHat className="h-5 w-5" />}
      >
        <Link 
          to="/assurance-decennale-etancheur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Étancheur
        </Link>
        <Link 
          to="/assurance-decennale-isolateur" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Isolateur
        </Link>
        <Link 
          to="/assurance-decennale-pisciniste" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Pisciniste
        </Link>
        <Link 
          to="/assurance-decennale-photovoltaique" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Installateur photovoltaïque
        </Link>
      </NavSection>
      
      {/* Équipements Techniques Section */}
      <NavSection 
        title="Équipements Techniques" 
        icon={<Zap className="h-5 w-5" />}
      >
        <Link 
          to="/assurance-decennale-ascensoriste" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Ascensoriste
        </Link>
        <Link 
          to="/assurance-decennale-antenniste" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Antenniste
        </Link>
        <Link 
          to="/assurance-decennale-alarme-securite" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Alarme & Sécurité
        </Link>
        <Link 
          to="/assurance-decennale-automatisme" 
          className="block py-2 px-3 rounded hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          Automatisme
        </Link>
      </NavSection>
      
      <div className="mt-6 pt-4 border-t border-primary-600">
        <Link 
          to="/assurance-decennale" 
          className="flex items-center justify-center w-full py-3 bg-secondary-400 hover:bg-secondary-500 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:ring-offset-2 focus:ring-offset-primary-800"
        >
          <Building2 className="h-5 w-5 mr-2" />
          Tous les métiers
        </Link>
      </div>
    </nav>
  );
};

export default DecennaleMetierNavigation;