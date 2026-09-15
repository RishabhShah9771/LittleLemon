import {
  cleanup,
  fireEvent,
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

import BookingForm, {
  validateDate,
  validateGuests,
  validateOccasion,
  validateTime,
} from "./BookingForm.jsx";

describe("BookingForm", () => {
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const onDateChange = vi.fn();
  const submitForm = vi.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    vi.clearAllMocks();
  });

  function renderBookingForm() {
    render(
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        submitForm={submitForm}
      />
    );
  }

  describe("HTML5 validation", () => {
    test("date input has required and min attributes", () => {
      renderBookingForm();

      const dateInput =
        screen.getByLabelText(
          "Choose date"
        );

      expect(
        dateInput
      ).toBeRequired();

      expect(
        dateInput
      ).toHaveAttribute("min");
    });

    test("time input is required", () => {
      renderBookingForm();

      const timeInput =
        screen.getByLabelText(
          "Choose time"
        );

      expect(
        timeInput
      ).toBeRequired();
    });

    test("number of guests has correct validation attributes", () => {
      renderBookingForm();

      const guestsInput =
        screen.getByLabelText(
          "Number of guests"
        );

      expect(
        guestsInput
      ).toBeRequired();

      expect(
        guestsInput
      ).toHaveAttribute(
        "min",
        "1"
      );

      expect(
        guestsInput
      ).toHaveAttribute(
        "max",
        "10"
      );

      expect(
        guestsInput
      ).toHaveAttribute(
        "step",
        "1"
      );
    });

    test("occasion input is required", () => {
      renderBookingForm();

      const occasionInput =
        screen.getByLabelText(
          "Occasion"
        );

      expect(
        occasionInput
      ).toBeRequired();
    });
  });

  describe("JavaScript validation", () => {
    test("validateDate returns true for a valid date", () => {
      expect(
        validateDate(
          "2026-09-20",
          "2026-09-15"
        )
      ).toBe(true);
    });

    test("validateDate returns false for an invalid date", () => {
      expect(
        validateDate(
          "2026-09-10",
          "2026-09-15"
        )
      ).toBe(false);
    });

    test("validateDate returns false when date is empty", () => {
      expect(
        validateDate(
          "",
          "2026-09-15"
        )
      ).toBe(false);
    });

    test("validateTime returns true for an available time", () => {
      expect(
        validateTime(
          "18:00",
          availableTimes
        )
      ).toBe(true);
    });

    test("validateTime returns false for an unavailable time", () => {
      expect(
        validateTime(
          "22:00",
          availableTimes
        )
      ).toBe(false);
    });

    test("validateGuests returns true for a valid number of guests", () => {
      expect(
        validateGuests(4)
      ).toBe(true);
    });

    test("validateGuests returns false when guests are below minimum", () => {
      expect(
        validateGuests(0)
      ).toBe(false);
    });

    test("validateGuests returns false when guests exceed maximum", () => {
      expect(
        validateGuests(11)
      ).toBe(false);
    });

    test("validateOccasion returns true when occasion is selected", () => {
      expect(
        validateOccasion(
          "Birthday"
        )
      ).toBe(true);
    });

    test("validateOccasion returns false when occasion is empty", () => {
      expect(
        validateOccasion("")
      ).toBe(false);
    });
  });

  describe("form validation behavior", () => {
    test("submit button is disabled when form is invalid", () => {
      renderBookingForm();

      const submitButton =
        screen.getByRole(
          "button",
          {
            name: "Make Your Reservation",
          }
        );

      expect(
        submitButton
      ).toBeDisabled();
    });

    test("submit button becomes enabled when all fields are valid", () => {
      renderBookingForm();

      const dateInput =
        screen.getByLabelText(
          "Choose date"
        );

      const timeInput =
        screen.getByLabelText(
          "Choose time"
        );

      const guestsInput =
        screen.getByLabelText(
          "Number of guests"
        );

      const occasionInput =
        screen.getByLabelText(
          "Occasion"
        );

      fireEvent.change(
        dateInput,
        {
          target: {
            value: "2030-09-20",
          },
        }
      );

      fireEvent.change(
        timeInput,
        {
          target: {
            value: "18:00",
          },
        }
      );

      fireEvent.change(
        guestsInput,
        {
          target: {
            value: "4",
          },
        }
      );

      fireEvent.change(
        occasionInput,
        {
          target: {
            value: "Birthday",
          },
        }
      );

      expect(
        screen.getByRole(
          "button",
          {
            name: "Make Your Reservation",
          }
        )
      ).toBeEnabled();
    });
  });
});