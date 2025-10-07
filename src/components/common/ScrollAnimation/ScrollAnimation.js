import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ScrollAnimation.css';

/**
 * ScrollAnimation Component
 * Wrapper component that adds scroll-based animations to its children
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements to animate
 * @param {string} props.animation - Animation type: 'fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'scale', 'scale-up', 'zoom'
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {number} props.threshold - Visibility threshold to trigger animation (0-1)
 * @param {boolean} props.triggerOnce - Whether animation should trigger only once
 * @param {string} props.className - Additional CSS classes
 */
const ScrollAnimation = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
  triggerOnce = true,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  return (
    <div
      ref={ref}
      className={`scroll-animation scroll-animation-${animation} ${
        isVisible ? 'scroll-animation-visible' : ''
      } ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

