import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Desafio } from "../components/desafio";
import { Donation } from "@/components/donation";

export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Desafio />
     <Donation />
    </>
  );
}
