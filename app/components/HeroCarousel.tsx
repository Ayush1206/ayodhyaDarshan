// File: app/components/HeroCarousel.tsx

'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Welcome to Our Platform",
      description: "Experience seamless travel and darshan.",
      image: "/images/img5.jpg",
    },
    {
      id: 2,
      title: "Your Ideas Matter",
      description: "Vip Darshan and pooja.",
      image: "/images/img4.jpg",
    },
    {
      id: 3,
      title: "Achieve More Together",
      description: "Book with us and enjoy.",
      image: "/images/img3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            className="carousel-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="carousel-image"
            />
            <div className="slide-content">
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="control-btn">
          &#8592; Prev
        </button>
        <button onClick={nextSlide} className="control-btn">
          Next &#8594;
        </button>
      </div>

      <style jsx>{`
        .hero-carousel {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 90vh; /* 80% screen height for mid and large screens */
          margin-top: 70px; /* Adjust this value to match the navbar's height */
        }

        @media (max-width: 768px) {
          .hero-carousel {
            height: 60vh; /* Smaller height for small screens */
          }
        }

        .carousel-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .carousel-slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .carousel-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          filter: brightness(50%) contrast(80%);
        }

        .slide-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-shadow: none;
        }

        .slide-content h1 {
          font-size: 2.5rem;
          font-weight: 900;
          color: #ff4500;
        }

        .slide-content p {
          font-size: 1.5rem;
          font-weight: 700;
          color: black;
        }

        .carousel-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .control-btn {
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }

        .control-btn:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
