import { BusEstimate, StopEstimate, Schedule } from "../types";
import API from "./api.json";

let busEstimates: BusEstimate[] = [];

const getStopEstimates = async (
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
};

const toBusEstimates = (data: StopEstimate[] | null): BusEstimate[] =>
  data
    ? data.flatMap((estimate: StopEstimate) =>
        estimate.Schedules.map((schedule: Schedule) => ({
          Schedule: schedule,
          RouteNo: estimate.RouteNo,
          RouteName: estimate.RouteName,
        }))
      )
    : [];

const updateBusEstimates: () => Promise<void> = (async () => {
  busEstimates = toBusEstimates(await getStopEstimates(51862, 240));
})

browser.runtime.onInstalled.addListener(() => {
  updateBusEstimates();
});

browser.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.action == "get-bus-estimates") {
    sendResponse(busEstimates);
  }
});
