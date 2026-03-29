import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Filter, Bike } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import FadeInView from '../components/animations/FadeInView';
import { categories, getMotorcyclesByCategory, brands } from '../data/motorcycles';

const Categories = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  
  const selectedCategory = categoryId 
    ? categories.find(c => c.id === categoryId || c.name.toLowerCase() === categoryId?.toLowerCase())
    : null;
  
  const bikesInCategory = selectedCategory 
    ? getMotorcyclesByCategory(selectedCategory.name)
    : [];

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
      <section className="relative h-[50vh] w-full overflow-hidden">
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
              Browse by Style
            </span>
            <h1 className="text-hero font-display font-black text-white uppercase tracking-tight text-center">
              {selectedCategory ? selectedCategory.name : 'Find Your'}
              <br />
              <span className="text-gradient">{selectedCategory ? 'Ride' : 'Perfect Ride'}</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Category Filter */}
      {!selectedCategory && (
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <FadeInView>
              <div className="text-center mb-16">
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  From city streets to mountain passes—choose the machine that matches your rhythm.
                </p>
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
              {categories.map((category) => {
                const count = brands.flatMap(b => b.motorcycles).filter(m => 
                  m.category.toLowerCase() === category.name.toLowerCase()
                ).length;
                
                return (
                  <motion.div key={category.id} variants={itemVariants}>
                    <Link
                      to={`/categories/${category.id}`}
                      className="group block category-card"
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                        }}
                      />
                      <div className="category-card-content">
                        <h3 className="font-display font-bold text-white text-2xl group-hover:text-[#B8B2F2] transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                        <p className="text-[#B8B2F2] text-sm mt-2">{count} bikes</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Bikes in Selected Category */}
      {selectedCategory && (
        <>
          <section className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <FadeInView>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white">
                      {selectedCategory.name} Motorcycles
                    </h2>
                    <p className="text-gray-400 mt-2">{selectedCategory.description}</p>
                  </div>
                  <Link to="/categories" className="btn-secondary">
                    <Filter className="w-4 h-4" />
                    All Categories
                  </Link>
                </div>
              </FadeInView>

              {bikesInCategory.length > 0 ? (
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
                  {bikesInCategory.map(({ brand, motorcycle }) => (
                    <motion.div key={motorcycle.id} variants={itemVariants}>
                      <Link
                        to={`/brands/${brand.id}/${motorcycle.id}`}
                        className="group block"
                      >
                        <div className="motorcycle-card h-full">
                          <div className="aspect-[4/3] overflow-hidden relative">
                            <img
                              src={motorcycle.image}
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
                            {motorcycle.isLegendary && (
                              <div className="absolute top-4 right-4">
                                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                  Legendary
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="p-6">
                            <span className="text-[#B8B2F2] text-xs font-semibold uppercase tracking-wider">
                              {brand.name}
                            </span>
                            <h3 className="font-display font-bold text-white text-xl mt-1 group-hover:text-[#B8B2F2] transition-colors">
                              {motorcycle.name}
                            </h3>
                            <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                              {motorcycle.description}
                            </p>
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
              ) : (
                <FadeInView>
                  <div className="text-center py-16">
                    <Bike className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      No bikes found
                    </h3>
                    <p className="text-gray-400">
                      We couldn't find any {selectedCategory.name.toLowerCase()} bikes in our collection.
                    </p>
                  </div>
                </FadeInView>
              )}
            </div>
          </section>

          {/* Other Categories */}
          <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
            <div className="max-w-7xl mx-auto">
              <FadeInView>
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-display font-bold text-white">
                    Explore Other Categories
                  </h2>
                </div>
              </FadeInView>

              <div className="flex flex-wrap justify-center gap-4">
                {categories
                  .filter(c => c.id !== selectedCategory.id)
                  .map((category) => (
                    <Link
                      key={category.id}
                      to={`/categories/${category.id}`}
                      className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:border-[#B8B2F2]/50 hover:text-[#B8B2F2] transition-all"
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <FadeInView>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section font-display font-black text-white uppercase mb-6">
              Ready to Ride?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Explore all our brands and find the motorcycle that speaks to your soul.
            </p>
            <Link to="/brands" className="btn-primary">
              View All Brands
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInView>
      </section>
    </PageTransition>
  );
};

export default Categories;
