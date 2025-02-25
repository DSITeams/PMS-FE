import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import FormSearch from "../FormSearch";
import { Link } from "react-router-dom";

interface MenuItem {
  text: string;
  href?: string;
  submenu?: MenuItem[];
}

interface NavbarItemProps {
  items: MenuItem[];
}

const NavbarItem: React.FC<NavbarItemProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filterNavbarItem = items.filter((item) => {
    const matchesText = item.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesSubmenu =
      item.submenu?.some((navItem) =>
        navItem.text.toLowerCase().includes(searchQuery.toLowerCase())
      ) ?? false;

    return matchesText || matchesSubmenu;
  });

  return (
    <div className="space-y-1 px-2 pt-2 pb-3 shadow-sm">
      <FormSearch placeholder="Search" onSearch={handleSearch} />
      {filterNavbarItem.map((item, index) => (
        <div key={index}>
          {item.submenu ? (
            <div>
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-indigo-50 focus:outline-none"
              >
                <span>{item.text}</span>
                <span>
                  {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              </button>
              {openIndex === index && item.submenu && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.submenu?.map((subItem, subIndex) => (
                    <Link to={subItem.href ?? '#'} key={subIndex} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-indigo-50">{subItem.text}</Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-indigo-50"
            >
              {item.text}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

const MobileMenu = () => {
  const menuData: MenuItem[] = [
    {
      text: "Dashboard",
      href: "#",
    },
    {
      text: "Reception",
      submenu: [
        { text: "Check In", href: "#" },
        { text: "Check Out", href: "#" },
        { text: "Room", href: "#" },
      ],
    },
    {
      text: "Reservation",
      submenu: [
        { text: "New Reservation", href: "#" },
        { text: "All Reservation", href: "#" },
      ],
    },
    {
      text: "Marketing",
      submenu: [
        { text: "Corporate", href: "#" },
        { text: "Travel Agent", href: "#" },
        { text: "Source of Business", href: "#" },
      ],
    },
    {
      text: "Night Audit",
      href: "#",
    },
    {
      text: "Housekeeping",
      submenu: [
        { text: "Room Status", href: "#" },
        { text: "Room Assignment", href: "#" },
      ],
    },
    {
      text: "Tools",
      submenu: [
        { text: "User", href: "#" },
        { text: "Setting", href: "#" },
      ],
    },
    {
      text: "Report",
      submenu: [
        { text: "Daily Report", href: "#" },
        { text: "Monthly Report", href: "#" },
        { text: "Yearly Report", href: "#" },
      ],
    },
    {
      text: "Statistic",
      submenu: [
        { text: "Daily Statistic", href: "#" },
        { text: "Monthly Statistic", href: "#" },
        { text: "Yearly Statistic", href: "#" },
      ],
    },
    {
      text: "Telephone",
      submenu: [
        { text: "New Telephone", href: "#" },
        { text: "All Telephone", href: "#" },
      ],
    },
    {
      text: "Engineering",
      submenu: [
        { text: "New Engineering", href: "#" },
        { text: "All Engineering", href: "#" },
      ],
    },
    {
      text: "Settings",
      submenu: [
        { text: "New Settings", href: "#" },
        { text: "All Settings", href: "#" },
      ],
    },
    {
      text: "Help",
      submenu: [
        { text: "New Help", href: "#" },
        { text: "All Help", href: "#" },
        { text: "FAQ", href: "#" },
      ],
    },
  ];

  return (
    <div
      className="sm:block md:block lg:hidden xl:hidden absolute bg-white w-full"
      id="mobile-menu"
    >
      <NavbarItem items={menuData} />
    </div>
  );
};

export default MobileMenu;
