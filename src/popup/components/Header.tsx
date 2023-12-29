import React from "react";
import Icons from "lib/icons";

interface HeaderProps {
  time: string;
  classNames?: string;
}

const Header: React.FC<HeaderProps> = ({ time, classNames }: HeaderProps) => {
  const styles = `${classNames} flex justify-between items-center p-2`;
  return (
    <div className={styles}>
      <img src={Icons.Logo} style={{ height: "120%" }} />
      <p className="text-3xl font-bold">{time}</p>
    </div>
  );
};

export default Header;
