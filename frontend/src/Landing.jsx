import React from "react";
import { Link } from 'react-router-dom';
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
    color: "bg-blue-500",
    link: "/forum",
  },
  {
    title: "Symptom Checker",
    description: "Check symptoms and get guidance.",
    color: "bg-blue-400",
    link: "#",
  },
  {
    title: "Appointments",
    description: "Book and manage appointments easily.",
    color: "bg-gray-700",
    link: "/appointments",
  },
  {
    title: "Resource Library",
    description: "Access all health resources in one place.",
    color: "bg-gray-300",
    link: "#",
  },
  {
    title: "Alerts & Notifications",
    description: "Get reminders for checkups and updates.",
    color: "bg-blue-500",
    link: "#",
  },
  {
    title: "Mental Health Support",
    description: "Chat or book sessions with counselors.",
    color: "bg-blue-400",
    link: "#",
  },
  {
    title: "Events & Workshops",
    description: "Join wellness events and workshops.",
    color: "bg-gray-700",
    link: "#",
  },
  {
    title: "Reports & Analytics",
    description: "Analyze campus wellness trends.",
    color: "bg-gray-300",
    link: "#",
  },
];

export default function Landing() {
  return (
<<<<<<< HEAD
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">Campus Health Connect</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <span className="w-4 h-4 mr-1">🏠</span> Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Directory</a>
                <a href="#" className="text-red-500 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Emergency</a>
              </div>
=======
  <div className="font-sans text-gray-900 bg-white">

      {/* Navigation */}
  <header className="bg-white shadow-sm w-full">
        <nav className="w-full">
          <div className="max-w-none w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                </div>
                <span className="ml-3 text-xl font-semibold text-gray-900">Campus Health Connect</span>
              </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Directory
              </a>
              <a href="#" className="text-red-500 hover:text-red-700 text-sm font-medium">
                Emergency
              </a>
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
            </div>
            <div className="flex items-center space-x-4">
<<<<<<< HEAD
              <a href="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
              <a href="/signup" className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Sign Up</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
=======
              <a href="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </a>
              <a href="/signup" className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                Sign Up
              </a>
            </div>
            </div>
          </div>
        </nav>
      </header>      {/* Hero Section */}
  <section className="relative text-center py-24 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
        <h1 className="text-5xl font-extrabold mb-4">Your Complete Campus Health & Wellness Hub</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Helping students, faculty, and healthcare professionals stay informed, connected, and healthy on campus.</p>
        <div className="space-x-4">
          <a href="/signup" className="px-6 py-3 bg-blue-100 text-blue-900 rounded-lg font-semibold hover:bg-blue-200 transition">Get Started</a>
          <a href="#features" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition">Learn More</a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 flex flex-wrap justify-center gap-6 bg-white">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center p-6 bg-white rounded-lg shadow-md w-52">
            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </section>

<<<<<<< HEAD
      {/* Audience */}
      <section id="audience" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-700">Built for Every Campus Role</h2>
=======
      {/* Audience Section */}
  <section id="audience" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Built for Every Campus Role</h2>
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
        <div className="flex flex-wrap justify-center gap-8">
          {audience.map((group, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow-md w-72 border-t-4 border-blue-400">
              <div className="text-xl font-semibold mb-4 text-blue-600">{group.title}</div>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-left">
                {group.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
      <section id="features" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-700">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <a key={idx} href={f.link} className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition block">
              <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${f.color}`}>
                {idx + 1}
              </div>
              <div className="font-semibold text-lg mb-2 text-blue-700">{f.title}</div>
              <p className="text-gray-700">{f.description}</p>
            </a>
=======
      {/* Features Section */}
  <section id="features" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${f.color}`}>
                {idx + 1}
              </div>
              <div className="font-semibold text-lg mb-2">
                {f.title === "Discussion Forum" ? (
                  <a href="/forum" className="hover:underline text-gray-900">
                    {f.title}
                  </a>
                ) : (
                  f.title
                )}
              </div>
              <p className="text-gray-700">{f.description}</p>
            </div>
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Get in Touch</h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">Have questions about CampusHealth? We're here to help.</p>
=======

      {/* Contact Section */}
  <section id="contact" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              Have questions about CampusHealth? We're here to help.
            </p>
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Support</h4>
                  <p className="text-gray-900">support@campushealth.edu</p>
                  <p className="text-sm text-blue-500">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Support</h4>
                  <p className="text-gray-900">(555) 123-HEALTH</p>
                  <p className="text-sm text-blue-500">Mon-Fri, 8 AM - 6 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Campus Health Center</h4>
                  <p className="text-gray-900">123 University Drive, Campus Town, CT 12345</p>
                  <p className="text-sm text-blue-500">Building hours: 7 AM - 11 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-700">Emergency Contacts</h4>
                  <p className="text-gray-900">Crisis Line: (555) 987-6543</p>
                  <p className="text-gray-900">Campus Security: (555) 555-0911</p>
                  <p className="text-sm text-blue-500">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-md">
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Send us a Message</h3>
              <p className="text-blue-600 mb-6">We'll respond within 24 hours.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                <select className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent">
=======
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-900 mb-6">We'll respond within 24 hours.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                />

                <select className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50">
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="staff">Staff</option>
                  <option value="healthcare-provider">Healthcare Provider</option>
                  <option value="other">Other</option>
                </select>
<<<<<<< HEAD
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"></textarea>
                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-400" />
                  <label className="text-sm text-blue-600">I agree to the <span className="underline">Privacy Policy</span></label>
=======

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                />

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                ></textarea>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-400" />
                  <label className="text-sm text-gray-900">
                    I agree to the <span className="underline">Privacy Policy</span>
                  </label>
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-500 transition">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
<<<<<<< HEAD
      <footer className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
=======
  <footer className="w-full bg-white py-12">
        <div className="w-full px-4">
>>>>>>> 7a1caa7d51f6300879aed0681cddcb2b4ce416bf
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="font-bold text-lg">Campus Health Connect</span>
              </div>
              <p className="text-sm text-gray-500">Comprehensive health and wellness platform for the entire campus community.</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Features</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:underline">Discussion Forum</a></li>
                <li><a href="#" className="hover:underline">Q&A Sessions</a></li>
                <li><a href="#" className="hover:underline">Appointments</a></li>
                <li><a href="#" className="hover:underline">Symptom Checker</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Resources</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:underline">Health Resources</a></li>
                <li><a href="#" className="hover:underline">Provider Directory</a></li>
                <li><a href="#" className="hover:underline">Health Tracker</a></li>
                <li><a href="#" className="hover:underline">Community Posts</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Support</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Campus Health: (555) 123-4567</li>
                <li>Crisis Line: <span className="font-bold text-gray-700">(555) 987-6543</span></li>
                <li>Campus Security: <span className="font-bold text-gray-700">(555) 555-0011</span></li>
                <li className="text-xs text-gray-400">Available 24/7</li>
                <li><a href="#" className="text-red-500 hover:underline flex items-center mt-2">Emergency Resources →</a></li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-300 mt-12 mb-4"/>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 Campus Health Connect. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/login" className="hover:underline">Sign In</a>
              <a href="/signup" className="hover:underline">Sign Up</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
