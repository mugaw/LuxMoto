import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import FadeInView from '../components/animations/FadeInView';
import { getBrandById } from '../data/motorcycles';
import { getAssetPath } from '../utils/assets';

const BrandDetail = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = getBrandById(brandId || '');

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

  if (!brand) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Brand Not Found
            </h1>
            <Link to="/brands" className="btn-primary">
              <ArrowLeft className="w-5 h-5" />
              Back to Brands
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const legendaryBikes = brand.motorcycles.filter((m) => m.isLegendary);
  const modernBikes = brand.motorcycles.filter((m) => !m.isLegendary);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getAssetPath(brand.image)}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A12]/60 via-[#070A12]/40 to-[#070A12]" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-12">
          <FadeInView>
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Brands
            </Link>

            <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {brand.country}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Since {brand.founded}
              </span>
            </div>

            <h1 className="text-hero font-display font-black text-white uppercase">
              {brand.name}
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
              Brand Story
            </span>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              {brand.description}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Legendary Models */}
      {legendaryBikes.length > 0 && (
        <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
          <div className="max-w-7xl mx-auto">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                  Iconic Machines
                </span>
                <h2 className="text-section font-display font-black text-white uppercase mt-4">
                  Legendary Models
                </h2>
              </div>
            </FadeInView>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              {legendaryBikes.map((motorcycle) => (
                <motion.div key={motorcycle.id} variants={itemVariants}>
                  <Link
                    to={`/brands/${brand.id}/${motorcycle.id}`}
                    className="group block"
                  >
                    <div className="motorcycle-card h-full">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={getAssetPath(motorcycle.image)}
                          alt={motorcycle.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#B8B2F2] text-[#070A12] text-xs font-bold px-3 py-1 rounded-full">
                            {motorcycle.year}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="text-gray-500 text-xs uppercase tracking-wider">
                          {motorcycle.category}
                        </span>
                        <h3 className="font-display font-bold text-white text-xl mt-1 group-hover:text-[#B8B2F2] transition-colors">
                          {motorcycle.name}
                        </h3>
                        <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                          {motorcycle.description}
                        </p>
                        <div className="flex items-center gap-2 text-[#B8B2F2] font-medium mt-4">
                          <span>View Details</span>
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
      )}

      {/* Timeline Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <div className="text-center mb-16">
              <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                Through The Years
              </span>
              <h2 className="text-section font-display font-black text-white uppercase mt-4">
                Model Timeline
              </h2>
            </div>
          </FadeInView>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B8B2F2] via-[#B8B2F2]/50 to-transparent" />

            {/* Timeline Items */}
            <motion.div 
              className="space-y-12"
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
              {[...brand.motorcycles]
                .sort((a, b) => a.year - b.year)
                .map((motorcycle, index) => (
                  <motion.div
                    key={motorcycle.id}
                    variants={itemVariants}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#B8B2F2] rounded-full border-4 border-[#070A12] transform -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                      }`}
                    >
                      <Link
                        to={`/brands/${brand.id}/${motorcycle.id}`}
                        className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#B8B2F2]/50 transition-all duration-300"
                      >
                        <span className="text-[#B8B2F2] font-display font-bold text-lg">
                          {motorcycle.year}
                        </span>
                        <h3 className="font-display font-bold text-white text-xl mt-2 group-hover:text-[#B8B2F2] transition-colors">
                          {motorcycle.name}
                        </h3>
                        <span className="text-gray-500 text-sm">{motorcycle.category}</span>
                        <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                          {motorcycle.description}
                        </p>
                      </Link>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Models */}
      {modernBikes.length > 0 && (
        <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
          <div className="max-w-7xl mx-auto">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                  Current Lineup
                </span>
                <h2 className="text-section font-display font-black text-white uppercase mt-4">
                  Modern Models
                </h2>
              </div>
            </FadeInView>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              {modernBikes.map((motorcycle) => (
                <motion.div key={motorcycle.id} variants={itemVariants}>
                  <Link
                    to={`/brands/${brand.id}/${motorcycle.id}`}
                    className="group block"
                  >
                    <div className="motorcycle-card h-full">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={getAssetPath(motorcycle.image)}
                          alt={motorcycle.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-gray-500 text-xs uppercase tracking-wider">
                          {motorcycle.category}
                        </span>
                        <h3 className="font-display font-bold text-white text-xl mt-1 group-hover:text-[#B8B2F2] transition-colors">
                          {motorcycle.name}
                        </h3>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="spec-badge">
                            <div className="spec-badge-value">{motorcycle.power}</div>
                            <div className="spec-badge-label">Power</div>
                          </div>
                          <div className="spec-badge">
                            <div className="spec-badge-value">{motorcycle.weight}</div>
                            <div className="spec-badge-label">Weight</div>
                          </div>
                          <div className="spec-badge">
                            <div className="spec-badge-value">{motorcycle.year}</div>
                            <div className="spec-badge-label">Year</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-24 px-6 lg:px-12">
        <FadeInView>
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link to="/brands" className="btn-secondary">
              <ArrowLeft className="w-5 h-5" />
              All Brands
            </Link>
            <Link to="/categories" className="btn-primary">
              Browse Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInView>
      </section>
    </PageTransition>
  );
};

export default BrandDetail;
