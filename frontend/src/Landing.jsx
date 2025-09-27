import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, AlertTriangle } from "lucide-react";

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
    color: "bg-uiu-orange",
    path: "/forum",
  },
  {
    title: "Symptom Checker",
    description: "Check symptoms and get guidance.",
    color: "bg-uiu-dark",
    path: "/symptom-checker",
  },
  {
    title: "Appointments",
    description: "Book and manage appointments easily.",
    color: "bg-gray-700",
    path: "/appointments",
  },
  {
    title: "Resource Library",
    description: "Access all health resources in one place.",
    color: "bg-uiu-light",
    path: "/resources",
  },
  {
    title: "Alerts & Notifications",
    description: "Get reminders for checkups and updates.",
    color: "bg-uiu-orange",
    path: "/alerts",
  },
  {
    title: "Mental Health Support",
    description: "Chat or book sessions with counselors.",
    color: "bg-uiu-dark",
    path: "/mental-health",
  },
  {
    title: "Events & Workshops",
    description: "Join wellness events and workshops.",
    color: "bg-gray-700",
    path: "/events",
  },
  {
    title: "Reports & Analytics",
    description: "Analyze campus wellness trends.",
    color: "bg-uiu-light",
    path: "/reports",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm w-full">
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-uiu-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CHC</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">
                UIU Health Connect
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-uiu-orange text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/directory"
                className="text-gray-600 hover:text-uiu-orange text-sm font-medium"
              >
                Directory
              </Link>
              <Link
                to="/emergency"
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Emergency
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-uiu-orange text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-uiu-orange text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-uiu-dark"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-r from-uiu-orange to-uiu-dark text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Your Complete Campus Health & Wellness Hub
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Helping students, faculty, and healthcare professionals stay informed,
          connected, and healthy on campus.
        </p>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-white text-uiu-orange rounded-lg font-semibold hover:bg-uiu-light transition"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="px-6 py-3 bg-uiu-light text-uiu-dark rounded-lg font-semibold hover:bg-white transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 flex flex-wrap justify-center gap-6 bg-white">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="text-center p-6 bg-white rounded-lg shadow-md w-52"
          >
            <div className="text-4xl font-bold text-uiu-orange mb-2">
              {stat.number}
            </div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Audience */}
      <section id="audience" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Built for Every Campus Role
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {audience.map((group, idx) => (
            <div
              key={idx}
              className="bg-uiu-light p-6 rounded-xl shadow-md w-72 border-t-4 border-uiu-orange"
            >
              <div className="text-xl font-semibold mb-4 text-uiu-dark">
                {group.title}
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-left">
                {group.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              onClick={() => navigate(f.path)}
              className="cursor-pointer p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${f.color}`}
              >
                {idx + 1}
              </div>
              <div className="font-semibold text-lg mb-2 text-uiu-orange">
                {f.title}
              </div>
              <p className="text-gray-700">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about CampusHealth? We're here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-uiu-light rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-uiu-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Support</h4>
                  <p className="text-gray-900">support@campushealth.edu</p>
                  <p className="text-sm text-gray-500">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-uiu-light rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-uiu-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Support</h4>
                  <p className="text-gray-900">(555) 123-HEALTH</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 8 AM - 6 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-uiu-light rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-uiu-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Campus Health Center
                  </h4>
                  <p className="text-gray-900">
                    123 University Drive, Campus Town, CT 12345
                  </p>
                  <p className="text-sm text-gray-500">
                    Building hours: 7 AM - 11 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-700">
                    Emergency Contacts
                  </h4>
                  <p className="text-gray-900">Crisis Line: (555) 987-6543</p>
                  <p className="text-gray-900">
                    Campus Security: (555) 555-0911
                  </p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-6">We'll respond within 24 hours.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-uiu-orange rounded-lg focus:ring-2 focus:ring-uiu-dark focus:border-transparent bg-gray-50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-uiu-orange rounded-lg focus:ring-2 focus:ring-uiu-dark focus:border-transparent bg-gray-50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-uiu-orange rounded-lg focus:ring-2 focus:ring-uiu-dark focus:border-transparent bg-gray-50"
                />
                <select className="w-full px-4 py-3 border border-uiu-orange rounded-lg focus:ring-2 focus:ring-uiu-dark focus:border-transparent bg-gray-50">
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="staff">Staff</option>
                  <option value="healthcare-provider">
                    Healthcare Provider
                  </option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-uiu-orange rounded-lg focus:ring-2 focus:ring-uiu-dark focus:border-transparent bg-gray-50"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-uiu-orange rounded-lg focus:ring-2 focus:ring-uiu-dark focus:border-transparent bg-gray-50"
                ></textarea>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-uiu-orange border-uiu-orange rounded focus:ring-uiu-dark"
                  />
                  <label className="text-sm text-gray-900">
                    I agree to the <span className="underline">Privacy Policy</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-uiu-orange text-white py-3 px-6 rounded-lg font-semibold hover:bg-uiu-dark transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="font-bold text-lg text-uiu-orange">
                  Campus Health Connect
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Comprehensive health and wellness platform for the entire campus
                community.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Features</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Discussion Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Q&A Sessions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Appointments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Symptom Checker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Resources</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Health Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Provider Directory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Health Tracker
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-uiu-orange">
                    Community Posts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Support</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Campus Health: (555) 123-4567</li>
                <li>
                  Crisis Line:{" "}
                  <span className="font-bold text-gray-700">(555) 987-6543</span>
                </li>
                <li>
                  Campus Security:{" "}
                  <span className="font-bold text-gray-700">(555) 555-0011</span>
                </li>
                <li className="text-xs text-gray-400">Available 24/7</li>
                <li>
                  <a
                    href="#"
                    className="text-red-500 hover:underline flex items-center mt-2"
                  >
                    Emergency Resources →
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-300 mt-12 mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2025 Campus Health Connect. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/login" className="hover:text-uiu-orange">
                Sign In
              </a>
              <a href="/signup" className="hover:text-uiu-orange">
                Sign Up
              </a>
              <a href="#contact" className="hover:text-uiu-orange">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
