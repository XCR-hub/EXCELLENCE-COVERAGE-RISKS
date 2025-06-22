import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsMap {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

const DecennaleBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Map of paths to their display names and parent paths
  const breadcrumbsMap: BreadcrumbsMap = {
    'assurance-decennale': { label: 'Assurance Décennale' },
    'assurance-decennale-macon': { label: 'Assurance Décennale Maçon', parent: 'assurance-decennale' },
    'assurance-decennale-electricien': { label: 'Assurance Décennale Électricien', parent: 'assurance-decennale' },
    'assurance-decennale-plombier': { label: 'Assurance Décennale Plombier', parent: 'assurance-decennale' },
    'assurance-decennale-charpentier': { label: 'Assurance Décennale Charpentier', parent: 'assurance-decennale' },
    'assurance-decennale-couvreur': { label: 'Assurance Décennale Couvreur', parent: 'assurance-decennale' },
    'assurance-decennale-chauffagiste': { label: 'Assurance Décennale Chauffagiste', parent: 'assurance-decennale' },
    'assurance-decennale-menuisier': { label: 'Assurance Décennale Menuisier', parent: 'assurance-decennale' },
    'assurance-decennale-carreleur': { label: 'Assurance Décennale Carreleur', parent: 'assurance-decennale' },
    'assurance-decennale-terrassier': { label: 'Assurance Décennale Terrassier', parent: 'assurance-decennale' },
    'assurance-decennale-betonneur': { label: 'Assurance Décennale Bétonneur', parent: 'assurance-decennale' },
    'assurance-decennale-ferrailleur': { label: 'Assurance Décennale Ferrailleur', parent: 'assurance-decennale' },
    'assurance-decennale-demolisseur': { label: 'Assurance Décennale Démolisseur', parent: 'assurance-decennale' },
    'assurance-decennale-plaquiste': { label: 'Assurance Décennale Plaquiste', parent: 'assurance-decennale' },
    'assurance-decennale-peintre': { label: 'Assurance Décennale Peintre', parent: 'assurance-decennale' },
    'assurance-decennale-platrier': { label: 'Assurance Décennale Platrier', parent: 'assurance-decennale' },
    'assurance-decennale-solier': { label: 'Assurance Décennale Solier', parent: 'assurance-decennale' },
    'assurance-decennale-cuisiniste': { label: 'Assurance Décennale Cuisiniste', parent: 'assurance-decennale' },
    'assurance-decennale-serrurier': { label: 'Assurance Décennale Serrurier', parent: 'assurance-decennale' },
    'assurance-decennale-etancheur': { label: 'Assurance Décennale Étancheur', parent: 'assurance-decennale' },
    'assurance-decennale-isolateur': { label: 'Assurance Décennale Isolateur', parent: 'assurance-decennale' },
    'assurance-decennale-ravaleur': { label: 'Assurance Décennale Ravaleur', parent: 'assurance-decennale' },
    'assurance-decennale-pisciniste': { label: 'Assurance Décennale Pisciniste', parent: 'assurance-decennale' },
    'assurance-decennale-photovoltaique': { label: 'Assurance Décennale Installateur Photovoltaïque', parent: 'assurance-decennale' },
    'assurance-decennale-ascensoriste': { label: 'Assurance Décennale Ascensoriste', parent: 'assurance-decennale' },
    'assurance-decennale-antenniste': { label: 'Assurance Décennale Antenniste', parent: 'assurance-decennale' },
    'assurance-decennale-alarme-securite': { label: 'Assurance Décennale Alarme & Sécurité', parent: 'assurance-decennale' },
    'assurance-decennale-automatisme': { label: 'Assurance Décennale Automatisme', parent: 'assurance-decennale' }
  };
  
  // Build breadcrumbs array
  const breadcrumbs: { path: string; label: string }[] = [];
  
  // Add home
  breadcrumbs.push({ path: '/', label: 'Accueil' });
  
  // Process path segments
  let currentPath = '';
  
  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    currentPath += `/${segment}`;
    
    // For direct children of assurance-decennale, add the parent first if not already added
    if (breadcrumbsMap[segment]?.parent && !currentPath.includes(breadcrumbsMap[segment].parent)) {
      const parentPath = `/${breadcrumbsMap[segment].parent}`;
      breadcrumbs.push({ 
        path: parentPath, 
        label: breadcrumbsMap[breadcrumbsMap[segment].parent].label 
      });
    }
    
    // Add the current segment
    if (breadcrumbsMap[segment]) {
      breadcrumbs.push({ 
        path: currentPath, 
        label: breadcrumbsMap[segment].label 
      });
    } else if (segment.startsWith('assurance-decennale-')) {
      // Handle unknown métier paths
      const metier = segment.replace('assurance-decennale-', '');
      breadcrumbs.push({
        path: currentPath,
        label: `Assurance Décennale ${metier.charAt(0).toUpperCase() + metier.slice(1)}`
      });
    }
  }
  
  // If no breadcrumbs were generated (unknown path), return null
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  return (
    <nav className="bg-gray-100 py-3 px-4 rounded-lg mb-6" aria-label="Fil d'Ariane">
      <ol className="flex flex-wrap items-center text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index === 0 ? (
              <Link 
                to={crumb.path} 
                className="text-primary-600 hover:text-primary-800 transition-colors flex items-center"
                aria-label="Accueil"
              >
                <Home className="h-4 w-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium text-gray-700" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link 
                    to={crumb.path} 
                    className="text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default DecennaleBreadcrumbs;