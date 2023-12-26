import { BusEstimate, StopEstimate, Schedule } from "types";
import API from "./api.json";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

let busEstimates: BusEstimate[];
let currentTime: string;

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
          Schedule: {
            Destination: schedule.Destination,
            ScheduleStatus: schedule.ScheduleStatus,
            CancelledTrip: schedule.CancelledTrip,
            CancelledStop: schedule.CancelledStop,
            LastUpdate: dayjs(schedule.LastUpdate, 'hh:mm:ss a').format('h:mm A'),
            ExpectedLeaveTime: dayjs(schedule.ExpectedLeaveTime, 'h:mma YYYY-MM-DD').format('h:mm A'),
            ExpectedCountdown: schedule.ExpectedCountdown,
          },
          RouteNo: estimate.RouteNo,
          RouteName: estimate.RouteName,
        }))
      ).sort((a, b) => a.Schedule.ExpectedCountdown - b.Schedule.ExpectedCountdown)
    : [];

async function updateBusEstimates(): Promise<void> {
  busEstimates = toBusEstimates(await getStopEstimates(51862, 120));
}

function updateCurrentTime(): void {
  currentTime = dayjs().format('h:mm A')
}

browser.runtime.onStartup.addListener(() => {
  updateBusEstimates();
  updateCurrentTime();
});

browser.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message === "status-update") {
    sendResponse({estimates: busEstimates, time: currentTime});
  }
});
