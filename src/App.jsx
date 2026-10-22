import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import MonthlyCollectionChart from './components/MonthlyCollectionChart';
import StudentPerClassChart from './components/StudentPerClassChart';
import MonthlyPendingChart from './components/MonthlyPendingChart';
import QuickModal from './components/QuickModal';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalState, setModalState] = useState(null);

  const handleSelectSubMenu = (subItem) => {
    setActiveSubMenu(subItem);
    if (!subItem) return;
    if (subItem.id === 'overview' || subItem.id === 'stats') {
      return;
    }
    setModalState({
      type: 'submenu',
      title: subItem.label,
      icon: subItem.icon,
      description: `Manage ${subItem.label} records, configurations, and real-time analytics in the EduFlow CRM portal.`,
    });
  };

  const handleSelectStatCard = (card) => {
    setModalState({
      type: 'stat',
      title: card.title,
      icon: card.icon,
      value: card.value,
      trend: card.trend,
      description: `Detailed real-time breakdown for ${card.title} across all active classes and sections.`,
    });
  };

  const handleLogout = () => {
    setModalState({
      type: 'logout',
      title: 'Log Out of EduFlow',
      icon: './Assets/Logout.png',
      description:
        'You are currently signed in as Ryan George (ryan.george@gmail.com). Would you like to end your session?',
    });
  };

  return (
    <div className="app-shell">
      {/* Ambient floating orbs for deep glassmorphism depth */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      <Sidebar
        activeMenu={activeMenu}
        activeSubMenu={activeSubMenu}
        onSelectMenu={setActiveMenu}
        onSelectSubMenu={handleSelectSubMenu}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={handleLogout}
      />

      <main className="main-content">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
        />

        {activeSubMenu && (
          <div className="active-module-banner glass-panel animate-fade-up">
            <div className="banner-info">
              {activeSubMenu.icon && (
                <img src={activeSubMenu.icon} alt="" className="banner-icon" />
              )}
              <span>
                Viewing Module: <strong>{activeSubMenu.label}</strong>
              </span>
            </div>
            <button
              type="button"
              className="banner-reset-btn"
              onClick={() => setActiveSubMenu(null)}
            >
              Reset View ✕
            </button>
          </div>
        )}

        <StatsGrid
          searchQuery={searchQuery}
          onSelectCard={handleSelectStatCard}
        />

        <div className="charts-row">
          <MonthlyCollectionChart searchQuery={searchQuery} />
          <StudentPerClassChart searchQuery={searchQuery} />
        </div>

        <MonthlyPendingChart searchQuery={searchQuery} />
      </main>

      <QuickModal
        modalState={modalState}
        onClose={() => setModalState(null)}
      />
    </div>
  );
}
