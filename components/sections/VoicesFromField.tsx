"use client";

import { useState } from "react";

const stories = [
{
  title: "School Outreach",
  youtube: "https://www.youtube.com/embed/tWd4kZ2pR0o",
  thumbnail: "/images/videos/school-outreach.jpg",
  location: "Evwreni, Delta State",
  programme: "Education Support",
  quote:
    "Your support has empowered us and exposed us to new opportunities. The gifts and knowledge we received today will help us become more prepared for our future.",
  person: "Student Testimonial",
},


  {
    title: "Food Donation",
youtube: "https://www.youtube.com/embed/hajGDOcZo60",
    location: "Delta State",
    programme: "Community Support",
    quote: "",
    person: "",
  },

  {
    title: "Menstrual Health Talk",
     youtube: "https://www.youtube.com/embed/tWd4kZ2pR0o",
    location: "Cross River State",
    programme: "Menstrual Health Education",
    quote: "",
    person: "",
  },

  
];


export default function VoicesFromField() {

  const [activeStory, setActiveStory] = useState(0);

  const story = stories[activeStory];


  return (

    <section className="voices-section">


      <div className="section-heading">

    
        <h2 className="section-title">
  Real Stories. Real Change.
        </h2>


        <p className="section-intro">
          Behind every number is a person,
          a community, and a story.
        </p>

      </div>



      <div className="voices-feature">


 <iframe
  className="voices-video"
  src={story.youtube}
  title={story.title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>



        <div className="voices-content">


          <h3>
            {story.title}
          </h3>


          <strong>
            {story.programme}
          </strong>


          <p className="voice-location">
            📍 {story.location}
          </p>



          {story.quote && (

            <div className="impact-quote">

              <span className="quote-mark">
                “
              </span>


              <blockquote>
                {story.quote}
              </blockquote>


              <p className="quote-person">
                — {story.person}
              </p>

            </div>

          )}


        </div>


      </div>





      <div className="voices-grid">


        {stories.map((item, index) => (

          <div

            key={item.title}

            className={
              activeStory === index
              ? "voice-card active"
              : "voice-card"
            }

            onClick={() => setActiveStory(index)}

          >


           <iframe
  className="voice-thumbnail"
  src={item.youtube}
  title={item.title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>



            <div className="voice-card-overlay">


              <span>
                ▶
              </span>


              <h4>
                {item.title}
              </h4>


              <p>
                {item.location}
              </p>


            </div>


          </div>


        ))}


      </div>


    </section>

  );
}