import React from "react";
import AccordionFaq from "./Accordion";

function Faq1(props: any) {
  return (
    <div className="bg-white dark:bg-slate-300">
      <section className="mx-auto w-full md:w-2/3 py-5 ">
        <div className="max-w-[900px] text-center ">
          <h2 className="mb-6  text-xl font-primary font-semibold text-slate-900">
            Pertanyaan Seputar<br/>
            <span className="text-primary font-primary  text-3xl font-bold">The Cabin Hotel</span>
          </h2>
        </div>
        <AccordionFaq />
        
        
        
      </section>
    </div>
  );
}

export default Faq1;
