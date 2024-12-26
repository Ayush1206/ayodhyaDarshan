"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TripPlanningSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section className="trip-planning-section" ref={ref}>
      <div className="text-center">
        <h1 className="heading">Planning a trip to Ayodhya?</h1>
        <p className="subheading">
          Sit back and relax as we plan the trip for you
        </p>
      </div>

      <div className="cards-container">
        <motion.div
          className="card"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="icon">🗺️</div>
          <h3 className="card-title">Optimal Route Planning</h3>
          <p className="card-description">
            Discover the best routes to explore Ayodhya with ease and comfort.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="icon">✨</div>
          <h3 className="card-title">Personalize Your Trip</h3>
          <p className="card-description">
            Customize your itinerary to include your favorite spots and activities.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="icon">🍴</div>
          <h3 className="card-title">Local Cuisine Recommendations</h3>
          <p className="card-description">
            Savor the best local dishes and culinary delights Ayodhya has to offer.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .trip-planning-section {
          padding: 50px;
          background-color: #f9f9f9;
          text-align: center;
          height: 80vh;
        }

        .heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
        }

        .subheading {
          font-size: 1.25rem;
          color: #555;
          margin-bottom: 40px;
        }

        .cards-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 30px;
          width: 300px;
          text-align: center;
          margin-top: 20px;
        }

        .icon {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #ff9933;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #333;
        }

        .card-description {
          font-size: 1rem;
          color: #666;
        }

        @media (max-width: 768px) {
          .cards-container {
            flex-direction: column;
            align-items: center;
          }

          .card {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default TripPlanningSection;
