"use client";

import { useEffect, useState } from "react";
import { FiActivity, FiCalendar, FiCheckCircle, FiMessageSquare, FiMic, FiPlus, FiSettings, FiUser } from "react-icons/fi";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project", status: "todo", priority: "high" },
    { id: 2, title: "Team meeting", status: "progress", priority: "medium" },
    { id: 3, title: "Code review", status: "done", priority: "low" },
  ]);

  const user = {
    name: "Shristi",
    role: "AI Developer",
    location: "Dehradun, India",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/welcome");
        if (!res.ok) throw new Error("Backend error");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to connect to backend");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `New Task ${tasks.length + 1}`,
      status: "todo",
      priority: "medium",
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4 flex items-center space-x-3">
          <img 
            src={user.avatar} 
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.role}</p>
          </div>
        </div>
        
        <nav className="mt-6">
          {[
            { name: "Dashboard", icon: <FiActivity /> },
            { name: "Tasks", icon: <FiCheckCircle /> },
            { name: "Calendar", icon: <FiCalendar /> },
            { name: "Messages", icon: <FiMessageSquare /> },
            { name: "Settings", icon: <FiSettings /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name.toLowerCase())}
              className={`flex items-center w-full px-4 py-3 text-left ${
                activeTab === item.name.toLowerCase()
                  ? "bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            {activeTab === "dashboard" ? "👋 Welcome back!" : `📌 ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
          </h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {activeTab === "dashboard" && (
          <>
            {/* User Info Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">{user.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                      {user.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Backend Status Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Backend Status</h2>
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 mr-2"></div>
                    <span>Connecting to backend...</span>
                  </div>
                ) : error ? (
                  <div className="text-red-500 flex items-center">
                    <span className="mr-2">❌</span>
                    <span>{error}</span>
                  </div>
                ) : (
                  <div className="text-green-600 dark:text-green-400 flex items-center">
                    <span className="mr-2">✅</span>
                    <span>{data?.message || "Backend connected successfully"}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Tasks Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Tasks</h2>
                <button 
                  onClick={addTask}
                  className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
                >
                  <FiPlus className="mr-1" /> Add Task
                </button>
              </div>
              <div className="space-y-3">
                {tasks.slice(0, 3).map((task) => (
                  <div 
                    key={task.id} 
                    className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <button 
                      onClick={() => updateTaskStatus(
                        task.id, 
                        task.status === "todo" ? "progress" : 
                        task.status === "progress" ? "done" : "todo"
                      )}
                      className="mr-3"
                    >
                      {task.status === "done" ? (
                        <FiCheckCircle className="text-green-500" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </button>
                    <span className="flex-1">{task.title}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === "high" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" :
                      task.priority === "medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "tasks" && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
            {/* Full task management UI would go here */}
          </div>
        )}

        {/* Chat Assistant (Fixed at bottom right) */}
        <div className="fixed bottom-6 right-6">
          <button className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
            <FiMic size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}