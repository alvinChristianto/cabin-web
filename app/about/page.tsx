import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";
import { Metadata } from "next";

import RoomLong from "../../public/img/room1-long.png";

export const metadata: Metadata = {
  title: "About",
};

function About(props: any) {
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
              Tentang <br />{" "}
              <span className="text-primary text-3xl md:text-5xl font-bold">
                The Cabin Hotel
              </span>
            </h2>
            <p className="mb-2 font-secondary text-neutral-500 dark:text-neutral-800 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              natus placeat quidem, ab impedit architecto repellendus uterum
              natus placeat quidem, ab impedit architecto repellendus ut
              voluptatibus harum quas? Similique aperiam accusantium reiciendis.
              Rem reprehenderit veniam autem a? Sit?
            </p>
          </div>
        </div>

        <div className="bg-white  dark:bg-slate-300 ">
          <div className="mx-auto w-5/6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-center">
            <div className="p-5 text-center shadow-lg rounded-sm md:mb-5  transition ease-in-out delay-150 bg-orange-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300 ">
              <h3 className="text-primary text-2xl font-semibold">
                10+ cabang <br />{" "}
                <span className="text-lg">dan terus bertambah !</span>
              </h3>
            </div>
            <div className="p-5 text-center shadow-lg rounded-sm md:mb-5  transition ease-in-out delay-150 bg-orange-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300 ">
              <h3 className="text-primary text-2xl font-semibold">
                10 Juta tamu <br />{" "}
                <span className="text-lg">yang telah dilayani !</span>
              </h3>
            </div>
            <div className="p-5 text-center shadow-lg rounded-sm md:mb-5  transition ease-in-out delay-150 bg-orange-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300 ">
              <h3 className="text-primary text-2xl font-semibold">
                Check in Check out Mudah
              </h3>
            </div>
            <div className="p-5 text-center shadow-lg rounded-sm md:mb-5  transition ease-in-out delay-150 bg-orange-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300 ">
              <h3 className="text-primary text-2xl font-semibold">
                Area bertambah <br />{" "}
                <span className="text-xl">
                  Yogyakarta, Wonosobo, dan akan bertambah !
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
