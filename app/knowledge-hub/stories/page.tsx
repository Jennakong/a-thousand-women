import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const stories = [
  {
    title:
      "World Health Day Medical Outreach",

    date:
      "April 2025",

    category:
      "Health & Community",

    image:
      "/images/medical-outreach.png",

    description:
      "We visited Central Hospital, Ughelli, Delta State, bringing essential supplies, financial support and encouragement to mothers, babies and families while listening to the needs of the hospital community.",

    link:
      "/knowledge-hub/stories/world-health-day",
  },

 {
    title:
      "Christmas Food Donation",

    date:
      "December 2025",

    category:
      "Community Stories",

    image:
      "/images/food-donation.jpeg",

    description:
      "Supporting families with dignity, care and compassion.",

    link:
      "/knowledge-hub/stories/christmas-food-donation",
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
      "A celebration of the women, volunteers and community leaders who make our work possible, honouring their strength, contributions and the generations they continue to inspire.",

    link:
      "/knowledge-hub/stories/international-womens-day",
  },

 
];
export default function StoriesPage() {
  return (
    <main className="stories-page">
      <Container>

        <section className="stories-hero">
          <span className="section-label">
            STORIES
          </span>

          <h1>
            Voices, Journeys
            <br />
            and Impact
          </h1>

          <p>
            Discover stories from our community,
            celebrating the experiences, achievements
            and journeys of women and girls across Africa.
          </p>
        </section>

        <section className="stories-grid">

          {stories.map((story) => (
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