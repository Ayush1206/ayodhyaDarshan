"use client"

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CustomDatePicker from "../components/DatePicker";
import TravelModeSelection from "../components/TravelModeSelection";
import BookHotel from "../components/BookHotel";
import Additionals from "../components/Additionals";
import Review from "../components/Review"
import Checkout from "../components/Checkout";

const TripPlanner = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = ["Select Dates", "Book Travel", "Book Hotel", "Additionals", "Review", "Checkout"];

    const goToNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    const goToPrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="trip-planner">
            <Navbar />
            <div className="content-wrapper">
                {/* Progress Bar */}
                <div className="progress-bar">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step ${index + 1 <= currentStep ? "active" : ""}`}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="step-content">
                    {currentStep === 1 && (
                        <div>
                            <h1>Select Your Travel Date</h1>
                            <CustomDatePicker />
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div>
                            <h2>Book Your Travel</h2>
                            <TravelModeSelection />
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div>
                            <h2>Book Your Hotel</h2>
                            <BookHotel />
                        </div>
                    )}
                    {currentStep === 4 && (
                        <div>
                            <h2>Additional Preferences</h2>
                            <Additionals />
                        </div>
                    )}
                    {currentStep === 5 && (
                        <Review
                            onEdit={() => setCurrentStep(1)}
                            onProceed={() => setCurrentStep(6)}
                        />
                    )}
                    {currentStep === 6 && (
                        <div>
                            <h2>Checkout</h2>
                            <Checkout />
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="navigation-buttons">
                    <button onClick={goToPrev} disabled={currentStep === 1}>
                        Previous
                    </button>
                    <button onClick={goToNext} disabled={currentStep === steps.length}>
                        Next
                    </button>
                </div>
            </div>

            <style jsx>{`
        .trip-planner {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .content-wrapper {
          padding: 20px;
          max-width: 800px;
          margin: 100px auto 0 auto;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .step {
          flex: 1;
          padding: 10px;
          text-align: center;
          background: #ddd;
          border-radius: 5px;
          margin: 0 5px;
          transition: background 0.3s;
        }

        .step.active {
          background: #ff9933;
          color: #fff;
        }

        .step-content {
          margin: 20px 0;
          text-align: center;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
        }

        button {
          padding: 10px 20px;
          border: none;
          background: #ff9933;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
        }

        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 10px;
            margin: 80px auto 0 auto;
          }

          .progress-bar {
            flex-direction: column;
          }

          .step {
            margin-bottom: 10px;
          }

          .navigation-buttons {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
        </div>
    );
};

export default TripPlanner;
