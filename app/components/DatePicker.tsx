"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useTrip } from "../context/TripContext";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker: React.FC = () => {
    const { tripDetails, setTripDetails } = useTrip();
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setTripDetails({ startDate: start, endDate: end });
  };

  return (
    <div className="date-range-picker-container">
      <motion.div className="date-range-picker-wrapper" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button className="date-range-picker-button" onClick={() => setIsOpen(!isOpen)}>
          <FaCalendarAlt className="icon" />
          {tripDetails.startDate && tripDetails.endDate
            ? `${tripDetails.startDate.toDateString()} - ${tripDetails.endDate.toDateString()}`
            : "Select Trip Dates"}
        </button>

        {isOpen && (
          <motion.div className="date-range-picker-popup" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <DatePicker selected={tripDetails.startDate} onChange={handleDateChange} startDate={tripDetails.startDate} endDate={tripDetails.endDate} selectsRange inline minDate={new Date()} />
          </motion.div>
        )}
      </motion.div>

      <style jsx>{`
        .date-range-picker-container {
          position: relative;
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .date-range-picker-wrapper {
          display: inline-block;
          position: relative;
        }

        .date-range-picker-button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          font-size: 1.2rem;
          font-weight: bold;
          background: linear-gradient(135deg, #ff9933, #ff6600);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: background 0.3s;
        }

        .date-range-picker-button:hover {
          background: linear-gradient(135deg, #ff6600, #cc5200);
        }

        .icon {
          font-size: 1.5rem;
        }

        .date-range-picker-popup {
          position: absolute;
          top: 55px;
          left: 0;
          background: white;
          border-radius: 10px;
          box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 100;
          padding: 10px;
        }

        @media (max-width: 768px) {
          .date-range-picker-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default DateRangePicker;
