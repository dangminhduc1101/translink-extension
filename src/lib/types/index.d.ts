export interface StopEstimate {
  RouteNo: string;
  RouteName: string;
  Schedules: Schedule[];
}

export interface Schedule {
  Destination: string;
  ScheduleStatus: string;
  CancelledTrip: boolean;
  CancelledStop: boolean;
  ExpectedLeaveTime: string;
  ExpectedCountdown: number | string;
  LastUpdate: string;
}

export interface BusEstimate {
  RouteNo: string;
  RouteName: string;
  Schedule: Schedule;
}

export interface Status {
  time: string;
  estimates: BusEstimate[];
}
