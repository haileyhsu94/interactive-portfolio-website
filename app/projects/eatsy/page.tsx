'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EatsyPage from '@/components/EatsyPage';
import MobileEatsyPage from '@/components/MobileEatsyPage';

export default function EatsyProject() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

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

  if (isMobile) {
    return <MobileEatsyPage onBack={handleBack} />;
  }

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
