"use client";

import React, { useState } from "react";

interface Attraction {
  name: string;
  coordinates: { x: string; y: string };
}

const InteractiveMapSection: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const attractions: Attraction[] = [
    {
      name: "Shri Ram Janmabhoomi",
      coordinates: { x: "32%", y: "45%" },
    },
    {
      name: "Saryu Ghat",
      coordinates: { x: "62%", y: "75%" },
    },
    {
      name: "Hanuman Mandir",
      coordinates: { x: "48%", y: "47%" },
    },
    {
      name: "Kanak Bhawan",
      coordinates: { x: "44%", y: "25%" },
    },
    {
      name: "Guptar Ghat",
      coordinates: { x: "68%", y: "32%" },
    },
    {
      name: "Mani Parvat",
      coordinates: { x: "22%", y: "65%" },
    },
  ];

  const handleListItemClick = (index: number) => {
    setActiveMarker(index);
  };

  return (
    <section className="interactive-map-section">
      <div className="parent-container">
        <h1 className="title">Explore Ayodhya Attractions</h1>

        <div className="content-wrapper">
          {/* Left Pane */}
          <div className="attractions-list">
            <ul>
              {attractions.map((attraction, index) => (
                <li
                  key={index}
                  className={`list-item ${activeMarker === index ? "active" : ""}`}
                  onClick={() => handleListItemClick(index)}
                >
                  {attraction.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Pane */}
          <div className="dummy-map-wrapper">
            <div className="dummy-map">
              <img
                src="/images/Ayodhyatourism.png"
                alt="Dummy Map"
                className="map-image"
              />
              {attractions.map((attraction, index) => (
                <div
                  key={index}
                  className={`marker ${activeMarker === index ? "active" : ""}`}
                  style={{ left: attraction.coordinates.x, top: attraction.coordinates.y }}
                >
                  <img
                    src={
                      activeMarker === index
                        ? "/images/red-pin.png"
                        : "/images/black-pin.png"
                    }
                    alt="Marker"
                    className="pin-image"
                  />
                </div>
              ))}
            </div>
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
          align-items: center;
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
          cursor: pointer;
          padding: 10px;
          margin: 5px 0;
          font-size: 1.2rem;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .list-item:hover,
        .list-item.active {
          background-color: #f0f0f0;
          border-radius: 5px;
        }

        .dummy-map-wrapper {
          width: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dummy-map {
          width: 100%;
          position: relative;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          height: 400px;
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
          transition: transform 0.3s ease, z-index 0.3s ease;
        }

        .marker.active {
          transform: translate(-50%, -100%) scale(1.2);
          z-index: 10;
        }

        .pin-image {
          width: 30px;
          height: 30px;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
            gap: 20px;
          }

          .attractions-list {
            width: 100%;
          }

          .dummy-map-wrapper {
            width: 100%;
          }

          .dummy-map {
            width: 100%;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveMapSection;
