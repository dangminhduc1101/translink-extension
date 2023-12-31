import React from "react";
import Icons from "lib/icons";

interface HeaderProps {
  time: string;
  classNames?: string;
}

const Header: React.FC<HeaderProps> = ({ time, classNames }: HeaderProps) => {
  const styles = `${classNames} flex justify-between items-center py-2 px-4`;
  return (
    <div className={styles}>
      <a href="https://www.translink.ca" style={{ height: "100%" }}>
        <img src={Icons.Logo} style={{ height: "100%" }}/>
      </a>
      <p className="text-2xl font-bold">{time}</p>
    </div>
  );
};

export default Header;
