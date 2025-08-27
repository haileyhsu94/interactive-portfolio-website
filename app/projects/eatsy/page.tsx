'use client';

import { useRouter } from 'next/navigation';
import EatsyPage from '@/components/EatsyPage';

export default function EatsyProject() {
  const router = useRouter();

  const handleBack = () => router.push('/');
  const handleLogoClick = () => router.push('/');
  const handleCloseProject = () => router.push('/');
  const openProjects = [
    { id: 'airframe', title: 'AI-Powered Design System' },
    { id: 'eatsy', title: 'Customizable Reservation Platform' },
    { id: 'brainbox', title: 'Educational AI Platform' },
    { id: 'shelf-life', title: 'Food Waste Management' }
  ];
  const handleNavigateToProject = (projectId: string) => router.push(`/projects/${projectId}`);

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
