import React, { useEffect, useState } from "react";
import { BusEstimate, Status } from "lib/types";
import BusCard from "./components/BusCard";
import Header from "./components/Header";

const Popup: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>();
  const [busEstimates, setBusEstimates] = useState<BusEstimate[]>();

  useEffect(() => {
    const update = async () => {
      try {
        const { estimates, time }: Status = await browser.runtime.sendMessage(
          "update"
        );
        setBusEstimates(estimates);
        setCurrentTime(time);
      } catch (error) {
        console.error(error);
      }
    };
    update();
    const intervalId = setInterval(update, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-[320] h-[480]">
      <Header time={currentTime} classNames="h-[10%]"/>
      <div className="flex flex-col h-4/5 overflow-y-scroll">
        {busEstimates && busEstimates.length > 0
          ? busEstimates.map((estimate, index) => (
              <BusCard key={index} estimate={estimate} />
            ))
          : "No schedule available"}
      </div>
    </div>
  );
};

export default Popup;
