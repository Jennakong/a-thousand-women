export default function JoinMovement() {

  const actions = [
    {
      title: "Donate",
      icon: "💚",
      text: "Help provide menstrual products, education, and support for women and girls."
    },

    {
      title: "Volunteer",
      icon: "🌱",
      text: "Share your skills, time, and passion to help us create meaningful change."
    },

    {
      title: "Partner",
      icon: "🤝",
      text: "Collaborate with us to expand our programmes and reach more communities."
    },

    {
      title: "Advocate",
      icon: "📢",
      text: "Use your voice to raise awareness and support our mission."
    }
  ];


  return (

    <section className="movement-section">


      <div className="movement-heading">

        <span className="section-label">
          JOIN THE MOVEMENT
        </span>


        <h2>
          Together, we can create
          a future where every
          woman and girl can thrive.
        </h2>


        <p>
          Supporting A Thousand Women means
          creating access to dignity, education,
          health, and opportunity.
        </p>

      </div>



      <div className="movement-grid">


        {actions.map((action) => (

          <article
            key={action.title}
            className="movement-card"
          >

            <div className="movement-icon">
              {action.icon}
            </div>


            <h3>
              {action.title}
            </h3>


            <p>
              {action.text}
            </p>


            <button>
              Learn More →
            </button>


          </article>

        ))}


      </div>


    </section>

  );
}