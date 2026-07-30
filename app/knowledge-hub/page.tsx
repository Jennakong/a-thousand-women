import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";


const articles = [
  {
    title: "Empowering the Next Generation: International Day of Education",
    date: "January 17, 2025",
    author: "Jennifer A.",
    image: "/images/blog-banner.png",
    description:
      "Celebrating education, empowerment and menstrual health awareness through our school outreach programme.",
    link:
      "/knowledge-hub/articles/empowering-next-generation",
  },

  {
    title: "Why We Started",
    date: "November 10, 2024",
    author: "Jennifer A.",
    image: "/images/newsletter.jpeg",
    description:
      "Exploring how menstrual health access impacts confidence, learning and opportunities.",
    link:
      "/knowledge-hub/articles",
  },

  {
    title: "Creating Opportunities For Girls To Thrive",
    date: "Coming Soon",
    author: "A Thousand Women",
    image: "/images/girls-education.jpeg",
    description:
      "Stories and reflections from our education initiatives.",
    link:
      "/knowledge-hub/articles",
  },
];


const reports = [
  {
    title: "State of Menstrual Equity in Africa",
    date: "Coming Soon",
    author: "A Thousand Women",
    image: "/images/menstrual-report.png",
    description:
      "Research exploring menstrual health challenges and solutions affecting women and girls.",
    link:
      "/knowledge-hub/reports",
  },

];


const stories = [
  {
    title: "World Health Day Medical Outreach",
    date: "April 2025",
    author: "A Thousand Women",
    image: "/images/medical-outreach.jpeg",
    description:
      "Bringing essential healthcare support closer to communities.",
    link:
      "/knowledge-hub/stories",
  },

  {
    title: "Christmas Food Donation",
    date: "December 2025",
    author: "A Thousand Women",
    image: "/images/food-donation.jpeg",
    description:
      "Supporting families with dignity, care and compassion.",
    link:
      "/knowledge-hub/stories",
  },

 
];



function ResourceCard({
  title,
  date,
  author,
  image,
  description,
  link,
}: any) {

  return (

    <article className="knowledge-card">


      <div className="knowledge-card-image">

        <Image

          src={image}

          alt={title}

          fill

        />

      </div>



      <div className="knowledge-card-content">


        <p className="knowledge-meta">
          {date} · {author}
        </p>



        <h3>
          {title}
        </h3>



        <p>
          {description}
        </p>



        <Link href={link}>
          Read More →
        </Link>


      </div>


    </article>

  );

}





function CategorySection({
  title,
  description,
  items,
  button,
  link,
}: any) {


return (

<section className="knowledge-category">


<div className="knowledge-category-heading">


<h2>
{title}
</h2>


<p>
{description}
</p>


</div>



<div className="knowledge-grid">


{items.map((item:any)=>(

<ResourceCard
key={item.title}
{...item}
/>

))}


</div>



<Link
href={link}
className="knowledge-view-button"
>

{button}

</Link>



</section>

);

}





export default function KnowledgeHub(){


return (

<main className="knowledge-hub-page">

<div className="knowledge-decoration decoration-circle-gold"></div>

<div className="knowledge-decoration decoration-circle-green"></div>

<div className="knowledge-decoration decoration-book">
  📚
</div>

<div className="knowledge-decoration decoration-lightbulb">
  💡
</div>
<Container>



<section className="knowledge-hero">


<span className="section-label">
KNOWLEDGE HUB
</span>



<h1>
Stories, Research And Insights
That Inspire Change
</h1>



<p>
Explore articles, reports and stories
from A Thousand Women.
</p>


</section>





<CategorySection

title="Articles"

description="Insights, reflections and conversations from A Thousand Women."

items={articles}

button="Explore All Articles →"

link="/knowledge-hub/articles"

/>





<CategorySection

title="Reports"

description="Research and publications documenting the realities behind our work."

items={reports}

button="Explore All Reports →"

link="/knowledge-hub/reports"

/>





<CategorySection

title="Stories"

description="Real voices and moments from the communities we serve."

items={stories}

button="Explore All Stories →"

link="/knowledge-hub/stories"

/>










</Container>


</main>

);

}