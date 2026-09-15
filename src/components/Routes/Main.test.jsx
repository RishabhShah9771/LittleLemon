import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";

import Main, {
  initializeTimes,
  updateTimes,
} from "./Main.jsx";

describe("Main", () => {
  const mockTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
  ];

  beforeEach(() => {
    localStorage.clear();

    window.fetchAPI = vi.fn(() => mockTimes);

    window.submitAPI = vi.fn(() => true);
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    vi.clearAllMocks();
  });

  test("initializeTimes returns available booking times", () => {
    const result = initializeTimes();

    expect(result).toEqual(mockTimes);

    expect(result.length).toBeGreaterThan(0);

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  });

  test("updateTimes returns available times for selected date", () => {
    const currentState = [];

    const action = {
      type: "DATE_CHANGE",
      date: "2026-09-20",
    };

    const result = updateTimes(
      currentState,
      action
    );

    expect(result).toEqual(mockTimes);

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);

    expect(
      window.fetchAPI
    ).toHaveBeenCalledWith(
      expect.any(Date)
    );
  });

  test("writes a successful booking to localStorage", async () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Main />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByLabelText("Choose date"),
      {
        target: {
          value: "2026-09-20",
        },
      }
    );

    fireEvent.change(
      screen.getByLabelText("Choose time"),
      {
        target: {
          value: "18:00",
        },
      }
    );

    fireEvent.change(
      screen.getByLabelText("Number of guests"),
      {
        target: {
          value: "4",
        },
      }
    );

    fireEvent.change(
      screen.getByLabelText("Occasion"),
      {
        target: {
          value: "Birthday",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Make Your Reservation",
      })
    );

    await waitFor(() => {
      expect(
        localStorage.getItem("bookingData")
      ).not.toBeNull();
    });

    const savedBookings = JSON.parse(
      localStorage.getItem("bookingData")
    );

    expect(savedBookings).toHaveLength(1);

    expect(savedBookings[0]).toEqual({
      date: "2026-09-20",
      time: "18:00",
      guests: 4,
      occasion: "Birthday",
    });

    expect(window.submitAPI).toHaveBeenCalled();
  });
});