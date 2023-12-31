import React, { useEffect, useState } from "react";
import { Status } from "lib/types";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {
  MemoryRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import SettingsPage from "./pages/SettingsPage";
import StatusPage from "./pages/StatusPage";

const Popup: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<Status>();

  useEffect(() => {
    const update = async () => {
      try {
        const status: Status = await browser.runtime.sendMessage("update");
        setCurrentStatus(status);
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
      {currentStatus === undefined ? (
        <StatusPage text="Loading" />
      ) : (
        <React.Fragment>
          <Header time={currentStatus.time} classNames="h-[10%] mt-1" />
          <MemoryRouter>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<Navigate to="/schedule"/>}/>
                <Route
                  path="schedule"
                  element={
                    <SchedulePage
                      estimates={currentStatus.estimates}
                      classNames="h-4/5"
                    />
                  }
                />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="error" element={<Outlet />}>
                  <Route path="no-schedule" />
                  <Route path="no-network" />
                  <Route path="no-api-key" />
                </Route>
              </Route>
            </Routes>
            <NavigationBar classNames="h-[10%] mb-1" />
          </MemoryRouter>
        </React.Fragment>
      )}
    </div>
  );
};

export default Popup;
