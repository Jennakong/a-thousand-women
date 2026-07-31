import Link from "next/link";
export default function KnowledgeHub() {

  const resources = [
    {
      type: "REPORT",
      title: "State of Menstrual Equity in Africa",
      text: "Exploring the challenges affecting access to menstrual health, dignity, and opportunities for women and girls.",
      link: "/knowledge-hub/reports"
    },

    {
      type: "ARTICLE",
      title: "Why Period Poverty Affects Education",
      text: "Understanding how limited access to menstrual products can impact learning, confidence, and participation.",
       link: "/knowledge-hub/articles",
       },

    {
      type: "STORIES",
      title: "World Health Day Outreach",
      text: "A closer look at our community health outreach and the people whose lives were touched.",
        link: "/knowledge-hub/stories",
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
          Inspires Change
        </h2>


        <p>
          Research, stories, and insights exploring
          the challenges, voices, and solutions
          shaping the future of women and girls.
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
  Read More →
</Link>


          </article>

        ))}

      </div>


    </section>

  );
}