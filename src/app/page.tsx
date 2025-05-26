'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Datos del talento
  const talentData = [
    {
      name: "Karen Ornelas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
      category: "Influencer Lifestyle",
      instagram: "https://instagram.com/karenornelas",
      tiktok: "https://tiktok.com/@karenornelas"
    },
    {
      name: "Mir Mejia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      category: "Fitness Coach",
      instagram: "https://instagram.com/mirmejia",
      tiktok: "https://tiktok.com/@mirmejia"
    },
    {
      name: "Vania Castillo",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
      category: "Beauty Expert",
      instagram: "https://instagram.com/vaniacastillo",
      tiktok: "https://tiktok.com/@vaniacastillo"
    }
  ];

  // Aliados
  const partners = [
    { name: "Mextop", logo: "/logos/mextop.svg" },
    { name: "Giselle Gonzales", logo: "/logos/giselle.svg" }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* ----- Navbar ----- */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm py-4 sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#00A396]">DuoTalent</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#00C2B3] transition">Quiénes Somos</a>
            <a href="#talent" className="text-gray-700 hover:text-[#00C2B3] transition">Nuestro Talento</a>
            <a href="#partners" className="text-gray-700 hover:text-[#00C2B3] transition">Aliados</a>
            <a href="#contact" className="bg-[#00A396] text-white px-4 py-2 rounded-full hover:bg-[#008579] transition">Contacto</a>
          </div>
        </div>
      </motion.nav>

      {/* ----- Hero Section ----- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-[#00C2B3] to-[#0077B6] text-white py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Conectamos <span className="underline decoration-3">talento excepcional</span> con marcas líderes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            La agencia de management que transforma campañas publicitarias con influencers verificados.
          </motion.p>
          <motion.a
            href="#talent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-white text-[#00A396] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Ver talentos <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

      {/* ----- About Section ----- */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Tu socio en <span className="text-[#00A396]">gestión de talento</span></h3>
            <p className="text-lg text-gray-600 mb-8">
              En <strong>DuoTalent</strong>, no solo reclutamos, <strong>seleccionamos</strong> al profesional que encajará con la <strong>esencia de tu marca</strong>. 
              <span className="block mt-4">🔍 Usamos inteligencia de mercado + análisis de personalidad para garantizar <strong>química creativa</strong>.</span>
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { 
                icon: "🚀", 
                title: "Match Precision", 
                desc: "Algoritmo propio con 92% de acierto" 
              },
              { 
                icon: "💎", 
                title: "Talento Premium", 
                desc: "Influencers con engagement verificados" 
              },
              { 
                icon: "📈", 
                title: "ROI Medible", 
                desc: "Informes de desempeño mensuales" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-[#F5EDE0] p-6 rounded-xl"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ----- Talent Section ----- */}
      <section id="talent" className="py-16 bg-[#FFF9F0]">
        <div className="container mx-auto px-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-black mb-12"
          >
            Nuestros <span className="text-[#00A396]">Talentos Estrella</span>
          </motion.h3>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {talentData.map((talent, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img 
                  src={talent.image} 
                  alt={talent.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-bold text-black text-xl mb-2">{talent.name}</h4>
                  <p className="text-[#00A396] mb-4">{talent.category}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={talent.instagram} 
                      target="_blank"
                      className="text-pink-600 hover:text-pink-800 transition hover:scale-110"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a 
                      href={talent.tiktok} 
                      target="_blank"
                      className="text-gray-800 hover:text-black transition hover:scale-110"
                    >
                      <FaTiktok size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ----- Partners Section ----- */}
      <section id="partners" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Aliados <span className="text-[#00A396]">Estratégicos</span>
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-12"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.1 }}
                className="bg-[#F5EDE0] p-6 rounded-lg flex items-center justify-center w-48 h-32"
              >
                <span className="text-xl font-bold text-gray-700">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ----- Contact Section ----- */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-[#00A396] text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            variants={fadeIn}
            className="text-3xl font-bold mb-6"
          >
            ¿Listo para <span className="underline decoration-2">revolucionar</span> tu marca?
          </motion.h3>
          <motion.p
            variants={fadeIn}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Contáctanos y recibe una selección personalizada en menos de 24 horas.
          </motion.p>
          <motion.a
            href="mailto:contacto@duotalentt.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-[#00A396] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            <FaEnvelope size={20} /> contacto@duotalentt.com
          </motion.a>
        </div>
      </motion.section>

      {/* ----- Footer ----- */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} DuoTalent Agency. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}