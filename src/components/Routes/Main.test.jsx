import {
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";

import {
  initializeTimes,
  updateTimes,
} from "./Main.jsx";

describe("Booking available times", () => {
  const mockTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
  ];

  beforeEach(() => {
    window.fetchAPI = vi.fn(() => mockTimes);
  });

  test("initializeTimes returns available booking times", () => {
    const result = initializeTimes();

    expect(result).toEqual(mockTimes);

    expect(result.length).toBeGreaterThan(0);

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);

    expect(
      window.fetchAPI
    ).toHaveBeenCalledWith(
      expect.any(Date)
    );
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

  test("updateTimes returns existing state for unknown action", () => {
    const currentState = [
      "17:00",
      "18:00",
    ];

    const action = {
      type: "UNKNOWN",
    };

    const result = updateTimes(
      currentState,
      action
    );

    expect(result).toEqual(currentState);
  });
});