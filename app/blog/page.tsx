import Link from "next/link";
import Image from "next/image";
import RoomLong from "../../public/img/room-long.png";
import Room1 from "../../public/img/room3.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function IndexPage() {
  const data = [
    {
      title: "5 Tempat Tujuan Wisata di Jogja",
      shortText: "beragam tempat wisata di Jogja yang bisa dikunjungi seperti",
      datePublished: "Monday, August 7, 2023 8:01:30",
      imageLink: Room1,
      hrefTo: "/",
    },
    {
      title: "Tip berbelanja di Pasar Beringharjo",
      shortText: "Pasar Beringharjo merupakan tujuan wisata berbelanja",
      datePublished: "Monday, August 7, 2023 8:01:30",
      imageLink: Room1,
      hrefTo: "/",
    },
  ];
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

        <div className="bg-white dark:bg-slate-300  flex justify-center">
          <div className="max-w-[700px] text-center mb-4">
            <h2 className="mb-6 mt-6 font-primary text-primary text-3xl md:text-5xl font-bold">
              The Cabin Story
            </h2>
            <p className="mb-2 font-secondary text-neutral-500 dark:text-neutral-800 text-sm leading-loose ">
               Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum natus placeat quidem, ab impedit architecto
              repellendus uterum natus placeat quidem, ab impedit architecto
              repellendus ut voluptatibus harum quas? Similique aperiam
              accusantium reiciendis. Rem reprehenderit veniam autem a? Sit?
            </p>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-slate-300  mx-auto ">
          <div className="mx-auto w-5/6 md:w-1/2 gap-3 grid grid-cols-1 pt-4 ">
            {data.map((item, index) => (
              <>
                <Link href={item.hrefTo}>
                  <div
                    className="grid grid-rows-3 grid-flow-col gap-1 dark:bg-neutral-200 bg-neutral-100 rounded-lg hover:shadow-xl"
                    key={index}
                  >
                    <div className="relative w-28 md:w-32 lg:w-48 h-32 overflow-hidden  bg-fuchsia-300 rounded-lg row-span-3">
                      <Image
                        src={item.imageLink}
                        fill={true}
                        alt="room at the cabin hotel"
                      />
                    </div>
                    <div className="grid col-span-2 pl-3">
                      <h3 className="text-slate-900 font-primary text-sm md:text-2xl font-semibold text-left mt-2">
                        {item.title.slice(0, 25)} ...
                      </h3>
                    </div>
                    <div className="grid  row-span-2 col-span-2 pl-3 ">
                      <p className="font-secondary text-xs  md:text-md lg:text-xl font-medium text-slate-800 ">
                        {item.shortText.slice(0, 35)} ...
                      </p>
                      <p className="italic font-secondary text-xs font-medium text-slate-800">
                        {item.datePublished}
                      </p>
                    </div>
                  </div>
                </Link>
                <hr></hr>
              </>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
