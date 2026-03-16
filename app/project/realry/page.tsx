"use client";

import { useState, useEffect } from 'react';
import RealryPage from '@/components/RealryPage';
import MobileRealryPage from '@/components/MobileRealryPage';
import { useOpenProjects } from '@/contexts/OpenProjectsContext';

export default function RealryProject() {
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

  useEffect(() => {
    addProject({ id: 'realry', title: 'Realry' });
  }, [addProject]);

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleCloseProject = (projectId: string) => {
    removeProject(projectId);
    if (projectId === 'realry') {
      window.location.href = '/';
    }
  };

  const handleNavigateToProject = (projectId: string) => {
    if (projectId === 'realry') {
      return;
    }
    window.location.href = `/project/${projectId}/`;
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

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
