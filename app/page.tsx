import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import CabinList from "./Components/Cabinlist";
import Faq from "./Components/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CabinList />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}
