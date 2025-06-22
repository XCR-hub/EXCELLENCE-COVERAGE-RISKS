import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ExternalLink, Info, CheckCircle, TrendingUp, DollarSign, Shield, Car, Users, Clock } from 'lucide-react';
import Button from '../../components/common/Button';

export default function GuideAssuranceAuto2025Post() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'evolution-marche', title: 'Évolution du marché en 2025' },
    { id: 'types-assurance', title: 'Types d\'assurance auto' },
    { id: 'facteurs-prix', title: 'Facteurs influençant le prix' },
    { id: 'obtenir-devis', title: 'Comment obtenir un devis' },
    { id: 'conseils-economiser', title: 'Conseils pour économiser' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <>
      <Helmet>
        <title>Guide Complet Assurance Auto 2025 | Devis et Conseils XCR Courtier</title>
        <meta name="description" content="Guide complet assurance auto 2025 : types de couvertures, facteurs de prix, conseils pour économiser. Obtenez votre devis assurance auto avec XCR Courtier." />
        <meta name="keywords" content="guide assurance auto 2025, devis assurance auto, XCR courtier, assurance voiture, comparateur assurance" />
        <link rel="canonical" href="https://xcr-courtier.fr/blog/guide-complet-assurance-auto-2025" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Guide Complet Assurance Auto 2025 | XCR Courtier" />
        <meta property="og:description" content="Tout savoir sur l'assurance auto en 2025 : types, prix, conseils d'expert XCR Courtier" />
        <meta property="og:image" content="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://xcr-courtier.fr/blog/guide-complet-assurance-auto-2025" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guide Complet Assurance Auto 2025" />
        <meta name="twitter:description" content="Guide expert assurance auto 2025 par XCR Courtier" />
        <meta name="twitter:image" content="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        
        {/* Schema.org Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Guide complet sur l'assurance auto en 2025",
            "description": "Guide complet pour comprendre l'assurance auto en 2025, obtenir un devis et économiser",
            "image": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
            "author": {
              "@type": "Person",
              "name": "Expert XCR Courtier",
              "jobTitle": "Conseiller en Assurance Auto"
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
              "@id": "https://xcr-courtier.fr/blog/guide-complet-assurance-auto-2025"
            },
            "wordCount": 800,
            "articleSection": "Assurance Auto",
            "keywords": ["assurance auto 2025", "devis assurance", "XCR courtier", "guide assurance voiture"]
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
                Expert XCR Courtier
                <span className="mx-2">•</span>
                8 min de lecture
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-primary-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Guide complet sur l'assurance auto en 2025
              </motion.h1>

              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {['Assurance Auto', 'Devis 2025', 'XCR Courtier', 'Guide Expert'].map((tag, index) => (
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
                  alt="Assurance auto 2025 - Guide complet XCR Courtier"
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
                  <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mr-4">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Expert XCR Courtier</h3>
                    <p className="text-sm text-gray-500">Spécialiste Assurance Auto</p>
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
                  L'assurance auto est une obligation légale en France, mais choisir la bonne couverture peut s'avérer complexe. 
                  En 2025, le marché de l'assurance automobile continue d'évoluer avec de nouvelles technologies, des tarifs 
                  compétitifs et des services innovants. Ce guide complet vous aidera à comprendre les enjeux actuels et à 
                  obtenir le meilleur devis assurance auto avec XCR Courtier.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-700">
                    <Info className="h-5 w-5 inline-block mr-2" />
                    Avec XCR Courtier, obtenez votre devis assurance auto personnalisé en moins de 2 minutes 
                    et bénéficiez de l'expertise de nos conseillers depuis plus de 15 ans.
                  </p>
                </div>
              </motion.section>

              <motion.section
                id="evolution-marche"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Évolution du marché de l'assurance auto en 2025</h2>
                <p>
                  Le secteur de l'assurance auto connaît une transformation majeure en 2025. La digitalisation 
                  s'accélère, permettant des devis instantanés et une souscription 100% en ligne. Les assureurs 
                  proposent désormais des tarifs personnalisés basés sur le comportement de conduite grâce aux 
                  boîtiers télématiques et aux applications mobiles.
                </p>

                <h3>Principales tendances 2025</h3>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-primary-600 mb-4" />
                    <h4 className="text-xl font-semibold mb-3">Assurance connectée</h4>
                    <p>Les véhicules connectés permettent une évaluation en temps réel des risques et des tarifs ajustés selon votre conduite.</p>
                  </div>
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <DollarSign className="h-8 w-8 text-secondary-600 mb-4" />
                    <h4 className="text-xl font-semibold mb-3">Tarification dynamique</h4>
                    <p>Les prix s'adaptent automatiquement selon votre profil de conducteur et vos habitudes de conduite.</p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="types-assurance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Types d'assurance auto disponibles</h2>
                <p>
                  Il existe trois principales formules d'assurance auto, chacune adaptée à des besoins spécifiques. 
                  XCR Courtier vous aide à choisir la formule optimale selon votre profil et votre budget.
                </p>

                <h3>Assurance au tiers</h3>
                <p>
                  La formule minimale obligatoire qui couvre uniquement les dommages causés aux tiers. 
                  Idéale pour les véhicules anciens ou de faible valeur. Tarifs à partir de 25€/mois chez nos partenaires.
                </p>

                <h3>Assurance intermédiaire</h3>
                <p>
                  Combine la responsabilité civile avec des garanties complémentaires : vol, incendie, bris de glace. 
                  Le meilleur rapport qualité-prix pour la plupart des conducteurs.
                </p>

                <h3>Assurance tous risques</h3>
                <p>
                  La protection maximale incluant les dommages à votre propre véhicule, même en cas de responsabilité. 
                  Recommandée pour les véhicules récents ou de valeur élevée.
                </p>
              </motion.section>

              <motion.section
                id="facteurs-prix"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Facteurs influençant le prix de votre assurance auto</h2>
                <p>
                  Plusieurs critères déterminent le montant de votre prime d'assurance auto. Comprendre ces facteurs 
                  vous permet d'optimiser votre devis et de réaliser des économies significatives.
                </p>

                <div className="bg-accent-50 p-6 rounded-lg my-8">
                  <h3 className="text-accent-800 mb-4">Critères principaux d'évaluation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Profil conducteur :</strong> âge, expérience, historique de conduite</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Véhicule :</strong> marque, modèle, puissance, valeur, équipements de sécurité</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Usage :</strong> kilométrage annuel, trajets domicile-travail, stationnement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Localisation :</strong> zone géographique, taux de sinistralité local</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                id="obtenir-devis"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Comment obtenir un devis assurance auto avec XCR Courtier</h2>
                <p>
                  Obtenir un devis assurance auto personnalisé n'a jamais été aussi simple. XCR Courtier vous propose 
                  un processus optimisé en 3 étapes pour comparer les meilleures offres du marché.
                </p>

                <h3>Étape 1 : Renseignements personnels</h3>
                <p>
                  Complétez notre formulaire en ligne avec vos informations personnelles et votre historique de conduite. 
                  Nos algorithmes analysent votre profil pour identifier les assureurs les plus adaptés.
                </p>

                <h3>Étape 2 : Caractéristiques du véhicule</h3>
                <p>
                  Précisez les détails de votre véhicule : marque, modèle, année, équipements. Ces informations permettent 
                  un calcul précis des garanties et des tarifs.
                </p>

                <h3>Étape 3 : Comparaison et souscription</h3>
                <p>
                  Recevez instantanément plusieurs devis personnalisés. Nos conseillers vous accompagnent dans le choix 
                  de la formule optimale et facilitent votre souscription.
                </p>
              </motion.section>

              <motion.section
                id="conseils-economiser"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Conseils d'expert pour économiser sur votre assurance auto</h2>
                <p>
                  Nos experts XCR Courtier partagent leurs meilleures stratégies pour réduire le coût de votre 
                  assurance auto sans compromettre votre protection.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="space-y-4">
                    <h3>Optimisations immédiates</h3>
                    <ul className="space-y-2">
                      <li>• Augmentez votre franchise pour réduire la prime</li>
                      <li>• Groupez vos contrats chez le même assureur</li>
                      <li>• Installez un système antivol homologué</li>
                      <li>• Optez pour un garage fermé si possible</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3>Stratégies long terme</h3>
                    <ul className="space-y-2">
                      <li>• Maintenez un bonus-malus favorable</li>
                      <li>• Suivez un stage de conduite défensive</li>
                      <li>• Choisissez un véhicule peu puissant</li>
                      <li>• Révisez votre contrat annuellement</li>
                    </ul>
                  </div>
                </div>
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
                  L'assurance auto en 2025 offre de nombreuses opportunités d'optimisation grâce aux nouvelles technologies 
                  et à la concurrence accrue entre assureurs. XCR Courtier vous accompagne dans cette démarche avec son 
                  expertise de plus de 15 ans et son réseau de partenaires de confiance.
                </p>
                <p>
                  N'attendez plus pour obtenir votre devis assurance auto personnalisé. Nos conseillers sont à votre 
                  disposition pour vous guider vers la solution la plus adaptée à vos besoins et votre budget.
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
              <h3 className="text-2xl font-bold mb-4">Obtenez votre devis assurance auto gratuit</h3>
              <p className="mb-6">
                Profitez de l'expertise XCR Courtier pour trouver l'assurance auto idéale. 
                Devis personnalisé en 2 minutes, accompagnement gratuit, meilleurs tarifs garantis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="accent"
                  href="/assurance-auto"
                  className="flex-1"
                >
                  <Car className="h-5 w-5 mr-2" />
                  Obtenir mon devis auto gratuit
                </Button>
                <Button
                  variant="outline"
                  href="/contact"
                  className="flex-1 border-white text-white hover:bg-white/10"
                >
                  <Users className="h-5 w-5 mr-2" />
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
                    <a href="/blog/devis-assurance-auto-2025" className="text-primary-800 hover:text-primary-600">
                      Pourquoi demander un devis d'assurance auto en 2025
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Découvrez les nouvelles tendances du marché et les opportunités d'économies...
                  </p>
                  <Button variant="outline" href="/blog/devis-assurance-auto-2025" className="w-full">
                    Lire l'article
                  </Button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-lg mb-2">
                    <a href="/assurance-auto" className="text-primary-800 hover:text-primary-600">
                      Comparateur Assurance Auto XCR
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Comparez les meilleures offres d'assurance auto et économisez jusqu'à 40%...
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