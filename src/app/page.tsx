import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { Credentials } from "@/components/Credentials";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Credentials />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
