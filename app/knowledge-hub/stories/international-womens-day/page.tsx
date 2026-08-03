import Image from "next/image";
import Container from "@/components/layout/Container";
import Link from "next/link";
import "../stories.css";

export default function InternationalWomensDayPage() {
  return (
    <main className="stories-page">

      {/* HERO */}

      <section className="stories-hero">

        <Container>

          <span className="section-label">
            STORIES & IMPACT
          </span>

          <h1>
            The Girls of Today
            Becoming the Women
            of Tomorrow
          </h1>

          <p className="stories-subtitle">
            Celebrating the women, volunteers and community leaders
            who make the work of A Thousand Women possible.
          </p>

          <div className="stories-meta">

            <span>
              March 8, 2025
            </span>

            <span>
              Women&apos;s Empowerment
            </span>

          </div>

          <Image
            src="/images/women-day.jpg"
            alt="A Thousand Women International Women's Day celebration"
            width={1200}
            height={700}
            className="stories-cover"
          />

        </Container>

      </section>


      {/* STORY CONTENT */}

      <article className="stories-content">

        <Container>

          <p>
            International Women&apos;s Day gave us an opportunity to
            pause and celebrate the women who continue to make a
            difference in the lives of others.
          </p>

          <p>
            At A Thousand Women, we know that meaningful change is
            never created by one person alone. It is built by women
            who show up, volunteers who give their time, community
            leaders who open doors and people who believe that
            something better is possible.
          </p>


          <h2>
            The Women Who Make It Happen
          </h2>

          <p>
            Behind every outreach, every programme and every girl
            reached is a community of people who make the work
            possible.
          </p>

          <p>
            From our founder and dedicated volunteers to community
            leaders and partners, we are grateful for every woman
            who contributes her time, knowledge, resources and
            encouragement to the movement.
          </p>

          <p>
            Some lead from the front. Others work quietly behind
            the scenes. Some give their skills, while others give
            their time. Every contribution matters.
          </p>


          {/* IMAGE */}

          <div className="stories-media">

            <Image
              src="/images/women-day-2.jpg"
              alt="Women and volunteers celebrating International Women's Day"
              width={1200}
              height={800}
            />

          </div>


          <h2>
            Celebrating Women and Girls
          </h2>

          <p>
            International Women&apos;s Day is also a reminder of why
            our work exists in the first place.
          </p>

          <p>
            Every girl deserves the opportunity to grow into a woman
            who knows her worth, understands her possibilities and
            has the support to pursue them.
          </p>

          <p>
            We celebrate the women who have paved the way before us,
            the women creating change today and the girls who will
            become the women shaping tomorrow.
          </p>


          <h2>
            From One Generation to Another
          </h2>

          <p>
            There is something powerful about women creating
            opportunities for other women.
          </p>

          <p>
            A woman who shares her knowledge can change another
            woman&apos;s direction. A mentor can give a young girl
            confidence. A community leader can create space for
            someone else to be heard.
          </p>

          <p>
            This is the kind of intergenerational impact we believe
            in.
          </p>

          <blockquote>
            Empowered women empower generations.
          </blockquote>


          <h2>
            To the Girls Becoming Women
          </h2>

          <p>
            To every girl who is still discovering who she is,
            remember that your story is still being written.
          </p>

          <p>
            You are allowed to dream beyond your circumstances.
            You are allowed to learn, to lead, to create and to
            become more than what anyone expected of you.
          </p>

          <p>
            And when you become the woman you are growing towards,
            we hope you remember to reach back and make the journey
            a little easier for the girl coming after you.
          </p>


          {/* IMAGE */}

          <div className="stories-media">

            <Image
              src="/images/women-day-3.jpg"
              alt="A Thousand Women community celebrating women and girls"
              width={1200}
              height={800}
            />

          </div>


          <h2>
            The Work Continues
          </h2>

          <p>
            Celebrating women is important. Creating opportunities
            for them is even more important.
          </p>

          <p>
            Our work continues through education, empowerment,
            menstrual equity, creative opportunities and community
            outreach designed to help women and girls build better
            futures.
          </p>

          <p>
            We are grateful to every woman who has been part of the
            journey so far, and to every woman who will become part
            of what comes next.
          </p>


          {/* CTA */}

          <div className="stories-cta">

            <h3>
              Become Part of the Movement
            </h3>

            <p>
              There are many ways to support women and girls through
              A Thousand Women. Volunteer, partner with us, support
              our programmes or simply help us share the message.
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