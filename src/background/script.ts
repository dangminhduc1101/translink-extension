import { BusEstimate, Status } from "lib/types";
import Translink from "lib/translink"
import Utils from "lib/utils"

let status: Status = {
  estimates: null,
  time: null
};

async function updateEstimates(): Promise<void> {
  status.estimates = Utils.parseBusEstimates(await Translink.getStopEstimates(51862, 120));
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
