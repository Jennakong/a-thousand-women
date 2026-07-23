"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export default function FoodDonationPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="initiative-page">

      {/* HERO */}

      <section className="initiative-hero">

        <Container>

          <Reveal>

            <span className="section-label">
              OUR INITIATIVES
            </span>

            <h1 className="initiative-title">
              Food Donation Programme
            </h1>

            <h2 className="initiative-subtitle">
              Nourishing families. Restoring dignity.
            </h2>

            <p className="initiative-intro">

              Hunger should never stand between a family and hope.

              Through our
              <strong> Food Donation Programme</strong>,
              we provide emergency food support to vulnerable
              households, particularly widows and families
              experiencing food insecurity.

              Our mission is simple:
              no family should have to face hardship alone.

            </p>

          </Reveal>

        </Container>

      </section>



      {/* IMPACT */}

      <section className="initiative-impact">

        <Container>

          <div className="initiative-stats">

            <div>

              <strong>
                12 Days
              </strong>

              <p>
                Christmas Giving Campaign
              </p>

            </div>

            <div>

              <strong>
                Widows
              </strong>

              <p>
                Supported During Christmas
              </p>

            </div>

            <div>

              <strong>
                Community
              </strong>

              <p>
                Powered By Generous Donors
              </p>

            </div>

          </div>

        </Container>

      </section>



      {/* CAMPAIGN */}

      <section className="initiative-story">

        <Container>

          <div className="story-grid">

            <Reveal>

              <div>

                <h2>
                  12 Days of Giving
                </h2>

                <p>

                  During the Christmas season,
                  A Thousand Women launched the
                  <strong> 12 Days of Giving </strong>
                  campaign to provide food support
                  for widows experiencing food insecurity.

                </p>

                <p>

                  Thanks to the generosity of our
                  supporters, donors, and volunteers,
                  we were able to distribute food packs
                  that brought hope and relief during a
                  season that should be filled with joy.

                </p>

                <p>

                  Every donation represented more than
                  food.

                  It reminded every woman that her
                  community sees her, values her,
                  and stands beside her.

                </p>

              </div>

            </Reveal>

            <Reveal>

              <Image
                src="/images/food-donation.jpg"
                alt="Food Donation Programme"
                width={600}
                height={500}
                className="initiative-image"
              />

            </Reveal>

          </div>

        </Container>

      </section>



      {/* WHY */}

      <section className="future-section">

        <Container>

          <Reveal>

            <h2>
              Why Food Security Matters
            </h2>

            <p>

              Food insecurity affects millions of
              households across Africa and
              disproportionately impacts women,
              widows, and children.

            </p>

            <p>

              When families struggle to access
              nutritious meals, education,
              health, and livelihoods are
              also affected.

            </p>

            <p>

              Our goal is to ensure vulnerable
              households receive practical support
              while building partnerships that create
              long-term solutions.

            </p>

          </Reveal>

          <Reveal>

            <Image
              src="/images/food-community.jpg"
              alt="Community Food Support"
              width={600}
              height={500}
              className="initiative-image"
            />

          </Reveal>

        </Container>

      </section>



      {/* REPORT */}

      <section className="initiative-media">

        <Container>

          <h2>
            Understanding the Need
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >

            Poverty and food insecurity continue
            to affect millions of Nigerians.

            We encourage supporters to explore
            current research from trusted organisations
            to better understand the challenges facing
            vulnerable communities.

          </p>

          <div
            className="video-placeholder"
            style={{
              padding: "40px",
            }}
          >

            <a
              href="https://www.worldbank.org/en/country/nigeria/overview"
              target="_blank"
              rel="noopener noreferrer"
            >

              Read the World Bank Nigeria Poverty Overview →

            </a>

          </div>

        </Container>

      </section>



      {/* PARTNERS */}

      <section className="initiative-story">

        <Container>

          <div className="story-grid">
<Reveal>

  <div>

    <span className="section-label">
      PARTNER WITH US
    </span>

    <h2>
      Together We Can Feed More Families
    </h2>

    <p>

      Fighting food insecurity requires collaboration.
      We welcome organisations, businesses, community
      groups and individuals who want to create lasting
      impact.

    </p>

    <div className="partner-grid">

      <div className="partner-card">
        <span>🥫</span>
        <h3>Food Donations</h3>
        <p>
          Donate non-perishable food items to support
          vulnerable households.
        </p>
      </div>

      <div className="partner-card">
        <span>💚</span>
        <h3>Financial Support</h3>
        <p>
          Sponsor food packs or help fund future
          outreach programmes.
        </p>
      </div>

      <div className="partner-card">
        <span>🚚</span>
        <h3>Logistics</h3>
        <p>
          Help us transport, package and distribute
          food supplies efficiently.
        </p>
      </div>

      <div className="partner-card">
        <span>🤝</span>
        <h3>Corporate Partnerships</h3>
        <p>
          Work alongside us through CSR initiatives,
          employee volunteering or sponsorship.
        </p>
      </div>

    </div>

  </div>

</Reveal>
            <Reveal>

              <Image
                src="/images/partnership.jpg"
                alt="Community Partnership"
                width={600}
                height={500}
                className="initiative-image"
              />

            </Reveal>

          </div>

        </Container>

      </section>



      {/* CTA */}

      <section className="initiative-cta">

        <Container>

          <h2>

            Help Us Feed More Families

          </h2>

          <p>

            Together we can ensure that
            vulnerable women and families
            experience dignity, hope,
            and practical support.

          </p>

          <div className="cta-container">

            <div className="cta-buttons">

              <button
                onClick={() =>
                  setShowForm(!showForm)
                }
              >

                Become A Partner

              </button>

              <button>

                Support This Initiative

              </button>

            </div>

            {showForm && (

              <div className="cta-form-wrapper">

                <ContactForm />

              </div>

            )}

          </div>

        </Container>

      </section>

    </main>
  );
}