"use client";

import { useState, useEffect } from 'react';
import RealryPage from '@/components/RealryPage';
import MobileRealryPage from '@/components/MobileRealryPage';

export default function RealryProject() {
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

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleCloseProject = (projectId: string) => {
    if (projectId === 'realry') {
      window.location.href = '/';
    }
  };

  const handleNavigateToProject = (projectId: string) => {
    if (projectId === 'realry') return;
    window.location.href = `/projects/${projectId}`;
  };

  const openProjects = [
    { id: 'airframe', title: 'AI-powered B2B Procurement Platform' },
    { id: 'eatsy', title: 'Customizable Reservation Platform' },
    { id: 'brainbox', title: 'AI-Powered SAT Preparation Platform' },
    { id: 'shelf-life', title: 'Dual-Interface Platform to Reduce Food Waste' },
    { id: 'realry', title: 'Realry' },
  ];

  if (isMobile) {
    return (
      <MobileRealryPage
        onBack={handleBack}
        openProjects={openProjects}
        onCloseProject={handleCloseProject}
        onNavigateToProject={handleNavigateToProject}
        onLogoClick={handleLogoClick}
      />
    );
  }

  return (
    <RealryPage
      onBack={handleBack}
      openProjects={openProjects}
      onCloseProject={handleCloseProject}
      onNavigateToProject={handleNavigateToProject}
      onLogoClick={handleLogoClick}
    />
  );
}
