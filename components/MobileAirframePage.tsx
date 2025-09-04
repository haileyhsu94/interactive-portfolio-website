'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import Footer from './Footer';

// Image imports
const airframeImages = {
  thumbnail: '/images/airframe/thumbnail.png',
  ai: '/images/airframe/ai.png',
  market: '/images/airframe/market.png',
  rfp: '/images/airframe/rfp.png',
  expert: '/images/airframe/expert.png',
  guide: '/images/airframe/guide.png',
  // Carousel 1: 3 sets of 4 images (12 total) - for HMW #1
  carousel1: [
    '/images/airframe/carousel1-1.png',
    '/images/airframe/carousel1-2.png',
    '/images/airframe/carousel1-3.png',
    '/images/airframe/carousel1-4.png',
    '/images/airframe/carousel1-5.png',
    '/images/airframe/carousel1-6.png',
    '/images/airframe/carousel1-7.png',
    '/images/airframe/carousel1-8.png',
    '/images/airframe/carousel1-9.png',
    '/images/airframe/carousel1-10.png',
    '/images/airframe/carousel1-11.png',
    '/images/airframe/carousel1-12.png',
  ],
  // Carousel 2: 3 sets of 4 images (12 total) - for HMW #2
  carousel2: [
    '/images/airframe/carousel2-1.png',
    '/images/airframe/carousel2-2.png',
    '/images/airframe/carousel2-3.png',
    '/images/airframe/carousel2-4.png',
    '/images/airframe/carousel2-5.png',
    '/images/airframe/carousel2-6.png',
    '/images/airframe/carousel2-7.png',
    '/images/airframe/carousel2-8.png',
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

interface MobileAirframePageProps {
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

export default function MobileAirframePage({ onBack }: MobileAirframePageProps) {
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

  return (
    <div className="bg-black relative size-full min-h-screen mobile-container" data-name="mobile/airframe">
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
                <span>AI-powered B2B Procurement Platform</span>
              </p>
              <p className="font-didact-gothic leading-[28px]">
                <span className="text-[#f4915c]">Projected to cut vendor sourcing time by 40%</span>
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
                     style={{ backgroundImage: `url(${airframeImages.thumbnail})` }}
                     onClick={() => handleImageClick(airframeImages.thumbnail)}>
                </div>
                <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                  <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[16px] text-gray-300 w-full">
                    <p className="leading-[22px]">Delivered 250+ high-fidelity screens for buyer & vendor flows.</p>
                  </div>
                  <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">$4M funding</p>
                      </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">B2B Platform</p>
                      </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">AI Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Process</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20.0002 36.6663C29.2049 36.6663 36.6668 29.2044 36.6668 19.9997C36.6668 10.7949 29.2049 3.33301 20.0002 3.33301C10.7954 3.33301 3.3335 10.7949 3.3335 19.9997C3.3335 29.2044 10.7954 36.6663 20.0002 36.6663Z" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36.6667 20H30" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.0002 20H3.3335" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 9.99967V3.33301" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 36.6667V30" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold">Understand</h3>
              </div>
              <p className="text-lg text-gray-300">
                Based on feedback from 20+ user interviews conducted by the CEO, I identified 3 key pain points
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                  <path d="M25.6665 23.333C25.9998 21.6663 26.8332 20.4997 28.1665 19.1663C29.8332 17.6663 30.6665 15.4997 30.6665 13.333C30.6665 10.6808 29.6129 8.1373 27.7376 6.26194C25.8622 4.38658 23.3187 3.33301 20.6665 3.33301C18.0143 3.33301 15.4708 4.38658 13.5954 6.26194C11.7201 8.1373 10.6665 10.6808 10.6665 13.333C10.6665 14.9997 10.9998 16.9997 13.1665 19.1663C14.3332 20.333 15.3332 21.6663 15.6665 23.333" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.6665 30H25.6665" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.333 36.667H23.9997" stroke="#F4915C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold">Hypothesize</h3>
              </div>
              <ul className="text-lg text-gray-300 space-y-1">
                <li>• Define 3 core HMW questions</li>
                <li>• Generated 7 concept ideas</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                  <path d="M20.3337 36.6663C15.9134 36.6663 11.6742 34.9104 8.54855 31.7848C5.42294 28.6592 3.66699 24.4199 3.66699 19.9997C3.66699 15.5794 5.42294 11.3402 8.54855 8.21456C11.6742 5.08896 15.9134 3.33301 20.3337 3.33301C24.7539 3.33301 28.9932 4.91336 32.1188 7.72641C35.2444 10.5395 37.0003 14.3548 37.0003 18.333C37.0003 20.5431 36.1224 22.6628 34.5595 24.2256C32.9967 25.7884 30.8771 26.6663 28.667 26.6663H24.917C24.3753 26.6663 23.8444 26.8172 23.3836 27.1019C22.9228 27.3867 22.5505 27.7942 22.3082 28.2786C22.066 28.7631 21.9635 29.3055 22.0121 29.8449C22.0608 30.3844 22.2587 30.8997 22.5837 31.333L23.0837 31.9997C23.4087 32.433 23.6066 32.9483 23.6552 33.4877C23.7038 34.0272 23.6013 34.5696 23.3591 35.054C23.1168 35.5385 22.7445 35.946 22.2837 36.2307C21.8229 36.5155 21.292 36.6663 20.7503 36.6663H20.3337Z" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.8333 11.6667C23.2936 11.6667 23.6667 11.2936 23.6667 10.8333C23.6667 10.3731 23.2936 10 22.8333 10C22.3731 10 22 10.3731 22 10.8333C22 11.2936 22.3731 11.6667 22.8333 11.6667Z" fill="#E6FF02" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29.5003 18.3337C29.9606 18.3337 30.3337 17.9606 30.3337 17.5003C30.3337 17.0401 29.9606 16.667 29.5003 16.667C29.0401 16.667 28.667 17.0401 28.667 17.5003C28.667 17.9606 29.0401 18.3337 29.5003 18.3337Z" fill="#E6FF02" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.1668 21.6667C11.6271 21.6667 12.0002 21.2936 12.0002 20.8333C12.0002 20.3731 11.6271 20 11.1668 20C10.7066 20 10.3335 20.3731 10.3335 20.8333C10.3335 21.2936 10.7066 21.6667 11.1668 21.6667Z" fill="#E6FF02" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5003 13.3337C14.9606 13.3337 15.3337 12.9606 15.3337 12.5003C15.3337 12.0401 14.9606 11.667 14.5003 11.667C14.0401 11.667 13.667 12.0401 13.667 12.5003C13.667 12.9606 14.0401 13.3337 14.5003 13.3337Z" fill="#E6FF02" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold">Create</h3>
              </div>
              <ul className="text-lg text-gray-300 space-y-1">
                <li>• Handoff & maintain design system</li>
                <li>• Delivered 250+ hi-fi screens</li>
              </ul>
            </div>
          </div>
        </div>

        {/* HMW Section 1 */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">How might we streamline vendor discovery?</p>
            </div>
          </div>
          <InteractiveCarousel images={airframeImages.carousel1} bgColor="#1a1a1a" />
        </div>

        {/* HMW Section 2 */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">How might we simplify the RFP process?</p>
            </div>
          </div>
          <InteractiveCarousel images={airframeImages.carousel2} bgColor="#1a1a1a" />
        </div>

        {/* HMW Section 3 */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">How might we enhance decision confidence?</p>
            </div>
          </div>
          <InteractiveCarousel images={airframeImages.carousel3} bgColor="#1a1a1a" />
        </div>

        {/* AI Assistant Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Intelligent Agent</p>
            </div>
          </div>
          <InteractiveCarousel images={airframeImages.carousel4} bgColor="#1a1a1a" />
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
                    <span className="text-[#e6ff02]">Confident</span> decisions,<br />
                    even with limited data.
                  </p>
                </div>
                <div className="bg-[#282727] p-4 text-center rounded-lg">
                  <p className="text-xl font-semibold">
                    <span className="text-[#e6ff02]">$4 million</span> secured in the<br />
                    seed funding round
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design System */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Components at a Glance</p>
            </div>
          </div>
          <div 
            className="aspect-[1656/1408] bg-center bg-cover bg-no-repeat rounded-3xl w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundImage: `url('/images/airframe/design-system.png')` }}
            onClick={() => handleImageClick('/images/airframe/design-system.png')}
          />
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
