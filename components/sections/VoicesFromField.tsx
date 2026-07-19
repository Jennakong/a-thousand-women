"use client";

import { useState } from "react";

const stories = [
  {
    title: "School Outreach",
    video: "/videos/school-outreach-small.mp4",
    location: "Evwreni, Delta State",
    programme: "Education Support",
    quote:
      "Your support has empowered us and exposed us to new opportunities. The gifts and knowledge we received today will help us become more prepared for our future.",
    person: "Student Testimonial",
  },

  {
    title: "Medical Outreach",
    video: "/videos/medical-outreach-small.mp4",
    location: "Delta State",
    programme: "World Health Day Medical Outreach",
    quote: "",
    person: "",
  },

  {
    title: "Food Donation",
    video: "/videos/food-donation-small.mp4",
    location: "Delta State",
    programme: "Community Support",
    quote: "",
    person: "",
  },

  {
    title: "Menstrual Health Talk",
    video: "/videos/menstrual-talk-small.mp4",
    location: "Cross River State",
    programme: "Menstrual Health Education",
    quote: "",
    person: "",
  },

  {
    title: "Education Session",
    video: "/videos/education-session-small.mp4",
    location: "Cross River State",
    programme: "International Day of Education",
    quote: "",
    person: "",
  },

  {
    title: "Gratitude Message",
    video: "/videos/gratitude-message-small.mp4",
    location: "Evwreni, Delta State",
    programme: "Student Testimonial",
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

        <span className="section-label">
          STORIES OF IMPACT
        </span>


        <h2 className="section-title">
  Real Stories. Real Change.
        </h2>


        <p className="section-intro">
          Behind every number is a person,
          a community, and a story.
        </p>

      </div>



      <div className="voices-feature">


        <video
  autoPlay
  muted
  loop
  playsInline
  controls
  className="voices-video"
>

          <source
            src={story.video}
            type="video/mp4"
          />

        </video>



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


            <video
              muted
              preload="none"
              className="voice-thumbnail"
            >

              <source
                src={item.video}
                type="video/mp4"
              />

            </video>



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