"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link href="/" className="navbar-logo">

          <Image
            src="/images/atwlogo.png"
            alt="A Thousand Women logo"
            width={300}
            height={120}
            priority
            className="logo-image"
          />

        </Link>


        {/* Desktop Menu */}
        <nav className="navbar-links">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/initiatives">Initiatives</Link>
          <Link href="/knowledge-hub">
            Knowledge Hub
          </Link>

        </nav>


        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      {/* Mobile Dropdown */}

      {open && (

        <div className="mobile-menu">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/initiatives" onClick={() => setOpen(false)}>
            Initiatives
          </Link>

          <Link href="/impact" onClick={() => setOpen(false)}>
            Impact
          </Link>

          <Link href="/knowledge-hub" onClick={() => setOpen(false)}>
            Knowledge Hub
          </Link>

          <Link href="/donate" onClick={() => setOpen(false)}>
            Donate
          </Link>

        </div>

      )}

    </header>
  );
}