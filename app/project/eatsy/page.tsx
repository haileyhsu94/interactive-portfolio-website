'use client';

import { useEffect } from 'react';
import EatsyPage from '@/components/EatsyPage';
import { useOpenProjects } from '@/contexts/OpenProjectsContext';

export default function EatsyProject() {
  const { openProjects, addProject, removeProject } = useOpenProjects();
  
  console.log('EatsyProject: openProjects:', openProjects);
  console.log('EatsyProject: addProject function:', addProject);

  // Add current project to open projects when component mounts
  useEffect(() => {
    console.log('EatsyProject: useEffect running, calling addProject');
    addProject({ id: 'eatsy', title: 'Customizable Reservation Platform' });
  }, []);

  const handleBack = () => window.location.href = '/';
  const handleLogoClick = () => window.location.href = '/';
  
  const handleCloseProject = (projectId: string) => {
    removeProject(projectId);
    if (projectId === 'eatsy') {
      window.location.href = '/';
    }
  };

  const handleNavigateToProject = (projectId: string) => {
    if (projectId === 'eatsy') {
      // Already on eatsy page
      return;
    }
    window.location.href = `/project/${projectId}/`;
  };

  return (
    <EatsyPage
      onBack={handleBack}
      openProjects={openProjects}
      onCloseProject={handleCloseProject}
      onNavigateToProject={handleNavigateToProject}
      onLogoClick={handleLogoClick}
    />
  );
}
