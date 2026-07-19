import ImpactExplorer from "./ImpactExplorer";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/layout/Container";

const stats = [
  {
    number: "5,000+",
    label: "Menstrual products distributed",
  },
  {
    number: "1,000+",
    label: "Girls supported",
  },
  {
    number: "25+",
    label: "Community outreaches",
  },
  {
    number: "∞",
    label: "Generations impacted",
  },
];


export default function ImpactDashboard() {
  return (
    <section className="impact-section">

      <Container>

        <Reveal>

          <div className="section-heading">

            <span className="section-label">
              OUR IMPACT
            </span>


            <h2 className="section-title">
              Numbers tell a story
            </h2>


            <p className="section-intro">
              Every number represents a girl,
              a community, and a future changed.
              Through education, empowerment,
              and advocacy, we create lasting impact.
            </p>

          </div>

        </Reveal>



        <div className="impact-grid">

          {stats.map((stat) => (

            <Reveal key={stat.label}>

              <div className="impact-stat">

                <strong>
                  {stat.number}
                </strong>

                <p>
                  {stat.label}
                </p>

              </div>

            </Reveal>

          ))}

        </div>



        <Reveal>

          <ImpactExplorer />

        </Reveal>


      </Container>

    </section>
  );
}