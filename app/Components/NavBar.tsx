"use client";

import { useRef } from "react";
import { Menu } from "primereact/menu";
import { Avatar } from "primereact/avatar";

export default function Navbar() {
  const menu = useRef<Menu>(null);

  const menuItems = [
    {
      label: "DashBoard",
      url: "/",
      icon: "pi pi-home",
      hoverImage: "/images/mm-hover1.svg",
    },

    {
      label: "Transactions",
      icon: "pi pi-book",
      hoverImage: "/images/mm-hover2.svg",
      children: [
        { label: "Academics", url: "/courses/primary", icon: "pi pi-send" },
        {
          label: "Arts & Creativity",
          url: "/courses/secondary",
          icon: "pi pi-star",
        },
        {
          label: "Athletics",
          url: "/courses/sports",
          icon: "pi pi-chart-bar",
        },
      ],
    },

    {
      label: "Budgets",
      url: "/admissions",
      icon: "pi pi-id-card",
      hoverImage: "/images/mm-hover3.svg",
      children: [
        { label: "Academics", url: "/courses/primary", icon: "pi pi-send" },
        {
          label: "Arts & Creativity",
          url: "/courses/secondary",
          icon: "pi pi-star",
        },
        {
          label: "Athletics",
          url: "/courses/sports",
          icon: "pi pi-chart-bar",
        },
      ],
    },

    {
      label: "Reports",
      url: "/Admissions",
      icon: "pi pi-users",
      hoverImage: "/images/mm-hover4.svg",
    },

    {
      label: "Accounts",
      url: "/contact",
      icon: "pi pi-envelope",
      hoverImage: "/images/mm-hover5.svg",
      children: [
        { label: "Academics", url: "/courses/primary", icon: "pi pi-send" },
        {
          label: "Arts & Creativity",
          url: "/courses/secondary",
          icon: "pi pi-star",
        },
        {
          label: "Athletics",
          url: "/courses/sports",
          icon: "pi pi-chart-bar",
        },
      ],
    },
  ];

  const profileMenu = [
    {
      label: "Logout",
      icon: "pi pi-sign-out",
    },
  ];

  return (
    <>
      <div className="container z-9999 max-w-370">
        <div className="headerUtilitybar "></div>
        <nav className="w-full bg-white shadow-md px-4 flex items-center justify-between rounded-t-2xl">
          {/* Logo */}
          <div className="flex items-center h-20">
            <div className=" flex items-center justify-center top-0 z-50">
              <a href="/" title="logo">
                <img src="/images/logo.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="w-2/4 header-menu h-20 justify-around items-center flex">
            <div className="hidden menu-items h-full md:flex items-center gap-10">
              {menuItems.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="relative group cursor-pointer flex items-center h-full nav-item"
                  >
                    {/* Parent Menu Item */}
                    {item.children ? (
                      <div className="nav-parent flex items-center h-full gap-2">
                        <span className="hover:text-[#6ca643] text-[#757782] text-lg font-bold">
                          {item.label}
                        </span>
                      </div>
                    ) : (
                      <a
                        href={item.url}
                        className="nav-parent flex items-center h-full gap-2"
                      >
                        <span className="hover:text-[#6ca643] text-[#757782] text-lg font-bold">
                          {item.label}
                        </span>
                      </a>
                    )}

                    {/* Dropdown */}
                    {item.children && (
                      <div className="absolute left-0 top-full w-56 bg-white shadow-lg hidden group-hover:block z-50">
                        {item.children.map((child) => (
                          <div
                            className="border-b border-[#dadbe0]"
                            key={child.label}
                          >
                            <a
                              href={child.url}
                              className="flex items-center gap-2 px-4 py-2 text-[#757782] font-bold hover:bg-gray-100 hover:text-[#6ca643]"
                            >
                              {child.label}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Profile Dropdown (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <Menu model={profileMenu} popup ref={menu} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
