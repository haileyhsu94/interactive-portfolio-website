'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
}

interface OpenProjectsContextType {
  openProjects: Project[];
  addProject: (project: Project) => void;
  removeProject: (projectId: string) => void;
  isProjectOpen: (projectId: string) => boolean;
}

const OpenProjectsContext = createContext<OpenProjectsContextType | undefined>(undefined);

export function OpenProjectsProvider({ children }: { children: React.ReactNode }) {
  const [openProjects, setOpenProjects] = useState<Project[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('openProjects');
      if (saved) {
        try {
          setOpenProjects(JSON.parse(saved));
        } catch (error) {
          console.error('Failed to parse saved open projects:', error);
        }
      }
    }
  }, []);

  // Save to localStorage whenever openProjects changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('openProjects', JSON.stringify(openProjects));
    }
  }, [openProjects]);

  const addProject = (project: Project) => {
    console.log('OpenProjectsContext: addProject called with:', project);
    setOpenProjects(prev => {
      console.log('OpenProjectsContext: current projects:', prev);
      // Check if project already exists
      const exists = prev.some(p => p.id === project.id);
      if (exists) {
        console.log('OpenProjectsContext: project already exists, not adding');
        return prev; // Don't add duplicates
      }
      // Add new project to the beginning of the list
      const newProjects = [project, ...prev];
      console.log('OpenProjectsContext: new projects array:', newProjects);
      return newProjects;
    });
  };

  const removeProject = (projectId: string) => {
    setOpenProjects(prev => prev.filter(p => p.id !== projectId));
  };

  const isProjectOpen = (projectId: string) => {
    return openProjects.some(p => p.id === projectId);
  };

  return (
    <OpenProjectsContext.Provider value={{
      openProjects,
      addProject,
      removeProject,
      isProjectOpen
    }}>
      {children}
    </OpenProjectsContext.Provider>
  );
}

export function useOpenProjects() {
  const context = useContext(OpenProjectsContext);
  if (context === undefined) {
    throw new Error('useOpenProjects must be used within an OpenProjectsProvider');
  }
  return context;
}
