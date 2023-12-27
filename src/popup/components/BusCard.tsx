import React from "react";
import { BusEstimate } from "lib/types";

interface BusCardProps {
  estimate: BusEstimate;
  classNames?: string;
}

const BusCard: React.FC<BusCardProps> = ({
  estimate,
  classNames,
}: BusCardProps) => {
  const { RouteNo, RouteName, Schedule } = estimate;
  const styles = `${classNames} flex justify-between items-center h-[calc(20%-0.5rem)] mx-2 my-1 p-2 border-2 rounded-md border-black`;
  return (
    <div className={styles}>
      <div className="flex flex-col text-left">
        <div className="text-xl font-semibold">{RouteNo}</div>
        <div className="text-sm">{RouteName}</div>
      </div>
      <div className="flex flex-col text-right">
        <div className="text-xl font-semibold">{Schedule.ExpectedCountdown}</div>
        <div className="text-sm">{Schedule.ExpectedLeaveTime}</div>
      </div>
    </div>
  );
};

export default BusCard;
