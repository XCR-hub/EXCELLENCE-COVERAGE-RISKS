import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ExternalLink, Info, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';

export default function RCProArtisansPost() {
  const legalRefs = [
    {
      title: "Code des assurances - Article L251-1",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006795911/",
      description: "Définition légale de l'assurance responsabilité civile professionnelle"
    },
    {
      title: "Service Public - RC Pro",
      url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F23668",
      description: "Informations officielles sur la RC Pro"
    },
    {
      title: "Chambre des Métiers et de l'Artisanat",
      url: "https://www.artisanat.fr",
      description: "Ressources et conseils pour les artisans"
    }
  ];

  return (
    <>
      <Helmet>
        <title>RC Pro Artisans & Commerçants : Guide Complet 2024 | XCR Assurances</title>
        <meta name="description" content="Guide expert sur la RC Pro pour artisans et commerçants. Découvrez les garanties essentielles, obligations légales et conseils pour protéger votre activité professionnelle." />
        <meta name="keywords" content="RC Pro artisans, assurance commerçants, responsabilité civile professionnelle, garanties RC Pro, protection artisan, assurance professionnelle" />
        <link rel="canonical" href="https://xcr.fr/blog/rc-pro-artisans-commercants-guide" />
        <meta property="og:title" content="RC Pro Artisans & Commerçants : Guide Complet 2024" />
        <meta property="og:description" content="Guide expert sur la RC Pro pour artisans et commerçants. Découvrez comment protéger efficacement votre activité professionnelle." />
        <meta property="og:image" content="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "RC Pro Artisans & Commerçants : Guide Complet 2024",
              "description": "Guide expert sur la RC Pro pour artisans et commerçants",
              "image": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
              "author": {
                "@type": "Person",
                "name": "Marie Dubois"
              },
              "publisher": {
                "@type": "Organization",
                "name": "XCR Assurances",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://xcr.fr/logo.png"
                }
              },
              "datePublished": "2024-03-20",
              "dateModified": "2024-03-20",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://xcr.fr/blog/rc-pro-artisans-commercants-guide"
              }
            }
          `}
        </script>
      </Helmet>

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header Section */}
            <header className="mb-12">
              <motion.div 
                className="flex items-center text-sm text-gray-500 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Calendar className="h-4 w-4 mr-2" />
                20 Mars 2024
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-2" />
                Marie Dubois
                <span className="mx-2">•</span>
                8 min de lecture
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-primary-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                RC Pro Artisans & Commerçants : Guide Complet de la Protection Professionnelle
              </motion.h1>

              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {['Artisans', 'Commerçants', 'RC Pro', 'Protection Professionnelle'].map((tag, index) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    <Tag className="h-3 w-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div 
                className="relative h-96 rounded-lg overflow-hidden mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                  alt="Artisan au travail"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Author and Share Section */}
              <motion.div 
                className="flex items-center justify-between p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                    alt="Marie Dubois"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">Marie Dubois</h3>
                    <p className="text-sm text-gray-500">Expert en Assurance Professionnelle</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Partager sur Facebook">
                    <Facebook className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Partager sur Twitter">
                    <Twitter className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Partager sur LinkedIn">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Partager">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </motion.div>
            </header>

            {/* Table of Contents */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-primary-600 hover:text-primary-800">1. Introduction</a>
                </li>
                <li>
                  <a href="#pourquoi" className="text-primary-600 hover:text-primary-800">2. Pourquoi souscrire une RC Pro ?</a>
                </li>
                <li>
                  <a href="#garanties" className="text-primary-600 hover:text-primary-800">3. Les garanties essentielles</a>
                </li>
                <li>
                  <a href="#obligations" className="text-primary-600 hover:text-primary-800">4. Obligations légales</a>
                </li>
                <li>
                  <a href="#conseils" className="text-primary-600 hover:text-primary-800">5. Conseils pratiques</a>
                </li>
              </ul>
            </motion.div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <motion.section
                id="introduction"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Introduction</h2>
                <p>
                  La Responsabilité Civile Professionnelle (RC Pro) est une assurance indispensable pour les artisans et commerçants. 
                  Elle protège votre activité contre les conséquences financières des dommages que vous pourriez causer à vos clients 
                  ou à des tiers dans le cadre de votre activité professionnelle.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-700">
                    <Info className="h-5 w-5 inline-block mr-2" />
                    Selon l'article L251-1 du Code des assurances, la RC Pro est obligatoire pour de nombreuses professions.
                  </p>
                </div>
              </motion.section>

              <motion.section
                id="pourquoi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Pourquoi souscrire une RC Pro ?</h2>
                <p>
                  En tant qu'artisan ou commerçant, vous êtes exposé à de nombreux risques professionnels :
                </p>
                <ul>
                  <li>Dommages causés aux biens des clients</li>
                  <li>Erreurs ou malfaçons dans vos prestations</li>
                  <li>Accidents sur votre lieu de travail</li>
                  <li>Litiges avec les clients ou fournisseurs</li>
                </ul>
              </motion.section>

              <motion.section
                id="garanties"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Les garanties essentielles</h2>
                
                <h3>1. Responsabilité Civile Exploitation</h3>
                <p>
                  Cette garantie couvre les dommages causés dans le cadre de votre activité quotidienne, 
                  que ce soit dans vos locaux ou chez vos clients.
                </p>

                <h3>2. Protection des Biens Confiés</h3>
                <p>
                  Indispensable pour les artisans qui travaillent sur les biens de leurs clients, 
                  cette garantie couvre les dommages causés aux objets qui vous sont confiés.
                </p>

                <h3>3. Garantie Après-Vente</h3>
                <p>
                  Cette garantie vous protège contre les réclamations liées à vos produits ou prestations 
                  après leur livraison ou réalisation.
                </p>
              </motion.section>

              <motion.section
                id="obligations"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Obligations légales</h2>
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold mb-4">Références légales importantes</h3>
                  <div className="space-y-4">
                    {legalRefs.map((ref, index) => (
                      <div key={index} className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <a 
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800 font-medium"
                          >
                            {ref.title}
                          </a>
                          <p className="text-sm text-gray-600 mt-1">{ref.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="conseils"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Conseils pratiques</h2>
                <div className="bg-primary-50 p-6 rounded-lg my-8">
                  <h3 className="text-primary-800 mb-4">Points clés à retenir</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Évaluez précisément vos besoins en fonction de votre activité</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Vérifiez les exclusions de garantie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Adaptez les montants de garantie à votre chiffre d'affaires</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Mettez à jour votre contrat régulièrement</span>
                    </li>
                  </ul>
                </div>
              </motion.section>
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-12 bg-primary-800 text-white p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Besoin d'un devis personnalisé ?</h3>
              <p className="mb-6">
                Nos experts sont à votre disposition pour étudier vos besoins et vous proposer 
                la meilleure solution d'assurance RC Pro.
              </p>
              <Button
                variant="accent"
                href="/contact"
                className="w-full sm:w-auto"
              >
                Demander un devis gratuit
              </Button>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              className="mt-12 border-t pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Articles connexes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-lg mb-2">
                    <a href="#" className="text-primary-800 hover:text-primary-600">
                      Les Risques Spécifiques des Artisans
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Analyse détaillée des risques professionnels propres aux artisans...
                  </p>
                  <Button variant="outline" href="#" className="w-full">
                    Lire l'article
                  </Button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-lg mb-2">
                    <a href="#" className="text-primary-800 hover:text-primary-600">
                      Comment Optimiser son Budget Assurance
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Guide pratique pour réduire ses coûts d'assurance sans compromettre sa protection...
                  </p>
                  <Button variant="outline" href="#" className="w-full">
                    Lire l'article
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </>
  );
}