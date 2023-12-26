import React from "react";
import { BusEstimate } from "types";

interface BusCardProps {
  estimate: BusEstimate
}

const BusCard: React.FC<BusCardProps> = ({estimate}: BusCardProps) => {
  return (
    <div className="flex justify-between self-center h-1/5 w-full py-2 border rounded border-black">
      <div className="flex">
        <div className="font-bold">{estimate.RouteNo}</div>
        <div className="font-semibold">{estimate.RouteName}</div>
      </div>
      <div className="flex flex-col font-semibold">
        {estimate.Schedule.ExpectedCountdown + "|"}
        {estimate.Schedule.ExpectedLeaveTime}
      </div>
    </div>
  );
};

export default BusCard
