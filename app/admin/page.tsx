"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TripDetails {
    id: string;
    startDate: string | null;
    endDate: string | null;
    travelMode: string;
    vehicleSupport: boolean;
    selectedState: string;
    selectedCity: string;
    hotelType: string;
    roomType: string;
    HotelSupport: boolean;
    hotel: string;
    additionals: {
        guide: boolean;
        restaurant: boolean;
    };
    userInfo: {
        name: string;
        email: string;
        phone: string;
    };
}

interface OrderList {
    id: string
    startDate: string | null;
    endDate: string | null;
    name: string;
    phone: string;
}

export default function AdminPage() {
    const [trips, setTrips] = useState<OrderList[]>([]);
    const [selectedTrip, setSelectedTrip] = useState<TripDetails | null>(null);

    useEffect(() => {
        const fetchTrips = async () => {
            const res = await fetch("/api/booking");
            const data = await res.json();
            setTrips(data);
        };
        fetchTrips();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6"
        >
            <h1 className="text-2xl font-bold mb-4">Incoming Trip Orders</h1>

            <div className="space-y-4">
                {trips.length === 0 ? (
                    <p>No trip orders found.</p>
                ) : (
                    trips.map((trip, index) => (
                        <div
                            key={trip.id || index}
                            className="p-4 border rounded-xl shadow-md bg-white text-black cursor-pointer"
                            onClick={async () => {
                                try {
                                    const res = await fetch(`/api/booking/${trip.id}`);
                                    const fullTrip: TripDetails = await res.json();
                                    setSelectedTrip(fullTrip);
                                } catch (err) {
                                    alert("Failed to fetch booking details.");
                                    console.error(err);
                                }
                            }}
                        >
                            <p><strong>Name:</strong> {trip.name}</p>
                            <p><strong>Phone:</strong> {trip.phone}</p>
                            <p><strong>Start Date:</strong> {trip.startDate}</p>
                            <p><strong>End Date:</strong> {trip.endDate}</p>
                        </div>
                    ))
                )}
            </div>

            <AnimatePresence>
                {selectedTrip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setSelectedTrip(null)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white text-black p-6 rounded-xl max-w-lg w-full shadow-lg"
                        >
                            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                            <p><strong>Name:</strong> {selectedTrip.userInfo.name}</p>
                            <p><strong>Email:</strong> {selectedTrip.userInfo.email}</p>
                            <p><strong>Phone:</strong> {selectedTrip.userInfo.phone}</p>
                            <p><strong>Start Date:</strong> {selectedTrip.startDate}</p>
                            <p><strong>End Date:</strong> {selectedTrip.endDate}</p>
                            <p><strong>Travel Mode:</strong> {selectedTrip.travelMode}</p>
                            <p><strong>Vehicle Support:</strong> {selectedTrip.vehicleSupport ? "Yes" : "No"}</p>
                            <p><strong>State:</strong> {selectedTrip.selectedState}</p>
                            <p><strong>City:</strong> {selectedTrip.selectedCity}</p>
                            <p><strong>Hotel Type:</strong> {selectedTrip.hotelType}</p>
                            <p><strong>Room Type:</strong> {selectedTrip.roomType}</p>
                            <p><strong>Hotel Support:</strong> {selectedTrip.HotelSupport ? "Yes" : "No"}</p>
                            <p><strong>Hotel:</strong> {selectedTrip.hotel}</p>
                            <p><strong>Guide:</strong> {selectedTrip.additionals.guide ? "Yes" : "No"}</p>
                            <p><strong>Restaurant:</strong> {selectedTrip.additionals.restaurant ? "Yes" : "No"}</p>

                            <button
                                onClick={() => setSelectedTrip(null)}
                                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                h1 {
                    color: #1a202c;
                }
            `}</style>
        </motion.div>
    );
}
