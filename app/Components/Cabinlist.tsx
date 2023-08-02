import React from "react";

function CabinList(props: any) {
  return (
    <div>
      <section className="mb-32 bg-white mx-auto ">
        <div className="flex justify-center">
          <div className="max-w-[700px] text-center mb-5">
            <h2 className="mb-6 mt-6 text-xl font-primary font-semibold text-slate-900">
              Berikut daftar <br />
              <span className="text-primary font-primary text-3xl font-bold">
                The Cabin Hotel
              </span>
            </h2>
          </div>
        </div>

        <div className="max-w-4xl gap-6 lg:grid-cols-3 xl:gap-x-12">

        </div>
      </section>
    </div>
  );
}

export default CabinList;
