"use client";

import React from "react";

import Navbar from "@/app/Components/Navbar";
import Gallery from "./Gallery";
import Detail from "./Detail";
import Footer from "@/app/Components/Footer";

function CabinDetail({ params }: { params: { slug: number } }) {
  const data = [
    {
      hotelName: "THE CABIN HOTEL GANDEKAN",
      address: `Jl. Gandekan Lor No.2, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa`,
    },
    {
      hotelName: "THE CABIN HOTEL SUTOMO",
      address: `Jl. Doktor Sutomo No.2, Baciro, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55211`,
    },
    {
      hotelName: "THE CABIN HOTEL BHAYANGKARA",
      address: `Jl. Bhayangkara No.11, Ngampilan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55261`,
    },
  ];


  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-5xl sm:px-6 lg:grid lg:max-w-7xl  lg:gap-x-8 lg:px-8">
          <h2 className="pl-4 pt-4 text-primary text-2xl md:text-3xl lg:text-4xl font-bold font-primary uppercase">
            {data[params.slug].hotelName}
          </h2>
          <div className="flex flex-col md:flex-row lg:pb-4">
            <div className="shrink w-5/6">
              <p className="font-secondary text-slate-600 text-sm font-thin pl-4 pb-2">
               {data[params.slug].address}
              </p>
            </div>
            <div className="shrink w-24 lg:w-36 pl-4 relative ">
              <p className=" md:absolute top-0 right-0  bg-primary text-slate-800 text-center rounded-md p-1">
                share
              </p>
            </div>
          </div>
          <Gallery />
          <Detail />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CabinDetail;
