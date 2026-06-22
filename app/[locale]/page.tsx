import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Specs } from "@/components/sections/Specs";
import { Compatibility } from "@/components/sections/Compatibility";
import { Scenarios } from "@/components/sections/Scenarios";
import { Kit } from "@/components/sections/Kit";
import { Comparison } from "@/components/sections/Comparison";
import { Demos } from "@/components/sections/Demos";
import { Faq } from "@/components/sections/Faq";
import { FinalOffer } from "@/components/sections/FinalOffer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Specs />
        <Compatibility />
        <Scenarios />
        <Kit />
        <Comparison />
        <Demos />
        <Faq />
        <FinalOffer />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
