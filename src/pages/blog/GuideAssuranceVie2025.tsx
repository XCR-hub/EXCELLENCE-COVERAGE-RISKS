import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ExternalLink, Info, CheckCircle, TrendingUp, DollarSign, Shield, Heart, Users, Clock, ArrowRight, AlertTriangle, Percent } from 'lucide-react';
import Button from '../../components/common/Button';

export default function GuideAssuranceVie2025() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'fonctionnement', title: 'Fonctionnement de l\'assurance vie' },
    { id: 'types-contrats', title: 'Les différents types de contrats' },
    { id: 'fiscalite', title: 'Fiscalité et avantages' },
    { id: 'investir', title: 'Comment investir efficacement' },
    { id: 'optimiser', title: 'Optimiser son contrat' },
    { id: 'transmission', title: 'Transmission et succession' },
    { id: 'tendances-2025', title: 'Tendances du marché en 2025' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <>
      <Helmet>
        <title>Guide Complet Assurance Vie 2025 | Placement, Fiscalité, Succession | XCR Courtier</title>
        <meta name="description" content="Guide expert sur l'assurance vie en 2025 : fonctionnement, fiscalité, placements et transmission. Conseils pour optimiser votre épargne et préparer votre succession avec XCR Courtier." />
        <meta name="keywords" content="assurance vie 2025, placement assurance vie, fiscalité assurance vie, succession assurance vie, épargne assurance vie, fonds euros, unités de compte" />
        <link rel="canonical" href="https://xcr-courtier.fr/blog/guide-assurance-vie-2025" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Guide Complet Assurance Vie 2025 | XCR Courtier" />
        <meta property="og:description" content="Guide expert sur l'assurance vie en 2025 : fonctionnement, fiscalité, placements et transmission." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://xcr-courtier.fr/blog/guide-assurance-vie-2025" />
        <meta property="og:image" content="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guide Complet Assurance Vie 2025" />
        <meta name="twitter:description" content="Guide expert sur l'assurance vie en 2025 par XCR Courtier" />
        <meta name="twitter:image" content="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" />
        
        {/* Schema.org Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Guide Complet Assurance Vie 2025",
            "description": "Guide expert sur l'assurance vie en 2025 : fonctionnement, fiscalité, placements et transmission",
            "image": "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
            "author": {
              "@type": "Person",
              "name": "Expert XCR Courtier",
              "jobTitle": "Conseiller en Gestion de Patrimoine"
            },
            "publisher": {
              "@type": "Organization",
              "name": "XCR Courtier",
              "logo": {
                "@type": "ImageObject",
                "url": "https://xcr-courtier.fr/logo.png"
              }
            },
            "datePublished": "2025-04-20",
            "dateModified": "2025-04-20",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://xcr-courtier.fr/blog/guide-assurance-vie-2025"
            },
            "wordCount": 1950,
            "articleSection": "Assurance Vie",
            "keywords": ["assurance vie 2025", "placement assurance vie", "fiscalité assurance vie", "succession assurance vie"]
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
                20 Avril 2025
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-2" />
                Expert XCR Courtier
                <span className="mx-2">•</span>
                <span>Temps de lecture : 11 min</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-primary-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Guide Complet Assurance Vie 2025 : Optimisez Votre Épargne et Votre Succession
              </motion.h1>

              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {['Assurance Vie', 'Placement', 'Fiscalité', 'Succession', 'Épargne'].map((tag) => (
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
                  src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
                  alt="Assurance vie 2025 - Planification financière et patrimoniale"
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
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Expert XCR Courtier</h3>
                    <p className="text-sm text-gray-500">Conseiller en Gestion de Patrimoine</p>
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
                  L'assurance vie demeure en 2025 l'un des placements préférés des Français, et pour cause : 
                  elle combine flexibilité, performance potentielle et avantages fiscaux inégalés, tout en 
                  offrant des solutions efficaces pour la transmission de patrimoine. Avec plus de 1 800 milliards 
                  d'euros d'encours, elle constitue le premier placement financier des ménages français.
                </p>
                <p>
                  Pourtant, malgré sa popularité, l'assurance vie reste un produit complexe dont les subtilités 
                  et les opportunités sont souvent méconnues. Dans un contexte économique et réglementaire en 
                  constante évolution, comprendre les mécanismes de l'assurance vie et savoir l'optimiser est 
                  devenu essentiel pour tout épargnant soucieux de faire fructifier son capital et de préparer 
                  sa succession.
                </p>
                <p>
                  Ce guide complet vous accompagne dans la compréhension des fondamentaux de l'assurance vie, 
                  des différents types de contrats disponibles en 2025, des stratégies d'investissement adaptées 
                  au contexte actuel, et des optimisations fiscales et successorales possibles.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-700">
                    <Info className="h-5 w-5 inline-block mr-2" />
                    <strong>Chiffre clé :</strong> En 2025, 42% des Français détiennent au moins un contrat 
                    d'assurance vie, mais selon l'Autorité des Marchés Financiers, seulement 23% d'entre eux 
                    estiment bien comprendre le fonctionnement et les options de leur contrat.
                  </p>
                </div>
              </motion.section>

              <motion.section
                id="fonctionnement"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Fonctionnement de l'assurance vie</h2>
                <p>
                  L'assurance vie est un contrat d'épargne à long terme qui permet de se constituer un capital, 
                  de le faire fructifier et de le transmettre dans des conditions fiscales avantageuses. 
                  Comprendre son fonctionnement de base est essentiel avant d'aller plus loin.
                </p>

                <h3>Les acteurs du contrat</h3>
                <ul>
                  <li><strong>Le souscripteur :</strong> Personne qui signe le contrat et verse les primes</li>
                  <li><strong>L'assuré :</strong> Personne sur la tête de laquelle repose le contrat (souvent le souscripteur lui-même)</li>
                  <li><strong>Le(s) bénéficiaire(s) :</strong> Personne(s) désignée(s) pour recevoir le capital en cas de décès de l'assuré</li>
                  <li><strong>L'assureur :</strong> Compagnie d'assurance qui gère le contrat</li>
                </ul>

                <h3>Le principe de fonctionnement</h3>
                <p>
                  Le mécanisme de l'assurance vie est relativement simple :
                </p>
                <ol>
                  <li>Le souscripteur verse des primes (versement initial puis versements libres ou programmés)</li>
                  <li>Ces sommes sont investies selon l'allocation choisie (fonds euros, unités de compte)</li>
                  <li>Le capital se valorise au fil du temps selon les performances des supports choisis</li>
                  <li>Le souscripteur peut effectuer des rachats (retraits) partiels ou totaux à tout moment</li>
                  <li>Au décès de l'assuré, le capital est transmis aux bénéficiaires désignés</li>
                </ol>

                <h3>Les opérations possibles</h3>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Versements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>Versement initial :</strong> Montant minimum pour ouvrir le contrat (souvent entre 300€ et 1 000€ en 2025)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>Versements libres :</strong> Possibilité d'alimenter le contrat à tout moment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>Versements programmés :</strong> Épargne régulière (mensuelle, trimestrielle)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Rachats</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>Rachat partiel :</strong> Retrait d'une partie du capital</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>Rachats partiels programmés :</strong> Retraits réguliers (complément de revenus)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>Rachat total :</strong> Récupération de l'intégralité du capital et clôture du contrat</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Arbitrages</h4>
                    <p className="text-gray-700">
                      Modification de la répartition des fonds entre les différents supports d'investissement 
                      (par exemple, transfert d'une partie du fonds euros vers des unités de compte ou inversement).
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Avance</h4>
                    <p className="text-gray-700">
                      Prêt accordé par l'assureur sur une partie du capital, sans clôturer le contrat ni perdre 
                      l'antériorité fiscale. L'avance doit être remboursée avec des intérêts.
                    </p>
                  </div>
                </div>

                <h3>Les frais à surveiller</h3>
                <p>
                  Plusieurs types de frais peuvent impacter la performance de votre contrat :
                </p>
                <ul>
                  <li><strong>Frais sur versements :</strong> Prélevés lors de chaque versement (0% à 4,5%)</li>
                  <li><strong>Frais de gestion :</strong> Prélevés annuellement sur l'encours (0,5% à 1% pour le fonds euros, 0,8% à 1,2% pour les UC)</li>
                  <li><strong>Frais d'arbitrage :</strong> Appliqués lors des modifications d'allocation (0% à 1%)</li>
                  <li><strong>Frais de rachat :</strong> Rares en 2025 mais peuvent exister sur certains contrats</li>
                </ul>
                <p>
                  En 2025, la tendance est à la baisse des frais, notamment grâce à la concurrence des contrats 
                  en ligne et à la transparence imposée par la réglementation.
                </p>
              </motion.section>

              <motion.section
                id="types-contrats"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Les différents types de contrats</h2>
                <p>
                  En 2025, le marché de l'assurance vie propose une grande variété de contrats, adaptés à différents 
                  profils d'épargnants et objectifs patrimoniaux.
                </p>

                <h3>Selon le mode de gestion</h3>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Gestion libre</h4>
                    <p className="text-gray-700 mb-3">
                      Vous choisissez vous-même les supports d'investissement et effectuez vos arbitrages.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Pour qui :</strong> Épargnants avertis, souhaitant piloter activement leur épargne
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Gestion pilotée</h4>
                    <p className="text-gray-700 mb-3">
                      Vous choisissez un profil de risque, et les arbitrages sont réalisés par des professionnels.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Pour qui :</strong> Épargnants souhaitant déléguer la gestion tout en gardant un contrôle sur l'orientation
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Gestion sous mandat</h4>
                    <p className="text-gray-700 mb-3">
                      Délégation complète à un gérant professionnel qui adapte la stratégie à votre profil.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Pour qui :</strong> Patrimoines importants, recherche d'une gestion personnalisée
                    </p>
                  </div>
                </div>

                <h3>Selon les supports d'investissement</h3>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Contrats monosupport (fonds euros)</h4>
                    <p className="text-gray-700 mb-3">
                      Investissement uniquement sur le fonds en euros, avec capital garanti mais rendement limité.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Rendement moyen 2024 :</strong> 2,8% (en hausse par rapport aux années précédentes)
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Pour qui :</strong> Profils très prudents, horizon court terme, préservation du capital
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Contrats multisupports</h4>
                    <p className="text-gray-700 mb-3">
                      Combinaison de fonds euros et d'unités de compte (UC) pour diversifier les investissements.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Performance potentielle :</strong> Variable selon l'allocation et les marchés
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Pour qui :</strong> Tous profils, selon la répartition fonds euros/UC choisie
                    </p>
                  </div>
                </div>

                <h3>Les contrats spécifiques</h3>
                <ul>
                  <li><strong>Plan d'Épargne Retraite (PER) Assurance :</strong> Dédié à la préparation de la retraite, avec sortie possible en rente ou en capital</li>
                  <li><strong>Contrats DSK et NSK :</strong> Contrats investis en actions avec avantages fiscaux spécifiques après 8 ans</li>
                  <li><strong>Contrats de capitalisation :</strong> Similaires à l'assurance vie mais sans désignation de bénéficiaire (transmission par donation ou succession)</li>
                  <li><strong>Contrats vie-génération :</strong> Avantages successoraux renforcés en contrepartie d'investissements dans l'économie réelle</li>
                </ul>

                <h3>Nouveautés 2025</h3>
                <p>
                  Plusieurs innovations ont marqué le marché de l'assurance vie en 2025 :
                </p>
                <ul>
                  <li><strong>Contrats ESG+ :</strong> Investissement minimum de 50% dans des fonds labellisés ISR, Greenfin ou Finansol</li>
                  <li><strong>Contrats thématiques :</strong> Spécialisés dans des secteurs d'avenir (transition énergétique, biotechnologies, intelligence artificielle)</li>
                  <li><strong>Contrats flexibles :</strong> Permettant de basculer entre différents modes de gestion sans changer de contrat</li>
                  <li><strong>Contrats digitaux avancés :</strong> Pilotage complet via application, avec conseils personnalisés par IA</li>
                </ul>
              </motion.section>

              <motion.section
                id="fiscalite"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Fiscalité et avantages</h2>
                <p>
                  L'un des principaux atouts de l'assurance vie réside dans sa fiscalité privilégiée, 
                  tant pour les rachats que pour la transmission. Comprendre ces avantages est essentiel 
                  pour optimiser votre stratégie patrimoniale.
                </p>

                <h3>Fiscalité des rachats</h3>
                <p>
                  Lors d'un rachat (retrait), seuls les gains (intérêts et plus-values) sont imposables. 
                  Le capital investi est toujours récupéré net d'impôt.
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-primary-800 text-white">
                      <tr>
                        <th className="border px-4 py-2 text-left">Ancienneté du contrat</th>
                        <th className="border px-4 py-2 text-center">Option Barème progressif de l'IR</th>
                        <th className="border px-4 py-2 text-center">Option Prélèvement Forfaitaire Libératoire (PFL)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Moins de 4 ans</td>
                        <td className="border px-4 py-2 text-center">IR + Prélèvements sociaux (17,2%)</td>
                        <td className="border px-4 py-2 text-center">PFL de 30% + Prélèvements sociaux (17,2%)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Entre 4 et 8 ans</td>
                        <td className="border px-4 py-2 text-center">IR + Prélèvements sociaux (17,2%)</td>
                        <td className="border px-4 py-2 text-center">PFL de 24% + Prélèvements sociaux (17,2%)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Plus de 8 ans</td>
                        <td className="border px-4 py-2 text-center">IR + Prélèvements sociaux (17,2%)</td>
                        <td className="border px-4 py-2 text-center">PFL de 12,8% + Prélèvements sociaux (17,2%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-accent-50 p-4 rounded-lg my-6">
                  <p className="text-accent-800">
                    <Info className="h-5 w-5 inline-block mr-2" />
                    <strong>Abattement après 8 ans :</strong> Après 8 ans de détention, vous bénéficiez d'un abattement 
                    annuel de 4 600€ pour une personne seule ou 9 200€ pour un couple marié ou pacsé soumis à 
                    imposition commune. Cet abattement s'applique sur les gains avant imposition.
                  </p>
                </div>

                <h3>Fiscalité en cas de décès</h3>
                <p>
                  L'assurance vie bénéficie d'un régime successoral particulièrement avantageux :
                </p>
                <ul>
                  <li><strong>Versements avant 70 ans :</strong> Chaque bénéficiaire désigné bénéficie d'un abattement de 152 500€ (article 990I du CGI). Au-delà, taxation de 20% jusqu'à 852 500€, puis 31,25%.</li>
                  <li><strong>Versements après 70 ans :</strong> Abattement global de 30 500€ sur les primes versées (article 757B du CGI). Au-delà, application des droits de succession classiques. Les intérêts et plus-values restent exonérés.</li>
                </ul>
                <p>
                  Ces avantages s'appliquent quel que soit le lien de parenté avec le bénéficiaire, ce qui fait 
                  de l'assurance vie un outil privilégié pour transmettre à des personnes non héritières 
                  (neveux, amis, concubin...).
                </p>

                <h3>Cas particuliers et optimisations fiscales</h3>
                <ul>
                  <li><strong>Contrats vie-génération :</strong> Abattement supplémentaire de 20% sur les capitaux transmis au décès (avant application de l'abattement de 152 500€)</li>
                  <li><strong>Démembrement de la clause bénéficiaire :</strong> Stratégie permettant d'optimiser la transmission en séparant usufruit et nue-propriété</li>
                  <li><strong>Donation de contrat de capitalisation :</strong> Permet de transmettre un contrat avec son antériorité fiscale</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-700">
                    <Info className="h-5 w-5 inline-block mr-2" />
                    <strong>Nouveauté fiscale 2025 :</strong> La loi de finances 2025 a maintenu les avantages 
                    fiscaux de l'assurance vie, malgré les craintes de réforme. Toutefois, un nouveau plafonnement 
                    global des avantages fiscaux liés à l'épargne a été instauré pour les très hauts patrimoines 
                    (au-delà de 10 millions d'euros).
                  </p>
                </div>
              </motion.section>

              <motion.section
                id="investir"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Comment investir efficacement</h2>
                <p>
                  En 2025, l'environnement économique et financier impose une approche réfléchie de l'investissement 
                  en assurance vie. Voici les stratégies à privilégier selon votre profil et vos objectifs.
                </p>

                <h3>Comprendre les supports d'investissement</h3>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Fonds en euros</h4>
                    <p className="text-gray-700 mb-3">
                      Support à capital garanti, investi majoritairement en obligations d'État et d'entreprises.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li><strong>Avantages :</strong> Sécurité, capital garanti, effet cliquet (gains acquis définitivement)</li>
                      <li><strong>Inconvénients :</strong> Rendement limité (2,8% en moyenne en 2024)</li>
                      <li><strong>Pour qui :</strong> Épargnants prudents, horizon court terme, préservation du capital</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-3">Unités de compte (UC)</h4>
                    <p className="text-gray-700 mb-3">
                      Supports d'investissement non garantis, investis sur les marchés financiers (actions, obligations, immobilier...).
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li><strong>Avantages :</strong> Potentiel de performance supérieur, diversification</li>
                      <li><strong>Inconvénients :</strong> Risque de perte en capital, volatilité</li>
                      <li><strong>Pour qui :</strong> Épargnants acceptant une prise de risque, horizon long terme</li>
                    </ul>
                  </div>
                </div>

                <h3>Les différents types d'unités de compte en 2025</h3>
                <ul>
                  <li><strong>OPCVM (fonds et SICAV) :</strong> Investis en actions, obligations ou mixtes</li>
                  <li><strong>ETF (trackers) :</strong> Fonds indiciels cotés répliquant un indice, avec frais réduits</li>
                  <li><strong>SCPI :</strong> Sociétés Civiles de Placement Immobilier, pour investir dans l'immobilier locatif</li>
                  <li><strong>OPCI :</strong> Organismes de Placement Collectif Immobilier, mixant immobilier et liquidités</li>
                  <li><strong>Private Equity :</strong> Investissement dans des entreprises non cotées</li>
                  <li><strong>Fonds structurés :</strong> Produits à formule offrant une protection conditionnelle du capital</li>
                  <li><strong>Fonds thématiques :</strong> Investis sur des secteurs spécifiques (technologie, santé, climat...)</li>
                </ul>

                <h3>Construire une allocation adaptée</h3>
                <p>
                  La répartition idéale de votre épargne dépend de plusieurs facteurs :
                </p>
                <ul>
                  <li><strong>Votre horizon de placement :</strong> Plus il est long, plus la part d'UC peut être importante</li>
                  <li><strong>Votre tolérance au risque :</strong> Capacité émotionnelle et financière à supporter les fluctuations</li>
                  <li><strong>Vos objectifs :</strong> Préparation de la retraite, projet immobilier, transmission...</li>
                  <li><strong>Votre situation patrimoniale globale :</strong> Autres placements, revenus, charges...</li>
                </ul>

                <div className="bg-primary-50 p-6 rounded-lg my-8">
                  <h4 className="text-xl font-semibold text-primary-800 mb-4">Allocations types en 2025</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary-700 mb-2">Profil Prudent</h5>
                      <div className="bg-gray-200 h-32 rounded-lg overflow-hidden relative">
                        <div className="bg-blue-500 h-full w-3/4 absolute"></div>
                        <div className="bg-green-500 h-full w-1/4 absolute right-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                          <p className="font-bold">75% Fonds €</p>
                          <p className="font-bold">25% UC</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Horizon :</strong> 3-5 ans<br />
                        <strong>Performance cible :</strong> 3-4%
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary-700 mb-2">Profil Équilibré</h5>
                      <div className="bg-gray-200 h-32 rounded-lg overflow-hidden relative">
                        <div className="bg-blue-500 h-full w-1/2 absolute"></div>
                        <div className="bg-green-500 h-full w-1/2 absolute right-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                          <p className="font-bold">50% Fonds €</p>
                          <p className="font-bold">50% UC</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Horizon :</strong> 5-8 ans<br />
                        <strong>Performance cible :</strong> 4-6%
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary-700 mb-2">Profil Dynamique</h5>
                      <div className="bg-gray-200 h-32 rounded-lg overflow-hidden relative">
                        <div className="bg-blue-500 h-full w-1/4 absolute"></div>
                        <div className="bg-green-500 h-full w-3/4 absolute right-0"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                          <p className="font-bold">25% Fonds €</p>
                          <p className="font-bold">75% UC</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Horizon :</strong> 8+ ans<br />
                        <strong>Performance cible :</strong> 6-8%
                      </p>
                    </div>
                  </div>
                </div>

                <h3>Stratégies d'investissement en 2025</h3>
                <ul>
                  <li><strong>Investissement progressif :</strong> Étaler ses versements pour lisser les points d'entrée sur les marchés</li>
                  <li><strong>Diversification géographique :</strong> Répartir ses investissements entre différentes zones (Europe, États-Unis, marchés émergents)</li>
                  <li><strong>Diversification sectorielle :</strong> Investir dans différents secteurs d'activité pour réduire les risques</li>
                  <li><strong>Gestion pilotée à horizon :</strong> Réduction progressive du risque à l'approche de l'objectif</li>
                </ul>
              </motion.section>

              <motion.section
                id="optimiser"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Optimiser son contrat</h2>
                <p>
                  Au-delà du choix des supports d'investissement, plusieurs stratégies permettent d'optimiser 
                  la performance et la flexibilité de votre assurance vie.
                </p>

                <h3>Choisir le bon contrat</h3>
                <p>
                  Tous les contrats ne se valent pas. Voici les critères essentiels à considérer en 2025 :
                </p>
                <ul>
                  <li><strong>Frais :</strong> Privilégiez les contrats à frais réduits (0% sur versement, moins de 0,8% de frais de gestion)</li>
                  <li><strong>Qualité du fonds euros :</strong> Performances passées, composition, solidité de l'assureur</li>
                  <li><strong>Diversité des UC :</strong> Large choix de supports (ETF, SCPI, fonds thématiques...)</li>
                  <li><strong>Options de gestion :</strong> Rééquilibrage automatique, investissement progressif, sécurisation des gains</li>
                  <li><strong>Souplesse :</strong> Versements minimums bas, rachats partiels facilités, arbitrages en ligne</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-700">
                    <Info className="h-5 w-5 inline-block mr-2" />
                    <strong>Astuce :</strong> En 2025, les contrats en ligne (assurtech) offrent généralement 
                    les meilleurs rapports qualité-prix, avec des frais réduits et une grande flexibilité. 
                    Toutefois, les contrats traditionnels distribués par les réseaux bancaires et d'assurance 
                    ont considérablement amélioré leur offre digitale et leurs conditions tarifaires.
                  </p>
                </div>

                <h3>Utiliser les options de gestion automatique</h3>
                <p>
                  Les contrats modernes proposent des options de gestion qui facilitent le pilotage de votre épargne :
                </p>
                <ul>
                  <li><strong>Investissement progressif :</strong> Transfert automatique et régulier du fonds euros vers les UC</li>
                  <li><strong>Sécurisation des plus-values :</strong> Transfert automatique des gains des UC vers le fonds euros</li>
                  <li><strong>Limitation des moins-values :</strong> Arbitrage automatique en cas de baisse d'une UC au-delà d'un seuil</li>
                  <li><strong>Rééquilibrage automatique :</strong> Maintien de l'allocation cible quelles que soient les évolutions de marché</li>
                </ul>

                <h3>Stratégies avancées</h3>
                <ul>
                  <li><strong>Multisouscription :</strong> Détenir plusieurs contrats pour diversifier les assureurs et les stratégies</li>
                  <li><strong>Versements réguliers :</strong> Pratiquer l'investissement programmé pour lisser les points d'entrée</li>
                  <li><strong>Rachats partiels optimisés :</strong> Utiliser la méthode FIFO (premier entré, premier sorti) ou LIFO (dernier entré, premier sorti) selon votre situation</li>
                  <li><strong>Nantissement :</strong> Utiliser votre contrat comme garantie pour un prêt plutôt que d'effectuer un rachat</li>
                </ul>

                <h3>Optimisation fiscale des rachats</h3>
                <p>
                  Pour minimiser l'impact fiscal de vos retraits :
                </p>
                <ul>
                  <li>Privilégiez les rachats après 8 ans pour bénéficier de l'abattement</li>
                  <li>Étalez vos rachats sur plusieurs années fiscales pour multiplier les abattements</li>
                  <li>Comparez systématiquement l'imposition au barème de l'IR et au PFL</li>
                  <li>Utilisez l'option "rachat du capital investi en priorité" si votre contrat le permet</li>
                </ul>
              </motion.section>

              <motion.section
                id="transmission"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Transmission et succession</h2>
                <p>
                  L'assurance vie constitue un outil privilégié de transmission patrimoniale, grâce à son régime 
                  fiscal avantageux et à sa souplesse. Optimiser la clause bénéficiaire est essentiel pour 
                  en tirer le meilleur parti.
                </p>

                <h3>L'importance de la clause bénéficiaire</h3>
                <p>
                  La clause bénéficiaire détermine qui recevra le capital en cas de décès de l'assuré. 
                  Sa rédaction mérite une attention particulière :
                </p>
                <ul>
                  <li><strong>Clause standard :</strong> "Mon conjoint, à défaut mes enfants nés ou à naître, vivants ou représentés, à défaut mes héritiers"</li>
                  <li><strong>Clause nominative :</strong> Désignation précise des bénéficiaires avec nom, prénom, date et lieu de naissance</li>
                  <li><strong>Clause à options :</strong> Offre des choix au bénéficiaire (capital ou rente, pleine propriété ou démembrement...)</li>
                </ul>
                <p>
                  La clause peut être modifiée à tout moment par le souscripteur (sauf en cas d'acceptation 
                  du bénéficiaire). Elle peut être rédigée sous forme testamentaire pour plus de confidentialité.
                </p>

                <div className="bg-accent-50 p-4 rounded-lg my-6">
                  <p className="text-accent-800">
                    <AlertTriangle className="h-5 w-5 inline-block mr-2" />
                    <strong>Attention :</strong> Une clause mal rédigée peut entraîner des litiges ou une 
                    fiscalité défavorable. Évitez les formulations ambiguës et actualisez votre clause 
                    en fonction des évolutions de votre situation familiale (mariage, divorce, naissance...).
                  </p>
                </div>

                <h3>Stratégies de transmission optimisée</h3>
                <p>
                  Plusieurs techniques permettent d'optimiser la transmission via l'assurance vie :
                </p>
                <ul>
                  <li><strong>Démembrement de la clause bénéficiaire :</strong> Attribution de l'usufruit à un bénéficiaire (souvent le conjoint) et de la nue-propriété à d'autres (souvent les enfants)</li>
                  <li><strong>Clause à terme :</strong> Prévoit le versement du capital à une date déterminée ou à un âge précis du bénéficiaire</li>
                  <li><strong>Quasi-usufruit :</strong> Permet au bénéficiaire en usufruit de disposer du capital, avec une créance de restitution pour les nus-propriétaires</li>
                  <li><strong>Pacte adjoint :</strong> Document complémentaire précisant les conditions d'utilisation des fonds par le bénéficiaire</li>
                </ul>

                <h3>Assurance vie et régimes matrimoniaux</h3>
                <p>
                  Le régime matrimonial influence le traitement de l'assurance vie :
                </p>
                <ul>
                  <li><strong>Communauté légale :</strong> Le conjoint peut revendiquer une récompense si les primes ont été excessives par rapport aux facultés du ménage</li>
                  <li><strong>Séparation de biens :</strong> Liberté totale, sauf en cas de primes manifestement exagérées</li>
                  <li><strong>Communauté universelle :</strong> Attention aux conséquences sur les droits des enfants non communs</li>
                </ul>

                <h3>Primes manifestement exagérées</h3>
                <p>
                  Les héritiers réservataires peuvent contester les versements jugés disproportionnés par rapport 
                  au patrimoine du souscripteur. Les tribunaux apprécient ce caractère selon :
                </p>
                <ul>
                  <li>L'âge et l'état de santé du souscripteur au moment des versements</li>
                  <li>Le montant des primes par rapport à son patrimoine global</li>
                  <li>L'utilité de l'opération pour le souscripteur</li>
                  <li>Les motivations du souscripteur (intention libérale ou organisation d'insolvabilité)</li>
                </ul>
              </motion.section>

              <motion.section
                id="tendances-2025"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2>Tendances du marché en 2025</h2>
                <p>
                  Le marché de l'assurance vie connaît une transformation profonde en 2025, 
                  avec plusieurs tendances majeures qui redéfinissent ce placement historique.
                </p>

                <h3>Évolution des fonds euros</h3>
                <p>
                  Après des années de baisse, les fonds euros connaissent un regain d'intérêt :
                </p>
                <ul>
                  <li><strong>Remontée des taux :</strong> Rendements moyens de 2,8% en 2024, en hausse par rapport aux années précédentes</li>
                  <li><strong>Diversification des actifs :</strong> Intégration de plus d'actifs de diversification (immobilier, private equity) dans les fonds euros</li>
                  <li><strong>Fonds euros nouvelle génération :</strong> Apparition de fonds euros dynamiques acceptant une légère prise de risque pour un rendement supérieur</li>
                </ul>

                <h3>Digitalisation et personnalisation</h3>
                <p>
                  La technologie transforme l'expérience client :
                </p>
                <ul>
                  <li><strong>Robo-advisors :</strong> Conseillers automatisés proposant des allocations personnalisées</li>
                  <li><strong>Hyperpersonnalisation :</strong> Contrats sur mesure adaptés aux objectifs précis de l'épargnant</li>
                  <li><strong>Expérience mobile :</strong> Pilotage complet du contrat via application, avec tableaux de bord interactifs</li>
                </ul>

                <h3>Investissement responsable</h3>
                <p>
                  L'ESG (Environnement, Social, Gouvernance) devient incontournable :
                </p>
                <ul>
                  <li><strong>Généralisation des labels :</strong> Plus de 60% des UC proposées sont désormais labellisées ISR, Greenfin ou Finansol</li>
                  <li><strong>Transparence renforcée :</strong> Reporting d'impact climatique et social des investissements</li>
                  <li><strong>Thématiques durables :</strong> Fonds spécialisés dans la transition énergétique, l'économie circulaire, la biodiversité</li>
                </ul>

                <h3>Nouvelles classes d'actifs</h3>
                <p>
                  L'univers d'investissement s'élargit considérablement :
                </p>
                <ul>
                  <li><strong>Private equity accessible :</strong> Démocratisation de l'investissement non coté avec des tickets d'entrée réduits</li>
                  <li><strong>Immobilier tokenisé :</strong> Investissement fractionné dans l'immobilier via la blockchain</li>
                  <li><strong>Dette privée :</strong> Accès aux financements d'entreprises non cotées</li>
                  <li><strong>Actifs tangibles :</strong> Investissement dans les infrastructures, forêts, terres agricoles</li>
                </ul>

                <div className="bg-primary-50 p-6 rounded-lg my-8">
                  <h4 className="text-xl font-semibold text-primary-800 mb-4">Performances moyennes par classe d'actifs (2024)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary-700 mb-2">Supports traditionnels</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <Percent className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                          <span><strong>Fonds euros :</strong> +2,8%</span>
                        </li>
                        <li className="flex items-start">
                          <Percent className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                          <span><strong>Actions Europe :</strong> +7,2%</span>
                        </li>
                        <li className="flex items-start">
                          <Percent className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                          <span><strong>Obligations :</strong> +3,5%</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary-700 mb-2">Supports alternatifs</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <Percent className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                          <span><strong>SCPI :</strong> +4,5%</span>
                        </li>
                        <li className="flex items-start">
                          <Percent className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                          <span><strong>Private Equity :</strong> +9,8%</span>
                        </li>
                        <li className="flex items-start">
                          <Percent className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                          <span><strong>Fonds thématiques :</strong> +8,3%</span>
                        </li>
                      </ul>
                    </div>
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
                  En 2025, l'assurance vie demeure un placement incontournable dans une stratégie patrimoniale 
                  globale. Sa flexibilité, ses avantages fiscaux et ses possibilités de transmission en font 
                  un outil polyvalent, adapté à de nombreux objectifs : constitution d'une épargne de précaution, 
                  préparation de la retraite, financement de projets à moyen terme ou optimisation de la transmission.
                </p>
                <p>
                  L'évolution du marché offre aujourd'hui une diversité de contrats et de supports d'investissement 
                  sans précédent, permettant une personnalisation poussée de votre stratégie d'épargne. Toutefois, 
                  cette richesse implique aussi une complexité accrue qui nécessite une bonne compréhension des 
                  mécanismes et des enjeux.
                </p>
                <p>
                  Pour tirer le meilleur parti de votre assurance vie, adoptez une approche méthodique :
                </p>
                <ol>
                  <li>Définissez clairement vos objectifs et votre horizon de placement</li>
                  <li>Évaluez votre profil de risque et votre situation patrimoniale globale</li>
                  <li>Choisissez un contrat adapté avec des frais compétitifs</li>
                  <li>Construisez une allocation diversifiée et cohérente avec votre profil</li>
                  <li>Suivez et ajustez régulièrement votre stratégie</li>
                  <li>Optimisez la fiscalité de vos rachats et la transmission</li>
                </ol>
                <p>
                  N'hésitez pas à vous faire accompagner par un conseiller en gestion de patrimoine pour 
                  bénéficier d'un conseil personnalisé et d'une vision globale de votre situation.
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
              <h3 className="text-2xl font-bold mb-4">Besoin d'optimiser votre stratégie d'épargne ?</h3>
              <p className="mb-6">
                Nos conseillers en gestion de patrimoine analysent votre situation et vous accompagnent 
                dans la construction d'une stratégie d'épargne personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="accent"
                  href="/particuliers/epargne-placement/assurance-vie"
                  className="flex-1"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Découvrir nos solutions d'assurance vie
                </Button>
                <Button
                  variant="outline"
                  href="/contact"
                  className="flex-1 border-white text-white hover:bg-white/10"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Prendre rendez-vous avec un conseiller
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
                    <Link to="/blog/guide-assurance-habitation-2025" className="text-primary-800 hover:text-primary-600">
                      Guide Complet Assurance Habitation 2025
                    </Link>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Tout savoir sur l'assurance habitation en 2025 : garanties, obligations, économies...
                  </p>
                  <Button variant="outline" href="/blog/guide-assurance-habitation-2025" className="w-full">
                    Lire l'article
                  </Button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-lg mb-2">
                    <Link to="/blog/optimisation-fiscale-patrimoine" className="text-primary-800 hover:text-primary-600">
                      Stratégies d'optimisation fiscale de votre patrimoine
                    </Link>
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Découvrez les meilleures stratégies pour réduire votre imposition et optimiser la transmission de votre patrimoine...
                  </p>
                  <Button variant="outline" href="/blog/optimisation-fiscale-patrimoine" className="w-full">
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