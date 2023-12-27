"use client";
import React, { useState, useEffect } from 'react';
import { Typography,Alert } from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import InfoCard from "@/components/info-card"; // Adjust the import path as needed
import { useTheme } from './ThemeProvider';  // Adjust the path accordingly
import './custom.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
  


export function InformationSection() {
  const { darkTheme } = useTheme();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/api");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (<Skeleton count={3} height={30} />)
  }

  if (error) {
    return (<Alert className="m-4">Oops!!! somthing went wrong.Please refresh </Alert>)
  }

  const collection = items.map((item, idx) => (
      <InfoCard
        icon={AcademicCapIcon}
        bname={item.name}
        id={item._id}
	language={item.language}
      >
      </InfoCard>
  ));

  return (
    <>
      <section className={`pb-28 px-8 ${darkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
   	
	<div className={`p-2 rounded-lg ${darkTheme ? 'bg-gray-600' : 'bg-gray-300'}`}>
            <div className="mb-10 text-center">
              <Typography color={darkTheme ? 'white' : 'blue-gray'} className=" mt-4 text-center text-3xl font-bold">
                Books
              </Typography>
            </div>
         <div className="bg-transparent grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {collection}
        </div>
          
      </div>  
      </section>
    </>
  );
}

export default InformationSection;
