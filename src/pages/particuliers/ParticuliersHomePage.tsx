import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  Heart,
  Shield,
  Car,
  Wallet,
  FileText,
  ArrowRight,
  Phone,
  CheckCircle,
} from 'lucide-react';
import Button from '../../components/common/Button';
import SectionNavigation from '../../components/navigation/SectionNavigation';
import { getPagesBySection } from '../../data/siteStructure';

const ParticuliersHomePage = () => {
  const particuliersPages = getPagesBySection('particuliers');
  const activePages = particuliersPages.filter(
    (page) => page.status === 'active'
  );

  return (
    <>
      <Helmet>
        <title>
          Assurances Particuliers | Protection Personnes, Biens, Épargne | XCR
          Courtier
        </title>
        <meta
          name="description"
          content="Solutions d'assurance pour particuliers : auto, habitation, santé, prévoyance, emprunteur, épargne. Protégez votre famille, vos biens et préparez votre avenir."
        />
        <meta
          name="keywords"
          content="assurance particuliers, assurance auto, assurance habitation, assurance santé, assurance prévoyance, assurance emprunteur, assurance vie, épargne retraite"
        />
        <link rel="canonical" href="https://xcr-courtier.fr/particuliers" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-16 md:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Assurances Particuliers
                <span className="text-secondary-400 block mt-2">
                  Protection sur mesure pour vous et vos proches
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Des solutions d'assurance adaptées à vos besoins pour protéger
                votre famille, vos biens et préparer votre avenir en toute
                sérénité.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-secondary-300">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span className="text-lg">
                    Protection complète pour vous et votre famille
                  </span>
                </div>
                <div className="flex items-center text-secondary-300">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span className="text-lg">
                    Garanties adaptées à votre situation personnelle
                  </span>
                </div>
                <div className="flex items-center text-secondary-300">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span className="text-lg">
                    Accompagnement personnalisé par nos experts
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" href="/contact">
                  Obtenir mon devis gratuit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="tel:+33180855781"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Parler à un conseiller
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Nos solutions pour particuliers
                </h2>

                <div className="space-y-4">
                  {activePages.map((page) => (
                    <Link
                      key={page.id}
                      to={page.path}
                      className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center">
                        <div className="bg-primary-100 p-2 rounded-full mr-3">
                          {React.cloneElement(page.icon as React.ReactElement, {
                            className: 'h-5 w-5 text-primary-600',
                          })}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 group-hover:text-primary-700 transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {page.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Besoin d'une solution personnalisée ?
                  </p>
                  <Button variant="primary" href="/contact" fullWidth>
                    <Phone className="w-5 h-5 mr-2" />
                    Prendre rendez-vous avec un expert
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <SectionNavigation section="particuliers" />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                  Nos solutions d'assurance pour particuliers
                </h2>

                <p className="text-lg text-gray-700 mb-8">
                  Chez XCR Courtier, nous vous proposons une gamme complète de
                  solutions d'assurance pour protéger ce qui compte le plus pour
                  vous : votre famille, votre santé, vos biens et votre avenir.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Protection des personnes */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 p-2 rounded-full mr-3">
                        <Heart className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-800">
                        Protection des personnes
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Protégez votre santé et celle de vos proches avec nos
                      solutions de complémentaire santé, prévoyance et assurance
                      emprunteur.
                    </p>

                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Remboursements optimisés de vos frais médicaux
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Protection financière en cas d'accident ou de maladie
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Sécurisation de votre prêt immobilier
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/particuliers/sante"
                      className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                    >
                      Mutuelle Santé
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/assurance-emprunteur"
                      className="flex items-center text-primary-600 hover:text-primary-800 font-medium mt-2"
                    >
                      Assurance Emprunteur
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Protection des biens */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 p-2 rounded-full mr-3">
                        <Home className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-800">
                        Protection des biens
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Protégez votre voiture, votre logement et tous vos biens
                      avec nos assurances adaptées à vos besoins et à votre
                      budget.
                    </p>

                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Couverture complète pour votre véhicule
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Protection de votre logement et de son contenu
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Assistance 24h/24 en cas de sinistre
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/assurance-auto"
                      className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                    >
                      Découvrir nos solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Épargne et placement */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 p-2 rounded-full mr-3">
                        <Wallet className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-800">
                        Épargne et placement
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Préparez votre avenir et celui de vos proches avec nos
                      solutions d'épargne et de placement adaptées à vos
                      objectifs.
                    </p>

                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Assurance vie avec gestion pilotée ou libre
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Plan d'Épargne Retraite avec avantages fiscaux
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Transmission optimisée de votre patrimoine
                        </span>
                      </li>
                    </ul>

                    <span className="flex items-center text-gray-500 text-sm">
                      <span className="mr-2">Bientôt disponible</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                        Nouveauté
                      </span>
                    </span>
                  </div>

                  {/* Services spécifiques */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 p-2 rounded-full mr-3">
                        <FileText className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-800">
                        Services spécifiques
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Bénéficiez de services complémentaires pour une protection
                      complète et un accompagnement sur mesure.
                    </p>

                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Protection juridique pour défendre vos droits
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Assistance et services à la personne
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Conseils personnalisés par nos experts
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/protection-juridique"
                      className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                    >
                      Découvrir nos solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-800 mb-4">
                    Besoin d'un accompagnement personnalisé ?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Nos conseillers experts sont à votre disposition pour
                    analyser vos besoins et vous proposer les solutions les plus
                    adaptées à votre situation personnelle et familiale.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" href="/contact">
                      Prendre rendez-vous
                    </Button>
                    <Button variant="outline" href="tel:+33180855781">
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler un conseiller
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParticuliersHomePage;
