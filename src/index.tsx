import * as React from "react";
import * as ReactDOM from "react-dom/client";

const Text = () => {
  return <p className="font-bold">Okay</p>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Text />
  </React.StrictMode>
);
