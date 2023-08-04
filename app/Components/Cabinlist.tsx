"use client";
import React from "react";
import Image from "next/image";
import Room1 from "../../public/img/room1.png";
import { Card } from "flowbite-react";

function CabinList(props: any) {
  return (
    <div>
      <section className=" bg-white mx-auto ">
        <div className="flex justify-center">
          <div className="max-w-[700px] text-center mb-5">
            <h2 className="mb-6 mt-6 text-xl font-primary font-semibold text-slate-900">
              Berikut cabang <br />
              <span className="text-primary font-primary    text-3xl font-bold">
                The Cabin Hotel
              </span>
            </h2>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center w-5/6">
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">
            <Image
              src={Room1}
              width={400}
              height={300}
              alt="room at the cabin hotel"
            />
            <h1 className="font-bold text-fuchsia-800 text-2xl">hotel hotel</h1>
            <p className="font-semibold text-md text-slate-900">
              deskripsi deskripsi deskripsi{" "}
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">
            <Image
              src={Room1}
              width={400}
              height={300}
              alt="room at the cabin hotel"
            />
            <h1 className="font-bold text-fuchsia-800 text-2xl">hotel hotel</h1>
            <p className="font-semibold text-md text-slate-900">
              deskripsi deskripsi deskripsi{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CabinList;
