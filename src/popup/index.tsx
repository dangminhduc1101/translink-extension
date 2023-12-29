import React, { useEffect, useState } from "react";
import { BusEstimate, Status } from "lib/types";
import BusCard from "./components/BusCard";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

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
    <div className="flex flex-col justify-between w-[320] h-[480]">
      <Header time={currentTime} classNames="h-[10%] mt-1 mx-2"/>
      <div className="flex flex-col overflow-y-scroll h-4/5">
        {busEstimates && busEstimates.length > 0
          ? busEstimates.map((estimate, index) => (
              <BusCard key={index} estimate={estimate} classNames="h-[calc(20%-0.5rem)] mx-2 my-1"/>
            ))
          : "No schedule available"}
      </div>
      <NavigationBar classNames="h-[10%] mb-1"/>
    </div>
  );
};

export default Popup;
