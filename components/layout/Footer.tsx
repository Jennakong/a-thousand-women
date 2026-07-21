import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="atw-container">

        <div className="footer-brand">

          <Image
            src="/images/atwlogo-white.png"
            alt="A Thousand Women logo"
            width={240}
            height={100}
          />

          <p className="footer-tagline">
            Empowered Women.
            <br />
            Empower Generations.
          </p>

          <p className="footer-description">
            A UK registered non-profit organisation
            limited by guarantee (Company No. 16044328).
          </p>

        </div>


        <div className="footer-grid">

          <div>
            <h3>About</h3>

            <Link href="/about">
              Our Mission
            </Link>

            <Link href="/initiatives">
              Our Programs
            </Link>

            <Link href="/impact">
              Impact
            </Link>

          </div>


          <div>
            <h3>Connect</h3>

            <a href="#">
              Instagram
            </a>

            <a href="#">
              Facebook
            </a>

            <a href="#">
              LinkedIn
            </a>

          </div>


          <div>
            <h3>Stay Updated</h3>

            <p>
              Receive updates from our work.
            </p>

            <input
              placeholder="Your email address"
            />

          </div>

        </div>


        <div className="footer-donate">

          <h3>
            Support Our Mission
          </h3>

          <p>
            Help us create more opportunities
            for women and girls.
          </p>

          <Link href="/donate">
            Donate Now
          </Link>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 A Thousand Women.
            All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}