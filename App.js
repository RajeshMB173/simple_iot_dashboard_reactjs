import React, { useState, useEffect } from 'react';
import { Home, BarChart3, Settings, LogOut, Thermometer, Droplets } from 'lucide-react';

const IoTDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentData, setCurrentData] = useState({
    temperature: 24.5,
    humidity: 65.2
  });

  // Generate sample data for the last 50 records
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const generateSampleData = () => {
      const data = [];
      const now = new Date();
      
      for (let i = 49; i >= 0; i--) {
        const timestamp = new Date(now.getTime() - (i * 30 * 60000)); // 30 minutes apart
        data.push({
          id: 50 - i,
          datetime: timestamp.toLocaleString(),
          temperature: (20 + Math.random() * 15).toFixed(1),
          humidity: (40 + Math.random() * 40).toFixed(1)
        });
      }
      return data;
    };

    setSensorData(generateSampleData());

    // Simulate real-time updates
    const interval = setInterval(() => {
      setCurrentData({
        temperature: (20 + Math.random() * 15).toFixed(1),
        humidity: (40 + Math.random() * 40).toFixed(1)
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut }
  ];

  const renderCurrentStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-100 text-sm font-medium">Current Temperature</p>
            <p className="text-3xl font-bold mt-1">{currentData.temperature}°C</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-full p-3">
            <Thermometer size={32} />
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm font-medium">Current Humidity</p>
            <p className="text-3xl font-bold mt-1">{currentData.humidity}%</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-full p-3">
            <Droplets size={32} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataTable = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white">Recent Sensor Readings</h3>
        <p className="text-indigo-100 text-sm">Last 50 records</p>
      </div>
      
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Temperature (°C)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Humidity (%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sensorData.map((record, index) => (
                <tr key={record.id} className={`hover:bg-gray-50 transition-colors duration-200 ${index === 0 ? 'bg-green-50' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.datetime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {record.temperature}°C
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {record.humidity}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderComingSoon = () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl">🚀</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Coming Soon</h3>
        <p className="text-gray-600">This feature is under development</p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            {renderCurrentStats()}
            {renderDataTable()}
          </div>
        );
      case 'analytics':
      case 'settings':
        return renderComingSoon();
      case 'logout':
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <LogOut size={40} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Logout</h3>
              <p className="text-gray-600">Are you sure you want to logout?</p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                Confirm Logout
              </button>
            </div>
          </div>
        );
      default:
        return renderComingSoon();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="bg-white shadow-xl w-64 flex flex-col">
        {/* Logo/Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
          <h1 className="text-white text-2xl font-bold">IoT Dashboard</h1>
          <p className="text-indigo-200 text-sm">Sensor Monitoring</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
                    }`}
                  >
                    <Icon size={20} className="mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">System Online</p>
              <p className="text-xs text-gray-500">Last sync: Now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h2>
              <p className="text-gray-600 text-sm">
                {activeTab === 'home' && 'Monitor your IoT sensors in real-time'}
                {activeTab === 'analytics' && 'Advanced analytics and insights'}
                {activeTab === 'settings' && 'Configure your dashboard settings'}
                {activeTab === 'logout' && 'Sign out of your account'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live</span>
              </div>
              <div className="text-sm text-gray-600">
                {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default IoTDashboard;
