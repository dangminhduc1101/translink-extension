import API from "./api.json";

let busSchedule: any = null;

const getBusData = async (): Promise<any | null> => {
  try {
    const response = await fetch(
      `https://api.translink.ca/rttiapi/v1/stops/51862/estimates?apikey=${API.key}&timeframe=120`,
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

const parseBusSchedule = (data: any): Array<any> =>
  data.flatMap((bus: any) =>
    bus.Schedules.map((schedule: any) => ({
      ...schedule,
      RouteNo: bus.RouteNo,
      RouteName: bus.RouteName,
    }))
  );

browser.runtime.onInstalled.addListener(() => {
  (async () => {
    const result = await getBusData();
    if (result) {
      busSchedule = parseBusSchedule(result);
    }
  })()
});

browser.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type == "get-schedule") {
    sendResponse(busSchedule);
  }
});

