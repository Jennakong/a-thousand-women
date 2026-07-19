"use client";

export default function Newsletter() {
  return (
    <section className="newsletter-section">

      <div className="newsletter-overlay">

        <h2>
          Stay Connected With Our Work
        </h2>

        <p>
          Join our community and receive updates about our programmes,
          impact stories, research, and opportunities to support women
          and girls across Africa.
        </p>

        <div className="newsletter-form">

          <input
            placeholder="Enter your email address"
          />

          <button>
            Join Our Community
          </button>

        </div>

      </div>

    </section>
  );
}