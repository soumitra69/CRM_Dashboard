import React, { useState, useEffect } from 'react';
import { STUDENT_CLASSES } from '../data/dashboardData';
import { useAnimatedNumber, formatNumber } from '../utils/useAnimatedNumber';

export default function StudentPerClassChart({ searchQuery }) {
  const [activeClass, setActiveClass] = useState(null);
  const [mounted, setMounted] = useState(false);
  const animatedTotal = useAnimatedNumber(1253, 1100);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const isHighlighted =
    searchQuery.trim().length > 0 &&
    'student per class'.includes(searchQuery.trim().toLowerCase());

  const activeItem = STUDENT_CLASSES.find((c) => c.label === activeClass);

  return (
    <div
      className={`chart-card student-per-class glass-light-card animate-fade-up ${
        isHighlighted ? 'card-search-match' : ''
      }`}
      style={{ animationDelay: '340ms' }}
    >
      <div className="student-chart-header">
        <div className="chart-title">Student Per Class</div>
        <span className="chart-amount">
          {activeItem
            ? `${activeItem.students} (Class ${activeItem.label})`
            : formatNumber(animatedTotal, false)}
        </span>
      </div>

      <div className="donut-container">
        <div className="donut-svg-wrapper">
          <svg className="donut-chart" viewBox="0 0 200 200">
            {STUDENT_CLASSES.map((slice, idx) => {
              const isSelected = activeClass === slice.label;
              const isDimmed = activeClass && !isSelected;

              return (
                <circle
                  key={slice.label}
                  cx="100"
                  cy="100"
                  r="74"
                  fill="none"
                  stroke={slice.color}
                  strokeWidth={isSelected ? '44' : '38'}
                  strokeDasharray={mounted ? '39 465' : '0 504'}
                  strokeDashoffset={slice.offset * (465 / 504)}
                  transform="rotate(-90 100 100)"
                  className={`donut-slice ${isDimmed ? 'dimmed' : ''} ${
                    isSelected ? 'selected' : ''
                  }`}
                  style={{
                    transitionDelay: mounted ? `${idx * 35}ms` : '0ms',
                  }}
                  onMouseEnter={() => setActiveClass(slice.label)}
                  onMouseLeave={() => setActiveClass(null)}
                  onClick={() =>
                    setActiveClass((prev) =>
                      prev === slice.label ? null : slice.label
                    )
                  }
                />
              );
            })}
          </svg>

          <div className="donut-center-info">
            {activeItem ? (
              <>
                <span className="donut-center-tag">Class {activeItem.label}</span>
                <strong className="donut-center-num">{activeItem.students}</strong>
                <span className="donut-center-sub">Students</span>
              </>
            ) : (
              <>
                <span className="donut-center-tag">Classes I–XII</span>
                <strong className="donut-center-num">1,253</strong>
                <span className="donut-center-sub">Enrolled</span>
              </>
            )}
          </div>
        </div>

        <div className="legend">
          {STUDENT_CLASSES.map((item) => {
            const isSelected = activeClass === item.label;
            return (
              <div
                key={item.label}
                className={`legend-item ${isSelected ? 'legend-active' : ''}`}
                onMouseEnter={() => setActiveClass(item.label)}
                onMouseLeave={() => setActiveClass(null)}
                onClick={() =>
                  setActiveClass((prev) =>
                    prev === item.label ? null : item.label
                  )
                }
              >
                <span
                  className="legend-color"
                  style={{ background: item.color }}
                />
                <span className="legend-text">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
