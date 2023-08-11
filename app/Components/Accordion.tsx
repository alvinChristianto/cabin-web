"use client";

import { Accordion } from "flowbite-react";

export default function AccordionFaq() {
  const data = [
    {
      title: "Apa itu The Cabin Hotel ? ",
      content:
        "The cabin adalah jaringan hotel yang tersebar di wilayah Yogyakarta, yang menyediakan layanan penginapan dengan fasilitas terbaik dan terlengkap",
    },
    {
      title: "Apa Perbedaan The Cabin Hotel dengan hotel pada umumnya ? ",
      content:
        "The Cabin mengedepankan konsep kemudahan menginap, yaitu dengan Check In Check Out Freely!. Selain itu pelayanan yang ramah dan fasilitas terbaik selalu kami berikan kepada Pelanggan",
    },
    {
      title: "Apa itu Check In Check Out Freely ? ",
      content:
        "Suatu konsep dimana user bebas melakukan check in dan check out di jam berapa saja !, Tidak terikat aturan konvensional hotel.  ",
    },
    {
      title: "Bagaimana cara reservasi kamar di The Cabin Hotel Group ? ",
      content:
        "Reservasi kamar di The Cabin, sangat mudah dengan melalui OTA seperti booking.com, Traveloka, Agoda dan lainnya. Pelanggan juga bisa melakukan reservasi dengan datang langsung ke cabang The Cabin terdekat. ",
    },
    {
      title: "Bolehkan membawa hewan peliharaan ke dalam kamar ?  ",
      content:
        "Kami tidak memperbolehkan hewan peliharaan untuk ikut masuk ke area Hotel. Meskipun begitu, kami dapat membantu mencarikan penitipan hewan peliharaan terdekat ",
    },
  ];

  return (
    <div className="px-5">
      <Accordion>
        {data.map((item, index) => (
          <Accordion.Panel key={index}>
            <div >
              <Accordion.Title className="text-primary dark:text-primary font-semibold">{item.title}</Accordion.Title>
              <Accordion.Content className="dark:bg-slate-700">
                <p className="mb-2 text-gray-700 dark:text-slate-200">
                  {item.content}
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>
        ))}
      </Accordion>

      {/* 
      <Accordion>
        <Accordion.Panel>
          
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
       */}
    </div>
  );
}
