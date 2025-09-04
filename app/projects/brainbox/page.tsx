"use client";

import { useState, useEffect } from 'react';
import BrainBoxPage from "@/components/BrainBoxPage";
import MobileBrainBoxPage from "@/components/MobileBrainBoxPage";

export default function BrainBoxProject() {
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
    return <MobileBrainBoxPage onBack={handleBack} />;
  }

  return (
    <BrainBoxPage 
      onBack={handleBack}
      onNavigateToProject={(project) => {
        if (project === 'airframe') window.location.href = '/projects/airframe';
        if (project === 'eatsy') window.location.href = '/projects/eatsy';
        if (project === 'shelf-life') window.location.href = '/projects/shelf-life';
      }}
      onLogoClick={() => window.location.href = '/'}
    />
  );
} 