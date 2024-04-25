import React, { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from './firebase'; // Ensure this path is correct

const WasteInfoCard = () => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [wasteLevel, setWasteLevel] = useState('');
  const [airQuality, setAirQuality] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Reference to the specific part of the database where the waste info is stored
    const dbRef = ref(database, '/UsersData');

    // Function to handle incoming data
    const handleData = snap => {
      if (snap.val()) {
        const data = snap.val();
        setLocation({ latitude: data.location.latitude, longitude: data.location.longitude });
        setWasteLevel(data.wasteLevel);
        setAirQuality(data.airQuality);
        setIsOpen(data.isOpen);
      } else {
        // Handle the case where there is no data
        console.log("No data available");
      }
    };

    // Listen for real-time updates
    onValue(dbRef, handleData, error => {
      console.error("Failed to read data", error);
    });

    // Clean up the listener when the component unmounts
    return () => off(dbRef, 'value', handleData);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-xl p-5 bg-white">
        <div className="font-bold text-xl mb-2 text-center">
          Location: Latitude {location.latitude}, Longitude {location.longitude}
        </div>
        <p className="text-gray-700 text-base">Waste Level: {wasteLevel}</p>
        <p className="text-gray-700 text-base">Air Quality: {airQuality}</p>
        <p className="text-gray-700 text-base">
          Bin Status: {isOpen ? 'Open' : 'Closed'}
        </p>
      </div>
    </div>
  );
};

export default WasteInfoCard;
