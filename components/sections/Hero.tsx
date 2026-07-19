import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">

          {/* Text Content */}
          <div className="hero-content">

            <Reveal>
              <h1 className="hero-title">
                Empowered Women.
                <br />
                Empower Generations.
              </h1>
            </Reveal>


            <Reveal>
              <p className="hero-description">
                Through education, empowerment, and advocacy, we create
                opportunities for women and girls to learn, grow, and lead.
                Together, we build stronger communities and brighter futures.
              </p>
            </Reveal>


            <Reveal>
              <div className="hero-buttons">

                <Button href="/get-involved">
                  Join Our Movement
                </Button>

                <Button 
                  href="/impact"
                  variant="secondary"
                >
                  Explore Our Impact
                </Button>

              </div>
            </Reveal>

          </div>


          {/* Visual Area */}
          <Reveal>

            <div className="hero-visual">

             <div className="hero-main-image">
  <Image
    src="/images/hero-image.jpg"
    alt="Women and girls participating in an ATW community outreach"
    fill
    priority
     sizes="(max-width: 900px) 100vw, 50vw"
    className="hero-image"
  />
</div>

              <div className="impact-card impact-one">
                <strong>5,000+</strong>
                <span>
                  Menstrual products distributed
                </span>
              </div>


              <div className="impact-card impact-two">
                <strong>1,000+</strong>
                <span>
                  Girls supported
                </span>
              </div>


            </div>

          </Reveal>


        </div>
      </Container>
    </section>
  );
}