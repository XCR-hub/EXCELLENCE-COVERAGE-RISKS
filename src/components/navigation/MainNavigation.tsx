import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Phone,
  FileText,
  Shield,
  Building2,
  Users,
} from 'lucide-react';
import Button from '../common/Button';

interface NavigationItem {
  label: string;
  path: string;
  priority: number;
  children?: NavigationItem[];
}

export const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleSubmenu = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  // Main navigation items with priority (1 highest, 5 lowest)
  const navigationItems: NavigationItem[] = [
    {
      label: 'Entreprise',
      path: '/rc-pro',
      priority: 1,
      children: [
        { label: 'RC Pro', path: '/rc-pro', priority: 1 },
        {
          label: 'Multirisque Pro',
          path: '/multirisque-professionnelle',
          priority: 2,
        },
        {
          label: 'Protection Juridique',
          path: '/protection-juridique',
          priority: 3,
        },
      ],
    },
    {
      label: 'Construction',
      path: '/assurance-decennale',
      priority: 2,
      children: [
        {
          label: 'Décennale Maçon',
          path: '/assurance-decennale-macon',
          priority: 1,
        },
        {
          label: 'Décennale Électricien',
          path: '/assurance-decennale-electricien',
          priority: 2,
        },
        {
          label: 'Décennale Plombier',
          path: '/assurance-decennale-plombier',
          priority: 3,
        },
      ],
    },
    {
      label: 'Collectives',
      path: '/assurances-collectives',
      priority: 3,
      children: [
        {
          label: 'Santé Collective',
          path: '/assurances-collectives?tab=sante',
          priority: 1,
        },
        {
          label: 'Prévoyance',
          path: '/assurances-collectives?tab=prevoyance',
          priority: 2,
        },
        {
          label: 'Retraite',
          path: '/assurances-collectives?tab=retraite',
          priority: 3,
        },
      ],
    },
    {
      label: 'Emprunteur',
      path: '/assurance-emprunteur',
      priority: 4,
      children: [],
    },
  ];

  // Sort items by priority
  const sortedItems = [...navigationItems].sort(
    (a, b) => a.priority - b.priority
  );

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
          {sortedItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`font-semibold px-3 py-2 rounded transition-colors ${
                  isActive(item.path)
                    ? 'text-white bg-primary-700'
                    : 'text-gray-200 hover:text-white hover:bg-primary-700'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>

              {item.children && item.children.length > 0 && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Blog link - lower priority but still important */}
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
            onClick={() => setIsOpen(!isOpen)}
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
            {sortedItems.map((item) => (
              <div
                key={item.path}
                className="border-b border-primary-700 last:border-b-0"
              >
                <div className="flex items-center justify-between py-2">
                  <Link
                    to={item.path}
                    className={`font-semibold ${
                      isActive(item.path) ? 'text-white' : 'text-gray-200'
                    }`}
                    onClick={() => !item.children?.length && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.children && item.children.length > 0 && (
                    <button
                      onClick={() => toggleSubmenu(item.path)}
                      className="text-gray-200 focus:outline-none p-2"
                      aria-expanded={openSubmenu === item.path}
                    >
                      {openSubmenu === item.path ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>

                {item.children &&
                  item.children.length > 0 &&
                  openSubmenu === item.path && (
                    <div className="ml-4 mt-2 space-y-2 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-gray-200 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Blog link in mobile menu */}
            <div className="border-b border-primary-700">
              <Link
                to="/blog"
                className={`block py-2 font-semibold ${
                  isActive('/blog') ? 'text-white' : 'text-gray-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>

            {/* Contact link in mobile menu */}
            <div className="pt-4 pb-2">
              <Button variant="accent" href="/contact" fullWidth>
                <Phone className="w-5 h-5 mr-2" />
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Secondary Navigation Bar with Icons - Desktop Only */}
      <div className="hidden lg:block bg-primary-700 py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <Link
                to="/rc-pro"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <Shield className="h-4 w-4 mr-1" />
                <span>RC Pro</span>
              </Link>
              <Link
                to="/assurance-decennale"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <Building2 className="h-4 w-4 mr-1" />
                <span>Décennale</span>
              </Link>
              <Link
                to="/assurances-collectives"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <Users className="h-4 w-4 mr-1" />
                <span>Collectives</span>
              </Link>
              <Link
                to="/protection-juridique"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <FileText className="h-4 w-4 mr-1" />
                <span>Juridique</span>
              </Link>
            </div>
            <div>
              <a
                href="tel:+33180855781"
                className="flex items-center text-sm text-gray-200 hover:text-white py-1"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span>01 80 85 57 81</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
