"use client";



// Import necessary dependencies and components
import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { useTheme } from "@/app/ThemeProvider"; // Adjust the path accordingly

// Testimonial component
export function Testimonial() {
  const { darkTheme } = useTheme(); // Use the useTheme hook to access the current theme

  return (
    <section className={` px-8 p-10  ${darkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2"  className={`mb-4 font-bold ${darkTheme ? 'text-gray-100' : 'text-gray-800' }`}>
            Who am I
          </Typography>
          <Typography
            variant="lead"
            className={`mx-auto w-full px-4 font-normal ${darkTheme ? 'text-gray-100' : 'dark-gray'}  lg:w-8/12`}
          >
A dedicated student committed to making the internet a positive space by sharing informative and uplifting content. I believe that knowledge is a powerful tool, and it's our responsibility, as emphasized in the Quran and Islamic teachings, to transfer knowledge for the betterment of society. This mission is rooted in the profound Islamic view that encourages the dissemination of meaningful knowledge to benefi
t others. Aspiring to contribute positively, I strive to create content that aligns with these values, fos
tering an environment of learning, understanding, and enlightenment.
            {/* Your content here */}
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          {/* You can add your testimonial content here */}
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;;
