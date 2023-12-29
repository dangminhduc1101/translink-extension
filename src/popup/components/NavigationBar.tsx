import React from "react";
import Icons from "lib/icons"

interface NavigationBarProps {
  classNames?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  classNames,
}: NavigationBarProps) => {
  const styles = `${classNames} flex justify-around p-1`;
  return (
    <div className={styles}>
      <button className="flex flex-col items-center w-1/2 border-r rounded-md hover:bg-blue-200">
        <img src={Icons.Bus} style={{ height: "100%" }} />
        <p className="text-sm">Schedule</p>
      </button>
      <button className="flex flex-col items-center w-1/2 border-l rounded-md hover:bg-blue-200">
        <img src={Icons.Cog} style={{ height: "100%" }} />
        <p className="text-sm">Settings</p>
      </button>
    </div>
  );
};

export default NavigationBar;
