'use client';

import EatsyPage from '@/components/EatsyPage';

export default function EatsyProject() {
  const handleBack = () => window.location.href = '/';
  const handleLogoClick = () => window.location.href = '/';
  const handleCloseProject = () => window.location.href = '/';
  const openProjects = [
    { id: 'airframe', title: 'AI-Powered Design System' },
    { id: 'eatsy', title: 'Customizable Reservation Platform' },
    { id: 'brainbox', title: 'Educational AI Platform' },
    { id: 'shelf-life', title: 'Food Waste Management' }
  ];
  const handleNavigateToProject = (projectId: string) => window.location.href = `/project/${projectId}/`;

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
