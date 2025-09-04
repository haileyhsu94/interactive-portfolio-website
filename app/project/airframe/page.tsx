"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AirframePage from '@/components/AirframePage';
import MobileAirframePage from '@/components/MobileAirframePage';

export default function AirframeProject() {
  const router = useRouter();
  const [openProjects, setOpenProjects] = useState<{ id: string; title: string }[]>([
    { id: 'airframe', title: 'AI-powered B2B Procurement Platform' }
  ]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDeviceType = () => {
      const mobile = window.innerWidth <= 768;
      console.log('Airframe Project - Window width:', window.innerWidth, 'isMobile:', mobile);
      setIsMobile(mobile);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleCloseProject = (projectId: string) => {
    setOpenProjects(prev => prev.filter(p => p.id !== projectId));
    if (projectId === 'airframe') {
      window.location.href = '/';
    }
  };

  const handleNavigateToProject = (projectId: string) => {
    if (projectId === 'airframe') {
      // Already on airframe page
      return;
    }
    window.location.href = `/project/${projectId}/`;
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  console.log('Airframe Project - Rendering component, isMobile:', isMobile);
  console.log('Airframe Project - Component loaded successfully');
  
  console.log('Airframe Project - Rendering AirframePage (desktop/tablet)');
  return (
    <AirframePage 
      onBack={handleBack}
      openProjects={openProjects}
      onCloseProject={handleCloseProject}
      onNavigateToProject={handleNavigateToProject}
      onLogoClick={handleLogoClick}
    />
  );
} 