'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Sidebar, MediaPlayer } from './InteractiveHome';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import Footer from './Footer';

// Image assets from Figma - Now using proper local paths
const imgAirframeThumbnail1 = "/images/eatsy/hero/hero-thumbnail.png";
const imgImage38 = "/images/eatsy/look-and-feel/before-after-1.png";
const imgImage39 = "/images/eatsy/look-and-feel/before-after-2.png";
const imgImage40 = "/images/eatsy/look-and-feel/before-after-1.png"; // Not used, but keeping for consistency
const imgImage41 = "/images/eatsy/reservation-features/reservation-features.png";
const imgImage43 = "/images/eatsy/reservation-features/customization-1.png";
const imgImage47 = "/images/eatsy/reservation-features/customization-2.png";
const imgImage46 = "/images/eatsy/reservation-features/customization-3.png";
const imgImage48 = "/images/eatsy/reservation-features/customization-4.png";
const imgImage49 = "/images/eatsy/reservation-features/customization-5.png";
const imgImage53 = "/images/eatsy/mobile-mockups/mobile-mockup-1.png";
const imgImage52 = "/images/eatsy/mobile-mockups/mobile-mockup-2.png";
const imgImage51 = "/images/eatsy/mobile-mockups/mobile-mockup-3.png";
const imgEllipse44 = "/images/eatsy/user-feedback/wakatake-avatar.png";
const imgEllipse45 = "/images/eatsy/user-feedback/yang-er-lou-avatar.png";
const imgEllipse46 = "/images/eatsy/user-feedback/wagyu-mania-avatar.png";

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

interface EatsyPageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

export default function EatsyPage({ onBack, openProjects, onCloseProject, onNavigateToProject, onLogoClick }: EatsyPageProps) {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'more' });
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; pauseAudio: () => void }>(null);
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
        mediaPlayerRef.current.playEatsyAudio();
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
            currentProjectId="eatsy"
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
            <div style={{ background: 'linear-gradient(179deg, #E26C6A -37.41%, #613C3D 41.39%)' }}>
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
                  <a href="https://partners.eatsy.tech/" target="_blank" rel="noopener noreferrer">
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
                    style={{ backgroundImage: `url('${imgAirframeThumbnail1}')` }}
                    onClick={() => handleImageClick(imgAirframeThumbnail1)}
                  />
                  <div className="flex-1 pb-3 min-w-0">
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
                          <p className="block leading-[22px] whitespace-pre">Cost Reduction</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">Prototype Testing</p>
                        </div>
                      </motion.div>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">
                      Customizable Reservation Platform
                    </h1>
                    <p className="text-xl text-gray-300">
                      Built online reservation system to streamline operations and reduce staff workload by 40%
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
                  <div className="text-gray-300">Jan 2024 - Dec 2024</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Role</div>
                  <div className="text-gray-300">Product Designer</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Collaborators</div>
                  <div className="text-gray-300">CEO, 1 Designer & 3 Engineers</div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col gap-6 items-center">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-5 items-start justify-center">
                    <div className="leading-[22px] text-[15px] text-gray-300">
                      <p className="mb-0 text-[#f4915c]">Duration</p>
                      <p>Jan 2024 - Dec 2024</p>
                    </div>
                    <div className="leading-[22px] text-[15px] text-white">
                      <p className="mb-0 text-[#f4915c]">Role</p>
                      <p className="text-gray-300">Product Designer</p>
                    </div>
                    <div className="leading-[22px] text-[15px] text-white">
                      <p className="mb-0 text-[#f4915c]">Collaborators</p>
                      <p className="text-gray-300">CEO, 1 Designer & 3 Engineers</p>
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
                    In Taiwan, three major platforms—<span className="underline">Inline</span>, <span className="underline">Eats365</span>, and <span className="underline">EZTABLE</span>—control nearly 90% of the online reservation market. For most restaurants, adopting a digital booking system means choosing one of these providers. However, their rigid pricing models and setup requirements often do not fit the realities of independent restaurants, whose limited budgets cannot absorb high monthly fees or minimum booking volumes.
                  </p>
                  <p>
                    At the same time, independent restaurants typically operate with lean teams. Without a reservation system, staff are forced to handle calls for bookings, modifications, and cancellations —an exhausting and inefficient process that stretches already scarce manpower. This combination of financial and operational strain highlights a gap in the market: a solution tailored to the unique needs of small restaurants.
                  </p>
                </div>
              </div>

              {/* My Contribution */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  My Contribution
                </h2>
                <ul className="text-lg text-gray-300 leading-[1.5] list-disc pl-6 space-y-2">
                  <li>Built key product features: real-time dashboard, business hours management, deposit booking, blacklist system, reservation notifications, customer preferences, booking rules and online ordering system</li>
                  <li>Redefined the brand&apos;s visual identity</li>
                  <li>Drove product iterations based on user interview insights</li>
                  <li>Collaborated closely with the CEO to align design with business goals</li>
                </ul>
              </div>

              {/* Goal */}
              <div className="text-center mb-16">
                <p className="text-xl text-gray-400 mb-2">GOAL</p>
                <h2 className="text-3xl font-bold leading-[1.5]">
                  A flexible reservation system that lowers costs and reduces the workload for independent restaurants.
                </h2>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Screenshots Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-[#e6ff02]">
                  Screenshots
                </h2>
              </div>

              {/* Redefining the Look and Feel */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="7" height="9" x="3" y="3" rx="1"/>
                      <rect width="7" height="5" x="14" y="3" rx="1"/>
                      <rect width="7" height="9" x="14" y="12" rx="1"/>
                      <rect width="7" height="5" x="3" y="16" rx="1"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Redefining the Look and Feel
                  </h3>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  Previously, the blue color scheme had been criticized by customers as feeling dull and lifeless. In addition, due to the old layout design, much of the information could not be effectively presented.
                </p>
                
                <div className="flex flex-col xl:flex-row gap-3 items-center xl:items-end justify-center mb-8">
                  <div 
                    className="w-full sm:w-[400px] md:w-[460px] lg:w-[500px] xl:w-[520px] aspect-[520/358] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('${imgImage38}')` }}
                    onClick={() => handleImageClick(imgImage38)}
                  />
                  <div 
                    className="w-full sm:w-[300px] md:w-[350px] lg:w-[380px] xl:w-[400px] aspect-[400/275] rounded-lg bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundImage: `url('${imgImage39}')` }}
                    onClick={() => handleImageClick(imgImage39)}
                  />
                </div>

                <div className="text-lg text-gray-300">
                  <p className="mb-4">Key improvements include:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Shifting the main color from dark blue to a bright red, as research shows that red stimulates appetite and draws attention more effectively.</li>
                    <li>Moving the main navigation from the top to the left side, aligning with modern dashboard usage patterns.</li>
                    <li>Applying the primary color to buttons and notifications, helping users quickly identify actionable areas.</li>
                    <li>Adding icons to create a more lively and engaging interface.</li>
                  </ol>
                </div>
              </div>

              <div className="flex justify-center mb-16">
                <div 
                  className="w-full sm:w-[400px] md:w-[500px] lg:w-[550px] xl:w-[600px] aspect-[600/419] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage41}')` }}
                  onClick={() => handleImageClick(imgImage41)}
                />
              </div>

              {/* Building Customized Reservation Features */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="8" height="8" x="3" y="3" rx="2"/>
                      <path d="M7 11v4a2 2 0 0 0 2 2h4"/>
                      <rect width="8" height="8" x="13" y="13" rx="2"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Building Customized Reservation Features
                  </h3>
                </div>
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    To address the diverse needs of different users rather than forcing users to adapt to the system, we decided to make all reservation features fully customizable.
                  </p>
                  <p>
                    For example, users can define which customers are eligible to make reservations, set specific tables as available or unavailable for online booking depending on the time, configure reservation windows for particular time slots, and require deposits for bookings above a certain party size.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <div 
                  className="w-full sm:w-[400px] md:w-[500px] lg:w-[550px] xl:w-[600px] aspect-[600/419] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage43}')` }}
                  onClick={() => handleImageClick(imgImage43)}
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center justify-center mb-8">
                <div 
                  className="w-full sm:w-[350px] md:w-[380px] lg:w-[410px] xl:w-[440px] aspect-[440/707] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage47}')` }}
                  onClick={() => handleImageClick(imgImage47)}
                />
                <div 
                  className="w-full sm:w-[350px] md:w-[380px] lg:w-[410px] xl:w-[440px] aspect-[440/664] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage46}')` }}
                  onClick={() => handleImageClick(imgImage46)}
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center justify-center mb-16">
                <div 
                  className="w-full sm:w-[350px] md:w-[380px] lg:w-[410px] xl:w-[440px] aspect-[440/477] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage48}')` }}
                  onClick={() => handleImageClick(imgImage48)}
                />
                <div 
                  className="w-full sm:w-[350px] md:w-[380px] lg:w-[410px] xl:w-[440px] aspect-[440/404] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage49}')` }}
                  onClick={() => handleImageClick(imgImage49)}
                />
              </div>

              {/* Reducing Transaction Fees */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/>
                      <path d="m16 19 3 3 3-3"/>
                      <path d="M18 12h.01"/>
                      <path d="M19 16v6"/>
                      <path d="M6 12h.01"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Reducing Transaction Fees for Independent Restaurants
                  </h3>
                </div>
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Another major topic we addressed was the need for independent restaurants to avoid third-party payment processing fees.
                  </p>
                  <p className="mb-4">
                    To meet this demand, we developed a feature that allows restaurants to collect reservation deposits through direct bank transfers instead of using third-party payment gateways.
                  </p>
                </div>

                <div className="text-lg text-gray-300 mb-8">
                  <p>
                    Previously, restaurants needed to manually remind customers to pay their reservation deposits through messaging apps such as Facebook Messenger, Instagram, or Line.
                  </p>
                </div>

                <div className="flex gap-10 justify-center mb-8">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <img src="/images/social/messenger.svg" alt="Messenger" className="w-10 h-10" />
                  </div>
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <img src="/images/social/instagram.svg" alt="Instagram" className="w-10 h-10" />
                  </div>
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <img src="/images/social/line.svg" alt="Line" className="w-10 h-10" />
                  </div>
                </div>

                <div className="text-lg text-gray-300 mb-8">
                  <p>
                    This created an additional pain point: incomplete or missing transfer information from customers, making the reconciliation process challenging.
                  </p>
                </div>

                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">To solve this, we introduced:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>An automated deposit reminder system triggered immediately after a reservation is made.</li>
                    <li>Email notifications sent to customers to prompt deposit payment.</li>
                    <li>A standardized transfer confirmation form for customers to submit payment details.</li>
                    <li>Automatic forwarding of submitted information to the restaurant via platform notifications.</li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row gap-2.5 items-center justify-center mb-16">
                <div 
                  className="w-full sm:w-[250px] md:w-[270px] lg:w-[285px] xl:w-[300px] aspect-[300/941] rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage53}')` }}
                  onClick={() => handleImageClick(imgImage53)}
                />
                <div 
                  className="w-full sm:w-[250px] md:w-[270px] lg:w-[285px] xl:w-[300px] aspect-[300/1022] rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage52}')` }}
                  onClick={() => handleImageClick(imgImage52)}
                />
                <div 
                  className="w-full sm:w-[250px] md:w-[270px] lg:w-[285px] xl:w-[300px] aspect-[300/710] rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${imgImage51}')` }}
                  onClick={() => handleImageClick(imgImage51)}
                />
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* User Feedback Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-[#e6ff02]">
                  Positive User Feedback
                </h2>
              </div>

              {/* Feedback 1 */}
              <div className="mb-16">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200">
                    <img src={imgEllipse44} alt="Wakatake" className="w-full h-full object-cover" onClick={() => handleImageClick(imgEllipse44)} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-oregano text-white mb-3">
                      A reservation system that truly fits the rhythm of a small business
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-4xl font-oregano text-white">Wakatake</h4>
                      <a href="https://www.instagram.com/wakatake.tw/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M19.833 2.33301H8.16634C4.94468 2.33301 2.33301 4.94468 2.33301 8.16634V19.833C2.33301 23.0547 4.94468 25.6663 8.16634 25.6663H19.833C23.0547 25.6663 25.6663 23.0547 25.6663 19.833V8.16634C25.6663 4.94468 23.0547 2.33301 19.833 2.33301Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.6667 13.2654C18.8106 14.2363 18.6448 15.2279 18.1927 16.0992C17.7406 16.9705 17.0253 17.677 16.1485 18.1183C15.2718 18.5596 14.2782 18.7132 13.3091 18.5573C12.34 18.4013 11.4447 17.9438 10.7506 17.2497C10.0566 16.5556 9.599 15.6604 9.44306 14.6913C9.28712 13.7222 9.44073 12.7286 9.88203 11.8518C10.3233 10.975 11.0299 10.2597 11.9011 9.80763C12.7724 9.35555 13.764 9.1897 14.735 9.33369C15.7254 9.48055 16.6423 9.94206 17.3503 10.65C18.0583 11.358 18.5198 12.2749 18.6667 13.2654Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20.417 7.58301H20.4287" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                    <div className="text-lg text-gray-400 leading-[1.5]">
                      <p className="mb-2">&ldquo;We used to work with a reservation system, but the fixed monthly fees were just too heavy.</p>
                      <p className="mb-2">For a small shop like ours—where guest volume is low and quality matters most—it simply wasn&apos;t a good fit.</p>
                      <p className="mb-2">Eatsy offers flexible pricing that aligns with our operating rhythm. We have full control over when and how reservations open, depending on our needs.</p>
                      <p className="mb-2">More importantly, it turns the booking process into part of the customer experience—visually appealing, easy to use, and refined in design.</p>
                      <p>We also feel that the team behind Eatsy genuinely wants to grow with small businesses. Even if you&apos;re not a big client, you won&apos;t be overlooked.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback 2 */}
              <div className="mb-16">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200">
                    <img src={imgEllipse45} alt="Yang Er Lou" className="w-full h-full object-cover" onClick={() => handleImageClick(imgEllipse45)} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-oregano text-white mb-3">
                      Private kitchens without a reception area can smoothly welcome guests
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-4xl font-oregano text-white">Yang Er Lou</h4>
                      <a href="https://www.instagram.com/yangerlou/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M19.833 2.33301H8.16634C4.94468 2.33301 2.33301 4.94468 2.33301 8.16634V19.833C2.33301 23.0547 4.94468 25.6663 8.16634 25.6663H19.833C23.0547 25.6663 25.6663 23.0547 25.6663 19.833V8.16634C25.6663 4.94468 23.0547 2.33301 19.833 2.33301Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.6667 13.2654C18.8106 14.2363 18.6448 15.2279 18.1927 16.0992C17.7406 16.9705 17.0253 17.677 16.1485 18.1183C15.2718 18.5596 14.2782 18.7132 13.3091 18.5573C12.34 18.4013 11.4447 17.9438 10.7506 17.2497C10.0566 16.5556 9.599 15.6604 9.44306 14.6913C9.28712 13.7222 9.44073 12.7286 9.88203 11.8518C10.3233 10.975 11.0299 10.2597 11.9011 9.80763C12.7724 9.35555 13.764 9.1897 14.735 9.33369C15.7254 9.48055 16.6423 9.94206 17.3503 10.65C18.0583 11.358 18.5198 12.2749 18.6667 13.2654Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20.417 7.58301H20.4287" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                    <div className="text-lg text-gray-400 leading-[1.5]">
                      <p className="mb-2">&ldquo;We run a reservation-only private kitchen with a small space and a limited team.</p>
                      <p className="mb-2">I used to handle all the messages myself, and when things got busy, I would sometimes miss bookings.</p>
                      <p>After switching to Eatsy, guests can make reservations on their own. It gives me peace of mind to focus on prep work—and even on my days off, I can truly rest.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback 3 */}
              <div className="mb-16">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200">
                    <img src={imgEllipse46} alt="WAGYU MANIA" className="w-full h-full object-cover" onClick={() => handleImageClick(imgEllipse46)} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-oregano text-white mb-3">
                      Free restaurants from the order-taking pressure of high-end barbecue operations.
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-4xl font-oregano text-white">WAGYU MANIA</h4>
                      <a href="https://www.instagram.com/wagyumania_taipei/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M19.833 2.33301H8.16634C4.94468 2.33301 2.33301 4.94468 2.33301 8.16634V19.833C2.33301 23.0547 4.94468 25.6663 8.16634 25.6663H19.833C23.0547 25.6663 25.6663 23.0547 25.6663 19.833V8.16634C25.6663 4.94468 23.0547 2.33301 19.833 2.33301Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.6667 13.2654C18.8106 14.2363 18.6448 15.2279 18.1927 16.0992C17.7406 16.9705 17.0253 17.677 16.1485 18.1183C15.2718 18.5596 14.2782 18.7132 13.3091 18.5573C12.34 18.4013 11.4447 17.9438 10.7506 17.2497C10.0566 16.5556 9.599 15.6604 9.44306 14.6913C9.28712 13.7222 9.44073 12.7286 9.88203 11.8518C10.3233 10.975 11.0299 10.2597 11.9011 9.80763C12.7724 9.35555 13.764 9.1897 14.735 9.33369C15.7254 9.48055 16.6423 9.94206 17.3503 10.65C18.0583 11.358 18.5198 12.2749 18.6667 13.2654Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20.417 7.58301H20.4287" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                    <div className="text-lg text-gray-400 leading-[1.5]">
                      <p>&ldquo;High-value restaurants risk big losses from booking errors or no-shows. Eatsy&apos;s reminders and workflow help secure every genuine reservation.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-16">
                <a 
                  href="https://partners.eatsy.tech/cases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-gray-300 underline hover:text-white transition-colors duration-200"
                >
                  View more
                </a>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Personal Growth */}
            <div className="px-6 md:px-12 lg:px-24 text-center" style={{ paddingBottom: '100px' }}>
              <p className="text-xl text-gray-400 mb-2">Personal growth</p>
              <h2 className="text-3xl font-bold leading-[1.5]">
                Even in a saturated market, truly understanding user pain points and delivering solutions aligned with business goals is what makes design genuinely valuable.
              </h2>
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
