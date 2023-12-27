"use client"

import React, { useState, useEffect } from 'react';
import InfoCard from "@/components/info-card";
const BookComp = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const collection = items.map((item, idx) => (
    <div key={idx} className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
      <InfoCard
        icon={idx}
        title={item.name}
        date={item._id}
      >
        {item.name} {/* Assuming you want to display the item's name as the children */}
      </InfoCard>
    </div>
  ));

  return <>{collection}</>;
};

export default BookComp;
