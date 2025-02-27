"use client";
import Image from "next/image";
import HeroSection from "../components/sections/heroSection";
import TrustedCompanies from "../components/sections/trustedCompanies";
import Services from "../components/sections/services";
import About from "../components/sections/about";
import Benefits from "../components/sections/benefits";
import Introduction from "../components/sections/introduction";
import HappyClients from "../components/sections/happyClients";
import Blogs from "../components/sections/blogs";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <TrustedCompanies />
      {/* service components */}
      <Services />
      <About />
      <Benefits />
      <Introduction />
      <HappyClients />
      <Blogs />
    </div>
  );
}
