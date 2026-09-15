import { useEffect } from "react";

function BookingTimesLoader({
  selectedDate,
  setAvailableTimes,
}) {
  useEffect(() => {
    const date = selectedDate
      ? new Date(selectedDate)
      : new Date();

    const times = window.fetchAPI(date);

    setAvailableTimes(times);
  }, [selectedDate, setAvailableTimes]);

  return null;
}

export default BookingTimesLoader;