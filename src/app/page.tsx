import { Hero } from "@/sections/Hero";
import { SelectedProjects } from "@/sections/SelectedProjects";
import { HowIBuild } from "@/sections/HowIBuild";
import { Playground } from "@/sections/Playground";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <HowIBuild />
      <Playground />
      <About />
      <Contact />
    </>
  );
}
