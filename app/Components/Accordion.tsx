"use client";

import { Accordion } from "flowbite-react";

export default function AccordionFaq() {
  const data = [
    {
      title: "Apa itu The Cabin ? ",
      content:
        "The cabin adalah jaringan hotel yang tersebar di wilayah Yogyakarta, yang menyediakan layanan penginapan dengan fasilitas terbaik dan terlengkap",
    },
    {
      title: "Apa saja cabang The Cabin ? ",
      content:
        "The Cabin mempunyai 20 cabang yang tersebar di wilayah Yogyakarta dan Wonosobo.",
    },
    {
      title: "Bagaimana cara untuk reservasi kamar di The Cabin ? ",
      content:
        "Reservasi kamar di The Cabin, sangat mudah dengan melalui OTA seperti booking.com, Traveloka, Agoda dan lainnya. pelanggan juga bisa melakukan reservasi dengan datang langsung ke cabang The Cabin terdekat. ",
    },
  ];

  return (
    <div className="px-5">
      <Accordion>
        {data.map((item, index) => (
          <Accordion.Panel>
            <div key={index}>
              <Accordion.Title>{item.title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
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
