'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaInstagram, FaYoutube, FaTiktok, FaArrowRight, FaEnvelope, FaFacebook, FaStar, FaHandshake, FaChartLine, FaCrosshairs, FaMedal, FaChartBar, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 shadow-sm py-3 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="relative w-40 h-12">
            <Image
              src="/duoblack.svg"
              alt="DuoTalent"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Quiénes Somos</a>
            <a href="#talent" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Nuestro Talento</a>
            <a href="#clients" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Clientes</a>
            <a href="#partners" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Aliados</a>
            <a href="#contact" className="bg-gradient-to-r from-[#00A396] to-[#00C2B3] text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300 font-medium shadow-md">Contacto</a>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
        
       {/* Mobile Menu */}
{isMenuOpen && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
    className="md:hidden bg-gray-900 px-4 pb-4"
  >
    <div className="flex flex-col space-y-3 pt-2">
      <a 
        href="#about" 
        onClick={() => setIsMenuOpen(false)} 
        className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
      >
        Quiénes Somos
      </a>
      <a 
        href="#talent" 
        onClick={() => setIsMenuOpen(false)} 
        className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
      >
        Nuestro Talento
      </a>
      <a 
        href="#clients" 
        onClick={() => setIsMenuOpen(false)} 
        className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
      >
        Clientes
      </a>
      <a 
        href="#partners" 
        onClick={() => setIsMenuOpen(false)} 
        className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
      >
        Aliados
      </a>
      <a 
        href="#contact" 
        onClick={() => setIsMenuOpen(false)} 
        className="bg-gradient-to-r from-[#00A396] to-[#00C2B3] text-white px-4 py-2 rounded-full hover:opacity-90 transition-colors text-center mt-2"
      >
        Contacto
      </a>
    </div>
  </motion.div>
)}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden bg-gradient-to-r from-[#00C2B3] to-[#0077B6] text-white py-20"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "150%"],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 w-[400px] h-[400px] rounded-full bg-[#00C2B3]/20 mix-blend-overlay"
          />
          
          <motion.div
            animate={{
              x: ["120%", "-100%"],
              y: ["-50%", "80%"],
              rotate: [45, 180]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute w-[300px] h-[150px] bg-[#0077B6]/15 mix-blend-overlay"
          />
          
          <motion.div
            animate={{
              x: ["0%", "90%", "10%", "100%", "0%"],
              y: ["0%", "80%", "20%", "60%", "0%"],
              rotate: [0, 270]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
            className="absolute w-[200px] h-[200px] rounded-full bg-[#00A396]/20 mix-blend-overlay"
          />
          
          <motion.div
            animate={{
              y: ["-50%", "120%"],
              x: ["100%", "30%"],
              rotate: [0, 180],
              scaleX: [1, 1.5]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7
            }}
            className="absolute w-[250px] h-[400px] rounded-full bg-[#00C2B3]/15 mix-blend-overlay"
          />
        </div>
        
        <div className="absolute inset-0 z-10 bg-black/10 backdrop-blur-sm"></div>
        
        <div className="container relative z-20 mx-auto px-6 text-center">
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
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
              <span className="font-bold">+300</span> influencers verificados
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
              <span className="font-bold">+5M</span> alcance combinado
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
              <span className="font-bold">92%</span> satisfacción de marcas
            </div>
          </motion.div>

          
          <motion.a
            href="#talent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-flex items-center gap-2 bg-white text-[#00A396] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Ver talentos <FaArrowRight />
          </motion.a>
          
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-10 bottom-10 hidden lg:block z-30"
          >
            <div className="relative bg-white/20 backdrop-blur p-4 rounded-lg shadow-lg w-48">
              <div className="absolute -top-3 -left-3 bg-[#00C2B3] text-white p-2 rounded-full">
                <FaChartLine size={16} />
              </div>
              <p className="text-sm font-bold text-white">+150% engagement</p>
              <p className="text-xs">en campañas recientes</p>
            </div>
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/5 right-1/5 text-white opacity-30"
          >
            <FaInstagram size={40} />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-1/3 left-3/4 text-white opacity-30 z-15"
          >
            <FaFacebook size={36} />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -115, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/5 left-1/5 text-white opacity-30"
          >
            <FaYoutube size={48} />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 25, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-3/4 left-1/3 text-white opacity-30"
          >
            <FaTiktok size={32} />
          </motion.div>
        </div>
      </motion.section>

      {/* Sección de Clientes */}
      <section id="clients" className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Hemos trabajado con <span className="text-[#00A396]">marcas líderes</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {[
              { name: "Amazon Prime", logo: "/amazon.svg" },
              { name: "Coppel", logo: "/coppel.svg" },
              { name: "SHEIN", logo: "/shein.svg" },
              { name: "BYD", logo: "/byd.svg" },
              { name: "Elanco", logo: "/elanco.svg" },
              { name: "Maruchan", logo: "/maruchan.svg" },
              { name: "Huawei", logo: "/huawei.svg" }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                  transition: {
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.8 }
                }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all flex items-center justify-center h-24"
              >
                <Image 
                  src={client.logo} 
                  alt={client.name}
                  width={120}
                  height={80}
                  className="object-contain h-full w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección About */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Potencia tu marca con <span className="text-[#00A396]">influencers estratégicos</span></h3>
            <p className="text-gray-600">
              El <strong>72% de las marcas</strong> eligen Instagram para campañas de influencers. Nosotros te ayudamos a <strong>destacar</strong> en esa plataforma y más.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { 
                icon: <FaCrosshairs className="text-white text-xl" />,
                title: "Match Precision", 
                desc: "Algoritmo con 92% de efectividad",
                bg: "bg-[#0077B6]"
              },
              { 
                icon: <FaMedal className="text-white text-xl" />,
                title: "Talento Certificado", 
                desc: "Engagement auditado y verificado",
                bg: "bg-[#00A396]"
              },
              { 
                icon: <FaChartBar className="text-white text-xl" />,
                title: "ROI Transparente", 
                desc: "Métricas en tiempo real",
                bg: "bg-[#005F73]"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className={`${item.bg} p-6 rounded-xl text-white shadow-md hover:shadow-lg transition-all`}
              >
                <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Sección Talent */}
      <section id="talent" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Nuestro <span className="text-[#00A396]">Talento Estrella</span>
          </motion.h3>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "Karen Ornelas",
                image: "/karen.jpg",
                category: "Lifestyle",
                instagram: "https://instagram.com/karen_ornelass_",
                tiktok: "https://tiktok.com/@karen_ornelass_"
              },
              {
                name: "Mir Mejia",
                image: "/mir.jpg",
                category: "Fitness",
                instagram: "https://instagram.com/mir182",
                tiktok: "https://tiktok.com/@mirmejia"
              },
              {
                name: "Vania Castillo",
                image: "/vania.jpg",
                category: "Beauty",
                instagram: "https://instagram.com/vanniacastillo",
                tiktok: "https://tiktok.com/@vanniacastillo2"
              },
              {
                name: "Sandra Medina",
                image: "/san.jpg",
                category: "Pet Lover",
                instagram: "https://instagram.com/san.mendezm",
                tiktok: "https://tiktok.com/@san.mendez"
              }
            ].map((talent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 10px 25px -5px rgba(0, 163, 150, 0.2)"
                }}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={talent.image}
                    alt={talent.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-[#00C2B3] font-medium tracking-wider">{talent.category}</span>
                      <h4 className="text-lg font-bold text-white mt-1">{talent.name}</h4>
                    </div>
                    <div className="flex space-x-2">
                      <a href={talent.instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
                        <FaInstagram className="text-white text-sm" />
                      </a>
                      <a href={talent.tiktok} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition">
                        <FaTiktok className="text-white text-sm" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-2 relative">
                    <div className="w-full h-px bg-white/20 absolute bottom-0"></div>
                    <div className="w-0 group-hover:w-full h-px bg-[#00C2B3] absolute bottom-0 transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 border border-transparent group-hover:border-[#00C2B3]/100 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  {/* Sección Partners */}
<section id="partners" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-gray-800 mb-16"
    >
      Nuestros <span className="text-[#00A396]">Aliados Estratégicos</span>
    </motion.h3>
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
    >
      {[
        {
          name: "Mextop",
          logo: "/mextop.jpg",
          description: "Plataforma líder en talento digital",
          category: "Agencia Digital",
          igProfile: "https://www.instagram.com/mextop_" // Agregar perfil de IG
        },
        {
          name: "Giselle Gonzales",
          logo: "/giselle.jpg",
          description: "Especialistas en influencer marketing",
          category: "Management",
          igProfile: "https://www.instagram.com/giselleglezv" // Agregar perfil de IG
        }
      ].map((partner, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm text-[#00A396] font-semibold">{partner.category}</span>
                <h4 className="text-2xl font-bold text-white mt-1">{partner.name}</h4>
              </div>
              <div className="bg-[#00A396] text-white px-2 py-1 rounded-full text-xs font-bold">
                <FaStar className="inline mr-1" /> Premium
              </div>
            </div>
            
            <p className="text-white/90 mt-2 text-sm">{partner.description}</p>
            
            <a 
              href={partner.igProfile} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 text-white flex items-center gap-2 text-sm font-medium hover:text-[#00C2B3] transition-colors"
            >
              Ver perfil <FaArrowRight size={12} />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Sección Contacto */}
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

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.2, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-12"
            >
              <div className="relative w-24 h-24">
                <Image 
                  src="/dlogo.svg" 
                  alt="DuoTalent Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            
            <div className="flex justify-center mb-2 space-x-8 md:space-x-12">
  <motion.a
    href="https://www.instagram.com/duotalentmx/"
    whileHover={{ y: -5 }}
    className="text-[#00C2B3] hover:text-white transition-colors"
    aria-label="Instagram"
    target="_blank" // Opcional: abre el enlace en una nueva pestaña
    rel="noopener noreferrer" // Recomendado por seguridad para enlaces externos
  >
    <FaInstagram className="text-2xl md:text-3xl" />
  </motion.a>
</div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.8, duration: 1 }
              }}
              viewport={{ once: true }}
              className="text-center border-t border-gray-800 pt-8 w-full"
            >
              <p className="text-gray-400">
                © {new Date().getFullYear()} <span className="text-[#00C2B3]">DuoTalent</span>. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Transformando el influencer marketing con talento verificado
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}