"use client";

import React, { useState } from "react";
import { useTrip } from "../context/TripContext";

const travelModes = ["Flight", "Train", "Cab"];
const statesWithCities: Record<string, string[]> = {
    "Uttar Pradesh": ["Lucknow", "Varanasi", "Ayodhya", "Kanpur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Delhi": ["New Delhi"],
    "Karnataka": ["Bangalore", "Mysore"],
    "Tamil Nadu": ["Chennai", "Coimbatore"],
};

const TravelModeSelection: React.FC = () => {
    const { tripDetails, setTripDetails } = useTrip();
    const [activeTab, setActiveTab] = useState<string>(tripDetails.travelMode || "Flight");
    const [showLocationPopup, setShowLocationPopup] = useState<boolean>(false);

    const handleTabClick = (mode: string) => {
        setActiveTab(mode);
        setTripDetails({ travelMode: mode, leaveItToUs: false, selectedState: "", selectedCity: "" });
    };

    const handleCheckboxChange = () => {
        const newLeaveItToUs = !tripDetails.leaveItToUs;
        setTripDetails({ leaveItToUs: newLeaveItToUs });

        if (newLeaveItToUs) {
            setShowLocationPopup(true);
        } else {
            setTripDetails({ selectedState: "", selectedCity: "" });
        }
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTripDetails({ selectedState: e.target.value, selectedCity: "" });
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTripDetails({ selectedCity: e.target.value });
    };

    const closePopup = () => {
        if (!tripDetails.selectedState || !tripDetails.selectedCity) {
            alert("Please select both State and City before proceeding.");
            return;
        }
        setShowLocationPopup(false);
    };

    return (
        <div className="travel-selection-container">
            {/* Tabs */}
            <div className="tab-container">
                {travelModes.map((mode) => (
                    <button key={mode} className={`tab ${activeTab === mode ? "active" : ""}`} onClick={() => handleTabClick(mode)}>
                        {mode}
                    </button>
                ))}
            </div>

            {/* Booking Links */}
            <div className="booking-options">
                <h3>Book Your {activeTab}</h3>
                <ul>
                    {[
                        { label: "Skyscanner", link: "https://www.skyscanner.co.in" },
                        { label: "Goibibo", link: "https://www.goibibo.com" },
                        { label: "IndiGo Airlines", link: "https://www.goindigo.in" },
                    ].map((option) => (
                        <li key={option.label}>
                            <a href={option.link} target="_blank" rel="noopener noreferrer">
                                {option.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* "Leave it to us" Checkbox */}
                <label className="leave-it-to-us">
                    <input type="checkbox" checked={tripDetails.leaveItToUs} onChange={handleCheckboxChange} />
                    Leave it to us
                </label>
            </div>

            {/* Selected Travel Mode & Confirmation Message */}
            <div className="confirmation-message">
                <p>
                    <strong>Selected Mode:</strong> {tripDetails.travelMode || "Not Selected"}
                </p>
                <p>
                    <strong>Leave it to us:</strong>{" "}
                    {tripDetails.leaveItToUs
                        ? `Yes, booking for ${tripDetails.selectedCity || "N/A"}, ${tripDetails.selectedState || "N/A"}`
                        : "No, user will book themselves."}
                </p>
            </div>

            {/* Popup for selecting State & City */}
            {showLocationPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Select Your Location</h3>
                        <label>
                            State:
                            <select value={tripDetails.selectedState} onChange={handleStateChange}>
                                <option value="">Select State</option>
                                {Object.keys(statesWithCities).map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            City:
                            <select value={tripDetails.selectedCity} onChange={handleCityChange} disabled={!tripDetails.selectedState}>
                                <option value="">Select City</option>
                                {statesWithCities[tripDetails.selectedState]?.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <button onClick={closePopup} className="confirm-btn">Confirm</button>
                    </div>
                </div>
            )}

            <style jsx>{`
        .travel-selection-container {
          max-width: 600px;
          margin: 30px auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        /* Tabs */
        .tab-container {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }

        .tab {
          flex: 1;
          padding: 12px;
          border: none;
          background: none;
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }

        .tab.active {
          background: #ff9933;
          color: white;
          border-radius: 5px;
          border-bottom: 2px solid #cc5200;
        }

        /* Booking Options */
        .booking-options ul {
          list-style: none;
          padding: 0;
        }

        .booking-options li {
          margin: 10px 0;
        }

        .booking-options a {
          font-size: 1.2rem;
          text-decoration: none;
          color: #ff6600;
          font-weight: bold;
        }

        .leave-it-to-us {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 15px;
          font-size: 1.1rem;
          font-weight: bold;
        }

        .leave-it-to-us input {
          margin-right: 10px;
          width: 18px;
          height: 18px;
          accent-color: #ff9933;
        }

        /* Popup */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          width: 80%;
          max-width: 400px;
        }

        .popup h3 {
          margin-bottom: 15px;
        }

        label {
            display: block;
  margin-bottom: 12px; 
  font-weight: bold;
}

select {
  width: 100%;
  padding: 8px;
  margin-top: 5px; 
  border: 1px solid #ccc;
  border-radius: 5px;
}



        .confirm-btn {
          background: #ff9933;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          margin-top: 15px;
          cursor: pointer;
        }

        .confirm-btn:hover {
          background: #cc5200;
        }
      `}</style>
        </div>
    );
};

export default TravelModeSelection;
