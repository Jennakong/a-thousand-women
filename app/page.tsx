import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import WhyATW from "@/components/sections/WhyATW";
import ImpactStories from "@/components/sections/ImpactStories";
import VoicesFromField from "@/components/sections/VoicesFromField";
import LuwaComingSoon from "@/components/sections/LuwaComingSoon";
import KnowledgeHub from "@/components/sections/KnowledgeHub";
import JoinMovement from "@/components/sections/JoinMovement";
import VoiceAndEncouragement from "@/components/sections/VoiceAndEncouragement";
import Newsletter from "@/components/sections/Newsletter";
export default function Home() {
  return (
    <main>
      <Hero />
<Mission />
      <WhyATW />

      <ImpactStories />

      <VoicesFromField />
      <LuwaComingSoon />
      <KnowledgeHub />
      <JoinMovement />
      <VoiceAndEncouragement />
      <Newsletter />
    </main>
  );
}