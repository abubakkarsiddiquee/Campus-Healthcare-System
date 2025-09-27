import React, { useState } from 'react';
import {
    Heart,
    MessageCircle,
    HelpCircle,
    Calendar,
    Stethoscope,
    Users,
    Activity,
    AlertTriangle,
    User,
    Clock,
    Search,
    Filter,
    ThumbsUp,
    MessageSquare,
    ChevronDown
} from 'lucide-react';

const StudentQA = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Navigation */}
            <header className="bg-white shadow-sm border-b w-full">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-uiu-orange rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">CHC</span>
                            </div>
                            <span className="ml-3 text-xl font-semibold text-gray-900">
                                Campus Health Connect
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-600 hover:text-uiu-orange">Home</a>
                            <a href="#" className="text-gray-600 hover:text-uiu-orange">Forum</a>
                            <a href="#" className="text-uiu-orange font-medium border-b-2 border-uiu-orange pb-2">Q&A</a>
                            <a href="#" className="text-gray-600 hover:text-uiu-orange">Appointments</a>
                            <a href="#" className="text-gray-600 hover:text-uiu-orange">Symptom Checker</a>
                            <a href="#" className="text-gray-600 hover:text-uiu-orange">Directory</a>
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

            {/* Main Content */}
            <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                        <HelpCircle className="h-6 w-6 text-uiu-orange" />
                        <h1 className="text-2xl font-bold text-gray-900">Q&A Sessions</h1>
                    </div>
                    <p className="text-gray-600">Ask questions and get expert answers from healthcare professionals and counselors</p>
                </div>

                {/* Schedule Q&A Session Button */}
                <div className="mb-8 flex justify-end">
                    <button className="bg-uiu-orange text-white px-4 py-2 rounded-lg hover:bg-uiu-dark transition-colors">
                        Schedule Q&A Session
                    </button>
                </div>

                {/* Live & Upcoming Sessions */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Live & Upcoming Sessions</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Mental Health Session */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">Mental Health</span>
                                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">LIVE</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Mental Health Q&A with Dr. Sarah Johnson</h3>
                                <p className="text-sm text-gray-600 mb-4">Dr. Sarah Johnson, Licensed Therapist</p>

                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-4 w-4" />
                                        <span>Today, 3:00 PM</span>
                                        <span className="text-xs bg-uiu-light text-uiu-dark px-2 py-1 rounded">60 minutes</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4" />
                                        <span>45 participants</span>
                                        <MessageCircle className="h-4 w-4" />
                                        <span>12 questions</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-uiu-orange text-white py-2 px-4 rounded-lg hover:bg-uiu-dark transition-colors">
                                Join Live Session
                            </button>
                        </div>

                        {/* Nutrition Session */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">Nutrition</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Nutrition & Wellness Session</h3>
                                <p className="text-sm text-gray-600 mb-4">Maria Rodriguez, Registered Dietitian</p>

                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-4 w-4" />
                                        <span>Tomorrow, 2:00 PM</span>
                                        <span className="text-xs bg-uiu-light text-uiu-dark px-2 py-1 rounded">45 minutes</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4" />
                                        <span>32 participants</span>
                                        <MessageCircle className="h-4 w-4" />
                                        <span>8 questions</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-white text-uiu-orange border border-uiu-orange py-2 px-4 rounded-lg hover:bg-uiu-light transition-colors">
                                Register for Session
                            </button>
                        </div>

                        {/* Academic Support Session */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">Academic Support</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Study Stress & Time Management</h3>
                                <p className="text-sm text-gray-600 mb-4">Prof. Michael Chen, Academic Counselor</p>

                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-4 w-4" />
                                        <span>Friday, 4:00 PM</span>
                                        <span className="text-xs bg-uiu-light text-uiu-dark px-2 py-1 rounded">50 minutes</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4" />
                                        <span>28 participants</span>
                                        <MessageCircle className="h-4 w-4" />
                                        <span>15 questions</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-white text-uiu-orange border border-uiu-orange py-2 px-4 rounded-lg hover:bg-uiu-light transition-colors">
                                Register for Session
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ask a Question Section */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Ask a Question</h2>
                    <p className="text-gray-600 mb-6">Submit your health and wellness questions for our experts to answer</p>

                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your question...</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uiu-orange focus:border-transparent bg-gray-50"
                                    rows="4"
                                    placeholder="Type your question here..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Category</label>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uiu-orange focus:border-transparent appearance-none bg-gray-50"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="mental-health">Mental Health</option>
                                        <option value="nutrition">Nutrition</option>
                                        <option value="fitness">Fitness</option>
                                        <option value="academic-stress">Academic Stress</option>
                                        <option value="general-health">General Health</option>
                                    </select>
                                    <ChevronDown className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="anonymous" className="rounded border-gray-300" />
                                <label htmlFor="anonymous" className="text-sm text-gray-600">Submit anonymously</label>
                            </div>

                            <button className="bg-uiu-orange text-white px-6 py-2 rounded-lg hover:bg-uiu-dark transition-colors">
                                Submit Question
                            </button>
                        </div>
                    </div>
                </div>

                {/* Recent Q&A */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Recent Q&A</h2>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search questions..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uiu-orange focus:border-transparent bg-gray-50"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center space-x-2 px-4 py-2 border border-uiu-orange text-uiu-orange rounded-lg hover:bg-uiu-light">
                                <Filter className="h-4 w-4" />
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Question 1 */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 mb-2">How can I manage anxiety during finals week?</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Asked by <span className="font-medium">Anonymous Student</span> • Answered by <span className="font-medium">Dr. Sarah Johnson</span>
                                    </p>
                                </div>
                                <span className="text-sm text-gray-500">2 hours ago</span>
                            </div>

                            <div className="bg-uiu-light p-4 rounded-lg mb-4">
                                <p className="text-gray-700">
                                    Start with breathing exercises and break study sessions into smaller chunks. Consider reaching out to campus counseling services for additional support.
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center space-x-2 text-gray-600 hover:text-uiu-orange">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-sm">24 helpful</span>
                                    </button>
                                </div>
                                <button className="flex items-center space-x-2 text-uiu-orange hover:text-uiu-dark">
                                    <MessageSquare className="h-4 w-4" />
                                    <span className="text-sm">Follow up</span>
                                </button>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 mb-2">What are some healthy meal options for late-night studying?</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Asked by <span className="font-medium">Sam K.</span> • Answered by <span className="font-medium">Maria Rodriguez</span>
                                    </p>
                                </div>
                                <span className="text-sm text-gray-500">1 day ago</span>
                            </div>

                            <div className="bg-uiu-light p-4 rounded-lg mb-4">
                                <p className="text-gray-700">
                                    Try nuts, yogurt with berries, or whole grain crackers with hummus. Avoid heavy meals and excessive caffeine late at night.
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center space-x-2 text-gray-600 hover:text-uiu-orange">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-sm">18 helpful</span>
                                    </button>
                                </div>
                                <button className="flex items-center space-x-2 text-uiu-orange hover:text-uiu-dark">
                                    <MessageSquare className="h-4 w-4" />
                                    <span className="text-sm">Follow up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-16 w-full">
                <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div className="md:col-span-1">
                            <div className="flex items-center mb-4">
                                <Heart className="h-6 w-6 text-uiu-orange mr-2" />
                                <span className="text-lg font-semibold text-gray-900">Campus Health Connect</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Comprehensive health and wellness platform for the entire campus community.
                            </p>
                            <div className="flex space-x-4 text-sm text-gray-600">
                                <a href="#" className="hover:text-gray-900">Privacy</a>
                                <a href="#" className="hover:text-gray-900">Terms</a>
                                <a href="#" className="hover:text-gray-900">Accessibility</a>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Features</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-uiu-orange">Discussion Forum</a></li>
                                <li><a href="#" className="hover:text-uiu-orange">Q&A Sessions</a></li>
                                <li><a href="#" className="hover:text-uiu-orange">Appointments</a></li>
                                <li><a href="#" className="hover:text-uiu-orange">Symptom Checker</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-uiu-orange">Health Resources</a></li>
                                <li><a href="#" className="hover:text-uiu-orange">Provider Directory</a></li>
                                <li><a href="#" className="hover:text-uiu-orange">Health Tracker</a></li>
                                <li><a href="#" className="hover:text-uiu-orange">Community Posts</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>Campus Health: <span className="font-medium">(555) 123-4567</span></li>
                                <li>Crisis Line: <span className="font-medium">(555) 987-6543</span></li>
                                <li>Campus Security: <span className="font-medium">(555) 555-0911</span></li>
                                <li className="text-xs text-gray-500">Available 24/7</li>
                                <li><a href="#" className="text-red-600 hover:text-red-700 font-medium">Emergency Resources →</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div className="border-t mt-8 pt-8 flex justify-between items-center">
                        <p className="text-sm text-gray-500">© 2024 Campus Health Connect. All rights reserved.</p>
                        <a href="#" className="text-sm text-gray-600 hover:text-uiu-orange">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StudentQA;
