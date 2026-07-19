"use client";

import { motion } from "framer-motion";
import { impactStories } from "@/components/data/impactStories";


function MediaDisplay({
  story,
}: {
  story: typeof impactStories[number];
}) {

  if (story.type === "video") {

    return (
      <video
        src={story.media}
        autoPlay
        muted
        loop
        playsInline
      />
    );

  }


  return (
    <img
      src={story.media}
      alt={story.title}
    />
  );

}



export default function ImpactExplorer() {


const featured = impactStories[0];


return (

<section className="impact-stories">


{/* FEATURED STORY */}


<motion.div

className="impact-feature"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

>


<MediaDisplay story={featured}/>



<div className="impact-overlay">


<span>
FEATURED STORY
</span>


<h3>
{featured.title}
</h3>


<strong>
{featured.number}
</strong>


<p>
{featured.description}
</p>


</div>


</motion.div>




{/* STORY CARDS */}


<div className="impact-cards">


{impactStories.slice(1).map((story)=>(


<motion.div

key={story.title}

className="impact-story-card"

whileHover={{
y:-12
}}

>


<MediaDisplay story={story}/>



<div>


<h4>
{story.title}
</h4>


<strong>
{story.number}
</strong>


<p>
{story.label}
</p>


</div>


</motion.div>


))}


</div>


</section>

);

}