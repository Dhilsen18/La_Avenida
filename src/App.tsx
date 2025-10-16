import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import React, { useEffect, useState } from 'react';
import MapComponent from './components/MapComponent';

// Importar logos (reemplaza con tus archivos reales)
import logoPrincipal from './assets/logos/Logo2025.jpg';
import fondoPrincipal from './assets/Imagenes2025/fondito2.jpg';
// Importar imágenes de nosotros
import nosotros1 from './assets/Imagenes2025/Nosotros1.jpg';
import nosotros2 from './assets/Imagenes2025/Nosotros2.jpg';
import nosotros3 from './assets/Imagenes2025/Nosotros3.jpg';
import noso1 from './assets/Imagenes2025/Noso1.jpg';
import noso3 from './assets/Imagenes2025/Noso3.png';
import noso4 from './assets/Imagenes2025/Noso4.png';
// Importar imágenes de café
import chocolatecaliente from './assets/Imagenes2025/chocolatecaliente.png';
import mocaccino from './assets/Imagenes2025/mocaccino.png';
import latte from './assets/Imagenes2025/latte.jpg';
import capucino from './assets/Imagenes2025/capucino.png';
import americano from './assets/Imagenes2025/americano.jpeg';
import espresso from './assets/Imagenes2025/espresso.jpeg';
// Importar imágenes de café frío
import iccelate from './assets/Imagenes2025/iccelate.png';
import iccemocca from './assets/Imagenes2025/iccemocca.png';
import destacado1 from './assets/Imagenes2025/Destacado1.jpg';
import destacado2 from './assets/Imagenes2025/Destacado2.jpg';
import destacado3 from './assets/Imagenes2025/Destacado3.jpg';
import destacado4 from './assets/Imagenes2025/Destacado 4.jpg';
import destacado5 from './assets/Imagenes2025/Destacado5.jpg';
import bowl from './assets/Imagenes2025/bowl.jpg';
import hallow from './assets/Imagenes2025/hallow.jpg';
import Enc1 from './assets/Imagenes2025/Enc1.jpg';
import Enc2 from './assets/Imagenes2025/Enc2.jpg';
import Enc3 from './assets/Imagenes2025/Enc3.jpg';
import Enc4 from './assets/Imagenes2025/Enc4.jpg';
import avenidaa from './assets/Imagenes2025/AVENIDAA.png';
// import logoCircular from './assets/logos/logo-circular.png';

// Importar imágenes de desayunos y brunch
import tostadas from './assets/Imagenes2025/tostadas.png';
import wafflesCasa from './assets/Imagenes2025/wafflesCasa.jpg';
import avenaBowl from './assets/Imagenes2025/avenaBowl.jpg';
import ensaladaFrutas from './assets/Imagenes2025/ensaladaFrutas.jpeg';
import lomoTamal from './assets/Imagenes2025/lomoTamal.png';
import huachano from './assets/Imagenes2025/huachano.jpg';
import tamal from './assets/Imagenes2025/tamal.jpeg';
import canasta from './assets/Imagenes2025/canasta.jpg';

// Importar imágenes de sanguches
import lomitocastilla from './assets/Imagenes2025/lomitocastilla.jpg';
import omelettequiñones from './assets/Imagenes2025/omelettequiñones.jpeg';
import principalbolognesi from './assets/Imagenes2025/principalbolognesi.png';
import favoritobelaunde from './assets/Imagenes2025/favoritobelaunde.png';
import Mixtoquilipe from './assets/Imagenes2025/Mixtoquilipe.jpg';
import croisantpollo from './assets/Imagenes2025/croisantpollo.jpeg';
import ciabattapollo from './assets/Imagenes2025/ciabattapollo.jpeg';
import tripleclasico from './assets/Imagenes2025/tripleclasico.png';
import tripledepollo from './assets/Imagenes2025/tripledepollo.png';

// Importar imágenes de menú principal - Platos de fondo
import arrozChaufa from './assets/Imagenes2025/arroz chaufa.png';
import milanesapollo from './assets/Imagenes2025/milanesapollo.jpg';
import spaggeti from './assets/Imagenes2025/spaggeti.jpeg';
import EspaguetiAlfredo from './assets/Imagenes2025/Espagueti Alfredo.jpeg';
import pollosaltadoalopobre from './assets/Imagenes2025/pollosaltadoalopobre.jpg';
import lomosaltado from './assets/Imagenes2025/lomosaltado.jpeg';

// Importar imágenes de menú principal - Sopas
import dietapollo from './assets/Imagenes2025/dietapollo.png';
import sopaminuta from './assets/Imagenes2025/sopaminuta.jpeg';

// Importar imágenes de menú principal - Ensaladas
import LightdelMolino from './assets/Imagenes2025/Light del Molino.jpeg';
import ensaladaquitasombrero from './assets/Imagenes2025/ensaladaquitasombrero.png';

// Importar imágenes de menú principal - Postres
import empanada from './assets/Imagenes2025/empanada.jpeg';
import CheesecakedeArándanos from './assets/Imagenes2025/Cheesecake de Arándanos.jpg';
import cheesecakemaracuya from './assets/Imagenes2025/cheesecakemaracuya.png';
import cheesecakefrutosrojos from './assets/Imagenes2025/cheesecakefrutosrojos.png';
import piedelimon from './assets/Imagenes2025/piedelimon.jpg';
import piemaracuya from './assets/Imagenes2025/piemaracuya.png';
import tortachocolate from './assets/Imagenes2025/tortachocolate.jpg';
import CheesecakedeCaramelconPecanas from './assets/Imagenes2025/Cheesecake de Caramel con Pecanas.jpg';
import TortadeChocolúcuma from './assets/Imagenes2025/Torta de Chocolúcuma.png';

// Importar imágenes de Burgers - Hamburguesas
import pandeazucar from './assets/Imagenes2025/pandeazucar.png';
import lapocita from './assets/Imagenes2025/lapocita.jpg';
import Maracana from './assets/Imagenes2025/Maracana.png';
import tuquillo from './assets/Imagenes2025/tuquillo.png';
import medano from './assets/Imagenes2025/medano.png';
import patillo from './assets/Imagenes2025/patillo.png';
import miniburguers from './assets/Imagenes2025/miniburguers.png';

// Importar imágenes de Burgers - Rondas
import rondacastillo from './assets/Imagenes2025/rondacastillo.png';
import pedregal from './assets/Imagenes2025/pedregal.png';

// Importar imágenes de Burgers - Picadas
import salchiclasica from './assets/Imagenes2025/salchiclasica.png';
import salchiavenida from './assets/Imagenes2025/salchiavenida.jpeg';
import mollejitas from './assets/Imagenes2025/mollejitas.png';
import Tequeños from './assets/Imagenes2025/Tequeños.jpeg';
import ClubSandwichdeAntivitos from './assets/Imagenes2025/Club Sandwich de Antivitos.jpg';
import alitasacevichadas from './assets/Imagenes2025/alitasacevichadas.jpeg';
import alitasbuffalo from './assets/Imagenes2025/alitasbuffalo.jpeg';

// Importar imágenes de Bebidas - Jugos Naturales
import papaya from './assets/Imagenes2025/papaya.jpg';
import Defrutatropical from './assets/Imagenes2025/De fruta tropical.jpeg';
import SurtidoAvenida from './assets/Imagenes2025/Surtido Avenida.jpg';
import Platanoconleche from './assets/Imagenes2025/Platano con leche.jpeg';
import Jugoarandano from './assets/Imagenes2025/Jugo arandano.jpg';

// Importar imágenes de Bebidas - Infusiones
import HierbaLuisa from './assets/Imagenes2025/Hierba Luisa.png';
import TéVerde from './assets/Imagenes2025/Té Verde.jpg';
import Jamaica from './assets/Imagenes2025/Jamaica.png';
import Cuzcu from './assets/Imagenes2025/Cuzcu.png';
import Tayca from './assets/Imagenes2025/Tayca.png';

// Importar imágenes de Bebidas - Frappes
import Frappedegalletasoreo from './assets/Imagenes2025/Frappe de galletas oreo.jpg';
import Frappedefresanatural from './assets/Imagenes2025/Frappe de fresa natural.png';
import Frappedecaramelo from './assets/Imagenes2025/Frappe de caramelo.jpg';
import Frappedemocca from './assets/Imagenes2025/Frappe de mocca.jpg';
import Frappedechocolate from './assets/Imagenes2025/Frappe de chocolate.jpeg';
import Frappedelúcuma from './assets/Imagenes2025/Frappe de lúcuma.jpg';
import Frappedevainilla from './assets/Imagenes2025/Frappe de vainilla.jpg';

// Importar imágenes de Bebidas - Bebidas Frías
import Agua from './assets/Imagenes2025/Agua.png';
import CocaColaoInkaKola from './assets/Imagenes2025/Coca Cola o Inka Kola.jpg';
import Limonadavaso from './assets/Imagenes2025/Limonada vaso.jpeg';
import Limonadafrescaenjarra from './assets/Imagenes2025/Limonada fresca en jarra.jpg';
import MaracuyaVaso from './assets/Imagenes2025/Maracuya vaso.png';
import Maracuyájarra from './assets/Imagenes2025/Maracuyá jarra.jpeg';
import Fresafrescaenvaso from './assets/Imagenes2025/Fresa fresca en vaso.jpg';
import Fresafrescaenjarra from './assets/Imagenes2025/Fresa fresca en jarra.png';
import Limonadafrozenenvaso from './assets/Imagenes2025/Limonada frozen en vaso.jpeg';
import Limonadafrozenenjarra from './assets/Imagenes2025/Limonada frozen en jarra.jpg';
import Maracuyáfrozenvaso1 from './assets/Imagenes2025/Maracuyá frozen vaso.jpeg';
import Maracuyáfrozenvaso2 from './assets/Imagenes2025/Maracuyá frozen vaso.jpg';

// Importar imágenes de Bebidas - Bebidas Alcohólicas
import CervezaPilsen from './assets/Imagenes2025/Cerveza Pilsen.jpg';
import cuzqueña from './assets/Imagenes2025/cuzqueña.png';
import CervezaCorona from './assets/Imagenes2025/Cerveza Corona.jpeg';

// Importar nuevas imágenes actualizadas
import Lomitoaljugonuevo from './assets/Imagenes2025/Lomito al jugo nuevo.jpg';
import chocolucumanuevo from './assets/Imagenes2025/chocolucuma nuevo.jpeg';
import Jugosurtidonuevo from './assets/Imagenes2025/Jugosurtido nuevo.png';
import * as AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import AOS CSS
import { motion, AnimatePresence } from 'framer-motion';

// Crear componentes motion con tipos correctos
const MotionDiv = motion.div as any;
const MotionSection = motion.section as any;
const MotionH1 = motion.h1 as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionButton = motion.button as any;
const MotionA = motion.a as any;
// Iconos usando Font Awesome (ya incluido en index.html)

// Componente Header

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const menuItems = [
    {
      id: 1,
      image: destacado1,
      title: "Desayunos Gourmet",
      description: "Waffles, pancakes y tostadas con ingredientes frescos y sabores únicos",
      price: "Desde S/ 15.00"
    },
    {
      id: 2,
      image: destacado2,
      title: "Platos Principales",
      description: "Especialidades culinarias con ingredientes premium y técnicas artesanales",
      price: "Desde S/ 22.00"
    },
    {
      id: 3,
      image: destacado4,
      title: "Hamburguesas Artesanales",
      description: "Hamburguesas gourmet con carnes seleccionadas y ingredientes frescos",
      price: "Desde S/ 18.00"
    },
    {
      id: 4,
      image: destacado3,
      title: "Ensaladas de Fruta",
      description: "Ensaladas frescas con frutas de temporada y ingredientes naturales",
      price: "Desde S/ 12.00"
    },
    {
      id: 5,
      image: destacado5,
      title: "Alitas Acevichadas",
      description: "Alitas crujientes bañadas en nuestra salsa acevichada especial con ingredientes frescos",
      price: "Desde S/ 16.00"
    },
    {
      id: 6,
      image: bowl,
      title: "Bowl de Avena",
      description: "Bowl nutritivo de avena con frutas frescas y toppings saludables",
      price: "Desde S/ 12.00"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2); // Solo 2 grupos: 0-2 y 3-5
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? 1 : prev - 1);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  return (
    <div 
      className="home-page relative min-h-screen w-full"
      style={{
        backgroundImage: `url(${fondoPrincipal})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      

      {/* Hero Section */}
      <MotionSection 
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center min-h-[80vh]">
            {/* Contenido Centrado */}
            <MotionDiv 
              className="text-center space-y-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <MotionH1 
                className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Bienvenido a
                <span className="block font-dancing-script text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 sm:mt-3 drop-shadow-xl">
                  La Avenida
                </span>
              </MotionH1>
              
              {/* Línea degradada transparente debajo de La Avenida */}
              <MotionDiv 
                className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ delay: 0.9, duration: 1 }}
              ></MotionDiv>

              <MotionP 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light text-center max-w-4xl mx-auto px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <span className="block text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-playfair">
                  "Donde cada sabor cuenta una historia"
                </span>
                <span className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl">
                  Descubre la auténtica experiencia gastronómica de Huarmey
                </span>
              </MotionP>

              {/* Flecha rebotando */}
              <MotionDiv 
                className="flex justify-center pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <MotionDiv
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer group"
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.1
                  }}
                  onClick={() => {
                    const nextSection = document.querySelector('.nuestra-esencia-section') as HTMLElement;
                    if (nextSection) {
                      const elementPosition = nextSection.offsetTop;
                      const offsetPosition = elementPosition + 5; // Offset de 5px hacia abajo
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  <MotionDiv
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </MotionDiv>
                </MotionDiv>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* ¿Por qué elegirnos? Section */}
      <MotionSection 
        className="nuestra-esencia-section py-20 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm relative z-20"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <MotionDiv 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestra Esencia
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light px-4">
              Somos más que una cafetería, somos tu lugar favorito para crear momentos especiales
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 - Momentos Especiales */}
            <MotionDiv
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img src={nosotros1} alt="Momentos Especiales" className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6 text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                  Momentos Especiales
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Cada visita es una oportunidad para crear recuerdos únicos. Desde celebraciones familiares hasta encuentros casuales, cada momento se convierte en algo especial en La Avenida.
                </p>
              </div>
            </MotionDiv>

            {/* Card 2 - Ambiente Excepcional */}
            <MotionDiv
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img src={nosotros2} alt="Ambiente Excepcional" className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6 text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                  Ambiente Excepcional
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Un espacio diseñado para tu comodidad y bienestar. Decoración cuidadosamente seleccionada que combina elegancia y calidez para hacerte sentir como en casa.
                </p>
              </div>
            </MotionDiv>

            {/* Card 3 - Sabores Auténticos */}
            <MotionDiv
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img src={nosotros3} alt="Sabores Auténticos" className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6 text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                  Sabores Auténticos
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Cada plato y bebida es una obra maestra culinaria. Preparamos recetas tradicionales con pasión para deleitar tu paladar con sabores únicos e inolvidables.
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Menu Destacado Section */}
      <MotionSection 
        className="py-20 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm relative z-20"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <MotionDiv 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <p className="text-lg text-gray-400 mb-2 font-light">Nuestra cafetería</p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Menu Destacado
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light px-4">
              Todas las especialidades se preparan con ingredientes frescos y técnicas artesanales
            </p>
          </MotionDiv>

          {/* Carrusel Container */}
          <div className="relative">
            {/* Flechas de navegación */}
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            >
              <i className="fas fa-chevron-left text-white group-hover:text-white transition-colors"></i>
            </button>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            >
              <i className="fas fa-chevron-right text-white group-hover:text-white transition-colors"></i>
            </button>

            {/* Carrusel con múltiples cartas visibles */}
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Grupo 1: Items 0-2 */}
                <div className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4">
                  {menuItems.slice(0, 3).map((item) => (
                    <MotionDiv
                      key={item.id}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-32 sm:h-40 object-cover" />
                      <div className="p-4 sm:p-6 text-center">
                        <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{item.description}</p>
                        <span className="font-bold text-white text-lg sm:text-xl">{item.price}</span>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
                {/* Grupo 2: Items 3-5 */}
                <div className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4">
                  {menuItems.slice(3, 6).map((item) => (
                    <MotionDiv
                      key={item.id}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-32 sm:h-40 object-cover" />
                      <div className="p-4 sm:p-6 text-center">
                        <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{item.description}</p>
                        <span className="font-bold text-white text-lg sm:text-xl">{item.price}</span>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </div>

            {/* Indicadores de puntos */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Botón Ver Carta Completa */}
          <MotionDiv 
            className="text-center mt-12"
            data-aos="fade-up"
          >
            <Link to="/menu" onClick={() => window.scrollTo(0, 0)}>
              <MotionButton 
                className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/50 rounded-2xl px-8 py-4 hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10 flex items-center gap-3 text-white font-bold text-lg">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <i className="fas fa-utensils text-white"></i>
                  </div>
                Ver Carta Completa
                </span>
                
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                {/* Partículas */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-6 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-1/2 left-8 w-1 h-1 bg-green-dark rounded-full animate-ping delay-700"></div>
                </div>
              </MotionButton>
            </Link>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Noticias y Eventos */}
      <MotionSection 
        className="py-24 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm relative z-20"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <MotionDiv 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
              Noticias y Eventos
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
              Próximamente vas a encontrar todos los eventos especiales de La Avenida
            </p>
          </MotionDiv>

          {/* Contenido Principal */}
          <div className="relative">
            {/* Imagen de fondo con overlay */}
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-101 transition-all duration-500 cursor-pointer group">
              {/* Imagen de Halloween */}
              <img 
                src={hallow} 
                alt="Halloween en La Avenida"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay con texto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 lg:p-12 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500">
                <div className="max-w-2xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-playfair group-hover:text-white transition-colors duration-500">
                    ¿Necesitas inspiración?
                  </h3>
                  <p className="text-xl text-gray-200 font-light group-hover:text-white transition-colors duration-500">
                    Acompáñala con un momento delicioso.
                  </p>
                </div>
              </div>
            </div>

            {/* Cards de eventos adicionales */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Eventos Especiales */}
                <MotionDiv 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                  data-aos="fade-up"
                data-aos-delay="0"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-calendar-alt text-white text-2xl group-hover:text-blue-400 transition-colors duration-300"></i>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4 text-center group-hover:text-white transition-colors duration-300">
                  Eventos Especiales
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-center">
                  Celebraciones temáticas y noches especiales
                  </p>
                </MotionDiv>

              {/* Promociones */}
              <MotionDiv 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="150"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-tags text-white text-2xl group-hover:text-green-400 transition-colors duration-300"></i>
            </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4 text-center group-hover:text-white transition-colors duration-300">
                  Promociones
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Ofertas exclusivas y descuentos especiales
                </p>
              </MotionDiv>

              {/* Novedades */}
              <MotionDiv 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-star text-white text-2xl group-hover:text-yellow-400 transition-colors duration-300"></i>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4 text-center group-hover:text-white transition-colors duration-300">
                  Novedades
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Nuevos platos y bebidas de temporada
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Nuestro Encanto Section */}
      <MotionSection 
        className="py-24 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm relative z-20"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <MotionDiv
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestro encanto desde adentro
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              una mirada íntima al corazón de La Avenida
            </p>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </MotionDiv>

          {/* Galería de imágenes */}
          <MotionDiv
            className="grid grid-cols-4 gap-6 items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Imagen 1 */}
            <MotionDiv
              className="relative group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={Enc1} 
                  alt="Para los sentidos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg mb-1">Arte del Café</h3>
                  <p className="text-white/90 text-sm">cada taza es una obra maestra</p>
                </div>
              </div>
            </MotionDiv>

            {/* Imagen 2 - Más alta */}
            <MotionDiv
              className="relative group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={Enc2} 
                  alt="Para la memoria" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg mb-1">Ambiente Natural</h3>
                  <p className="text-white/90 text-sm">donde la naturaleza cobra vida</p>
                </div>
              </div>
            </MotionDiv>

            {/* Imagen 3 */}
            <MotionDiv
              className="relative group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={Enc3} 
                  alt="Inspiración" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg mb-1">Mensajes Especiales</h3>
                  <p className="text-white/90 text-sm">palabras que conectan corazones</p>
                </div>
              </div>
            </MotionDiv>

            {/* Imagen 4 - Más alta */}
            <MotionDiv
              className="relative group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="400"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={Enc4} 
                  alt="Recuerdos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg mb-1">Arte Textil</h3>
                  <p className="text-white/90 text-sm">tradición tejida con amor</p>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Ubicación y Experiencia */}
      <MotionSection 
        className="py-24 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm relative z-20"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          {/* Título Principal Centrado */}
          <MotionDiv
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              La Avenida es el destino ideal en Huarmey
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubre por qué somos el lugar favorito de Huarmey para crear momentos inolvidables
            </p>
          </MotionDiv>

          {/* Contenido en 2 columnas */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Lado Izquierdo - Información */}
            <MotionDiv
              className="space-y-8 flex flex-col justify-center"
              data-aos="fade-right"
            >
              {/* Contenedor para "Dónde estamos" y "Lo que te espera" */}
              <div className="space-y-8">
                <MotionDiv
                  className="text-left"
                  data-aos="fade-up"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-102 hover:translate-x-2 transition-all duration-300 h-full group cursor-pointer">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-map-marker-alt text-white text-xl group-hover:text-blue-400 transition-colors duration-300"></i>
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                        Dónde estamos
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed mb-6">
                      En el corazón de Huarmey, fácil de encontrar y accesible para toda la familia.
                    </p>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center">
                        <i className="fas fa-location-dot text-white mr-3"></i>
                        <p className="text-gray-200 font-medium">Av. Cabo Alberto Reyes 168, Huarmey, Peru, 02651</p>
                      </div>
                    </div>
                  </div>
                </MotionDiv>

                <MotionDiv
                  className="text-left"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-102 hover:translate-x-2 transition-all duration-300 h-full group cursor-pointer">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-heart text-white text-xl group-hover:text-red-400 transition-colors duration-300"></i>
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                        Lo que te espera
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed mb-6">
                      Un verdadero tesoro gastronómico huarmeyano. Nuestra decoración cuidadosamente seleccionada te transporta a momentos especiales.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center group/item">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/item:bg-white/30 group-hover/item:scale-110 transition-all duration-300">
                            <i className="fas fa-coffee text-white text-sm"></i>
                          </div>
                          <p className="text-gray-300 text-sm group-hover/item:text-white transition-colors duration-300">Café Premium</p>
                        </div>
                        <div className="text-center group/item">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/item:bg-white/30 group-hover/item:scale-110 transition-all duration-300">
                            <i className="fas fa-utensils text-white text-sm"></i>
                          </div>
                          <p className="text-gray-300 text-sm group-hover/item:text-white transition-colors duration-300">Comida Casera</p>
                        </div>
                    </div>
                  </div>
                </MotionDiv>
              </div>
            </MotionDiv>

            {/* Lado Derecho - Mapa */}
            <MotionDiv
              className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden flex items-center group cursor-pointer"
              data-aos="fade-left"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={avenidaa} 
                alt="La Avenida - Ubicación"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300">
                <div className="text-center text-white group-hover:scale-105 transition-transform duration-300">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-playfair">
                    Encuéntranos en Huarmey
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-200">
                    Ubicados en el corazón de la ciudad
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>



    </div>
  );
};

const Menu = () => {
  const [activeSection, setActiveSection] = useState('cafe');
  const [activeSubclass, setActiveSubclass] = useState('cafe');
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    // Resetear a la primera subclase disponible
    const subclasses = Object.keys(menuData[sectionId as keyof typeof menuData] || {});
    if (subclasses.length > 0) {
      setActiveSubclass(subclasses[0]);
    }
  };

  // Función para obtener la imagen del producto
  const getProductImage = (productName: string) => {
    const imageMap: { [key: string]: string } = {
      // Café caliente
      'Espresso': espresso,
      'Americano': americano,
      'Capuccino': capucino,
      'Latte': latte,
      'Mocaccino': mocaccino,
      'Chocolate Caliente': chocolatecaliente,
      // Café frío
      'Iced Latte': iccelate,
      'Iced Mocca': iccemocca,
      // Desayunos
      'Canasta de Pan': canasta,
      'Huarmeyano': tamal,
      'Huachano': huachano,
      'La Avenida': Lomitoaljugonuevo,
      'Lomo Tamal': lomoTamal,
      // Brunch
      'Ensalada de Frutas': ensaladaFrutas,
      'Avena Bowl': avenaBowl,
      'Waffles de la Casa': wafflesCasa,
      'Tostadas Francesas': tostadas,
      // Sanguches
      'Lomito de Castilla': lomitocastilla,
      'Omelette de Quiñones': omelettequiñones,
      'Principal de Bolognesi': principalbolognesi,
      'EL Favorito de Belaunde': favoritobelaunde,
      'Mixto de Quilipe': Mixtoquilipe,
      'Croissant Olivar': croisantpollo,
      'Ciabatta de Pollo': ciabattapollo,
      'Triple Clásico': tripleclasico,
      'Triple de Pollo': tripledepollo,
      // Menú Principal - Platos de fondo
      'Arroz Chaufa de Pollo': arrozChaufa,
      'Milanesa de Pollo': milanesapollo,
      'Spaghetti a la Bolognesa': spaggeti,
      'Spaghetti a lo Alfredo': EspaguetiAlfredo,
      'Pollo Saltado a lo Pobre': pollosaltadoalopobre,
      'Lomo Saltado Fino': lomosaltado,
      // Menú Principal - Sopas
      'Dieta de Pollo': dietapollo,
      'Sopa a la Minuta': sopaminuta,
      // Menú Principal - Ensaladas
      'Light del Molino': LightdelMolino,
      'Ensalada Quita Sombrero': ensaladaquitasombrero,
      // Menú Principal - Postres
      'Empanada de Carne': empanada,
      'Cheesecake de Arándanos': CheesecakedeArándanos,
      'Cheesecake de Maracumango': cheesecakemaracuya,
      'Cheesecake de Frutos Rojos': cheesecakefrutosrojos,
      'Pie de Limón y Mango': piedelimon,
      'Pie de Maracuyá': piemaracuya,
      'Torta de Chocolate Artesanal': tortachocolate,
      'Cheesecake de Caramel con Pecanas': CheesecakedeCaramelconPecanas,
      'Torta de Chocolúcuma': TortadeChocolúcuma,
      // Burgers - Hamburguesas
      'Pan de Azúcar': pandeazucar,
      'La Pocita': lapocita,
      'Maracaná': Maracana,
      'Tuquillo': tuquillo,
      'Médano': medano,
      'Patillo': patillo,
      'Mini Burgers': miniburguers,
      // Burgers - Rondas
      'Ronda El Castillo': rondacastillo,
      'Ronda El Pedregal': pedregal,
      // Burgers - Picadas
      'Salchiclásica': salchiclasica,
      'Salchiavenida': salchiavenida,
      'Mollejitas de Norte': mollejitas,
      'Tequeños': Tequeños,
      'Club Sandwich de Antivitos': ClubSandwichdeAntivitos,
      'Alitas a la BBQ': alitasacevichadas,
      'Alitas Buffalo Wings': alitasbuffalo,
      'Alitas Acevichadas': alitasacevichadas,
      // Bebidas - Jugos Naturales
      'De una fruta': papaya,
      'De fruta tropical': Defrutatropical,
      'Surtido clásico': Jugosurtidonuevo,
      'Surtido Avenida': SurtidoAvenida,
      'De fruta con leche': Platanoconleche,
      'De Arándano': Jugoarandano,
      // Bebidas - Infusiones
      'Hierba Luisa': HierbaLuisa,
      'Té Verde': TéVerde,
      'Jamaica': Jamaica,
      'Cuz Cuz': Cuzcu,
      'Tayca': Tayca,
      // Bebidas - Frappes
      'Oreo': Frappedegalletasoreo,
      'Fresa': Frappedefresanatural,
      'Caramel': Frappedecaramelo,
      'Mocca': Frappedemocca,
      'Chocolate': Frappedechocolate,
      'Lúcuma': Frappedelúcuma,
      'Chocolucuma': chocolucumanuevo,
      'Vainilla': Frappedevainilla,
      // Bebidas - Bebidas Frías
      'Agua': Agua,
      'Gaseosa': CocaColaoInkaKola,
      'Limonada vaso': Limonadavaso,
      'Limonada jarra': Limonadafrescaenjarra,
      'Maracuyá vaso': MaracuyaVaso,
      'Maracuyá jarra': Maracuyájarra,
      'Fresa vaso': Fresafrescaenvaso,
      'Fresa jarra': Fresafrescaenjarra,
      'Limonada frozen vaso': Limonadafrozenenvaso,
      'Limonada frozen jarra': Limonadafrozenenjarra,
      'Maracuyá frozen vaso': Maracuyáfrozenvaso1,
      'Maracuyá frozen jarra': Maracuyáfrozenvaso2,
      // Bebidas - Bebidas Alcohólicas
      'Pilsen': CervezaPilsen,
      'Cusqueña': cuzqueña,
      'Corona': CervezaCorona
    };
    return imageMap[productName] || null;
  };


  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.menu-navigation');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // Mantener la flecha visible hasta que llegue a la sección de navegación
      const menuNav = document.querySelector('.menu-navigation') as HTMLElement;
      if (menuNav) {
        const menuNavTop = menuNav.offsetTop;
        setShowScrollArrow(scrollTop < menuNavTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuSections = [
    { id: 'cafe', label: 'Café', icon: 'fas fa-coffee' },
    { id: 'desayunos', label: 'Desayunos', icon: 'fas fa-coffee' },
    { id: 'sanguches', label: 'Sanguches', icon: 'fas fa-hamburger' },
    { id: 'menu-principal', label: 'Menú Principal', icon: 'fas fa-utensils' },
    { id: 'burgers', label: 'Burgers', icon: 'fas fa-utensils' },
    { id: 'bebidas', label: 'Bebidas', icon: 'fas fa-coffee' }
  ];

  const menuData = {
    'cafe': {
      'cafe': [
        { name: 'Espresso', description: 'Café concentrado italiano', price: 'S/ 7.00' },
        { name: 'Americano', description: 'Café negro tradicional', price: 'S/ 8.00' },
        { name: 'Capuccino', description: 'Espresso con leche vaporizada', price: 'S/ 9.00' },
        { name: 'Latte', description: 'Espresso con abundante leche', price: 'S/ 9.00' },
        { name: 'Mocaccino', description: 'Café con chocolate y leche', price: 'S/ 9.50' },
        { name: 'Chocolate Caliente', description: 'Chocolate caliente cremoso', price: 'S/ 9.50' }
      ],
      'cafe-frio': [
        { name: 'Iced Latte', description: 'Latte frío con hielo', price: 'S/ 12.00' },
        { name: 'Iced Mocca', description: 'Mocca frío con hielo', price: 'S/ 13.00' }
      ]
    },
    'desayunos': {
      'desayunos': [
        { name: 'Canasta de Pan', description: '5 panes ciabatta', price: 'S/ 5.00' },
        { name: 'Americano', description: 'Huevos revueltos con jamón', price: 'S/ 17.00' },
        { name: 'Huarmeyano', description: 'Tamal con sarza criolla', price: 'S/ 19.00' },
        { name: 'Huachano', description: 'Salchicha huachana', price: 'S/ 20.00' },
        { name: 'La Avenida', description: 'Lomito al jugo', price: 'S/ 21.00' },
        { name: 'Lomo Tamal', description: 'Tamal con lomo al jugo', price: 'S/ 27.00' }
      ],
      'brunch': [
        { name: 'Ensalada de Frutas', description: 'Frutas de estación acompañadas con chia, granola, menta, miel y yogurt', price: 'S/ 14.00' },
        { name: 'Avena Bowl', description: 'Avena con frutas de estación, chia, coco rayado y granola', price: 'S/ 17.00' },
        { name: 'Waffles de la Casa', description: 'Dulce hecho con harina y miel, acompañado con frutas de estación, menta y cacao', price: 'S/ 18.00' },
        { name: 'Tostadas Francesas', description: 'Pan brioche, empapado de huevo, leche, azúcar, canela y vainilla. Acompañado de miel de maple, frutas y azúcar glas', price: 'S/ 21.00' }
      ]
    },
    'sanguches': {
      'sanguches': [
        { name: 'Triple de Pollo', description: 'Pan molde con pollo deshilachado, jamón y queso edam', price: 'S/ 10.00' },
        { name: 'Triple Clásico', description: 'Pan molde con huevo, tomate y palta con mayonesa', price: 'S/ 11.00' },
        { name: 'Ciabatta de Pollo', description: 'Pollo deshilachado, tomate, lechuga y mayonesa', price: 'S/ 15.00' },
        { name: 'Croissant Olivar', description: 'Pollo deshilachado con palta y mayonesa de orégano', price: 'S/ 15.00' },
        { name: 'Mixto de Quilipe', description: 'Pan molde bañado a la sartén, jamón, queso edam y huevo frito', price: 'S/ 14.00' },
        { name: 'EL Favorito de Belaunde', description: 'Pollo marinado con mayonesa, finas hierbas y palta en pan ciabatta', price: 'S/ 16.00' },
        { name: 'Principal de Bolognesi', description: 'Pan molde con pollo deshilachado, durazno y jamón', price: 'S/ 16.00' },
        { name: 'Omelette de Quiñones', description: 'Pan molde bañado con huevo, queso edam, lechuga, palta, chia y tomate', price: 'S/ 16.00' },
        { name: 'Lomito de Castilla', description: 'Lomito flameado en pan ciabatta', price: 'S/ 17.00' }
      ]
    },
    'menu-principal': {
      'platos-de-fondo': [
        { name: 'Arroz Chaufa de Pollo', description: 'Arroz chaufa tradicional con pollo', price: 'S/ 20.00' },
        { name: 'Milanesa de Pollo', description: 'Milanesa de pollo empanizada', price: 'S/ 24.00' },
        { name: 'Spaghetti a la Bolognesa', description: 'Pasta con salsa bolognesa', price: 'S/ 25.00' },
        { name: 'Spaghetti a lo Alfredo', description: 'Pasta con salsa alfredo cremosa', price: 'S/ 29.00' },
        { name: 'Pollo Saltado a lo Pobre', description: 'Pollo saltado con papas fritas', price: 'S/ 29.00' },
        { name: 'Lomo Saltado Fino', description: 'Lomo saltado con vegetales', price: 'S/ 30.00' }
      ],
      'sopas': [
        { name: 'Dieta de Pollo', description: 'Pollo, zanahoria, papa amarilla, orégano y fideos', price: 'S/ 16.00' },
        { name: 'Sopa a la Minuta', description: 'Carne, huevos, leche, papa amarilla, orégano y fideos', price: 'S/ 17.00' }
      ],
      'ensaladas': [
        { name: 'Light del Molino', description: 'Pollo a la plancha, lechuga, tomate, queso, aceituna, palta y arroz', price: 'S/ 20.00' },
        { name: 'Ensalada Quita Sombrero', description: 'Pollo curtido, queso parmesano, tocino, tomate, lechuga, palta, huevo y arroz', price: 'S/ 21.00' }
      ],
      'postres': [
        { name: 'Empanada de Carne', description: 'Empanada rellena de carne', price: 'S/ 5.00' },
        { name: 'Cheesecake de Arándanos', description: 'Cheesecake con arándanos frescos', price: 'S/ 10.00' },
        { name: 'Cheesecake de Maracumango', description: 'Cheesecake con maracuyá y mango', price: 'S/ 10.00' },
        { name: 'Cheesecake de Frutos Rojos', description: 'Cheesecake con frutos rojos', price: 'S/ 10.00' },
        { name: 'Pie de Limón y Mango', description: 'Pie de limón con mango', price: 'S/ 10.00' },
        { name: 'Pie de Maracuyá', description: 'Pie de maracuyá tropical', price: 'S/ 10.00' },
        { name: 'Torta de Chocolate Artesanal', description: 'Torta de chocolate casera', price: 'S/ 11.00' },
        { name: 'Cheesecake de Caramel con Pecanas', description: 'Cheesecake con caramelo y pecanas', price: 'S/ 11.00' },
        { name: 'Torta de Chocolúcuma', description: 'Torta de chocolate con lúcuma', price: 'S/ 12.00' }
      ]
    },
    'burgers': {
      'burgers': [
        { name: 'Pan de Azúcar', description: 'Pollo crujiente, queso cheddar, lechuga, tomate y salsa avenida', price: 'S/ 17.00' },
        { name: 'La Pocita', description: 'Carne artesanal, queso cheddar, lechuga, tomate y salsa avenida', price: 'S/ 18.00' },
        { name: 'Maracaná', description: 'Carne artesanal, queso cheddar, huevo frito, tocino, lechuga y salsa avenida', price: 'S/ 20.00' },
        { name: 'Tuquillo', description: 'Carne artesanal, queso cheddar, huevo frito, plátano, tocino, lechuga, tomate y cebolla caramelizada', price: 'S/ 22.00' },
        { name: 'Médano', description: 'Pollo crujiente bañado en bbq, repollo con mayonesa, tocino, queso cheddar, cebolla caramelizada y crema especial', price: 'S/ 23.00' },
        { name: 'Patillo', description: 'Doble carne, tocino frito, queso cheddar, lechuga, cebolla caramelizada y crema especial', price: 'S/ 29.00' },
        { name: 'Mini Burgers', description: '3 mini burgers de diferentes sabores pocita, patillo y médano con papas fritas', price: 'S/ 36.00' }
      ],
      'rondas': [
        { name: 'Ronda El Castillo', description: '4 alitas bbq, 4 alitas búfalo, 4 alitas acevichadas y papas fritas', price: 'S/ 44.00' },
        { name: 'Ronda El Pedregal', description: '4 alitas bbq, 4 alitas acevichadas, 4 tequeños mixtos, chorizo, guacamole y papas', price: 'S/ 46.00' }
      ],
      'picadas': [
        { name: 'Salchiclásica', description: 'Papas fritas, hot dog y ensalada', price: 'S/ 13.00' },
        { name: 'Salchiavenida', description: 'Papas fritas, hot dog, chorizo, plátano y huevo frito', price: 'S/ 18.00' },
        { name: 'Mollejitas de Norte', description: 'Porción de mollejitas con papas fritas y ensalada', price: 'S/ 16.00' },
        { name: 'Tequeños', description: '10 tequeños mixtos o lomito con salsa guacamole', price: 'S/ 18.00' },
        { name: 'Club Sandwich de Antivitos', description: 'Pan blanco relleno con pollo deshilachado, tomate, queso edam, jamón, huevo, lechuga, tocino y papas fritas', price: 'S/ 25.00' },
        { name: 'Alitas a la BBQ', description: '8 alitas de pollo bañada con salsa bbq y papas fritas', price: 'S/ 24.00' },
        { name: 'Alitas Buffalo Wings', description: '8 alitas de pollo bañada en miel de abeja, tabasco y papas fritas', price: 'S/ 24.00' },
        { name: 'Alitas Acevichadas', description: '8 alitas de pollo crujientes, bañada en salsa especial acevichada y papas fritas', price: 'S/ 25.00' }
      ]
    },
    'bebidas': {
      'jugos-naturales': [
        { name: 'De una fruta', description: 'Papaya, piña o naranja', price: 'S/ 8.50' },
        { name: 'De fruta tropical', description: 'Fresa o mango', price: 'S/ 9.50' },
        { name: 'Surtido clásico', description: 'Fresa, papaya, plátano y piña', price: 'S/ 11.50' },
        { name: 'Surtido Avenida', description: 'Naranja, piña y fresa', price: 'S/ 11.50' },
        { name: 'De fruta con leche', description: 'Fresa, plátano, mango o lúcuma', price: 'S/ 12.50' },
        { name: 'De Arándano', description: 'Jugo natural de arándano', price: 'S/ 14.00' }
      ],
      'infusiones': [
        { name: 'Hierba Luisa', description: 'Infusión de hierba luisa', price: 'S/ 8.00' },
        { name: 'Té Verde', description: 'Té verde japonés', price: 'S/ 8.00' },
        { name: 'Jamaica', description: 'Infusión de flor de jamaica', price: 'S/ 8.50' },
        { name: 'Cuz Cuz', description: 'Manzanilla, Menta y Naranja', price: 'S/ 8.50' },
        { name: 'Tayca', description: 'Hierba Luisa, Manzanilla y té verde', price: 'S/ 8.50' }
      ],
      'frappes': [
        { name: 'Oreo', description: 'Frappe de galletas oreo', price: 'S/ 12.00' },
        { name: 'Fresa', description: 'Frappe de fresa natural', price: 'S/ 12.00' },
        { name: 'Caramel', description: 'Frappe de caramelo', price: 'S/ 12.00' },
        { name: 'Mocca', description: 'Frappe de mocca', price: 'S/ 12.00' },
        { name: 'Chocolate', description: 'Frappe de chocolate', price: 'S/ 12.00' },
        { name: 'Lúcuma', description: 'Frappe de lúcuma', price: 'S/ 12.00' },
        { name: 'Chocolucuma', description: 'Frappe de chocolate con lúcuma', price: 'S/ 12.00' },
        { name: 'Vainilla', description: 'Frappe de vainilla', price: 'S/ 12.00' }
      ],
      'bebidas-frias': [
        { name: 'Agua', description: 'Sin gas', price: 'S/ 3.50' },
        { name: 'Gaseosa', description: 'Coca Cola o Inka Kola', price: 'S/ 4.50' },
        { name: 'Limonada vaso', description: 'Limonada fresca en vaso', price: 'S/ 8.00' },
        { name: 'Limonada jarra', description: 'Limonada fresca en jarra', price: 'S/ 16.00' },
        { name: 'Maracuyá vaso', description: 'Maracuyá fresca en vaso', price: 'S/ 8.00' },
        { name: 'Maracuyá jarra', description: 'Maracuyá fresca en jarra', price: 'S/ 16.00' },
        { name: 'Fresa vaso', description: 'Fresa fresca en vaso', price: 'S/ 9.00' },
        { name: 'Fresa jarra', description: 'Fresa fresca en jarra', price: 'S/ 18.00' },
        { name: 'Limonada frozen vaso', description: 'Limonada frozen en vaso', price: 'S/ 8.50' },
        { name: 'Limonada frozen jarra', description: 'Limonada frozen en jarra', price: 'S/ 17.00' },
        { name: 'Maracuyá frozen vaso', description: 'Maracuyá frozen en vaso', price: 'S/ 8.50' },
        { name: 'Maracuyá frozen jarra', description: 'Maracuyá frozen en jarra', price: 'S/ 17.00' }
      ],
      'bebidas-alcoholicas': [
        { name: 'Pilsen', description: 'Cerveza Pilsen', price: 'S/ 8.00' },
        { name: 'Cusqueña', description: 'Cerveza Cusqueña', price: 'S/ 9.00' },
        { name: 'Corona', description: 'Cerveza Corona', price: 'S/ 10.00' }
      ]
    }
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${fondoPrincipal})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Hero Section Mejorado */}
      <MotionSection
        className="relative z-20 h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 py-32">
          <MotionDiv
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MotionH1
              className="font-playfair text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Nuestra
              <span className="block font-dancing-script text-white text-7xl lg:text-9xl mt-2 drop-shadow-xl">
                Carta
              </span>
            </MotionH1>

            <MotionDiv
              className="w-32 h-1 bg-gradient-to-r from-white via-green-dark to-white mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ delay: 1, duration: 1 }}
            ></MotionDiv>

            <MotionP
              className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Descubre nuestros <span className="text-white font-semibold">sabores únicos</span> y 
              especialidades artesanales preparadas con ingredientes frescos y técnicas tradicionales.
            </MotionP>

            {/* Flecha animada para indicar scroll */}
            <AnimatePresence>
              {showScrollArrow && (
                <MotionDiv
                  className="mt-20 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <MotionDiv
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer group"
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={scrollToNextSection}
                  >
                    <MotionDiv
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </MotionDiv>
                  </MotionDiv>
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Sección de Navegación */}
      <div className="menu-navigation relative z-20 container mx-auto px-4 py-20 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm">

        {/* Barra de navegación elegante y profesional */}
        <MotionDiv 
          className="relative mb-16"
          data-aos="fade-up"
        >
          {/* Contenedor principal con efectos avanzados */}
          <div className="relative max-w-8xl mx-auto">
            {/* Fondo con gradiente sofisticado */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/12 to-white/8 backdrop-blur-2xl rounded-3xl shadow-2xl"></div>
            
            {/* Borde animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-green-dark/30 rounded-3xl p-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-white/10 via-white/15 to-white/10 rounded-3xl"></div>
            </div>
            
            
            {/* Contenido de la barra */}
            <div className="relative z-10 p-6">
              {/* Título elegante */}
              <div className="text-center mb-10">
                <MotionH2 
                  className="font-playfair text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Nuestra Carta
                </MotionH2>
                <MotionDiv 
                  className="w-24 h-1 bg-gradient-to-r from-white to-green-dark mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: "6rem" }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></MotionDiv>
                <MotionP 
                  className="text-gray-300 text-lg mt-4 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Selecciona una categoría para explorar nuestros sabores
                </MotionP>
              </div>

              {/* Botones de navegación mejorados */}
              <div className="flex justify-center items-center space-x-6">
                {menuSections.map((section, index) => (
                    <MotionButton
                      key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`relative group transition-all duration-500 ${
                        activeSection === section.id
                        ? 'transform scale-105' 
                        : 'hover:scale-102'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Fondo del botón */}
                    <div className={`relative px-8 py-5 rounded-2xl transition-all duration-500 ${
                      activeSection === section.id
                        ? 'bg-white/30 shadow-lg shadow-white/20 border border-white/40'
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}>
                      
                      
                      {/* Contenido del botón */}
                      <div className="relative z-10 flex items-center justify-center">
                        {/* Texto */}
                        <span className={`font-semibold text-base tracking-wide transition-colors duration-300 ${
                            activeSection === section.id 
                              ? 'text-white' 
                              : 'text-white group-hover:text-white'
                        }`}>
                        {section.label}
                      </span>
                      </div>
                      
                      {/* Indicador de activo elegante */}
                      {activeSection === section.id && (
                        <MotionDiv 
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white rounded-full shadow-lg"
                          initial={{ width: 0 }}
                          animate={{ width: "2.5rem" }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                    
                    </MotionButton>
                  ))}
                </div>
            </div>
          </div>
        </MotionDiv>

        {/* Sub-navegación simple y diferente */}
        <MotionDiv 
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-center items-center space-x-4">
            {Object.keys(menuData[activeSection as keyof typeof menuData] || {}).map((subclassKey, index) => (
                    <MotionButton
                key={subclassKey}
                onClick={() => setActiveSubclass(subclassKey)}
                className={`relative group transition-all duration-300 ${
                  activeSubclass === subclassKey
                    ? 'transform scale-105' 
                    : 'hover:scale-102'
                }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`relative px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeSubclass === subclassKey
                    ? 'bg-white/20 shadow-lg border border-white/40'
                    : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20'
                }`}>
                  <span className={`font-medium text-sm tracking-wide transition-colors duration-300 ${
                    activeSubclass === subclassKey
                              ? 'text-white' 
                              : 'text-white group-hover:text-white'
                  }`}>
                    {subclassKey === 'cafe' ? 'Café' :
                     subclassKey === 'cafe-frio' ? 'Café Frío' :
                     subclassKey === 'desayunos' ? 'Desayunos' :
                     subclassKey === 'brunch' ? 'Brunch' :
                     subclassKey === 'sanguches' ? 'Sanguches' :
                     subclassKey === 'platos-de-fondo' ? 'Platos de Fondo' :
                     subclassKey === 'sopas' ? 'Sopas' :
                     subclassKey === 'ensaladas' ? 'Ensaladas' :
                     subclassKey === 'postres' ? 'Postres' :
                     subclassKey === 'burgers' ? 'Burgers' :
                     subclassKey === 'rondas' ? 'Rondas' :
                     subclassKey === 'picadas' ? 'Picadas' :
                     subclassKey === 'jugos-naturales' ? 'Jugos Naturales' :
                     subclassKey === 'infusiones' ? 'Infusiones' :
                     subclassKey === 'frappes' ? 'Frappes' :
                     subclassKey === 'bebidas-frias' ? 'Bebidas Frías' :
                     subclassKey === 'bebidas-alcoholicas' ? 'Bebidas Alcohólicas' :
                     subclassKey}
                      </span>
                      
                      {/* Indicador de activo */}
                  {activeSubclass === subclassKey && (
                        <MotionDiv 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-0.5 bg-white rounded-full"
                          initial={{ width: 0 }}
                      animate={{ width: "1.75rem" }}
                      transition={{ duration: 0.3 }}
                        />
                      )}
                </div>
                    </MotionButton>
                  ))}
          </div>
        </MotionDiv>

        {/* Contenido de productos */}
        <MotionDiv 
          className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20"
          data-aos="fade-up"
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contenido de la subclase seleccionada */}
          <div className="space-y-4">
            {/* Título de la subclase */}
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                {activeSubclass === 'cafe' ? 'Café' :
                 activeSubclass === 'cafe-frio' ? 'Café Frío' :
                 activeSubclass === 'desayunos' ? 'Desayunos' :
                 activeSubclass === 'brunch' ? 'Brunch' :
                 activeSubclass === 'sanguches' ? 'Sanguches' :
                 activeSubclass === 'platos-de-fondo' ? 'Platos de Fondo' :
                 activeSubclass === 'sopas' ? 'Sopas' :
                 activeSubclass === 'ensaladas' ? 'Ensaladas' :
                 activeSubclass === 'postres' ? 'Postres' :
                 activeSubclass === 'burgers' ? 'Burgers' :
                 activeSubclass === 'rondas' ? 'Rondas' :
                 activeSubclass === 'picadas' ? 'Picadas' :
                 activeSubclass === 'jugos-naturales' ? 'Jugos Naturales' :
                 activeSubclass === 'infusiones' ? 'Infusiones' :
                 activeSubclass === 'frappes' ? 'Frappes' :
                 activeSubclass === 'bebidas-frias' ? 'Bebidas Frías' :
                 activeSubclass === 'bebidas-alcoholicas' ? 'Bebidas Alcohólicas' :
                 activeSubclass}
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-white to-green-dark mx-auto"></div>
          </div>

            {/* Grid de productos de la subclase */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {((menuData as any)[activeSection]?.[activeSubclass] || []).map((item: any, index: number) => (
              <MotionDiv
                key={index}
                className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                } as React.CSSProperties}
              >
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Imagen del producto */}
                <div className="relative h-48 overflow-hidden">
                    {getProductImage(item.name) ? (
                      <img 
                        src={getProductImage(item.name)!} 
                        alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100/20 to-gray-200/20 flex items-center justify-center">
                    <div className="text-center">
                        <i className="fas fa-image text-4xl text-white/40 mb-2"></i>
                        <p className="text-sm text-white/60">Imagen del producto</p>
                    </div>
                  </div>
                    )}
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Efecto de hover en la imagen */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <MotionDiv
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                    >
                      <i className="fas fa-eye text-white text-xl"></i>
                    </MotionDiv>
                  </div>
                </div>
                
                {/* Información del producto */}
                <div className="p-6 space-y-3">
                  <h4 className="font-bold text-xl text-white group-hover:text-white transition-colors duration-300 leading-tight">
                    {item.name}
                    </h4>
                  <p className="text-gray-200/90 leading-relaxed text-sm line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Precio y botón */}
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-2xl font-bold text-white bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                      {item.price}
                    </span>
                    <MotionButton 
                      className="relative bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl text-sm font-semibold border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 overflow-hidden group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      } as React.CSSProperties}
                    >
                      {/* Efecto de brillo en el botón */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
                      
                      <span className="relative flex items-center">
                        <i className="fas fa-plus mr-2"></i>
                      Agregar
                      </span>
                    </MotionButton>
                  </div>
                </div>
                
                {/* Borde decorativo */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-white to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </MotionDiv>
            ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.about-stats-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // Mantener la flecha visible hasta que llegue a la sección de estadísticas
      const statsSection = document.querySelector('.about-stats-section') as HTMLElement;
      if (statsSection) {
        const statsTop = statsSection.offsetTop;
        setShowScrollArrow(scrollTop < statsTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div className="min-h-screen relative"
    style={{
      backgroundImage: `url(${fondoPrincipal})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}
  >
    {/* Overlay elegante */}
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    
    {/* Hero Section Profesional */}
      <MotionSection
        className="relative z-20 h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <div className="container mx-auto px-4 py-32">
        <MotionDiv 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          
          <MotionH1 
            className="font-playfair text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Nuestra
            <span className="block font-dancing-script text-white text-7xl lg:text-9xl mt-2 drop-shadow-xl">
              Historia
            </span>
          </MotionH1>
          
          <MotionDiv 
            className="w-32 h-1 bg-gradient-to-r from-white via-green-dark to-white mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 1, duration: 1 }}
          ></MotionDiv>
          
          <MotionP 
            className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Desde 2015, <span className="text-white font-semibold">La Avenida</span> ha sido el corazón de Huarmey, 
            creando momentos únicos a través de la mejor calidad en café y comida casera.
          </MotionP>

          {/* Flecha animada para indicar scroll */}
          <AnimatePresence>
            {showScrollArrow && (
              <MotionDiv
                className="mt-20 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <MotionDiv
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer group"
                  animate={{ 
                    y: [0, 8, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.1
                  }}
                  onClick={scrollToNextSection}
                >
                  <MotionDiv
                    animate={{ y: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg 
                      className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                      />
                    </svg>
                  </MotionDiv>
                </MotionDiv>
              </MotionDiv>
            )}
          </AnimatePresence>
        </MotionDiv>
      </div>
    </MotionSection>

    {/* Sección de Estadísticas */}
    <MotionSection 
      className="about-stats-section relative z-20 py-20 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "9+", label: "Años de Experiencia", icon: "fas fa-calendar-alt" },
            { number: "20K+", label: "Clientes Satisfechos", icon: "fas fa-users" },
            { number: "20+", label: "Platos Únicos", icon: "fas fa-utensils" },
            { number: "24/7", label: "Servicio de Calidad", icon: "fas fa-clock" }
          ].map((stat, index) => (
            <MotionDiv 
              key={index}
              className="text-center group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:bg-white/20 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <i className={`${stat.icon} text-white text-2xl group-hover:scale-125 transition-all duration-300 ${
                  stat.icon === 'fas fa-calendar-alt' ? 'group-hover:text-blue-400' :
                  stat.icon === 'fas fa-users' ? 'group-hover:text-green-400' :
                  stat.icon === 'fas fa-utensils' ? 'group-hover:text-orange-400' :
                  'group-hover:text-purple-400'
                }`}></i>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{stat.number}</h3>
              <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{stat.label}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>

    {/* Nuestro Compromiso */}
    <MotionSection 
      className="relative z-20 py-24 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm overflow-hidden"
      data-aos="fade-up"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-dark rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv 
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Nuestro Compromiso
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Los pilares fundamentales que guían cada decisión y acción en La Avenida
          </p>
        </MotionDiv>

        {/* Cards con formato único - Timeline vertical */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            
            {/* Compromiso 1: Calidad Premium */}
            <MotionDiv 
              className="flex flex-col lg:flex-row items-center gap-12 group cursor-pointer"
              data-aos="fade-right"
              data-aos-delay="100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Imagen real */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={noso4} 
                    alt="Calidad Premium" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl"></div>
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border border-white/30">
                    <i className="fas fa-star text-white text-2xl group-hover:text-yellow-400 transition-colors duration-300"></i>
                  </div>
      <div>
                    <h3 className="font-playfair text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                      Calidad Premium
                    </h3>
                            <p className="text-white font-semibold">Compromiso #1</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  Seleccionamos los mejores granos de café y ingredientes frescos para garantizar la excelencia en cada producto que servimos.
                </p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                            <span className="text-white font-medium">Todos los días</span>
                          </div>
                        </div>
              </div>
            </MotionDiv>

            {/* Compromiso 2: Servicio Personalizado */}
            <MotionDiv 
              className="flex flex-col lg:flex-row-reverse items-center gap-12 group cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="200"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Imagen real */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={noso3} 
                    alt="Servicio Personalizado" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl"></div>
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border border-white/30">
                    <i className="fas fa-handshake text-white text-2xl group-hover:text-green-400 transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                      Servicio Personalizado
                    </h3>
                            <p className="text-white font-semibold">Compromiso #2</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  Cada cliente es único. Nos comprometemos a brindar una atención cálida y personalizada que haga sentir especial a cada visitante.
                </p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                            <span className="text-white font-medium">24/7</span>
                          </div>
                        </div>
              </div>
            </MotionDiv>

            {/* Compromiso 3: Tradición Familiar */}
            <MotionDiv 
              className="flex flex-col lg:flex-row items-center gap-12 group cursor-pointer"
              data-aos="fade-right"
              data-aos-delay="300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Imagen real */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={noso1} 
                    alt="Tradición Familiar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl"></div>
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border border-white/30">
                    <i className="fas fa-users text-white text-2xl group-hover:text-blue-400 transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                      Tradición Familiar
                    </h3>
                            <p className="text-white font-semibold">Compromiso #3</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  Mantenemos viva la tradición culinaria familiar, transmitiendo recetas auténticas de generación en generación.
                </p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                            <span className="text-white font-medium">Desde 2015</span>
                          </div>
                        </div>
              </div>
            </MotionDiv>

          </div>
        </div>
      </div>
    </MotionSection>

    {/* Instagram Section - Completamente Mejorada */}
    <MotionSection 
      className="py-24 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm relative z-20 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Elementos decorativos de fondo mejorados */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Partículas flotantes Instagram */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/50 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-red-400/40 rounded-full animate-bounce delay-800"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Mejorado */}
        <MotionDiv 
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <MotionDiv 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MotionDiv 
              className="w-20 h-20 bg-gradient-to-r from-pink-500/40 to-purple-500/40 backdrop-blur-sm rounded-full flex items-center justify-center mr-6 shadow-2xl border border-white/20"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </MotionDiv>
            <div className="text-left">
              <MotionH2 
                className="font-playfair text-5xl lg:text-6xl font-bold text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Instagram
              </MotionH2>
              <MotionP 
                className="text-white text-xl font-light"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                @laavenidahy
              </MotionP>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            className="w-24 h-1 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-orange-500/50 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          ></MotionDiv>
          
          <MotionP 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Descubre nuestros momentos más deliciosos, nuevos platos y el ambiente único de La Avenida.
            <span className="block mt-2 text-white font-semibold">
              Cada post cuenta una historia de sabor y tradición.
            </span>
          </MotionP>
        </MotionDiv>

        {/* Instagram Feed Mejorado */}
        <MotionDiv 
          className="relative mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
              <iframe
                src="https://www.instagram.com/laavenidahy/embed/"
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-2xl shadow-xl"
              ></iframe>
            </div>
          </div>
        </MotionDiv>

        {/* Estadísticas de Instagram Mejoradas */}
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <MotionDiv 
            className="text-center group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl h-full relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              
              <div className="relative z-10">
                <MotionDiv 
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className="fas fa-heart text-white text-2xl group-hover:text-pink-400 transition-colors duration-300"></i>
                </MotionDiv>
                <h3 className="font-playfair text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">Momentos Especiales</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Capturamos cada instante único de La Avenida con amor y dedicación
                </p>
              </div>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            className="text-center group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl h-full relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              
              <div className="relative z-10">
                <MotionDiv 
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className="fas fa-utensils text-white text-2xl group-hover:text-orange-400 transition-colors duration-300"></i>
                </MotionDiv>
                <h3 className="font-playfair text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">Nuevos Platos</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Descubre nuestras últimas creaciones culinarias y sabores únicos
                </p>
              </div>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            className="text-center group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl h-full relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              
              <div className="relative z-10">
                <MotionDiv 
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className="fas fa-users text-white text-2xl group-hover:text-blue-400 transition-colors duration-300"></i>
                </MotionDiv>
                <h3 className="font-playfair text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">Comunidad</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Únete a nuestra familia de amantes del buen sabor y la tradición
                </p>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>

  </div>
  );
};

const Contact = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // Validar campos en orden y mostrar solo el primer error encontrado
    if (!formData.name.trim()) {
      newErrors.name = 'Completa este campo';
    } else if (!formData.email.trim()) {
      newErrors.email = 'Completa este campo';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    } else if (!formData.phone.trim()) {
      newErrors.phone = 'Completa este campo';
    } else if (!formData.queryType) {
      newErrors.queryType = 'Completa este campo';
    } else if (!formData.message.trim()) {
      newErrors.message = 'Completa este campo';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        queryType: '',
        message: ''
      });
      setErrors({});
    }, 2000);
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.contact-content-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // Mantener la flecha visible hasta que llegue a la sección de contenido
      const contentSection = document.querySelector('.contact-content-section') as HTMLElement;
      if (contentSection) {
        const contentTop = contentSection.offsetTop;
        setShowScrollArrow(scrollTop < contentTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${fondoPrincipal})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Hero Section Profesional */}
      <MotionSection
        className="relative z-20 h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 py-32">
          <MotionDiv
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MotionH1
              className="font-playfair text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Contáctanos
              <span className="block font-dancing-script text-white text-7xl lg:text-9xl mt-2 drop-shadow-xl">
                Conecta
              </span>
            </MotionH1>

            <MotionDiv
              className="w-32 h-1 bg-gradient-to-r from-white via-green-dark to-white mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ delay: 1, duration: 1 }}
            ></MotionDiv>

            <MotionP
              className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              ¿Tienes alguna pregunta, sugerencia o quieres saber más sobre <span className="text-white font-semibold">La Avenida</span>? 
              ¡Nos encantaría escucharte y conectarnos contigo!
            </MotionP>

            {/* Flecha animada para indicar scroll */}
            <AnimatePresence>
              {showScrollArrow && (
                <MotionDiv
                  className="mt-20 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <MotionDiv
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer group"
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={scrollToNextSection}
                  >
                    <MotionDiv
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </MotionDiv>
                  </MotionDiv>
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Sección de Contenido */}
      <div className="contact-content-section relative z-20 container mx-auto px-4 py-20 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Información de Contacto
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos usando cualquiera de estos medios
            </p>
          </MotionDiv>

          <div className="space-y-16">
            {/* Servicios - 3 Cuadros Separados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Consumo en el lugar */}
              <MotionDiv
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <i className="fas fa-coffee text-white text-2xl group-hover:text-blue-400 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Consumo en el lugar</h3>
                  <p className="text-gray-300 text-sm">Disfruta de nuestros platos en nuestro acogedor ambiente</p>
                </div>
              </MotionDiv>

              {/* Retiro en el negocio */}
              <MotionDiv
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <i className="fas fa-shopping-bag text-white text-2xl group-hover:text-green-400 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Retiro en el negocio</h3>
                  <p className="text-gray-300 text-sm">Recoge tu pedido directamente en nuestro local</p>
                </div>
              </MotionDiv>

              {/* Delivery */}
              <MotionDiv
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <i className="fas fa-motorcycle text-white text-2xl group-hover:text-orange-400 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Delivery</h3>
                  <p className="text-gray-300 text-sm">Llevamos nuestros platos hasta la puerta de tu hogar</p>
                </div>
              </MotionDiv>
            </div>

            {/* Síguenos en Redes y Horarios de Atención - Lado a Lado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Síguenos en Redes */}
              <MotionDiv
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="font-playfair text-xl font-bold text-white mb-6 text-center">
                  Síguenos en Redes
                </h3>
                <div className="space-y-4">
                  <MotionA
                    href="https://instagram.com/laavenidahy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 flex items-center space-x-4"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-instagram text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Instagram</p>
                      <p className="text-gray-300 text-xs">@laavenidahy</p>
                    </div>
                  </MotionA>
                  
                  <MotionA
                    href="https://www.facebook.com/LaAvenidaCafe?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 flex items-center space-x-4"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-facebook-f text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Facebook</p>
                      <p className="text-gray-300 text-xs">La Avenida</p>
                    </div>
                  </MotionA>

                  <MotionA
                    href="https://wa.me/51987654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-green-500/20 hover:bg-green-500/30 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 border border-green-500/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-green-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-whatsapp text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">WhatsApp</p>
                      <p className="text-gray-300 text-xs">Chatea con nosotros</p>
                    </div>
                  </MotionA>
                </div>
              </MotionDiv>

              {/* Horarios de Atención */}
              <MotionDiv
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    Horarios de Atención
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-white to-green-dark mx-auto"></div>
                </div>

                {/* Horarios */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 px-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <i className="fas fa-calendar-day text-white text-sm"></i>
                      </div>
                      <span className="text-white font-medium">Lunes a Viernes</span>
                    </div>
                    <span className="text-gray-200 font-semibold text-sm">8:00 AM - 10:30 PM</span>
                  </div>

                  <div className="flex items-center justify-between py-3 px-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <i className="fas fa-sun text-white text-sm"></i>
                      </div>
                      <span className="text-white font-medium">Sábado</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-200 font-semibold text-sm">8:00 AM - 12:30 PM</div>
                      <div className="text-gray-200 font-semibold text-sm">4:30 PM - 11:00 PM</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 px-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <i className="fas fa-moon text-white text-sm"></i>
                      </div>
                      <span className="text-white font-medium">Domingo</span>
                    </div>
                    <span className="text-gray-200 font-semibold text-sm">8:00 AM - 10:30 PM</span>
                  </div>
                </div>
              </MotionDiv>
            </div>

            {/* Encuéntranos con Mapa */}
            <MotionDiv
              className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-xl font-bold text-white mb-6 text-center">
                Encuéntranos
              </h3>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <MapComponent />
              </div>
              <p className="text-gray-300 text-center text-sm">
                <i className="fas fa-map-marker-alt text-white mr-2"></i>
                Ubicados en el corazón de Huarmey
              </p>
            </MotionDiv>

            {/* Formulario de Contacto */}
            <MotionDiv
              className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-3 font-playfair">Formulario de Contacto</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Primera fila - Nombre y Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-white font-medium mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-user text-white text-sm"></i>
                      </div>
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.name}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-white font-medium mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-envelope text-white text-sm"></i>
                      </div>
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.email}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Segunda fila - Teléfono y Tipo de Consulta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-white font-medium mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-phone text-white text-sm"></i>
                      </div>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      placeholder="+51 999 999 999"
                    />
                    {errors.phone && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.phone}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-white font-medium mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-question-circle text-white text-sm"></i>
                      </div>
                      Tipo de Consulta
                    </label>
                    <select 
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 12px center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px'
                      }}
                    >
                      <option value="" className="bg-slate-900/90 backdrop-blur-sm text-white">Selecciona una opción</option>
                      <option value="reserva" className="bg-slate-900/90 backdrop-blur-sm text-white">Reserva de Mesa</option>
                      <option value="delivery" className="bg-slate-900/90 backdrop-blur-sm text-white">Consulta de Delivery</option>
                      <option value="evento" className="bg-slate-900/90 backdrop-blur-sm text-white">Eventos Especiales</option>
                      <option value="general" className="bg-slate-900/90 backdrop-blur-sm text-white">Consulta General</option>
                      <option value="queja" className="bg-slate-900/90 backdrop-blur-sm text-white">Queja o Sugerencia</option>
                    </select>
                    {errors.queryType && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.queryType}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="flex items-center text-white font-medium mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                      <i className="fas fa-comment text-white text-sm"></i>
                    </div>
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                  {errors.message && (
                    <div className="flex items-center mt-2">
                      <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                        <i className="fas fa-exclamation text-white text-xs"></i>
                      </div>
                      <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                        <span className="text-gray-800 text-sm font-medium">{errors.message}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Botón de Envío */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/25 border border-white/30 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-lg">Enviando...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane text-xl"></i>
                        <span className="text-lg">Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="text-gray-400 text-sm text-center mt-6">
                <i className="fas fa-clock mr-1"></i>
                Responderemos en un plazo máximo de 24 horas
              </p>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reservations = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.reservations-content-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // Mantener la flecha visible hasta que llegue a la sección de contenido
      const contentSection = document.querySelector('.reservations-content-section') as HTMLElement;
      if (contentSection) {
        const contentTop = contentSection.offsetTop;
        setShowScrollArrow(scrollTop < contentTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // Validar campos en orden y mostrar solo el primer error encontrado
    if (!formData.name.trim()) {
      newErrors.name = 'Completa este campo';
    } else if (!formData.email.trim()) {
      newErrors.email = 'Completa este campo';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    } else if (!formData.phone.trim()) {
      newErrors.phone = 'Completa este campo';
    } else if (!formData.guests) {
      newErrors.guests = 'Completa este campo';
    } else if (!formData.date) {
      newErrors.date = 'Completa este campo';
    } else if (!formData.time) {
      newErrors.time = 'Completa este campo';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '', message: '' });
      setErrors({});
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${fondoPrincipal})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Hero Section Profesional */}
      <MotionSection
        className="relative z-20 h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 py-32">
          <MotionDiv
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MotionH1
              className="font-playfair text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Reservas
              <span className="block font-dancing-script text-white text-7xl lg:text-9xl mt-2 drop-shadow-xl">
                Mesa
              </span>
            </MotionH1>

            <MotionDiv
              className="w-32 h-1 bg-gradient-to-r from-white via-green-dark to-white mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ delay: 1, duration: 1 }}
            ></MotionDiv>

            <MotionP
              className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Vive la experiencia única de <span className="text-white font-semibold">La Avenida</span>: 
              café, sabor y momentos inolvidables en Huarmey.
            </MotionP>

            {/* Flecha animada para indicar scroll */}
            <AnimatePresence>
              {showScrollArrow && (
                <MotionDiv
                  className="mt-20 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <MotionDiv
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer group"
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={scrollToNextSection}
                  >
                    <MotionDiv
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </MotionDiv>
                  </MotionDiv>
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Sección del Proceso de Reserva */}
      <div className="reservations-content-section relative z-20 container mx-auto px-4 py-20 bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">

          {/* Información Adicional */}
          <MotionDiv
            className="mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                ¿Por qué reservar con nosotros?
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-white to-green-dark mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beneficio 1 */}
          <MotionDiv
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-star text-white text-2xl group-hover:text-yellow-400 transition-colors duration-300"></i>
                    </div>
                <h4 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Mesa Garantizada
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Tu mesa estará lista cuando llegues, sin esperas ni inconvenientes
                </p>
              </MotionDiv>

              {/* Beneficio 2 */}
              <MotionDiv
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-gift text-white text-2xl group-hover:text-green-400 transition-colors duration-300"></i>
                    </div>
                <h4 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Atención Personalizada
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Servicio especial para celebraciones y ocasiones importantes
                </p>
              </MotionDiv>

              {/* Beneficio 3 */}
              <MotionDiv
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-clock text-white text-2xl group-hover:text-blue-400 transition-colors duration-300"></i>
                    </div>
                <h4 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Confirmación Rápida
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Recibe confirmación inmediata por email y WhatsApp
                </p>
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Formulario de Reserva - Centrado */}
          <div className="max-w-4xl mx-auto mt-12 relative">
            {/* Efecto de resplandor de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-3xl blur-xl scale-110 opacity-50"></div>
            
            <MotionDiv
              className="bg-white/15 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255,255,255,0.15)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              } as React.CSSProperties}
            >
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Contenido del formulario */}
              <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-3xl font-bold text-white mb-3">Formulario de Reserva</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-white font-semibold mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-user text-white text-sm"></i>
                      </div>
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.name}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="flex items-center text-white font-semibold mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-envelope text-white text-sm"></i>
                      </div>
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.email}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-white font-semibold mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-phone text-white text-sm"></i>
                      </div>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      placeholder="+51 999 999 999"
                    />
                    {errors.phone && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.phone}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="flex items-center text-white font-semibold mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-users text-white text-sm"></i>
                      </div>
                      Número de Personas
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 12px center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px'
                      }}
                    >
                      <option value="" className="bg-slate-900/90 backdrop-blur-sm text-white">Selecciona el número</option>
                      <option value="1" className="bg-slate-900/90 backdrop-blur-sm text-white hover:bg-white/10">1 persona</option>
                      <option value="2" className="bg-slate-900/90 backdrop-blur-sm text-white hover:bg-white/10">2 personas</option>
                      <option value="3" className="bg-slate-900/90 backdrop-blur-sm text-white hover:bg-white/10">3 personas</option>
                      <option value="4" className="bg-slate-900/90 backdrop-blur-sm text-white hover:bg-white/10">4 personas</option>
                      <option value="5" className="bg-slate-900/90 backdrop-blur-sm text-white hover:bg-white/10">5 personas</option>
                      <option value="6+" className="bg-slate-900/90 backdrop-blur-sm text-white hover:bg-white/10">6+ personas</option>
                    </select>
                    {errors.guests && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.guests}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-white font-semibold mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-calendar text-white text-sm"></i>
                      </div>
                      Fecha
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      style={{
                        colorScheme: 'dark'
                      }}
                    />
                    {errors.date && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.date}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="flex items-center text-white font-semibold mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                        <i className="fas fa-clock text-white text-sm"></i>
                      </div>
                      Hora
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                      style={{
                        colorScheme: 'dark'
                      }}
                    />
                    {errors.time && (
                      <div className="flex items-center mt-2">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center mr-2">
                          <i className="fas fa-exclamation text-white text-xs"></i>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-2 shadow-lg relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                          <span className="text-gray-800 text-sm font-medium">{errors.time}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="flex items-center text-white font-semibold mb-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 border border-white/30">
                      <i className="fas fa-comment text-white text-sm"></i>
                    </div>
                    Comentarios Adicionales
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Alguna preferencia especial, celebración, etc..."
                  />
                </div>

                <div className="text-center">
                  <MotionButton
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando reserva...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Enviar Reserva
                    </>
                  )}
                </MotionButton>
                </div>

                {submitStatus === 'success' && (
                  <MotionDiv
                    className="bg-green-dark/20 border border-green-dark/30 rounded-xl p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-check-circle text-green-dark text-2xl mb-2"></i>
                    <p className="text-green-dark font-semibold">¡Reserva enviada exitosamente!</p>
                    <p className="text-gray-300 text-sm">Te confirmaremos pronto por email.</p>
                  </MotionDiv>
                )}
              </form>
              </div>
            </MotionDiv>
                    </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Nosotros" },
    { to: "/menu", label: "Carta" },
    { to: "/reservations", label: "Reservas" },
    { to: "/contact", label: "Contactanos" },
  ];

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo y título */}
          <MotionDiv 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logoPrincipal} alt="LA AVENIDA Logo" className="w-12 h-12 rounded-full shadow-lg object-cover" />
            <div className="text-white">
              <h1 className="font-playfair text-xl sm:text-2xl font-bold tracking-wide">LA AVENIDA</h1>
            </div>
          </MotionDiv>

          {/* Enlaces de navegación - Desktop */}
                  <div className="hidden lg:flex items-center justify-center space-x-1 flex-1">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.to}>
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.to} 
                    className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                      location.pathname === link.to 
                        ? "text-white border-b border-white/50" 
                        : "text-white/80 hover:text-white hover:border-b hover:border-white/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                </MotionDiv>
                {index < navLinks.length - 1 && (
                  <div className="w-px h-4 bg-white/30"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Menú hamburguesa - Mobile */}
          <div className="lg:hidden">
            <MotionButton 
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              style={{ display: 'flex', visibility: 'visible', opacity: 1 }}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </MotionButton>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-white/20 shadow-xl"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <MotionDiv
                  key={link.to}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.to} 
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 text-lg font-medium uppercase tracking-wider transition-all duration-300 rounded-lg ${
                      location.pathname === link.to 
                        ? "text-green-dark bg-green-dark/10 border-l-4 border-green-dark" 
                        : "text-gray-700 hover:text-green-dark hover:bg-green-dark/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        )}
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gradient-to-br from-slate-900/70 to-blue-900/70 backdrop-blur-sm text-white py-12">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Columna 1: Brand */}
        <div className="md:col-span-1">
          <div className="flex flex-col items-center mb-6">
            <img 
              src={logoPrincipal} 
              alt="LA AVENIDA Logo" 
              className="w-16 h-16 rounded-full object-cover mb-4 shadow-lg" 
            />
            <h3 className="font-playfair text-2xl font-bold text-white text-center md:text-left">LA AVENIDA</h3>
          </div>
        </div>

        {/* Columna 2: Conócenos */}
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <h4 className="text-lg font-semibold mb-6 text-white">Conócenos</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-white mr-3"></i>
              <span className="text-gray-300 text-sm">Av. Cabo Alberto Reyes 168, Huarmey</span>
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-phone text-white mr-3"></i>
              <span className="text-gray-300 text-sm">+51 994 086 890</span>
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-envelope text-white mr-3"></i>
              <span className="text-gray-300 text-sm">LaAvenida2025@gmail.com</span>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Términos y condiciones</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Política de privacidad</a>
          </div>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-white text-center">Redes sociales</h4>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-center hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram text-white mr-3"></i>
              <span className="text-gray-300 text-sm">Instagram</span>
            </a>
            <a href="#" className="flex items-center justify-center hover:text-white transition-colors duration-300">
              <i className="fab fa-facebook text-white mr-3"></i>
              <span className="text-gray-300 text-sm">Facebook</span>
        </a>
      </div>
        </div>

        {/* Columna 4: Mi cuenta */}
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <h4 className="text-lg font-semibold mb-6 text-white">Mi cuenta</h4>
          <div className="space-y-3">
            <Link to="/menu" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Pedir</Link>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Club La Avenida</a>
          </div>
          
          {/* Libro de Reclamaciones Elegante - Centrado */}
          <div className="mt-8">
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-book text-white text-sm"></i>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">Libro de</div>
                    <div className="text-sm font-semibold">Reclamaciones</div>
                  </div>
                </div>
        </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Footer bottom */}
    <div className="border-t border-gray-700 mt-8 pt-6">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">Powered by La Avenida</p>
      </div>
    </div>
  </footer>
);

// Hook personalizado para scroll al inicio de página
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
            <Footer />
      </div>
    </Router>
  );
}

export default App;
