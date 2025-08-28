"use client";

import BrainBoxPage from "@/components/BrainBoxPage";

export default function BrainBoxProject() {
  return (
    <BrainBoxPage 
      onBack={() => window.history.back()}
      onNavigateToProject={(project) => {
        if (project === 'airframe') window.location.href = '/projects/airframe';
        if (project === 'eatsy') window.location.href = '/projects/eatsy';
        if (project === 'shelf-life') window.location.href = '/projects/shelf-life';
      }}
      onLogoClick={() => window.location.href = '/'}
    />
  );
} 