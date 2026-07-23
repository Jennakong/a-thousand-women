import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="hero">

      <Image
        src="/images/homepage-hero1.jpg"
        alt="A Thousand Women team"
        fill
        priority
        sizes="100vw"
        className="hero-background"
      />

      <div className="hero-overlay" />


      <div className="hero-content">

        <Reveal>

          <h1 className="hero-title">
            Empowered Women.
            <br />
            Empower Generations.
          </h1>

        </Reveal>


        <Reveal>

          <div className="hero-buttons">

            <Button href="/#get-involved">
  Join Our Movement
</Button>


            <Button
              href="/initiatives"
              variant="secondary"
            >
              Explore Our Initiatives
            </Button>


          </div>

        </Reveal>


      </div>


    </section>
  );
}