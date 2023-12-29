import { BusEstimate, Status, StopEstimate } from "lib/types";
import Translink from "lib/translink"
import Utils from "lib/utils"

const timeframe: number = 300;

let status: Status = {
  estimates: null,
  time: null
};

async function updateEstimates(): Promise<void> {
  status.estimates = Utils.parseBusEstimates(await Translink.getStopEstimates(51862, timeframe), timeframe);
}
updateEstimates();
setInterval(updateEstimates, 3 * 60 * 1000);

function updateTime(): void {
  status.time = Utils.getCurrentTime();
}
updateTime();
setInterval(updateTime, 60 * 1000);

browser.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message === "update") {
    sendResponse(status);
  }
});
