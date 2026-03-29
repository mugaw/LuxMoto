import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Gauge, Weight, Zap, MapPin, Trophy, Clock } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import FadeInView from '../components/animations/FadeInView';
import { getMotorcycleById, getBrandById, brands } from '../data/motorcycles';
import { getAssetPath } from '../utils/assets';

const MotorcycleDetail = () => {
  const { brandId, motorcycleId } = useParams<{ brandId: string; motorcycleId: string }>();
  const brand = getBrandById(brandId || '');
  const motorcycle = getMotorcycleById(brandId || '', motorcycleId || '');

  if (!motorcycle || !brand) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Motorcycle Not Found
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

  // Get related bikes from same brand
  const relatedBikes = brand.motorcycles
    .filter((m) => m.id !== motorcycle.id)
    .slice(0, 3);

  // Get bikes from other brands in same category
  const similarBikes = brands
    .flatMap((b) =>
      b.motorcycles
        .filter((m) => m.category === motorcycle.category && m.id !== motorcycle.id)
        .map((m) => ({ brand: b, motorcycle: m }))
    )
    .slice(0, 3);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getAssetPath(motorcycle.image)}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/50 to-[#070A12]/30" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-12">
          <FadeInView>
            <div className="flex items-center gap-4 mb-6">
              <Link
                to={`/brands/${brand.id}`}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {brand.name}
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#B8B2F2] text-[#070A12] text-sm font-bold px-3 py-1 rounded-full">
                {motorcycle.year}
              </span>
              <span className="text-gray-400 text-sm">{motorcycle.category}</span>
              {motorcycle.isLegendary && (
                <span className="bg-amber-500/20 text-amber-400 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  Legendary
                </span>
              )}
            </div>

            <h1 className="text-hero font-display font-black text-white uppercase">
              {motorcycle.name}
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-16 px-6 lg:px-12 -mt-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#111725] border border-white/10 rounded-xl p-6 text-center">
                <Gauge className="w-8 h-8 text-[#B8B2F2] mx-auto mb-3" />
                <div className="text-2xl font-display font-bold text-white">{motorcycle.power}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Power</div>
              </div>
              <div className="bg-[#111725] border border-white/10 rounded-xl p-6 text-center">
                <Weight className="w-8 h-8 text-[#B8B2F2] mx-auto mb-3" />
                <div className="text-2xl font-display font-bold text-white">{motorcycle.weight}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Weight</div>
              </div>
              <div className="bg-[#111725] border border-white/10 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-[#B8B2F2] mx-auto mb-3" />
                <div className="text-lg font-display font-bold text-white truncate">{motorcycle.engine}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Engine</div>
              </div>
              <div className="bg-[#111725] border border-white/10 rounded-xl p-6 text-center">
                <Calendar className="w-8 h-8 text-[#B8B2F2] mx-auto mb-3" />
                <div className="text-2xl font-display font-bold text-white">{motorcycle.year}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Year</div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
              About This Model
            </span>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              {motorcycle.description}
            </p>
          </FadeInView>

          {motorcycle.topSpeed && (
            <FadeInView delay={0.2}>
              <div className="mt-12 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#B8B2F2]/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-[#B8B2F2]" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">{motorcycle.topSpeed}</div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">Top Speed</div>
                </div>
              </div>
            </FadeInView>
          )}
        </div>
      </section>

      {/* Brand Info */}
      <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <img
                  src={getAssetPath(brand.image)}
                  alt={brand.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/100x100/1a1a2e/B8B2F2?text=${brand.name[0]}`;
                  }}
                />
              </div>
              <div className="text-center md:text-left">
                <span className="text-gray-500 text-sm uppercase tracking-wider">Manufacturer</span>
                <h2 className="font-display font-bold text-2xl text-white mt-1">{brand.name}</h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {brand.country}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Since {brand.founded}
                  </span>
                </div>
                <Link
                  to={`/brands/${brand.id}`}
                  className="inline-flex items-center gap-2 text-[#B8B2F2] hover:text-white transition-colors mt-4"
                >
                  View All {brand.name} Models
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Related Bikes */}
      {relatedBikes.length > 0 && (
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                  More From {brand.name}
                </span>
                <h2 className="text-section font-display font-black text-white uppercase mt-4">
                  Related Models
                </h2>
              </div>
            </FadeInView>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedBikes.map((related, index) => (
                <FadeInView key={related.id} delay={index * 0.1}>
                  <Link
                    to={`/brands/${brand.id}/${related.id}`}
                    className="group block"
                  >
                    <div className="motorcycle-card">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={getAssetPath(related.image)}
                          alt={related.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                          }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-gray-500 text-xs uppercase tracking-wider">
                          {related.category}
                        </span>
                        <h3 className="font-display font-bold text-white text-lg mt-1 group-hover:text-[#B8B2F2] transition-colors">
                          {related.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">{related.year}</p>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Similar Category Bikes */}
      {similarBikes.length > 0 && (
        <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
          <div className="max-w-7xl mx-auto">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                  Same Category
                </span>
                <h2 className="text-section font-display font-black text-white uppercase mt-4">
                  More {motorcycle.category} Bikes
                </h2>
              </div>
            </FadeInView>

            <div className="grid md:grid-cols-3 gap-8">
              {similarBikes.map(({ brand: similarBrand, motorcycle: similar }, index) => (
                <FadeInView key={similar.id} delay={index * 0.1}>
                  <Link
                    to={`/brands/${similarBrand.id}/${similar.id}`}
                    className="group block"
                  >
                    <div className="motorcycle-card">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={getAssetPath(similar.image)}
                          alt={similar.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                          }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[#B8B2F2] text-xs font-semibold uppercase tracking-wider">
                          {similarBrand.name}
                        </span>
                        <h3 className="font-display font-bold text-white text-lg mt-1 group-hover:text-[#B8B2F2] transition-colors">
                          {similar.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">{similar.year}</p>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-24 px-6 lg:px-12">
        <FadeInView>
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link to={`/brands/${brand.id}`} className="btn-secondary">
              <ArrowLeft className="w-5 h-5" />
              Back to {brand.name}
            </Link>
            <Link to="/brands" className="btn-primary">
              All Brands
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInView>
      </section>
    </PageTransition>
  );
};

export default MotorcycleDetail;
