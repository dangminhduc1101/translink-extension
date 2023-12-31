import { BusEstimate } from "lib/types";
import BusCard from "ui/components/BusCard";
import React from "react";
import { Navigate } from "react-router-dom";

interface SchedulePageProps {
  classNames?: string;
  estimates: BusEstimate[];
}

const SchedulePage: React.FC<SchedulePageProps> = ({
  classNames,
  estimates,
}: SchedulePageProps) => {
  const styles = `${classNames} flex flex-col overflow-y-scroll`;
  return (
    <div className={styles}>
      {(() => {
        if (estimates === null) {
          return <Navigate to="/error/no-network" />;
        } else if (estimates.length == 0) {
          return <Navigate to="/error/no-schedule" />;
        } else {
          return estimates.map((estimate, index) => (
            <BusCard
              key={index}
              estimate={estimate}
              classNames="h-[calc(20%-0.5rem)] mx-2 my-1"
            />
          ));
        }
      })()}
    </div>
  );
};

export default SchedulePage;
