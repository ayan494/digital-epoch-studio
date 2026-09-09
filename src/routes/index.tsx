import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Services } from "@/components/sections/Services";
import { Showcase3D } from "@/components/sections/Showcase3D";
import { Products } from "@/components/sections/Products";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Epoch — Foundation of the new digital epoch" },
      {
        name: "description",
        content:
          "Epoch is an engineering studio building AI products, Web3 infrastructure and immersive digital experiences for enterprises and builders.",
      },
      { property: "og:title", content: "Epoch — Foundation of the new digital epoch" },
      {
        property: "og:description",
        content: "AI products, Web3 infrastructure and real-time 3D experiences, engineered end to end.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Showcase3D />
        <Products />
        <Stats />
        <Process />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
