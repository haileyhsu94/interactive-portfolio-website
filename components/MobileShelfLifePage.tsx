'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import Footer from './Footer';

// Image imports
const shelfLifeImages = {
  thumbnail: '/images/shelf-life/thumbnail.png',
  hero: '/images/shelf-life/hero.png',
  process: '/images/shelf-life/process.png',
  design: '/images/shelf-life/design.png',
  results: '/images/shelf-life/results.png',
  impact: '/images/shelf-life/impact.png',
};

interface MobileShelfLifePageProps {
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

export default function MobileShelfLifePage({ onBack }: MobileShelfLifePageProps) {
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
    <div className="bg-black relative size-full min-h-screen mobile-container" data-name="mobile/shelf-life">
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
                <span>Dual-Interface Platform to Reduce Food Waste</span>
              </p>
              <p className="font-didact-gothic leading-[28px]">
                <span className="text-[#f4915c]">Connecting consumers and businesses to minimize food waste</span>
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
                     style={{ backgroundImage: `url(${shelfLifeImages.thumbnail})` }}
                     onClick={() => handleImageClick(shelfLifeImages.thumbnail)}>
                </div>
                <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                  <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[16px] text-gray-300 w-full">
                    <p className="leading-[22px]">Designed a platform that helps reduce food waste by connecting consumers with businesses offering surplus food at discounted prices.</p>
                  </div>
                  <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">Sustainability</p>
                      </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">Food Waste</p>
                      </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap">
                        <p className="leading-[22px] whitespace-pre">Marketplace</p>
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
              <p className="leading-[normal] whitespace-pre">Design Process</p>
            </div>
          </div>
          <div 
            className="aspect-[1656/1408] bg-center bg-cover bg-no-repeat rounded-3xl w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundImage: `url(${shelfLifeImages.process})` }}
            onClick={() => handleImageClick(shelfLifeImages.process)}
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
            style={{ backgroundImage: `url(${shelfLifeImages.design})` }}
            onClick={() => handleImageClick(shelfLifeImages.design)}
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
            style={{ backgroundImage: `url(${shelfLifeImages.results})` }}
            onClick={() => handleImageClick(shelfLifeImages.results)}
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
                    <span className="text-[#e6ff02]">30%</span> reduction in<br />
                    food waste
                  </p>
                </div>
                <div className="bg-[#282727] p-4 text-center rounded-lg">
                  <p className="text-xl font-semibold">
                    <span className="text-[#e6ff02]">500+</span> businesses<br />
                    onboarded
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
