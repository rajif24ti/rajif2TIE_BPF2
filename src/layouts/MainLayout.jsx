import "../assets/tailwind.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";

export default function MainLayout() {
  return (
    <div>
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
            <Header />
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}


