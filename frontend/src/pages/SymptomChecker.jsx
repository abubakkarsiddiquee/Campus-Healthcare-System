// src/SymptomChecker.jsx

import React from 'react';
import { Heart, User } from 'lucide-react';

const SymptomChecker = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Header Navigation - Consistent with StudentHome */}
      <header className="bg-white shadow-sm border-b w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-semibold text-gray-900">Campus Health Connect</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Forum</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Q&A</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Appointments</a>
              <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Symptom Checker</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Directory</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Tracker</a>
              <a href="#" className="text-red-600 hover:text-red-700">Emergency</a>
            </nav>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">Student</span>
                <span className="text-gray-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full px-2 sm:px-8 py-8">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md max-w-none w-full">
          <h1 className="text-3xl font-bold text-gray-800">Symptom Checker</h1>
          <p className="mt-2 text-gray-600">AI-powered tool to help assess symptoms and provide guidance on next steps</p>
          <div className="mt-4 p-4 text-sm text-blue-800 bg-blue-50 rounded-lg">
            <p className="text-gray-700">&#9888; This tool is for informational purposes only and does not replace professional medical advice.</p>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 font-medium">Step 1 of 3</span>
              <span className="text-gray-500 text-sm">33%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-y-8 gap-x-12">
            {/* GENERAL SYMPTOMS */}
            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase mb-4">General Symptoms</h2>
              <div className="grid grid-cols-2 gap-y-4">
                <label className="inline-flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 rounded-sm w-4 h-4" />
                  <span>Fever</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 rounded-sm w-4 h-4" />
                  <span>Fatigue</span>
                </label>
                {/* ... (other symptoms) */}
              </div>
            </div>

            {/* RESPIRATORY */}
            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase mb-4">Respiratory</h2>
              <div className="grid grid-cols-2 gap-y-4">
                <label className="inline-flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 rounded-sm w-4 h-4" />
                  <span>Cough</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 rounded-sm w-4 h-4" />
                  <span>Shortness of breath</span>
                </label>
                {/* ... (other symptoms) */}
              </div>
            </div>

            {/* DIGESTIVE */}
            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase mb-4">Digestive</h2>
              <div className="grid grid-cols-2 gap-y-4">
                <label className="inline-flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 rounded-sm w-4 h-4" />
                  <span>Stomach pain</span>
                </label>
                {/* ... (other symptoms) */}
              </div>
            </div>

            {/* MENTAL HEALTH */}
            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase mb-4">Mental Health</h2>
              <div className="grid grid-cols-2 gap-y-4">
                <label className="inline-flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 rounded-sm w-4 h-4" />
                  <span>Anxiety</span>
                </label>
                {/* ... (other symptoms) */}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button className="flex items-center px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Previous
            </button>
            <button className="flex items-center px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700">
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SymptomChecker;