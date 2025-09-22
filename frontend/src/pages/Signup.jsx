import { useState } from "react";
import { api } from "../api";
import signupImg from "../assets/signup.jpg";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/signup", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
        role,
      });

      alert("Account created! Please login.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setRole("");
      setStep(3);
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Error creating account.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 font-sans p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={signupImg}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          {/* Step 1: Role */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center md:text-left">
                Join Campus Health Connect
              </h2>
              <p className="mb-4 text-pink-600 text-center md:text-left">
                Select your role:
              </p>
              <div className="space-y-3">
                {["Student", "Faculty & Staff", "Healthcare Professional"].map(
                  (r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={`w-full py-2 rounded-lg border text-pink-700 font-semibold ${
                        role === r
                          ? "bg-pink-600 text-white"
                          : "bg-white hover:bg-pink-100"
                      } transition`}
                    >
                      {r}
                    </button>
                  )
                )}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                <button
                  onClick={handleNext}
                  disabled={!role}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold disabled:bg-pink-300 w-full sm:w-auto"
                >
                  Continue
                </button>
                <a href="/login" className="text-pink-600 hover:underline">
                  Already have an account?
                </a>
              </div>
            </div>
          )}

          {/* Step 2: Signup Form */}
          {step === 2 && (
            <form onSubmit={submit} className="space-y-4">
              <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center md:text-left">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
                  required
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
                  required
                />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 border rounded-lg text-pink-700 hover:bg-pink-100 w-full sm:w-auto"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold w-full sm:w-auto"
                >
                  Sign Up
                </button>
              </div>

              <div className="text-center text-pink-600">
                Already have an account?{" "}
                <a href="/signin" className="underline">
                  Sign in here
                </a>
              </div>
            </form>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-pink-700 mb-4">
                Account Created!
              </h2>
              <p className="text-pink-600 mb-6">
                Your account has been successfully created.
              </p>
              <a
                href="/signin"
                className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition"
              >
                Proceed to Login
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
