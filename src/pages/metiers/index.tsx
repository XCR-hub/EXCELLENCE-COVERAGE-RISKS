import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Building2, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Button from '../../components/common/Button';

const MetiersPage = () => {
  const metiers = [
    {
      id: 'courtier-assurance-entreprise',
      title: 'Courtier Assurance Entreprise',
      description: 'Expertise en assurance professionnelle pour protéger votre activité et vos collaborateurs',
      icon: <Building2 className="h-12 w-12 text-primary-600" />,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      link: '/metiers/courtier-assurance-entreprise'
    },
    {
      id: 'courtier-assurance-construction',
      title: 'Courtier Assurance Construction',
      description: 'Solutions spécialisées pour les professionnels du BTP et de la construction',
      icon: <Building2 className="h-12 w-12 text-primary-600" />,
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      link: '/metiers/courtier-assurance-construction'
    },
    {
      id: 'courtier-assurance-auto',
      title: 'Courtier Assurance Auto',
      description: 'Expertise en assurance automobile pour particuliers et flottes professionnelles',
      icon: <Building2 className="h-12 w-12 text-primary-600" />,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      link: '/metiers/courtier-assurance-auto'
    },
    {
      id: 'courtier-assurance-sante',
      title: 'Courtier Assurance Santé',
      description: 'Solutions de protection santé pour particuliers et entreprises',
      icon: <Building2 className="h-12 w-12 text-primary-600" />,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      link: '/metiers/courtier-assurance-sante'
    },
    {
      id: 'courtier-assurance-emprunteur',
      title: 'Courtier Assurance Emprunteur',
      description: 'Optimisation de votre assurance de prêt pour réduire vos mensualités',
      icon: <Building2 className="h-12 w-12 text-primary-600" />,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      link: '/metiers/courtier-assurance-emprunteur'
    },
    {
      id: 'conseiller-patrimoine',
      title: 'Conseiller en Gestion de Patrimoine',
      description: 'Accompagnement personnalisé pour optimiser et protéger votre patrimoine',
      icon: <Building2 className="h-12 w-12 text-primary-600" />,
      image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg',
      link: '/metiers/conseiller-patrimoine'
    }
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      position: "Directrice Générale",
      company: "Martin Construction",
      text: "L'expertise métier des conseillers XCR a fait toute la différence. Ils comprennent parfaitement les enjeux spécifiques de notre secteur et ont su nous proposer des solutions vraiment adaptées.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5
    },
    {
      name: "Thomas Dubois",
      position: "Gérant",
      company: "Dubois Automobiles",
      text: "Grâce à la spécialisation de notre conseiller dans le secteur automobile, nous avons pu optimiser notre couverture tout en réduisant nos coûts de 30%. Un vrai partenariat gagnant-gagnant.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Métiers | Expertise Sectorielle | XCR Courtier</title>
        <meta name="description" content="Découvrez nos métiers spécialisés : courtage en assurance entreprise, construction, auto, santé, emprunteur et conseil en gestion de patrimoine. Expertise sectorielle XCR." />
        <meta name="keywords" content="métiers XCR courtier, expertise assurance, courtier spécialisé, conseil patrimoine, assurance professionnelle" />
        <link rel="canonical" href="https://xcr-courtier.fr/metiers" />
        
        {/* Schema.org Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "XCR Courtier - Expertise Métiers",
            "description": "Cabinet de courtage spécialisé par secteur d'activité",
            "url": "https://xcr-courtier.fr/metiers",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de courtage spécialisés",
              "itemListElement": metiers.map((metier, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": metier.title,
                  "description": metier.description,
                  "url": `https://xcr-courtier.fr${metier.link}`
                },
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Métiers Spécialisés
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez notre expertise sectorielle et nos solutions sur mesure pour chaque domaine d'activité. 
              Nos conseillers spécialisés par métier vous accompagnent avec une connaissance approfondie de votre secteur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="accent" 
                size="lg" 
                href="#metiers"
              >
                Découvrir nos expertises
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/contact"
                className="border-white text-white hover:bg-white/10"
              >
                Contacter un expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Métiers Section */}
      <section id="metiers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Notre Expertise par Secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque métier a ses spécificités et ses risques propres. Nos conseillers sont formés 
              et spécialisés par secteur pour vous offrir un accompagnement personnalisé.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metiers.map((metier, index) => (
              <motion.div
                key={metier.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img
                    src={metier.image}
                    alt={metier.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{metier.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{metier.description}</p>
                  <Link 
                    to={metier.link} 
                    className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Les Avantages de Notre Expertise Métier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi notre approche sectorielle fait la différence pour nos clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3 text-center">Connaissance Sectorielle</h3>
              <p className="text-gray-600">
                Nos conseillers sont formés aux spécificités de chaque secteur d'activité, 
                comprennent votre jargon et connaissent les risques propres à votre métier.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3 text-center">Solutions Sur Mesure</h3>
              <p className="text-gray-600">
                Nous concevons des solutions d'assurance parfaitement adaptées aux besoins 
                spécifiques de votre activité, sans garanties superflues.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3 text-center">Partenariats Privilégiés</h3>
              <p className="text-gray-600">
                Notre expertise sectorielle nous permet de négocier des conditions préférentielles 
                auprès des assureurs spécialisés dans votre domaine d'activité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos clients en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de professionnels qui bénéficient de notre expertise métier
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d'un expert dans votre domaine ?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Nos conseillers spécialisés sont à votre disposition pour vous accompagner 
              dans la protection de votre activité professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg" 
                href="/contact"
              >
                Contacter un expert métier
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/blog"
                className="border-white text-white hover:bg-white/10"
              >
                Consulter nos ressources sectorielles
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetiersPage;