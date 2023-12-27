import React from "react";

interface HeaderProps {
  time: string;
  classNames?: string;
}

const Header: React.FC<HeaderProps> = ({time, classNames}: HeaderProps) => {
  const styles = `${classNames} flex justify-between items-center mt-1 mx-2 p-2`
  const path = new URL("~/src/assets/icons/translink.svg", import.meta.url).toString();
  return (
    <div className={styles}>
      <img src={path} style={{ height: "120%", objectFit: "cover" }} />
      <div className="text-3xl font-bold">{time}</div>
    </div>
  );
};

export default Header;
