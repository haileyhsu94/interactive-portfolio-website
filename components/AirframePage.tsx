'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Sidebar, MediaPlayer } from './InteractiveHome';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialize ScrollTrigger globally
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
  
  console.log('GSAP initialized successfully');
}

// Image imports - you'll need to add these images to public/images/airframe/
const airframeImages = {
  thumbnail: '/images/airframe/thumbnail.png',
  ai: '/images/airframe/ai.png',
  market: '/images/airframe/market.png',
  rfp: '/images/airframe/rfp.png',
  expert: '/images/airframe/expert.png',
  guide: '/images/airframe/guide.png',
  // Carousel 1: 3 sets of 4 images (12 total) - for HMW #1
  carousel1: [
    // Set 1
    '/images/airframe/carousel1-1.png',
    '/images/airframe/carousel1-2.png',
    '/images/airframe/carousel1-3.png',
    '/images/airframe/carousel1-4.png',
    // Set 2
    '/images/airframe/carousel1-5.png',
    '/images/airframe/carousel1-6.png',
    '/images/airframe/carousel1-7.png',
    '/images/airframe/carousel1-8.png',
    // Set 3
    '/images/airframe/carousel1-9.png',
    '/images/airframe/carousel1-10.png',
    '/images/airframe/carousel1-11.png',
    '/images/airframe/carousel1-12.png',
  ],
  // Carousel 2: 3 sets of 4 images (12 total) - for HMW #2
  carousel2: [
    // Set 1
    '/images/airframe/carousel2-1.png',
    '/images/airframe/carousel2-2.png',
    '/images/airframe/carousel2-3.png',
    '/images/airframe/carousel2-4.png',
    // Set 2
    '/images/airframe/carousel2-5.png',
    '/images/airframe/carousel2-6.png',
    '/images/airframe/carousel2-7.png',
    '/images/airframe/carousel2-8.png',
    // Set 3
    '/images/airframe/carousel2-9.png',
    '/images/airframe/carousel2-10.png',
    '/images/airframe/carousel2-11.png',
    '/images/airframe/carousel2-12.png',
  ],
  // Carousel 3: 1 set of 4 images (4 total) - for HMW #3
  carousel3: [
    '/images/airframe/carousel3-1.png',
    '/images/airframe/carousel3-2.png',
    '/images/airframe/carousel3-3.png',
    '/images/airframe/carousel3-4.png',
  ],
  // Carousel 4: 1 set of 4 images (4 total) - for Intelligent Agent
  carousel4: [
    '/images/airframe/carousel4-1.png',
    '/images/airframe/carousel4-2.png',
    '/images/airframe/carousel4-3.png',
    '/images/airframe/carousel4-4.png',
  ],
};

interface CarouselProps {
  images: string[];
  bgColor: string;
  title?: string;
  onInteraction?: (interacting: boolean) => void;
}

interface GSAPCarouselProps {
  images: string[];
  bgColor: string;
  title?: string;
  sets: number; // Number of sets (3 for carousel1&2, 1 for carousel3&4)
}

function InteractiveCarousel({ images, bgColor, title, onInteraction }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (image: string) => {
    setZoomedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage('');
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsInteracting(true);
    onInteraction?.(true);
    
    // Clear any existing timeout
    const timeoutId = setTimeout(() => {
      setIsInteracting(false);
      onInteraction?.(false);
    }, 2000);
    
    if (e.deltaY > 0) {
      nextImage();
    } else {
      prevImage();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isZoomed) {
        if (e.key === 'Escape') {
          closeZoom();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isZoomed]);

  return (
    <>
      <div
        ref={carouselRef}
        className={`relative h-[755px] w-full rounded-xl p-11 ${bgColor} ${isInteracting ? 'carousel-interacting' : ''}`}
        onWheel={handleWheel}
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-10 h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 ${
                index === 0 ? 'aspect-[2892/1960]' : 'aspect-[1446/980]'
              } ${index === 1 ? 'col-start-2 row-start-1' : ''} ${
                index === 2 ? 'col-start-1 row-start-2' : ''
              } ${index === 3 ? 'col-start-2 row-start-2' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            <div className="relative max-w-7xl max-h-full">
              <img
                src={zoomedImage}
                alt="Zoomed view"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              <button
                onClick={closeZoom}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-3 py-1 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// GSAP-based carousel with scroll-triggered horizontal animation
function GSAPCarousel({ images, bgColor, title, sets }: GSAPCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');
  const [currentZoomIndex, setCurrentZoomIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !carouselRef.current || typeof window === 'undefined') return;

    const container = containerRef.current;
    const carousel = carouselRef.current;

    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      // Check if GSAP and ScrollTrigger are available
      if (!gsap || !ScrollTrigger) {
        console.warn('GSAP or ScrollTrigger not available');
        return;
      }

      // Calculate the total width for horizontal scroll
      const totalWidth = carousel.scrollWidth - container.clientWidth;
      
      console.log('GSAP Carousel initialized:', { 
        totalWidth, 
        sets, 
        images: images.length,
        carouselWidth: carousel.scrollWidth,
        containerWidth: container.clientWidth
      });
      
      // Create the horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false, // Remove markers
        }
      });

      tl.to(carousel, {
        x: -totalWidth,
        ease: "none",
        duration: 1
      });
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, [images, sets]);

  // Keyboard navigation for zoom modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isZoomed) {
        if (e.key === 'Escape') {
          closeZoom();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isZoomed, currentZoomIndex]);

  const handleImageClick = (image: string) => {
    const imageIndex = images.indexOf(image);
    setCurrentZoomIndex(imageIndex);
    setZoomedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage('');
  };

  const nextImage = () => {
    const nextIndex = (currentZoomIndex + 1) % images.length;
    setCurrentZoomIndex(nextIndex);
    setZoomedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentZoomIndex - 1 + images.length) % images.length;
    setCurrentZoomIndex(prevIndex);
    setZoomedImage(images[prevIndex]);
  };

  // Group images into sets (3 sets = 3 slides, each with 4 images in 2x2 grid)
  const imageSets = [];
  for (let i = 0; i < sets; i++) {
    const startIndex = i * 4;
    const endIndex = startIndex + 4;
    imageSets.push(images.slice(startIndex, endIndex));
  }

  return (
    <>
      <div
        ref={containerRef}
        className={`relative h-[755px] w-full rounded-xl p-11 ${bgColor} overflow-hidden`}
        style={{ 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          ref={carouselRef}
          className="flex gap-10 h-full"
          style={{ 
            width: `${sets * 100}%`,
            minWidth: `${sets * 100}%`,
            position: 'relative'
          }}
        >
          {imageSets.map((set, setIndex) => (
            <div
              key={setIndex}
              className="flex-shrink-0 w-full"
            >
              <div className="grid grid-cols-2 grid-rows-2 gap-10 h-full">
                {set.map((image, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 ${
                      index === 0 ? 'aspect-[2892/1960]' : 'aspect-[1446/980]'
                    } ${index === 1 ? 'col-start-2 row-start-1' : ''} ${
                      index === 2 ? 'col-start-1 row-start-2' : ''
                    } ${index === 3 ? 'col-start-2 row-start-2' : ''}`}
                    onClick={() => handleImageClick(image)}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Set indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {imageSets.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-white/30"
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            <div className="relative max-w-7xl max-h-full">
              <img
                src={zoomedImage}
                alt="Zoomed view"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close button */}
              <button
                onClick={closeZoom}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Previous button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentZoomIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

interface AirframePageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

export default function AirframePage({ onBack, openProjects, onCloseProject, onNavigateToProject, onLogoClick }: AirframePageProps) {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'more' });
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void }>(null);


  const handleNavigateToSection = (section: 'featured' | 'more' | 'contact') => {
    setNavigation({ activeSection: section });
  };

  return (
    <div className="h-screen bg-neutral-950 text-white w-full overflow-hidden">
      <div className="box-border content-stretch flex flex-row gap-4 items-stretch justify-start p-[12px] relative w-full min-w-0" style={{ height: 'calc(100vh - 74px)' }}>
        {/* Sidebar */}
        <div className="w-[200px] flex-shrink-0 h-full">
          <Sidebar 
            navigation={navigation} 
            onNavigateToSection={handleNavigateToSection}
            openProjects={openProjects}
            currentProjectId="airframe"
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
          <div className="flex-1 overflow-y-auto">
            {/* Gradient Section - Now scrolls with content */}
            <div style={{ background: 'linear-gradient(179deg, #7A96C4 -37.41%, #3C4A61 41.39%)' }}>
              <div className="p-6">
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
                  <a href="https://www.airframe.ai/" target="_blank" rel="noopener noreferrer">
                    <svg width="118" height="40" viewBox="0 0 118 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="118" height="40" rx="20" fill="#D1D5DB"/>
                      <path d="M28 30C33.5228 30 38 25.5228 38 20C38 14.4772 33.5228 10 28 10C22.4772 10 18 14.4772 18 20C18 25.5228 22.4772 30 28 30Z" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M28 10C25.4322 12.6962 24 16.2767 24 20C24 23.7233 25.4322 27.3038 28 30C30.5678 27.3038 32 23.7233 32 20C32 16.2767 30.5678 12.6962 28 10Z" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 20H38" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M51.0824 25L48.2983 14.8182H49.5511L51.679 23.1108H51.7784L53.946 14.8182H55.3381L57.5057 23.1108H57.6051L59.733 14.8182H60.9858L58.2017 25H56.929L54.6818 16.8864H54.6023L52.3551 25H51.0824ZM64.8537 25.1591C64.1179 25.1591 63.4832 24.9967 62.9496 24.6719C62.4193 24.3438 62.0099 23.8864 61.7216 23.2997C61.4366 22.7098 61.294 22.0237 61.294 21.2415C61.294 20.4593 61.4366 19.7699 61.7216 19.1733C62.0099 18.5734 62.411 18.1061 62.9247 17.7713C63.4418 17.4332 64.045 17.2642 64.7344 17.2642C65.1321 17.2642 65.5249 17.3305 65.9126 17.4631C66.3004 17.5956 66.6534 17.8111 66.9716 18.1094C67.2898 18.4044 67.5433 18.7955 67.7322 19.2827C67.9212 19.7699 68.0156 20.3698 68.0156 21.0824V21.5795H62.1293V20.5653H66.8224C66.8224 20.1345 66.7363 19.75 66.5639 19.4119C66.3949 19.0739 66.1529 18.8071 65.8381 18.6115C65.5265 18.416 65.1586 18.3182 64.7344 18.3182C64.267 18.3182 63.8627 18.4342 63.5213 18.6662C63.1832 18.8949 62.9231 19.1932 62.7408 19.5611C62.5585 19.929 62.4673 20.3234 62.4673 20.7443V21.4205C62.4673 21.9972 62.5668 22.486 62.7656 22.8871C62.9678 23.2848 63.2479 23.5881 63.6058 23.7969C63.9638 24.0024 64.3797 24.1051 64.8537 24.1051C65.1619 24.1051 65.4403 24.062 65.6889 23.9759C65.9408 23.8864 66.1579 23.7538 66.3402 23.5781C66.5225 23.3991 66.6634 23.1771 66.7628 22.9119L67.8963 23.2301C67.777 23.6146 67.5765 23.9527 67.2947 24.2443C67.013 24.5327 66.665 24.758 66.2507 24.9205C65.8364 25.0795 65.3707 25.1591 64.8537 25.1591ZM69.9595 25V14.8182H71.1328V18.5767H71.2322C71.3184 18.4441 71.4377 18.2751 71.5902 18.0696C71.746 17.8608 71.968 17.6752 72.2564 17.5128C72.5481 17.3471 72.9425 17.2642 73.4396 17.2642C74.0826 17.2642 74.6494 17.425 75.1399 17.7464C75.6304 18.0679 76.0133 18.5237 76.2884 19.1136C76.5634 19.7036 76.701 20.3996 76.701 21.2017C76.701 22.0104 76.5634 22.7114 76.2884 23.3047C76.0133 23.8946 75.6321 24.352 75.1449 24.6768C74.6577 24.9983 74.0959 25.1591 73.4595 25.1591C72.969 25.1591 72.5762 25.0779 72.2812 24.9155C71.9863 24.7498 71.7592 24.5625 71.6001 24.3537C71.4411 24.1416 71.3184 23.9659 71.2322 23.8267H71.093V25H69.9595ZM71.1129 21.1818C71.1129 21.7585 71.1974 22.2673 71.3665 22.7081C71.5355 23.1456 71.7824 23.4886 72.1072 23.7372C72.4321 23.9825 72.8298 24.1051 73.3004 24.1051C73.791 24.1051 74.2003 23.9759 74.5284 23.7173C74.8598 23.4555 75.1084 23.1042 75.2741 22.6634C75.4432 22.2192 75.5277 21.7254 75.5277 21.1818C75.5277 20.6449 75.4448 20.161 75.2791 19.7301C75.1167 19.2959 74.8698 18.9529 74.5384 18.701C74.2102 18.4458 73.7976 18.3182 73.3004 18.3182C72.8232 18.3182 72.4221 18.4392 72.0973 18.6811C71.7725 18.9197 71.5272 19.2545 71.3615 19.6854C71.1958 20.1129 71.1129 20.6117 71.1129 21.1818ZM83.9048 19.0739L82.8509 19.3722C82.7846 19.1965 82.6868 19.0258 82.5575 18.8601C82.4316 18.6911 82.2592 18.5518 82.0405 18.4425C81.8217 18.3331 81.5417 18.2784 81.2003 18.2784C80.733 18.2784 80.3435 18.3861 80.032 18.6016C79.7237 18.8137 79.5696 19.0838 79.5696 19.4119C79.5696 19.7036 79.6757 19.9339 79.8878 20.103C80.0999 20.272 80.4313 20.4129 80.8821 20.5256L82.0156 20.804C82.6984 20.9697 83.2071 21.2232 83.5419 21.5646C83.8767 21.9027 84.044 22.3385 84.044 22.8722C84.044 23.3097 83.9181 23.7008 83.6662 24.0455C83.4176 24.3902 83.0696 24.6619 82.6222 24.8608C82.1747 25.0597 81.6544 25.1591 81.0611 25.1591C80.2822 25.1591 79.6375 24.9901 79.1271 24.652C78.6167 24.3139 78.2936 23.8201 78.1577 23.1705L79.2713 22.892C79.3774 23.303 79.5779 23.6113 79.8729 23.8168C80.1712 24.0223 80.5606 24.125 81.0412 24.125C81.5881 24.125 82.0223 24.009 82.3438 23.777C82.6686 23.5417 82.831 23.2599 82.831 22.9318C82.831 22.6667 82.7382 22.4446 82.5526 22.2656C82.367 22.0833 82.0819 21.9474 81.6974 21.858L80.4247 21.5597C79.7254 21.3939 79.2116 21.1371 78.8835 20.7891C78.5587 20.4377 78.3963 19.9986 78.3963 19.4716C78.3963 19.0407 78.5173 18.6596 78.7592 18.3281C79.0045 17.9967 79.3376 17.7365 79.7585 17.5476C80.1828 17.3587 80.6634 17.2642 81.2003 17.2642C81.956 17.2642 82.5492 17.4299 82.9801 17.7614C83.4143 18.0928 83.7225 18.5303 83.9048 19.0739ZM85.8102 25V17.3636H86.9835V25H85.8102ZM86.4068 16.0909C86.1781 16.0909 85.9809 16.013 85.8152 15.8572C85.6528 15.7015 85.5716 15.5142 85.5716 15.2955C85.5716 15.0767 85.6528 14.8894 85.8152 14.7337C85.9809 14.5779 86.1781 14.5 86.4068 14.5C86.6355 14.5 86.831 14.5779 86.9934 14.7337C87.1592 14.8894 87.242 15.0767 87.242 15.2955C87.242 15.5142 87.1592 15.7015 86.9934 15.8572C86.831 16.013 86.6355 16.0909 86.4068 16.0909ZM92.4535 17.3636V18.358H88.4961V17.3636H92.4535ZM89.6495 15.5341H90.8228V22.8125C90.8228 23.1439 90.8709 23.3925 90.967 23.5582C91.0664 23.7206 91.1924 23.83 91.3448 23.8864C91.5006 23.9394 91.6647 23.9659 91.837 23.9659C91.9663 23.9659 92.0723 23.9593 92.1552 23.946C92.238 23.9295 92.3043 23.9162 92.354 23.9062L92.5927 24.9602C92.5131 24.9901 92.4021 25.0199 92.2596 25.0497C92.1171 25.0829 91.9364 25.0994 91.7177 25.0994C91.3862 25.0994 91.0614 25.0282 90.7433 24.8857C90.4284 24.7431 90.1665 24.526 89.9577 24.2344C89.7522 23.9427 89.6495 23.5748 89.6495 23.1307V15.5341ZM97.3381 25.1591C96.6023 25.1591 95.9676 24.9967 95.4339 24.6719C94.9036 24.3438 94.4943 23.8864 94.206 23.2997C93.9209 22.7098 93.7784 22.0237 93.7784 21.2415C93.7784 20.4593 93.9209 19.7699 94.206 19.1733C94.4943 18.5734 94.8954 18.1061 95.4091 17.7713C95.9261 17.4332 96.5294 17.2642 97.2188 17.2642C97.6165 17.2642 98.0092 17.3305 98.397 17.4631C98.7848 17.5956 99.1378 17.8111 99.456 18.1094C99.7741 18.4044 100.028 18.7955 100.217 19.2827C100.406 19.7699 100.5 20.3698 100.5 21.0824V21.5795H94.6136V20.5653H99.3068C99.3068 20.1345 99.2206 19.75 99.0483 19.4119C98.8793 19.0739 98.6373 18.8071 98.3224 18.6115C98.0109 18.416 97.643 18.3182 97.2188 18.3182C96.7514 18.3182 96.3471 18.4342 96.0057 18.6662C95.6676 18.8949 95.4074 19.1932 95.2251 19.5611C95.0429 19.929 94.9517 20.3234 94.9517 20.7443V21.4205C94.9517 21.9972 95.0511 22.486 95.25 22.8871C95.4522 23.2848 95.7322 23.5881 96.0902 23.7969C96.4482 24.0024 96.8641 24.1051 97.3381 24.1051C97.6463 24.1051 97.9247 24.062 98.1733 23.9759C98.4252 23.8864 98.6423 23.7538 98.8246 23.5781C99.0069 23.3991 99.1477 23.1771 99.2472 22.9119L100.381 23.2301C100.261 23.6146 100.061 23.9527 99.7791 24.2443C99.4974 24.5327 99.1494 24.758 98.7351 24.9205C98.3208 25.0795 97.8551 25.1591 97.3381 25.1591Z" fill="#282828"/>
                      <path d="M48 27.7841H101.216V28.7386H48V27.7841Z" fill="#282828"/>
                      <a href="https://www.airframe.ai/">
                        <rect fill="black" fillOpacity="0" y="2.52841" width="53.2159" height="16.9432"/>
                      </a>
                    </svg>
                  </a>
                </div>

                {/* Project Header */}
                <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-end">
                  <div
                    className="w-full lg:w-60 h-60 bg-cover bg-center rounded-lg flex-shrink-0"
                    style={{ backgroundImage: `url(/images/airframe/thumbnail.png)` }}
                  />
                  <div className="flex-1 pb-3 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.div
                        className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">6 months</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">$4M funding</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">Working directly with CEO</p>
                        </div>
                      </motion.div>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">
                      AI-powered B2B Procurement Platform
                    </h1>
                    <p className="text-xl text-gray-300">
                      Streamlining B2B software procurement with AI & collaboration tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full px-4 py-4">
              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Duration</div>
                  <div className="text-gray-300">Dec 2024 - May 2025</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Role</div>
                  <div className="text-gray-300">Founding Product Designer</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Collaborators</div>
                  <div className="text-gray-300">CEO, CTO, Consultant & 3 Engineers</div>
                </div>
              </div>

              <Separator className="mb-16" />
            </div>

            {/* About Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <h2 className="text-2xl font-bold mb-3">About Airframe</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Airframe is a B2B platform that helps software procurement professionals quickly find suitable
                products and suppliers, integrating market research, expert advice, user reviews, case studies,
                and procurement process tools.
              </p>
            </div>

            {/* Background & Challenges */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <h2 className="text-2xl font-bold mb-3">Background & Challenges</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Most existing procurement tools in the market are designed with suppliers at the core,
                presenting three major challenges for buyers:
              </p>
              <ol className="text-lg text-gray-300 leading-relaxed space-y-2 ml-6">
                <li>1. A lack of real-time collaboration tools, with teams still relying on non-collaborative Excel spreadsheets.</li>
                <li>2. A lack of benchmarks in unfamiliar areas, leading to hesitant and time-consuming evaluation processes.</li>
                <li>3. Difficulty in obtaining reliable peer advice or sharing of real experiences.</li>
              </ol>
            </div>

            {/* Goal */}
            <div className="text-center px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-gray-400 text-xl mb-2">GOAL</div>
              <h2 className="text-3xl font-semibold leading-relaxed">
                Buyer-first process for fast,<br />
                confident decisions across teams
              </h2>
            </div>

            {/* Platform Overview */}
            <div className="bg-[#64a1a5] p-10 mb-16 overflow-hidden">
              <div className="flex gap-4 animate-scroll">
                {/* First set of images */}
                {[airframeImages.ai, airframeImages.market, airframeImages.rfp, airframeImages.expert, airframeImages.guide].map((image, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`Platform overview ${index + 1}`}
                      className="w-auto h-80 object-contain"
                    />
                  </div>
                ))}
                {/* Second set of images (duplicate for seamless loop) */}
                {[airframeImages.ai, airframeImages.market, airframeImages.rfp, airframeImages.expert, airframeImages.guide].map((image, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`Platform overview ${index + 1}`}
                      className="w-auto h-80 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <h2 className="text-2xl font-bold mb-3">My Contribution</h2>
              <ul className="text-lg text-gray-300 leading-relaxed space-y-2 ml-6">
                <li>• Lead user flow and pain point analysis</li>
                <li>• Define core users and primary scenarios</li>
                <li>• Organize and maintain the Design System</li>
                <li>• Design the RFP collaboration tool to replace Excel, supporting real-time editing and requirement tracking for multiple users</li>
                <li>• Establish a complete user process from requirement collection → vendor selection → evaluation → Proof of Concept</li>
                <li>• Design an expert network system</li>
                <li>• Design an AI assistant to support natural language search, recommendations, and process guidance</li>
              </ul>
            </div>

            {/* Process */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="grid grid-cols-3 gap-16">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded" />
                    <h3 className="text-2xl font-bold">Understand</h3>
                  </div>
                  <p className="text-lg text-gray-300">
                    Based on feedback from 20+ user interviews conducted by the CEO, I identified 3 key pain points
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded" />
                    <h3 className="text-2xl font-bold">Hypothesize</h3>
                  </div>
                  <ul className="text-lg text-gray-300 space-y-1">
                    <li>• Define 3 core HMW questions</li>
                    <li>• Generated 7 concept ideas</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded" />
                    <h3 className="text-2xl font-bold">Create</h3>
                  </div>
                  <ul className="text-lg text-gray-300 space-y-1">
                    <li>• Handoff & maintain design system</li>
                    <li>• Delivered 250+ hi-fi screens</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="text-center px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-gray-400 text-xl mb-2">Solution</div>
              <h2 className="text-3xl font-semibold leading-relaxed">
                One platform for research, communication, and decisions.
              </h2>
            </div>

            <Separator className="mb-16" />

            {/* HMW #1 */}
            <div className="bg-[#282727] p-16 mb-16">
              <div className="flex gap-16 items-center">
                <div className="w-96">
                  <h3 className="text-2xl font-bold mb-5">HMW #1</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    How might we replace static tools like Excel with real-time collaborative solutions for buyers
                    and decision-makers so that they can work more efficiently with cross-functional teams?
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed mt-4">
                    We created a collaborative RFP tool tailored for both buyers and vendors. Additionally, we offer
                    buyers a variety of RFP templates to help them get started more efficiently.
                  </p>
                </div>
                <div className="w-[417px] h-80 bg-white rounded" />
              </div>
            </div>

            {/* Carousel 1 */}
            <div className="text-center mb-16">
              <GSAPCarousel
                images={airframeImages.carousel1}
                bgColor="bg-[#105888]"
                sets={3}
              />
            </div>

            {/* HMW #2 */}
            <div className="bg-[#282727] p-16 mb-16">
              <div className="flex gap-16 items-center">
                <div className="w-96">
                  <h3 className="text-2xl font-bold mb-5">HMW #2</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    How might we support buyers during vendor evaluation so that they can make confident decisions
                    despite limited domain knowledge?
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed mt-4">
                    We developed a comprehensive set of market guides tailored to various industries. We also
                    examine the details of each product, analyzing the advantages and disadvantages from multiple
                    perspectives to provide deeper insights.
                  </p>
                </div>
                <div className="w-[417px] h-80 bg-white rounded" />
              </div>
            </div>

            {/* Carousel 2 */}
            <div className="text-center mb-16">
              <GSAPCarousel
                images={airframeImages.carousel2}
                bgColor="bg-[#107e88]"
                sets={3}
              />
            </div>

            {/* HMW #3 */}
            <div className="bg-[#282727] p-16 mb-16">
              <div className="flex gap-16 items-center">
                <div className="w-96">
                  <h3 className="text-2xl font-bold mb-5">HMW #3</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    How might we enable buyers to access trusted advice during vendor selection so that they
                    can avoid hesitation and poor decision-making?
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed mt-4">
                    We all share the experience of seeking out others with similar uncertainties when faced with the
                    unknown. This inspired us to create a network where verified individuals can share their insights based on genuine experiences.
                  </p>
                </div>
                <div className="w-[417px] h-80 bg-white rounded" />
              </div>
            </div>

            {/* Carousel 3 */}
            <div className="text-center mb-16">
              <GSAPCarousel
                images={airframeImages.carousel3}
                bgColor="bg-[#9678a4]"
                sets={1}
              />
            </div>

            {/* AI Assistant */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center px-6 md:px-12 lg:px-24 mb-16">
              <div className="flex-1 text-center">
                <div className="text-gray-400 text-xl mb-2">Intelligent Agent</div>
                <h2 className="text-3xl font-semibold leading-relaxed">
                  Airframe AI – <br />
                  Turning Complexity <br />
                  into <span className="text-[#e6ff02]">Clarity</span>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-300 leading-relaxed">
                  The landscape has shifted since the AI industry surged, leading to changes in how people search
                  for information. Although we have access to a vast database and numerous resources to assist our
                  users, there is one essential task we must prioritize: ensuring that our users can find exactly
                  what they are seeking.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  To address this, we developed the Airframe AI assistant, designed to help users effortlessly
                  locate what they need and guide them on their journey.
                </p>
              </div>
            </div>

            {/* Carousel 4 */}
            <div className="text-center mb-16">
              <GSAPCarousel
                images={airframeImages.carousel4}
                bgColor="bg-[#bd9d8b]"
                sets={1}
              />
            </div>

            {/* Impact */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-center mb-16">
                <div className="text-gray-400 text-xl mb-2">Impact</div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <Card className="bg-[#282727] p-4 text-center">
                  <p className="text-3xl font-semibold">
                    <span className="text-[#e6ff02]">Confident</span> decisions, even with limited data.
                  </p>
                </Card>
                <Card className="bg-[#282727] p-4 text-center">
                  <p className="text-3xl font-semibold">
                    <span className="text-[#e6ff02]">$4 million</span> secured in the seed funding round
                  </p>
                </Card>
              </div>
            </div>

            <Separator className="mb-16" />

            {/* Design System */}
            <div className="px-6 md:px-12 lg:px-24">
              <h2 className="text-2xl font-bold mb-3">Design System</h2>
              <ul className="text-lg text-gray-300 leading-relaxed space-y-2 ml-6">
                <li>• Lead user flow and pain point analysis</li>
                <li>• Define core users and primary scenarios</li>
                <li>• Organize and maintain the Design System</li>
                <li>• Design the RFP collaboration tool to replace Excel, supporting real-time editing and requirement tracking for multiple users</li>
                <li>• Establish a complete user process from requirement collection → vendor selection → evaluation → Proof of Concept</li>
                <li>• Design an expert network system</li>
                <li>• Design an AI assistant to support natural language search, recommendations, and process guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Audio Player - Sticky to bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex-shrink-0 bg-neutral-950 w-full" style={{ height: '74px' }}>
        <MediaPlayer ref={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
      </div>
    </div>
  );
} 