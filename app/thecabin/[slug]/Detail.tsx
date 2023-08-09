"use client";

import React, { useState } from "react";
import ReviewRating from "./ReviewRating";

function Detail(props: any) {
  const [value, setValue] = useState<string>("overview");

  const data = [
    {
      title: "Kenyamanan adalah yang utama",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, error praesentium maxime eius, optio omnis voluptatum alias facilis eaque enim impedit tenetur ipsum  possimus odit reiciendis architecto doloremque quidem accusamus?`,
    },
    {
      title: "Daftar kamar",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, error praesentium maxime eius, optio omnis voluptatum alias facilis eaque enim impedit tenetur ipsum  possimus odit reiciendis </br> architecto doloremque quidem accusamus? odit reiciendis architecto doloremque quidem accusamus odit reiciendis architecto doloremque quidem accusamus `,
    },
    {
      title: "Fasilitas kami",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, error praesentium maxime eius, optio omnis voluptatum alias facilis eaque enim impedit tenetur ipsum  possimus odit reiciendis architecto doloremque quidem accusamus?`,
    },
  ];

  return (
    <>
    {/* USE TAB
    https://www.flowbite-react.com/docs/components/tabs */}
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" order-2 md:order-1 md:col-span-2 bg-slate-50 border rounded-md px-4 pb-16 pt-4">
          <div className="flex flex-row gap-2">
            <div className={"border rounded-lg  "+(value === 'overview' ? 'bg-slate-800' : 'bg-white ')}>
              <p className={"p-1 font-primary text-center font-semibold text-sm "+(value === 'overview' ? 'text-white' : 'text-black')}>
                <button type="button" onClick={() => setValue("overview")}>
                  Penjelasan
                </button>
              </p>
            </div>
            <div className={"border rounded-lg "+(value === 'room' ? 'bg-slate-800' : 'bg-white ')}>
              <p className={"p-1 font-primary text-center font-semibold text-sm "+(value === 'room' ? 'text-white' : 'text-black')}>
               <button type="button" onClick={() => setValue("room")}>
                  Kamar
                </button>
              </p>
            </div>
            <div className={"border rounded-lg  "+(value === 'facility' ? 'bg-slate-800' : 'bg-white ')}>
              <p className={"p-1 font-primary text-center font-semibold text-sm "+(value === 'facility' ? 'text-white' : 'text-black')}>
                 <button type="button" onClick={() => setValue("facility")}>
                  Fasilitas
                </button>
              </p>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-slate-900 font-bold font-primary text-xl pb-4">
              {value === "overview"
                ? data[0].title
                : value === "room"
                ? data[1].title
                : value === "facility"
                ? data[2].title
                : ""}
            </h2>
            <p className="text-slate-800 font-medium text-sm leading-6 font-secondary">
              {value === "overview"
                ? data[0].description
                : value === "room"
                ? data[1].description
                : value === "facility"
                ? data[2].description
                : ""}
            </p>
          </div>
        </div>
        <div className=" order-1 md:order-2 h-64 md:h-72 bg-slate-50 border rounded-md px-4 pb-16 pt-4">
          <ReviewRating />
        </div>
      </div>
    </>
  );
}

export default Detail;
