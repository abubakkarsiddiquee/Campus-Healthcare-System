import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Users, Stethoscope, CheckCircle, Phone } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Icon = ({ name, className }) => {
  const icons = { Users, Stethoscope, ArrowLeft, ArrowRight, CheckCircle, Phone };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon className={className} /> : null;
};

const mockServices = [
  { id: '1', name: 'General Consultation' },
  { id: '2', name: 'Mental Health Counseling' },
  { id: '3', name: 'Physical Therapy' },
  { id: '4', name: 'Nutrition Services' },
];

const mockProviders = [
  { id: '1', name: 'Dr. Jane Smith', serviceId: '1' },
  { id: '2', name: 'Dr. John Doe', serviceId: '1' },
  { id: '3', name: 'Therapist Emily White', serviceId: '2' },
  { id: '4', name: 'PT Mike Brown', serviceId: '3' },
];

const mockAppointments = [
  '9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM',
];

const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const monthNames = [
  'January','February','March','April','May','June','July','August',
  'September','October','November','December'
];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const generateCalendarDays = (year, month) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  return [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
};

const Card = ({ title, children, className }) => (
  <div className={twMerge('bg-white p-6 rounded-xl shadow-lg', className)}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

const Appointments = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isBooked, setIsBooked] = useState(false);

  const today = new Date();
  const isToday = (day) => day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();

  const filteredProviders = selectedService ? mockProviders.filter(p => p.serviceId === selectedService) : mockProviders;

  const handleSelect = (setter) => (value) => { setter(value); setIsBooked(false); };

  const handleMonthChange = (direction) => {
    setCurrentMonth((prev) => {
      let newMonth = direction === 'prev' ? prev - 1 : prev + 1;
      let newYear = currentYear;
      if (newMonth < 0) { newMonth = 11; newYear -= 1; }
      if (newMonth > 11) { newMonth = 0; newYear += 1; }
      setCurrentYear(newYear);
      return newMonth;
    });
  };

  const handleBookAppointment = () => {
    if (selectedService && selectedProvider && selectedDate && selectedTime) setIsBooked(true);
  };

  const calendarDays = generateCalendarDays(currentYear, currentMonth);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 antialiased p-4 sm:p-6 lg:p-8">
     {/* Header */}
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h1 className="font-bold text-xl text-blue-700">
            Campus Health Connect
          </h1>
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-700">Home</a>
            <a href="/forum" className="text-gray-600 hover:text-blue-700">Forum</a>
            <a href="#" className="text-gray-600 hover:text-blue-700">Q&A</a>
            <a
              href="#"
              className="font-semibold text-blue-700 border-b-2 border-blue-700 pb-1"
            >
              Appointments
            </a>
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

      <main className="max-w-7xl mx-auto mt-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Appointment Scheduling</h1>
          <p className="text-gray-500">Book appointments with campus health services and counseling centers</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card title="Schedule Your Appointment">
              {/* Service */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Service Type</label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={e => { handleSelect(setSelectedService)(e.target.value); setSelectedProvider(''); }}
                    className="w-full p-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-shadow"
                  >
                    <option value="">Choose a service</option>
                    {mockServices.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                  <Icon name="Stethoscope" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Provider */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Healthcare Provider</label>
                <div className="relative">
                  <select
                    value={selectedProvider}
                    onChange={e => handleSelect(setSelectedProvider)(e.target.value)}
                    disabled={!selectedService}
                    className="w-full p-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-shadow"
                  >
                    <option value="">Choose a provider</option>
                    {filteredProviders.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                  <Icon name="Users" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Calendar */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Select Date</label>
                  <div className="border border-gray-300 rounded-xl p-4 shadow-sm bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => handleMonthChange('prev')} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <Icon name="ArrowLeft" className="w-5 h-5 text-gray-600" />
                      </button>
                      <h4 className="text-lg font-semibold text-gray-800">{monthNames[currentMonth]} {currentYear}</h4>
                      <button onClick={() => handleMonthChange('next')} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <Icon name="ArrowRight" className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-2">
                      {dayNames.map(d => <span key={d} className="font-semibold">{d}</span>)}
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {calendarDays.map((day, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(setSelectedDate)(day)}
                          disabled={!day}
                          className={twMerge(
                            "w-10 h-10 flex items-center justify-center rounded-full text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            day && "hover:bg-indigo-100",
                            day === selectedDate ? 'bg-indigo-600 text-white hover:bg-indigo-600' :
                            isToday(day) ? 'bg-black text-white' : 'bg-white'
                          )}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Available Times</label>
                  <div className="grid grid-cols-2 gap-3 border border-gray-300 rounded-xl p-4 h-full shadow-sm bg-gray-50 overflow-auto">
                    {mockAppointments.map(time => (
                      <button
                        key={time}
                        onClick={() => handleSelect(setSelectedTime)(time)}
                        className={twMerge(
                          "bg-white text-gray-800 p-3 rounded-lg border border-gray-300 transition-colors hover:bg-indigo-50",
                          selectedTime === time && 'bg-indigo-100 text-indigo-700 font-semibold border-indigo-500'
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleBookAppointment}
                  disabled={!selectedService || !selectedProvider || !selectedDate || !selectedTime}
                  className={twMerge(
                    "w-full py-4 px-6 rounded-xl text-lg shadow-md font-bold transition-colors",
                    (!selectedService || !selectedProvider || !selectedDate || !selectedTime)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  )}
                >
                  Book Appointment
                </button>
                {isBooked && (
                  <div className="mt-4 flex items-center justify-center text-green-700 font-semibold bg-green-100 p-3 rounded-lg">
                    <Icon name="CheckCircle" className="w-5 h-5 mr-2" />
                    Appointment booked successfully!
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col space-y-6">
            <Card title="Appointment Summary">
              {selectedService && selectedProvider && selectedDate && selectedTime ? (
                <ul className="text-gray-700 space-y-1">
                  <li><strong>Service:</strong> {mockServices.find(s => s.id === selectedService)?.name}</li>
                  <li><strong>Provider:</strong> {mockProviders.find(p => p.id === selectedProvider)?.name}</li>
                  <li><strong>Date:</strong> {monthNames[currentMonth]} {selectedDate}, {currentYear}</li>
                  <li><strong>Time:</strong> {selectedTime}</li>
                </ul>
              ) : <p className="text-gray-500">Select service, provider, date, and time</p>}
            </Card>

            <Card title="Location">
              <p className="text-gray-600 mb-2">Campus Health Center</p>
              <address className="not-italic text-gray-500">
                123 University Ave<br />Building A, 2nd Floor<br />Campus, ST 12345
              </address>
            </Card>

            <Card title="Emergency Contact">
              <div className="flex items-center space-x-2 text-gray-600 mb-2">
                <Icon name="Phone" className="w-5 h-5 text-red-500" />
                <span>Campus Health Emergency: <span className="font-semibold">(555) 123-4567</span></span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Icon name="Phone" className="w-5 h-5 text-red-500" />
                <span>Crisis Hotline: <span className="font-semibold">(555) 987-6543</span></span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
