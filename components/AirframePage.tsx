'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Sidebar, MediaPlayer } from './InteractiveHome';
import { Card } from './ui/card';
import { Separator } from './ui/separator';

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
  bgColor?: string;
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

// 3D Carousel Component - Proper implementation
function Carousel3D({ images, title }: Omit<GSAPCarouselProps, 'sets'>) {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [isPinned, setIsPinned] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentSlideRef = useRef(0);
  const scrollAccumulatorRef = useRef({ x: 0, y: 0 });
  const lastScrollTimeRef = useRef(0);

    // Simple wheel-based navigation (keeping the pinning logic)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || images.length <= 1) return;

    let isInCarouselMode = false;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Carousel must be fully visible (100%) to pin
      // Top of carousel should be at or above the top of viewport, and bottom should be at or below the bottom
      const isActive = containerRect.top >= 0 && containerRect.bottom <= windowHeight;
      
      if (isActive !== isInCarouselMode) {
        isInCarouselMode = isActive;
        setIsPinned(isActive);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Carousel must be fully visible (100%) to pin
      // Top of carousel should be at or above the top of viewport, and bottom should be at or below the bottom
      const isActive = containerRect.top >= 0 && containerRect.bottom <= windowHeight;
      
      if (!isActive || images.length <= 1) {
        return;
      }
      
      // Only pin if not already pinned
      if (!isPinned && isActive) {
        setIsPinned(true);
        return; // Don't handle scroll on the first pin
      }
      
      // Only intercept scroll if carousel is pinned
      if (!isPinned) {
        return; // Allow normal page scrolling
      }
      
      const now = Date.now();
      const deltaY = e.deltaY;
      const deltaX = e.deltaX;
      
      // Reset accumulator if too much time has passed - shorter window to prevent double slides
      if (now - lastScrollTimeRef.current > 200) {
        scrollAccumulatorRef.current = { x: 0, y: 0 };
      }
      lastScrollTimeRef.current = now;
      
      // Normalize scroll values - less aggressive normalization
      const normalizedDeltaX = Math.abs(deltaX) > 100 ? Math.sign(deltaX) * 100 : deltaX;
      const normalizedDeltaY = Math.abs(deltaY) > 100 ? Math.sign(deltaY) * 100 : deltaY;
      
      // Accumulate scroll values
      scrollAccumulatorRef.current.x += normalizedDeltaX;
      scrollAccumulatorRef.current.y += normalizedDeltaY;
      
      // Balanced thresholds - prevent double slides
      const isAtBoundary = currentSlideRef.current === 0 || currentSlideRef.current === images.length - 1;
      const horizontalThreshold = isAtBoundary ? 150 : 300; // Higher boundary threshold
      const verticalThreshold = isAtBoundary ? 200 : 300;   // Balanced thresholds
      
      // Debug logging
      console.log('Wheel event:', { 
        deltaX, deltaY, 
        normalizedDeltaX, normalizedDeltaY,
        accumulatedX: scrollAccumulatorRef.current.x,
        accumulatedY: scrollAccumulatorRef.current.y,
        isActive, isPinned: isPinned 
      });
      
      // Check if we've accumulated enough scroll for navigation
      const hasHorizontalScroll = Math.abs(scrollAccumulatorRef.current.x) >= horizontalThreshold;
      const hasVerticalScroll = Math.abs(scrollAccumulatorRef.current.y) >= verticalThreshold;
      
      if (hasHorizontalScroll || hasVerticalScroll) {
        // Determine the primary scroll direction based on accumulated values
        const isHorizontalScroll = Math.abs(scrollAccumulatorRef.current.x) > Math.abs(scrollAccumulatorRef.current.y);
        const accumulatedDelta = isHorizontalScroll ? scrollAccumulatorRef.current.x : scrollAccumulatorRef.current.y;
        
        console.log('Scroll threshold reached:', { 
          isHorizontalScroll, 
          accumulatedDelta, 
          currentSlide: currentSlideRef.current 
        });
        
        // Reset the accumulator for the direction we're using
        if (isHorizontalScroll) {
          scrollAccumulatorRef.current.x = 0;
        } else {
          scrollAccumulatorRef.current.y = 0;
        }
        
        if (accumulatedDelta > 0 && currentSlideRef.current < images.length - 1) {
          // Scroll right/down - go to next slide
          const newSlide = currentSlideRef.current + 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
          console.log('Moving to next slide:', newSlide);
          e.preventDefault();
        } else if (accumulatedDelta < 0 && currentSlideRef.current > 0) {
          // Scroll left/up - go to previous slide
          const newSlide = currentSlideRef.current - 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
          console.log('Moving to previous slide:', newSlide);
          e.preventDefault();
        } else if (accumulatedDelta > 0 && currentSlideRef.current === images.length - 1) {
          // At last slide, trying to go further - unpin immediately
          console.log('Unpinning at last slide');
          setIsPinned(false);
          // Don't prevent default - allow the scroll to continue naturally
        } else if (accumulatedDelta < 0 && currentSlideRef.current === 0) {
          // At first slide, trying to go further - unpin immediately
          console.log('Unpinning at first slide');
          setIsPinned(false);
          // Don't prevent default - allow the scroll to continue naturally
        }
      } else {
        // Check for unpinning at boundaries with a small threshold
        const isHorizontalScroll = Math.abs(scrollAccumulatorRef.current.x) > Math.abs(scrollAccumulatorRef.current.y);
        const accumulatedDelta = isHorizontalScroll ? scrollAccumulatorRef.current.x : scrollAccumulatorRef.current.y;
        
        // Small threshold for unpinning at boundaries (prevents accidental unpinning)
        const unpinThreshold = 50; // Small threshold to prevent accidental unpinning
        
        if (accumulatedDelta > unpinThreshold && currentSlideRef.current === images.length - 1) {
          console.log('Unpinning at last slide');
          setIsPinned(false);
          // Don't prevent default - allow the scroll to continue naturally
          return;
        } else if (accumulatedDelta < -unpinThreshold && currentSlideRef.current === 0) {
          console.log('Unpinning at first slide');
          setIsPinned(false);
          // Don't prevent default - allow the scroll to continue naturally
          return;
        }
        
        // Still accumulating, prevent default for all scroll events while pinned
        e.preventDefault();
      }
    };

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    // Keyboard support for arrow keys
    const handleKeyDown = (e: KeyboardEvent) => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Carousel must be fully visible (100%) to pin
      // Top of carousel should be at or above the top of viewport, and bottom should be at or below the bottom
      const isActive = containerRect.top >= 0 && containerRect.bottom <= windowHeight;
      
      if (!isActive || images.length <= 1) {
        return;
      }
      
      // Only pin if not already pinned
      if (!isPinned && isActive) {
        setIsPinned(true);
        return; // Don't handle keys on the first pin
      }
      
      // Only intercept keys if carousel is pinned
      if (!isPinned) {
        return; // Allow normal page scrolling
      }
      
      console.log('Key pressed:', e.key, 'isActive:', isActive, 'isPinned:', isPinned);
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentSlideRef.current < images.length - 1) {
          const newSlide = currentSlideRef.current + 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
          console.log('Moving to next slide:', newSlide);
          e.preventDefault();
        } else {
          console.log('Unpinning at last slide');
          setIsPinned(false);
          // Don't prevent default - allow normal page behavior
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentSlideRef.current > 0) {
          const newSlide = currentSlideRef.current - 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
          console.log('Moving to previous slide:', newSlide);
          e.preventDefault();
        } else {
          console.log('Unpinning at first slide');
          setIsPinned(false);
          // Don't prevent default - allow normal page behavior
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Carousel must be fully visible (100%) to pin
      // Top of carousel should be at or above the top of viewport, and bottom should be at or below the bottom
      const isActive = containerRect.top >= 0 && containerRect.bottom <= windowHeight;
      
      if (!isActive || images.length <= 1) {
        return;
      }
      
      if (!isPinned && isActive) {
        setIsPinned(true);
      }
      
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent default scrolling
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Carousel must be fully visible (100%) to pin
      // Top of carousel should be at or above the top of viewport, and bottom should be at or below the bottom
      const isActive = containerRect.top >= 0 && containerRect.bottom <= windowHeight;
      
      if (!isActive || images.length <= 1) {
        return;
      }
      
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const minSwipeDistance = 50;
      
      // Determine if it's a horizontal or vertical swipe
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        // Horizontal swipe
        if (deltaX > 0 && currentSlideRef.current > 0) {
          // Swipe right - go to previous slide
          const newSlide = currentSlideRef.current - 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
        } else if (deltaX < 0 && currentSlideRef.current < images.length - 1) {
          // Swipe left - go to next slide
          const newSlide = currentSlideRef.current + 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
        }
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minSwipeDistance) {
        // Vertical swipe
        if (deltaY > 0 && currentSlideRef.current < images.length - 1) {
          // Swipe down - go to next slide
          const newSlide = currentSlideRef.current + 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
        } else if (deltaY < 0 && currentSlideRef.current > 0) {
          // Swipe up - go to previous slide
          const newSlide = currentSlideRef.current - 1;
          setCurrentSlide(newSlide);
          currentSlideRef.current = newSlide;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    
    // Add touch event listeners
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [images.length, currentSlide, isPinned]);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div 
        ref={containerRef}
        className="relative w-full h-[600px] rounded-xl overflow-hidden"
        style={{
          position: isPinned ? 'sticky' : 'relative',
          top: isPinned ? '0' : 'auto',
          zIndex: isPinned ? 10 : 'auto'
        }}
      >

        

        
        {/* 3D Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((imageSrc, imageIndex) => {
              const isActive = imageIndex === currentSlide;
              const isNext = imageIndex === (currentSlide + 1) % images.length;
              const isPrev = imageIndex === (currentSlide - 1 + images.length) % images.length;
              const isNextNext = imageIndex === (currentSlide + 2) % images.length;
              const isPrevPrev = imageIndex === (currentSlide - 2 + images.length) % images.length;
              
              let transform = '';
              let opacity = 0;
              let zIndex = 0;
              
              if (isActive) {
                transform = 'translateZ(0px) scale(1) rotateY(0deg)';
                opacity = 1;
                zIndex = 10;
              } else if (isNext) {
                transform = 'translateZ(-300px) translateX(50%) scale(0.85) rotateY(-20deg)';
                opacity = 0.8;
                zIndex = 5;
              } else if (isPrev) {
                transform = 'translateZ(-300px) translateX(-50%) scale(0.85) rotateY(20deg)';
                opacity = 0.8;
                zIndex = 5;
              } else if (isNextNext) {
                transform = 'translateZ(-600px) translateX(100%) scale(0.7) rotateY(-30deg)';
                opacity = 0.4;
                zIndex = 2;
              } else if (isPrevPrev) {
                transform = 'translateZ(-600px) translateX(-100%) scale(0.7) rotateY(30deg)';
                opacity = 0.4;
                zIndex = 2;
              } else {
                transform = 'translateZ(-900px) scale(0.5) rotateY(0deg)';
                opacity = 0.2;
                zIndex = 1;
              }

              return (
                <div
                  key={imageIndex}
                  className="absolute w-full h-full transition-all duration-800 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="w-full max-w-4xl">
                      <div className="text-center mb-4">
                        <p className="text-white/60 text-sm">Click image to zoom</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div
                          className="aspect-[4/3] bg-black/20 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center justify-center max-w-3xl"
                          onClick={() => openLightbox(imageSrc)}
                        >
                          <img 
                            src={imageSrc} 
                            alt={`Image ${imageIndex + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation - only show for multiple images */}
        {images.length > 1 && (
          <>
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === images.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-sm"
            >
              Close
            </button>
            <img 
              src={lightboxImage} 
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
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
                  <a href="https://www.airframe.ai/" target="_blank" rel="noopener noreferrer">
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
                <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-end">
                  <div
                    className="w-full lg:w-60 h-60 bg-cover bg-center rounded-lg flex-shrink-0"
                    style={{ backgroundImage: `url(/images/airframe/thumbnail.png)` }}
                  />
                  <div className="flex-1 pb-3 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                                              <motion.div
                          className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                            <p className="block leading-[22px] whitespace-pre">6 months</p>
                          </div>
                        </motion.div>
                        <motion.div
                          className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                            <p className="block leading-[22px] whitespace-pre">$4M funding</p>
                          </div>
                        </motion.div>
                        <motion.div
                          className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
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
            <div className="p-7">
              <div className="flex flex-col sm:flex-row gap-5">
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
            </div>

            {/* Separator */}
            <div className="p-7">
              <div className="w-full h-px bg-[#252525] mb-6"></div>
            </div>

            {/* About Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-20">
              <h2 className="text-2xl font-bold mb-3">About Airframe</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Airframe is a B2B platform that helps software procurement professionals quickly find suitable
                products and suppliers, integrating market research, expert advice, user reviews, case studies,
                and procurement process tools.
              </p>
            </div>

            {/* Background & Challenges */}
            <div className="px-6 md:px-12 lg:px-24 mb-20">
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
            <div className="text-center px-6 md:px-12 lg:px-24 mb-20">
              <div className="text-gray-400 text-xl mb-2">GOAL</div>
              <h2 className="text-3xl font-semibold leading-relaxed">
                Buyer-first process for fast,<br />
                confident decisions across teams
              </h2>
            </div>

            {/* Platform Overview */}
            <div className="bg-[#64a1a5] p-10 mb-20 overflow-hidden">
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
            <div className="px-6 md:px-12 lg:px-24 mb-20">
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
            <div className="px-6 md:px-12 lg:px-24 mb-20">
              <div className="grid grid-cols-3 gap-16">
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

            {/* Solution */}
            <div className="text-center px-6 md:px-12 lg:px-24 mb-20">
              <div className="text-gray-400 text-xl mb-2">Solution</div>
              <h2 className="text-3xl font-semibold leading-relaxed">
                One platform for research, communication, and decisions.
              </h2>
            </div>

            <Separator className="mb-20" />

            {/* HMW #1 */}
            <div className="bg-[#1a1a1a] p-16 mb-16">
              <div className="flex gap-16 items-center justify-center">
                
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
                <div className="w-[417px] h-80 rounded overflow-hidden">
                  <img 
                    src="/images/airframe/HMW1.png" 
                    alt="HMW1 - Collaborative RFP Tool" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Carousel 1 */}
            <div className="text-center mb-16">
              <Carousel3D
                images={airframeImages.carousel1}
              />
            </div>

            {/* HMW #2 */}
            <div className="bg-[#1a1a1a] p-16 mb-16">
              <div className="flex gap-16 items-center justify-center">
                
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
                <div className="w-[417px] h-80 rounded overflow-hidden">
                  <img 
                    src="/images/airframe/HMW2.png" 
                    alt="HMW2 - Market Guides and Vendor Evaluation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Carousel 2 */}
            <div className="text-center mb-16">
              <Carousel3D
                images={airframeImages.carousel2}
              />
            </div>

            {/* HMW #3 */}
            <div className="bg-[#1a1a1a] p-16 mb-16">
              <div className="flex gap-16 items-center justify-center">
                
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
                <div className="w-[417px] h-80 rounded overflow-hidden">
                  <img 
                    src="/images/airframe/HMW3.png" 
                    alt="HMW3 - Trusted Advice Network" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Carousel 3 */}
            <div className="text-center mb-20">
              <Carousel3D
                images={airframeImages.carousel3}
              />
            </div>

            {/* AI Assistant */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center px-6 md:px-12 lg:px-24 mb-20">
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
            <div className="text-center mb-20">
              <Carousel3D
                images={airframeImages.carousel4}
              />
            </div>

            {/* Impact */}
            <div className="px-6 md:px-12 lg:px-24 mb-20">
              <div className="text-center mb-16">
                <div className="text-gray-400 text-xl mb-2">Impact</div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="bg-[#282727] p-4 text-center rounded-lg">
                  <p className="text-3xl font-semibold">
                    <span className="text-[#e6ff02]">Confident</span> decisions,<br />
                    even with limited data.
                  </p>
                </div>
                <div className="bg-[#282727] p-4 text-center rounded-lg">
                  <p className="text-3xl font-semibold">
                    <span className="text-[#e6ff02]">$4 million</span> secured in the<br />
                    seed funding round
                  </p>
                </div>
              </div>
            </div>

            <Separator className="mb-20" />

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