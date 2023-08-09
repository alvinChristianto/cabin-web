
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import CabinList from "./Components/Cabinlist";
import Faq1 from "./Components/Faq1";
import Navbar from "./Components/Navbar";


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
