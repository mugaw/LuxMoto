import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import FadeInView from '../components/animations/FadeInView';
import { brands } from '../data/motorcycles';

const Brands = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A12]/70 via-[#070A12]/50 to-[#070A12]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <FadeInView>
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block text-center">
              Brand Archive
            </span>
            <h1 className="text-hero font-display font-black text-white uppercase tracking-tight text-center">
              Built by <span className="text-gradient">Legends</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-16">
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover the world's most iconic motorcycle manufacturers. From Japanese precision 
                to Italian passion, explore the brands that shaped motorcycling history.
              </p>
            </div>
          </FadeInView>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {brands.map((brand) => (
              <motion.div key={brand.id} variants={itemVariants}>
                <Link
                  to={`/brands/${brand.id}`}
                  className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#B8B2F2]/50 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Image Side */}
                    <div className="aspect-square md:aspect-auto overflow-hidden">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                        }}
                      />
                    </div>

                    {/* Content Side */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{brand.country}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-4 h-4" />
                        <span>Since {brand.founded}</span>
                      </div>

                      <h2 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[#B8B2F2] transition-colors">
                        {brand.name}
                      </h2>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {brand.description}
                      </p>

                      <div className="flex items-center gap-2 text-[#B8B2F2] font-medium">
                        <span>Explore {brand.motorcycles.length} Models</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {[
              { value: '6', label: 'Legendary Brands' },
              { value: '36', label: 'Iconic Models' },
              { value: '100+', label: 'Years of History' },
              { value: '∞', label: 'Passion' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-black text-[#B8B2F2] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <FadeInView>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section font-display font-black text-white uppercase mb-6">
              Can't Decide?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Browse motorcycles by category to find the perfect match for your riding style.
            </p>
            <Link to="/categories" className="btn-primary">
              Browse by Category
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInView>
      </section>
    </PageTransition>
  );
};

export default Brands;
