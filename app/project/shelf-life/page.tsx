"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ShelfLifePage from '@/components/ShelfLifePage';
import MobileShelfLifePage from '@/components/MobileShelfLifePage';
import { useOpenProjects } from '@/contexts/OpenProjectsContext';

export default function ShelfLifeProject() {
  const router = useRouter();
  const { openProjects, addProject, removeProject } = useOpenProjects();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Add current project to open projects when component mounts
  useEffect(() => {
    addProject({ id: 'shelf-life', title: 'Dual-Interface Platform to Reduce Food Waste' });
  }, []);

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleCloseProject = (projectId: string) => {
    removeProject(projectId);
    if (projectId === 'shelf-life') {
      window.location.href = '/';
    }
  };

  const handleNavigateToProject = (projectId: string) => {
    if (projectId === 'shelf-life') {
      // Already on shelf-life page
      return;
    }
    window.location.href = `/project/${projectId}/`;
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  if (isMobile) {
    return <MobileShelfLifePage onBack={handleBack} />;
  }

  return (
    <ShelfLifePage 
      onBack={handleBack}
      openProjects={openProjects}
      onCloseProject={handleCloseProject}
      onNavigateToProject={handleNavigateToProject}
      onLogoClick={handleLogoClick}
    />
  );
} 