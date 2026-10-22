import React, { useState, useRef, useEffect } from 'react';
import { MONTHLY_COLLECTION_BY_YEAR } from '../data/dashboardData';
import { useAnimatedNumber, formatNumber } from '../utils/useAnimatedNumber';

const YEARS = Object.keys(MONTHLY_COLLECTION_BY_YEAR);
const Y_LABELS = ['100K', '80K', '60K', '40K', '20K', '0'];

export default function MonthlyCollectionChart({ searchQuery }) {
  const [selectedYear, setSelectedYear] = useState('2025-26');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredMonth, setHoveredMonth] = useState(null);
  const dropdownRef = useRef(null);

  const yearData = MONTHLY_COLLECTION_BY_YEAR[selectedYear];
  const animatedTotal = useAnimatedNumber(yearData.numericTotal, 1000);

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
    'monthly fee collection'.includes(searchQuery.trim().toLowerCase());

  return (
    <div
      className={`chart-container glass-light-card animate-fade-up ${
        isHighlighted ? 'card-search-match' : ''
      }`}
      style={{ animationDelay: '250ms' }}
    >
      <div className="chart-header">
        <div className="chart-title-section">
          <div className="chart-title">Monthly Fee Collection</div>
          <div className="chart-amount">
            ₹{formatNumber(animatedTotal, true)}
          </div>
        </div>

        <div className="dropdown-class" ref={dropdownRef}>
          <button
            className="dropdown-btn"
            type="button"
            onClick={() => setDropdownOpen((o) => !o)}
            aria-expanded={dropdownOpen}
          >
            <span>{selectedYear}</span>
            <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>

          {dropdownOpen && (
            <div className="dropdown-content open animate-scale-in">
              {YEARS.map((yr) => (
                <button
                  key={yr}
                  className={`dropdown-item ${
                    yr === selectedYear ? 'selected' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    setSelectedYear(yr);
                    setDropdownOpen(false);
                  }}
                >
                  {yr}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="chart-area">
        <div className="y-axis">
          {Y_LABELS.map((label) => (
            <span key={label} className="y-label">
              {label}
            </span>
          ))}
        </div>

        <div className="bars-scroll-wrapper">
          <div className="bars-container">
            {yearData.months.map((item, idx) => {
              const isHovered = hoveredMonth === item.month;
              return (
                <div
                  key={item.month}
                  className="bar-wrapper"
                  onMouseEnter={() => setHoveredMonth(item.month)}
                  onMouseLeave={() => setHoveredMonth(null)}
                  onClick={() =>
                    setHoveredMonth((prev) =>
                      prev === item.month ? null : item.month
                    )
                  }
                >
                  {isHovered && (
                    <div className="bar-tooltip animate-scale-in">
                      <strong>{item.month}</strong>
                      <span>{item.amount}</span>
                    </div>
                  )}
                  <div className="bar-track">
                    <div
                      className={`bar ${item.primary ? '' : 'light'} ${
                        isHovered ? 'bar-active' : ''
                      }`}
                      style={{
                        height: `${item.height}%`,
                        transitionDelay: `${idx * 35}ms`,
                      }}
                    />
                  </div>
                  <div className="month-label">{item.month}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
