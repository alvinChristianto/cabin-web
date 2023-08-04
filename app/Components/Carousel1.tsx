"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

import Room1 from "../../public/img/room1.png";
import Room2 from "../../public/img/room2.png";
import Room3 from "../../public/img/room3.png";

export default function Carousel1() {
  return (
    <div className="h-52 md:h-96">
      <Carousel slideInterval={5000}>
        <Image
          src={Room1}
          width={400}
          height={300}
          alt="room at the cabin hotel"
        />
        <Image
          src={Room2}
          width={400}
          height={300}
          alt="room at the cabin hotel"
        />
        <Image
          src={Room3}
          width={400}
          height={300}
          alt="room at the cabin hotel"
        />
      </Carousel>
    </div>
  );
}
