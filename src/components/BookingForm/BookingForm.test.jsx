import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";

import BookingForm from "./BookingForm.jsx";

describe("BookingForm", () => {
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    vi.clearAllMocks();
  });

  test("renders the Choose date label", () => {
    const onDateChange = vi.fn();
    const submitForm = vi.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        submitForm={submitForm}
      />
    );

    expect(
      screen.getByText("Choose date")
    ).toBeInTheDocument();
  });

  test("reads existing booking data from localStorage", () => {
    const savedBookings = [
      {
        date: "2026-09-20",
        time: "18:00",
        guests: 4,
        occasion: "Birthday",
      },
    ];

    localStorage.setItem(
      "bookingData",
      JSON.stringify(savedBookings)
    );

    const onDateChange = vi.fn();
    const submitForm = vi.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        submitForm={submitForm}
      />
    );

    expect(
      screen.getByText("Your Reservations")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("cell", {
        name: "2026-09-20",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("cell", {
        name: "18:00",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("cell", {
        name: "4",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("cell", {
        name: "Birthday",
      })
    ).toBeInTheDocument();
  });
});