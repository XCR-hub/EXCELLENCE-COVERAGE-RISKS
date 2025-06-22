import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  X,
  Menu,
  ChevronRight,
  Shield,
  Building2,
  Users,
  FileText,
} from 'lucide-react';
import Button from '../common/Button';

interface NavigationItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  priority: number;
  children?: NavigationItem[];
}

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveCategory(null);
  };

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  // Main navigation items with priority (1 highest, 5 lowest)
  const mainCategories: NavigationItem[] = [
    {
      label: 'Entreprise',
      path: '/rc-pro',
      icon: <Shield className="h-5 w-5" />,
      priority: 1,
      children: [
        {
          label: 'RC Pro',
          path: '/rc-pro',
          icon: <Shield className="h-4 w-4" />,
          priority: 1,
        },
        {
          label: 'Multirisque Pro',
          path: '/multirisque-professionnelle',
          icon: <Building2 className="h-4 w-4" />,
          priority: 2,
        },
        {
          label: 'Protection Juridique',
          path: '/protection-juridique',
          icon: <FileText className="h-4 w-4" />,
          priority: 3,
        },
      ],
    },
    {
      label: 'Construction',
      path: '/assurance-decennale',
      icon: <Building2 className="h-5 w-5" />,
      priority: 2,
      children: [
        {
          label: 'Décennale Maçon',
          path: '/assurance-decennale-macon',
          icon: <Building2 className="h-4 w-4" />,
          priority: 1,
        },
        {
          label: 'Décennale Électricien',
          path: '/assurance-decennale-electricien',
          icon: <Building2 className="h-4 w-4" />,
          priority: 2,
        },
        {
          label: 'Décennale Plombier',
          path: '/assurance-decennale-plombier',
          icon: <Building2 className="h-4 w-4" />,
          priority: 3,
        },
      ],
    },
    {
      label: 'Collectives',
      path: '/assurances-collectives',
      icon: <Users className="h-5 w-5" />,
      priority: 3,
      children: [
        {
          label: 'Santé Collective',
          path: '/assurances-collectives?tab=sante',
          icon: <Users className="h-4 w-4" />,
          priority: 1,
        },
        {
          label: 'Prévoyance',
          path: '/assurances-collectives?tab=prevoyance',
          icon: <Users className="h-4 w-4" />,
          priority: 2,
        },
        {
          label: 'Retraite',
          path: '/assurances-collectives?tab=retraite',
          icon: <Users className="h-4 w-4" />,
          priority: 3,
        },
      ],
    },
    {
      label: 'Emprunteur',
      path: '/assurance-emprunteur',
      icon: <FileText className="h-5 w-5" />,
      priority: 4,
      children: [],
    },
    {
      label: 'Santé',
      path: '/particuliers/sante',
      icon: <FileText className="h-5 w-5" />,
      priority: 5,
      children: [],
    },
  ];

  // Sort by priority
  const sortedCategories = [...mainCategories].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
        {!isOpen && (
          <Button
            variant="accent"
            size="sm"
            href="tel:+33180855781"
            className="rounded-full shadow-lg"
          >
            <Phone className="h-5 w-5" />
          </Button>
        )}
        <button
          onClick={toggleMenu}
          className={`p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
            isOpen ? 'bg-red-500 text-white' : 'bg-primary-800 text-white'
          }`}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Menu Header */}
        <div className="bg-primary-800 text-white p-4 flex justify-between items-center">
          <Link to="/" onClick={closeMenu} className="font-bold text-lg">
            XCR Courtier
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main CTA */}
        <div className="p-4 border-b border-gray-200">
          <Button
            variant="accent"
            href="/contact"
            fullWidth
            onClick={closeMenu}
          >
            <Phone className="h-5 w-5 mr-2" />
            Devis gratuit
          </Button>
        </div>

        {/* Menu Categories */}
        <div className="overflow-y-auto h-full pb-20">
          {activeCategory === null ? (
            <div className="p-4 space-y-2">
              {sortedCategories.map((category) => (
                <div
                  key={category.path}
                  className="border-b border-gray-100 pb-2"
                >
                  {category.children && category.children.length > 0 ? (
                    <button
                      onClick={() => toggleCategory(category.path)}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 text-left"
                    >
                      <div className="flex items-center">
                        <div className="bg-primary-100 p-2 rounded-full mr-3">
                          {category.icon}
                        </div>
                        <span className="font-medium text-gray-800">
                          {category.label}
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </button>
                  ) : (
                    <Link
                      to={category.path}
                      onClick={closeMenu}
                      className="w-full flex items-center p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div className="bg-primary-100 p-2 rounded-full mr-3">
                        {category.icon}
                      </div>
                      <span className="font-medium text-gray-800">
                        {category.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Additional Links */}
              <div className="pt-4">
                <Link
                  to="/blog"
                  onClick={closeMenu}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-gray-800">Blog</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-gray-800">Contact</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center mb-4 text-primary-600"
              >
                <ChevronRight className="h-5 w-5 transform rotate-180 mr-1" />
                <span>Retour</span>
              </button>

              <h3 className="font-bold text-lg mb-4 text-primary-800">
                {sortedCategories.find((c) => c.path === activeCategory)?.label}
              </h3>

              <div className="space-y-2">
                {sortedCategories
                  .find((c) => c.path === activeCategory)
                  ?.children?.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={closeMenu}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="bg-primary-50 p-2 rounded-full mr-3">
                        {subItem.icon}
                      </div>
                      <span className="text-gray-800">{subItem.label}</span>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-4 border-t border-gray-200">
          <a
            href="tel:+33180855781"
            className="flex items-center justify-center text-primary-800 font-medium"
          >
            <Phone className="h-4 w-4 mr-2" />
            01 80 85 57 81
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
