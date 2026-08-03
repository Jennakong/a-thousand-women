
import Image from "next/image";
import Container from "@/components/layout/Container";
import Link from "next/link";
import "../article.css";

export default function WhyWeStarted() {
  return (
    <main className="article-page">

      {/* HERO */}

      <section className="article-hero">

        <Container>

          <span className="section-label">
            OUR STORY
          </span>

          <h1>
            Why We Started:
            <br />
            A Thousand Women
          </h1>

          <p className="article-subtitle">
            How a simple conversation about girls, education and
            menstrual dignity became the beginning of a movement.
          </p>

          <div className="article-meta">

            <span>
              November 9, 2024
            </span>

            <span>
              By Jennifer Akong
            </span>

          </div>

          <Image
            src="/images/future-is-female.jpg"
            alt="Why We Started A Thousand Women"
            width={1200}
            height={700}
            className="article-cover"
            priority
          />

        </Container>

      </section>


      {/* ARTICLE */}

      <article className="article-content">

        <Container>

          <p>
            Every organisation has a beginning.
          </p>

          <p>
            Sometimes it begins with a carefully written strategy.
            Sometimes it begins with a vision that has been developing
            for years.
          </p>

          <p>
            For A Thousand Women, it began with a conversation.
          </p>

          <p>
            A conversation that forced us to look more closely at the
            realities facing girls in our communities and to ask a
            question that would eventually shape everything we do:
          </p>

          <blockquote>
            What happens when a girl has the potential to thrive,
            but does not have access to the basic resources she needs?
          </blockquote>


          <h2>
            The Conversation That Changed Everything
          </h2>

          <p>
            Our journey began with a simple but eye-opening discovery
            that shook us to the core.
          </p>

          <p>
            After deep reflection and important conversations within
            our team, we realised that too many young girls in Africa
            were struggling with resources that many of us might take
            for granted.
          </p>

          <p>
            One of the moments that brought this reality into sharp
            focus happened during a conversation with a principal at
            a local school in Nigeria.
          </p>

          <p>
            We learned that some girls were missing school because
            they could not afford basic sanitary products such as
            menstrual pads.
          </p>

          <p>
            For these girls, menstruation was not simply a normal
            biological experience.
          </p>

          <p>
            It could mean staying at home.
          </p>

          <p>
            Missing lessons.
          </p>

          <p>
            Falling behind academically.
          </p>

          <p>
            Feeling embarrassed or isolated.
          </p>

          <p>
            And experiencing a barrier to education that no child
            should have to face.
          </p>


          <h2>
            When a Period Becomes a Barrier to Education
          </h2>

          <p>
            The more we listened, the clearer it became that menstrual
            health could not be separated from education, dignity or
            opportunity.
          </p>

          <p>
            A girl cannot fully participate in school if she is
            regularly forced to stay home because she does not have
            access to menstrual products.
          </p>

          <p>
            And the issue is bigger than the product itself.
          </p>

          <p>
            Menstrual equity is connected to sanitation, education,
            health, poverty, confidence and the ability to participate
            fully in everyday life.
          </p>

          <p>
            This realisation changed the way we thought about
            empowerment.
          </p>

          <blockquote>
            Empowerment begins with access.
            <br />
            Access to education. Access to resources. Access to
            information. Access to dignity.
          </blockquote>


          <h2>
            A Movement Was Born
          </h2>

          <p>
            This became a turning point for us.
          </p>

          <p>
            We realised that the fight for women&apos;s empowerment
            starts with the basics: ensuring every girl has access to
            education, resources, dignity and the support she needs
            to reach her full potential.
          </p>

          <p>
            And so, A Thousand Women was born.
          </p>

          <p>
            From the beginning, our vision was never simply to
            distribute products or organise one-off interventions.
          </p>

          <p>
            We wanted to contribute to something much bigger:
            communities where women and girls are equipped with the
            knowledge, resources, confidence and opportunities to
            shape their own futures.
          </p>


          <h2>
            Why A Thousand Women?
          </h2>

          <p>
            The name A Thousand Women represents something bigger
            than a number.
          </p>

          <p>
            It represents the belief that meaningful change can begin
            with one person and grow through another.
          </p>

          <p>
            One girl supported today can become a woman who supports
            another girl tomorrow.
          </p>

          <p>
            One woman given an opportunity can create opportunities
            for others.
          </p>

          <p>
            One community choosing to invest in its girls can change
            what becomes possible for generations.
          </p>

          <p>
            We chose the name because we believe in the power of
            collective impact.
          </p>

          <p>
            We are not simply working towards reaching a thousand
            women.
          </p>

          <p>
            We are building a movement in which women empower women,
            communities invest in girls, and opportunities continue
            to multiply.
          </p>


          {/* REPORT FEATURE */}

          <div className="article-feature">

            <div className="article-feature-image">

              <Image
                src="/images/state-of-menstrual-equity-mockup.png"
                alt="The State of Menstrual Equity in Africa 2026 report"
                width={700}
                height={700}
              />

            </div>

            <div className="article-feature-content">

              <span className="section-label">
                OUR RESEARCH
              </span>

              <h3>
                Understanding the Bigger Picture
              </h3>

              <p>
                Our work with girls and communities continues to
                shape the questions we ask about menstrual health,
                education and opportunity across Africa.
              </p>

              <p>
                That is why we developed{" "}
                <strong>
                  The State of Menstrual Equity in Africa 2026
                </strong>
                , exploring the realities, barriers and opportunities
                surrounding menstrual health across the continent.
              </p>

              <Link
                href="/knowledge-hub/reports/menstrual-equity-report"
                className="article-cta-button"
              >
                Explore the Report →
              </Link>

            </div>

          </div>


          <h2>
            Our Work Has Grown
          </h2>

          <p>
            What began with a conversation has grown into a wider
            commitment to education, empowerment and advocacy.
          </p>

          <p>
            Our programmes have included menstrual health education,
            distribution of menstrual products, educational support,
            community outreach and conversations designed to help
            girls understand their worth and potential.
          </p>

          <p>
            Through our outreach work, we have supported more than
            <strong> 1,000 girls</strong> and distributed more than
            <strong> 5,000 menstrual products</strong>, alongside
            educational resources and opportunities for learning.
          </p>

          <p>
            Each number represents a person.
          </p>

          <p>
            A student who was able to attend class.
          </p>

          <p>
            A girl who received something she needed.
          </p>

          <p>
            A young woman who had a conversation that helped her
            understand something about herself.
          </p>

          <p>
            These moments are the reason the work matters.
          </p>


          <h2>
            Our Three Pillars
          </h2>

          <p>
            As A Thousand Women has evolved, our work has become
            centred around three connected pillars:
          </p>

          <ul>

            <li>
              <h3>Education</h3> <p>Creating access to knowledge,
              learning resources and opportunities that allow girls
              and women to grow.</p>
            </li>

            <li>
              <h3>Empowerment</h3> 
              <p>Helping women and girls
              build confidence, agency and the ability to make
              informed decisions about their lives.</p>
            </li>

            <li>
              <h3>Advocacy</h3> 
              <p>Speaking up about the systems, policies and social barriers that prevent
              women and girls from reaching their potential.</p>
            </li>

          </ul>

          <strong>
            These pillars are interconnected.
          </strong>

          <p>
            Education gives someone knowledge.
          </p>

          <p>
            Empowerment helps them use that knowledge.
          </p>

          <p>
            Advocacy works to make sure the systems around them
            allow them to thrive.
          </p>


          <h2>
            More Than Menstrual Products
          </h2>

          <p>
            Menstrual equity remains an important part of our work,
            but A Thousand Women has never been only about pads.
          </p>

          <p>
            The menstrual health conversation opened the door to
            something much larger.
          </p>

          <p>
            It made us think about what girls need to stay in school,
            what women need to participate fully in society, and what
            communities need to create sustainable opportunities.
          </p>

          <p>
            A menstrual product can solve an immediate problem.
          </p>

          <p>
            Education can change what someone knows.
          </p>

          <p>
            Mentorship can change what someone believes is possible.
          </p>

          <p>
            Opportunity can change the trajectory of a life.
          </p>

          <p>
            And advocacy can help change the systems that created
            the barriers in the first place.
          </p>


          <h2>
            What We Have Learned
          </h2>

          <p>
            Our work has taught us that meaningful change rarely
            happens through one intervention.
          </p>

          <p>
            It happens through consistency.
          </p>

          <p>
            It happens when organisations listen to communities
            instead of assuming they know what communities need.
          </p>

          <p>
            It happens when girls are treated not simply as
            beneficiaries, but as people with voices, ideas and
            aspirations of their own.
          </p>

          <p>
            And it happens when we understand that empowerment is
            not something we give someone.
          </p>

          <p>
            Our role is to help create the conditions in which
            people can access their own power.
          </p>


          <h2>
            Where We Are Going
          </h2>

          <p>
            We know there is still a long way to go.
          </p>

          <p>
            There are girls who are still missing school because
            they cannot afford menstrual products.
          </p>

          <p>
            There are young women who still lack access to education,
            mentorship and economic opportunities.
          </p>

          <p>
            There are communities where conversations about
            menstruation, women's rights and empowerment remain
            difficult to have.
          </p>

          <p>
            And there are systems that need to change.
          </p>

          <p>
            But we also know that change is possible.
          </p>

          <p>
            We have seen what happens when people come together
            around a shared purpose.
          </p>

          <p>
            We have seen girls ask questions, participate,
            laugh, learn and imagine futures beyond the limitations
            placed in front of them.
          </p>

          <p>
            And we believe those moments are worth building on.
          </p>


          <h2>
            How You Can Be Part of the Story
          </h2>

          <p>
            A Thousand Women was never meant to be a movement built
            by one person.
          </p>

          <p>
            It is something we build together.
          </p>

          <p>
            You can support our work by donating, volunteering,
            partnering with us, sharing our work or simply starting
            conversations about the issues affecting women and girls
            in your community.
          </p>

          <p>
            Every contribution matters because lasting change is
            rarely the result of one extraordinary act.
          </p>

          <p>
            It is the result of many people choosing to care.
          </p>
<blockquote>
            When women are empowered, generations are empowered.
          </blockquote>

          {/* CTA */}

          <div className="article-cta">

            <h3>
              Together, We Empower Generations
            </h3>

            <p>
              Donate, volunteer, partner with us, or help us share
              the story of A Thousand Women.
            </p>

            <Link href="/contact">
              Get Involved →
            </Link>

          </div>


          

        </Container>

      </article>

    </main>
  );
}

