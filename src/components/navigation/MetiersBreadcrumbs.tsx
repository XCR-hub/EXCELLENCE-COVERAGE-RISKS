import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsMap {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

const MetiersBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Map of paths to their display names and parent paths
  const breadcrumbsMap: BreadcrumbsMap = {
    'metiers': { label: 'Nos Métiers' },
    'courtier-assurance-entreprise': { label: 'Courtier Assurance Entreprise', parent: 'metiers' },
    'courtier-assurance-construction': { label: 'Courtier Assurance Construction', parent: 'metiers' },
    'courtier-assurance-auto': { label: 'Courtier Assurance Auto', parent: 'metiers' },
    'courtier-assurance-sante': { label: 'Courtier Assurance Santé', parent: 'metiers' },
    'courtier-assurance-emprunteur': { label: 'Courtier Assurance Emprunteur', parent: 'metiers' },
    'conseiller-patrimoine': { label: 'Conseiller en Gestion de Patrimoine', parent: 'metiers' },
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
    
    // For direct children of metiers, add the parent first if not already added
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
    } else if (segment.startsWith('courtier-') || segment.startsWith('conseiller-')) {
      // Handle unknown métier paths
      breadcrumbs.push({
        path: currentPath,
        label: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
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

export default MetiersBreadcrumbs;