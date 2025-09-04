'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Sidebar, MediaPlayer } from './InteractiveHome';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import Footer from './Footer';

interface AirframePageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

export default function ShelfLifePage({ onBack, openProjects, onCloseProject, onNavigateToProject, onLogoClick }: AirframePageProps) {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'more' });
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; pauseAudio: () => void }>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');

  const handleImageClick = (image: string) => {
    setZoomedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage('');
  };

  // Listen for MediaPlayer state changes
  useEffect(() => {
    const checkMediaPlayerState = () => {
      // We'll use a custom event to sync with MediaPlayer state
      const handleMediaStateChange = (event: CustomEvent) => {
        setIsPlaying(event.detail.isPlaying);
      };
      
      window.addEventListener('mediaStateChange', handleMediaStateChange as EventListener);
      
      return () => {
        window.removeEventListener('mediaStateChange', handleMediaStateChange as EventListener);
      };
    };
    
    return checkMediaPlayerState();
  }, []);

  const handleNavigateToSection = (section: 'featured' | 'more' | 'contact') => {
    setNavigation({ activeSection: section });
  };

  const toggleAudio = () => {
    if (isPlaying) {
      setIsPlaying(false);
      // Pause the MediaPlayer
      if (mediaPlayerRef.current) {
        mediaPlayerRef.current.pauseAudio();
      }
    } else {
      setIsPlaying(true);
      // Play the MediaPlayer
      if (mediaPlayerRef.current) {
        mediaPlayerRef.current.playAirframeAudio();
      }
    }
  };

  return (
    <div className="h-screen bg-neutral-950 text-white w-full overflow-hidden">
      <div className="box-border content-stretch flex flex-row gap-4 items-stretch justify-start p-[12px] relative w-full min-w-0" style={{ height: 'calc(100vh - 74px)' }}>
        {/* Sidebar */}
        <div className="hidden lg:block w-[200px] flex-shrink-0 h-full">
          <Sidebar 
            navigation={navigation} 
            onNavigateToSection={handleNavigateToSection}
            openProjects={openProjects}
            currentProjectId="shelf-life"
            onCloseProject={onCloseProject}
            onNavigateToProject={onNavigateToProject}
            isProjectPage={true}
            onLogoClick={onLogoClick}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 flex flex-col relative rounded-xl overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
          />
          
          {/* Scrollable Content Section */}
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {/* Gradient Section - Now scrolls with content */}
            <div style={{ background: 'linear-gradient(179deg, #7A96C4 -37.41%, #3C4A61 41.39%)' }}>
              <div className="p-7">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <button 
                    onClick={onBack}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white"/>
                      <path d="M18 20L14 24L18 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 24H34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Dual-Interface Platform to Reduce Food Waste</h1>
                    <p className="text-gray-300">Expected to help restaurants clear surplus food faster by streamlining listing to under 2 minutes</p>
                  </div>
                  
                  <div className="w-12 h-12"></div> {/* Spacer for centering */}
                </div>

                {/* Project Overview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-gray-200 leading-relaxed">
                    This project addresses the critical issue of food waste in the restaurant industry by creating a dual-interface platform 
                    that connects restaurants with consumers. The platform streamlines the process of listing surplus food, making it 
                    accessible to customers who can purchase it at reduced prices.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-white/10 backdrop-blur-sm border-0">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">Mobile B2C App</h3>
                      <p className="text-gray-200">Consumer-facing mobile application for browsing and purchasing surplus food from local restaurants.</p>
                    </div>
                  </Card>
                  
                  <Card className="bg-white/10 backdrop-blur-sm border-0">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">Tablet B2B Dashboard</h3>
                      <p className="text-gray-200">Restaurant management interface for listing surplus food items with streamlined workflow.</p>
                    </div>
                  </Card>
                </div>

                {/* Impact Metrics */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#e6ff02] mb-2">50+</div>
                      <div className="text-gray-200">Unique screens delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#e6ff02] mb-2">&lt;2 min</div>
                      <div className="text-gray-200">Listing time target</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#e6ff02] mb-2">Dual</div>
                      <div className="text-gray-200">Interface platform</div>
                    </div>
                  </div>
                </div>

                {/* Project Images */}
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Mobile App Interface</h3>
                    <div 
                      className="aspect-video bg-center bg-cover bg-no-repeat rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('/images/project-3.jpg')` }}
                      onClick={() => handleImageClick('/images/project-3.jpg')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Attribution - Bottom of page */}
      <div className="hidden lg:block bg-neutral-950 px-4 py-2 mb-[74px]">
        <Footer />
      </div>

      {/* Audio Player - Sticky to bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex-shrink-0 bg-neutral-950 w-full" style={{ height: '74px' }}>
        <MediaPlayer ref={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-auto"
            onClick={closeZoom}
          >
            <div className="relative w-[85vw] h-[85vh] flex items-center justify-center">
              <img
                src={zoomedImage}
                alt="Zoomed view"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              <button
                onClick={closeZoom}
                className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
