"use client";

import React from "react";
import { Progress } from "flowbite-react";

function ReviewRating(props: any) {

  return (
    <>
      <h3 className="text-slate-900 font-bold font-primary text-sm pb-4">
        Review dan Rating{" "}
      </h3>
      <h3 className="text-center text-slate-900 font-bold font-primary text-5xl ">
        4.8
      </h3>
      <p className="text-slate-700 font-light text-sm text-center">
        dari 100 user
      </p>
      <div className="grid gap-y-3">
        <div className="">
          <div className="text-base font-normal text-cyan-700">Keramahan</div>
          <Progress color="blue" progress={76} />
        </div>
        <div className="">
          <div className="text-base font-normal text-green-700">Kebersihan</div>
          <Progress color="green" progress={90} />
        </div>
        <div className="text-base font-normal text-yellow-500">Fasilitas</div>
        <Progress color="yellow" progress={80} />
      </div>
    </>
  );
}

export default ReviewRating;
