import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsMap {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

const AutoInsuranceBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Map of paths to their display names and parent paths
  const breadcrumbsMap: BreadcrumbsMap = {
    'assurance-auto': { label: 'Assurance Auto' },
    'assurance-auto-tous-risques': { label: 'Assurance Tous Risques', parent: 'assurance-auto' },
    'assurance-auto-au-tiers': { label: 'Assurance au Tiers', parent: 'assurance-auto' },
    'assurance-auto-conducteurs-resilies': { label: 'Conducteurs Résiliés', parent: 'assurance-auto' },
    'assurance-auto-au-kilometre': { label: 'Assurance au Kilomètre', parent: 'assurance-auto' },
    'assurance-auto-jeune-conducteur': { label: 'Jeune Conducteur', parent: 'assurance-auto' },
    'assurance-auto-malus': { label: 'Assurance Malus', parent: 'assurance-auto' },
    
    // Transport section
    'transport': { label: 'Transport Professionnel', parent: 'assurance-auto' },
    'taxi': { label: 'Assurance Taxi', parent: 'transport' },
    'vtc': { label: 'Assurance VTC', parent: 'transport' },
    'voyageurs': { label: 'Transport de Voyageurs', parent: 'transport' },
    'professionnels-route': { label: 'Professionnels de la Route', parent: 'transport' },
    
    // Flottes section
    'flottes': { label: 'Gestion de Flottes', parent: 'assurance-auto' },
    'compte-propre': { label: 'Flottes Entreprises', parent: 'flottes' },
    'transport-marchandises': { label: 'Transport de Marchandises', parent: 'flottes' },
    'transport-voyageurs': { label: 'Transport de Voyageurs', parent: 'flottes' }
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
    
    // Special handling for nested paths
    if (segment === 'transport' || segment === 'flottes') {
      // This is a category, add the parent first
      breadcrumbs.push({ 
        path: '/assurance-auto', 
        label: breadcrumbsMap['assurance-auto'].label 
      });
      
      // Then add the category
      breadcrumbs.push({ 
        path: currentPath, 
        label: breadcrumbsMap[segment].label 
      });
    } 
    // Handle the final segment or direct children of assurance-auto
    else if (i === pathSegments.length - 1 || pathSegments[i-1] === 'transport' || pathSegments[i-1] === 'flottes') {
      // For direct children of assurance-auto, add the parent first if not already added
      if (breadcrumbsMap[segment]?.parent && !currentPath.includes(breadcrumbsMap[segment].parent) && 
          breadcrumbsMap[segment].parent !== 'transport' && breadcrumbsMap[segment].parent !== 'flottes') {
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
      }
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

export default AutoInsuranceBreadcrumbs;