"use client";

import { useState, useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import InteractiveHome from "./components/InteractiveHome";
import AirframePage from "./components/AirframePage";
import MobileAirframePage from "./components/MobileAirframePage";
import EatsyPage from "./components/EatsyPage";
import MobileEatsyPage from "./components/MobileEatsyPage";
import BrainBoxPage from "./components/BrainBoxPage";
import MobileBrainBoxPage from "./components/MobileBrainBoxPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'airframe' | 'eatsy' | 'brainbox'>('home');
  const [openProjects, setOpenProjects] = useState<{ id: string; title: string }[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDeviceType = () => {
      const mobile = window.innerWidth <= 768;
      console.log('App - Window width:', window.innerWidth, 'isMobile:', mobile);
      setIsMobile(mobile);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const navigateToPage = (page: 'home' | 'airframe' | 'eatsy' | 'brainbox') => {
    setCurrentPage(page);
  };

  const openProject = (projectId: string) => {
    // Navigate directly to the project URL
    window.location.href = `/project/${projectId}/`;
  };

  const handleCloseProject = (projectId: string) => {
    setOpenProjects(prev => {
      const newProjects = prev.filter(project => project.id !== projectId);
      
      // If we're on the project page that was closed, navigate back to home
      if (currentPage === projectId) {
        setCurrentPage('home');
      }
      
      return newProjects;
    });
  };

  return (
    <>
      {currentPage === 'home' && (
        <InteractiveHome 
          onNavigateToProject={openProject}
          openProjects={openProjects}
          onCloseProject={handleCloseProject}
        />
      )}
      {currentPage === 'airframe' && (
        <AirframePage 
          onBack={() => navigateToPage('home')}
          openProjects={openProjects}
          onCloseProject={handleCloseProject}
          onNavigateToProject={openProject}
          onLogoClick={() => navigateToPage('home')}
        />
      )}
      {currentPage === 'eatsy' && (
        <EatsyPage 
          onBack={() => navigateToPage('home')}
          openProjects={openProjects}
          onCloseProject={handleCloseProject}
          onNavigateToProject={openProject}
          onLogoClick={() => navigateToPage('home')}
        />
      )}
      {currentPage === 'brainbox' && (
        <BrainBoxPage 
          onBack={() => navigateToPage('home')}
          openProjects={openProjects}
          onCloseProject={handleCloseProject}
          onNavigateToProject={openProject}
          onLogoClick={() => navigateToPage('home')}
        />
      )}
      <Toaster />
    </>
  );
}