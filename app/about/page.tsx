import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";

import RoomLong from "../../public/img/room1-long.png";

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

        <div className="bg-white flex justify-center">
          <div className="max-w-[700px] text-center">
            <h2 className="mb-6 mt-6 text-2xl font-primary font-semibold text-slate-900">
              Tentang <br />{" "}
              <span className="text-primary text-5xl font-bold">
                The Cabin Hotel
              </span>
            </h2>
            <p className="mb-2 font-secondary text-neutral-500 dark:text-neutral-300 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              natus placeat quidem, ab impedit architecto repellendus uterum
              natus placeat quidem, ab impedit architecto repellendus ut
              voluptatibus harum quas? Similique aperiam accusantium reiciendis.
              Rem reprehenderit veniam autem a? Sit?
            </p>
           
          </div>
        </div>

        <div className="bg-white ">
          <div className="mx-auto w-5/6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-center">
            <div className="p-5 text-center bg-gradient-to-r from-red-300 to-orange-300 shadow-lg rounded-sm md:mb-5">
              <h3 className="text-primary text-2xl font-semibold">
                10+ cabang <br/> <span className="text-lg">dan terus bertambah !</span>
              </h3>
            </div>
            <div className="p-5 text-center bg-gradient-to-r from-orange-300 to-green-300 shadow-lg rounded-sm md:mb-5">
              <h3 className="text-primary text-2xl font-semibold">
                10 Juta tamu <br/> <span className="text-lg">yang telah dilayani !</span>
              </h3>
            </div>
            <div className="p-5 text-center bg-gradient-to-r from-green-300 to-red-300 shadow-lg rounded-sm md:mb-5">
              <h3 className="text-primary text-2xl font-semibold">
              Check in Check out Mudah  <br/> <span className="text-md lg:text-sm">datang langsung atau pemesanan online semua mudah !</span>
              </h3>
            </div>
            <div className="p-5 text-center bg-gradient-to-r from-red-300 to-cyan-300 shadow-lg rounded-sm md:mb-5">
              <h3 className="text-primary text-2xl font-semibold">
                Area bertambah <br/> <span className="text-xl">Yogyakarta, Wonosobo, dan akan bertambah !</span>
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
