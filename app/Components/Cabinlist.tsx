"use client";
import React from "react";
import Image from "next/image";
import Room1 from "../../public/img/room1.png";
import Room2 from "../../public/img/room2.png";
import Room3 from "../../public/img/room3.png";
import Link from "next/link";
import { Card } from "flowbite-react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function CabinList(props: any) {
  const data = [
    {
      hotelName: "THE CABIN HOTEL GANDEKAN",
      imageSrc: Room1,
      description:
        "The Cabin yang mempunyai view yang sejuk dan dekat dengan pusat kota ",
      hrefTo: "/thecabin/0",
    },
    {
      hotelName: "THE C3ABIN HOTEL SUTOMO",
      imageSrc: Room2,
      description:
        "Berbagai tempat dengan mudah dijangkau jika menginap di The Cabin Hotel Sutomo",
      hrefTo: "/thecabin/1",
    },
    {
      hotelName: "THE CABIN HOTEL BHAYANGKARA",
      imageSrc: Room3,
      description: "Konsep klasik menjadikan suasana menginap tidak terlupakan",
      hrefTo: "/thecabin/2",
    },
  ];

  return (
    <>
      <div>
        <section className=" bg-white dark:bg-slate-300 mx-auto pb-6">
          <div className="flex justify-center">
            <div className="max-w-[700px] text-center mb-5">
              <h2 className="mb-6 mt-6 text-xl font-primary font-semibold text-slate-900">
                Cabang <br />
                <span className="text-primary font-primary    text-3xl font-bold">
                  The Cabin Hotel
                </span>
              </h2>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center w-5/6">
            {data.map((item, index) => (
              <a href={item.hrefTo} key={index}>
                <div
                  className="rounded-lg shadow-lg bg-slate-200 hover:bg-slate-300 overflow-hidden transition duration-100 delay-100"
                  key={index}
                >
                  <Image
                    src={item.imageSrc}
                    width={400}
                    height={300}
                    alt="room at the cabin hotel"
                  />
                  <h1 className="font-bold font-primary text-primary text-lg px-2 pt-3">
                    {item.hotelName}
                  </h1>
                  {/* <div className="inline-block">
                8/10 <AiFillStar /> from 1000 Users
              </div> */}
                  <p className="font-semibold font-secondary text-sm text-slate-900 px-4 pb-4">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
            {/* view all the cabin */}
            <div className="rounded-lg pt-2 h-20 shadow-lg bg-slate-200 hover:bg-slate-300 transition duration-100 delay-100">
              <h1 className="font-bold text-primary text-xl pt-3 px-2">
                {/* <a href="/branches">Lihat semua Cabang</a> */}
                <Link href="/[dynamic]/[id]" as="/my-folder/my-id">
                  Lihat semua Cabang
                </Link>
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CabinList;
