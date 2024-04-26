import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ref, onValue, off } from 'firebase/database';
import { database } from './firebase'; // Ensure this path is correct

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
  const [coordinates, setCoordinates] = useState([
    [7.437773, 3.893234], 
  ]);

  useEffect(() => {
    const dbRef = ref(database, "/UsersData/mAUu5mlPiFWbCWAinVOjfNhl6vZ2/readings");

    const handleData = snap => {
      if (snap.val()) {
        const location = snap.val();
        const latitude = parseFloat(location.Latitude);
        const longitude = parseFloat(location.Longitude);

        console.log("Parsed latitude:", latitude); // Check the parsed latitude
        console.log("Parsed longitude:", longitude); // Check the parsed longitude

        if (!isNaN(latitude) && !isNaN(longitude)) {
          const newLocation = [latitude, longitude];
          setCoordinates(prevCoords => [...prevCoords, newLocation]);
        } else {
          console.error("Invalid coordinates received:", location);
        }
      } else {
        console.log("No data available");
      }
    };

    onValue(dbRef, handleData, error => {
      console.error("Failed to read data", error);
    });

    return () => off(dbRef, 'value', handleData);
  }, []);

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
