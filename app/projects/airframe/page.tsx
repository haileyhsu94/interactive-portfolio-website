"use client";

import { useState, useEffect } from 'react';
import AirframePage from '@/components/AirframePage';
import MobileAirframePage from '@/components/MobileAirframePage';

export default function AirframeProject() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  if (isMobile) {
    return <MobileAirframePage onBack={handleBack} />;
  }

  return <AirframePage onBack={handleBack} />;
} 