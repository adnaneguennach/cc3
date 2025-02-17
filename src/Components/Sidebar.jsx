import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { toggleSidebar } from "../config/authSlice/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const switchSidebar = useSelector((state) => state.auth.switchSidebar);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {/* Mobile Navbar (Visible on Small Screens) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md p-3 flex justify-between items-center z-50">
        <h1 className="text-lg font-bold">Gestion Location</h1>
        <i className="bi bi-list text-2xl cursor-pointer" onClick={handleToggleSidebar}></i>
      </div>

      {/* Sidebar (Hidden on Small Screens, Visible on Larger Screens) */}
      <div
        className={` h-screen bg-white shadow-xl text-black transition-all duration-300 ease-in-out z-40 
          ${switchSidebar ? "w-1/6" : "w-[50px]"} lg:block hidden`}
      >
        <div className="flex justify-end p-3">
          <i
            className={`bi text-black bi-layout-sidebar-inset${!switchSidebar ? "-reverse" : ""} text-[25px] cursor-pointer`}
            onClick={handleToggleSidebar}
          ></i>
        </div>
        <nav className={`flex flex-col ${switchSidebar ? "p-4" : "p-2"} space-y-4`}>
          <NavItem to="/home" icon="🏠" label="Dashboard" isExpanded={switchSidebar} />
          <NavItem to="/members" icon="👥" label="Annonces" isExpanded={switchSidebar} />
          <NavItem to="/earnings" icon="💰" label="Maps" isExpanded={switchSidebar} />
          <NavItem to="/settings" icon="⚙️" label="Settings" isExpanded={switchSidebar} />
        </nav>
      </div>
    </>
  );
};

// Reusable Nav Item Component
const NavItem = ({ to, icon, label, isExpanded }) => (
  <Link to={to} className="flex items-center space-x-2 text-black">
    <span className="text-xl">{icon}</span>
    {isExpanded && <span className="text-sm">{label}</span>}
  </Link>
);

export default Sidebar;
