import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Award, Users, Globe, Heart } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import FadeInView from '../components/animations/FadeInView';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We live and breathe motorcycles. Every bike in our showroom is chosen with love and respect for the craft.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Only the finest machines make it to our collection. We curate legends, not just motorcycles.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We are riders first. Our community spans the globe, united by the love of two wheels.',
    },
    {
      icon: Globe,
      title: 'Heritage',
      description: 'From the earliest pioneers to modern marvels, we preserve and celebrate motorcycling history.',
    },
  ];

  const stats = [
    { value: '6', label: 'Legendary Brands', suffix: '' },
    { value: '36', label: 'Iconic Models', suffix: '+' },
    { value: '100', label: 'Years of History', suffix: '+' },
    { value: '∞', label: 'Passion', suffix: '' },
  ];

  const team = [
    {
      name: 'MuGaw',
      role: 'Founder & Curator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Acquisitions',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Marcus Weber',
      role: 'Master Technician',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
    {
      name: 'Yuki Tanaka',
      role: 'Brand Historian',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
  ];

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
              Our Story
            </span>
            <h1 className="text-hero font-display font-black text-white uppercase tracking-tight text-center">
              The Art of
              <br />
              <span className="text-gradient">The Machine</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Mission
            </span>
            <h2 className="text-section font-display font-black text-white uppercase mt-6 mb-8">
              Preserving Legends,<br />Inspiring Riders
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              MuGaw MotoShowroom was born from a simple belief: every motorcycle has a story worth telling. 
              From the earliest two-stroke pioneers to today's cutting-edge superbikes, we curate the world's 
              most iconic machines and share their legends with riders who understand that motorcycling is 
              more than transportation—it's a way of life.
            </p>
          </FadeInView>
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
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-black text-[#B8B2F2] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-16">
              <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                What We Stand For
              </span>
              <h2 className="text-section font-display font-black text-white uppercase mt-4">
                Our Values
              </h2>
            </div>
          </FadeInView>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#B8B2F2]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#B8B2F2]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#B8B2F2]" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInView direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-[#B8B2F2]/20 blur-[100px] rounded-full" />
                <img
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80"
                  alt="Motorcycle showroom"
                  className="relative z-10 w-full rounded-2xl shadow-2xl"
                />
              </div>
            </FadeInView>

            <FadeInView direction="right" delay={0.2}>
              <div>
                <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                  Our Journey
                </span>
                <h2 className="text-3xl font-display font-bold text-white mt-4 mb-6">
                  From Passion to Purpose
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    What started as a personal collection of vintage motorcycles has grown into 
                    a global destination for enthusiasts who share our passion for two-wheeled 
                    excellence.
                  </p>
                  <p>
                    Every bike in our showroom has been carefully selected not just for its 
                    specifications, but for the story it tells—the races it won, the riders 
                    who loved it, and the engineering breakthroughs it represented.
                  </p>
                  <p>
                    Today, MuGaw MotoShowroom stands as a tribute to the art of the machine, 
                    a place where legends live on and new riders discover their passion.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-16">
              <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                The People
              </span>
              <h2 className="text-section font-display font-black text-white uppercase mt-4">
                Meet Our Team
              </h2>
            </div>
          </FadeInView>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
            {team.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <div className="group">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">
                    {member.name}
                  </h3>
                  <p className="text-[#B8B2F2] text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
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
            <h2 className="text-section font-display font-black text-white uppercase mb-6">
              Join The
              <br />
              <span className="text-gradient">Community</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a seasoned rider or just discovering the world of motorcycles, 
              there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/brands" className="btn-primary">
                Explore Showroom
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
