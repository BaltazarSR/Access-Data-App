# COVID-19 Data Visualization App 📊

A React Native mobile application built with Expo that displays real-time COVID-19 statistics for countries worldwide. The app features an interactive country list, detailed country views, and historical case data visualization with line charts.

## 🌟 Features

- **Country List View**: Browse all countries with COVID-19 statistics
- **Country Flags**: Visual representation with flag images
- **Real-time Data**: Fetches live data from the disease.sh API
- **Detailed Statistics**: View cases, deaths, and recovered counts per country
- **Historical Charts**: Interactive line charts showing case trends over time
- **Clean UI**: Modern interface with smooth navigation
- **Year Labels**: Smart x-axis labeling showing only when years change

## 📱 Screenshots
<img width="1179" height="2556" alt="Simulator Screenshot - iPhone 15 - 2025-10-25 at 16 16 26" src="https://github.com/user-attachments/assets/de6d36c1-a1af-4d7e-87b0-c1210b7f37ed" />
<img width="1179" height="2556" alt="Simulator Screenshot - iPhone 15 - 2025-10-25 at 16 17 46" src="https://github.com/user-attachments/assets/159cb86f-bbbf-416d-bdee-76cd503fefbb" />

The app includes:
- Scrollable list of countries with flags and basic stats
- Navigation to detailed country views
- Line charts with historical case data
- Clean, readable data visualization

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/BaltazarSR/Access-Data-App.git
   cd Access-Data-App
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run on your preferred platform
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **Charts**: react-native-chart-kit
- **HTTP Client**: Axios
- **Icons**: @expo/vector-icons (Ionicons)
- **API**: [disease.sh COVID-19 API](https://disease.sh/)

## 📁 Project Structure

```
├── app/                        # Expo Router pages
│   ├── _layout.tsx            # Root layout with global styles
│   ├── index.tsx              # Home screen entry point
│   └── countryDetail.tsx      # Country detail route
├── src/
│   ├── controllers/           # Business logic layer
│   │   └── covidController.ts # Data processing and transformation
│   ├── models/                # TypeScript interfaces
│   │   └── CovidCountry.ts    # Data type definitions
│   ├── services/              # API service layer
│   │   ├── covidAPIService.ts
│   │   └── historicalDataService.ts
│   └── views/                 # UI components
│       ├── covidCountriesView.tsx
│       └── countryDetailView.tsx
├── assets/                    # Images and static files
└── components/                # Reusable UI components
```

## 🏗️ Architecture

The app follows the **MVC (Model-View-Controller)** pattern:

- **Models**: TypeScript interfaces defining data structures
- **Views**: React components for UI presentation
- **Controllers**: Business logic and data transformation
- **Services**: API communication layer

This separation ensures clean code, maintainability, and testability.

## 📊 API Endpoints Used

- `GET /v3/covid-19/countries` - Fetch all countries data
- `GET /v3/covid-19/historical/{country}?lastdays=all` - Fetch historical timeline data

## 🎨 Key Features Implementation

### Data Sampling
Historical data is sampled (every 30th day) to optimize chart performance and readability, displaying approximately one data point per month.

### Smart Year Labels
The x-axis intelligently displays year labels only when a new year begins, reducing visual clutter while maintaining context.

### Navigation
Uses Expo Router for seamless navigation between country list and detail views with proper parameter passing.

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment!

## 📄 License

This project is for educational purposes.

## 👨‍💻 Author

**Baltazar Servin**
- GitHub: [@BaltazarSR](https://github.com/BaltazarSR)

## 🙏 Acknowledgments

- COVID-19 data provided by [disease.sh](https://disease.sh/)
- Built with [Expo](https://expo.dev/)
- Charts powered by [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit)
