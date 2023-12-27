"use client";

import { Typography } from "@material-tailwind/react";
import { useTheme } from './ThemeProvider';  // Adjust the path accordingly

function Hero() {
  const { darkTheme } = useTheme();
  const imagePath = darkTheme ? "image/iqbal_dark.png" : "image/iqbal_light.png";

  return (
    <div className={`relative w-full ${darkTheme ? 'bg-gray-800' : 'bg-gray-200'} py-10 text-white`}>
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <img
          src={imagePath}
          alt="Iqbal"
          className="w-1/2 md:w-1/4 mb-4"
        />
        <div className="text-center">
          {/* Removed the Urdu text */}
          <Typography variant="lead" color={`${darkTheme ? 'white' : 'black'}`} className="mb-4 max-w-2xl">
        	Allama Iqbal, a revered Islamic poet, left an indelible mark with his profound works in Urdu and Persian. My mission is to ensure widespread access to Iqbal's poetry by making it readily available on the internet. His verses, rich in spiritual depth, offer valuable insights into the human condition and the beauty of Islamic thought.READERS ARE REQUESTED FOR DUA.
	  </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
