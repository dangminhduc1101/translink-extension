import React, { useEffect, useState } from "react";
import { BusEstimate } from "../../types";

interface BusCardProps {
  estimate: BusEstimate
}

const BusCard: React.FC<BusCardProps> = ({estimate}: BusCardProps) => {
  return (
    <div className="flex justify-between self-center w-full py-2 mx-2">
      <div className="flex">
        <div className="text-2 font-bold">{estimate.RouteNo}</div>
        <div className="mt-2 font-semibold">{estimate.RouteName}</div>
      </div>

      <div className="flex flex-col font-semibold text-2xl ">
        {estimate.Schedule.ExpectedCountdown}
        <div className="text-base text-right">
          {estimate.Schedule.ExpectedLeaveTime}
        </div>
      </div>
    </div>
  );
};

export default BusCard
