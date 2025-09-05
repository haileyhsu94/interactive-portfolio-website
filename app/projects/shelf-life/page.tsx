"use client";

import { useState, useEffect } from 'react';
import ShelfLifePage from '@/components/ShelfLifePage';
import MobileShelfLifePage from '@/components/MobileShelfLifePage';

export default function ShelfLifeProject() {
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
    return <MobileShelfLifePage onBack={handleBack} />;
  }

  return <ShelfLifePage onBack={handleBack} />;
} 