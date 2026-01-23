"use client";

import React, { useState, useEffect } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { MenuItem } from "primereact/menuitem";
import { MenuItemOptions } from "primereact/menuitem";
import { Badge } from "primereact/badge";
import "@/app/css/navbar.css";

interface NavMenuItem extends MenuItem {
  badge?: number | string;
}

export default function ExpenseTrackerNav() {
  const itemRenderer = (item: NavMenuItem, options: MenuItemOptions) => (
    <a
      className="flex align-items-center px-3 py-2 cursor-pointer "
      onClick={options.onClick}
    >
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
        },
        {
          label: "Add Transaction",
          icon: "pi pi-plus",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Budgets",
      icon: "pi pi-chart-pie",
      template: itemRenderer,
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
        },
        {
          label: "Income Report",
          icon: "pi pi-arrow-up",
          template: itemRenderer,
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
        },
        {
          label: "Cash Wallet",
          icon: "pi pi-money-bill",
          template: itemRenderer,
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

  const DARK_KEY = "expense-tracker-theme";

  const applyTheme = (isDark: boolean) => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem(DARK_KEY, isDark ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem(DARK_KEY);
    applyTheme(saved === "dark");
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    applyTheme(!isDark);
  };

  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-60 ">
        {/* MAIN MENU */}
        <PanelMenu
          model={items}
          className="flex-1 overflow-auto border-0"
          pt={{
            headerContent: {
              className:
                "!bg-black !border-0 text-[#B0A4A4] hover:!bg-gray-700 hover:!text-white",
            },
            menuContent: { className: "!border-0 !bg-transparent" },
          }}
        />

        {/* SETTINGS (BOTTOM) */}
        <div className="border-t border-gray-700 p-2">
          <button
            onClick={toggleDarkMode}
            className="flex items-center w-full px-3 py-2 text-sm text-[#B0A4A4] hover:bg-gray-700 hover:text-white rounded"
          >
            <i className={`pi ${isDark ? "pi-sun" : "pi-moon"} mr-2`} />
            {isDark ? "Light Mode" : "Dark Mode"}
            Dark Mode
          </button>

          <button
            onClick={() => console.log("logout")}
            className="flex items-center w-full px-3 py-2 text-sm text-[#B0A4A4] hover:bg-gray-700 hover:text-white rounded"
          >
            <i className="pi pi-sign-out mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
