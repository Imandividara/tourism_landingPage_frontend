
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [message, setMessage] = useState('Welcome to our website!');
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setMessage('Good Morning! Welcome to Travel Treasures');
    } else if (hour < 18) {
      setMessage('Good Afternoon! Welcome to Travel Treasures');
    } else {
      setMessage('Good Evening! Welcome to Travel Treasures');
    }
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden relative pt-16 h-screen w-full bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('/images/wallpaperflare.com_wallpaper (15).jpg')"}}>
      <div className="p-8 mt-40 text-center">
        <p className="text-7xl mt-5 font-bold">WE MAKE AWESOME TOURS</p><br />
        <p className='text-xl mb-2'>"Explore Uncharted Destinations, Unforgettable Experiences, and Hidden Gems."</p>
        <h1 className="text-2xl   font-sans font-bold ">{message}</h1><br />
        
        <button className="bg-blue-700 bg-opacity-30 text-white px-4 py-2 rounded-full hover:bg-black">Go There</button>
        <p className="text-xl absolute bottom-4 right-4 font-medium">{time.toLocaleTimeString()}</p> {/* Display the current time */}
      </div>
    </div>
  );
};

export default Home;

