import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "../../assets/icons/Home";
import UserIcon from "../../assets/icons/User";
import DeskIcon from "../../assets/icons/Desk";
import BarChartIcon from "../../assets/icons/BarChart";
import BookIcon from "../../assets/icons/Book";
import BoxIcon from "../../assets/icons/Box";
import SettingIcon from "../../assets/icons/Setting";
import FileIcon from "../../assets/icons/File";
import ChartIcon from "../../assets/icons/Chart";
import PhoneIcon from "../../assets/icons/Phone";
import QuestionIcon from "../../assets/icons/Question";
import { logout } from "../../stores/slice/authSlice";
import SidebarItem from "../../components/sidebar/SidebarItem";
import NavMobile from "../../components/navbar/NavMobile";
import { useState } from "react";
import ModalAlert from "../../components/modal/ModalAlert";
import { AppDispatch, RootState } from "../../stores/store";
import { closeModal, openModal } from "../../stores/slice/modalSlice";

const Layout = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    { text: "Dashboard", icon: <HomeIcon /> },
    {
      text: "Reception",
      icon: <UserIcon />,
      subMenu: ["Check In", "Check Out", "Room"],
    },
    {
      text: "Reservation",
      icon: <DeskIcon />,
      subMenu: ["New Reservation", "All Reservation"],
    },
    {
      text: "Marketing",
      icon: <BarChartIcon />,
      subMenu: ["Corporate", "Travel Agent", "Source of Business"],
    },
    { text: "Night Audit", icon: <BookIcon /> },
    {
      text: "Housekeeping",
      icon: <BoxIcon />,
      subMenu: ["Room Status", "Room Assignment"],
    },
    { text: "Tools", icon: <SettingIcon />, subMenu: ["User", "Setting"] },
    {
      text: "Report",
      icon: <FileIcon />,
      subMenu: ["Daily Report", "Monthly Report", "Yearly Report"],
    },
    {
      text: "Statistic",
      icon: <ChartIcon />,
      subMenu: ["Daily Statistic", "Monthly Statistic", "Yearly Statistic"],
    },
    {
      text: "Telephone",
      icon: <PhoneIcon />,
      subMenu: ["New Telephone", "All Telephone"],
    },
    {
      text: "Engineering",
      icon: <UserIcon />,
      subMenu: ["New Engineering", "All Engineering"],
    },
    {
      text: "Settings",
      icon: <SettingIcon />,
      subMenu: ["New Settings", "All Settings"],
    },
    {
      text: "Help",
      icon: <QuestionIcon />,
      subMenu: ["New Help", "All Help", "FAQ"],
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const isOpen = useSelector((state: RootState) => state.modal.isOpen);  

  const filteredSidebarItems = sidebarItems.filter((item) => {
    if (item.subMenu) {
      return (
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subMenu.some((subItem) =>
          subItem.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    return item.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className="flex justify-normal bg-color">
        <div className="flex h-screen">
          <Sidebar onSearch={handleSearch}>
            {filteredSidebarItems.map(({ text, icon, subMenu }) => (
              <SidebarItem
                key={text}
                text={text}
                icon={icon}
                subMenu={subMenu?.map((text) => ({ text }))}
              />
            ))}
          </Sidebar>
        </div>
        <div className="flex-1 h-screen overflow-auto">
          <NavMobile
            name={"Windah Batubara"}
            position={"Administrator"}
            changePassword={() => console.log("edit password")}
            logout={handleLogout}
            className="sm:block md:block lg:hidden xl:hidden mb-5"
          />
          <Header
            title={"Dashboard"}
            subtitle={"Dashboard"}
            profilePict={"/src/assets/images/test.jpg"}
            name={"Windah Batubara"}
            position={"Administrator"}
            changePassword={() => console.log("edit password")}
            logout={handleLogout}
          />

          {/* content */}
          <div className="px-5">
            <Outlet />
          </div>
          {/* end content */}
        </div>
      </div>

      <ModalAlert isOpenModal={isOpen} onClose={() => dispatch(closeModal())}>
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
            <svg
              className="size-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              className="text-base font-semibold text-gray-900"
              id="modal-title"
            >
              Deactivate account
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </ModalAlert>
    </>
  );
};

export default Layout;
