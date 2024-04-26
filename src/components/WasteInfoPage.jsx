import React, { useState, useEffect } from 'react';
import { ref, onChildAdded, off } from 'firebase/database';
import { database } from './firebase'; // Ensure this path is correct

const WasteInfoCard = () => {
  const [location, setLocation] = useState({ latitude: 'N/A', longitude: 'N/A' });
  const [binLevel, setBinLevel] = useState('N/A');
  const [airQuality, setAirQuality] = useState('N/A');
  const [binStatus, setBinStatus] = useState('Closed');

  useEffect(() => {
    // Listen to the parent node for any new readings
    const dbRef = ref(database, "/UsersData/mAUu5mlPiFWbCWAinVOjfNhl6vZ2/readings");

    const handleData = snap => {
      const data = snap.val();
      setLocation({ latitude: data.Latitude || 'N/A', longitude: data.Longitude || 'N/A' });
      setBinLevel(data.BinLevel || 'N/A');
      setAirQuality(data.AirQuality || 'N/A');
      setBinStatus(data.BinStatus ? 'Open' : 'Closed');
    };

    const unsubscribe = onChildAdded(dbRef, handleData, error => {
      console.error("Failed to read data", error);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full min-w-xl max-w-4xl min-h-xl rounded-lg overflow-hidden shadow-xl p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="font-bold text-2xl mb-6 text-center text-blue-900">
        Bin Information
      </h2>
      <div className="mb-5">
        <p className="font-semibold text-lg text-gray-800">Location:</p>
        <p className="text-gray-700 text-base ml-4">
          Latitude {location.latitude}, Longitude {location.longitude}
        </p>
      </div>
      <div className="mb-5">
        <p className="font-semibold text-lg text-gray-800">Bin Level:</p>
        <p className="text-gray-700 text-base ml-4">{binLevel}</p>
      </div>
      <div className="mb-5">
        <p className="font-semibold text-lg text-gray-800">Air Quality:</p>
        <p className="text-gray-700 text-base ml-4">{airQuality}</p>
      </div>
      <div>
        <p className="font-semibold text-lg text-gray-800">Bin Status:</p>
        <p className="text-gray-700 text-base ml-4">{binStatus}</p>
      </div>
    </div>
  </div>
  );
};

export default WasteInfoCard;
