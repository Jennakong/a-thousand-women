
import Link from "next/link";

export default function KnowledgeHub() {
  const resources = [
    {
      type: "REPORTS",
      title: "Research & Reports",
      text: "Explore research, data and evidence examining the issues affecting women and girls across Africa, from menstrual equity to education, health and opportunity.",
      link: "/knowledge-hub/reports",
      action: "Explore Reports →",
    },

    {
      type: "ARTICLES",
      title: "Ideas & Insights",
      text: "Read thoughtful articles exploring women's empowerment, education, menstrual health, gender equity and the social issues shaping the lives of women and girls.",
      link: "/knowledge-hub/articles",
      action: "Explore Articles →",
    },

    {
      type: "STORIES",
      title: "Stories & Impact",
      text: "Go behind the scenes of A Thousand Women's work and discover the people, communities and moments that continue to shape our mission.",
      link: "/knowledge-hub/stories",
      action: "Explore Stories →",
    },
  ];

  return (
    <section className="knowledge-section">

      <div className="knowledge-heading">

        <span className="section-label">
          KNOWLEDGE HUB
        </span>

        <h2>
          Knowledge That
          <br />
          Inspires Change
        </h2>

        <p>
          Research, ideas and stories exploring the
          realities, challenges and possibilities shaping
          the future of women and girls.
        </p>

      </div>

      <div className="knowledge-grid">

        {resources.map((item) => (

          <article
            key={item.title}
            className="knowledge-card"
          >

            <span className="knowledge-type">
              {item.type}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

            <Link href={item.link}>
              {item.action}
            </Link>

          </article>

        ))}

      </div>

      <div className="knowledge-footer">

        <Link
          href="/knowledge-hub"
          className="knowledge-main-button"
        >
          Explore Knowledge Hub →
        </Link>

      </div>

    </section>
  );
}
