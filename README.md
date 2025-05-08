# Expense Tracker Web Application

![Expense Tracker Banner](https://img.shields.io/badge/Expense%20Tracker-Financial%20Management-blue)
![React](https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC?logo=tailwind-css)
![Chart.js](https://img.shields.io/badge/Chart.js-4.0.0-FF6384?logo=chart-dot-js)

A sophisticated and responsive Expense Tracker application built with React and Tailwind CSS that allows users to effectively manage their personal finances. Track income and expenses, visualize spending patterns, categorize transactions, and maintain your financial data with a beautiful and intuitive interface.

> **Note:** Add your application screenshot by saving an image as `demo-screenshot.png` in the public folder. This will replace the reference below.

![Expense Tracker Demo](./public/demo-screenshot.png)

## ✨ Features

### Core Functionality

- **Dashboard Overview**: Get a clear snapshot of your financial situation with income, expenses, and net balance displayed in a clean, modern layout
- **Transaction Management**: Add, edit, and delete income and expense transactions with detailed information
- **Categorization**: Organize transactions by custom categories with color-coding for better visualization
- **Budget Analysis**: Understand your spending patterns through beautiful charts and percentage breakdowns
- **Dark/Light Mode**: Toggle between themes based on your preference

### Data Management

- **Local Storage**: Your financial data is securely saved in your browser's localStorage
- **Import/Export**: Backup and restore your data with JSON or CSV export/import functionality
- **Demo Data**: Option to load sample data to explore the application's capabilities

### Visualization

- **Expense Distribution**: Pie chart showing your spending breakdown by category
- **Monthly Trends**: Bar chart displaying income vs. expenses over time
- **Category Analysis**: Detailed breakdown of spending by category with percentages

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open your browser and visit `http://localhost:3000`

## 🔧 Usage

### Adding Transactions

1. Click the "Add Transaction" button on the dashboard
2. Select transaction type (Income or Expense)
3. Fill in the description, amount, date, and category
4. Submit the form to add the transaction

### Managing Categories

1. Navigate to the Categories section
2. Add custom categories with specific colors
3. Use these categories when adding or editing transactions

### Visualizing Data

- View the dashboard for a quick overview of your finances
- Check the Charts section for detailed visualizations of your spending patterns
- Filter transactions by date ranges or categories for targeted analysis

### Data Backup

1. Use the Export function to save your data as JSON or CSV
2. Import previously exported data to restore your financial records

## 💻 Technologies Used

- **Frontend**: React, Context API for state management
- **Styling**: Tailwind CSS for responsive design
- **Visualization**: Chart.js for interactive charts
- **Data Management**: LocalStorage, JSON/CSV processing
- **UI Components**: Custom-built components with modern design principles

## 🌟 Key Features Implemented

- [x] Modern dashboard with financial summaries
- [x] Transaction input form with validation
- [x] Transaction list with filtering capabilities
- [x] Add/edit/delete transaction functionality
- [x] Custom categories management
- [x] Real-time financial calculations
- [x] Interactive charts for data visualization
- [x] Monthly trends analysis
- [x] Dark/Light mode toggle
- [x] Import/Export functionality
- [x] Responsive design for all devices

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons provided by [Heroicons](https://heroicons.com/)
- Inspired by financial management apps like Mint and PocketGuard
