import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";


const stories = [

  {
    title:
      "Inspiring Girls to Dream Bigger Through Science",

    date:
      "February 11, 2025",

    category:
      "Education & STEM",

    image:
      "/images/science-girls.jpg",

    description:
      "On International Day of Women and Girls in Science, we celebrated curiosity, education and representation by inspiring girls to believe they belong in STEM.",

    link:
      "#",
  },


  {
    title:
      "The Girls of Today Becoming the Women of Tomorrow",

    date:
      "March 8, 2025",

    category:
      "Women’s Empowerment",

    image:
      "/images/women-day.jpg",

    description:
      "A celebration honouring the voices, strength and impact of women and girls while exploring the power of intergenerational empowerment.",

    link:
      "#",
  },


  {
    title:
      "Imagine Life as a Young Girl in Rural Africa",

    date:
      "Coming Soon",

    category:
      "Community Stories",

    image:
      "/images/rural-girls.jpg",

    description:
      "A closer look at the dreams, challenges and possibilities of girls growing up in rural communities across Africa.",

    link:
      "#",
  },


  {
    title:
      "Educating Girls, Empowering Futures",

    date:
      "January 2025",

    category:
      "Education",

    image:
      "/images/girls-education.jpeg",

    description:
      "Through educational support, mentorship and empowerment sessions, we continue sharing stories of girls gaining confidence and opportunities to thrive.",

    link:
      "#",
  },


  {
    title:
      "Building Dreams Through Creativity",

    date:
      "Coming Soon",

    category:
      "Creative Entrepreneurship",

    image:
      "/images/creative-entrepreneurship.jpg",

    description:
      "Stories of emerging creatives and entrepreneurs building skills, confidence and sustainable futures through mentorship and support.",

    link:
      "#",
  },

];


export default function StoriesPage(){


return (

<main className="stories-page">


<Container>


<section className="stories-hero">


<span className="section-label">
STORIES
</span>


<h1>
Voices, Journeys
and Impact
</h1>


<p>
Discover stories from our community,
celebrating the experiences, achievements
and journeys of women and girls across Africa.
</p>


</section>



<section className="stories-grid">


{stories.map((story)=>(


<article
key={story.title}
className="story-card"
>


<div className="story-thumbnail">


<Image

src={story.image}

alt={story.title}

fill

/>


</div>



<div className="story-card-content">


<p className="story-meta">

{story.date} · {story.category}

</p>


<h2>
{story.title}
</h2>


<p>
{story.description}
</p>


<Link href={story.link}>
Read Story →
</Link>


</div>


</article>


))}


</section>


</Container>


</main>

);

}