import { describe, expect, test } from "vitest";

import {
  initializeTimes,
  updateTimes,
} from "./Main.jsx";

describe("Booking available times", () => {
  test("initializeTimes returns the expected available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    const result = initializeTimes();

    expect(result).toEqual(expectedTimes);
  });

  test("updateTimes returns the same state provided to it", () => {
    const currentState = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    const action = {
      type: "UPDATE_TIMES",
      date: "2026-09-20",
    };

    const result = updateTimes(
      currentState,
      action
    );

    expect(result).toEqual(currentState);
  });
});