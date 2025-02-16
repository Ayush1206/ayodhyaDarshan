"use client";

import React, { useState } from "react";
import { useTrip } from "../context/TripContext";

const statesWithCities: Record<string, string[]> = {
    "Uttar Pradesh": ["Lucknow", "Varanasi", "Ayodhya", "Kanpur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Delhi": ["New Delhi"],
    "Karnataka": ["Bangalore", "Mysore"],
    "Tamil Nadu": ["Chennai", "Coimbatore"],
};

const hotelTypes = ["3-Star", "4-Star", "5-Star"];
const roomTypes = ["Basic", "Deluxe", "Luxury"];

const BookHotel: React.FC = () => {
    const { tripDetails, setTripDetails } = useTrip();
    const [showHotelPopup, setShowHotelPopup] = useState<boolean>(false);

    const handleCheckboxChange = () => {
        const newLeaveItToUs = !tripDetails.leaveItToUs;
        setTripDetails({ leaveItToUs: newLeaveItToUs });

        if (newLeaveItToUs) {
            setShowHotelPopup(true);
        } else {
            setTripDetails({ hotelType: "", roomType: "" });
        }
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTripDetails({ selectedState: e.target.value, selectedCity: "" });
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTripDetails({ selectedCity: e.target.value });
    };

    const handleHotelTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTripDetails({ hotelType: e.target.value });
    };

    const handleRoomTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTripDetails({ roomType: e.target.value });
    };

    const closePopup = () => {
        if (!tripDetails.hotelType || !tripDetails.roomType) {
            alert("Please select a Hotel Type and Room Type before proceeding.");
            return;
        }
        setShowHotelPopup(false);
    };



    return (
        <div className="hotel-selection-container">
            <h3>Book Your Hotel</h3>
            <ul>
                {[
                    { label: "Booking.com", link: "https://www.booking.com" },
                    { label: "MakeMyTrip", link: "https://www.makemytrip.com/hotels" },
                    { label: "Expedia", link: "https://www.expedia.com/Hotels" },
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

            {/* Selected Hotel Details & Confirmation Message */}
            <div className="confirmation-message">
                <p>
                    <strong>Leave it to us:</strong>{" "}
                    {tripDetails.leaveItToUs
                        ? `Yes, booking a ${tripDetails.hotelType || "N/A"} hotel (${tripDetails.roomType || "N/A"}) in dev bhoomi Ayodhya`
                        : "No, user will book themselves."}
                </p>
            </div>

            {/* Popup for selecting Hotel Preferences */}
            {showHotelPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Select Your Hotel Preferences</h3>

                        <label>
                            Hotel Type:
                            <select value={tripDetails.hotelType} onChange={handleHotelTypeChange}>
                                <option value="">Select Hotel Type</option>
                                {hotelTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            Room Type:
                            <select value={tripDetails.roomType} onChange={handleRoomTypeChange}>
                                <option value="">Select Room Type</option>
                                {roomTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <button onClick={closePopup} className="confirm-btn">Confirm</button>
                    </div>
                </div>
            )}

            <style jsx>{`
        


.confirm-btn {
  background: #ff9933;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  width: 100%;
}

.confirm-btn:hover {
  background: #cc5200;
}


        .hotel-selection-container {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.hotel-selection-container h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.hotel-selection-container ul {
  list-style: none;
  padding: 0;
}

.hotel-selection-container li {
  margin: 10px 0;
}

.hotel-selection-container a {
  font-size: 1.2rem;
  text-decoration: none;
  color: #ff6600;
  font-weight: bold;
}

.hotel-selection-container a:hover {
  text-decoration: underline;
}

/* Leave it to us checkbox */
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

.confirmation-message {
  margin-top: 20px;
  padding: 15px;
  background: #fff5e1;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  color: #cc5200;
  text-align: center;
}

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

        .popup label {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
  margin-bottom: 12px; /* Increased margin for better spacing */
}

.popup select {
  width: 100%;
  padding: 8px;
  margin-top: 5px; /* Spacing between label and dropdown */
  border: 1px solid #ccc;
  border-radius: 5px;
}

      `}</style>
        </div>
    );
};

export default BookHotel;
