import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";


export default function ValuesSection() {

  const values = [
    {
      title: "Dignity",
      text:
        "Every woman and girl deserves access to resources, support, and opportunities that allow her to live with confidence.",
      image: "/images/dignity.jpg"
    },

    {
      title: "Education",
      text:
        "We believe knowledge creates opportunities and empowers women and girls to shape their futures.",
      image: "/images/education.jpg"
    },

    {
      title: "Empowerment",
      text:
        "We support women and girls to overcome barriers, discover their potential, and become leaders in their communities.",
      image: "/images/empowerment.jpg"
    },

    {
      title: "Advocacy",
      text:
        "We champion awareness, equity, and solutions that address challenges affecting women and girls.",
      image: "/images/advocacy.jpg"
    }
  ];


  return (

    <section className="values-section">

      <Container>

        <Reveal>

          <span className="section-label">
            OUR VALUES
          </span>


          <h2 className="stand-for-title">
            What We Stand For
          </h2>


          <p className="values-intro">

            A Thousand Women exists to create a future where
            every woman and girl has access to dignity,
            opportunity, and the support needed to thrive.

          </p>


        </Reveal>



        <div className="values-grid">

          {values.map((value) => (

            <Reveal key={value.title}>

              <article className="value-card">

                <Image
                  src={value.image}
                  alt={value.title}
                  width={500}
                  height={400}
                  className="value-image"
                />


                <div className="value-content">

                  <h3>
                    {value.title}
                  </h3>


                  <p>
                    {value.text}
                  </p>

                </div>


              </article>

            </Reveal>

          ))}

        </div>


      </Container>

    </section>

  );
}