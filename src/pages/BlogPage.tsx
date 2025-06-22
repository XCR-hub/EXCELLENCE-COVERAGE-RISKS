import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

const blogPosts = [
  {
    id: 'guide-complet-assurance-auto-2025',
    title: 'Guide Complet Assurance Auto 2025 : Tout Ce Que Vous Devez Savoir',
    excerpt: 'Découvrez tout ce qu\'il faut savoir sur l\'assurance auto en 2025 : types de couvertures, obligations légales, astuces pour économiser et tendances du marché.',
    date: '2025-01-15',
    author: 'Expert XCR Courtier',
    authorRole: 'Spécialiste Assurance Auto',
    readTime: '9 min',
    category: 'Assurance Auto',
    tags: ['Assurance Auto', 'Guide 2025', 'Comparatif', 'Économies'],
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    slug: 'guide-complet-assurance-auto-2025'
  },
  {
    id: 'guide-assurance-habitation-2025',
    title: 'Guide Complet Assurance Habitation 2025 : Protégez Efficacement Votre Logement',
    excerpt: 'Tout savoir sur l\'assurance habitation en 2025 : garanties, obligations, économies et tendances. Guide expert pour protéger efficacement votre logement et vos biens.',
    date: '2025-02-10',
    author: 'Expert XCR Courtier',
    authorRole: 'Spécialiste Assurance Habitation',
    readTime: '10 min',
    category: 'Assurance Habitation',
    tags: ['Assurance Habitation', 'Multirisque', 'Guide 2025', 'Garanties Logement'],
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    slug: 'guide-assurance-habitation-2025'
  },
  {
    id: 'guide-assurance-rc-pro-2025',
    title: 'Guide Complet Assurance RC Pro 2025 : Protégez Votre Activité Professionnelle',
    excerpt: 'Guide expert sur l\'assurance responsabilité civile professionnelle en 2025. Obligations légales, garanties essentielles et conseils pour protéger efficacement votre activité.',
    date: '2025-03-15',
    author: 'Expert XCR Courtier',
    authorRole: 'Spécialiste Assurance Professionnelle',
    readTime: '10 min',
    category: 'RC Pro',
    tags: ['RC Pro', 'Assurance Professionnelle', 'Protection Entreprise', 'Responsabilité Civile'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    slug: 'guide-assurance-rc-pro-2025'
  },
  {
    id: 'guide-assurance-vie-2025',
    title: 'Guide Complet Assurance Vie 2025 : Optimisez Votre Épargne et Votre Succession',
    excerpt: 'Guide expert sur l\'assurance vie en 2025 : fonctionnement, fiscalité, placements et transmission. Conseils pour optimiser votre épargne et préparer votre succession.',
    date: '2025-04-20',
    author: 'Expert XCR Courtier',
    authorRole: 'Conseiller en Gestion de Patrimoine',
    readTime: '11 min',
    category: 'Assurance Vie',
    tags: ['Assurance Vie', 'Placement', 'Fiscalité', 'Succession', 'Épargne'],
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg',
    slug: 'guide-assurance-vie-2025'
  },
  {
    id: 'devis-assurance-auto-2025',
    title: 'Pourquoi demander un devis d\'assurance auto en 2025',
    excerpt: 'Découvrez les nouvelles tendances du marché de l\'assurance auto et pourquoi 2025 est le moment idéal pour revoir votre contrat.',
    date: '2025-01-15',
    author: 'Marie Dubois',
    authorRole: 'Expert en Assurance Auto',
    readTime: '8 min',
    category: 'Assurance Auto',
    tags: ['Devis Auto', 'Tendances 2025', 'Économies', 'Comparateur'],
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    slug: 'devis-assurance-auto-2025'
  },
  {
    id: 'rc-pro-artisans-commercants',
    title: 'RC Pro Artisans & Commerçants : Guide Complet de la Protection Professionnelle',
    excerpt: 'Découvrez comment protéger efficacement votre activité d\'artisan ou de commerçant avec une assurance RC Pro adaptée.',
    date: '2024-03-20',
    author: 'Marie Dubois',
    authorRole: 'Expert en Assurance Professionnelle',
    readTime: '8 min',
    category: 'RC Pro',
    tags: ['Artisans', 'Commerçants', 'Assurance Professionnelle', 'Protection'],
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    slug: 'rc-pro-artisans-commercants-guide'
  },
  {
    id: 'risques-specifiques-artisans',
    title: 'Les Risques Spécifiques des Artisans : Comment Bien Se Protéger',
    excerpt: 'Analyse détaillée des risques professionnels propres aux artisans et solutions d\'assurance adaptées.',
    date: '2024-03-18',
    author: 'Thomas Martin',
    authorRole: 'Conseiller en Gestion des Risques',
    readTime: '6 min',
    category: 'Risques Professionnels',
    tags: ['Risques', 'Prévention', 'Artisanat'],
    image: 'https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg',
    slug: 'risques-specifiques-artisans'
  },
  {
    id: 'optimisation-fiscale-patrimoine',
    title: 'Stratégies d\'optimisation fiscale de votre patrimoine',
    excerpt: 'Découvrez les meilleures stratégies pour réduire votre imposition et optimiser la transmission de votre patrimoine.',
    date: '2025-05-05',
    author: 'Jean Dupont',
    authorRole: 'Expert en Gestion de Patrimoine',
    readTime: '9 min',
    category: 'Patrimoine',
    tags: ['Fiscalité', 'Patrimoine', 'Optimisation', 'Transmission'],
    image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg',
    slug: 'optimisation-fiscale-patrimoine'
  },
  {
    id: 'assurance-habitation-objets-connectes',
    title: 'Comment les objets connectés révolutionnent l\'assurance habitation',
    excerpt: 'Découvrez comment la domotique peut réduire vos primes d\'assurance et prévenir les sinistres dans votre logement.',
    date: '2025-03-01',
    author: 'Sophie Martin',
    authorRole: 'Experte en Nouvelles Technologies',
    readTime: '7 min',
    category: 'Innovation',
    tags: ['Objets Connectés', 'Domotique', 'Prévention', 'Smart Home'],
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    slug: 'assurance-habitation-objets-connectes'
  }
];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog Assurance - Conseils et Actualités pour Professionnels | XCR Courtier</title>
        <meta name="description" content="Découvrez nos articles experts sur l'assurance auto, habitation, vie, RC Pro et décennale. Conseils pratiques et actualités pour protéger votre activité professionnelle et personnelle." />
        <meta name="keywords" content="blog assurance, conseils assurance auto, assurance habitation, assurance vie, RC Pro, protection artisans, assurance commerçants, devis assurance" />
        <link rel="canonical" href="https://xcr-courtier.fr/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog Assurance XCR Courtier - Conseils d'Experts" />
        <meta property="og:description" content="Articles experts sur l'assurance auto, habitation, vie, RC Pro et la protection des professionnels" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/blog" />
        <meta property="og:image" content="https://xcr-courtier.fr/images/blog-xcr-courtier.jpg" />
        
        {/* Schema.org Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog XCR Courtier",
            "description": "Articles experts sur l'assurance et la protection des professionnels",
            "url": "https://xcr-courtier.fr/blog",
            "publisher": {
              "@type": "Organization",
              "name": "XCR Courtier",
              "logo": {
                "@type": "ImageObject",
                "url": "https://xcr-courtier.fr/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://xcr-courtier.fr/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "image": post.image
            }))
          })}
        </script>
      </Helmet>

      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Blog Assurance XCR"
            subtitle="Expertise, conseils et actualités pour protéger votre activité professionnelle et personnelle"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>

                  <h2 className="text-xl font-bold text-primary-800 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    href={`/blog/${post.slug}`}
                    className="w-full text-center"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-primary-800 text-white rounded-lg">1</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">2</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">3</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}