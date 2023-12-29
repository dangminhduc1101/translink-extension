import { StopEstimate } from "lib/types";
import API from "./api.json"

export default {
  getStopEstimates: async (
    stopId: number,
    timeframe: number
  ): Promise<StopEstimate[] | null> => {
    try {
      const response = await fetch(
        `https://api.translink.ca/rttiapi/v1/stops/${stopId}/estimates?apikey=${API.key}&timeframe=${timeframe}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error(response.statusText);
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};