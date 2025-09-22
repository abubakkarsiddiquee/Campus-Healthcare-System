import { useState } from "react";
import { api } from "../api";
import loginImg from "../assets/login.jpg";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      // Redirect if needed
      // window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left image (same as Signup style) */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <img
          src={loginImg}
          alt="Login"
          className="w-3/4 rounded-2xl shadow-lg"
        />
      </div>

      {/* Right side form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-primary-brand mb-6">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Login using your email and password
          </p>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-brand text-white py-2 rounded-lg hover:bg-secondary-accent transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-primary-brand font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
