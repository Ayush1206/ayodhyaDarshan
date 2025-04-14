import { writeFile, readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const filePath = path.join(process.cwd(), "bookings.json");

interface Booking {
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

export async function POST(req: Request) {
  try {
    const newBooking: Omit<Booking, "id"> = await req.json();
    const bookingWithId: Booking = {
      ...newBooking,
      id: uuidv4(),
    };

    let currentData: Booking[] = [];
    try {
      const raw = await readFile(filePath, "utf-8");
      currentData = JSON.parse(raw);
    } catch {
      console.warn("New file will be created.");
    }

    currentData.push(bookingWithId);
    await writeFile(filePath, JSON.stringify(currentData, null, 2));

    return NextResponse.json(
      { message: "Booking saved successfully!", id: bookingWithId.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving booking:", error);
    return NextResponse.json(
      { error: "Failed to save booking." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const raw = await readFile(filePath, "utf-8");
    const data: Booking[] = JSON.parse(raw);

    const filtered = data.map((item) => ({
      id: item.id,
      name: item.userInfo.name,
      phone: item.userInfo.phone,
      startDate: item.startDate,
      endDate: item.endDate,
    }));

    return NextResponse.json(filtered, { status: 200 });
  } catch (error) {
    console.error("Error reading bookings:", error);
    return NextResponse.json(
      { error: "Failed to load bookings." },
      { status: 500 }
    );
  }
}
