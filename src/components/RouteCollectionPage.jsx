import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default Leaflet marker icons missing
let DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const RouteCollectionPage = () => {
  const [coordinates] = useState([
    [7.44522, 3.89844],
    [7.4375, 3.8960],
    [7.376736, 3.939786],
    [7.520767, 4.530315]
  ]);

  return (
    <div className="h-screen">
      <MapContainer
        center={coordinates[0]}
        zoom={13}
        style={{ height: '80vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {coordinates.map((coord, idx) => (
          <Marker key={idx} position={coord} />
        ))}
      </MapContainer>
    </div>
  );
};

export default RouteCollectionPage;
