import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["Booking"],
    // responsible for fetching the data from api
    queryFn: () => getBooking(bookingId),
    // react query try to re-fetch data 3 time if it fails-> to disable it
    retry: false,
  });

  return { isLoading, booking, error };
}
