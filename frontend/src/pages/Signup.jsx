import { useState } from 'react';
import { api } from '../api';
export default function Signup() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', { ...form, role });
      alert('Account created! Please login.');
      setStep(3); // show confirmation
    } catch (err) {
      console.error(err);
      alert('Error creating account.');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 font-sans">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {/* Step 1: Role Selection */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-pink-700 mb-6">Join Campus Health Connect</h2>
            <p className="mb-4 text-pink-600">Select your role to personalize your account:</p>
            <div className="space-y-3">
              {['Student', 'Faculty & Staff', 'Healthcare Professional'].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`w-full py-2 rounded-lg border text-pink-700 font-semibold ${
                    role === r ? 'bg-pink-600 text-white' : 'bg-white hover:bg-pink-100'
                  } transition`}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={handleNext}
                disabled={!role}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold disabled:bg-pink-300"
              >
                Continue
              </button>
              <a href="/signin" className="text-pink-600 hover:underline">Already have an account?</a>
            </div>
          </div>
        )}
        {/* Step 2: Basic Info */}
        {step === 2 && (
          <form onSubmit={submit} className="space-y-4">
            <h2 className="text-2xl font-bold text-pink-700 mb-4">Basic Information</h2>
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border px-3 py-2 rounded-lg text-pink-700 focus:ring-2 focus:ring-pink-400"
              required
            />
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 border rounded-lg text-pink-700 hover:bg-pink-100"
              >
                Back
              </button>
              <button type="submit" className="px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold">
                Sign Up
              </button>
            </div>
            <div className="text-center text-pink-600">
              Already have an account? <a href="/signin" className="underline">Sign in here</a>
            </div>
          </form>
        )}
        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pink-700 mb-4">Account Created!</h2>
            <p className="text-pink-600 mb-6">Your account has been successfully created.</p>
            <a href="/signin" className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition">
              Proceed to Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
}