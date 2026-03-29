import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import FadeInView from '../components/animations/FadeInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@mugaw.showroom',
      href: 'mailto:hello@mugaw.showroom',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 014-2200',
      href: 'tel:+15550142200',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '88 Velocity Lane, Motor District',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Sat: 9AM - 7PM',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

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
              Get in Touch
            </span>
            <h1 className="text-hero font-display font-black text-white uppercase tracking-tight text-center">
              Contact <span className="text-gradient">Us</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeInView direction="left">
              <div>
                <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                  Let's Talk
                </span>
                <h2 className="text-3xl font-display font-bold text-white mt-4 mb-6">
                  We'd Love to Hear From You
                </h2>
                <p className="text-gray-400 mb-8">
                  Whether you have questions about a specific motorcycle, want to schedule 
                  a test ride, or just want to chat about bikes, we're here for you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#B8B2F2]/50 transition-colors">
                        <item.icon className="w-5 h-5 text-[#B8B2F2]" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-sm">{item.label}</div>
                        <div className="text-white group-hover:text-[#B8B2F2] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-white font-display font-semibold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#B8B2F2] hover:border-[#B8B2F2]/50 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Contact Form */}
            <FadeInView direction="right" delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8B2F2]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8B2F2]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8B2F2]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're looking for..."
                        required
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8B2F2] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-primary"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#111725]/50">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-12">
              <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                Visit Us
              </span>
              <h2 className="text-section font-display font-black text-white uppercase mt-4">
                Find Our Showroom
              </h2>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Showroom Location"
              />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="text-center mb-12">
              <span className="text-[#B8B2F2] text-sm font-semibold tracking-[0.2em] uppercase">
                FAQ
              </span>
              <h2 className="text-section font-display font-black text-white uppercase mt-4">
                Common Questions
              </h2>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer test rides?',
                  a: 'Yes! We encourage test rides. Simply book an appointment through our contact form or give us a call to schedule a time.',
                },
                {
                  q: 'Can I trade in my current motorcycle?',
                  a: 'Absolutely. We accept trade-ins and offer competitive valuations. Bring your bike in for an assessment.',
                },
                {
                  q: 'Do you ship motorcycles internationally?',
                  a: 'Yes, we work with trusted shipping partners to deliver motorcycles worldwide. Contact us for a quote.',
                },
                {
                  q: 'What payment options do you accept?',
                  a: 'We accept cash, bank transfers, and work with several financing partners to make your dream bike accessible.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="font-display font-semibold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </FadeInView>
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
              Ready to Find
              <br />
              <span className="text-gradient">Your Ride?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Explore our collection of legendary motorcycles and find the perfect 
              machine for your next adventure.
            </p>
            <Link to="/brands" className="btn-primary">
              Explore Showroom
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInView>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
