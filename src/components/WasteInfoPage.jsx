const WasteInfoCard = ({ location, wasteLevel }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="font-bold text-xl mb-2">Location: {location}</div>
      <p className="text-gray-700 text-base">
        Waste Level: {wasteLevel}
      </p>
    </div>
  );
  
  export default WasteInfoCard;
  