import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const steps = [
      { duration: 600, action: () => setCurrentStep(1) }, // Logo appears
      { duration: 1200, action: () => setCurrentStep(2) }, // Logo moves to navbar
      { duration: 500, action: () => setShowTransition(true) }, // Fade out
      { duration: 300, action: () => onComplete && onComplete() } // Complete
    ];

    let currentIndex = 0;
    const executeSteps = () => {
      if (currentIndex < steps.length) {
        setTimeout(() => {
          steps[currentIndex].action();
          currentIndex++;
          executeSteps();
        }, steps[currentIndex].duration);
      }
    };

    executeSteps();
  }, [onComplete]);

  return (
    <div className={`loading-screen ${currentStep >= 2 ? 'logo-moved' : ''} ${showTransition ? 'fade-out' : ''}`}>
      <div className={`loading-logo ${currentStep >= 1 ? 'visible' : ''}`}>
        Patrik<span style={{color: 'var(--brand-color)'}}>Vision</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
