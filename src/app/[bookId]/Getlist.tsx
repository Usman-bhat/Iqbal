"use client";                                                                                             import React, { useState, useEffect } from 'react';                                                       import { Typography,Alert } from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import {ListCard} from "@/components/list-card"; // Adjust the import path as needed
import { useTheme } from '@/app/ThemeProvider';  // Adjust the path accordingly

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



interface InfoCard {bookId: string; }



export function Getlist({bookId}:InfoCard) {
  const { darkTheme } = useTheme();                                                                                                                                                                                   const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);                                                               
  useEffect(() => {                                                                                           const fetchData = async () => {                                                                             try {
        const response = await fetch(`http://127.0.0.1:3000/api/${bookId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }                                                                                                       };
                                                                                                              fetchData();
  }, []);

  if (loading) {
	  return (<Skeleton height={30} count={5} />);
  }

 if (error) {
  return (<Alert className="m-4">Oops!!! somthing went wrong.Please refresh </Alert>)
}
const collection = items.map((item, idx) => (
    <ListCard
      key={idx}
      bname={item.title}
      id={item._id}
      bookId={bookId}
    />
  ));
                                                                                                            return (                                                                                                    <>
      <section className={`pb-28 px-8 ${darkTheme ? 'bg-gray-800' : 'bg-gray-100'}`}>                                                                                                                                              <div className="m-4 text-center">
              <Typography color={darkTheme ? 'gray' : 'blue-gray'} className={`mb-2 text-center mt-3text-3xl font-bold ${darkTheme ? 'text-gray-100' : 'blue-gray'}`} >
Poems
              </Typography>
            </div>
         <div className="flex flex-col flex-row h-full grid gap-4 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3">
          {collection}
        </div>
      </section>
    </>
  );
}

export default Getlist;
