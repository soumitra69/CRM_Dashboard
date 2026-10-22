import { useState, useEffect } from 'react';

export function formatNumber(num, isIndianCurrency = false) {
  const rounded = Math.round(num);
  if (isIndianCurrency) {
    return rounded.toLocaleString('en-IN');
  }
  return rounded.toLocaleString('en-US');
}

export function useAnimatedNumber(targetValue, duration = 1100) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const startValue = displayValue;
    const diff = targetValue - startValue;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(startValue + diff * eased);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(targetValue);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [targetValue, duration]);

  return displayValue;
}
