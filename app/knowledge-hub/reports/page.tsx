import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";


const reports = [

  {
    title:
      "A Thousand Women Impact Report 2025",

    date:
      "2025",

    image:
      "/images/report-cover.jpg",

    description:
      "An overview of our programmes, community impact and progress supporting women and girls across Africa.",

    link:
      "#",
  },


  {
    title:
      "End Period Poverty Report",

    date:
      "2025",

    image:
      "/images/period-report.jpg",

    description:
      "Exploring menstrual health challenges, education and the impact of improving access to menstrual products.",

    link:
      "#",
  },


  {
    title:
      "Women Empowerment Research Report",

    date:
      "Coming Soon",

    image:
      "/images/report-placeholder.jpg",

    description:
      "Research and insights exploring opportunities for women and girls through education and empowerment.",

    link:
      "#",
  },


];


export default function ReportsPage() {


return (

<main className="reports-page">


<Container>


<section className="reports-hero">


<span className="section-label">
REPORTS
</span>


<h1>
Research, Impact
and Insights
</h1>


<p>
Explore reports, findings and resources highlighting
our work and the realities affecting women and girls
across Africa.
</p>


</section>



<section className="reports-grid">


{reports.map((report)=>(


<article
key={report.title}
className="report-card"
>


<div className="report-thumbnail">


<Image

src={report.image}

alt={report.title}

fill

/>


</div>



<div className="report-card-content">


<p className="report-meta">
{report.date}
</p>


<h2>
{report.title}
</h2>


<p>
{report.description}
</p>


<Link href={report.link}>
View Report →
</Link>


</div>


</article>


))}


</section>


</Container>


</main>

);

}