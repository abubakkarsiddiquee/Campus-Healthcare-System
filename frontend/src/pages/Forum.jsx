import React, { useState } from 'react';

const Forum = () => {
  const [activeTab, setActiveTab] = useState('New Discussion');

  const discussions = [
    {
      id: 1,
      userInitials: 'SM',
      userName: 'Sarah M.',
      time: '2 hours ago',
      title: 'Managing stress during finals week',
      content:
        'Anyone else feeling overwhelmed with finals coming up? Looking for healthy coping strategies that actually work...',
      tags: ['Mental Health', 'Study Tips', 'Stress'],
      likes: 24,
      comments: 18,
    },
    {
      id: 2,
      userInitials: 'AK',
      userName: 'Alex K.',
      time: '5 hours ago',
      title: 'Healthy meal prep on a budget',
      content:
        'Started meal prepping to save money and eat better. Sharing some recipes that are cheap, nutritious, and dorm-friendly!',
      tags: ['Nutrition', 'Budget', 'Cooking'],
      likes: 15,
      comments: 32,
    },
    {
      id: 3,
      userInitials: 'JL',
      userName: 'Dr. Jennifer L.',
      time: '1 day ago',
      title: 'Finding study-life balance as a grad student',
      content: '',
      tags: [],
      likes: 0,
      comments: 0,
    },
  ];

  const popularTopics = [
    'Mental Health',
    'Study Tips',
    'Nutrition',
    'Fitness',
    'Sleep',
    'Anxiety',
  ];

  const recommendedItems = [
    {
      title: 'Complete Your Health Profile',
      description: 'Get personalized recommendations',
      actionText: 'Complete',
      progress: true,
      progressValue: 70,
    },
    {
      title: 'Join Study Group Discussion',
      description: 'Connect with peers about wellness',
      actionText: 'Join Now',
      progress: false,
    },
    {
      title: 'Stress Management Workshop',
      description: 'Learn coping strategies for finals',
      actionText: 'Register',
      progress: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h1 className="font-bold text-xl text-blue-700">
            Campus Health Connect
          </h1>
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-700">Home</a>
            <a
              href="/forum"
              className="font-semibold text-blue-700 border-b-2 border-blue-700 pb-1"
            >
              Forum
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">Q&A</a>
            <a href="/appointments" className="text-gray-600 hover:text-blue-700">Appointments</a>
            <a href="#" className="text-gray-600 hover:text-blue-700">Symptom Checker</a>
            <a href="#" className="text-gray-600 hover:text-blue-700">Tracker</a>
            <a href="#" className="text-red-500 hover:text-red-700 font-semibold">
              Emergency
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 text-gray-600">
          <span className="text-sm">Student • Active</span>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">
            Discussion Forum
          </h2>
          <p className="text-gray-600">
            Connect, share, and support each other in our campus community
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2 bg-white rounded-full p-1 shadow-md">
            {['New Discussion', 'Trending'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-blue-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-gray-500 text-sm">
            1,247 discussions • 3,402 members
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Discussions */}
          <div className="md:col-span-2 space-y-6">
            {discussions.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">
                    {d.userInitials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">
                      {d.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {d.userName} • {d.time}
                    </p>
                  </div>
                </div>
                {d.content && (
                  <p className="text-gray-700 mb-4">{d.content}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex space-x-4">
                    <span>❤️ {d.likes}</span>
                    <span>💬 {d.comments}</span>
                  </div>
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Join Discussion →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Post */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                Quick Post
              </h4>
              <textarea
                className="w-full h-24 p-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share something..."
              ></textarea>
              <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Post
              </button>
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                Popular Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">
                Recommended for You
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Based on your activity
              </p>
              {recommendedItems.map((item, i) => (
                <div
                  key={i}
                  className="border-b last:border-b-0 border-gray-200 py-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </div>
                    <button
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        item.progress
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {item.actionText}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {item.description}
                  </p>
                  {item.progress && (
                    <div className="relative h-2 w-full bg-blue-50 rounded-full">
                      <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${item.progressValue}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Campus Health Connect */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-6 h-6 text-gray-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.243 3.031a1 1 0 011.536 0L17.771 9.5a1 1 0 01-.707 1.707H3.936a1 1 0 01-.707-1.707L9.243 3.03zM5 16h10V14H5v2zM5 12h10V10H5v2zM5 8h10V6H5v2z"/>
                  </svg>
                </div>
                <span className="font-bold text-lg">Campus Health Connect</span>
              </div>
              <p className="text-sm text-gray-500">Comprehensive health and wellness platform for the entire campus community.</p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Terms</a>
                <a href="#" className="hover:underline">Accessibility</a>
              </div>
            </div>

            {/* Features */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Features</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:underline">Discussion Forum</a></li>
                <li><a href="#" className="hover:underline">Q&A Sessions</a></li>
                <li><a href="#" className="hover:underline">Appointments</a></li>
                <li><a href="#" className="hover:underline">Symptom Checker</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Resources</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><a href="#" className="hover:underline">Health Resources</a></li>
                <li><a href="#" className="hover:underline">Provider Directory</a></li>
                <li><a href="#" className="hover:underline">Health Tracker</a></li>
                <li><a href="#" className="hover:underline">Community Posts</a></li>
              </ul>
            </div>

            {/* Support */}
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

          {/* Horizontal Line & Copyright */}
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
};

export default Forum;
