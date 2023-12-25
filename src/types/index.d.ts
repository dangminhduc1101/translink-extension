export interface StopEstimate {
  RouteNo: string;
  RouteName: string;
  Schedules: Schedule[];
}

export interface Schedule {
  Destination: string;
  ExpectedLeaveTime: string;
  ExpectedCountdown: number;
  ScheduleStatus: string;
  CancelledTrip: boolean;
  CancelledStop: boolean;
  LastUpdate: string;
}

export interface BusEstimate {
  RouteNo: string;
  RouteName: string;
  Schedule: Schedule
}
