import Image from "next/image";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";

export default function EmpoweringNextGenerationPage() {

  return (

    <main className="article-page">


      {/* HERO */}

      <section className="article-hero">

        <Container>

          <span className="section-label">
            ARTICLE
          </span>


          <h1>
            Empowering the Next Generation
          </h1>


          <p className="article-subtitle">
            Celebrating International Day of Education Through
            Education, Menstrual Equity and Hope
          </p>


          <div className="article-meta">

            <span>
              January 17, 2025
            </span>


            <span>
              By Jennifer Akong
            </span>

          </div>



          <Image
            src="/images/blog-banner.png"
            alt="A Thousand Women International Day of Education outreach"
            width={1200}
            height={700}
            className="article-cover"
          />


        </Container>

      </section>





      {/* ARTICLE CONTENT */}


      <article className="article-content">

        <Container>


          <p>

            At A Thousand Women, we believe that education is not
            just a tool; it is a foundation.

            On International Day of Education, we had the honour
            of bringing that belief to life by stepping into
            classrooms filled with potential, promise and bright
            young minds.

          </p>



          <h2>
            A Moment of Purpose and Impact
          </h2>



          <p>

            There is something powerful about walking into a hall
            filled with eager young minds.

            Surrounded by passionate volunteers and a shared vision
            for impact, we hosted a programme celebrating the power
            of education and the importance of empowering the next
            generation.

          </p>



          <h2>
            Over 250 Educational Supplies Distributed
          </h2>



          <p>

            This was more than just a visit.

            We distributed over 250 educational supply packs,
            each one filled with tools to support learning and
            development.

          </p>


          <p>

            Each gift represented more than materials. It was a
            reminder that every child deserves the resources and
            opportunities needed to succeed.

          </p>





          <h2>
            Tackling Period Poverty With Dignity
          </h2>



          <p>

            As part of our commitment to gender equity, we held a
            practical session on menstrual hygiene.

            Students received important knowledge about menstrual
            health alongside sanitary products to support girls
            and help keep them in school.

          </p>


          <p>

            Education is not only about books and pencils.
            It is also about creating environments where girls
            can thrive with dignity.

          </p>





          <h2>
            Conversations That Matter
          </h2>



          <p>

            Education must be holistic.

            Alongside academic support, we created a safe space
            for conversations around confidence, empowerment,
            personal development and the importance of believing
            in one's future.

          </p>



          <blockquote>

            "The Future is Female. Your voice matters,
            your dreams are valid, and your future is bright."

          </blockquote>





          <h2>
            A Million Smiles, 250 Lives Impacted
          </h2>



          <p>

            From hygiene lessons to motivational talks,
            from books to boldness, we witnessed transformation
            happen in real time.

          </p>


          <p>

            It was not only about what we gave, but what we
            received: inspiration, purpose and an unshakable
            belief in the next generation.

          </p>





          <h2>
            What’s Next?
          </h2>



          <p>

            We are building a movement where no child is left
            behind, no girl is left out and no potential is
            left untapped.

          </p>


          <p>

            When we say "Empowered Women Empower Generations,"
            it is not just a slogan. It is our story.

          </p>


        </Container>

      </article>





      {/* PARTNERSHIP CTA */}


      <section className="article-contact">

        <Container>


          <h2>
            Help Us Create More Impact
          </h2>


          <p>

            Partner with A Thousand Women to support education,
            menstrual equity and opportunities for women and girls.

          </p>



          <ContactForm

            title="Partner With A Thousand Women"

            description="Tell us how you would like to support our work or collaborate with us."

            buttonText="Send Partnership Enquiry"

          />


        </Container>


      </section>



    </main>

  );

}