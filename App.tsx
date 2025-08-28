"use client";

import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import InteractiveHome from "./components/InteractiveHome";
import AirframePage from "./components/AirframePage";
import EatsyPage from "./components/EatsyPage";
import BrainBoxPage from "./components/BrainBoxPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'airframe' | 'eatsy' | 'brainbox'>('home');
  const [openProjects, setOpenProjects] = useState<{ id: string; title: string }[]>([]);

  const navigateToPage = (page: 'home' | 'airframe' | 'eatsy' | 'brainbox') => {
    setCurrentPage(page);
  };

  const openProject = (projectId: string) => {
    // Define project metadata
    const projectMetadata: Record<string, { id: string; title: string }> = {
      airframe: { id: 'airframe', title: 'AI-powered B2B Procurement Platform' },
      eatsy: { id: 'eatsy', title: 'Customizable Reservation Platform' },
      brainbox: { id: 'brainbox', title: 'AI-Powered SAT Preparation Platform' },
      // Add more projects here as needed
    };

    const project = projectMetadata[projectId];
    if (project) {
      // Add to open projects if not already there
      setOpenProjects(prev => {
        const exists = prev.some(p => p.id === project.id);
        if (!exists) {
          return [...prev, project];
        }
        return prev;
      });

      // Navigate to the project page
      if (projectId === 'airframe') {
        navigateToPage('airframe');
      } else if (projectId === 'eatsy') {
        navigateToPage('eatsy');
      } else if (projectId === 'brainbox') {
        navigateToPage('brainbox');
      }
    }
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