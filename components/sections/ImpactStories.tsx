"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
type ImpactStory = {
  title: string;
  number: string;
  label: string;
  text: string;
  image?: string;
  images?: string[];
};
const stories: ImpactStory[] = [
 {
  title: "Education",
  number: "1,000+",
  label: "Girls supported",
  text: "Creating opportunities for girls to learn, grow, and lead.",
  images: [
    "/images/girls-education.jpeg",
    "/images/girls-education-2.png",
    "/images/outreach.jpeg",

  ],
},

  {
    title: "Menstrual Equity",
    number: "5,000+",
    label: "Products distributed",
    text: "Ensuring periods never stand between girls and education.",
    image: "/images/menstrual-equity.jpeg",
  },

  {
    title: "Community Health",
    number: "700+",
    label: "People reached",
    text: "Bringing essential healthcare closer to communities.",
    image: "/images/medical-outreach.jpeg",
  },

{
  title: "Food Security",
  number: "250+",
  label: "Families supported",
  text: "Providing dignity and support during difficult times.",
  images: [
    "/images/food-donation.jpeg",
    "/images/food-donation-1.jpeg",
    "/images/food-donation-2.jpeg",
  ],
},
];


export default function ImpactStories() {

  const [active, setActive] = useState(0);

  const [imageIndex, setImageIndex] = useState(0);

  const story = stories[active];


  useEffect(() => {

    setImageIndex(0);


    if (!story.images) return;


    const timer = setInterval(() => {

      setImageIndex((prev) =>
        (prev + 1) % story.images!.length
      );

    }, 2000);


    return () => clearInterval(timer);


  }, [story]);


  return (

    <section className="impact-stories">


      <div className="impact-heading">

        <span>
          OUR IMPACT
        </span>

        <h2>
          Every Number Has A Face
        </h2>

        <p>
          Behind every statistic is someone
          whose life changed.
        </p>

      </div>



      <div className="impact-media">


       <Image

key={story.images?.[imageIndex] || story.image}

src={
  story.images
    ? story.images[imageIndex]
    : story.image || "/images/girls-education.png"
}

  alt={story.title}

  fill

  className="impact-image"

/>
const [imageIndex, setImageIndex] = useState(0);


        <div className="impact-overlay">


          <h3>
            {story.title}
          </h3>


          <strong>
            {story.number}
          </strong>


          <p>
            {story.label}
          </p>


          <span>
            {story.text}
          </span>


        </div>


      </div>



      <div className="impact-tabs">


        {stories.map((item,index)=>(

          <button

            key={item.title}

            onMouseEnter={() =>
              setActive(index)
            }

            className={
              active === index
              ? "active"
              : ""
            }

          >

            {item.title}

          </button>

        ))}


      </div>


    </section>

  );
}