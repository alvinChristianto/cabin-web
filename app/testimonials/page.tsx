"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { Carousel } from "flowbite-react";

import RoomLong from "../../public/img/room1-long.png";

// export const metadata: Metadata = {
//   title: "About",
// };

function Testimonial(props: any) {
  const data = [
    {
      username: "Alvin Christianto",
      hotelName: "Grand Cabin Magelang",
      review:
        "Pelayanan memuaskan mulai dari kamar, tempat parkir. Front office juga sangat ramah dan helpfull",
    },
    {
      username: "Alvin C",
      hotelName: "The Cabin Sutomo 1 ",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum quam deserunt consequatur veniam fuga nobis quaerat dolor doloribus voluptatum.",
    },
    {
      username: "Alvin Nugroho",
      hotelName: "The Cabin Mantrijeron",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tenetur hic tempore, commodi nulla ipsa eligendi quibusdam rem. Voluptatibus laborum hic iste dicta ab iusto, esse quam facere odit laboriosam optio.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="">
        <div className="relative z-10 w-full h-32 md:h-44 lg:h-52 bg-cover bg-no-repeat bg-left bg-fixed ">
          <Image
            src={RoomLong}
            fill={true}
            style={{ objectFit: "cover" }}
            alt="room at the cabin hotel"
          />
        </div>

        <div className="bg-white dark:bg-slate-300 flex justify-center">
          <div className="max-w-[700px] text-center">
            <h2 className="mb-6 mt-6 text-2xl font-primary font-semibold text-slate-900">
              <span className="text-primary text-3xl md:text-5xl font-bold">
                Testimonial Tamu
              </span>
            </h2>
            <p className="mb-2 font-secondary text-neutral-500 dark:text-neutral-800 leading-loose">
              Berikut testimonial dari tamu kami dari berbagai cabang The Cabin
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-300 pb-11">
          <div className="h-80 md:h-64 mx-auto text-center w-5/6">
            <Carousel>
              {/* item 1 */}
              {data.map((item, index) => (
                <div
                  className=" h-full items-center justify-center bg-gray-200 dark:bg-gray-400 dark:text-white"
                  key={index}
                >
                  <div className="grid grid-cols-1">
                    <div className=" mx-auto pt-6">
                      <svg
                        className="h-12 -pb-5 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <br />
                  <div className="">
                    <h3 className="font-secondary italic font-normal dark:text-slate-800">
                      {item.review}
                    </h3>
                    <h3 className="pt-4 mb-6 font-primary text-neutral-800 font-medium text-sm">
                      {item.username} <span className="text-2xl">|</span>
                      {item.hotelName}
                    </h3>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Testimonial;
