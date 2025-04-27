"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left (Plan Now - visible on desktop) */}
      <div className="left">
        <div className="desktopMenu">
          <Link href="/plan" className="navLink">
            Plan Now
          </Link>
        </div>
      </div>

      {/* Center (Logo) */}
      <div className="center">
        <Link href="/" className="logoLink">
          <Image
            src="/images/LogoDraft_14.png"
            alt="Logo"
            width={50}
            height={50}
            className="logo"
          />
        </Link>
      </div>

      {/* Right (Register/Login - visible on desktop + Hamburger visible on mobile) */}
      <div className="right">
        <div className="desktopMenu">
          <Link href="/signup-login" className="navLink">
            Register/Login
          </Link>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (hidden on desktop) */}
      {menuOpen && (
        <div className="mobileMenu">
          <Link href="/plan" className="mobileNavLink" onClick={() => setMenuOpen(false)}>
            Plan Now
          </Link>
          <Link href="/signup-login" className="mobileNavLink" onClick={() => setMenuOpen(false)}>
            Register/Login
          </Link>
        </div>
      )}

      <style jsx>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #ff9933;
            box-shadow: 0 4px 6px rgba(255, 215, 0, 0.5);
            position: fixed;
            top: 0;
            width: 100%;
            height: 70px;
            z-index: 1000;
            color: white;
          }

          .left, .center, .right {
            display: flex;
            align-items: center;
          }

          .desktopMenu {
            display: flex;
            gap: 20px;
          }

          .navLink {
            text-decoration: none;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            transition: color 0.3s ease;
          }

          .navLink:hover {
            color: #ffd700;
          }

          .logo {
            border-radius: 50%;
          }

          .logoLink {
            display: flex;
            align-items: center;
          }

          .hamburger {
            display: none;
            background: none;
            border: none;
            font-size: 1.8rem;
            color: white;
            cursor: pointer;
          }

          /* Mobile */
          .mobileMenu {
  position: absolute;
  top: 70px;
  right: 0;
  background-color: #ff9933;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0; /* More padding top and bottom */
  gap: 20px; /* ADD THIS */
  box-shadow: 0 4px 6px rgba(255, 215, 0, 0.5);
}

.mobileNavLink {
  text-decoration: none;
  color: white;
  font-size: 1.4rem; /* Slightly bigger */
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.mobileNavLink:hover {
  background-color: #ffd700; /* Golden hover effect */
  color: #ff9933;
}
          @media (max-width: 768px) {
            .desktopMenu {
              display: none;
            }

            .hamburger {
              display: block;
            }

            .left, .right {
              flex: 1;
              justify-content: flex-start;
            }

            .center {
              flex: 1;
              justify-content: center;
            }

            .right {
              justify-content: flex-end;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
