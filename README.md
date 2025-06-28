# simple_iot_dashboard_reactjs

# IoT Dashboard

A modern, responsive IoT dashboard built with React.js for monitoring temperature and humidity sensors in real-time. Features a sleek UI/UX design with live data visualization and intuitive navigation.

## 🚀 Features

### ✨ **Real-time Monitoring**
- Live temperature and humidity readings
- Auto-updating data every 5 seconds
- Visual indicators for system status

### 📊 **Data Visualization**
- Current sensor readings with gradient cards
- Historical data table (last 50 records)
- Color-coded temperature and humidity badges
- Responsive charts and layouts

### 🎨 **Modern UI/UX**
- Clean, professional interface
- Smooth animations and transitions
- Responsive design for all devices
- Dark and light theme elements
- Intuitive sidebar navigation

### 🧭 **Navigation**
- **Home**: Real-time sensor monitoring
- **Analytics**: Advanced data insights (Coming Soon)
- **Settings**: Dashboard configuration (Coming Soon)
- **Logout**: Secure session management

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 18+
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Modern bundler support
- **Responsive Design**: Mobile-first approach

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/iot-dashboard.git
   cd iot-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install lucide-react
   # or
   yarn add lucide-react
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
iot-dashboard/
├── src/
│   ├── components/
│   │   └── IoTDashboard.jsx     # Main dashboard component
│   ├── styles/
│   │   └── globals.css          # Global styles
│   ├── utils/
│   │   └── dataGenerator.js     # Sample data utilities
│   └── App.js                   # Root component
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
└── README.md
```

## 📊 Data Structure

### Sensor Data Format
```javascript
{
  id: 1,
  datetime: "12/28/2024, 10:30:00 AM",
  temperature: "24.5",
  humidity: "65.2"
}
```

### Current Readings
```javascript
{
  temperature: 24.5,  // Celsius
  humidity: 65.2      // Percentage
}
```

## 🔧 Configuration

### Customizing Data Updates
```javascript
// Modify update interval (default: 5 seconds)
const UPDATE_INTERVAL = 5000; // milliseconds

// Customize data ranges
const TEMP_RANGE = { min: 20, max: 35 }; // Celsius
const HUMIDITY_RANGE = { min: 40, max: 80 }; // Percentage
```

### Adding Real Sensor Integration
Replace the sample data generator with your actual IoT sensor API:

```javascript
// Example API integration
const fetchSensorData = async () => {
  try {
    const response = await fetch('/api/sensors/current');
    const data = await response.json();
    setCurrentData(data);
  } catch (error) {
    console.error('Error fetching sensor data:', error);
  }
};
```

## 🎨 Customization

### Theme Colors
Modify the gradient colors in the component:
```javascript
// Temperature card gradient
className="bg-gradient-to-br from-orange-400 to-red-500"

// Humidity card gradient  
className="bg-gradient-to-br from-blue-400 to-cyan-500"

// Sidebar gradient
className="bg-gradient-to-r from-indigo-600 to-purple-600"
```

### Adding New Sensors
1. Update the data structure
2. Add new cards to `renderCurrentStats()`
3. Modify the table columns
4. Update the data generation logic

## 🔐 Security Considerations

- Implement proper authentication for production use
- Secure API endpoints with proper authorization
- Validate all incoming sensor data
- Use HTTPS for all data transmission
- Implement rate limiting for API calls

## 🚀 Deployment

### Production Build
```bash
npm run build
# or
yarn build
```

### Deployment Options
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `build` folder
- **Heroku**: Configure buildpack for React
- **AWS S3**: Upload build files to S3 bucket
- **Docker**: Use provided Dockerfile

### Environment Variables
```bash
REACT_APP_API_URL=https://your-iot-api.com
REACT_APP_UPDATE_INTERVAL=5000
REACT_APP_SENSOR_COUNT=50
```

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- 📱 **Mobile devices** (320px+)
- 📱 **Tablets** (768px+)  
- 💻 **Desktop** (1024px+)
- 🖥️ **Large screens** (1440px+)

## 🐛 Troubleshooting

### Common Issues

**Data not updating**
- Check browser console for errors
- Verify API endpoints are accessible
- Ensure proper network connectivity

**Styling issues**
- Clear browser cache
- Verify Tailwind CSS is properly loaded
- Check for conflicting CSS rules

**Performance issues**
- Reduce update frequency
- Implement data pagination
- Optimize re-rendering with React.memo

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

### Development Guidelines
- Follow React best practices
- Use meaningful component names
- Write clear commit messages
- Add comments for complex logic
- Test on multiple devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **React Community** for excellent documentation
- **IoT developers** worldwide for inspiration

## 📞 Support

- 📧 **Email**: support@iot-dashboard.com
- 💬 **Discord**: [Join our community](https://discord.gg/iot-dashboard)
- 📚 **Documentation**: [Full docs](https://docs.iot-dashboard.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/iot-dashboard/issues)

---

**Made with ❤️ for the IoT community**
