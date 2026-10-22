import React, { useState, useRef, useEffect } from 'react';
import { PENDING_FEES_BY_CLASS, SCALE_LABELS } from '../data/dashboardData';
import { useAnimatedNumber, formatNumber } from '../utils/useAnimatedNumber';

const CLASSES = Object.keys(PENDING_FEES_BY_CLASS);

export default function MonthlyPendingChart({ searchQuery }) {
  const [selectedClass, setSelectedClass] = useState('Class VIII');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const dropdownRef = useRef(null);

  const classData = PENDING_FEES_BY_CLASS[selectedClass];
  const animatedTotal = useAnimatedNumber(classData.numericTotal, 1000);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHighlighted =
    searchQuery.trim().length > 0 &&
    ('monthly fees pending'.includes(searchQuery.trim().toLowerCase()) ||
      selectedClass.toLowerCase().includes(searchQuery.trim().toLowerCase()));

  return (
    <div
      className={`chart-card monthly-pending glass-light-card animate-fade-up ${
        isHighlighted ? 'card-search-match' : ''
      }`}
      style={{ animationDelay: '420ms' }}
    >
      <div className="chart-header">
        <div>
          <div className="chart-title">Monthly Fees Pending</div>
          <span className="chart-amount">
            ₹{formatNumber(animatedTotal, true)}
          </span>
        </div>

        <div className="dropdown-class" ref={dropdownRef}>
          <button
            className="dropdown-btn"
            type="button"
            onClick={() => setDropdownOpen((o) => !o)}
            aria-expanded={dropdownOpen}
          >
            <span>{selectedClass}</span>
            <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>

          {dropdownOpen && (
            <div className="dropdown-content open animate-scale-in">
              {CLASSES.map((cls) => (
                <button
                  key={cls}
                  className={`dropdown-item ${
                    cls === selectedClass ? 'selected' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    setSelectedClass(cls);
                    setDropdownOpen(false);
                  }}
                >
                  {cls}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="progress-section">
        {classData.sections.map((sec, idx) => {
          const isHovered = hoveredSection === sec.label;
          return (
            <div
              key={sec.label}
              className="progress-item"
              onMouseEnter={() => setHoveredSection(sec.label)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="progress-label-row">
                <div className="progress-label">{sec.label}</div>
                <span className="progress-mobile-amount">{sec.amount}</span>
              </div>

              <div className="progress-bar-bg">
                <div
                  className={`progress-bar-fill ${
                    isHovered ? 'progress-fill-hovered' : ''
                  }`}
                  style={{
                    width: `${sec.width}%`,
                    transitionDelay: `${idx * 80}ms`,
                  }}
                >
                  <span className="progress-amount-pill">{sec.amount}</span>
                </div>
              </div>
            </div>
          );
        })}

        <div className="scale-labels">
          {SCALE_LABELS.map((lbl, idx) => (
            <span
              key={lbl}
              className={idx % 2 !== 0 ? 'scale-odd' : 'scale-even'}
            >
              {lbl}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
