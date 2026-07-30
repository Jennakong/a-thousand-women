import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";


const articles = [
  {
    title:
      "Empowering the Next Generation: A Thousand Women Celebrates International Day of Education",

    date:
      "January 17, 2025",

    author:
      "Jennifer A.",

    image:
      "/images/blog-banner.png",

    description:
      "A day of learning, menstrual health education, empowerment talks and educational support as we celebrate the next generation.",

    link:
      "/knowledge-hub/articles/empowering-next-generation",
  },


  {
    title:
      "Why We Started",

    date:
      "November 10, 2024",

    author:
      "Jennifer A.",

    image:
      "/images/atw-children.jpg",

    description:
      "After a deep reflection and an important conversation within our team, we realized that too many young girls in Africa are struggling with the bare minimum to thrive.",

    link:
      "#",
  },


  {
    title:
      "Building Communities Through Education",

    date:
      "Coming Soon",

    author:
      "A Thousand Women",

    image:
      "/images/girls-education.jpeg",

    description:
      "Exploring how access to education creates opportunities for women and girls.",

    link:
      "#",
  },

];



export default function ArticlesPage() {


return (

<main className="articles-page">


<Container>



<section className="articles-hero">


<span className="section-label">
ARTICLES
</span>


<h1>
Insights, Reflections
and Conversations
</h1>


<p>
Stories, ideas and lessons from
A Thousand Women’s work with
women and girls across Africa.
</p>


</section>





<section className="articles-grid">


{articles.map((article)=>(
  

<article
key={article.title}
className="article-card"
>


<div className="article-thumbnail">


<Image

src={article.image}

alt={article.title}

fill

/>

</div>



<div className="article-card-content">

  <p className="article-card-meta">
    {article.date} · {article.author}
  </p>

  <h2>
    {article.title}
  </h2>

  <p>
    {article.description}
  </p>

  <Link href={article.link}>
    Read Article →
  </Link>

</div>


</article>


))}



</section>



</Container>


</main>

);

}