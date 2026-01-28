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
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const DARK_KEY = "expense-tracker-theme";

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    dark ? html.classList.add("dark") : html.classList.remove("dark");
    localStorage.setItem(DARK_KEY, dark ? "dark" : "light");
    setIsDark(dark);
  };

  useEffect(() => {
    const saved = localStorage.getItem(DARK_KEY);
    applyTheme(saved === "dark");
  }, []);

  const toggleDarkMode = () => applyTheme(!isDark);

  const itemRenderer = (item: NavMenuItem, options: MenuItemOptions) => (
    <a
      className="flex items-center px-3 py-2 text-sm cursor-pointer text-[#B0A4A4] hover:bg-gray-700 hover:text-white rounded"
      onClick={options.onClick}
    >
      <span className={`${item.icon} mr-2`} />
      <span>{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );

  const items: NavMenuItem[] = [
    { label: "Dashboard", icon: "pi pi-home", template: itemRenderer },
    {
      label: "Transactions",
      icon: "pi pi-wallet",
      template: itemRenderer,
      items: [
        { label: "All Transactions", icon: "pi pi-list", template: itemRenderer },
        { label: "Add Transaction", icon: "pi pi-plus", template: itemRenderer },
      ],
    },
    { label: "Budgets", icon: "pi pi-chart-pie", template: itemRenderer },
    {
      label: "Reports",
      icon: "pi pi-chart-bar",
      template: itemRenderer,
      items: [
        { label: "Expense Report", icon: "pi pi-arrow-down", template: itemRenderer },
        { label: "Income Report", icon: "pi pi-arrow-up", template: itemRenderer },
      ],
    },
    {
      label: "Accounts",
      icon: "pi pi-briefcase",
      template: itemRenderer,
      items: [
        { label: "Bank Accounts", icon: "pi pi-building", template: itemRenderer },
        { label: "Cash Wallet", icon: "pi pi-money-bill", template: itemRenderer },
      ],
    },
  ];

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between px-4 h-7 bg-black text-white">
        <button onClick={() => setIsSidebarOpen(true)}>
          <i className="pi pi-bars text-xl" />
        </button>
        {/* <span className="font-semibold">Expense Tracker</span> */}
      </div>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static z-50 w-60 bg-black text-white
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full justify-between">
          {/* MENU */}
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

          {/* BOTTOM ACTIONS */}
          <div className="border-t border-gray-700 p-2">
            <button
              onClick={toggleDarkMode}
              className="flex items-center w-full px-3 py-2 text-sm text-[#B0A4A4] hover:bg-gray-700 hover:text-white rounded"
            >
              <i className={`pi ${isDark ? "pi-sun" : "pi-moon"} mr-2`} />
              {isDark ? "Light Mode" : "Dark Mode"}
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
      </aside>
    </>
  );
}
