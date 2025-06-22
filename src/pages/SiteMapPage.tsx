import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Briefcase,
  Building2,
  ChevronRight,
  Heart,
  Shield,
  Wallet,
  FileText,
  Users,
} from 'lucide-react';
import {
  siteStructure,
  getCategoryLabel,
  getSectionLabel,
} from '../data/siteStructure';

const SiteMapPage = () => {
  // Group pages by section and category
  const groupedPages = {
    particuliers: {
      personnes: siteStructure.filter(
        (page) =>
          page.section === 'particuliers' && page.category === 'personnes'
      ),
      biens: siteStructure.filter(
        (page) => page.section === 'particuliers' && page.category === 'biens'
      ),
      epargne: siteStructure.filter(
        (page) => page.section === 'particuliers' && page.category === 'epargne'
      ),
      services: siteStructure.filter(
        (page) =>
          page.section === 'particuliers' && page.category === 'services'
      ),
    },
    professionnels: {
      personnes: siteStructure.filter(
        (page) =>
          page.section === 'professionnels' && page.category === 'personnes'
      ),
      biens: siteStructure.filter(
        (page) => page.section === 'professionnels' && page.category === 'biens'
      ),
      epargne: siteStructure.filter(
        (page) =>
          page.section === 'professionnels' && page.category === 'epargne'
      ),
      services: siteStructure.filter(
        (page) =>
          page.section === 'professionnels' && page.category === 'services'
      ),
    },
    entreprises: {
      personnes: siteStructure.filter(
        (page) =>
          page.section === 'entreprises' && page.category === 'personnes'
      ),
      biens: siteStructure.filter(
        (page) => page.section === 'entreprises' && page.category === 'biens'
      ),
      epargne: siteStructure.filter(
        (page) => page.section === 'entreprises' && page.category === 'epargne'
      ),
      services: siteStructure.filter(
        (page) => page.section === 'entreprises' && page.category === 'services'
      ),
    },
  };

  // Section icons
  const sectionIcons = {
    particuliers: <Home className="h-6 w-6" />,
    professionnels: <Briefcase className="h-6 w-6" />,
    entreprises: <Building2 className="h-6 w-6" />,
  };

  // Category icons
  const categoryIcons = {
    personnes: <Heart className="h-5 w-5" />,
    biens: <Shield className="h-5 w-5" />,
    epargne: <Wallet className="h-5 w-5" />,
    services: <FileText className="h-5 w-5" />,
  };

  return (
    <>
      <Helmet>
        <title>Plan du site | XCR Courtier</title>
        <meta
          name="description"
          content="Consultez le plan du site XCR Courtier pour accéder facilement à toutes nos pages d'assurance pour particuliers, professionnels et entreprises."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://xcr-courtier.fr/sitemap" />
      </Helmet>

      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
              Plan du site
            </h1>

            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="flex items-center mb-6">
                <Link
                  to="/"
                  className="text-primary-600 hover:text-primary-800"
                >
                  Accueil
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                <span className="text-gray-600">Plan du site</span>
              </div>

              <div className="space-y-12">
                {/* Particuliers */}
                <section>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      {sectionIcons.particuliers}
                    </div>
                    <h2 className="text-2xl font-bold text-primary-800">
                      {getSectionLabel('particuliers')}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 pl-4 md:pl-12">
                    {Object.entries(groupedPages.particuliers).map(
                      ([category, pages]) =>
                        pages.length > 0 && (
                          <div key={category} className="space-y-4">
                            <div className="flex items-center">
                              <div className="bg-primary-50 p-1.5 rounded-full mr-2">
                                {
                                  categoryIcons[
                                    category as keyof typeof categoryIcons
                                  ]
                                }
                              </div>
                              <h3 className="text-lg font-semibold text-primary-700">
                                {getCategoryLabel(
                                  category as
                                    | 'personnes'
                                    | 'biens'
                                    | 'epargne'
                                    | 'services'
                                )}
                              </h3>
                            </div>

                            <ul className="space-y-2 pl-9">
                              {pages.map((page) => (
                                <li key={page.id}>
                                  <Link
                                    to={page.path}
                                    className="text-gray-700 hover:text-primary-600 flex items-center"
                                  >
                                    <span className="mr-2">
                                      {React.cloneElement(
                                        page.icon as React.ReactElement,
                                        { className: 'h-4 w-4' }
                                      )}
                                    </span>
                                    <span>{page.title}</span>
                                    {page.status === 'coming-soon' && (
                                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                        Bientôt
                                      </span>
                                    )}
                                  </Link>

                                  {page.children &&
                                    page.children.length > 0 && (
                                      <ul className="pl-6 mt-2 space-y-1">
                                        {page.children.map((child) => (
                                          <li key={child.id}>
                                            <Link
                                              to={child.path}
                                              className="text-gray-600 hover:text-primary-600 flex items-center text-sm"
                                            >
                                              <span className="mr-2">
                                                {React.cloneElement(
                                                  child.icon as React.ReactElement,
                                                  { className: 'h-3.5 w-3.5' }
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
                </section>

                {/* Professionnels */}
                <section>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      {sectionIcons.professionnels}
                    </div>
                    <h2 className="text-2xl font-bold text-primary-800">
                      {getSectionLabel('professionnels')}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 pl-4 md:pl-12">
                    {Object.entries(groupedPages.professionnels).map(
                      ([category, pages]) =>
                        pages.length > 0 && (
                          <div key={category} className="space-y-4">
                            <div className="flex items-center">
                              <div className="bg-primary-50 p-1.5 rounded-full mr-2">
                                {
                                  categoryIcons[
                                    category as keyof typeof categoryIcons
                                  ]
                                }
                              </div>
                              <h3 className="text-lg font-semibold text-primary-700">
                                {getCategoryLabel(
                                  category as
                                    | 'personnes'
                                    | 'biens'
                                    | 'epargne'
                                    | 'services'
                                )}
                              </h3>
                            </div>

                            <ul className="space-y-2 pl-9">
                              {pages.map((page) => (
                                <li key={page.id}>
                                  <Link
                                    to={page.path}
                                    className="text-gray-700 hover:text-primary-600 flex items-center"
                                  >
                                    <span className="mr-2">
                                      {React.cloneElement(
                                        page.icon as React.ReactElement,
                                        { className: 'h-4 w-4' }
                                      )}
                                    </span>
                                    <span>{page.title}</span>
                                    {page.status === 'coming-soon' && (
                                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                        Bientôt
                                      </span>
                                    )}
                                  </Link>

                                  {page.children &&
                                    page.children.length > 0 && (
                                      <ul className="pl-6 mt-2 space-y-1">
                                        {page.children.map((child) => (
                                          <li key={child.id}>
                                            <Link
                                              to={child.path}
                                              className="text-gray-600 hover:text-primary-600 flex items-center text-sm"
                                            >
                                              <span className="mr-2">
                                                {React.cloneElement(
                                                  child.icon as React.ReactElement,
                                                  { className: 'h-3.5 w-3.5' }
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
                </section>

                {/* Entreprises */}
                <section>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      {sectionIcons.entreprises}
                    </div>
                    <h2 className="text-2xl font-bold text-primary-800">
                      {getSectionLabel('entreprises')}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 pl-4 md:pl-12">
                    {Object.entries(groupedPages.entreprises).map(
                      ([category, pages]) =>
                        pages.length > 0 && (
                          <div key={category} className="space-y-4">
                            <div className="flex items-center">
                              <div className="bg-primary-50 p-1.5 rounded-full mr-2">
                                {
                                  categoryIcons[
                                    category as keyof typeof categoryIcons
                                  ]
                                }
                              </div>
                              <h3 className="text-lg font-semibold text-primary-700">
                                {getCategoryLabel(
                                  category as
                                    | 'personnes'
                                    | 'biens'
                                    | 'epargne'
                                    | 'services'
                                )}
                              </h3>
                            </div>

                            <ul className="space-y-2 pl-9">
                              {pages.map((page) => (
                                <li key={page.id}>
                                  <Link
                                    to={page.path}
                                    className="text-gray-700 hover:text-primary-600 flex items-center"
                                  >
                                    <span className="mr-2">
                                      {React.cloneElement(
                                        page.icon as React.ReactElement,
                                        { className: 'h-4 w-4' }
                                      )}
                                    </span>
                                    <span>{page.title}</span>
                                    {page.status === 'coming-soon' && (
                                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                        Bientôt
                                      </span>
                                    )}
                                  </Link>

                                  {page.children &&
                                    page.children.length > 0 && (
                                      <ul className="pl-6 mt-2 space-y-1">
                                        {page.children.map((child) => (
                                          <li key={child.id}>
                                            <Link
                                              to={child.path}
                                              className="text-gray-600 hover:text-primary-600 flex items-center text-sm"
                                            >
                                              <span className="mr-2">
                                                {React.cloneElement(
                                                  child.icon as React.ReactElement,
                                                  { className: 'h-3.5 w-3.5' }
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
                </section>

                {/* Autres pages */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-800 mb-4">
                    Autres pages
                  </h2>

                  <ul className="space-y-2 pl-4 md:pl-12">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 hover:text-primary-600 flex items-center"
                      >
                        <Home className="h-4 w-4 mr-2" />
                        <span>Accueil</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="text-gray-700 hover:text-primary-600 flex items-center"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="text-gray-700 hover:text-primary-600 flex items-center"
                      >
                        <Users className="h-4 w-4 mr-2" />
                        <span>Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/metiers"
                        className="text-gray-700 hover:text-primary-600 flex items-center"
                      >
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>Nos Métiers</span>
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SiteMapPage;