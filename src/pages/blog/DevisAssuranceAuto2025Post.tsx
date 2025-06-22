import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ExternalLink, Info, CheckCircle, TrendingUp, DollarSign, Shield } from 'lucide-react';
import Button from '../../components/common/Button';

export default function DevisAssuranceAuto2025Post() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'tendances-2025', title: 'Les tendances du marché en 2025' },
    { id: 'nouvelles-technologies', title: 'Impact des nouvelles technologies' },
    { id: 'economies-possibles', title: 'Comment réaliser des économies' },
    { id: 'conseils-pratiques', title: 'Conseils pour votre devis' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <>
      <Helmet>
        <title>Pourquoi demander un devis d'assurance auto en 2025 | Guide Complet XCR</title>
        <meta name="description" content="Découvrez pourquoi 2025 est le moment idéal pour demander un devis assurance auto. Nouvelles tendances, technologies et conseils pour économiser sur votre assurance voiture." />
        <meta name="keywords" content="devis assurance auto 2025, comparateur assurance auto, économies assurance voiture, tendances assurance auto, XCR courtier" />
        <link rel="canonical" href="https://xcr-courtier.fr/blog/devis-assurance-auto-2025" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pourquoi demander un devis d'assurance auto en 2025" />
        <meta property="og:description" content="Guide complet sur les tendances 2025 de l'assurance auto et comment économiser sur votre contrat" />
        <meta property="og:image" content="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://xcr-courtier.fr/blog/devis-assurance-auto-2025" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Devis Assurance Auto 2025 : Guide Complet" />
        <meta name="twitter:description" content="Découvrez les tendances 2025 et comment économiser sur votre assurance auto" />
        <meta name="twitter:image" content="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        
        {/* Schema.org Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Pourquoi demander un devis d'assurance auto en 2025",
            "description": "Guide complet sur les tendances 2025 de l'assurance auto et comment économiser",
            "image": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
            "author": {
              "@type": "Person",
              "name": "Marie Dubois",
              "jobTitle": "Expert en Assurance Auto"
            },
            "publisher": {
              "@type": "Organization",
              "name": "XCR Courtier",
              "logo": {
                "@type": "ImageObject",
                "url": "https://xcr-courtier.fr/logo.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://xcr-courtier.fr/blog/devis-assurance-auto-2025"
            },
            "wordCount": 800,
            "articleSection": "Assurance Auto",
            "keywords": ["devis assurance auto 2025", "comparateur assurance", "économies assurance auto"]
          })}
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
                15 Janvier 2025
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
                Pourquoi demander un devis d'assurance auto en 2025
              </motion.h1>

              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {['Devis Auto 2025', 'Tendances', 'Économies', 'Comparateur'].map((tag, index) => (
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
                  alt="Voiture moderne avec technologies connectées"
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
                    <p className="text-sm text-gray-500">Expert en Assurance Auto</p>
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
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      {index + 1}. {item.title}
                    </a>
                  </li>
                ))}
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
                  L'année 2025 marque un tournant décisif dans le secteur de l'assurance automobile. 
                  Entre l'évolution des technologies, les nouvelles réglementations et les changements 
                  de comportement des conducteurs, c'est le moment idéal pour revoir votre contrat 
                  d'assurance auto et demander un nouveau devis.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-700">
                    <Info className="h-5 w-5 inline-block mr-2" />
                    Selon les dernières études, 73% des automobilistes pourraient économiser en moyenne 
                    300€ par an en changeant d'assureur en 2025.
                  </p>
                </div>
              </motion.section>

              <motion.section
                id="tendances-2025"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Les tendances du marché en 2025</h2>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Concurrence accrue</h3>
                    <p>L'arrivée de nouveaux acteurs digitaux intensifie la concurrence, 
                    créant des opportunités d'économies pour les consommateurs.</p>
                  </div>
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <Shield className="h-8 w-8 text-secondary-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Personnalisation</h3>
                    <p>Les assureurs proposent désormais des contrats ultra-personnalisés 
                    basés sur votre profil de conduite réel.</p>
                  </div>
                </div>
                <p>
                  Le marché de l'assurance auto connaît une transformation majeure en 2025. 
                  La digitalisation accélérée et l'arrivée de nouveaux acteurs créent une 
                  concurrence féroce qui profite directement aux consommateurs.
                </p>
              </motion.section>

              <motion.section
                id="nouvelles-technologies"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Impact des nouvelles technologies</h2>
                <div className="relative h-64 rounded-lg overflow-hidden my-8">
                  <img
                    src="https://images.pexels.com/photos/4427620/pexels-photo-4427620.jpeg"
                    alt="Tableau de bord connecté d'une voiture moderne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>
                  Les véhicules connectés et les systèmes d'aide à la conduite révolutionnent 
                  l'évaluation des risques. Les assureurs peuvent désormais proposer des tarifs 
                  basés sur votre comportement de conduite réel grâce aux boîtiers télématiques.
                </p>
                <ul>
                  <li><strong>Pay-as-you-drive :</strong> Payez selon votre kilométrage réel</li>
                  <li><strong>Éco-conduite :</strong> Réductions pour une conduite responsable</li>
                  <li><strong>Prévention :</strong> Alertes en temps réel pour éviter les accidents</li>
                </ul>
              </motion.section>

              <motion.section
                id="economies-possibles"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Comment réaliser des économies</h2>
                <div className="bg-accent-50 p-6 rounded-lg my-8">
                  <DollarSign className="h-8 w-8 text-accent-600 mb-4" />
                  <h3 className="text-accent-800 mb-4">Potentiel d'économies en 2025</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Jusqu'à 40% d'économies avec les nouveaux comparateurs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Réductions pour véhicules électriques ou hybrides</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Bonus fidélité et parrainage optimisés</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Formules modulaires adaptées à vos besoins</span>
                    </li>
                  </ul>
                </div>
                <p>
                  En 2025, les opportunités d'économies sont nombreuses. La clé est de comparer 
                  régulièrement les offres et de profiter des innovations technologiques pour 
                  optimiser votre contrat.
                </p>
              </motion.section>

              <motion.section
                id="conseils-pratiques"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Conseils pour votre devis</h2>
                <p>
                  Pour obtenir le meilleur devis d'assurance auto en 2025, suivez ces recommandations :
                </p>
                <ol>
                  <li><strong>Comparez au moins 5 offres</strong> différentes</li>
                  <li><strong>Vérifiez les garanties incluses</strong> et les exclusions</li>
                  <li><strong>Négociez les franchises</strong> selon votre profil</li>
                  <li><strong>Profitez des bonus écologiques</strong> si vous avez un véhicule propre</li>
                  <li><strong>Considérez les services additionnels</strong> (assistance, véhicule de remplacement)</li>
                </ol>
              </motion.section>

              <motion.section
                id="conclusion"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Conclusion</h2>
                <p>
                  L'année 2025 représente une opportunité unique pour optimiser votre assurance auto. 
                  Entre les nouvelles technologies, la concurrence accrue et les évolutions réglementaires, 
                  c'est le moment idéal pour demander un devis et potentiellement réaliser des économies 
                  substantielles tout en bénéficiant d'une meilleure couverture.
                </p>
                <p>
                  N'attendez plus : comparez les offres dès maintenant et découvrez combien vous 
                  pourriez économiser sur votre assurance auto en 2025.
                </p>
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
              <h3 className="text-2xl font-bold mb-4">Prêt à économiser sur votre assurance auto ?</h3>
              <p className="mb-6">
                Obtenez votre devis personnalisé en 2 minutes et découvrez combien vous pourriez 
                économiser avec nos partenaires assureurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="accent"
                  href="/assurance-auto"
                  className="flex-1"
                >
                  Obtenir mon devis auto gratuit
                </Button>
                <Button
                  variant="outline"
                  href="/contact"
                  className="flex-1 border-white text-white hover:bg-white/10"
                >
                  Parler à un conseiller
                </Button>
              </div>
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
                    <a href="/blog/rc-pro-artisans-commercants-guide" className="text-primary-800 hover:text-primary-600">
                      RC Pro Artisans & Commerçants : Guide Complet
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Découvrez comment protéger efficacement votre activité professionnelle...
                  </p>
                  <Button variant="outline" href="/blog/rc-pro-artisans-commercants-guide" className="w-full">
                    Lire l'article
                  </Button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-lg mb-2">
                    <a href="/assurance-auto" className="text-primary-800 hover:text-primary-600">
                      Comparateur Assurance Auto
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Comparez les meilleures offres d'assurance auto et économisez...
                  </p>
                  <Button variant="outline" href="/assurance-auto" className="w-full">
                    Voir les offres
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