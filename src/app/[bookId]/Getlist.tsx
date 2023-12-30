"use client";
import React, { useState, useEffect } from 'react';
import { Typography, Alert } from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { ListCard } from "@/components/list-card"; // Adjust the import path as needed
import { useTheme } from '@/app/ThemeProvider';  // Adjust the path accordingly                           
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { db } from "@/app/firebase";
import { collection, getDocs, query, limit, where, orderBy } from "firebase/firestore";

interface Item {
  title: string;
  _id: string;
  // Add other fields as needed
}

async function fetchFirebase(bookid) {
  console.log(bookid);
  const qrysnap = await getDocs(query(collection(db, "poems"), orderBy("_id"), where("book_id", "==", parseInt(bookid))));

  const data = [];
  qrysnap.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export function Getlist({ bookId }) {
  const { darkTheme } = useTheme();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFirebase1 = async () => {
      try {
        const data = await fetchFirebase(bookId);
        setItems(data);
      } catch (error) {
        setError();
      } finally {
        setLoading(false);
      }
    };

    fetchFirebase1();
  }, []);

  if (loading) {
    return (<Skeleton height={30} count={5} />);
  }

  if (error) {
    return (<Alert className="m-4 p-2">Oops!!! something went wrong. Please refresh</Alert>);
  }

  const collection = items.length > 0 ? (
    items.map((item, idx) => (
      <ListCard
        key={item._id}
        bname={item.title}
        id={item._id}
        bookId={bookId}
      />
    ))
  ) : (
    <Alert className="m-4 p-2">No Data Found</Alert>
  );

  return (
    <>
      <section className={`pb-28 px-8 ${darkTheme ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="m-4 text-center">
          <Typography placeholder="poem" className={`mb-2 text-center mt-3 text-3xl font-bold ${darkTheme ? 'text-gray-100' : 'blue-gray'}`}>
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
