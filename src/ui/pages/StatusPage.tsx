import React from "react";

interface StatusPageProps {
  classNames?: string;
  text: string;
}

const StatusPage: React.FC<StatusPageProps> = ({
  classNames,
  text
}: StatusPageProps) => {
  const styles = `${classNames} flex flex-col overflow-y-scroll`;
  return (
    <div className={styles}>
      
    </div>
  );
};

export default StatusPage;