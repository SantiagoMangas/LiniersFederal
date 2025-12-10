import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Desafio } from "../components/desafio";
import { Donation } from "../components/donation";
import Gallery  from "../components/gallery"
import Contact  from "../components/contact";
import Footer from "../components/footer";
import { Sponsors } from "../components/sponsors";

export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Desafio />
     <Sponsors />
     <Donation />
     <Gallery />
     <Contact />
     <Footer />
    </>
  );
}
