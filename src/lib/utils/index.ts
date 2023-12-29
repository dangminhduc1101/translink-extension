import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
dayjs.extend(customParseFormat);
dayjs.extend(duration);

import { BusEstimate, StopEstimate, Schedule } from "lib/types";

export default {
  getCurrentTime: (): string => dayjs().format("h:mm A"),
  parseBusEstimates: (
    data: StopEstimate[] | null,
    timeframe: number
  ): BusEstimate[] =>
    data
      ? data
          .flatMap((estimate: StopEstimate) =>
            estimate.Schedules.map((schedule: Schedule) => {
              const update = dayjs(schedule.LastUpdate, "hh:mm:ss a");
              const leave = dayjs(schedule.ExpectedLeaveTime, "h:mma");
              let countdown = Math.min(
                schedule.ExpectedCountdown as number,
                Math.round(dayjs.duration(leave.diff(dayjs())).as("m"))
              );
              if (Math.abs(countdown) > timeframe) {
                countdown += 24 * 60;
              }
              return {
                Schedule: {
                  Destination: schedule.Destination,
                  ScheduleStatus: schedule.ScheduleStatus,
                  CancelledTrip: schedule.CancelledTrip,
                  CancelledStop: schedule.CancelledStop,
                  LastUpdate: update.format("h:mm A"),
                  ExpectedLeaveTime: leave.format("h:mm A"),
                  ExpectedCountdown: countdown,
                },
                RouteNo: estimate.RouteNo,
                RouteName: estimate.RouteName,
              };
            })
          )
          .sort(
            (a, b) =>
              a.Schedule.ExpectedCountdown - b.Schedule.ExpectedCountdown
          )
          .map((estimate: BusEstimate) => {
            let countdown: number | string = estimate.Schedule
              .ExpectedCountdown as number;
            if (countdown < 0) {
              countdown = `${Math.abs(countdown)}m ago`;
            } else if (countdown < 1) {
              countdown = "now";
            } else if (countdown < 60) {
              countdown = `${countdown}m`;
            } else {
              const hours = Math.floor(countdown / 60);
              const minutes = countdown % 60;
              countdown = `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
            }
            estimate.Schedule.ExpectedCountdown = countdown;
            return estimate;
          })
      : [],
};
