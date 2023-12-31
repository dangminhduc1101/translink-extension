import React, { useEffect, useState } from "react";
import { BusEstimate, Status } from "lib/types";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {
  MemoryRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BusPage from "./pages/BusPage";
import SettingsPage from "./pages/SettingsPage";

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
      <Header time={currentTime} classNames="h-[10%] mt-1" />
      {busEstimates !== undefined ? (
        <MemoryRouter>
          <Routes>
            <Route index element={<Navigate to="/schedule" />} />
            <Route
              path="/schedule"
              element={
                busEstimates !== null ? (
                  <BusPage estimates={busEstimates} classNames="h-4/5" />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route path="/error" element="Error" />
            <Route path="/settings" element={<SettingsPage/>} />
          </Routes>
          <NavigationBar classNames="h-[10%] mb-1" />
        </MemoryRouter>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Popup;
