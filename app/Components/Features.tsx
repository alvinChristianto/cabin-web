import React from "react";

function Features(props: any) {
  const data = [
    {
      title: "Pelayanan maksimal",
      description:
        "Kami mengedepankan pelayanan maksimal. Pelayanan terhadap tamu adalah hal utama agar tamu mendapat pengalaman menginap terbaik",
    },
    {
      title: "Fasilitas terbaik",
      description:
        "Kami mempunyai fasilitas seperti parking car, CCTV, Breakfast dan lainnya",
    },
    {
      title: "Kemudahan bertransaksi",
      description:
        "Kami bekerja sama dengan OTA seperti Traveloka, Agoda dan booking.com sehingga tamu dapat dengan mudah reservasi ",
    },
    {
      title: "Kebersihan",
      description:
        "Kebersihan merupakan hal penting dalam memaksimalkan pelayanan terhadap tamu. Semua cabang The Cabin Hotel terjamin kebersihannya",
    },
    {
      title: "Keramahan",
      description:
        "Staf kami akan menyambut anda dengan keramahan, sehingga pengalaman menginap yang terbaik dapat diperoleh tamu",
    },
  ];
  return (
    <div>
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="max-w-[700px] text-center">
            <h2 className="mb-6 mt-6 text-xl font-primary font-semibold">
              Kenapa Memilih <br />{" "}
              <span className="text-primary text-3xl font-bold">
                The Cabin Hotel
              </span>
            </h2>
            <p className="mb-16 font-secondary text-neutral-500 dark:text-neutral-300">
              Tamu merupakan subyek utama yang ingin kami layani dengan
              maksimal. Kami siap menyambut anda di cabang-cabang The Cabin
              pilihan anda.
            </p>
          </div>
        </div>

        <div className="grid mx-8 gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          {data.map((item, index) => (
            <div className="mb-12 " key={index}>
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold font-primary">{item.title}</p>
                  <p className="font-secondary text-neutral-500 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
