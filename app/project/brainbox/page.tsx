"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BrainBoxPage from "@/components/BrainBoxPage";
import MobileBrainBoxPage from "@/components/MobileBrainBoxPage";
import { useOpenProjects } from '@/contexts/OpenProjectsContext';

export default function BrainBoxProject() {
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
    addProject({ id: 'brainbox', title: 'AI-Powered SAT Preparation Platform' });
  }, []);

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleCloseProject = (projectId: string) => {
    removeProject(projectId);
    if (projectId === 'brainbox') {
      window.location.href = '/';
    }
  };

  const handleNavigateToProject = (projectId: string) => {
    if (projectId === 'brainbox') {
      // Already on brainbox page
      return;
    }
    window.location.href = `/project/${projectId}/`;
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  if (isMobile) {
    return <MobileBrainBoxPage onBack={handleBack} />;
  }

  return (
    <BrainBoxPage 
      onBack={handleBack}
      openProjects={openProjects}
      onCloseProject={handleCloseProject}
      onNavigateToProject={handleNavigateToProject}
      onLogoClick={handleLogoClick}
    />
  );
} 