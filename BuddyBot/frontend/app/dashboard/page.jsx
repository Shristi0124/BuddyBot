'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../../components/ui/Button';

import {
  FiCalendar,
  FiMessageSquare,
  FiSettings,
} from 'react-icons/fi';

const holidays = [
  { date: new Date(2025, 0, 26), name: "Republic Day" },
  { date: new Date(2025, 2, 29), name: "Holi" },
  { date: new Date(2025, 3, 10), name: "Good Friday" },
  { date: new Date(2025, 4, 23), name: "Eid al-Fitr" },
  { date: new Date(2025, 7, 15), name: "Independence Day" },
  { date: new Date(2025, 9, 2), name: "Gandhi Jayanti" },
  { date: new Date(2025, 10, 1), name: "Diwali" },
  { date: new Date(2025, 11, 25), name: "Christmas" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [date, setDate] = useState(new Date());
  const [highlightedHoliday, setHighlightedHoliday] = useState(null);

  useEffect(() => {
    const found = holidays.find(
      (holiday) => holiday.date.toDateString() === date.toDateString()
    );
    setHighlightedHoliday(found);
  }, [date]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Top Navigation */}
      <div className="flex gap-4 mb-6">
        <Button onClick={() => setActiveTab('calendar')}>
          <FiCalendar className="mr-2" /> Calendar
        </Button>
        <Button onClick={() => setActiveTab('messages')}>
          <FiMessageSquare className="mr-2" /> Messages
        </Button>
        <Button onClick={() => setActiveTab('settings')}>
          <FiSettings className="mr-2" /> Settings
        </Button>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        {activeTab === 'calendar' && (
          <section>
            <h2 className="text-2xl font-semibold text-violet-700 dark:text-violet-400 mb-2">
              📅 Your Calendar
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Plan your schedule and see upcoming holidays.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Calendar Widget */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="rounded-lg"
                />
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  Selected Date: <strong>{date.toDateString()}</strong>
                </p>
              </div>

              {/* Holiday Information */}
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-300 mb-2">
                  🎉 Holiday Information
                </h3>
                {highlightedHoliday ? (
                  <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                    🎊 {highlightedHoliday.name} is on {highlightedHoliday.date.toDateString()}.
                  </p>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    No holiday on the selected date.
                  </p>
                )}
                <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-200">
                  {holidays.map((holiday, idx) => (
                    <li key={idx}>
                      {holiday.name} - {holiday.date.toDateString()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <section>
            <h2 className="text-2xl font-semibold text-violet-700 dark:text-violet-400 mb-4">
              💬 Messages
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You will see your conversations and smart replies here soon. Stay tuned!
            </p>
          </section>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <section>
            <h2 className="text-2xl font-semibold text-violet-700 dark:text-violet-400 mb-4">
              ⚙️ Settings
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Customize your assistant preferences, notification settings, and integrations.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
