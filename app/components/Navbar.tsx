"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Gallery Tab */}
      <div className="left">
        <a href="/gallery" className="navLink">
          Gallery
        </a>
      </div>

      {/* Logo in Center */}
      <div className="center">
        <Image
          src="/images/logo.png" // Replace with your logo path
          alt="Logo"
          width={50}
          height={50}
          className="logo"
        />
      </div>

      {/* Register/Login Tab */}
      <div className="right">
        <a href="/register" className="navLink">
          Register/Login
        </a>
      </div>

      <style jsx>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #ff9933; /* Saffron */
            box-shadow: 0 4px 6px rgba(255, 215, 0, 0.5); /* Golden shadow */
            position: fixed;
            top: 0;
            width: 100%;
            height: 70px; /* Set a fixed height */
            z-index: 1000;
          }

          .left,
          .center,
          .right {
            display: flex;
            align-items: center;
          }

          .navLink {
            text-decoration: none;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            transition: color 0.3s ease;
          }

          .navLink:hover {
            color: #ffd700; /* Golden hover effect */
          }

          .logo {
            border-radius: 50%;
          }

          .center {
            justify-content: center;
          }

          .left {
            justify-content: flex-start;
          }

          .right {
            justify-content: flex-end;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .navbar {
              flex-direction: column;
            }

            .left,
            .center,
            .right {
              justify-content: center;
              margin: 5px 0;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
