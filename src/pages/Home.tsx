import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import FadeInView from '../components/animations/FadeInView';
import { brands, getLegendaryMotorcycles } from '../data/motorcycles';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const legendaryBikes = getLegendaryMotorcycles().slice(0, 4);

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
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070A12]/60 via-[#070A12]/40 to-[#070A12]" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Welcome to MuGaw
            </span>
            <h1 className="text-hero font-display font-black text-white uppercase tracking-tight mb-6">
              The Art of
              <br />
              <span className="text-gradient">The Machine</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
              Curated motorcycles, timeless engineering, and the stories behind every build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/brands" className="btn-primary">
                Explore Showroom
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/categories" className="btn-secondary">
                Browse Categories
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-400 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#B8B2F2] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Wall Section */}
      <section className="py-24 px-6 lg:px-12">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
              Brand Archive
            </span>
            <h2 className="text-section font-display font-black text-white uppercase mt-4">
              Built by Legends
            </h2>
          </div>
        </FadeInView>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
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
                className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#B8B2F2]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/200x200/1a1a2e/B8B2F2?text=${brand.name}`;
                    }}
                  />
                </div>
                <h3 className="text-center font-display font-semibold text-white group-hover:text-[#B8B2F2] transition-colors">
                  {brand.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Model Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B8B2F2]/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInView direction="left">
              <div>
                <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                  Featured Model
                </span>
                <h2 className="text-section font-display font-black text-white uppercase mt-4 mb-6">
                  Yamaha
                  <br />
                  <span className="text-gradient">MT-09</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Hyper Naked • 890cc CP3 • Agile Torque
                </p>
                <p className="text-gray-400 mb-8">
                  The MT-09 features Yamaha's revolutionary CP3 engine with its distinctive 
                  inline-three configuration, delivering agile torque and thrilling performance 
                  that redefines the naked bike segment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/brands/yamaha/mt09" className="btn-primary">
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="btn-secondary">
                    <Play className="w-5 h-5" />
                    Watch Video
                  </button>
                </div>
              </div>
            </FadeInView>

            <FadeInView direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#B8B2F2]/20 blur-[100px] rounded-full" />
                <img
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80"
                  alt="Yamaha MT-09"
                  className="relative z-10 w-full rounded-2xl shadow-2xl"
                />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Legendary Bikes Section */}
      <section className="py-24 px-6 lg:px-12">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
              Iconic Machines
            </span>
            <h2 className="text-section font-display font-black text-white uppercase mt-4">
              Legendary Bikes
            </h2>
          </div>
        </FadeInView>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
          {legendaryBikes.map(({ brand, motorcycle }) => (
            <motion.div key={motorcycle.id} variants={itemVariants}>
              <Link
                to={`/brands/${brand.id}/${motorcycle.id}`}
                className="group block"
              >
                <div className="motorcycle-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={motorcycle.image}
                      alt={motorcycle.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[#B8B2F2] text-xs font-semibold uppercase tracking-wider">
                      {brand.name}
                    </span>
                    <h3 className="font-display font-bold text-white text-lg mt-1 group-hover:text-[#B8B2F2] transition-colors">
                      {motorcycle.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">{motorcycle.year}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <FadeInView delay={0.4} className="text-center mt-12">
          <Link to="/brands" className="btn-secondary">
            View All Bikes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeInView>
      </section>

      {/* Categories Preview Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
              Browse by Style
            </span>
            <h2 className="text-section font-display font-black text-white uppercase mt-4">
              Find Your Ride
            </h2>
          </div>
        </FadeInView>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
            { name: 'Sport', image: 'images/categories/sport.jpg', count: 12 },
            { name: 'Naked', image: 'images/categories/naked.jpg', count: 8 },
            { name: 'Cruiser', image: 'images/categories/cruiser.jpg', count: 6 },
            { name: 'Adventure', image: 'images/categories/adventure.jpg', count: 10 },
            { name: 'Touring', image: 'images/categories/touring.jpg', count: 4 },
            { name: 'Superbike', image: 'images/categories/superbike.jpg', count: 14 },
          ].map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Link
                to={`/categories/${category.name.toLowerCase()}`}
                className="group block category-card"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="category-card-content">
                  <h3 className="font-display font-bold text-white text-xl group-hover:text-[#B8B2F2] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{category.count} bikes</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1614165936126-2ed18e471b10?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-[#070A12]/80" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInView>
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
              Test Ride
            </span>
            <h2 className="text-section font-display font-black text-white uppercase mt-4 mb-6">
              Feel The
              <br />
              <span className="text-gradient">Power</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a ride at your nearest dealer. No commitment—just the road 
              and the pure thrill of two wheels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Book a Test Ride
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Find Showroom
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
