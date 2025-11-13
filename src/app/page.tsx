import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Desafio } from "../components/desafio";
import { Donation } from "../components/donation";
import Gallery  from "../components/gallery"

export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Desafio />
     <Donation />
     <Gallery />
    </>
  );
}
