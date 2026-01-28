import React from "react";
import { Card } from "primereact/card";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="header-bold mb-3 dark:text-white">DashBoard</div>
      <div className="dashboard-cards block md:flex gap-5">
        <Card
          className="mb-5 md:mb-0 flex dark:bg-gray-700!"
          pt={{
            body: { className: "bg-white rounded-3xl dark:bg-gray-700" },
            content: { className: "p-0! flex flex-col gap-3" },
          }}
        >
          <p className="card-sm-text dark:text-gray-400">State Bank of India</p>
          <p className="card-text-bold dark:text-white">50000 Rs /-</p>
        </Card>

        <Card
          className="flex dark:bg-gray-700!"
          pt={{
            body: { className: "bg-white rounded-3xl dark:bg-gray-700" },
            content: { className: "p-0! flex flex-col gap-3" },
          }}
        >
          <p className="card-sm-text dark:text-gray-400">The Indian Bank</p>
          <p className="card-text-bold dark:text-white">50000 Rs /-</p>
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
