import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import InteractiveElementsValidator from './components/common/InteractiveElementsValidator';
import SiteNavigation from './components/navigation/SiteNavigation';
import Breadcrumbs from './components/navigation/Breadcrumbs';

import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import AssuranceAutoPage from './pages/AssuranceAutoPage';
import AssuranceEmprunteurPage from './pages/AssuranceEmprunteurPage';
import AssuranceSantePage from './pages/AssuranceSantePage';
import AssuranceHabitationPage from './pages/AssuranceHabitationPage';
import ProtectionJuridiquePage from './pages/ProtectionJuridiquePage';
import SolutionsFinancieresPage from './pages/SolutionsFinancieresPage';
import RCProPage from './pages/RCProPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AssurancesCollectivesPage from './pages/AssurancesCollectivesPage';
import MultirisqueProfessionnellePage from './pages/MultirisqueProfessionnellePage';
import SiteMapPage from './pages/SiteMapPage';

// Pages métiers
import MetiersPage from './pages/metiers/index';
import CourtierAssuranceEntreprisePage from './pages/metiers/CourtierAssuranceEntreprisePage';

// Section pages
import ParticuliersHomePage from './pages/particuliers/ParticuliersHomePage';
import ProfessionnelsHomePage from './pages/professionnels/ProfessionnelsHomePage';
import EntreprisesHomePage from './pages/entreprises/EntreprisesHomePage';
import MutuelleEditiquePage from './pages/MutuelleEditiquePage';

// 404 Page Component
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // Monitor performance metrics
  usePerformanceMonitor();

  return (
    <ErrorBoundary>
      <InteractiveElementsValidator />
      <div className="min-h-screen flex flex-col">
        {/* Use the SiteNavigation component */}
        <SiteNavigation />

        <main className="flex-grow" id="main-content" role="main">
          <div className="container mx-auto px-4 pt-8">
            <Breadcrumbs />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sitemap" element={<SiteMapPage />} />

            {/* Main sections */}
            <Route path="/particuliers" element={<ParticuliersHomePage />} />
            <Route
              path="/professionnels"
              element={<ProfessionnelsHomePage />}
            />
            <Route path="/entreprises" element={<EntreprisesHomePage />} />

            {/* Particuliers */}
            <Route path="/assurance-auto" element={<AssuranceAutoPage />} />
            <Route
              path="/particuliers/protection-biens/assurance-habitation"
              element={<AssuranceHabitationPage />}
            />
            <Route path="/particuliers/sante" element={<AssuranceSantePage />} />
            <Route
              path="/mutuelle-editique"
              element={<MutuelleEditiquePage />}
            />
            <Route
              path="/assurance-emprunteur"
              element={<AssuranceEmprunteurPage />}
            />
            <Route
              path="/protection-juridique"
              element={<ProtectionJuridiquePage />}
            />

            {/* Professionnels */}
            <Route path="/rc-pro" element={<RCProPage />} />
            <Route
              path="/multirisque-professionnelle"
              element={<MultirisqueProfessionnellePage />}
            />

            {/* Entreprises */}
            <Route
              path="/assurances-collectives"
              element={<AssurancesCollectivesPage />}
            />
            <Route
              path="/solutions-financieres"
              element={<SolutionsFinancieresPage />}
            />

            {/* Blog */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postSlug" element={<BlogPostPage />} />

            {/* Pages métiers */}
            <Route path="/metiers" element={<MetiersPage />} />
            <Route
              path="/metiers/courtier-assurance-entreprise"
              element={<CourtierAssuranceEntreprisePage />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">XCR Courtier</h3>
                <p className="text-gray-300 text-sm">
                  Votre partenaire de confiance pour tous vos besoins
                  d'assurance depuis plus de 15 ans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Particuliers</h4>
                <ul className="space-y-2 text-sm" role="list">
                  <li>
                    <a
                      href="/assurance-auto"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      Assurance Auto
                    </a>
                  </li>
                  <li>
                  <a
                      href="/assurance-emprunteur"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      Assurance Emprunteur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/particuliers/sante"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      Assurance Santé
                    </a>
                  </li>
                  <li>
                    <a
                      href="/protection-juridique"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      Protection Juridique
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Professionnels</h4>
                <ul className="space-y-2 text-sm" role="list">
                  <li>
                    <a
                      href="/rc-pro"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      RC Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="/multirisque-professionnelle"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      Multirisque Pro
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Entreprises</h4>
                <ul className="space-y-2 text-sm" role="list">
                  <li>
                    <a
                      href="/assurances-collectives"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      Assurances Collectives
                    </a>
                  </li>
                  <li>
                    <a
                      href="/rc-pro"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      RC Entreprise
                    </a>
                  </li>
                  <li>
                    <a
                      href="/protection-juridique"
                      className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                    >
                      Protection Juridique
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 mt-8 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} XCR Courtier. Tous droits réservés.
                |<span className="ml-2">ORIAS N° 11 061 425</span> |
                <a href="/sitemap" className="ml-2 hover:text-white">
                  Plan du site
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
