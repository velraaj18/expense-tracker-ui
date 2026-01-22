"use client";

import React, { useState } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { MenuItem } from "primereact/menuitem";
import { MenuItemOptions } from "primereact/menuitem";
import { Badge } from "primereact/badge";

interface NavMenuItem extends MenuItem {
  badge?: number | string;
}

export default function ExpenseTrackerNav() {
  const [activeView, setActiveView] = useState("dashboard");

  const itemRenderer = (item:NavMenuItem , options: MenuItemOptions) => (        
    <a className="flex align-items-center px-3 py-2 cursor-pointer " onClick={options.onClick}>
      <span className={`${item.icon} text-[#B0A4A4] hover:text-white`} />
      <span className="mx-2 text-[14px]">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );

  const items: NavMenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      template: itemRenderer,
      command: () => setActiveView("dashboard"),
    },
    {
      label: "Transactions",
      icon: "pi pi-wallet",
      template: itemRenderer,
      items: [
        {
          label: "All Transactions",
          icon: "pi pi-list",
          template: itemRenderer,
          command: () => setActiveView("transactions-all"),
        },
        {
          label: "Add Transaction",
          icon: "pi pi-plus",
          template: itemRenderer,
          command: () => setActiveView("transactions-add"),
        },
      ],
    },
    {
      label: "Budgets",
      icon: "pi pi-chart-pie",
      template: itemRenderer,
      command: () => setActiveView("budgets"),
    },
    {
      label: "Reports",
      icon: "pi pi-chart-bar",
      template: itemRenderer,
      items: [
        {
          label: "Expense Report",
          icon: "pi pi-arrow-down",
          template: itemRenderer,
          command: () => setActiveView("reports-expense"),
        },
        {
          label: "Income Report",
          icon: "pi pi-arrow-up",
          template: itemRenderer,
          command: () => setActiveView("reports-income"),
        },
      ],
    },
    {
      label: "Accounts",
      icon: "pi pi-briefcase",
      template: itemRenderer,
      items: [
        {
          label: "Bank Accounts",
          icon: "pi pi-building",
          template: itemRenderer,
          command: () => setActiveView("accounts-bank"),
        },
        {
          label: "Cash Wallet",
          icon: "pi pi-money-bill",
          template: itemRenderer,
          command: () => setActiveView("accounts-cash"),
        },
      ],
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      template: itemRenderer,
      items: [
        {
          label: "Profile",
          icon: "pi pi-user",
          template: itemRenderer,
          command: () => setActiveView("settings-profile"),
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          template: itemRenderer,
          command: () => console.log("logout"),
        },
      ],
    },
  ];

  const renderContent = () => {
    if (activeView === "dashboard") return <div>Dashboard Overview</div>;
    if (activeView === "transactions-all") return <div>All Transactions</div>;
    if (activeView === "transactions-add") return <div>Add Transaction</div>;
    if (activeView === "budgets") return <div>Budgets</div>;
    if (activeView === "reports-expense") return <div>Expense Report</div>;
    if (activeView === "reports-income") return <div>Income Report</div>;
    if (activeView === "accounts-bank") return <div>Bank Accounts</div>;
    if (activeView === "accounts-cash") return <div>Cash Wallet</div>;
    if (activeView === "settings-profile") return <div>User Profile</div>;
    return null;
  };

  return (
    <div className="flex h-screen">
      <PanelMenu model={items} className="w-50 md:w-60" pt={
        {headerContent : {className : "!bg-black !border-0 !text-[#B0A4A4] hover:!bg-gray-800 hover:!text-white"}}
      } />
      {/* <div className="flex-1 p-4">{renderContent()}</div> */}
    </div>
  );
}
