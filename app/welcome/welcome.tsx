import { Link } from "react-router";
import { BottomNav } from "~/components/BottomNav";
import CallToAction from "~/components/CallToAction";
import Generate from "~/components/Generate";
import HeroSection from "~/components/heroSectiob";
import InfoSection from "~/components/InfoSection";
import Tone from "~/components/Tone";

export function Welcome() {
  return (
    <main className="min-h-screen bg-black pb-20">
        <HeroSection />
        <InfoSection />
        <Tone />
        <Generate />
        <CallToAction />
        <BottomNav />
    </main>
  );
}

