import React from 'react';
import { STAT_CARDS } from '../data/dashboardData';
import { useAnimatedNumber, formatNumber } from '../utils/useAnimatedNumber';

function StatCard({ card, index, isHighlighted, onSelectCard }) {
  const animatedVal = useAnimatedNumber(card.numericValue, 1200 + index * 150);

  return (
    <div
      className={`stat-card glass-panel animate-fade-up ${
        isHighlighted ? 'stat-card-highlighted' : ''
      }`}
      style={{ animationDelay: `${index * 90}ms` }}
      onClick={() => onSelectCard(card)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelectCard(card);
      }}
    >
      <div className="glass-shine" />
      <div className="stat-card-img">
        <img className="stat-main-icon" src={card.icon} alt={card.title} />
        <img className="arrow" src={card.arrow} alt="" />
      </div>
      <h6 className={card.compactTitle ? 'compact-stat-title' : ''}>
        {card.title}
      </h6>
      <h3>
        {card.prefix}
        {formatNumber(animatedVal, card.isIndianCurrency)}
      </h3>
      <span className="stat-trend-badge">{card.trend}</span>
    </div>
  );
}

export default function StatsGrid({ searchQuery, onSelectCard }) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return (
    <section className="stats-container" aria-label="Key Statistics">
      {STAT_CARDS.map((card, index) => {
        const isHighlighted =
          normalizedQuery.length > 0 &&
          (card.title.toLowerCase().includes(normalizedQuery) ||
            card.value.toLowerCase().includes(normalizedQuery));

        return (
          <StatCard
            key={card.id}
            card={card}
            index={index}
            isHighlighted={isHighlighted}
            onSelectCard={onSelectCard}
          />
        );
      })}
    </section>
  );
}
