import { useState } from "react";
import style from "./Booking.module.css";
import BookingFilterSelect from "../BookingFilterSelect/BookingFilterSelect";
function Booking() {
  const [bookingType, setBookingType] = useState("doctor");

  return (
    <section className="text-muted w-100 p-4 position-absolute top-50">
      <article className="bg-white shadow p-3 rounded-4">
        {/* Toggle Booking Options */}
        <nav className="row container">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setBookingType("doctor")}
            className={`${
              bookingType === "doctor" && style.activeSelection
            } col-6 cursor-pointer d-flex justify-content-center`}
          >
            <div className="w-50">
              <p className="mb-0 fs-4">Book a doctor</p>
              <p>Examination or procedure</p>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setBookingType("telehealth")}
            className={`${
              bookingType === "telehealth" && style.activeSelection
            } col-6 d-flex justify-content-center`}
          >
            <div className="w-50">
              <p className="mb-0 fs-4">Telehealth</p>
              <p>Call consultation with doctor</p>
            </div>
          </div>
        </nav>

        {/* Filter Inputs */}
        <form className="container bg-white p-3" role="search">
          <div className="row g-3 align-items-stretch">
            {/* Specialty */}
            <BookingFilterSelect label="Select a specialty" />

            {/* City */}
            <BookingFilterSelect label="Choose city" />

            {/* Area */}
            <BookingFilterSelect label="Choose area" />

            {/* Search */}
            <div className="col-md-3 p-0 d-flex">
              <div className="border p-2 bg-light w-100">
                <input
                  type="text"
                  className="form-control border-0 bg-light"
                  placeholder="Doctor name or hospital"
                  aria-label="Doctor name or hospital"
                />
              </div>
              <button
                className="btn btn-danger rounded-0 rounded-end-3 px-5"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Booking;
