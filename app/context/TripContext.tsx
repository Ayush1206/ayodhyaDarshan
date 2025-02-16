"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface TripDetails {
  startDate: Date | null;
  endDate: Date | null;
  travelMode: string;
  leaveItToUs: boolean;
  selectedState: string;
  selectedCity: string;
  hotelType: string;
  roomType: string;
  hotel: string;
}

interface TripContextType {
  tripDetails: TripDetails;
  setTripDetails: (details: Partial<TripDetails>) => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider = ({ children }: { children: ReactNode }) => {
  const [tripDetails, setTripDetailsState] = useState<TripDetails>({
    startDate: null,
    endDate: null,
    travelMode: "",
    leaveItToUs: false,
    selectedState: "",
    selectedCity: "",
    hotelType: "",
    roomType: "",
    hotel: "",
  });

  const setTripDetails = (details: Partial<TripDetails>) => {
    setTripDetailsState((prev) => ({ ...prev, ...details }));
  };

  return (
    <TripContext.Provider value={{ tripDetails, setTripDetails }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("useTrip must be used within a TripProvider");
  }
  return context;
};
