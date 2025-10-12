import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapLocationProps {
  lat: number;
  lng: number;
  name: string;
  address: string;
  className?: string;
}

export const MapLocation = ({ lat, lng, name, address, className = "" }: MapLocationProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Create map
    const map = L.map(containerRef.current).setView([lat, lng], 15);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker with popup
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`
      <div style="text-align: center; font-family: 'Josefin Sans', sans-serif;">
        <h3 style="font-family: 'Righteous', cursive; font-weight: bold; font-size: 0.875rem; margin-bottom: 0.25rem;">${name}</h3>
        <p style="font-size: 0.75rem; margin-top: 0.25rem; margin-bottom: 0.5rem;">${address}</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener noreferrer" style="color: hsl(146, 35%, 51%); text-decoration: underline; font-size: 0.75rem; margin-top: 0.5rem; display: inline-block;">
          Get Directions →
        </a>
      </div>
    `);

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, name, address]);

  return (
    <div className={`rounded-lg overflow-hidden border-2 border-primary/30 ${className}`}>
      <div ref={containerRef} style={{ height: '100%', width: '100%', minHeight: '300px' }} />
    </div>
  );
};