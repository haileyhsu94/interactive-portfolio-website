"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import svgPaths from "../../../imports/svg-09p2j473t4";

// Image paths - replace with your actual images
const imgHeroImage = "/images/hero-image.png"; // Featured project hero image
const imgImage = "/images/project-1.png";      // Project 1 image
const imgImage1 = "/images/project-2.png";     // Project 2 image  
const imgImage2 = "/images/project-3.jpg";     // Project 3 image
const imgAvatar = "/images/avatar.png";        // Your profile picture
const imgImage3 = "/images/project-4.png";     // Project 4 image (if you add this later)
const imgAudioPlayer = "/images/airframe-audio.png"; // Special Airframe image for audio player

interface NavigationState {
  activeSection: 'overview' | 'process' | 'results';
}

interface MediaPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentProjectIndex: number;
}

// Sidebar Component
function Sidebar({ navigation, onNavigateToSection }: { 
  navigation: NavigationState; 
  onNavigateToSection: (section: 'overview' | 'process' | 'results') => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0">
        <motion.div
          className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center relative shrink-0 size-9 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/images/logo.png" 
            alt="Hailey Hsu Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[132px]">
          <div className="font-[.Didact_Gothic,_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[17px] w-full">
            <p className="block leading-[normal]">Hailey Hsu</p>
          </div>
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal relative shrink-0 text-[17px] text-gray-400 w-full">
            <p className="block leading-[normal]">Product Designer</p>
          </div>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
        <motion.button
          className={`box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px] ${
            navigation.activeSection === 'overview' ? 'bg-[#1f1f1f]' : ''
          }`}
          onClick={() => onNavigateToSection('overview')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative shrink-0 size-5">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Frame">
                <path
                  d={svgPaths.pda9d200}
                  id="Vector"
                  stroke={navigation.activeSection === 'overview' ? "#E6FF02" : "#D1D5DB"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div className={`font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-nowrap ${
            navigation.activeSection === 'overview' ? 'text-[#e6ff02]' : 'text-gray-300'
          }`}>
            <p className="block leading-[normal] whitespace-pre">Overview</p>
          </div>
        </motion.button>

        <motion.button
          className={`box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px] ${
            navigation.activeSection === 'process' ? 'bg-[#1f1f1f]' : ''
          }`}
          onClick={() => onNavigateToSection('process')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative shrink-0 size-5">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Frame">
                <path
                  d={svgPaths.pda9d200}
                  id="Vector"
                  stroke={navigation.activeSection === 'process' ? "#E6FF02" : "#D1D5DB"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div className={`font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-nowrap ${
            navigation.activeSection === 'process' ? 'text-[#e6ff02]' : 'text-gray-300'
          }`}>
            <p className="block leading-[normal] whitespace-pre">Process</p>
          </div>
        </motion.button>

        <motion.button
          className={`box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px] ${
            navigation.activeSection === 'results' ? 'bg-[#1f1f1f]' : ''
          }`}
          onClick={() => onNavigateToSection('results')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative shrink-0 size-5">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Frame">
                <path
                  d={svgPaths.pda9d200}
                  id="Vector"
                  stroke={navigation.activeSection === 'results' ? "#E6FF02" : "#D1D5DB"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div className={`font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-nowrap ${
            navigation.activeSection === 'results' ? 'text-[#e6ff02]' : 'text-gray-300'
          }`}>
            <p className="block leading-[normal] whitespace-pre">Results</p>
          </div>
        </motion.button>
      </div>

      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
        <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left">
          <p className="block leading-[normal]">Follow me</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <motion.a
            href="https://linkedin.com/in/yu-hsuan-hsu"
            target="_blank"
            rel="noopener noreferrer"
            className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 hover:bg-white/5 rounded-lg px-2 py-1 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative shrink-0 size-5" data-name="Frame">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Frame">
                  <path
                    d={svgPaths.p1bcdee00}
                    id="Vector"
                    stroke="var(--stroke-0, #D1D5DB)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M5 7.5H1.66667V17.5H5V7.5Z"
                    id="Vector_2"
                    stroke="var(--stroke-0, #D1D5DB)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                  <path
                    d={svgPaths.p25677470}
                    id="Vector_3"
                    stroke="var(--stroke-0, #D1D5DB)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                </g>
              </svg>
            </div>
          </motion.a>
          <motion.a
            href="https://medium.com/@haileyhsu."
            target="_blank"
            rel="noopener noreferrer"
            className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 hover:bg-white/5 rounded-lg px-2 py-1 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-4 relative shrink-0 w-[104px]" data-name="medium_logo.svg">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 16">
                <g clipPath="url(#clip0_3_533)" id="medium_logo.svg">
                  <path d={svgPaths.p20834100} fill="var(--fill-0, #D1D5DB)" id="Vector" />
                  <path d={svgPaths.p1e573e00} fill="var(--fill-0, #D1D5DB)" id="Vector_2" />
                  <path d={svgPaths.p2f962600} fill="var(--fill-0, #D1D5DB)" id="Vector_3" />
                  <path d={svgPaths.p80d3780} fill="var(--fill-0, #D1D5DB)" id="Vector_4" />
                </g>
                <defs>
                  <clipPath id="clip0_3_533">
                    <rect fill="white" height="16" width="104" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

// MediaPlayer Component (same as main page)
const MediaPlayer = forwardRef<{ playAirframeAudio: () => void }>((props, ref) => {
  const [mediaState, setMediaState] = useState<MediaPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 574, // 9:34 in seconds
    currentProjectIndex: 0
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  // Expose play function for external use
  const playAirframeAudio = () => {
    if (audioRef.current) {
      // Set to Airframe project (index 0)
      setMediaState(prev => ({ ...prev, currentProjectIndex: 0, currentTime: 0 }));
      // Play the audio
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  // Expose the play function via ref
  useImperativeHandle(ref, () => ({
    playAirframeAudio
  }));

  // Project data for the audio player
  const projects = [
    {
      title: "AI-powered B2B Procurement Platform",
      subtitle: "Airframe",
      image: imgAudioPlayer, // Special Airframe image
      audio: "/audio/airframe-audio.mp3"
    },
    {
      title: "Customizable Reservation Platform", 
      subtitle: "Eatsy",
      image: imgImage,
      audio: "/audio/reservation-audio.mp3"
    },
    {
      title: "AI-Powered SAT Preparation Platform",
      subtitle: "BrainBox",
      image: imgImage1,
      audio: "/audio/sat-audio.mp3"
    },
    {
      title: "Dual-Interface Platform to Reduce Food Waste",
      subtitle: "Shelf Life",
      image: imgImage2,
      audio: "/audio/food-waste-audio.mp3"
    }
  ];

  const currentProject = projects[mediaState.currentProjectIndex];

  // Update audio source when project changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentProject.audio;
      audioRef.current.load();
      setMediaState(prev => ({ ...prev, currentTime: 0, isPlaying: false }));
    }
  }, [currentProject.audio]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setMediaState(prev => ({
        ...prev,
        currentTime: audio.currentTime,
        duration: audio.duration || prev.duration
      }));
    };

    const handlePlay = () => {
      setMediaState(prev => ({ ...prev, isPlaying: true }));
    };

    const handlePause = () => {
      setMediaState(prev => ({ ...prev, isPlaying: false }));
    };

    const handleEnded = () => {
      setMediaState(prev => ({ ...prev, isPlaying: false, currentTime: 0 }));
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Animation effect for wave movement
  const [animationFrame, setAnimationFrame] = useState(0);
  
  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      setAnimationFrame(prev => prev + 1);
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (mediaState.isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const skipPrevious = () => {
    setMediaState(prev => ({ 
      ...prev, 
      currentTime: 0,
      currentProjectIndex: prev.currentProjectIndex > 0 ? prev.currentProjectIndex - 1 : projects.length - 1
    }));
  };

  const skipNext = () => {
    setMediaState(prev => ({ 
      ...prev, 
      currentTime: prev.duration,
      currentProjectIndex: (prev.currentProjectIndex + 1) % projects.length
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-neutral-950 relative shrink-0 w-full" data-name="play section">
      <audio ref={audioRef} preload="metadata" />
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-4 pt-0 px-4 relative w-full">
          <div
            className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start px-3 py-0 relative shrink-0 w-[299px]"
            data-name="detail"
          >
            <div
              className="bg-center bg-cover bg-no-repeat rounded-lg shrink-0 size-[60px]"
              data-name="image"
              style={{ backgroundImage: `url('${currentProject.image}')` }}
            />
            <div
              className="box-border content-stretch flex flex-col font-[.Didact_Gothic,_sans-serif] font-normal items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
              data-name="title"
            >
              <div className="relative shrink-0 text-[#ffffff] text-[17px] text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{currentProject.title}</p>
              </div>
              <div className="min-w-full relative shrink-0 text-[13px] text-gray-300" style={{ width: "min-content" }}>
                <p className="block leading-[18px]">{currentProject.subtitle}</p>
              </div>
            </div>
          </div>

          <div
            className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-[400px]"
            data-name="controller"
          >
            <div
              className="box-border content-stretch flex flex-row gap-10 items-center justify-start p-0 relative shrink-0"
              data-name="container"
            >
              <motion.button
                onClick={skipPrevious}
                className="relative shrink-0 size-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Frame">
                    <path d={svgPaths.pd585d00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
                    <path
                      d="M2 13.3333V2.66667"
                      id="Vector_2"
                      stroke="var(--stroke-0, #D1D5DB)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    />
                  </g>
                </svg>
              </motion.button>

              <motion.button
                onClick={togglePlayPause}
                className="h-[25px] relative shrink-0 w-[24px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mediaState.isPlaying ? (
                  // Pause button
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="24" height="24" rx="12" fill="white"/>
                    <path d="M15 8H13.5C13.2239 8 13 8.22386 13 8.5V16.5C13 16.7761 13.2239 17 13.5 17H15C15.2761 17 15.5 16.7761 15.5 16.5V8.5C15.5 8.22386 15.2761 8 15 8Z" fill="#0A0A0A"/>
                    <path d="M10.5 8H9C8.72386 8 8.5 8.22386 8.5 8.5V16.5C8.5 16.7761 8.72386 17 9 17H10.5C10.7761 17 11 16.7761 11 16.5V8.5C11 8.22386 10.7761 8 10.5 8Z" fill="#0A0A0A"/>
                  </svg>
                ) : (
                  // Play button
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="24" height="24" rx="12" fill="white"/>
                    <path d="M8 8.2225C7.99993 8.00746 8.0579 7.79621 8.16804 7.61008C8.27818 7.42395 8.4366 7.26953 8.6273 7.16242C8.81799 7.0553 9.03422 6.99928 9.25415 7.00001C9.47407 7.00074 9.6899 7.05819 9.87985 7.16657L17.3774 11.4428C17.5666 11.5502 17.7237 11.7042 17.833 11.8895C17.9422 12.0749 17.9998 12.285 18 12.4989C18.0002 12.7128 17.943 12.923 17.834 13.1085C17.7251 13.294 17.5683 13.4483 17.3793 13.5559L9.87985 17.8334C9.6899 17.9418 9.47407 17.9993 9.25415 18C9.03422 18.0007 8.81799 17.9447 8.6273 17.8376C8.4366 17.7305 8.27818 17.576 8.16804 17.3899C8.0579 17.2038 7.99993 16.9925 8 16.7775V8.2225Z" fill="#0A0A0A"/>
                  </svg>
                )}
              </motion.button>

              <motion.button
                onClick={skipNext}
                className="relative shrink-0 size-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Frame">
                    <path
                      d="M14 2.66667V13.3333"
                      id="Vector"
                      stroke="var(--stroke-0, #D1D5DB)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    />
                    <path d={svgPaths.p4abae80} fill="var(--fill-0, #D1D5DB)" id="Vector_2" />
                  </g>
                </svg>
              </motion.button>
            </div>

            <div
              className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
              data-name="progress"
            >
              <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{formatTime(mediaState.currentTime)}</p>
              </div>
              <div
                className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0 cursor-pointer"
                data-name="progress bar"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const progress = clickX / rect.width;
                  const newTime = progress * mediaState.duration;
                  setMediaState(prev => ({ ...prev, currentTime: Math.max(0, Math.min(newTime, prev.duration)) }));
                }}
              >
                <div className="h-[10px] relative shrink-0 w-[285px] overflow-hidden">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 10">
                    <g clipPath="url(#clip0_239_2750)">
                      {(() => {
                        const progress = mediaState.currentTime / mediaState.duration;
                        const totalBars = 143; // Total number of bars in the wave pattern
                        const playedBars = Math.floor(progress * totalBars);
                        
                        // Wave pattern heights (repeating pattern)
                        const wavePattern = [3, 2, 1, 0, 0, 1, 2, 3, 3, 3, 2, 1, 0, 0, 1, 1, 1, 2, 2, 3, 4, 3, 3, 2, 1, 0, 0, 1, 0, 2, 3, 3, 3, 2, 1, 0, 0, 1, 1, 1, 2, 2, 3, 4, 3, 3, 2, 1, 0, 0, 1, 0, 1, 2, 3, 2, 3, 3, 2, 1, 0, 0, 1, 1, 1, 2, 2, 3, 4, 3, 3, 2, 1, 0, 0, 1, 0, 1, 2, 3, 2, 3, 3, 2, 1, 0, 0, 1, 0, 2, 3, 3];
                        
                        return Array.from({ length: totalBars }, (_, i) => {
                          const x = i * 2 + 0.5;
                          const baseHeight = wavePattern[i % wavePattern.length];
                          
                          // Add subtle animation offset based on position
                          const animationOffset = Math.sin((animationFrame * 0.05) + (i * 0.1)) * 0.3;
                          const animatedHeight = Math.max(0, Math.min(4, baseHeight + animationOffset));
                          
                          const y1 = animatedHeight + 0.5;
                          const y2 = 9.5 - animatedHeight;
                          const strokeColor = i < playedBars ? "#F4915C" : "#E6FF02B3"; // Orange if played, Yellow if not (70% opacity)
                          
                          return (
                            <path 
                              key={i}
                              d={`M${x} ${y1}V${y2}`} 
                              stroke={strokeColor}
                              style={{
                                transition: 'all 0.1s ease-out',
                                transformOrigin: 'center'
                              }}
                            />
                          );
                        });
                      })()}
                    </g>
                    <defs>
                      <clipPath id="clip0_239_2750">
                        <rect width="285" height="10" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{formatTime(mediaState.duration)}</p>
              </div>
            </div>
          </div>

          <div
            className="box-border content-stretch flex flex-col gap-2.5 items-end justify-center px-5 py-0 relative shrink-0 w-[299px]"
            data-name="action"
          >
            <motion.button
              className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end px-4 py-2 relative rounded-[999px] shrink-0 border border-[#e6ff02] border-solid hover:bg-[#e6ff02]/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toast.info("Opening project details...")}
            >
              <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[17px] text-left text-nowrap">
                <p className="block leading-[22px] whitespace-pre">Open Project</p>
              </div>
              <div className="relative shrink-0 size-[18px]" data-name="icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <g id="icon">
                    <path
                      d="M11.25 2.25H15.75V6.75"
                      id="Vector"
                      stroke="var(--stroke-0, #E6FF02)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M7.5 10.5L15.75 2.25"
                      id="Vector_2"
                      stroke="var(--stroke-0, #E6FF02)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    />
                    <path
                      d={svgPaths.p7686680}
                      id="Vector_3"
                      stroke="var(--stroke-0, #E6FF02)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    />
                  </g>
                </svg>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
});

MediaPlayer.displayName = 'MediaPlayer';

export default function BrainBoxProject() {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'overview' });
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void }>(null);

  // Handle navigation to section
  const handleNavigateToSection = (section: 'overview' | 'process' | 'results') => {
    setNavigation({ activeSection: section });
  };

  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full h-screen overflow-hidden"
      data-name="home"
    >
      <div className="flex-1 bg-neutral-950 min-w-px relative shrink-0 w-full overflow-hidden" data-name="top">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-stretch justify-start p-[12px] relative h-full">
            <div className="w-[200px] flex-shrink-0 h-full">
              <Sidebar navigation={navigation} onNavigateToSection={handleNavigateToSection} />
            </div>
            
            <div className="bg-[#121212] h-full relative rounded-xl flex-1 min-w-0 overflow-hidden" data-name="middle">
              <div className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start overflow-x-clip overflow-y-auto px-4 py-4 relative w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {/* Project content will go here */}
                <div className="text-white text-2xl font-bold">
                  BrainBox Project - {navigation.activeSection}
                </div>
                <div className="text-gray-300">
                  Content for {navigation.activeSection} section will be added here.
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
              />
            </div>

            <div className="w-[310px] flex-shrink-0 h-full">
              <div
                className="bg-[#121212] box-border content-stretch flex flex-col gap-6 h-full items-start justify-start px-4 py-4 relative rounded-xl w-full overflow-hidden"
                data-name="about"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
                />
                <div className="font-[.Didact_Gothic,_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-left text-nowrap">
                  <p className="block leading-[normal] whitespace-pre">About Hailey</p>
                </div>
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                    <div
                      className="bg-center bg-cover bg-no-repeat rounded-[999px] shrink-0 size-[61px]"
                      data-name="avatar"
                      style={{ backgroundImage: `url('${imgAvatar}')` }}
                    />
                    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                      <div className="font-[.Didact_Gothic,_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
                        <p className="block leading-[normal]">Hailey Hsu</p>
                      </div>
                      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left w-full">
                        <p className="block leading-[normal]">Product Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-gray-300 text-left">
                    <p className="block leading-[22px]">Passionate about creating user-centered digital experiences that solve real problems.</p>
                  </div>
                </div>

                <div className="relative shrink-0 w-full" data-name="location">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
                      <div className="relative shrink-0 size-4" data-name="Frame">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="Frame">
                            <path
                              d={svgPaths.p6bc0c00}
                              id="Vector"
                              stroke="var(--stroke-0, #D1D5DB)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.2"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left">
                        <p className="block leading-[normal] whitespace-pre">New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative shrink-0 w-full" data-name="tags">
                  <div className="relative size-full">
                    <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start px-1 py-0 relative w-full">
                      {['Design Systems', 'User Research', 'Prototyping', 'A/B Testing', 'Data Viz'].map((tag) => (
                        <motion.div
                          key={tag}
                          className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
                            <p className="block leading-[22px] whitespace-pre">{tag}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                  data-name="buttons"
                >
                  <motion.button
                    className="bg-[#e6ff02] relative rounded-[999px] shrink-0 w-full hover:bg-[#d9f00c] transition-colors duration-200"
                    data-name="contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/'}
                  >
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
                        <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-neutral-950 text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">Back to Home</p>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                  <motion.a
                    href="https://linkedin.com/in/yu-hsuan-hsu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-[999px] shrink-0 w-full border border-gray-600 border-solid hover:bg-white/5 transition-colors duration-200"
                    data-name="linkedin"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
                        <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">LinkedIn</p>
                        </div>
                        <div className="relative shrink-0 size-[18px]" data-name="logo">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g id="logo">
                              <path
                                d={svgPaths.p204bd7c0}
                                id="Vector"
                                stroke="var(--stroke-0, white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d={svgPaths.pad25e80}
                                id="Vector_2"
                                stroke="var(--stroke-0, white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d={svgPaths.p127a4d00}
                                id="Vector_3"
                                stroke="var(--stroke-0, white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0 bg-neutral-950 w-full" style={{ height: '74px' }}>
        <MediaPlayer ref={mediaPlayerRef} />
      </div>
    </div>
  );
} 