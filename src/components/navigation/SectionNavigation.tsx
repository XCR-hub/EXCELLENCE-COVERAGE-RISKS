import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import {
  SitePageInfo,
  getPagesBySection,
  getCategoryLabel,
} from '../../data/siteStructure';

interface SectionNavigationProps {
  section: 'particuliers' | 'professionnels' | 'entreprises';
  className?: string;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({
  section,
  className = '',
}) => {
  const pages = getPagesBySection(section);

  // Group pages by category
  const groupedPages = {
    personnes: pages.filter((page) => page.category === 'personnes'),
    biens: pages.filter((page) => page.category === 'biens'),
    epargne: pages.filter((page) => page.category === 'epargne'),
    services: pages.filter((page) => page.category === 'services'),
  };

  // Section titles
  const sectionTitles = {
    particuliers: 'Assurances Particuliers',
    professionnels: 'Assurances Professionnels',
    entreprises: 'Assurances Entreprises',
  };

  return (
    <nav
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
      aria-label={`Navigation ${sectionTitles[section]}`}
    >
      <h2 className="text-xl font-bold text-primary-800 mb-6 border-b border-gray-200 pb-3">
        {sectionTitles[section]}
      </h2>

      <div className="space-y-6">
        {Object.entries(groupedPages).map(
          ([category, categoryPages]) =>
            categoryPages.length > 0 && (
              <div key={category} className="space-y-3">
                <h3 className="font-semibold text-primary-700 text-lg">
                  {getCategoryLabel(
                    category as 'personnes' | 'biens' | 'epargne' | 'services'
                  )}
                </h3>

                <ul className="space-y-2">
                  {categoryPages.map((page) => (
                    <li key={page.id}>
                      <Link
                        to={page.path}
                        className="flex items-center py-2 px-3 rounded hover:bg-gray-50 text-gray-700 hover:text-primary-700 transition-colors"
                      >
                        <span className="mr-2">
                          {React.cloneElement(page.icon as React.ReactElement, {
                            className: 'h-5 w-5 text-primary-600',
                          })}
                        </span>
                        <span>{page.title}</span>
                        {page.status === 'coming-soon' && (
                          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            Bientôt
                          </span>
                        )}
                        {page.children && page.children.length > 0 && (
                          <ChevronRight className="ml-auto h-4 w-4 text-gray-400" />
                        )}
                      </Link>

                      {page.children && page.children.length > 0 && (
                        <ul className="pl-10 mt-1 space-y-1">
                          {page.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                to={child.path}
                                className="flex items-center py-1.5 px-3 rounded hover:bg-gray-50 text-gray-600 hover:text-primary-700 transition-colors text-sm"
                              >
                                <span className="mr-2">
                                  {React.cloneElement(
                                    child.icon as React.ReactElement,
                                    { className: 'h-4 w-4 text-primary-500' }
                                  )}
                                </span>
                                <span>{child.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>
    </nav>
  );
};

export default SectionNavigation;