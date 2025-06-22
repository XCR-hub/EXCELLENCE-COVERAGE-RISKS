import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Phone,
  Home,
  Briefcase,
  Building2,
  Shield,
  Car,
  Heart,
  Wallet,
  Users,
  FileText,
  Umbrella,
  HelpCircle,
} from 'lucide-react';
import Button from '../common/Button';

interface NavigationItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  section: 'particuliers' | 'professionnels' | 'entreprises';
  category: 'personnes' | 'biens' | 'epargne' | 'services';
  children?: NavigationItem[];
}

const SiteNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSection(null);
    setOpenCategory(null);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
    setOpenCategory(null);
  };

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  // Complete navigation structure
  const navigationItems: NavigationItem[] = [
    // PARTICULIERS
    // Protection des personnes
    {
      label: 'Assurance Santé',
      path: '/particuliers/sante',
      icon: <Heart className="h-5 w-5" />,
      section: 'particuliers',
      category: 'personnes',
    },
    {
      label: 'Assurance Prévoyance',
      path: '/particuliers/prevoyance',
      icon: <Shield className="h-5 w-5" />,
      section: 'particuliers',
      category: 'personnes',
    },
    {
      label: 'Assurance Emprunteur',
      path: '/assurance-emprunteur',
      icon: <Home className="h-5 w-5" />,
      section: 'particuliers',
      category: 'personnes',
    },

    // Protection des biens
    {
      label: 'Assurance Auto',
      path: '/assurance-auto',
      icon: <Car className="h-5 w-5" />,
      section: 'particuliers',
      category: 'biens',
    },
    {
      label: 'Assurance Habitation',
      path: '/particuliers/habitation',
      icon: <Home className="h-5 w-5" />,
      section: 'particuliers',
      category: 'biens',
    },

    // Épargne et placement
    {
      label: 'Assurance Vie',
      path: '/particuliers/assurance-vie',
      icon: <Wallet className="h-5 w-5" />,
      section: 'particuliers',
      category: 'epargne',
    },
    {
      label: 'Épargne Retraite',
      path: '/particuliers/epargne-retraite',
      icon: <Wallet className="h-5 w-5" />,
      section: 'particuliers',
      category: 'epargne',
    },

    // Services spécifiques
    {
      label: 'Protection Juridique',
      path: '/protection-juridique',
      icon: <FileText className="h-5 w-5" />,
      section: 'particuliers',
      category: 'services',
    },

    // PROFESSIONNELS
    // Protection des personnes
    {
      label: 'Prévoyance TNS',
      path: '/professionnels/prevoyance-tns',
      icon: <Shield className="h-5 w-5" />,
      section: 'professionnels',
      category: 'personnes',
    },
    {
      label: 'Santé TNS',
      path: '/professionnels/sante-tns',
      icon: <Heart className="h-5 w-5" />,
      section: 'professionnels',
      category: 'personnes',
    },

    // Protection des biens
    {
      label: 'RC Professionnelle',
      path: '/rc-pro',
      icon: <Shield className="h-5 w-5" />,
      section: 'professionnels',
      category: 'biens',
    },
    {
      label: 'Multirisque Pro',
      path: '/multirisque-professionnelle',
      icon: <Umbrella className="h-5 w-5" />,
      section: 'professionnels',
      category: 'biens',
    },
    {
      label: 'Assurance Décennale',
      path: '/assurance-decennale',
      icon: <Building2 className="h-5 w-5" />,
      section: 'professionnels',
      category: 'biens',
    },

    // Épargne et placement
    {
      label: 'Retraite Madelin',
      path: '/professionnels/retraite-madelin',
      icon: <Wallet className="h-5 w-5" />,
      section: 'professionnels',
      category: 'epargne',
    },
    {
      label: 'PER Individuel',
      path: '/professionnels/per-individuel',
      icon: <Wallet className="h-5 w-5" />,
      section: 'professionnels',
      category: 'epargne',
    },

    // Services spécifiques
    {
      label: 'Protection Juridique Pro',
      path: '/protection-juridique',
      icon: <FileText className="h-5 w-5" />,
      section: 'professionnels',
      category: 'services',
    },

    // ENTREPRISES
    // Protection des personnes
    {
      label: 'Assurances Collectives',
      path: '/assurances-collectives',
      icon: <Users className="h-5 w-5" />,
      section: 'entreprises',
      category: 'personnes',
      children: [
        {
          label: 'Santé Collective',
          path: '/assurances-collectives?tab=sante',
          icon: <Heart className="h-4 w-4" />,
          section: 'entreprises',
          category: 'personnes',
        },
        {
          label: 'Prévoyance Collective',
          path: '/assurances-collectives?tab=prevoyance',
          icon: <Shield className="h-4 w-4" />,
          section: 'entreprises',
          category: 'personnes',
        },
        {
          label: 'Retraite Collective',
          path: '/assurances-collectives?tab=retraite',
          icon: <Wallet className="h-4 w-4" />,
          section: 'entreprises',
          category: 'personnes',
        },
      ],
    },
    {
      label: 'Assurance Homme Clé',
      path: '/entreprises/homme-cle',
      icon: <Users className="h-5 w-5" />,
      section: 'entreprises',
      category: 'personnes',
    },

    // Protection des biens
    {
      label: 'RC Entreprise',
      path: '/rc-pro',
      icon: <Shield className="h-5 w-5" />,
      section: 'entreprises',
      category: 'biens',
    },
    {
      label: 'Multirisque Entreprise',
      path: '/multirisque-professionnelle',
      icon: <Umbrella className="h-5 w-5" />,
      section: 'entreprises',
      category: 'biens',
    },
    {
      label: 'Flotte Automobile',
      path: '/entreprises/flotte-automobile',
      icon: <Car className="h-5 w-5" />,
      section: 'entreprises',
      category: 'biens',
    },

    // Épargne et placement
    {
      label: 'PER Entreprise',
      path: '/assurances-collectives?tab=retraite',
      icon: <Wallet className="h-5 w-5" />,
      section: 'entreprises',
      category: 'epargne',
    },

    // Services spécifiques
    {
      label: 'Protection Juridique',
      path: '/protection-juridique',
      icon: <FileText className="h-5 w-5" />,
      section: 'entreprises',
      category: 'services',
    },
    {
      label: 'Cyber-risques',
      path: '/entreprises/cyber-risques',
      icon: <Shield className="h-5 w-5" />,
      section: 'entreprises',
      category: 'services',
    },
  ];

  // Group items by section and category
  const groupedItems = {
    particuliers: {
      personnes: navigationItems.filter(
        (item) =>
          item.section === 'particuliers' && item.category === 'personnes'
      ),
      biens: navigationItems.filter(
        (item) => item.section === 'particuliers' && item.category === 'biens'
      ),
      epargne: navigationItems.filter(
        (item) => item.section === 'particuliers' && item.category === 'epargne'
      ),
      services: navigationItems.filter(
        (item) =>
          item.section === 'particuliers' && item.category === 'services'
      ),
    },
    professionnels: {
      personnes: navigationItems.filter(
        (item) =>
          item.section === 'professionnels' && item.category === 'personnes'
      ),
      biens: navigationItems.filter(
        (item) => item.section === 'professionnels' && item.category === 'biens'
      ),
      epargne: navigationItems.filter(
        (item) =>
          item.section === 'professionnels' && item.category === 'epargne'
      ),
      services: navigationItems.filter(
        (item) =>
          item.section === 'professionnels' && item.category === 'services'
      ),
    },
    entreprises: {
      personnes: navigationItems.filter(
        (item) =>
          item.section === 'entreprises' && item.category === 'personnes'
      ),
      biens: navigationItems.filter(
        (item) => item.section === 'entreprises' && item.category === 'biens'
      ),
      epargne: navigationItems.filter(
        (item) => item.section === 'entreprises' && item.category === 'epargne'
      ),
      services: navigationItems.filter(
        (item) => item.section === 'entreprises' && item.category === 'services'
      ),
    },
  };

  // Category labels
  const categoryLabels = {
    personnes: 'Protection des personnes',
    biens: 'Protection des biens',
    epargne: 'Épargne et placement',
    services: 'Services spécifiques',
  };

  return (
    <header
      className="bg-primary-800 text-white sticky top-0 z-50 shadow-lg"
      role="banner"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl font-bold hover:text-secondary-300 transition-colors focus:ring-2 focus:ring-secondary-300 focus:ring-offset-2 focus:ring-offset-primary-800 rounded px-2 py-1"
            aria-label="XCR Courtier - Retour à l'accueil"
          >
            XCR Courtier
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-1"
          role="navigation"
          aria-label="Navigation principale"
        >
          {/* Particuliers */}
          <div className="relative group">
            <button
              className="font-semibold px-3 py-2 rounded transition-colors text-gray-200 hover:text-white hover:bg-primary-700 flex items-center"
              aria-expanded="false"
            >
              <Home className="h-4 w-4 mr-1" />
              Particuliers
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                {Object.entries(groupedItems.particuliers).map(
                  ([category, items]) =>
                    items.length > 0 && (
                      <div key={category} className="mb-4 last:mb-0">
                        <h3 className="text-sm font-semibold text-primary-800 mb-2">
                          {
                            categoryLabels[
                              category as keyof typeof categoryLabels
                            ]
                          }
                        </h3>
                        <ul className="space-y-1">
                          {items.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                className="flex items-center px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                              >
                                {item.icon}
                                <span className="ml-2">{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Professionnels */}
          <div className="relative group">
            <button
              className="font-semibold px-3 py-2 rounded transition-colors text-gray-200 hover:text-white hover:bg-primary-700 flex items-center"
              aria-expanded="false"
            >
              <Briefcase className="h-4 w-4 mr-1" />
              Professionnels
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                {Object.entries(groupedItems.professionnels).map(
                  ([category, items]) =>
                    items.length > 0 && (
                      <div key={category} className="mb-4 last:mb-0">
                        <h3 className="text-sm font-semibold text-primary-800 mb-2">
                          {
                            categoryLabels[
                              category as keyof typeof categoryLabels
                            ]
                          }
                        </h3>
                        <ul className="space-y-1">
                          {items.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                className="flex items-center px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                              >
                                {item.icon}
                                <span className="ml-2">{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Entreprises */}
          <div className="relative group">
            <button
              className="font-semibold px-3 py-2 rounded transition-colors text-gray-200 hover:text-white hover:bg-primary-700 flex items-center"
              aria-expanded="false"
            >
              <Building2 className="h-4 w-4 mr-1" />
              Entreprises
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                {Object.entries(groupedItems.entreprises).map(
                  ([category, items]) =>
                    items.length > 0 && (
                      <div key={category} className="mb-4 last:mb-0">
                        <h3 className="text-sm font-semibold text-primary-800 mb-2">
                          {
                            categoryLabels[
                              category as keyof typeof categoryLabels
                            ]
                          }
                        </h3>
                        <ul className="space-y-1">
                          {items.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                className="flex items-center px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                              >
                                {item.icon}
                                <span className="ml-2">{item.label}</span>
                              </Link>

                              {item.children && item.children.length > 0 && (
                                <ul className="ml-6 mt-1 space-y-1">
                                  {item.children.map((child) => (
                                    <li key={child.path}>
                                      <Link
                                        to={child.path}
                                        className="flex items-center px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                                      >
                                        {child.icon}
                                        <span className="ml-2">
                                          {child.label}
                                        </span>
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
            </div>
          </div>

          {/* Blog link */}
          <Link
            to="/blog"
            className={`font-semibold px-3 py-2 rounded transition-colors ${
              isActive('/blog')
                ? 'text-white bg-primary-700'
                : 'text-gray-200 hover:text-white hover:bg-primary-700'
            }`}
            aria-current={isActive('/blog') ? 'page' : undefined}
          >
            Blog
          </Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button variant="accent" size="sm" href="/contact" className="ml-4">
            <Phone className="w-4 h-4 mr-2" />
            Devis gratuit
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
          <Button variant="accent" size="sm" href="/contact" className="mr-2">
            <Phone className="w-4 h-4 mr-1" />
            Devis
          </Button>

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white p-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            </span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-16 left-0 right-0 bg-primary-800 z-50 p-4 shadow-lg lg:hidden"
          >
            {/* Main Sections */}
            {openSection === null ? (
              <div className="space-y-2">
                <button
                  onClick={() => toggleSection('particuliers')}
                  className="w-full flex items-center justify-between p-3 bg-primary-700 rounded-lg text-white"
                >
                  <div className="flex items-center">
                    <Home className="h-5 w-5 mr-2" />
                    <span className="font-medium">Particuliers</span>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </button>

                <button
                  onClick={() => toggleSection('professionnels')}
                  className="w-full flex items-center justify-between p-3 bg-primary-700 rounded-lg text-white"
                >
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    <span className="font-medium">Professionnels</span>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </button>

                <button
                  onClick={() => toggleSection('entreprises')}
                  className="w-full flex items-center justify-between p-3 bg-primary-700 rounded-lg text-white"
                >
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span className="font-medium">Entreprises</span>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </button>

                <Link
                  to="/blog"
                  onClick={toggleMenu}
                  className="w-full flex items-center p-3 bg-primary-700 rounded-lg text-white"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  <span className="font-medium">Blog</span>
                </Link>

                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="w-full flex items-center p-3 bg-secondary-400 rounded-lg text-white mt-4"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-medium">Demander un devis</span>
                </Link>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setOpenSection(null)}
                  className="flex items-center mb-4 text-white"
                >
                  <ChevronRight className="h-5 w-5 transform rotate-180 mr-1" />
                  <span>Retour</span>
                </button>

                <h3 className="font-bold text-lg mb-4 text-white">
                  {openSection === 'particuliers'
                    ? 'Particuliers'
                    : openSection === 'professionnels'
                    ? 'Professionnels'
                    : 'Entreprises'}
                </h3>

                {openCategory === null ? (
                  <div className="space-y-2">
                    {Object.entries(categoryLabels).map(([category, label]) => {
                      const items =
                        groupedItems[openSection as keyof typeof groupedItems][
                          category as keyof typeof groupedItems.particuliers
                        ];

                      return items.length > 0 ? (
                        <button
                          key={category}
                          onClick={() => toggleCategory(category)}
                          className="w-full flex items-center justify-between p-3 bg-primary-700 rounded-lg text-white"
                        >
                          <span className="font-medium">{label}</span>
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      ) : null;
                    })}
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setOpenCategory(null)}
                      className="flex items-center mb-4 text-white"
                    >
                      <ChevronRight className="h-5 w-5 transform rotate-180 mr-1" />
                      <span>Retour</span>
                    </button>

                    <h4 className="font-medium text-base mb-3 text-white">
                      {
                        categoryLabels[
                          openCategory as keyof typeof categoryLabels
                        ]
                      }
                    </h4>

                    <div className="space-y-2">
                      {groupedItems[openSection as keyof typeof groupedItems][
                        openCategory as keyof typeof groupedItems.particuliers
                      ].map((item) => (
                        <div key={item.path}>
                          <Link
                            to={item.path}
                            onClick={toggleMenu}
                            className="w-full flex items-center p-3 bg-primary-700 rounded-lg text-white"
                          >
                            {item.icon}
                            <span className="ml-2">{item.label}</span>
                          </Link>

                          {item.children && item.children.length > 0 && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={toggleMenu}
                                  className="flex items-center p-2 bg-primary-600 rounded-lg text-white"
                                >
                                  {child.icon}
                                  <span className="ml-2">{child.label}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Secondary Navigation Bar with Contact Info - Desktop Only */}
      <div className="hidden lg:block bg-primary-700 py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <a
                href="tel:+33180855781"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span>01 80 85 57 81</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                <span>Besoin d'aide ?</span>
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <FileText className="h-4 w-4 mr-1" />
                <span>Demander un devis</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteNavigation;