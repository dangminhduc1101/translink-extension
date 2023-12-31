import { BusEstimate } from "lib/types";
import BusCard from "ui/components/BusCard";
import React from "react";

interface BusPageProps {
  estimates: BusEstimate[];
  classNames?: string;
}

const BusPage: React.FC<BusPageProps> = ({
  estimates,
  classNames,
}: BusPageProps) => {
  const styles = `${classNames} flex flex-col overflow-y-scroll`;
  return (
    <div className={styles}>
      {estimates.length > 0
        ? estimates.map((estimate, index) => (
            <BusCard
              key={index}
              estimate={estimate}
              classNames="h-[calc(20%-0.5rem)] mx-2 my-1"
            />
          ))
        : "No schedule available"}
    </div>
  );
};

export default BusPage;
