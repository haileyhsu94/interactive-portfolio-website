"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AirframePage from '@/components/AirframePage';
import MobileAirframePage from '@/components/MobileAirframePage';
import { useOpenProjects } from '@/contexts/OpenProjectsContext';

export default function AirframeProject() {
  const router = useRouter();
  const { openProjects, addProject, removeProject } = useOpenProjects();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const checkDeviceType = () => {
      const mobile = window.innerWidth <= 768;
      console.log('Airframe Project - Window width:', window.innerWidth, 'isMobile:', mobile);
      setIsMobile(mobile);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Add current project to open projects when component mounts
  useEffect(() => {
    addProject({ id: 'airframe', title: 'AI-powered B2B Procurement Platform' });
  }, [addProject]);

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleCloseProject = (projectId: string) => {
    removeProject(projectId);
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
  
  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  
  if (isMobile) {
    console.log('Airframe Project - Rendering MobileAirframePage');
    return (
      <MobileAirframePage 
        onBack={handleBack}
        openProjects={openProjects}
        onCloseProject={handleCloseProject}
        onNavigateToProject={handleNavigateToProject}
        onLogoClick={handleLogoClick}
      />
    );
  }
  
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