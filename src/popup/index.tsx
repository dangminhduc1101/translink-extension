import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { BusEstimate } from "../types";
import BusCard from "./components/BusCard";

const Popup: React.FC = () => {
  const currentTime: Dayjs = dayjs();
  const [busEstimates, setBusEstimates] = useState<BusEstimate[]>([]);

  useEffect(() => {
    browser.runtime
      .sendMessage({ action: "get-bus-estimates" })
      .then((response) => {
        setBusEstimates(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="text-center font-bold text-2xl py-5 bg-gray-800 text-neutral-200 flex justify-center">
        <div className="flex">
          <div className="self-center mr-8">
            <img
              src="/translink.jpg"
              className="w-14 h-14"
              alt="Translink Logo"
            />
          </div>
          <div className="self-center">{currentTime.format("hh:mm:ss a")}</div>
        </div>
      </div>

      <div className="bg-gray-800 min-h-screen text-gray-100 flex justify-center">
        <div className="max-w-5xl w-full">
          <div>
            {busEstimates && busEstimates.length > 0
              ? busEstimates.map((estimate, index) => (
                  <BusCard key={index} estimate={estimate} />
                ))
              : "No schedule available"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
