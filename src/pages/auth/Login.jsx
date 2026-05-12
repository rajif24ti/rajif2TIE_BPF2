import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  /* 1. Navigate, State & HandleChange */
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* 2. Process Form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Terjadi kesalahan pada server");
        } else {
          setError(err.message || "Koneksi gagal");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* 3. Error & Loading Status View */
  const errorInfo = error ? (
    <div className="bg-red-100 border border-red-200 mb-5 p-4 text-sm font-medium text-red-700 rounded-lg flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-blue-50 border border-blue-100 mb-5 p-4 text-sm text-blue-700 rounded-lg flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address / Username
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-400"
            placeholder="emilys"
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            {/* Navigasi Lupa Password */}
            <Link
              to="/forgot"
              className="text-xs text-green-600 hover:text-green-700 font-medium"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Login"}
        </button>
      </form>

      {/* Navigasi Registrasi */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-green-600 font-semibold hover:text-green-700 transition duration-300"
        >
          Register here
        </Link>
      </div>
    </div>
  );
}