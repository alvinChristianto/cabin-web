import React from "react";
import Image from "next/image";
import Room from "../../public/img/room1.png";
import Carousel1 from "./Carousel1";

function Hero(props: any) {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-orange-300">
      <div className="px-6 py-3 text-center md:px-12 lg:px-20 lg:py-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mt-0 mb-5 md:mb-12 text-4xl font-primary font-semibold tracking-tight md:text-6xl text-slate-50">
                Nikmati pengalaman menginap yang baru
                <br />
              </h1>
              <h2 className="mt-0 mb-10 text-2xl font-primary font-semibold  md:text-3xl  text-[hsl(218,81%,95%)] ">
                Check in Check out
                {/* use https://tailwindcss.com/docs/background-clip */}
                {/* uppercase  font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-3xl */}
                <span className="text-primary text-3xl   ">
                  {" "}
                 Freely !
                 </span>
              </h2>
              <div className="my-6">
                <a
                  href="#"
                  className="px-5 bg-primary font-primary py-5 rounded-lg shadow-lg uppercase font-semibold tracking-wider hover:bg-orange-500 transition duration-100 delay-50"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            <div className="mb-12 lg:mb-0">
              {/* carousel */}

              <Carousel1 />

              {/* <div className="w-full rounded-lg shadow-lg dark:shadow-black/20">
                <Image
                  src={Room}
                  width={400}
                  height={300}
                  alt="room at the cabin hotel"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
