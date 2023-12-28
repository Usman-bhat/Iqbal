"use client";


import React, { useState, useEffect } from 'react';
import { Typography, Card, CardBody,CardFooter,Button,Alert} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/ThemeProvider"; // Adjust the path accordingly
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function Getpoem({ bookId,poemId }) {
  const { darkTheme } = useTheme();
   const next = parseInt(poemId)+1;
   const prev = parseInt(poemId) > 1 ? parseInt(poemId) - 1 : 1;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//console.log(bookId);
  useEffect(() => {
    const fetchData = async () => {
      try {
	console.log(bookId);
        const response = await fetch(`https://alamaiqbal.vercel.app/api/${bookId}/${poemId}`);
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
  }, [poemId]);

  if (loading) {
    return <Skeleton height={70} count={5} />;
  }

  if (error) {
    return (<Alert className="m-4">Oops!!! somthing went wrong.Please refresh </Alert>)
  }

  const testimonialCards = items.map((item, idx) => (



    <Card key={idx} color="transparent" shadow={false} className="p-2">
      <CardBody>
        <div className={`mb-2 text-center text-lg ${darkTheme ? 'text-gray-100 bg-gray-800' : 'text-gray-800 bg-gray-200'}`}>
          {item.title}
        </div>
	<div class="border-t border-gray-300 mb-4"></div>	


        <div class={`whitespace-pre direction-rtl text-center ${darkTheme ? 'text-white' : 'text-black'}`}>
          {item.data}
        </div>
      </CardBody>
    </Card>
  ));

  return (
    <section className={`py-10 px-4 lg:py-18 ${darkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="flex flex-col flex-row h-full">
        {testimonialCards}
      </div>


  <div className={`flex justify-between bg-gray-100 px-4 ${darkTheme ? 'bg-gray-800' :'bg-gray-200'}`}>

      <div className={`flex items-center outline m-4 p-4 rounded-md ${darkTheme ? 'bg-gray-600' :'bg-gray-100'}`}>
        <a href={`/${bookId}/${prev}`} className=" blue-gray hover:underline cursor-pointer">
	   <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </a>
      </div>

      <div className={`flex items-center outline m-4 p-4  rounded-md bg-gray-100 ${darkTheme ? 'bg-gray-600' :'bg-gray-100'}`}>
        <a href={`/${bookId}/${next}`} className="blue-gray hover:underline cursor-pointer">
	<ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
	</a>
      </div>
    </div>










    </section>
  );
}

export default Getpoem;
