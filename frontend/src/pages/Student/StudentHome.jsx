import React from 'react';
import {
  Heart,
  MessageCircle,
  HelpCircle,
  Calendar,
  Stethoscope,
  Users,
  Activity,
  AlertTriangle,
  GraduationCap,
  BookOpen,
  Target,
  TrendingUp,
  Calendar as CalendarIcon,
  Plus,
  User,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

const StudentHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CHC</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">
                Campus Health Connect
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Forum</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Q&A</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Appointments</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Symptom Checker</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Directory</a>
              {/* <a href="#" className="text-gray-600 hover:text-gray-900">Tracker</a> */}
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
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <GraduationCap className="h-16 w-16 text-gray-600 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back to your Health Hub!</h1>
          <p className="text-gray-600">Let's continue your wellness journey together</p>
        </div>

        {/* Progress Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Wellness Score</p>
                <p className="text-2xl font-bold text-gray-900">78%</p>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Health Surveys</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Target className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Health Assessment</p>
                <p className="text-2xl font-bold text-gray-900">4/6</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Appointments</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
                <p className="text-sm text-gray-600">Jump to your most-used features</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">Book Appointment</p>
                </div>

                <div className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 cursor-pointer transition-colors">
                  <MessageCircle className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">Join Discussion</p>
                </div>

                <div className="bg-purple-500 text-white p-4 rounded-lg text-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <HelpCircle className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">Q&A Sessions</p>
                </div>

                <div className="bg-red-500 text-white p-4 rounded-lg text-center hover:bg-red-600 cursor-pointer transition-colors">
                  <Stethoscope className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">Check Symptoms</p>
                </div>

                <div className="bg-pink-500 text-white p-4 rounded-lg text-center hover:bg-pink-600 cursor-pointer transition-colors">
                  <Activity className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">Log Health Data</p>
                </div>

                <div className="bg-orange-500 text-white p-4 rounded-lg text-center hover:bg-orange-600 cursor-pointer transition-colors">
                  <BookOpen className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">Browse Resources</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <p className="text-sm text-gray-600">Your latest interactions and updates</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Annual checkup completed</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Posted in Nutrition discussion</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Activity className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Logged daily wellness data</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Downloaded stress management guide</p>
                    <p className="text-xs text-gray-500">5 days ago</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="text-white-600 text-sm font-medium flex items-center mx-auto">
                  View All Activity
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Upcoming & Recommendations */}
          <div className="space-y-8">
            {/* Upcoming */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming</h2>
                <p className="text-sm text-gray-600">Don't miss these important items</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Follow-up with Dr. Johnson</p>
                      <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">High</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Stress Management Q&A</p>
                      <p className="text-xs text-gray-500">Friday, 3:00 PM</p>
                    </div>
                  </div>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Medium</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Weekly health check-in</p>
                      <p className="text-xs text-gray-500">Sunday</p>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Low</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="text-white-600 text-sm font-medium  flex items-center mx-auto">
                  View Calendar
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Recommended for You */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
                <p className="text-sm text-gray-600">Based on your activity and goals</p>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Complete Your Health Profile</h3>
                  <p className="text-sm text-gray-600 mb-3">Get personalized recommendations for your health journey.</p>
                  <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
                    Complete
                  </button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Join Study Group Discussion</h3>
                  <p className="text-sm text-gray-600 mb-3">Connect with peers about wellness topics and find support.</p>
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                    Join Now
                  </button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Stress Management Workshop</h3>
                  <p className="text-sm text-gray-600 mb-3">Learn coping strategies for finals and academic pressure.</p>
                  <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700">
                    Register
                  </button>
                </div>
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
                <Heart className="h-6 w-6 text-blue-600 mr-2" />
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
                <li><a href="#" className="hover:text-gray-900">Discussion Forum</a></li>
                <li><a href="#" className="hover:text-gray-900">Q&A Sessions</a></li>
                <li><a href="#" className="hover:text-gray-900">Appointments</a></li>
                <li><a href="#" className="hover:text-gray-900">Symptom Checker</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Health Resources</a></li>
                <li><a href="#" className="hover:text-gray-900">Provider Directory</a></li>
                <li><a href="#" className="hover:text-gray-900">Health Tracker</a></li>
                <li><a href="#" className="hover:text-gray-900">Community Posts</a></li>
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
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentHome;
