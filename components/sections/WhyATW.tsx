import Container from "@/components/layout/Container";

const challenges = [
  {
    title: "Education Access",
    description:
      "Every girl deserves the opportunity to learn, develop skills, and pursue her ambitions. We support pathways that help girls stay in school and women gain knowledge.",
  },
  {
    title: "Menstrual Equity",
    description:
      "Period poverty remains a barrier to education and opportunity. Through awareness, support, and solutions, we help girls manage menstruation with dignity.",
  },
  {
    title: "Economic Empowerment",
    description:
      "With access to mentorship, skills development, and creative opportunities, women can build confidence, independence, and sustainable futures.",
  },
];

export default function WhyATW() {
  return (
    <section className="why-atw">
      <Container>

        <div className="section-heading">
          <p className="section-label">
            WHY WE EXIST
          </p>

          <h2 className="section-title">
            When Women Thrive,
            <br />
            Communities Transform.
          </h2>

          <p className="section-intro">
            We believe empowerment starts by addressing the barriers that
            prevent women and girls from reaching their full potential.
            Through education, empowerment, and advocacy, we create pathways
            for lasting change.
          </p>
        </div>


        <div className="challenge-grid">

          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="challenge-card"
            >
              <h3>{challenge.title}</h3>

              <p>
                {challenge.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}