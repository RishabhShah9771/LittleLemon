import {
  cleanup,
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

import Main from "./Main.jsx";

describe("Main", () => {
  beforeEach(() => {
    window.fetchAPI = vi.fn(() => [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  test("renders the booking page", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Main />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Reserve a Table")
    ).toBeInTheDocument();
  });

  test("displays available booking times", async () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Main />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(window.fetchAPI).toHaveBeenCalled();
    });

    expect(
      screen.getByRole("option", {
        name: "17:00",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "22:00",
      })
    ).toBeInTheDocument();
  });
});