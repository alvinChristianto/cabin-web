import Image from "next/image";
import React from "react";

import Room1 from "../../../public/img/room1.png";
import Room2 from "../../../public/img/room2.png";
import Room3 from "../../../public/img/room3.png";

function Gallery(props: any) {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-44 md:h-96  m-4">
        <div className=" bg-slate-300 row-span-6 col-span-4 rounded-lg overflow-hidden ">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                src={Room1}
                width={750}
                height={700}
                alt="room at the cabin hotel"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className=" bg-slate-300  row-span-2 col-span-2 rounded-lg hidden md:block overflow-hidden">
          <div className="md:h-24 object-cover">
            <Image
              src={Room2}
              width={400}
              height={400}
              alt="room at the cabin hotel"
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
        <div className=" bg-slate-300 row-span-2 col-span-2 rounded-lg hidden md:block overflow-hidden">
          <div className="md:h-32 object-cover">
            <Image
              src={Room3}
              width={750}
              height={700}
              alt="room at the cabin hotel"
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
        <div className=" bg-slate-300 row-span-2 col-span-2 rounded-lg hidden md:block overflow-hidden ">
          <div className="md:h-32 object-cover">
            <Image
              src={Room1}
              width={400}
              height={400}
              alt="room at the cabin hotel"
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
