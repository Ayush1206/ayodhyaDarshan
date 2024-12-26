"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Attraction {
  name: string;
  icon: string;
  coordinates: { x: string; y: string };
}

const InteractiveMapSection: React.FC = () => {
  const attractions: Attraction[] = [
    {
      name: "Shri Ram Janmabhoomi",
      icon: "\u26EA", // Church/temple icon
      coordinates: { x: "30%", y: "40%" },
    },
    {
      name: "Saryu Ghat",
      icon: "\u1F30A", // Water waves icon
      coordinates: { x: "60%", y: "70%" },
    },
    {
      name: "Hanuman Mandir",
      icon: "\uD83D\uDC9B", // Heart icon
      coordinates: { x: "50%", y: "50%" },
    },
    {
      name: "Kanak Bhawan",
      icon: "\uD83C\uDFE1", // House icon
      coordinates: { x: "40%", y: "20%" },
    },
    {
      name: "Guptar Ghat",
      icon: "\u1F30A", // Water waves icon
      coordinates: { x: "70%", y: "30%" },
    },
    {
      name: "Mani Parvat",
      icon: "\u26F0", // Mountain icon
      coordinates: { x: "20%", y: "60%" },
    },
  ];

  return (
    <section className="interactive-map-section">
      <div className="parent-container">
        <h1 className="title">Explore Ayodhya Attractions</h1>

        <div className="content-wrapper">
          {/* Left Pane */}
          <div className="attractions-list">
            <ul>
              {attractions.map((attraction, index) => (
                <li key={index} className="list-item">
                  {/* <span className="icon">{attraction.icon}</span> */}
                  <span className="name">{attraction.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Pane */}
          <div className="dummy-map">
            <img src="/images/Ayodhyatourism.png" alt="Dummy Map" className="map-image" />
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="marker"
                style={{ left: attraction.coordinates.x, top: attraction.coordinates.y }}
              >
                <div className="pin">
                  <span className="pin-icon">{attraction.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .parent-container {
          margin: 5%;
          display: flex;
          flex-direction: column;
        }

        .title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.8rem;
          font-weight: bold;
        }

        .content-wrapper {
          display: flex;
          gap: 5%;
        }

        .attractions-list {
          width: 35%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .attractions-list ul {
          list-style: none;
          padding: 0;
        }

        .list-item {
          display: flex;
          align-items: center;
          margin: 10px 0;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .icon {
          font-size: 1.5rem;
          margin-right: 10px;
          color: black;
        }

        .dummy-map {
          width: 60%;
          position: relative;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          height: 400px; /* Reduced height */
        }

        .map-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .marker {
          position: absolute;
          transform: translate(-50%, -100%);
        }

        .pin {
          position: relative;
          width: 20px;
          height: 30px;
          background-color: #FF9933;
          border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pin:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          background-color: black;
          clip-path: polygon(50% 0, 0% 100%, 100% 100%);
        }

        .pin-icon {
          color: white;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
            gap: 20px;
          }

          .attractions-list {
            width: 100%;
          }

          .dummy-map {
            width: 100%;
            height: 300px; /* Adjusted for mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveMapSection;
