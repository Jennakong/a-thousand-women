import Hero from "@/components/sections/Hero";
import WhyATW from "@/components/sections/WhyATW";
import ImpactStories from "@/components/sections/ImpactStories";
import VoicesFromField from "@/components/sections/VoicesFromField";
import KnowledgeHub from "@/components/sections/KnowledgeHub";
import JoinMovement from "@/components/sections/JoinMovement";
import VoiceAndEncouragement from "@/components/sections/VoiceAndEncouragement";
import Newsletter from "@/components/sections/Newsletter";
export default function Home() {
  return (
    <main>
      <Hero />

      <WhyATW />

      <ImpactStories />

      <VoicesFromField />
      <KnowledgeHub />
      <JoinMovement />
      <VoiceAndEncouragement />
      <Newsletter />
    </main>
  );
}