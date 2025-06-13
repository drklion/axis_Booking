import { useState } from "react";

export default function BookingApp() {
  const [bookingType, setBookingType] = useState("");
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Axis Yacht Charters</h1>
      <p className="mb-6 text-lg italic">Free to Explore</p>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Choose a Boat:</label>
        <select
          value={boat}
          onChange={(e) => setBoat(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select</option>
          <option value="Axopar">Axopar 37XC 11.7 Meter (w/Captain)</option>
          <option value="5m">5 Meter 30HP (50HP) Boat Rental</option>
        </select>
      </div>
    </div>
  );
}
<div className="mb-4">
  <label className="block font-semibold mb-2">Booking Type:</label>
  <select
    value={bookingType}
    onChange={(e) => setBookingType(e.target.value)}
    className="w-full p-2 border rounded"
  >
    <option value="">Select</option>
    <option value="Full Day Charter">Full Day Charter</option>
    <option value="Half Day Charter">Half Day Charter</option>
    <option value="Transfer">Transfer</option>
  </select>
</div>
