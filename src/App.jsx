import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./assets/tailwind.css";

// Layanan Layout & UI Statis (Eager Loading)
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Komponen Loading Sederhana
const Loading = () => (
  <div className="flex items-center justify-center h-full p-5 text-gray-500">
    Memuat Halaman...
  </div>
);

// Halaman / Pages (Lazy Loading)
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    // Hapus div pembungkus bg-gray-100 dan flex di sini agar tidak memengaruhi halaman login
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Redirect otomatis ke login saat pertama akses */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 1. Jalur Auth: Bersih tanpa Sidebar/Header */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
        </Route>

        {/* 2. Jalur Dashboard: Sidebar & Header dimasukkan ke dalam MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
