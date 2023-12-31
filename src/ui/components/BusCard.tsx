import React from "react";
import { BusEstimate } from "lib/types";

interface BusCardProps {
  classNames?: string;
  estimate: BusEstimate;
}

const BusCard: React.FC<BusCardProps> = ({
  classNames, estimate
}: BusCardProps) => {
  const { RouteNo, RouteName, Schedule } = estimate;
  const styles = `${classNames} flex justify-between items-center p-2 border-2 rounded-md border-black`;
  return (
    <div className={styles}>
      <div className="flex flex-col text-left">
        <p className="text-xl font-semibold">{RouteNo}</p>
        <p className="text-sm">{RouteName}</p>
      </div>
      <div className="flex flex-col text-right">
        <p className="text-xl font-semibold">{Schedule.ExpectedCountdown}</p>
        <p className="text-sm">{Schedule.ExpectedLeaveTime}</p>
      </div>
    </div>
  );
};

export default BusCard;
