"use client";


import React, { useState, useEffect } from 'react';
import { Typography, Card, CardBody,CardFooter,Button,Alert} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/ThemeProvider"; // Adjust the path accordingly
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { db } from "@/app/firebase";
import { collection, getDocs, query,where } from "firebase/firestore";


async function fetchFirebase(poemid) {
  const qrysnap = await getDocs(query(collection(db, "poems"), where("_id", "==", parseInt(poemid))));
  if (qrysnap.empty) {
    throw new Error("No document found with the specified ID");
  }
  const doc = qrysnap.docs[0].data();
  return { id: qrysnap.docs[0].id, ...doc };
}

export function Getpoem({ bookId, poemId }) {
  const { darkTheme } = useTheme();
  const next = parseInt(poemId) + 1;
  const prev = parseInt(poemId) > 1 ? parseInt(poemId) - 1 : 1;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFirebase(poemId);
        setItem(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [poemId]);

  if (loading) {
    return <Skeleton height={70} count={5} />;
  }

  if (error) {                                                                                                return <Alert className="m-4">Oops!!! Something went wrong. Please refresh.</Alert>;
  }
 if (!item || Object.keys(item).length === 0) {
    return <Alert className="m-4">No data found.</Alert>;
  }

  return (
    <section className={`py-10 px-4 lg:py-18 ${darkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>                    <Card placeholder="" key={item.id} color="transparent" shadow={false} className="p-2">                      <CardBody placeholder="">                                                                                   <div className={`mb-2 text-center text-lg ${darkTheme ? 'text-gray-100 bg-gray-800' : 'text-gray-800 bg-gray-200'}`}>                                                                                                 {item.title}
          </div>
          <div className="border-t border-gray-300 mb-4"></div>
          <div className={`whitespace-pre direction-rtl text-center ${darkTheme ? 'text-white' : 'text-black'}`}>
            {item.data}
          </div>
        </CardBody>
      </Card>

      <div className={`flex justify-between bg-gray-100 px-4 ${darkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className={`flex items-center outline m-4 p-4 rounded-md ${darkTheme ? 'bg-gray-600' : 'bg-gray-100'}`}>
          <a href={`/${bookId}/${prev}`} className="blue-gray hover:underline cursor-pointer">
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </a>
        </div>
        <div className={`flex items-center outline m-4 p-4 rounded-md bg-gray-100 ${darkTheme ? 'bg-gray-600' : 'bg-gray-100'}`}>
          <a href={`/${bookId}/${next}`} className="blue-gray hover:underline cursor-pointer">
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Getpoem;
