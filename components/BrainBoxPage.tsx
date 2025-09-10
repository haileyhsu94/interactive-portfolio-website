'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Sidebar, MediaPlayer } from './InteractiveHome';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import Footer from './Footer';

// Image assets from Figma - Now using proper local paths

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

interface BrainBoxPageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

export default function BrainBoxPage({ onBack, openProjects, onCloseProject, onNavigateToProject, onLogoClick }: BrainBoxPageProps) {
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

  const toggleAudio = () => {
    if (isPlaying) {
      setIsPlaying(false);
      // Pause the MediaPlayer
      if (mediaPlayerRef.current) {
        mediaPlayerRef.current.pauseAudio();
      }
    } else {
      setIsPlaying(true);
      // Play the Eatsy audio in MediaPlayer
      if (mediaPlayerRef.current) {
        mediaPlayerRef.current.playBrainBoxAudio();
      }
    }
  };

  const handleImageClick = (image: string) => {
    setZoomedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage('');
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
            currentProjectId="brainbox"
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
            {/* Gradient Section - Hero */}
            <div style={{ background: 'linear-gradient(179deg, #957DCA -37.41%, #4B3F66 41.39%)' }}>
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
                  <a href="https://www.brainboxai.app/" target="_blank" rel="noopener noreferrer">
                    <svg width="118" height="40" viewBox="0 0 118 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="118" height="40" rx="20" fill="#D1D5DB"/>
                      <path d="M28 30C33.5228 30 38 25.5228 38 20C38 14.4772 33.5228 10 28 10C22.4772 10 18 14.4772 18 20C18 25.5228 22.4772 30 28 30Z" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M28 10C25.4322 12.6962 24 16.2767 24 20C24 23.7233 25.4322 27.3038 28 30C30.5678 27.3038 32 23.7233 32 20C32 16.2767 30.5678 12.6962 28 10Z" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 20H38" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M51.0824 25L48.2983 14.8182H49.5511L51.679 23.1108H51.7784L53.946 14.8182H55.3381L57.5057 23.1108H57.6051L59.733 14.8182H60.9858L58.2017 25H56.929L54.6818 16.8864H54.6023L52.3551 25H51.0824ZM64.8537 25.1591C64.1179 25.1591 63.4832 24.9967 62.9496 24.6719C62.4193 24.3438 62.0099 23.8864 61.7216 23.2997C61.4366 22.7098 61.294 22.0237 61.294 21.2415C61.294 20.4593 61.4366 19.7699 61.7216 19.1733C62.0099 18.5734 62.411 18.1061 62.9247 17.7713C63.4418 17.4332 64.045 17.2642 64.7344 17.2642C65.1321 17.2642 65.5249 17.3305 65.9126 17.4631C66.3004 17.5956 66.6534 17.8111 66.9716 18.1094C67.2898 18.4044 67.5433 18.7955 67.7322 19.2827C67.9212 19.7699 68.0156 20.3698 68.0156 21.0824V21.5795H62.1293V20.5653H66.8224C66.8224 20.1345 66.7363 19.75 66.5639 19.4119C66.3949 19.0739 66.1529 18.8071 65.8381 18.6115C65.5265 18.416 65.1586 18.3182 64.7344 18.3182C64.267 18.3182 63.8627 18.4342 63.5213 18.6662C63.1832 18.8949 62.9231 19.1932 62.7408 19.5611C62.5585 19.929 62.4673 20.3234 62.4673 20.7443V21.4205C62.4673 21.9972 62.5668 22.486 62.7656 22.8871C62.9678 23.2848 63.2479 23.5881 63.6058 23.7969C63.9638 24.0024 64.3797 24.1051 64.8537 24.1051C65.1619 24.1051 65.4403 24.062 65.6889 23.9759C65.9408 23.8864 66.1579 23.7538 66.3402 23.5781C66.5225 23.3991 66.6634 23.1771 66.7628 22.9119L67.8963 23.2301C67.777 23.6146 67.5765 23.9527 67.2947 24.2443C67.013 24.5327 66.665 24.758 66.2507 24.9205C65.8364 25.0795 65.3707 25.1591 64.8537 25.1591ZM69.9595 25V14.8182H71.1328V18.5767H71.2322C71.3184 18.4441 71.4377 18.2751 71.5902 18.0696C71.746 17.8608 71.968 17.6752 72.2564 17.5128C72.5481 17.3471 72.9425 17.2642 73.4396 17.2642C74.0826 17.2642 74.6494 17.425 75.1399 17.7464C75.6304 18.0679 76.0133 18.5237 76.2884 19.1136C76.5634 19.7036 76.701 20.3996 76.701 21.2017C76.701 22.0104 76.5634 22.7114 76.2884 23.3047C76.0133 23.8946 75.6321 24.352 75.1449 24.6768C74.6577 24.9983 74.0959 25.1591 73.4595 25.1591C72.969 25.1591 72.5762 25.0779 72.2812 24.9155C71.9863 24.7498 71.7592 24.5625 71.6001 24.3537C71.4411 24.1416 71.3184 23.9659 71.2322 23.8267H71.093V25H69.9595ZM71.1129 21.1818C71.1129 21.7585 71.1974 22.2673 71.3665 22.7081C71.5355 23.1456 71.7824 23.4886 72.1072 23.7372C72.4321 23.9825 72.8298 24.1051 73.3004 24.1051C73.791 24.1051 74.2003 23.9759 74.5284 23.7173C74.8598 23.4555 75.1084 23.1042 75.2741 22.6634C75.4432 22.2192 75.5277 21.7254 75.5277 21.1818C75.5277 20.6449 75.4448 20.161 75.2791 19.7301C75.1167 19.2959 74.8698 18.9529 74.5384 18.701C74.2102 18.4458 73.7976 18.3182 73.3004 18.3182C72.8232 18.3182 72.4221 18.4392 72.0973 18.6811C71.7725 18.9197 71.5272 19.2545 71.3615 19.6854C71.1958 20.1129 71.1129 20.6117 71.1129 21.1818ZM83.9048 19.0739L82.8509 19.3722C82.7846 19.1965 82.6868 19.0258 82.5575 18.8601C82.4316 18.6911 82.2592 18.5518 82.0405 18.4425C81.8217 18.3331 81.5417 18.2784 81.2003 18.2784C80.733 18.2784 80.3435 18.3861 80.032 18.6016C79.7237 18.8137 79.5696 19.0838 79.5696 19.4119C79.5696 19.7036 79.6757 19.9339 79.8878 20.103C80.0999 20.272 80.4313 20.4129 80.8821 20.5256L82.0156 20.804C82.6984 20.9697 83.2071 21.2232 83.5419 21.5646C83.8767 21.9027 84.044 22.3385 84.044 22.8722C84.044 23.3097 83.9181 23.7008 83.6662 24.0455C83.4176 24.3902 83.0696 24.6619 82.6222 24.8608C82.1747 25.0597 81.6544 25.1591 81.0611 25.1591C80.2822 25.1591 79.6375 24.9901 79.1271 24.652C78.6167 24.3139 78.2936 23.8201 78.1577 23.1705L79.2713 22.892C79.3774 23.303 79.5779 23.6113 79.8729 23.8168C80.1712 24.0223 80.5606 24.125 81.0412 24.125C81.5881 24.125 82.0223 24.009 82.3438 23.777C82.6686 23.5417 82.831 23.2599 82.831 22.9318C82.831 22.6667 82.7382 22.4446 82.5526 22.2656C82.367 22.0833 82.0819 21.9474 81.6974 21.858L80.4247 21.5597C79.7254 21.3939 79.2116 21.1371 78.8835 20.7891C78.5587 20.4377 78.3963 19.9986 78.3963 19.4716C78.3963 19.0407 78.5173 18.6596 78.7592 18.3281C79.0045 17.9967 79.3376 17.7365 79.7585 17.5476C80.1828 17.3587 80.6634 17.2642 81.2003 17.2642C81.956 17.2642 82.5492 17.4299 82.9801 17.7614C83.4143 18.0928 83.7225 18.5303 83.9048 19.0739ZM85.8102 25V17.3636H86.9835V25H85.8102ZM86.4068 16.0909C86.1781 16.0909 85.9809 16.013 85.8152 15.8572C85.6528 15.7015 85.5716 15.5142 85.5716 15.2955C85.5716 15.0767 85.6528 14.8894 85.8152 14.7337C85.9809 14.5779 86.1781 14.5 86.4068 14.5C86.6355 14.5 86.831 14.5779 86.9934 14.7337C87.1592 14.8894 87.242 15.0767 87.242 15.2955C87.242 15.5142 87.1592 15.7015 86.9934 15.8572C86.831 16.013 86.6355 16.0909 86.4068 16.0909ZM92.4535 17.3636V18.358H88.4961V17.3636H92.4535ZM89.6495 15.5341H90.8228V22.8125C90.8228 23.1439 90.8709 23.3925 90.967 23.5582C91.0664 23.7206 91.1924 23.83 91.3448 23.8864C91.5006 23.9394 91.6647 23.9659 91.837 23.9659C91.9663 23.9659 92.0723 23.9593 92.1552 23.946C92.238 23.9295 92.3043 23.9162 92.354 23.9062L92.5927 24.9602C92.5131 24.9901 92.4021 25.0199 92.2596 25.0497C92.1171 25.0829 91.9364 25.0994 91.7177 25.0994C91.3862 25.0994 91.0614 25.0282 90.7433 24.8857C90.4284 24.7431 90.1665 24.526 89.9577 24.2344C89.7522 23.9427 89.6495 23.5748 89.6495 23.1307V15.5341ZM97.3381 25.1591C96.6023 25.1591 95.9676 24.9967 95.4339 24.6719C94.9036 24.3438 94.4943 23.8864 94.206 23.2997C93.9209 22.7098 93.7784 22.0237 93.7784 21.2415C93.7784 20.4593 93.9209 19.7699 94.206 19.1733C94.4943 18.5734 94.8954 18.1061 95.4091 17.7713C95.9261 17.4332 96.5294 17.2642 97.2188 17.2642C97.6165 17.2642 98.0092 17.3305 98.397 17.4631C98.7848 17.5956 99.1378 17.8111 99.456 18.1094C99.7741 18.4044 100.028 18.7955 100.217 19.2827C100.406 19.7699 100.5 20.3698 100.5 21.0824V21.5795H94.6136V20.5653H99.3068C99.3068 20.1345 99.2206 19.75 99.0483 19.4119C98.8793 19.0739 98.6373 18.8071 98.3224 18.6115C98.0109 18.416 97.643 18.3182 97.2188 18.3182C96.7514 18.3182 96.3471 18.4342 96.0057 18.6662C95.6676 18.8949 95.4074 19.1932 95.2251 19.5611C95.0429 19.929 94.9517 20.3234 94.9517 20.7443V21.4205C94.9517 21.9972 95.0511 22.486 95.25 22.8871C95.4522 23.2848 95.7322 23.5881 96.0902 23.7969C96.4482 24.0024 96.8641 24.1051 97.3381 24.1051C97.6463 24.1051 97.9247 24.062 98.1733 23.9759C98.4252 23.8864 98.6423 23.7538 98.8246 23.5781C99.0069 23.3991 99.1477 23.1771 99.2472 22.9119L100.381 23.2301C100.261 23.6146 100.061 23.9527 99.7791 24.2443C99.4974 24.5327 99.1494 24.758 98.7351 24.9205C98.3208 25.0795 97.8551 25.1591 97.3381 25.1591Z" fill="#282828"/>
                      <path d="M48 27.7841H101.216V28.7386H48V27.7841Z" fill="#282828"/>
                      <rect fill="black" fillOpacity="0" y="2.52841" width="53.2159" height="16.9432"/>
                    </svg>
                  </a>
                </div>

                                    {/* Project Header */}
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                  <div
                    className="w-60 h-60 bg-cover bg-center rounded-lg flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('/images/project-2.png')` }}
                    onClick={() => handleImageClick('/images/project-2.png')}
                  />
                  <div className="flex-1 pb-3 min-w-0 flex flex-col justify-start">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">12 months</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">Heatmap Analysis</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">A/B Testing</p>
                        </div>
                      </motion.div>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">
                      AI-Powered SAT Preparation Platform
                    </h1>
                    <p className="text-xl text-gray-300">
                      AI-powered SAT prep that personalizes learning for students and simplifies progress tracking for teachers.
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
                  <div className="text-gray-300">Jan 2023 - Dec 2023</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Role</div>
                  <div className="text-gray-300">Lead Product Designer</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Collaborators</div>
                  <div className="text-gray-300">CEO, CTO, 4 Designer & 5 Engineers</div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col gap-6 items-center">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-5 items-start justify-center">
                    <div className="leading-[22px] text-[15px] text-gray-300">
                      <p className="mb-0 text-[#f4915c]">Duration</p>
                      <p>Jan 2023 - Dec 2023</p>
                    </div>
                    <div className="leading-[22px] text-[15px] text-white">
                      <p className="mb-0 text-[#f4915c]">Role</p>
                      <p className="text-gray-300">Lead Product Designer</p>
                    </div>
                    <div className="leading-[22px] text-[15px] text-white">
                      <p className="mb-0 text-[#f4915c]">Collaborators</p>
                      <p className="text-gray-300">CEO, CTO, 4 Designer & 5 Engineers</p>
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
                    The SAT shifted to an adaptive testing format, where question difficulty adjusts based on a student&apos;s performance. In Taiwan, students currently lack effective ways to prepare for this new system. Unlike in the U.S., local schools do not teach SAT-specific test-taking strategies, leaving students to rely on self-study or private SAT prep schools.
                  </p>
                  <p>
                    Even in prep schools, however, students often face imbalanced teacher-to-student ratios, making it difficult to receive personalized guidance. This gap in preparation resources highlights the need for a solution that can help students adapt to the new exam format while providing tailored support at scale.
                  </p>
                </div>
              </div>

              {/* My Contribution */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  My Contribution
                </h2>
                <ul className="text-lg text-gray-300 leading-[1.5] list-disc pl-6 space-y-2">
                  <li>Led a team of 4 designers to build BrainBox from the ground up</li>
                  <li>Oversaw the full design process: concept validation, user research, prototyping, development, and testing</li>
                  <li>Created and maintained the design system to ensure consistency and scalability</li>
                  <li>Helped shape the brand design to align product identity with user needs</li>
                </ul>
              </div>

              {/* Goal */}
              <div className="text-center mb-16">
                <p className="text-xl text-gray-400 mb-2">GOAL</p>
                <h2 className="text-3xl font-bold leading-[1.5]">
                  Leverage AI tutoring to give every student a personalized learning experience, whether they are studying independently or attending a prep school.
                </h2>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Research Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-24">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-[#e6ff02]">
                  Research
                </h2>
              </div>

              <div className="mb-16">
                <div className="text-lg text-gray-300 leading-[1.5] mb-8">
                  <p>
                    To understand the market and our competition, I conducted thorough research. We found two main types of competitors: those offering courses with real teachers and those providing extensive practice questions without teacher support. Our product fits the latter but stands out because we offer something unique—an AI virtual tutor. This feature sets us apart from everyone else in the market.
                  </p>
                </div>
                
                <div className="flex justify-center mb-1">
                  <div 
                    className="w-full max-w-4xl aspect-[3368/1688] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                    style={{ backgroundImage: `url('/images/brainbox/research/market-survey-1.png')` }}
                    onClick={() => handleImageClick('/images/brainbox/research/market-survey-1.png')}
                  />
                </div>
                <div className="text-center text-lg text-gray-400 mb-8">
                  Part of the market survey
                </div>

                <div className="flex justify-center mb-1">
                  <div 
                    className="w-full max-w-4xl aspect-[1211/451] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                    style={{ backgroundImage: `url('/images/brainbox/research/market-survey-2.png')` }}
                    onClick={() => handleImageClick('/images/brainbox/research/market-survey-2.png')}
                  />
                </div>
                <div className="text-center text-lg text-gray-400 mb-8">
                  Part of the market survey
                </div>

                <div className="text-lg text-gray-300 leading-[1.5]">
                  <p>
                    I gathered valuable insights directly from the client, who owns a test prep institution. Through interviews, we explored students&apos; perspectives on what would enhance their study effectiveness before initiating the design phase.
                  </p>
                </div>
              </div>

              {/* Ideation Section */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-2xl font-bold text-[#e6ff02]">
                    Ideation
                  </h2>
                </div>

                <div className="text-lg text-gray-300 leading-[1.5] mb-8">
                  <p>
                    During the ideation phase, given the initially unclear product scope, we began by identifying features that would best serve user needs and preferences. To meet our launch deadline, we refined our goals to focus on essential features. This decision was reached through multiple rounds of stakeholder discussions (including users, client, and engineers) and iterative market research to ensure alignment with user expectations and satisfaction.
                  </p>
                </div>
                
                <div className="flex justify-center mb-1">
                  <div 
                    className="w-full max-w-4xl aspect-[2064/1162] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                    style={{ backgroundImage: `url('/images/brainbox/ideation/figjam-ideation.png')` }}
                    onClick={() => handleImageClick('/images/brainbox/ideation/figjam-ideation.png')}
                  />
                </div>
                <div className="text-center text-lg text-gray-400 mb-8">
                  Part of the group feature ideation session - using FigJam
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-2xl font-bold text-[#e6ff02]">
                    Features
                  </h2>
                </div>

                {/* For Individual Users */}
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end mb-16">
                  <div className="flex-1">
                    <div className="flex gap-2 items-center mb-3">
                      <div className="w-10 h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                          <path d="M20.0003 21.8258C24.6027 21.8258 28.3337 18.0949 28.3337 13.4925C28.3337 8.89014 24.6027 5.15918 20.0003 5.15918C15.398 5.15918 11.667 8.89014 11.667 13.4925C11.667 18.0949 15.398 21.8258 20.0003 21.8258Z" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M33.3337 35.1595C33.3337 31.6233 31.9289 28.2319 29.4284 25.7314C26.9279 23.2309 23.5365 21.8262 20.0003 21.8262C16.4641 21.8262 13.0727 23.2309 10.5722 25.7314C8.07175 28.2319 6.66699 31.6233 6.66699 35.1595" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        For Individual Users
                      </h3>
                    </div>
                    <ul className="text-lg text-gray-300 leading-[1.5] space-y-2">
                      <li className="list-disc ml-6">
                        <span className="font-semibold">Initial Assessment:</span>
                        <ul className="ml-6 mt-1">
                          <li className="text-gray-400">Start with a short assessment to gauge the user&apos;s current performance level.</li>
                        </ul>
                      </li>
                      <li className="list-disc ml-6">
                        <span className="font-semibold">Personalized Practice:</span>
                        <ul className="ml-6 mt-1">
                          <li className="text-gray-400">Receive questions tailored to their performance.</li>
                          <li className="text-gray-400">Follow step-by-step guidance throughout their practice journey.</li>
                        </ul>
                      </li>
                      <li className="list-disc ml-6">
                        <span className="font-semibold">Detailed Reports:</span>
                        <ul className="ml-6 mt-1">
                          <li className="text-gray-400">After quizzes or mock tests, receive comprehensive reports highlighting weak areas.</li>
                          <li className="text-gray-400">Practice targeted areas based on the report&apos;s feedback.</li>
                        </ul>
                      </li>
                      <li className="list-disc ml-6">
                        <span className="font-semibold">AI Tutor Assistance:</span>
                        <ul className="ml-6 mt-1">
                          <li className="text-gray-400">Ask questions to the AI tutor during practice and report sessions for immediate help.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                                          <div 
                        className="w-[149px] h-[200px] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                        style={{ backgroundImage: `url('/images/brainbox/features/individual-user-mockup.png')` }}
                        onClick={() => handleImageClick('/images/brainbox/features/individual-user-mockup.png')}
                      />
                  </div>
                </div>

                {/* For Group Users */}
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
                  <div className="flex-1">
                    <div className="flex gap-2 items-center mb-3">
                      <div className="w-10 h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                          <path d="M29.9997 35.1595C29.9997 31.6233 28.5949 28.2319 26.0944 25.7314C23.5939 23.2309 20.2026 21.8262 16.6663 21.8262C13.1301 21.8262 9.73874 23.2309 7.23825 25.7314C4.73777 28.2319 3.33301 31.6233 3.33301 35.1595" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16.6663 21.8258C21.2687 21.8258 24.9997 18.0949 24.9997 13.4925C24.9997 8.89014 21.2687 5.15918 16.6663 5.15918C12.064 5.15918 8.33301 8.89014 8.33301 13.4925C8.33301 18.0949 12.064 21.8258 16.6663 21.8258Z" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M36.6667 33.4928C36.6667 27.8762 33.3333 22.6595 30 20.1595C31.0957 19.3375 31.9719 18.258 32.5509 17.0166C33.13 15.7753 33.3942 14.4103 33.32 13.0425C33.2459 11.6747 32.8357 10.3463 32.1258 9.17484C31.4159 8.00336 30.4282 7.02494 29.25 6.32617" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        For Group Users
                      </h3>
                    </div>
                    <ul className="text-lg text-gray-300 leading-[1.5] space-y-2">
                      <li className="list-disc ml-6">
                        <span className="font-semibold">Organize Group Practices:</span>
                        <ul className="ml-6 mt-1">
                          <li className="text-gray-400">Teachers can set up group practice sessions to monitor student performance.</li>
                        </ul>
                      </li>
                      <li className="list-disc ml-6">
                        <span className="font-semibold">Comprehensive Reporting:</span>
                        <ul className="ml-6 mt-1">
                          <li className="text-gray-400">Access individual student reports or a consolidated group report to track progress and identify areas for improvement.</li>
                        </ul>
                      </li>
                      <li className="list-disc ml-6">
                        <span className="font-semibold">Individual User Features:</span>
                        <ul className="ml-6 mt-1">
                          <li className="text-gray-400">Students in group sessions can also use all individual user features, including personalized practice and AI tutor assistance.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                                          <div 
                        className="w-[148px] h-[200px] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                        style={{ backgroundImage: `url('/images/brainbox/features/group-user-mockup.png')` }}
                        onClick={() => handleImageClick('/images/brainbox/features/group-user-mockup.png')}
                      />
                  </div>
                </div>
              </div>

              {/* Design, Testing and Feedback Section */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-2xl font-bold text-[#e6ff02]">
                    Design, Testing and Feedback
                  </h2>
                </div>

                <div className="text-lg text-gray-300 leading-[1.5] mb-8">
                  <p>
                    After finalizing the product scope, we began with information architecture, user flow, low-fidelity wireframes, and progressed to high-fidelity mockups and prototype designs. We also conducted usability tests and A/B tests to ensure our designs aligned closely with user needs and preferences.
                  </p>
                </div>
                
                <div className="flex justify-center mb-1">
                  <div 
                    className="w-full max-w-4xl aspect-[873/795] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                    style={{ backgroundImage: `url('/images/brainbox/design/wireframe.png')` }}
                    onClick={() => handleImageClick('/images/brainbox/design/wireframe.png')}
                  />
                </div>
                <div className="text-center text-lg text-gray-400 mb-8">
                  Part of the wireframe - using Figma
                </div>

                <div className="flex justify-center mb-1">
                  <div 
                    className="w-full max-w-4xl aspect-[2398/1483] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                    style={{ backgroundImage: `url('/images/brainbox/design/ab-test.png')` }}
                    onClick={() => handleImageClick('/images/brainbox/design/ab-test.png')}
                  />
                </div>
                <div className="text-center text-lg text-gray-400 mb-8">
                  One of the A/B test - using UseBerry
                </div>

                <div className="flex justify-center mb-1">
                  <div 
                    className="w-full max-w-4xl aspect-[2298/1508] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                    style={{ backgroundImage: `url('/images/brainbox/design/design-feedback.png')` }}
                    onClick={() => handleImageClick('/images/brainbox/design/design-feedback.png')}
                  />
                </div>
                <div className="text-center text-lg text-gray-400 mb-8">
                  Part of the collected design feedback - using UseBerry
                </div>
              </div>

              {/* Develop and Launch Section */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-2xl font-bold text-[#e6ff02]">
                    Develop and Launch
                  </h2>
                </div>

                <div className="text-lg text-gray-300 leading-[1.5] mb-8">
                  <p>
                    After finalizing the design, we handed over our design assets to the frontend and backend engineers for implementation. Additionally, we collaborated with a prompt engineer to ensure that the AI tutor&apos;s interactions were seamlessly integrated into the overall user experience. Throughout this phase, we maintained close communication with the engineering teams to address any issues and ensure the product met our design specifications and quality standards.
                  </p>
                </div>

                <div className="text-center mb-16">
                  <p className="text-lg text-[#f4915c] tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                    Now, let&apos;s take a look at some of the design and development results of our work.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-center">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/900] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/dashboard.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/dashboard.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Dashboard
                  </div>

                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/900] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/test-report.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/test-report.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Test Report
                  </div>

                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/900] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/subject-selection.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/subject-selection.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Subject Selection
                  </div>

                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/900] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/practice-topic-selection.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/practice-topic-selection.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Practice Topic Selection
                  </div>

                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/900] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/practice-note-taking.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/practice-note-taking.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Practice Page (with note-taking feature)
                  </div>

                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/900] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/practice-ai-tutor.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/practice-ai-tutor.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Practice Page (with AI Tutor)
                  </div>

                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/900] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/create-group-session.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/create-group-session.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Create Group Practice Session
                  </div>

                  <div className="flex justify-center mt-8">
                    <div 
                      className="w-full max-w-4xl aspect-[1440/897] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-xl"
                      style={{ backgroundImage: `url('/images/brainbox/develop/group-practice-report.png')` }}
                      onClick={() => handleImageClick('/images/brainbox/develop/group-practice-report.png')}
                    />
                  </div>
                  <div className="text-center text-lg text-gray-400 mt-1">
                    Group Practice Report
                  </div>
                </div>
              </div>


            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Components Section */}
            <div className="mb-16">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-[#e6ff02]">
                  Components at a Glance
                </h2>
              </div>

              {/* Auto-play Horizontal Carousel */}
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll">
                  <div 
                    className="w-screen h-96 bg-cover bg-center bg-no-repeat flex-shrink-0"
                    style={{ backgroundImage: `url('/images/brainbox/components-library.png')` }}
                  />
                  <div 
                    className="w-screen h-96 bg-cover bg-center bg-no-repeat flex-shrink-0"
                    style={{ backgroundImage: `url('/images/brainbox/components-library.png')` }}
                  />
                  <div 
                    className="w-screen h-96 bg-cover bg-center bg-no-repeat flex-shrink-0"
                    style={{ backgroundImage: `url('/images/brainbox/components-library.png')` }}
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Personal Growth */}
                          <div className="px-6 md:px-12 lg:px-24 text-center" style={{ paddingBottom: '100px' }}>
                <p className="text-xl text-gray-400 mb-6 uppercase tracking-wide">PERSONAL GROWTH</p>
                <p className="text-lg text-gray-300 leading-[1.5] max-w-4xl mx-auto">
                  From this project, I learned the importance of clear communication when leading a large design team and collaborating with stakeholders. Keeping everyone aligned with the product vision was key to building a cohesive platform. The experience also gave me the opportunity to oversee the entire product, which helped me identify design blind spots and improve overall quality.
                </p>
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
