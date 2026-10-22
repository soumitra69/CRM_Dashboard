import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_NOTIFICATIONS, INITIAL_EMAILS } from '../data/dashboardData';

function getOrdinalSuffix(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function formatLiveDateTime(now) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return {
    dateLine: `It's ${dayName}, ${date}${getOrdinalSuffix(date)} ${month} ${year}`,
    timeLine: `Time: ${hours}:${minutes}:${seconds}`,
  };
}

export default function Header({
  searchQuery,
  onSearchChange,
  onToggleSidebar,
}) {
  const [dateTime, setDateTime] = useState(() => formatLiveDateTime(new Date()));
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [emails, setEmails] = useState(INITIAL_EMAILS);
  const [notiCount, setNotiCount] = useState(3);
  const [mailCount, setMailCount] = useState(5);
  const [activePopover, setActivePopover] = useState(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(formatLiveDateTime(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setActivePopover(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNotificationClick = () => {
    setActivePopover((prev) => (prev === 'noti' ? null : 'noti'));
  };

  const handleEmailClick = () => {
    setActivePopover((prev) => (prev === 'mail' ? null : 'mail'));
  };

  const addSampleNotification = () => {
    const nextId = notifications.length + 1;
    setNotifications((prev) => [
      {
        id: nextId,
        title: `New Fee Receipt #${1040 + nextId} Verified`,
        time: 'Just now',
        type: 'fee',
      },
      ...prev,
    ]);
    setNotiCount((c) => c + 1);
  };

  const addSampleEmail = () => {
    const nextId = emails.length + 1;
    setEmails((prev) => [
      {
        id: nextId,
        sender: 'Admission Desk',
        subject: `New Student Inquiry #${200 + nextId}`,
        time: 'Just now',
      },
      ...prev,
    ]);
    setMailCount((c) => c + 1);
  };

  return (
    <header className="header glass-panel animate-fade-down">
      <div className="header-left">
        <button
          type="button"
          className="hamburger-btn glass-btn"
          onClick={onToggleSidebar}
          aria-label="Open navigation menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className="welcome">
          <h2>Welcome!</h2>
          <p id="dateText">
            {dateTime.dateLine}
            <br />
            <span className="live-time-pill">{dateTime.timeLine}</span>
          </p>
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search students, classes, fees, or reports..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery ? (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : (
          <img className="s-c" src="./Assets/Search.png" alt="Search" />
        )}
      </div>

      <div className="header-icons" ref={popoverRef}>
        <div className="icon-btn-wrapper">
          <button
            type="button"
            className={`noti glass-icon-btn ${activePopover === 'noti' ? 'active' : ''}`}
            onClick={handleNotificationClick}
            aria-label="Notifications"
          >
            <img src="./Assets/Noti_u.png" alt="Notifications" />
          </button>
          <span className="badge pulse-badge" id="notiCount">
            {notiCount}
          </span>

          {activePopover === 'noti' && (
            <div className="header-popover glass-popover animate-scale-in">
              <div className="popover-header">
                <h6>Notifications ({notiCount})</h6>
                <button
                  type="button"
                  className="popover-action-btn"
                  onClick={addSampleNotification}
                >
                  + Simulate
                </button>
              </div>
              <ul className="popover-list">
                {notifications.slice(0, 4).map((item) => (
                  <li key={item.id} className="popover-item">
                    <span className="popover-dot" />
                    <div>
                      <p className="popover-title">{item.title}</p>
                      <span className="popover-time">{item.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="icon-btn-wrapper">
          <button
            type="button"
            className={`noti glass-icon-btn ${activePopover === 'mail' ? 'active' : ''}`}
            onClick={handleEmailClick}
            aria-label="Messages"
          >
            <img src="./Assets/Email-G.png" alt="Messages" />
          </button>
          <span className="badge_email pulse-badge-blue" id="mailCount">
            {mailCount}
          </span>

          {activePopover === 'mail' && (
            <div className="header-popover glass-popover animate-scale-in">
              <div className="popover-header">
                <h6>Inbox Messages ({mailCount})</h6>
                <button
                  type="button"
                  className="popover-action-btn"
                  onClick={addSampleEmail}
                >
                  + Simulate
                </button>
              </div>
              <ul className="popover-list">
                {emails.slice(0, 4).map((mail) => (
                  <li key={mail.id} className="popover-item">
                    <span className="popover-dot blue" />
                    <div>
                      <p className="popover-title">{mail.subject}</p>
                      <span className="popover-time">
                        {mail.sender} • {mail.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
