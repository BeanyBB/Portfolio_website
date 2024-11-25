import React, { useEffect, useState } from "react";

const CryptoBanner = () => {
  const [cryptoData, setCryptoData] = useState([]);

  // Fetch crypto data
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();

    // Refresh data every minute
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  // Generate the marquee content
  const marqueeContent = cryptoData.map((coin) => (
    <div
      key={coin.id}
      className="flex items-center space-x-2 px-4 py-2 text-white"
    >
      <img src={coin.image} alt={coin.name} className="w-6 h-6" />
      <span>{coin.name}</span>
      <span>${coin.current_price.toFixed(2)}</span>
    </div>
  ));

  return (
    <div className="bg-gray-900 py-2">
      <div className="relative overflow-hidden whitespace-nowrap">
        {/* Marquee effect */}
        <div
          className="flex space-x-8 animate-marquee"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {marqueeContent}
          {marqueeContent} {/* Duplicate content for seamless scrolling */}
        </div>
      </div>
    </div>
  );
};

export default CryptoBanner;



