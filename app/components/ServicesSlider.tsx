"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const ServicesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const services: Service[] = [
    {
      id: 1,
      icon: "🛕",
      title: "Temple Visits",
      description: "Organized darshan for a serene experience.",
    },
    {
      id: 2,
      icon: "✨",
      title: "VIP Pooja Services",
      description: "Customized rituals and pooja offerings.",
    },
    {
      id: 3,
      icon: "🗺️",
      title: "Travel Planning",
      description: "Seamless planning for your journey.",
    },
    {
      id: 4,
      icon: "🍛",
      title: "Culinary Experience",
      description: "Savor Ayodhya's authentic vegetarian cuisine.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000); // Slides every 5 seconds
    return () => clearInterval(interval);
  }, [services.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <section className="services-slider">
      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={services[currentIndex].id}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon">{services[currentIndex].icon}</div>
            <h3 className="title">{services[currentIndex].title}</h3>
            <p className="description">{services[currentIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="button-container">
        <button className="control-btn" onClick={handlePrevious}>
          Previous
        </button>
        <button className="control-btn" onClick={handleNext}>
          Next
        </button>
      </div>

      <style jsx>{`
        .services-slider {
          padding: 50px 20px;
          background-color: #f9f9f9;
          text-align: center;
        }

        .slider-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
          overflow: hidden;
        }

        .service-card {
          background: #ffffff;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: 250px;
          text-align: center;
        }

        .icon {
          font-size: 3rem;
          color: #ff9933;
          margin-bottom: 20px;
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333333;
          margin-bottom: 10px;
        }

        .description {
          font-size: 1rem;
          color: #666666;
        }

        .button-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .control-btn {
          background-color: #ff9933;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .control-btn:hover {
          background-color: #cc7a29;
        }

        @media (max-width: 768px) {
          .service-card {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSlider;
