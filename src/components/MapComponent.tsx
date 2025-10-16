import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importar el logo de La Avenida
import logoPrincipal from '../assets/logos/Logo2025.jpg';

const MapComponent: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  
  // Coordenadas exactas de Av. Alberto Reyes 168, Huarmey - Ancash (un poquitito poquitito arriba)
  const position: [number, number] = [-10.0688, -78.1540];

  useEffect(() => {
    if (!mapRef.current) return;

    // Fix para los iconos de Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });

    // Crear el mapa
    const map = L.map(mapRef.current, {
      center: position,
      zoom: 17, // Aumentar el zoom para ver más cerca
      zoomControl: true
    });

    // Agregar capa de tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Crear icono personalizado con tu logo
    const customIcon = L.divIcon({
      html: `<div class="custom-marker-interactive">
        <img src="${logoPrincipal}" alt="La Avenida" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg animate-bounce-logo" />
      </div>`,
      className: 'custom-div-icon-interactive',
      iconSize: [48, 48],
      iconAnchor: [24, 24],
      popupAnchor: [0, -24]
    });

    // Crear marcador personalizado
    const marker = L.marker(position, { icon: customIcon }).addTo(map);

    // Agregar popup al marcador
    marker.bindPopup(`
      <div class="text-center">
        <img src="${logoPrincipal}" alt="La Avenida" class="w-8 h-8 rounded-full object-cover mx-auto mb-2" />
        <h3 class="font-bold text-sm text-gray-800">La Avenida</h3>
        <p class="text-gray-700 text-xs">Av. Cabo Alberto Reyes 168</p>
        <p class="text-gray-700 text-xs">Huarmey, Peru</p>
      </div>
    `);

    // Evento de clic en el marcador
    marker.on('click', () => {
      setShowInfo(!showInfo);
    });

    // Guardar referencias
    mapInstanceRef.current = map;
    markerRef.current = marker;

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl bg-slate-900 backdrop-blur-sm border border-white/20 map-container-clean">
      {/* Contenedor del mapa */}
      <div 
        ref={mapRef} 
        className="w-full h-full z-10 interactive-map"
        style={{ height: '100%', width: '100%' }}
      />

      {/* Overlay simple y elegante */}
      {showInfo && (
        <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl max-w-sm animate-fadeIn border border-white/20">
          <div className="flex items-center mb-3">
            <img
              src={logoPrincipal}
              alt="La Avenida"
              className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-green-dark"
            />
            <h3 className="font-bold text-xl text-gray-800">
              <i className="fas fa-coffee text-green-dark mr-2"></i>
              La Avenida
            </h3>
          </div>
          
          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2 flex items-center">
              <i className="fas fa-map-marker-alt text-green-dark mr-3 text-lg"></i>
              <span className="font-medium">Av. Cabo Alberto Reyes 168</span>
            </p>
            <p className="mb-2 ml-8">Huarmey, Peru, 02651</p>
            <p className="text-xs text-gray-500 ml-8 italic">Cafetería y Restaurante</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Cabo+Alberto+Reyes+168,+Huarmey,+Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-dark text-white rounded-full text-sm hover:bg-green-dark/90 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-directions mr-2"></i>
              Ver en Google Maps
            </a>
            <a
              href="tel:+51994086890"
              className="px-4 py-2 bg-green-dark text-white rounded-full text-sm hover:bg-green-dark/90 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-phone mr-2"></i>
              Llamar ahora
            </a>
          </div>
        </div>
      )}

      {/* Indicador de ubicación simple */}
      <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-3 h-3 bg-green-dark rounded-full mr-3 animate-pulse"></div>
          <span className="font-medium">Ubicados en el corazón de Huarmey</span>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;