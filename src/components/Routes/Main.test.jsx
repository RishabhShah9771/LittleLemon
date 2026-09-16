import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import {
  MemoryRouter,
} from "react-router-dom";

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


const mockTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];


beforeEach(() => {
  localStorage.clear();

  window.fetchAPI = vi.fn(() => mockTimes);

  window.submitAPI = vi.fn(() => true);
});


afterEach(() => {
  cleanup();

  vi.clearAllMocks();
});


describe("Booking available times", () => {
  test(
    "initializeTimes returns available booking times",
    () => {
      const result = initializeTimes();

      expect(result).toEqual(mockTimes);

      expect(result.length).toBeGreaterThan(0);

      expect(
        window.fetchAPI
      ).toHaveBeenCalledTimes(1);

      expect(
        window.fetchAPI
      ).toHaveBeenCalledWith(
        expect.any(Date)
      );
    }
  );


  test(
    "updateTimes returns available times for selected date",
    () => {
      const result = updateTimes(
        [],
        {
          type: "DATE_CHANGE",
          date: "2030-09-20",
        }
      );

      expect(result).toEqual(mockTimes);

      expect(
        window.fetchAPI
      ).toHaveBeenCalledTimes(1);

      expect(
        window.fetchAPI
      ).toHaveBeenCalledWith(
        expect.any(Date)
      );
    }
  );


  test(
    "updateTimes returns current state for unknown action",
    () => {
      const currentState = [
        "17:00",
        "18:00",
      ];

      const result = updateTimes(
        currentState,
        {
          type: "UNKNOWN",
        }
      );

      expect(result).toEqual(
        currentState
      );
    }
  );
});


describe("Main", () => {
  test(
    "shows login message when user is not logged in",
    () => {
      render(
        <MemoryRouter
          initialEntries={["/booking"]}
        >
          <Main
            isLoggedIn={false}
            setIsLoggedIn={vi.fn()}
          />
        </MemoryRouter>
      );

      expect(
        screen.getByText(
          /please login to reserve a table/i
        )
      ).toBeInTheDocument();

      expect(
        screen.getByRole("link", {
          name: /login/i,
        })
      ).toBeInTheDocument();
    }
  );


  test(
    "shows booking form when user is logged in",
    () => {
      render(
        <MemoryRouter
          initialEntries={["/booking"]}
        >
          <Main
            isLoggedIn={true}
            setIsLoggedIn={vi.fn()}
          />
        </MemoryRouter>
      );

      expect(
        screen.getByLabelText(
          "Choose date"
        )
      ).toBeInTheDocument();

      expect(
        screen.getByLabelText(
          "Choose time"
        )
      ).toBeInTheDocument();

      expect(
        screen.getByLabelText(
          "Number of guests"
        )
      ).toBeInTheDocument();

      expect(
        screen.getByLabelText(
          "Occasion"
        )
      ).toBeInTheDocument();
    }
  );


  test(
    "writes a successful booking to localStorage",
    () => {
      render(
        <MemoryRouter
          initialEntries={["/booking"]}
        >
          <Main
            isLoggedIn={true}
            setIsLoggedIn={vi.fn()}
          />
        </MemoryRouter>
      );


      fireEvent.change(
        screen.getByLabelText(
          "Choose date"
        ),
        {
          target: {
            value: "2030-09-20",
          },
        }
      );


      fireEvent.change(
        screen.getByLabelText(
          "Choose time"
        ),
        {
          target: {
            value: "17:00",
          },
        }
      );


      fireEvent.change(
        screen.getByLabelText(
          "Number of guests"
        ),
        {
          target: {
            value: "2",
          },
        }
      );


      fireEvent.change(
        screen.getByLabelText(
          "Occasion"
        ),
        {
          target: {
            value: "Birthday",
          },
        }
      );


      const submitButton =
        screen.getByRole(
          "button",
          {
            name: /make your reservation/i,
          }
        );


      expect(
        submitButton
      ).not.toBeDisabled();


      fireEvent.click(
        submitButton
      );


      expect(
        window.submitAPI
      ).toHaveBeenCalledTimes(1);


      const savedBookings =
        JSON.parse(
          localStorage.getItem(
            "bookingData"
          )
        );


      expect(
        savedBookings
      ).toHaveLength(1);


      expect(
        savedBookings[0]
      ).toMatchObject({
        date: "2030-09-20",
        time: "17:00",
        occasion: "Birthday",
      });


      expect(
        Number(
          savedBookings[0].guests
        )
      ).toBe(2);
    }
  );
});