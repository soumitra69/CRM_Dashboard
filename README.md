# EduFlow Dashboard

A comprehensive Customer Relationship Management (CRM) system designed specifically for educational institutions to manage students, staff, fees, results, and administrative operations efficiently.


## Overview

EduFlow Dashboard is a web-based school management system that provides administrators with a centralized platform to handle all aspects of educational institution management. The system offers real-time insights, streamlined operations, and efficient data management for schools.

## Features

### 📊 Dashboard Overview
- Real-time statistics and key metrics
- Visual representations of fee collections
- Student distribution across classes
- Pending fee tracking by class and section

### 🏫 School Management
- **Academic Year Management**: Configure and manage academic years (2025-26, 2026-27, 2027-28)
- **Class & Section Management**: Add and organize classes and sections
- **Subject Management**: Define and manage subjects across different grades

### 📝 Result Management
Organized by educational levels with terminal exam support:
- **Primary Level** (Classes I-V)
  - First Terminal
  - Second Terminal
  - Annual Terminal
- **Middle Level** (Classes VI-VIII)
  - First Terminal
  - Second Terminal
  - Annual Terminal

### 💰 Fees Management
- **Fee Structure**: Define and manage fee structures for different classes
- **Payment Processing**: Record and track student payments
- **Fee Collection**: Monitor collection status and generate reports
- Monthly fee collection tracking with visual analytics

### 👨‍🎓 Student Management
- Student database with comprehensive profiles
- Add new student records
- Track student performance and attendance
- Manage student information across classes

### 👔 Clerk Management
- Add and manage administrative staff
- Clerk list with role assignments
- Staff access control

### ⚙️ Settings
- User profile management
- Password change functionality
- System preferences

## Key Metrics

The dashboard provides instant visibility into:
- **Total Students**: 1,253 students enrolled
- **Total Classes**: 36 classes across all levels
- **Total Staff**: 74 staff members
- **Monthly Fee Collection**: ₹47,36,260 (October: ₹11,23,235)
- **Pending Admissions**: 5 applications awaiting processing

## Data Visualization

### Monthly Fee Collection Chart
Interactive bar chart showing fee collection trends across all months (April to March) with year-wise comparison and hover tooltips.

### Student Distribution
Interactive donut chart representation of student enrollment across all classes (I through XII).

### Pending Fees by Section
Detailed breakdown of pending fees by class and section with animated horizontal progress bar visualization.

## User Interface

The system features:
- Clean, intuitive sidebar navigation with animated accordion submenus and mobile slide-over drawer
- Multi-layered **Glassmorphism** design with ambient floating light orbs and frosted cards
- Smooth entrance animations, animated KPI counters, and interactive chart tooltips
- Real-time notifications and email inbox popovers
- Interactive live search and filtering
- User profile quick access
- Fully responsive layout across all screen sizes (4K/Desktop, Laptop, Tablet, and Mobile)

## Technology Stack

This project is built with:
- **React 18** (Functional Components & Hooks)
- **Vite** for fast development and optimized production builds
- **CSS3 Glassmorphism & Keyframe Animations** (`backdrop-filter`, staggered transitions, interactive states)
- **Interactive SVG & Bar Charts** for real-time data visualization
- **Responsive Design** across all viewports (`320px` to `1920px+`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/soumitra69/CRM_Dashboard.git
```

2. Navigate to the project directory:
```bash
cd CRM_Dashboard
```

3. Install dependencies and start the development server:
```bash
npm install
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
CRM_Dashboard/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── Assets/
│       ├── Logo 1 (1).png
│       ├── dashbord.png
│       ├── School Management.png
│       ├── Result MAnagement.png
│       ├── Fees Management.png
│       ├── Student Management.png
│       ├── Clerk Management.png
│       └── [other icons and images]
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── dashboardData.js
    ├── utils/
    │   └── useAnimatedNumber.js
    └── components/
        ├── Sidebar.jsx
        ├── Header.jsx
        ├── StatsGrid.jsx
        ├── MonthlyCollectionChart.jsx
        ├── StudentPerClassChart.jsx
        ├── MonthlyPendingChart.jsx
        └── QuickModal.jsx
```

## Usage

### For Administrators
1. Log in with your credentials
2. Navigate through the sidebar menu to access different modules
3. Use the dashboard for quick overview of key metrics
4. Access specific management modules for detailed operations

### Key Workflows
- **Adding Students**: Navigate to Student Management → Add Student
- **Managing Fees**: Go to Fees Management → Add Payments or Fee Collection
- **Viewing Results**: Access Result Management → Select level and terminal
- **Academic Setup**: Use School Management to configure year, classes, and subjects

## Demo

Visit the live demo: [https://soumitra69.github.io/CRM_Dashboard/](https://soumitra69.github.io/CRM_Dashboard/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

Potential features for future releases:
- Mobile application integration
- Advanced reporting and analytics
- SMS/Email notification system
- Online payment gateway integration
- Parent portal for fee payment and result viewing
- Attendance management system
- Library management module
- Transport management
- Hostel management

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Developer**: Soumitra  
**GitHub**: [@soumitra69](https://github.com/soumitra69)  
**Project Link**: [https://github.com/soumitra69/CRM_Dashboard](https://github.com/soumitra69/CRM_Dashboard)

## Acknowledgments

- Icons and design assets used in the project
- Chart libraries for data visualization
- The education sector for inspiring this management solution

---

**Note**: This is a frontend demonstration project. For production use, integrate with a backend server and database system for data persistence and security.
