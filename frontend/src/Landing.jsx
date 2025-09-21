// Landing.jsx
import React from "react";

const stats = [
  { number: "12,500+", label: "Active Users" },
  { number: "250+", label: "Health Resources" },
  { number: "150+", label: "Events Hosted" },
  { number: "95%", label: "Satisfaction Rate" },
];

const audience = [
  {
    title: "Students",
    benefits: [
      "Quick access to health tips",
      "Track personal wellness",
      "Connect with health professionals",
    ],
  },
  {
    title: "Faculty & Staff",
    benefits: [
      "Manage student health",
      "Receive alerts & reports",
      "Professional support tools",
    ],
  },
  {
    title: "Healthcare Professionals",
    benefits: [
      "Monitor campus trends",
      "Offer consultations",
      "Share resources & advice",
    ],
  },
];

const features = [
  {
    title: "Discussion Forum",
    description: "Engage in community discussions about wellness.",
    color: "bg-pink-500",
  },
  {
    title: "Symptom Checker",
    description: "Check symptoms and get guidance.",
    color: "bg-pink-400",
  },
  {
    title: "Appointments",
    description: "Book and manage appointments easily.",
    color: "bg-pink-600",
  },
  {
    title: "Resource Library",
    description: "Access all health resources in one place.",
    color: "bg-pink-300",
  },
  {
    title: "Alerts & Notifications",
    description: "Get reminders for checkups and updates.",
    color: "bg-pink-500",
  },
  {
    title: "Mental Health Support",
    description: "Chat or book sessions with counselors.",
    color: "bg-pink-400",
  },
  {
    title: "Events & Workshops",
    description: "Join wellness events and workshops.",
    color: "bg-pink-600",
  },
  {
    title: "Reports & Analytics",
    description: "Analyze campus wellness trends.",
    color: "bg-pink-300",
  },
];

export default function Landing() {
  return (
    <div className="font-sans text-gray-900 bg-pink-100">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-pink-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold">CampusHealth</div>
          <nav className="flex items-center space-x-4">
            <a href="#features" className="hover:text-pink-200 font-semibold">Features</a>
            <a href="#audience" className="hover:text-pink-200 font-semibold">Audience</a>
            <a href="/signup" className="px-4 py-2 bg-pink-300 text-pink-900 rounded-lg font-semibold hover:bg-pink-200 transition">Sign Up</a>
            <a href="/login" className="px-4 py-2 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-r from-pink-400 to-pink-600 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Your Complete Campus Health & Wellness Hub</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Helping students, faculty, and healthcare professionals stay informed, connected, and healthy on campus.
        </p>
        <div className="space-x-4">
          <a href="/signup" className="px-6 py-3 bg-pink-200 text-pink-900 rounded-lg font-semibold hover:bg-pink-100 transition">Get Started</a>
          <a href="#features" className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition">Learn More</a>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 px-6 flex flex-wrap justify-center gap-6 bg-pink-50">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center p-6 bg-white rounded-lg shadow-md w-52">
            <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
            <div className="text-pink-700">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Audience Section */}
      <section id="audience" className="py-16 px-6 bg-pink-100 text-center">
        <h2 className="text-3xl font-bold mb-12 text-pink-700">Built for Every Campus Role</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {audience.map((group, idx) => (
            <div key={idx} className="bg-pink-50 p-6 rounded-xl shadow-md w-72 border-t-4 border-pink-400">
              <div className="text-xl font-semibold mb-4 text-pink-600">{group.title}</div>
              <ul className="text-pink-700 list-disc list-inside space-y-2 text-left">
                {group.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold mb-12 text-pink-700">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 bg-pink-100 rounded-lg shadow-md hover:shadow-lg transition">
              <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${f.color}`}>
                {idx + 1}
              </div>
              <div className="font-semibold text-lg mb-2">{f.title}</div>
              <p className="text-pink-700">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-8 px-6 text-center">
        <div className="mb-4 text-sm">&copy; 2025 CampusHealth. All rights reserved.</div>
        <div className="space-x-6 text-lg">
          <a href="#" className="hover:text-pink-200">Facebook</a>
          <a href="#" className="hover:text-pink-200">Twitter</a>
          <a href="#" className="hover:text-pink-200">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
