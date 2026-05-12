import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana: Cek apakah password cocok
    if (dataForm.password !== dataForm.confirmPassword) {
      alert("Password dan Confirm Password tidak cocok!");
      return;
    }

    setLoading(true);

    // Simulasi proses registrasi
    setTimeout(() => {
      setLoading(false);
      alert("Registrasi Berhasil! Silakan Login.");

      // Kembali ke tampilan login setelah berhasil
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Create Your Account ✨
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-400"
            placeholder="********"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            value={dataForm.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-400"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex justify-center items-center ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <ImSpinner2 className="me-2 animate-spin" /> Processing...
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>

      {/* Tombol untuk kembali ke Login jika sudah punya akun */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-600 font-semibold hover:text-green-700 transition duration-300"
        >
          Login here
        </Link>
      </div>
    </div>
  );
}
