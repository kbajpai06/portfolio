"use client";

import { useState } from "react";
import BootSequence from "@/components/BootSequence";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GithubStats from "@/components/GithubStats";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import SceneBackground from "@/components/SceneBackground";
export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {/* <SceneBackground /> */}
      <BootSequence onDone={() => setBooted(true)} />
      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <GithubStats />
          
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
