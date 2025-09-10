'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Sidebar, MediaPlayer } from './InteractiveHome';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import Footer from './Footer';

// Image assets from Figma - Now using proper local paths for Shelf-Life
const imgShelfLifeThumbnail1 = "/images/project-3.jpg";
const imgImage38 = "/images/shelf-life/look-and-feel/before-after-1.png";
const imgImage39 = "/images/shelf-life/look-and-feel/before-after-2.png";
const imgImage40 = "/images/shelf-life/look-and-feel/before-after-1.png"; // Not used, but keeping for consistency
const imgImage41 = "/images/shelf-life/features/features.png";
const imgImage43 = "/images/shelf-life/features/feature-1.png";
const imgImage47 = "/images/shelf-life/features/feature-2.png";
const imgImage46 = "/images/shelf-life/features/feature-3.png";
const imgImage48 = "/images/shelf-life/features/feature-4.png";
const imgImage49 = "/images/shelf-life/features/feature-5.png";
const imgImage53 = "/images/shelf-life/mobile-mockups/mobile-mockup-1.png";
const imgImage52 = "/images/shelf-life/mobile-mockups/mobile-mockup-2.png";
const imgImage51 = "/images/shelf-life/mobile-mockups/mobile-mockup-3.png";
const imgEllipse44 = "/images/shelf-life/user-feedback/user-1-avatar.png";
const imgEllipse45 = "/images/shelf-life/user-feedback/user-2-avatar.png";
const imgEllipse46 = "/images/shelf-life/user-feedback/user-3-avatar.png";

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

interface ShelfLifePageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

export default function ShelfLifePage({ onBack, openProjects, onCloseProject, onNavigateToProject, onLogoClick }: ShelfLifePageProps) {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'more' });
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; playShelfLifeAudio: () => void; pauseAudio: () => void }>(null);
  const [zoomedImage, setZoomedImage] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);






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

  const handleImageClick = (image: string) => {
    setZoomedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage('');
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
      // Play the Shelf-Life audio in MediaPlayer
      if (mediaPlayerRef.current) {
        mediaPlayerRef.current.playShelfLifeAudio();
      }
    }
  };

  return (
    <div className="h-screen bg-neutral-950 text-white w-full overflow-hidden">
      <div className="box-border content-stretch flex flex-row gap-4 items-stretch justify-start p-[12px] relative w-full min-w-0 overflow-hidden" style={{ height: 'calc(100vh - 74px)', maxHeight: 'calc(100vh - 74px)' }}>
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
        <div className="flex-1 min-w-0 flex flex-col relative rounded-xl overflow-hidden h-full">
          <div
            aria-hidden="true"
            className="absolute border border-[#0A0A0A] border-solid inset-0 pointer-events-none rounded-xl"
          />

          {/* Scrollable Content Section */}
          <div className="flex-1 overflow-y-auto scrollbar-thin h-full" style={{ maxHeight: 'calc(100vh - 74px - 24px)' }}>
            {/* Gradient Section - Hero */}
            <div style={{ background: 'linear-gradient(179deg, #5BB484 -37.41%, #194336 41.39%)' }}>
              <div className="p-7">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <a 
                    href="/"
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white"/>
                      <path d="M18 20L14 24L18 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 24H34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  {/* Website button hidden for Shelf-Life project */}
                </div>

                                    {/* Project Header */}
                    <div className="flex flex-col lg:flex-row gap-5 items-start h-full">
                  <div
                    className="w-60 h-60 bg-cover bg-center rounded-lg flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('${imgShelfLifeThumbnail1}')` }}
                    onClick={() => handleImageClick(imgShelfLifeThumbnail1)}
                  />
                  <div className="flex-1 pb-3 min-w-0 flex flex-col justify-start">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">Dual Interface</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">Reduce Food Waste</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">Sustainability</p>
                        </div>
                      </motion.div>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">
                      Save Food Platform to Reduce Food Waste
                    </h1>
                    <p className="text-xl text-gray-300">
                      Expected to help restaurants clear surplus food faster by streamlining listing to under 2 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-7">
              {/* Desktop Layout */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-5 items-center">
                {/* Audio Player Button */}
                <button
                  onClick={toggleAudio}
                  className="transition-transform duration-200 hover:scale-105 mb-4 sm:mb-0 sm:mr-4"
                  aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                  {isPlaying ? (
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="52" height="52" rx="26" fill="white"/>
                      <path d="M31.5002 17.75H28.7502C28.2439 17.75 27.8335 18.1604 27.8335 18.6667V33.3333C27.8335 33.8396 28.2439 34.25 28.7502 34.25H31.5002C32.0064 34.25 32.4168 33.8396 32.4168 33.3333V18.6667C32.4168 18.1604 32.0064 17.75 31.5002 17.75Z" fill="#121212"/>
                      <path d="M23.2502 17.75H20.5002C19.9939 17.75 19.5835 18.1604 19.5835 18.6667V33.3333C19.5835 33.8396 19.9939 34.25 20.5002 34.25H23.2502C23.7564 34.25 24.1668 33.8396 24.1668 33.3333V18.6667C24.1668 18.1604 23.7564 17.75 23.2502 17.75Z" fill="#121212"/>
                    </svg>
                  ) : (
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="52" height="52" rx="26" fill="white"/>
                      <path d="M19.8887 19.7782C19.8886 19.4654 19.971 19.1581 20.1277 18.8874C20.2843 18.6167 20.5096 18.392 20.7808 18.2362C21.0521 18.0804 21.3596 17.9989 21.6724 18C21.9852 18.0011 22.2921 18.0846 22.5623 18.2423L33.2256 24.4623C33.4947 24.6185 33.7181 24.8425 33.8735 25.1121C34.0289 25.3816 34.1108 25.6872 34.1111 25.9983C34.1113 26.3095 34.0299 26.6152 33.875 26.885C33.7201 27.1549 33.4971 27.3793 33.2282 27.5359L22.5623 33.7577C22.2921 33.9154 21.9852 33.9989 21.6724 34C21.3596 34.0011 21.0521 33.9196 20.7808 33.7638C20.5096 33.608 20.2843 33.3833 20.1277 33.1126C19.971 32.8419 19.8886 32.5346 19.8887 32.2218V19.7782Z" fill="#0A0A0A"/>
                    </svg>
                  )}
                </button>
                
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Duration</div>
                  <div className="text-gray-300">Apr 2023 - June 2023</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Role</div>
                  <div className="text-gray-300">Product Designer</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Collaborators</div>
                  <div className="text-gray-300">CEO & 1 Engineer</div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col gap-6 items-center">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-5 items-start justify-center">
                    <div className="leading-[22px] text-[15px] text-gray-300">
                      <p className="mb-0 text-[#f4915c]">Duration</p>
                      <p>Apr 2023 - June 2023</p>
                    </div>
                    <div className="leading-[22px] text-[15px] text-white">
                      <p className="mb-0 text-[#f4915c]">Role</p>
                      <p className="text-gray-300">Product Designer</p>
                    </div>
                    <div className="leading-[22px] text-[15px] text-white">
                      <p className="mb-0 text-[#f4915c]">Collaborators</p>
                      <p className="text-gray-300">CEO & 1 Engineer</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggleAudio}
                    className="transition-transform duration-200 hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="52" rx="26" fill="white"/>
                        <path d="M31.5002 17.75H28.7502C28.2439 17.75 27.8335 18.1604 27.8335 18.6667V33.3333C27.8335 33.8396 28.2439 34.25 28.7502 34.25H31.5002C32.0064 34.25 32.4168 33.8396 32.4168 33.3333V18.6667C32.4168 18.1604 32.0064 17.75 31.5002 17.75Z" fill="#121212"/>
                        <path d="M23.2502 17.75H20.5002C19.9939 17.75 19.5835 18.1604 19.5835 18.6667V33.3333C19.5835 33.8396 19.9939 34.25 20.5002 34.25H23.2502C23.7564 34.25 24.1668 33.8396 24.1668 33.3333V18.6667C24.1668 18.1604 23.7564 17.75 23.2502 17.75Z" fill="#121212"/>
                      </svg>
                    ) : (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="52" rx="26" fill="white"/>
                        <path d="M19.8887 19.7782C19.8886 19.4654 19.971 19.1581 20.1277 18.8874C20.2843 18.6167 20.5096 18.392 20.7808 18.2362C21.0521 18.0804 21.3596 17.9989 21.6724 18C21.9852 18.0011 22.2921 18.0846 22.5623 18.2423L33.2256 24.4623C33.4947 24.6185 33.7181 24.8425 33.8735 25.1121C34.0289 25.3816 34.1108 25.6872 34.1111 25.9983C34.1113 26.3095 34.0299 26.6152 33.875 26.885C33.7201 27.1549 33.4971 27.3793 33.2282 27.5359L22.5623 33.7577C22.2921 33.9154 21.9852 33.9989 21.6724 34C21.3596 34.0011 21.0521 33.9196 20.7808 33.7638C20.5096 33.608 20.2843 33.3833 20.1277 33.1126C19.971 32.8419 19.8886 32.5346 19.8887 32.2218V19.7782Z" fill="#0A0A0A"/>
                      </svg>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="p-7">
              <div className="w-full h-px bg-[#252525] mb-6"></div>
            </div>

            {/* Main Content */}
            <div className="px-6 md:px-12 lg:px-24 pb-10">
              {/* Background & Challenges */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  Background & Challenges
                </h2>
                <div className="text-lg text-gray-300 leading-[1.5] max-w-none">
                  <p className="mb-4">
                    Restaurants lose billions of dollars annually due to unsold food, which is ultimately discarded, causing both financial and significant environmental harm. The founding purpose of &ldquo;Shelf Life&rdquo; was to directly address this urgent problem of food waste.
                  </p>
                  <p>
                    Through a specially designed backend management interface for restaurants, we enable vendors to easily list surplus or soon-to-expire food products for sale at discounted prices to nearby consumers. This not only helps vendors convert what would have been a loss into extra revenue but also contributes to environmental protection. 
                  </p>
                </div>
              </div>

              {/* My Contribution */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  My Contribution
                </h2>
                <ul className="text-lg text-gray-300 leading-[1.5] list-disc pl-6 space-y-2">
                  <li><span className="text-white">Project Leadership</span>: Defined the complete end-to-end design workflow for both <span className="text-[#f4915c]">B2C and B2B</span> users.</li>
                  <li><span className="text-white">Design Output</span>: Delivered <span className="text-[#f4915c]">150+</span> high-fidelity screens covering the entire user journey.</li>
                  <li><span className="text-white">Design System</span>: Created a visual <span className="text-[#f4915c]">design system</span>, including typography, color, and components.</li>
                  <li><span className="text-white">User Research & Solution Design</span>: Transformed insights from in-depth <span className="text-[#f4915c]">user interviews</span>, specifically designed an intuitive dashboard and automated discounting tools to address the key efficiency pain points of restaurant owners.</li>
                </ul>
              </div>

              {/* Goal */}
              <div className="text-center mb-16">
                <p className="text-xl text-gray-400 mb-2">GOAL</p>
                <h2 className="text-3xl font-bold leading-[1.5]">
                  Empowering restaurants to turn waste into value.
                </h2>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Research Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-center mb-16">
                <h2 className="text-[28px] font-bold text-[#e6ff02]">
                  Research: Uncovering Key Insights
                </h2>
              </div>

              {/* Introduction */}
              <div className="mb-16">
                <p className="text-lg text-gray-300 leading-[1.5]">
                  To ensure &ldquo;Shelf Life&rdquo; was a viable solution, I conducted comprehensive user research, which started with a competitive analysis and then engaging directly with our target audience. This process helped us define the core challenges and opportunities.
                </p>
              </div>

              {/* Competitive Analysis */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 36" fill="none" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1.66699 34.6668V4.66683C1.66699 4.40809 1.72723 4.1529 1.84295 3.92147C1.95866 3.69005 2.12667 3.48874 2.33366 3.3335C4.06462 2.03527 6.16996 1.3335 8.33366 1.3335C13.3337 1.3335 16.667 4.66683 20.5553 4.66683C22.7775 4.66683 24.4814 4.22239 25.667 3.3335C25.9146 3.14778 26.209 3.03469 26.5173 3.0069C26.8256 2.9791 27.1355 3.0377 27.4123 3.17612C27.6892 3.31454 27.922 3.52732 28.0847 3.79061C28.2475 4.0539 28.3337 4.35731 28.3337 4.66683V21.3335C28.3337 21.5922 28.2734 21.8474 28.1577 22.0789C28.042 22.3103 27.874 22.5116 27.667 22.6668C25.936 23.9651 23.8307 24.6668 21.667 24.6668C16.667 24.6668 13.3337 21.3335 8.33366 21.3335C5.87385 21.3336 3.50037 22.2402 1.66699 23.8802"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Competitive Analysis
                  </h3>
                </div>
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    I studied the primary food waste app in the Taiwanese market, <span className="underline">Tasteme</span>, and discovered a key market gap.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="text-white">Pain Point</span>: Tasteme still relies on restaurants to manually upload surplus food. This process is a significant burden for busy restaurant owners, leading to low platform adoption.
                    </li>
                    <li>
                      <span className="text-white">Opportunity</span>: This insight made me realize that the biggest opportunity was to develop an automated platform that integrates with existing restaurant POS systems, significantly reducing the operational burden on vendors.
                    </li>
                  </ul>
                  
                  {/* Competitive Analysis Image */}
                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full sm:w-[400px] md:w-[500px] lg:w-[550px] xl:w-[600px] aspect-[600/419] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-[12px]"
                      style={{ backgroundImage: `url('/images/shelf-life/competitive-analysis/competitive-analysis.png')` }}
                      onClick={() => handleImageClick('/images/shelf-life/competitive-analysis/competitive-analysis.png')}
                  />
                </div>
                </div>
              </div>

              {/* User Insights */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M25 23.333C25.3333 21.6663 26.1667 20.4997 27.5 19.1663C29.1667 17.6663 30 15.4997 30 13.333C30 10.6808 28.9464 8.1373 27.0711 6.26194C25.1957 4.38658 22.6522 3.33301 20 3.33301C17.3478 3.33301 14.8043 4.38658 12.9289 6.26194C11.0536 8.1373 10 10.6808 10 13.333C10 14.9997 10.3333 16.9997 12.5 19.1663C13.6667 20.333 14.6667 21.6663 15 23.333"/>
                      <path d="M15 30H25"/>
                      <path d="M16.667 36.667H23.3337"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    User Insights
                  </h3>
                </div>
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    I conducted in-depth interviews with both consumers and restaurant owners. Through synthesis, I identified their core needs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="text-white">For Restaurant Owners:</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Pain Point: Time-consuming inventory management.</li>
                        <li>Need: Tools for automated management, discount setting, and sales data reporting.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="text-white">For Consumers:</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Pain Point: Difficulty in quickly finding affordable meals.</li>
                        <li>Need: A convenient browsing and filtering function to quickly find discounted food from nearby restaurants.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Journey Mapping Table */}
              <div className="mb-16">
                <div className="overflow-hidden rounded-[20px] border border-[#0A0A0A]">
                  <div className="flex border-b border-[#0A0A0A]">
                    <div className="bg-[#292929] px-5 py-3 w-[143px] flex items-center justify-center border-r border-[#0A0A0A]">
                      <span className="text-lg text-white uppercase">Phase</span>
              </div>
                    <div className="bg-[#292929] px-5 py-3 w-[422px] flex items-center justify-center border-r border-[#0A0A0A]">
                      <span className="text-lg text-white uppercase">Restaurant Owner&apos;s Journey</span>
              </div>
                    <div className="bg-[#292929] px-5 py-3 w-[390px] flex items-center justify-center">
                      <span className="text-lg text-white uppercase">Consumer&apos;s Journey</span>
                    </div>
              </div>

                  <div className="flex border-b border-[#0A0A0A]">
                    <div className="bg-[#292929] px-5 py-3 w-[143px] flex items-center border-r border-[#0A0A0A]">
                      <span className="text-lg text-white">Discovery</span>
                  </div>
                    <div className="bg-[#292929] px-5 py-3 w-[422px] h-24 flex items-center border-r border-[#0A0A0A]">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Faced with daily food waste and financial loss.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: Find an efficient, automated platform.
                        </p>
                </div>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[390px] h-24 flex items-center">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Tired of expensive meal options.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: Find an affordable and delicious alternative.
                        </p>
                      </div>
                    </div>
                </div>

                  <div className="flex border-b border-[#0A0A0A]">
                    <div className="bg-[#292929] px-5 py-3 w-[143px] flex items-center border-r border-[#0A0A0A]">
                      <span className="text-lg text-white">Onboarding</span>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[422px] h-[120px] flex items-center border-r border-[#0A0A0A]">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Manual inventory listing is time-consuming.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: Use an intuitive, integrated onboarding process.
                  </p>
                </div>
                  </div>
                    <div className="bg-[#292929] px-5 py-3 w-[390px] flex items-center">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Hard to find local deals.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: Discover the app through a compelling ad or referral.
                        </p>
                  </div>
                  </div>
                </div>

                  <div className="flex border-b border-[#0A0A0A]">
                    <div className="bg-[#292929] px-5 py-3 w-[143px] flex items-center border-r border-[#0A0A0A]">
                      <span className="text-lg text-white">Daily Use</span>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[422px] flex items-center border-r border-[#0A0A0A]">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Labor-intensive operations.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: Leverage POS integration for automatic listings and sales tracking.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[390px] h-[120px] flex items-center">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Inconvenient browsing experience.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: Use the map and filtering features to quickly find nearby options.
                        </p>
                      </div>
                    </div>
                </div>

                  <div className="flex border-b border-[#0A0A0A]">
                    <div className="bg-[#292929] px-5 py-3 w-[143px] flex items-center border-r border-[#0A0A0A]">
                      <span className="text-lg text-white">Completion</span>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[422px] flex items-center border-r border-[#0A0A0A]">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Lack of actionable insights.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: View real-time sales data and analytics on a dashboard.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[390px] h-[120px] flex items-center">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#fd7a7a]">Pain Point</span>: Clunky checkout and pickup process.
                        </p>
                        <p>
                          <span className="text-[#64b92e]">Solution</span>: Enjoy a simple and smooth in-app payment and QR code pickup.
                        </p>
                      </div>
                </div>
              </div>

                  <div className="flex">
                    <div className="bg-[#292929] px-5 py-3 w-[143px] flex items-center border-r border-[#0A0A0A]">
                      <span className="text-lg text-white">Outcome</span>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[422px] flex items-center border-r border-[#0A0A0A]">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#e6ff02]">Result</span>: Converts food waste into a source of profit.
                        </p>
                        <p>
                          <span className="text-[#e6ff02]">Success Metric</span>: Reduced waste, increased revenue.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#292929] px-5 py-3 w-[390px] h-[120px] flex items-center">
                      <div className="text-lg text-white">
                        <p className="mb-0">
                          <span className="text-[#e6ff02]">Result</span>: Gets great value on a meal and feels good about it.
                        </p>
                        <p>
                          <span className="text-[#e6ff02]">Success Metric</span>: Becomes a repeat user and shares the experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-lg text-gray-400">findings from user interviews</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Interface Design Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-center mb-16">
                  <h2 className="text-[28px] font-bold text-[#e6ff02]">
                  Interface Design
                  </h2>
                </div>
                
              {/* The Consumer Experience */}
                <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M25 23.333C25.3333 21.6663 26.1667 20.4997 27.5 19.1663C29.1667 17.6663 30 15.4997 30 13.333C30 10.6808 28.9464 8.1373 27.0711 6.26194C25.1957 4.38658 22.6522 3.33301 20 3.33301C17.3478 3.33301 14.8043 4.38658 12.9289 6.26194C11.0536 8.1373 10 10.6808 10 13.333C10 14.9997 10.3333 16.9997 12.5 19.1663C13.6667 20.333 14.6667 21.6663 15 23.333"/>
                      <path d="M15 30H25"/>
                      <path d="M16.667 36.667H23.3337"/>
                        </svg>
                    </div>
                  <h3 className="text-lg text-gray-300">
                    The Consumer Experience
                  </h3>
                    </div>
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    From Discovery to Purchase
                  </p>
                  <p>
                    This section showcases how consumers can easily find, filter, and purchase surplus food through the app. My design goal was to make the process as simple, quick, and enjoyable as possible.
                  </p>
                  </div>
                </div>

              {/* Discovery & Browsing */}
                <div className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mb-4">
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/discovery-1.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/discovery-1.png')}
                  />
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/discovery-2.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/discovery-2.png')}
                  />
                  <div 
                    className="w-full max-w-[229px] aspect-[229/497] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/discovery-3.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/discovery-3.png')}
                  />
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/discovery-4.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/discovery-4.png')}
                  />
                    </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Discovery & Browsing</p>
                      </div>
                    </div>

              {/* Product & Checkout */}
              <div className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mb-4">
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/checkout-1.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/checkout-1.png')}
                  />
                  <div 
                    className="w-full max-w-[229px] aspect-[229/497] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/checkout-2.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/checkout-2.png')}
                  />
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/checkout-3.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/checkout-3.png')}
                  />
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/checkout-4.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/checkout-4.png')}
                  />
                    </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Product & Checkout</p>
                  </div>
                </div>

              {/* Pickup QR code & User Profile */}
                <div className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-4">
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/profile-1.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/profile-1.png')}
                  />
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/profile-2.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/profile-2.png')}
                  />
                  <div 
                    className="w-full max-w-[230px] aspect-[230/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2c/profile-3.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2c/profile-3.png')}
                  />
                    </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Pickup QR code & User Profile</p>
                      </div>
                  </div>
                </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
              </div>

            {/* B2B Interface Design Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              {/* The Restaurant Owner's Interface */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M25 23.333C25.3333 21.6663 26.1667 20.4997 27.5 19.1663C29.1667 17.6663 30 15.4997 30 13.333C30 10.6808 28.9464 8.1373 27.0711 6.26194C25.1957 4.38658 22.6522 3.33301 20 3.33301C17.3478 3.33301 14.8043 4.38658 12.9289 6.26194C11.0536 8.1373 10 10.6808 10 13.333C10 14.9997 10.3333 16.9997 12.5 19.1663C13.6667 20.333 14.6667 21.6663 15 23.333"/>
                      <path d="M15 30H25"/>
                      <path d="M16.667 36.667H23.3337"/>
                    </svg>
                  </div>
                  <h3 className="text-lg text-gray-300">
                    The Restaurant Owner&apos;s Interface
                  </h3>
                </div>
                </div>

              {/* Sales Report Dashboard */}
                <div className="mb-16">
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Sales Report Dashboard
                  </p>
                  <p>
                    Restaurant owners can access detailed sales reports directly from the app&apos;s homepage, allowing them to monitor their business performance and make informed decisions.
                  </p>
                    </div>
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-full max-w-[716px] aspect-[716/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2b/sales-dashboard.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2b/sales-dashboard.png')}
                  />
                      </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Sales Report Dashboard</p>
                      </div>
                    </div>

              {/* Menu Management */}
              <div className="mb-16">
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Menu Management
                  </p>
                  <p>
                    Owners have the flexibility to upload and manage their menu directly through the app, ensuring that the latest offerings are always available to customers.
                  </p>
                </div>
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-full max-w-[715px] aspect-[715/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2b/menu-management.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2b/menu-management.png')}
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Menu Management</p>
                  </div>
                </div>

              {/* Auto-Apply Discount Rules */}
                <div className="mb-16">
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Auto-Apply Discount Rules
                  </p>
                  <p>
                    Automatically apply timed discounts to selected items with our Discount Schedule feature, ensuring precise pricing management without manual intervention.
                  </p>
                    </div>
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-full max-w-[715px] aspect-[715/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2b/discount-rules.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2b/discount-rules.png')}
                  />
                      </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Auto-Apply Discount Rules</p>
                      </div>
                    </div>

              {/* Order Status */}
              <div className="mb-16">
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Order Status
                  </p>
                  <p>
                    Order Status helps users quickly identify each order with clear tags, showing whether it&apos;s new or ready, and indicating if payment is completed or pending.
                  </p>
                </div>
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-full max-w-[715px] aspect-[715/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2b/order-status.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2b/order-status.png')}
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Order Status</p>
                  </div>
                </div>

              {/* Order Notifications */}
                <div className="mb-16">
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Order Notifications
                  </p>
                  <p>
                    Owners receive real-time notifications whenever customers place orders, enabling prompt preparation and efficient order fulfillment.
                  </p>
                    </div>
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-full max-w-[715px] aspect-[715/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2b/order-notifications.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2b/order-notifications.png')}
                  />
                      </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Order Notifications</p>
                      </div>
                    </div>

              {/* QR Code Scanning */}
              <div className="mb-16">
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    QR Code Scanning
                  </p>
                  <p>
                    Upon customer arrival, owners can use the app&apos;s built-in QR code scanner to easily identify and verify orders, streamlining the pickup process and enhancing customer satisfaction.
                  </p>
                  </div>
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-full max-w-[715px] aspect-[715/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2b/qr-scanning.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2b/qr-scanning.png')}
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">QR Code Scanning</p>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="mb-16">
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Customer Reviews
                  </p>
                  <p>
                    Owners have the ability to view and respond to customer reviews within the app, fostering communication and allowing them to address feedback effectively.
                  </p>
                </div>
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-full max-w-[715px] aspect-[715/500] bg-cover bg-center bg-no-repeat rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/shelf-life/b2b/customer-reviews.png')` }}
                    onClick={() => handleImageClick('/images/shelf-life/b2b/customer-reviews.png')}
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-400">Customer Reviews</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Future Plans */}
            <div className="px-6 md:px-12 lg:px-24 pb-16">
              <div className="text-center mb-16">
                <h2 className="text-[28px] font-bold text-[#e6ff02]">
                  Future Plans
              </h2>
            </div>

              <div className="mb-16">
                <div className="text-lg text-gray-300 leading-[1.5]">
                  <p className="mb-4">
                    In the project&apos;s future planning, we recognize that technical integration will be a key challenge. Since not all POS systems support public APIs, we will prioritize partnerships with major cloud-based POS systems.
                  </p>
                  <p>
                    This approach will ensure we can successfully implement the core <span className="text-[#f4915c]">automated integration</span> feature, allowing us to quickly bring the product to market and validate its feasibility. At the same time, this will lay a solid foundation for future expansion to a wider variety of POS systems.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <div className="flex gap-6 items-center justify-center mb-6">
                  <p className="text-[16px] text-gray-400 uppercase">Personal Growth</p>
                </div>
                <div className="text-lg text-gray-300 leading-[1.5]">
                  <p>
                    Working with a client who aimed to reduce food surplus but was uncertain about the product&apos;s impact on B2B users, I conducted extensive market research to define user needs. This process emphasized the importance of user-centric design, catering to diverse demographics, and incorporating user feedback to create efficient interfaces.
                  </p>
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
        {/* Audio Player - Same component for both desktop and mobile */}
        <MediaPlayer ref={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
      </div>



      {/* Zoom Modal */}
               {isZoomed && (
           <div
             className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-auto"
             onClick={closeZoom}
           >
             <div className="relative w-[85vw] h-[85vh] flex items-center justify-center">
               <button
                 onClick={closeZoom}
                 className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
               >
                 ×
               </button>
               <img
                 src={zoomedImage}
                 alt="Zoomed view"
                 className="max-w-full max-h-full object-contain"
                 onClick={(e) => e.stopPropagation()}
               />
             </div>
           </div>
         )}
    </div>
  );
}
