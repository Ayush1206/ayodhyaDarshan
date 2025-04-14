import { readFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "bookings.json");

type Booking = {
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
  };
  

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // 🧠 Extract dynamic id from URL

  if (!id) {
    return NextResponse.json({ error: "No ID provided" }, { status: 400 });
  }

  try {
    const raw = await readFile(filePath, "utf-8");
    const bookings: Booking[] = JSON.parse(raw);
    const found = bookings.find((b) => b.id === id);

    if (!found) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json(found);
  } catch {
    return NextResponse.json({ error: "Failed to read booking file" }, { status: 500 });
  }
}
