"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link href="/" className="navbar-logo">

  <Image
    src="/images/atwlogo.png"
    alt="A Thousand Women logo"
    width={220}
  height={100}
  priority
  />

</Link>


        <nav className="navbar-links">

          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/initiatives">
            Initiatives
          </Link>

          <Link href="/impact">
            Impact
          </Link>

          <Link href="/knowledge-hub">
            Knowledge Hub
          </Link>

        </nav>


        <Link href="/get-involved" className="navbar-action">
          Join The Movement
        </Link>

      </div>
    </header>
  );
}