import Navbarbk from "./Components/Navbarbk copy";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import CabinList from "./Components/Cabinlist";
import Faq1 from "./Components/Faq1";
import CarouselImageHero from "./Components/Carousel";
import Accordion1 from "./Components/Accordion";
import Navbar from "./Components/Navbar";
import AccordionFaq from "./Components/Accordion";


export default function Home() {
  return (
    <>
      {/* <Navbarbk /> */}
      <Navbar />
      <Hero />
      <CabinList />
      <Features />
      <Faq1 />
      <Footer />
      
    </>
  );
}
