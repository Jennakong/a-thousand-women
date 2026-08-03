import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import "../stories.css";

export default function ChristmasFoodDonationPage() {
  return (
    <main className="stories-page">

      {/* HERO */}

      <section className="stories-hero">

        <Container>

          <span className="section-label">
            STORIES & IMPACT
          </span>

          <h1>
            Christmas Food
            Donation
          </h1>

          <p className="stories-subtitle">
            Supporting families with dignity, care and compassion
            during the Christmas season.
          </p>

          <div className="stories-meta">
            <span>December 2025</span>
            <span>A Thousand Women</span>
          </div>

          <div className="stories-hero-image">
            <Image
              src="/images/christmas-food-donation.png"
              alt="A Thousand Women Christmas Food Donation"
              width={1200}
              height={750}
              priority
            />
          </div>

        </Container>

      </section>


      {/* STORIES */}

      <article className="stories-content">

        <Container>

          <p className="stories-lead">
            Christmas is a season of giving, celebration and togetherness.
            But for many families, the reality of the season can look very
            different.
          </p>

          <p>
            In December 2025, A Thousand Women came together to make sure
            that some families in our communities could experience a little
            more joy during the Christmas season.
          </p>

          <p>
            This time, our outreach focused particularly on widows and
            families who were facing financial hardship during the festive
            period.
          </p>


          <h2>
            12 Days of Giving
          </h2>

          <p>
            The idea began with a simple question: while many of us were
            preparing to celebrate Christmas, how could we also remember
            those who might not have enough to put food on their tables?
          </p>

          <p>
            Inspired by the twelve days of Christmas, we launched our own
            <strong> 12 Days of Giving</strong>.
          </p>

          <p>
            For twelve days, we shared the message, encouraged people to
            give and raised funds to support families who needed a little
            extra help during the season.
          </p>

          <p>
            Every contribution helped us move closer to our goal of putting
            food on the tables of families who otherwise might have had a
            very different Christmas.
          </p>



{/* VIDEO */}

<div className="stories-media">

  <div className="stories-video">
    <iframe
      src="https://www.youtube.com/embed/hajGDOcZo60"
      title="A Thousand Women Christmas Food Donation"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

</div>




          <h2>
            Two Communities. 1,000 Bags of Rice.
          </h2>

          <p>
            A day before Christmas, we travelled to two communities with
            one goal: to make sure families had something to cook and share
            with their loved ones the following day.
          </p>

          <p>
            We distributed <strong>500 bags of rice in each community</strong>,
            reaching a total of <strong>1,000 bags of rice</strong>.
          </p>

          <p>
            We also provided cash support to some of the beneficiaries,
            giving families additional help to meet their needs during
            the Christmas period.
          </p>


          {/* STAT */}

          <div className="stories-highlight">

            <span className="stories-highlight-number">
              1,000
            </span>

            <span className="stories-highlight-text">
              bags of rice distributed across two communities
            </span>

          </div>


          {/* PHOTO GRID */}

          <div className="stories-gallery">

            <div className="stories-gallery-large">
              <Image
                src="/images/christmas-giving-2.jpg"
                alt="Christmas food donation in the community"
                width={900}
                height={1100}
              />
            </div>

            <div className="stories-gallery-small">
              <Image
                src="/images/christmas-giving-3.jpg"
                alt="A Thousand Women Christmas outreach"
                width={700}
                height={700}
              />

              <Image
                src="/images/christmas-giving-4.jpg"
                alt="Families receiving Christmas food support"
                width={700}
                height={700}
              />
            </div>

          </div>


          <h2>
            Why Widows?
          </h2>

          <p>
            As we thought about who might need support most during the
            Christmas season, we were particularly drawn to widows within
            the communities we visited.
          </p>

          <p>
            Christmas can bring families together, but it can also make
            financial difficulties feel even more visible. For women
            carrying the responsibility of caring for their families,
            the pressure can be especially difficult.
          </p>

          <p>
            We wanted our support to go beyond simply giving food.
            We wanted the women we met to know that they were seen,
            remembered and valued.
          </p>


          {/* IMAGE */}

          <div className="stories-media">
            <Image
              src="/images/christmas-giving-5.jpg"
              alt="Widows receiving Christmas support"
              width={1200}
              height={800}
            />
          </div>


          <h2>
            More Than a Bag of Rice
          </h2>

          <p>
            It would be easy to measure the outreach only by the number
            of bags of rice distributed or the amount of money raised.
          </p>

          <p>
            But for us, the real impact was in the moments we shared with
            the women and families we met.
          </p>

          <p>
            It was in knowing that someone would have food to prepare
            for Christmas morning.
          </p>

          <p>
            It was in the smiles, conversations and gratitude we witnessed.
          </p>

          <p>
            And it was in the reminder that even a small act of generosity
            can make someone's difficult season feel a little lighter.
          </p>


          <blockquote>
            While we celebrate, we can also remember the people who may
            not have the same opportunity to celebrate.
          </blockquote>


          <h2>
            Giving With Dignity
          </h2>

          <p>
            At A Thousand Women, we believe that support should never
            take away someone's dignity.
          </p>

          <p>
            Community giving is not about creating a sense of
            "us and them". It is about recognising that circumstances
            can be different for everyone, and that communities become
            stronger when people look out for one another.
          </p>

          <p>
            This Christmas outreach was our small contribution towards
            making sure that more families could experience the season
            with food on their tables and hope in their hearts.
          </p>


          {/* MORE PHOTOS */}

          <div className="stories-gallery stories-gallery-three">

            <Image
              src="/images/food-donation.jpeg"
              alt="A Thousand Women Christmas food donation"
              width={700}
              height={700}
            />

            <Image
              src="/images/food-donation.jpg"
              alt="Community Christmas outreach"
              width={700}
              height={700}
            />

            <Image
              src="/images/food-donation-1.jpg"
              alt="A Thousand Women giving back"
              width={700}
              height={700}
            />

          </div>


          <h2>
            A Christmas Worth Remembering
          </h2>

          <p>
            We are grateful to everyone who contributed to the 12 Days of
            Giving and helped make this outreach possible.
          </p>

          <p>
            Because of every donation, every share and every person who
            chose to give, we were able to reach two communities and
            provide practical support to families just in time for
            Christmas.
          </p>

          <p>
            Most importantly, we were able to put smiles on faces and
            remind women and families that their communities care about
            them.
          </p>

          <p>
            That is what giving means to us.
          </p>


          {/* FINAL CTA */}

          <div className="stories-cta">

            <h3>
              Help Us Create More Moments Like This
            </h3>

            <p>
              Your support helps A Thousand Women reach more communities,
              provide practical resources and create opportunities for
              women and girls across Africa.
            </p>

            <Link
              href="/contact"
              className="stories-cta-button"
            >
              Get Involved →
            </Link>

          </div>

        </Container>

      </article>

    </main>
  );
}

