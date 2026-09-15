import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import BookingForm from "./BookingForm.jsx";

describe("BookingForm", () => {
  test("renders the Choose date label", () => {
    const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    const dispatch = vi.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    );

    const dateLabel = screen.getByText("Choose date");

    expect(dateLabel).toBeInTheDocument();
  });
});