'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import Footer from './Footer';

// Image imports
const eatsyImages = {
  thumbnail: '/images/eatsy/thumbnail.png',
  hero: '/images/eatsy/hero.png',
  process: '/images/eatsy/process.png',
  design: '/images/eatsy/design.png',
  results: '/images/eatsy/results.png',
  impact: '/images/eatsy/impact.png',
};

interface MobileEatsyPageProps {
  onBack?: () => void;
}

function InteractiveCarousel({ images, bgColor, title }: { images: string[]; bgColor: string; title?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full" style={{ backgroundColor: bgColor }}>
      <div className="relative overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
        
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {title && (
        <div className="text-center mt-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      )}
    </div>
  );
}

export default function MobileEatsyPage({ onBack }: MobileEatsyPageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/audio/reservation-audio.mp3'));

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
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audio]);

  return (
    <div className="bg-black relative size-full min-h-screen mobile-container" data-name="mobile/eatsy">
      {/* Header */}
      <div className="fixed bg-black box-border content-stretch flex items-center justify-between left-0 p-[16px] right-0 top-0 z-50">
        <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
          <button 
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-[132px]">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] w-full">
              <p className="leading-[normal]">Hailey Hsu</p>
            </div>
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-full">
              <p className="leading-[normal]">Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-0 pb-20 pt-[80px] px-4 right-0 top-[72px] overflow-y-auto min-h-[calc(100vh-72px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent mobile-content">
        
        {/* Hero Section */}
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start px-2.5 py-5 relative shrink-0 w-full">
          <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full">
            <div className="basis-0 font-didact-gothic font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-gray-300">
              <p className="font-didact-gothic leading-[28px] mb-0">
                <span>Restaurant Reservation Platform</span>
              </p>
              <p className="font-didact-gothic leading-[28px]">
                <span className="text-[#f4915c]">Streamlined booking experience for diners and restaurants</span>
              </p>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="bg-[#121212] content-stretch flex flex-col gap-4 items-start justify-start relative rounded-[16px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]"></div>
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                <div className="aspect-[852/676] bg-center bg-cover bg-no-repeat rounded-[12px] shrink-0 w-full" 
                     style={{ backgroundImage: `url(${eatsyImages.thumbnail})` }}
                     onClick={() => handleImageClick(eatsyImages.thumbnail)}>
                </div>
                <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                  <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[16px] text-gray-300 w-full">
                    <p className="leading-[22px]">Designed a comprehensive reservation system that simplifies the booking process for both customers and restaurant owners.</p>
                  </div>
                  <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">Food & Dining</p>
                      </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">Reservation System</p>
                      </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">User Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Player Button */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="bg-[#121212] content-stretch flex flex-col gap-4 items-start justify-start relative rounded-[16px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]"></div>
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative shrink-0 w-full">
              <div className="flex items-center justify-center">
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
        </div>

        {/* Process Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Design Process</p>
            </div>
          </div>
          <div 
            className="aspect-[1656/1408] bg-center bg-cover bg-no-repeat rounded-3xl w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundImage: `url(${eatsyImages.process})` }}
            onClick={() => handleImageClick(eatsyImages.process)}
          />
        </div>

        {/* Design System */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Design System</p>
            </div>
          </div>
          <div 
            className="aspect-[1656/1408] bg-center bg-cover bg-no-repeat rounded-3xl w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundImage: `url(${eatsyImages.design})` }}
            onClick={() => handleImageClick(eatsyImages.design)}
          />
        </div>

        {/* Results */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Results</p>
            </div>
          </div>
          <div 
            className="aspect-[1656/1408] bg-center bg-cover bg-no-repeat rounded-3xl w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundImage: `url(${eatsyImages.results})` }}
            onClick={() => handleImageClick(eatsyImages.results)}
          />
        </div>

        {/* Impact Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Impact</p>
            </div>
          </div>
          <div className="bg-[#121212] content-stretch flex flex-col gap-4 items-start justify-start relative rounded-[16px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]"></div>
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative shrink-0 w-full">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#282727] p-4 text-center rounded-lg">
                  <p className="text-xl font-semibold">
                    <span className="text-[#e6ff02]">40%</span> reduction in<br />
                    booking time
                  </p>
                </div>
                <div className="bg-[#282727] p-4 text-center rounded-lg">
                  <p className="text-xl font-semibold">
                    <span className="text-[#e6ff02]">85%</span> increase in<br />
                    restaurant efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-0 px-2.5 relative shrink-0 w-full">
          <Footer />
        </div>
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
