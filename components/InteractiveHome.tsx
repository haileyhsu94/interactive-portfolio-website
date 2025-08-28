"use client";

import { useState, useRef, useEffect, useImperativeHandle, forwardRef, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "../imports/svg-09p2j473t4";
import { toast } from "sonner";
import WaveformCanvas from "./ui/WaveformCanvas";
import { generateRealisticWaveform, chunkWaveformData } from "../utils/audioUtils";
import MobileHome from './MobileHome';
import MobileAbout from './MobileAbout';
import MobileMenu from './MobileMenu';

// Image paths - replace with your actual images
// Add your images to the public/images/ folder and update these paths
const imgHeroImage = "/images/hero-image.png"; // Featured project hero image
const imgImage = "/images/project-1.png";      // Project 1 image
const imgImage1 = "/images/project-2.png";     // Project 2 image  
const imgImage2 = "/images/project-3.jpg";     // Project 3 image
const imgAvatar = "/images/avatar.png";        // Your profile picture
const imgImage3 = "/images/project-4.png";     // Project 4 image (if you add this later)
const imgAudioPlayer = "/images/airframe-audio.png"; // Special Airframe image for audio player

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

interface FormData {
  email: string;
  message: string;
}

interface MediaPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentProjectIndex: number;
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <motion.div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center relative shrink-0 size-9 cursor-pointer"
      data-name="logo"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="/images/logo.png" 
        alt="Hailey Hsu Logo" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

function NameAndTitle() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[132px]"
      data-name="name and title"
    >
      <div className="font-didact-gothic font-semibold relative shrink-0 text-[#ffffff] text-[17px] w-full">
        <p className="block leading-[normal]">Hailey Hsu</p>
      </div>
      <div className="font-didact-gothic font-normal relative shrink-0 text-[15px] text-gray-400 w-full">
        <p className="block leading-[normal]">Product Designer</p>
      </div>
    </div>
  );
}

function Header({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="header"
    >
      <Logo onClick={onLogoClick} />
      <NameAndTitle />
    </div>
  );
}

function NavigationItem({ 
  isActive, 
  onClick, 
  icon, 
  label
}: { 
  isActive: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string;
}) {
  const baseClasses = isActive 
    ? "bg-[#1f1f1f] box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px]"
    : "box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px]";

  return (
    <motion.button
      className={baseClasses}
      data-name="item"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <div className={`font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[15px] text-left text-nowrap ${
        isActive ? 'text-[#e6ff02]' : 'text-gray-300'
      }`}>
        <p className="block leading-[normal] whitespace-pre">{label}</p>
      </div>
    </motion.button>
  );
}

function Items({ 
  navigation, 
  onNavigateToSection 
}: { 
  navigation: NavigationState; 
  onNavigateToSection: (section: 'featured' | 'more' | 'contact') => void;
}) {
  const getFeaturedIcon = (isActive: boolean) => (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path
            d={svgPaths.pda9d200}
            id="Vector"
            stroke={isActive ? "var(--stroke-0, #E6FF02)" : "var(--stroke-0, #D1D5DB)"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );

  const getMoreIcon = (isActive: boolean) => (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path
            d={svgPaths.p1dfbdc00}
            id="Vector"
            stroke={isActive ? "var(--stroke-0, #E6FF02)" : "var(--stroke-0, #D1D5DB)"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );

  const getContactIcon = (isActive: boolean) => (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path
            d={svgPaths.p24d83580}
            id="Vector"
            stroke={isActive ? "var(--stroke-0, #E6FF02)" : "var(--stroke-0, #D1D5DB)"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.pd919a80}
            id="Vector_2"
            stroke={isActive ? "var(--stroke-0, #E6FF02)" : "var(--stroke-0, #D1D5DB)"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );

  return (
    <div
      className="box-border content-stretch cursor-pointer flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="items"
    >
      <NavigationItem
        isActive={navigation.activeSection === 'featured'}
        onClick={() => onNavigateToSection('featured')}
        icon={getFeaturedIcon(navigation.activeSection === 'featured')}
        label="Featured"
      />
      <NavigationItem
        isActive={navigation.activeSection === 'more'}
        onClick={() => onNavigateToSection('more')}
        icon={getMoreIcon(navigation.activeSection === 'more')}
        label="More Projects"
      />
      <NavigationItem
        isActive={navigation.activeSection === 'contact'}
        onClick={() => onNavigateToSection('contact')}
        icon={getContactIcon(navigation.activeSection === 'contact')}
        label="Contact"
      />
    </div>
  );
}

export function Sidebar({ 
  navigation, 
  onNavigateToSection,
  openProjects,
  currentProjectId,
  onCloseProject,
  onNavigateToProject,
  isProjectPage,
  onLogoClick
}: { 
  navigation: NavigationState; 
  onNavigateToSection: (section: 'featured' | 'more' | 'contact') => void;
  openProjects?: { id: string; title: string }[];
  currentProjectId?: string;
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  isProjectPage?: boolean;
  onLogoClick?: () => void;
}) {
  return (
    <div
      className="bg-[#121212] box-border content-stretch flex flex-col gap-6 h-full items-start justify-start px-4 py-4 relative rounded-xl w-full overflow-hidden"
      data-name="sidebar"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <Header onLogoClick={onLogoClick} />
      {!isProjectPage && <Items navigation={navigation} onNavigateToSection={onNavigateToSection} />}
      
      {/* Recent Section */}
      {openProjects && openProjects.length > 0 && (
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[#515151] text-[14px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Recent</p>
          </div>
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
                           {openProjects.map((project) => (
                 <div
                   key={project.id}
                   className={`box-border content-stretch flex gap-3 items-center justify-start px-3 py-2 relative rounded-[999px] shrink-0 w-[175px] cursor-pointer ${
                     currentProjectId === project.id ? 'bg-[#1f1f1f]' : 'hover:bg-[#1f1f1f]/50'
                   }`}
                   data-name="item"
                   onClick={() => {
                     if (onNavigateToProject && project.id) {
                       onNavigateToProject(project.id);
                     }
                   }}
                 >
                <div className="basis-0 font-didact-gothic font-medium grow leading-[1.2] min-h-px min-w-px not-italic overflow-hidden relative shrink-0 text-[14px] text-gray-300" style={{ 
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  <p className="block leading-[normal]">{project.title}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onCloseProject) {
                      onCloseProject(project.id);
                    }
                  }}
                  className="relative shrink-0 size-4 hover:bg-white/10 rounded transition-colors"
                  data-name="close-button"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="Frame">
                      <path
                        d="M12 4L4 12M4 4L12 12"
                        id="Vector"
                        stroke="var(--stroke-0, #D1D5DB)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InteractiveContactForm() {
  const [formData, setFormData] = useState<FormData>({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Formspree configuration - Free form backend service
      const formspreeEndpoint = 'https://formspree.io/f/xkgzevdg'; // Replace with your Formspree endpoint
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Form Submission'
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[12px] relative w-full">
      <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
        <p className="block leading-[normal]">Quick Messages</p>
      </div>
      <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-left w-full">
        <p className="block leading-[22px]">Your email</p>
      </div>
      <div className="bg-[#1f1f1f] relative rounded-xl shrink-0 w-full" data-name="input box">
        <div
          aria-hidden="true"
          className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-xl"
        />
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="basis-0 font-didact-gothic font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-gray-300 text-left bg-transparent border-none outline-none placeholder-gray-600"
            />
          </div>
        </div>
      </div>
      <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-left w-full">
        <p className="block leading-[22px]">Your message</p>
      </div>
      <div className="bg-[#1f1f1f] relative rounded-xl shrink-0 w-full" data-name="input box">
        <div
          aria-hidden="true"
          className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-xl"
        />
        <div className="flex flex-row items-start justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-center px-3 py-2 relative w-full h-[80px]">
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share your ideas..."
              rows={3}
              className="basis-0 font-didact-gothic font-normal grow min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-300 text-left bg-transparent border-none outline-none placeholder-gray-600 resize-none leading-relaxed"
            />
          </div>
        </div>
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#e6ff02] relative rounded-[999px] shrink-0 w-full"
        data-name="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
                          <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-neutral-950 text-nowrap">
                <p className="block leading-[22px] whitespace-pre">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </p>
              </div>
          </div>
        </div>
      </motion.button>
    </form>
  );
}

function FeaturedSection({ sectionRef, mediaPlayerRef, onNavigateToProject }: { sectionRef: RefObject<HTMLDivElement>; mediaPlayerRef: RefObject<{ playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; pauseAudio: () => void }>; onNavigateToProject?: (project: string) => void }) {
  return (
    <div
      ref={sectionRef}
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full scroll-mt-6"
      data-name="feature"
    >
      <div
        className="box-border content-stretch flex flex-row items-start justify-between leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
        data-name="title"
      >
        <div className="font-didact-gothic font-bold relative shrink-0 text-[#ffffff] text-[21px]">
          <p className="block leading-[normal] text-nowrap whitespace-pre">Featured Project</p>
        </div>
        <div className="font-didact-gothic font-normal relative shrink-0 text-[15px] text-gray-300">
          <p className="block leading-[22px] text-nowrap whitespace-pre">1 featured</p>
        </div>
      </div>
      
      <div
        className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative rounded-3xl shrink-0 w-full hover:bg-white/5 transition-colors duration-300 cursor-pointer"
        data-name="container"
        onClick={() => {
          console.log('Featured project clicked');
          if (onNavigateToProject) {
            onNavigateToProject('airframe');
          }
        }}
      >
        <div className="flex-1 min-w-0 relative" data-name="text" style={{ minWidth: '40%' }}>
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start px-4 py-3 relative w-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                <div
                  className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[12px] relative rounded-[99px] shrink-0"
                  data-name="icon"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[99px]"
                  />
                  <div className="relative shrink-0 size-8" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g id="Frame">
                        <path
                          d={svgPaths.p1886fec0}
                          id="Vector"
                          stroke="var(--stroke-0, white)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d={svgPaths.p24479680}
                          id="Vector_2"
                          stroke="var(--stroke-0, white)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d={svgPaths.p1876b860}
                          id="Vector_3"
                          stroke="var(--stroke-0, white)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d={svgPaths.p2a760800}
                          id="Vector_4"
                          stroke="var(--stroke-0, white)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d={svgPaths.p3c441300}
                          id="Vector_5"
                          stroke="var(--stroke-0, white)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                  <div
                    className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[20px] text-left w-full"
                    data-name="title"
                  >
                    <div className="font-didact-gothic font-bold relative shrink-0 text-[#ffffff] w-full">
                      <p className="block leading-[normal]">AI-powered B2B Procurement Platform</p>
                    </div>
                    <div className="font-didact-gothic font-medium relative shrink-0 text-[#f4915c] w-full">
                      <p className="block leading-[normal]">Projected to cut vendor sourcing time by 40%</p>
                    </div>
                  </div>
                  <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-left w-full">
                    <p className="block leading-[22px]">{`Delivered 250+ high-fidelity screens for buyer & vendor flows.`}</p>
                  </div>
                  <div
                    className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative shrink-0 w-full"
                    data-name="tags"
                  >
                    <motion.div
                      className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                        <p className="block leading-[22px] whitespace-pre">$4M funding</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                        <p className="block leading-[22px] whitespace-pre">AI Agent</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                <motion.button
                  className="basis-0 bg-[#e6ff02] grow min-h-px min-w-px relative rounded-[999px] shrink-0 hover:bg-[#d9f00c] transition-colors duration-200"
                  data-name="contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigateToProject) {
                      onNavigateToProject('airframe');
                    } else {
                      toast.info("Opening case study...");
                    }
                  }}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
                      <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-neutral-950 text-nowrap">
                        <p className="block leading-[22px] whitespace-pre text-[15px]">See Work</p>
                      </div>
                    </div>
                  </div>
                </motion.button>
                
                <motion.button
                  className="basis-0 grow min-h-px min-w-px relative rounded-[999px] shrink-0 border border-gray-600 border-solid hover:bg-white/5 transition-colors duration-200"
                  data-name="contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.info("Currently streaming your selected episode…");
                    if (mediaPlayerRef.current) {
                      mediaPlayerRef.current.playAirframeAudio();
                    }
                  }}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-2 relative w-full">
                      <div className="relative shrink-0 size-4" data-name="Frame">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="Frame">
                            <path
                              d={svgPaths.p6bc0c00}
                              id="Vector"
                              stroke="var(--stroke-0, white)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.2"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre text-[15px]">Listen</p>
                      </div>
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="bg-center bg-contain bg-no-repeat h-[338px] flex-shrink-0 w-[426px] max-w-[50%] rounded-tr-3xl rounded-br-3xl overflow-hidden"
          data-name="hero image"
          style={{ backgroundImage: `url('${imgHeroImage}')` }}
        />
      </div>
    </div>
  );
}

function MoreProjectsSection({ sectionRef, onNavigateToProject }: { sectionRef: RefObject<HTMLDivElement>; onNavigateToProject?: (project: string) => void }) {
  const projects = [
    { 
      id: "eatsy",
      title: "Customizable Reservation Platform", 
      description: "Reduced booking setup steps by 40% in prototype testing. Designed fully customizable workflows, giving small restaurants control over reservations and payments.",
      tags: ["Cost Reduction", "Prototype Testing"],
      image: imgImage 
    },
    { 
      id: "brainbox",
      title: "AI-Powered SAT Preparation Platform", 
      description: "Conducted heatmap analysis and A/B testing to refine practice setup flow and dashboard layout. Led 4 designers to deliver 200+ screens, integrating AI tutor and performance reports.",
      tags: ["Heatmap Analysis", "A/B Testing"],
      image: imgImage1 
    },
    { 
      id: "shelf-life",
      title: "Dual-Interface Platform to Reduce Food Waste", 
      description: "Expected to help restaurants clear surplus food faster by streamlining listing to under 2 minutes. Delivered mobile B2C app & tablet B2B dashboard with 50+ unique screens.",
      tags: ["Dual Interface", "Sustainability"],
      image: imgImage2 
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full scroll-mt-6"
      data-name="more"
    >
      <div
        className="box-border content-stretch flex flex-row items-start justify-between leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
        data-name="title"
      >
        <div className="font-didact-gothic font-bold relative shrink-0 text-[#ffffff] text-[20px]">
          <p className="block leading-[normal] text-nowrap whitespace-pre">More Projects</p>
        </div>
        <div className="font-didact-gothic font-normal relative shrink-0 text-[14px] text-gray-300">
          <p className="block leading-[22px] text-nowrap whitespace-pre">3 more</p>
        </div>
      </div>
      <div
        className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full"
        data-name="container"
      >
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="basis-0 grow min-h-px min-w-px relative shrink-0 hover:bg-white/5 rounded-xl transition-colors duration-300 cursor-pointer" 
            data-name="project"
            onClick={() => {
              console.log('Project clicked:', project.title);
              if (onNavigateToProject && project.id) {
                onNavigateToProject(project.id);
              } else {
                toast.info(`Opening ${project.title}...`);
              }
            }}
          >
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[12px] relative w-full">
                <div
                  className="bg-center bg-cover bg-no-repeat rounded-xl shrink-0 w-full"
                  style={{ 
                    backgroundImage: `url('${project.image}')`,
                    aspectRatio: '16/10'
                  }}
                  data-name="image"
                />
                <div
                  className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
                  data-name="title"
                >
                  <div className="font-didact-gothic font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
                    <p className="block leading-[normal]">{project.title}</p>
                  </div>
                </div>
                <div
                  className="font-didact-gothic font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
                  style={{ width: "min-content" }}
                >
                  <p className="block leading-[22px]">{project.description}</p>
                </div>
                <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full">
                  {project.tags.map((tag) => (
                    <motion.div
                      key={tag}
                      className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">{tag}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) {
  return (
    <div
      ref={sectionRef}
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-6 pt-0 px-0 relative shrink-0 w-full scroll-mt-6"
      data-name="contact"
    >
      <div className="bg-[#121212] relative rounded-xl shrink-0 w-full" data-name="container">
        <div
          aria-hidden="true"
          className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
        />
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start px-5 py-6 relative w-full">
            <div className="font-didact-gothic font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">Get in Touch</p>
            </div>
            <div
              className="font-didact-gothic font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
              style={{ width: "min-content" }}
            >
              <p className="block leading-[22px]">Let&apos;s discuss your next project or collaboration</p>
            </div>
            <div className="relative shrink-0 w-full" data-name="container">
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-1 py-0 relative w-full">
                  <div
                    className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                    data-name="container"
                  >
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="left">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
                      />
                      <div className="relative size-full">
                        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-[16px] relative size-full">
                          <div
                            className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                            data-name="top"
                          >
                                              <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
                              <p className="block leading-[normal]">Contact Information</p>
                            </div>
                            <div
                              className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
                              data-name="container"
                            >
                              <motion.a
                                href="mailto:haileyhsu94@gmail.com"
                                className="relative shrink-0 w-full hover:bg-white/5 rounded-lg transition-colors duration-200"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="flex flex-row items-center relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
                                    <div className="relative shrink-0 size-[18px]" data-name="Frame">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                        <g id="Frame">
                                          <path
                                            d={svgPaths.p18c721e0}
                                            id="Vector"
                                            stroke="var(--stroke-0, #E6FF02)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                          />
                                          <path
                                            d={svgPaths.p1b122e80}
                                            id="Vector_2"
                                            stroke="var(--stroke-0, #E6FF02)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                          />
                                        </g>
                                      </svg>
                                    </div>
                                                            <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                                      <p className="block leading-[normal] whitespace-pre">haileyhsu94@gmail.com</p>
                                    </div>
                                  </div>
                                </div>
                              </motion.a>
                              <motion.a
                                href="tel:+13478061403"
                                className="relative shrink-0 w-full hover:bg-white/5 rounded-lg transition-colors duration-200"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="flex flex-row items-center relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
                                    <div className="relative shrink-0 size-[18px]" data-name="Frame">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                        <g clipPath="url(#clip0_1_304)" id="Frame">
                                          <path
                                            d={svgPaths.p3302df00}
                                            id="Vector"
                                            stroke="var(--stroke-0, #E6FF02)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1_304">
                                            <rect fill="white" height="18" width="18" />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                                            <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                                      <p className="block leading-[normal] whitespace-pre">+1 (347) 806-1403</p>
                                    </div>
                                  </div>
                                </div>
                              </motion.a>
                              <div
                                className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative shrink-0"
                                data-name="location"
                              >
                                <div className="relative shrink-0 size-[18px]" data-name="Frame">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                    <g id="Frame">
                                      <path
                                        d={svgPaths.p625a980}
                                        id="Vector"
                                        stroke="var(--stroke-0, #E6FF02)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.2"
                                      />
                                      <path
                                        d={svgPaths.p18c84c80}
                                        id="Vector_2"
                                        stroke="var(--stroke-0, #E6FF02)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.2"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                                        <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                                  <p className="block leading-[normal] whitespace-pre">New York, NY</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                            data-name="bottom"
                          >
                            <div
                              className="font-didact-gothic font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left"
                              style={{ width: "min-content" }}
                            >
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M13.3333 6.66699C14.6593 6.66699 15.9311 7.19378 16.8688 8.13146C17.8065 9.06914 18.3333 10.3409 18.3333 11.667V17.5003H14.9999V11.667C14.9999 11.225 14.8243 10.801 14.5118 10.4885C14.1992 10.1759 13.7753 10.0003 13.3333 10.0003C12.8912 10.0003 12.4673 10.1759 12.1547 10.4885C11.8422 10.801 11.6666 11.225 11.6666 11.667V17.5003H8.33325V11.667C8.33325 10.3409 8.86004 9.06914 9.79772 8.13146C10.7354 7.19378 12.0072 6.66699 13.3333 6.66699Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M5.00008 7.5H1.66675V17.5H5.00008V7.5Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M3.33341 5.00033C4.25389 5.00033 5.00008 4.25413 5.00008 3.33366C5.00008 2.41318 4.25389 1.66699 3.33341 1.66699C2.41294 1.66699 1.66675 2.41318 1.66675 3.33366C1.66675 4.25413 2.41294 5.00033 3.33341 5.00033Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                              </motion.a>
                              <motion.a
                                href="https://medium.com/@haileyhsu."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 hover:bg-white/5 rounded-lg px-2 py-1 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                              >
                                <svg width="104" height="16" viewBox="0 0 104 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_3005_2287)">
                                    <path d="M15.7 8.08395C15.7 12.3793 12.2197 15.8615 7.92642 15.8615C3.63312 15.8615 0.153076 12.3803 0.153076 8.08395C0.153076 3.78756 3.63338 0.306641 7.92642 0.306641C12.2195 0.306641 15.7 3.78861 15.7 8.08395Z" fill="#D1D5DB"/>
                                    <path d="M24.2277 8.08388C24.2277 12.1274 22.4874 15.4051 20.3409 15.4051C18.1944 15.4051 16.4541 12.1264 16.4541 8.08388C16.4541 4.04138 18.1944 0.762695 20.3409 0.762695C22.4874 0.762695 24.2277 4.04138 24.2277 8.08388Z" fill="#D1D5DB"/>
                                    <path d="M27.7158 8.08389C27.7158 11.7067 27.1037 14.6434 26.3487 14.6434C25.5938 14.6434 24.9817 11.7057 24.9817 8.08389C24.9817 4.46212 25.5938 1.52441 26.349 1.52441C27.1042 1.52441 27.7158 4.46133 27.7158 8.08389Z" fill="#D1D5DB"/>
                                    <path d="M49.1695 0.981164L49.1911 0.976442V0.809885H44.7704L40.6655 10.3968L36.5607 0.809885H31.7967V0.976442L31.8181 0.981164C32.6251 1.16215 33.0347 1.43205 33.0347 2.40543V13.8008C33.0347 14.7742 32.6235 15.0441 31.8165 15.2251L31.7952 15.2298V15.3969H35.0273V15.2303L35.006 15.2256C34.199 15.0446 33.7894 14.7747 33.7894 13.8014V3.06641L39.0625 15.3969H39.3616L44.7883 2.72254V14.0828C44.7191 14.8516 44.3132 15.089 43.5825 15.2529L43.5609 15.2579V15.4231H49.1911V15.2579L49.1695 15.2529C48.4381 15.089 48.0223 14.8516 47.9532 14.0828L47.9495 2.40543H47.9532C47.9532 1.43205 48.3628 1.16215 49.1695 0.981164ZM51.7413 8.53002C51.8334 6.48254 52.5733 5.00477 53.8149 4.97933C54.1979 4.98562 54.5192 5.11048 54.7689 5.35074C55.2994 5.86248 55.5489 6.93185 55.5103 8.53002H51.7413ZM51.6856 9.10707H58.2845V9.07952C58.2658 7.51389 57.8094 6.29605 56.9294 5.45985C56.1686 4.73723 55.0423 4.33959 53.8593 4.33959H53.8329C53.2189 4.33959 52.4658 4.48752 51.93 4.75559C51.32 5.03625 50.782 5.45592 50.3344 6.00674C49.6137 6.89408 49.1772 8.09329 49.071 9.44097C49.0676 9.48136 49.0647 9.52175 49.0618 9.56215C49.0589 9.60254 49.0571 9.63874 49.0552 9.67729C49.0515 9.74943 49.0486 9.82182 49.047 9.89447C49.0444 10.0109 49.0436 10.1282 49.0457 10.2462C49.1172 13.2985 50.7765 15.7379 53.7236 15.7379C56.3104 15.7379 57.8168 13.8588 58.1924 11.3366L58.0026 11.2702C57.3427 12.6258 56.1576 13.4473 54.8087 13.3471C52.9673 13.2101 51.5567 11.3549 51.6848 9.10759M65.7456 13.2435C65.5292 13.7536 65.0775 14.0343 64.4723 14.0343C63.867 14.0343 63.3138 13.6214 62.9207 12.8713C62.4984 12.066 62.2761 10.9277 62.2761 9.5792C62.2761 6.77264 63.1546 4.95729 64.5143 4.95729C65.0836 4.95729 65.5318 5.23795 65.7456 5.72766V13.2435ZM70.1231 15.2442C69.3162 15.0546 68.9065 14.7721 68.9065 13.7492V0.138672L64.004 1.57395V1.74969L64.0341 1.74733C64.7104 1.69303 65.1691 1.78589 65.4355 2.03034C65.644 2.22182 65.7456 2.51559 65.7456 2.92897V4.79493C65.2623 4.48831 64.6874 4.33907 63.9898 4.33907C62.5749 4.33907 61.2818 4.93107 60.3492 6.00621C59.3771 7.12674 58.8631 8.65802 58.8631 10.434C58.8629 13.606 60.4342 15.7379 62.7729 15.7379C64.141 15.7379 65.2417 14.993 65.7456 13.7366V15.4231H70.1445V15.2484L70.1231 15.2442ZM74.3277 1.98969C74.3277 0.999262 73.5762 0.252246 72.5793 0.252246C71.587 0.252246 70.8107 1.01552 70.8107 1.98969C70.8107 2.96385 71.5878 3.72713 72.5793 3.72713C73.5762 3.72713 74.3277 2.98011 74.3277 1.98969ZM75.4849 15.2442C74.678 15.0546 74.2683 14.7721 74.2683 13.7492H74.2649V4.37133L69.8658 5.62641V5.7969L69.8922 5.79926C70.844 5.88346 71.1045 6.20923 71.1045 7.31454V15.4231H75.5074V15.2484L75.4849 15.2442ZM86.7573 15.2442C85.9504 15.0546 85.5407 14.7721 85.5407 13.7492V4.37133L81.3522 5.58497V5.75598L81.377 5.75861C82.1552 5.83992 82.3801 6.18431 82.3801 7.29461V13.2225C82.1206 13.7326 81.6339 14.0356 81.0442 14.056C80.0879 14.056 79.5613 13.4142 79.5613 12.2488V4.37159L75.1621 5.62667V5.7969L75.1885 5.79926C76.1403 5.8832 76.4011 6.20897 76.4011 7.31454V12.3315C76.3989 12.6817 76.4295 13.0314 76.4927 13.3759L76.5719 13.7182C76.9444 15.0444 77.9202 15.7379 79.4491 15.7379C80.7441 15.7379 81.8791 14.9413 82.379 13.6949V15.426H86.7782V15.2513L86.7573 15.2442ZM103.847 15.4231V15.2482L103.825 15.2432C102.95 15.0425 102.609 14.6643 102.609 13.8942V7.5152C102.609 5.52621 101.485 4.33907 99.6016 4.33907C98.229 4.33907 97.0715 5.12726 96.626 6.35507C96.272 5.05408 95.2534 4.33907 93.7472 4.33907C92.4243 4.33907 91.3874 5.03284 90.9427 6.20477V4.37211L86.5435 5.57579V5.74733L86.5699 5.74969C87.5104 5.83257 87.7823 6.16779 87.7823 7.24477V15.4231H91.8868V15.2484L91.8652 15.2432C91.1668 15.08 90.9413 14.7826 90.9413 14.0193V6.70759C91.1261 6.27874 91.4986 5.77067 92.2347 5.77067C93.1491 5.77067 93.6126 6.40018 93.6126 7.64031V15.4231H97.7182V15.2484L97.6966 15.2432C96.9981 15.08 96.7727 14.7826 96.7727 14.0193V7.51441C96.7745 7.27119 96.7551 7.02826 96.7147 6.78838C96.9105 6.32228 97.3043 5.77067 98.0706 5.77067C98.9979 5.77067 99.4485 6.38208 99.4485 7.64031V15.4231H103.847Z" fill="#D1D5DB"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_3005_2287">
                                      <rect width="104" height="16" fill="white"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="right">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
                      />
                      <div className="relative size-full">
                        <InteractiveContactForm />
                      </div>
                    </div>
                  </div>
                  <div
                    className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full"
                    data-name="container"
                  >
                    <div
                      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative rounded-[99px] shrink-0"
                      data-name="container"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[99px]"
                      />
                      <div className="relative shrink-0 size-1.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" fill="var(--fill-0, #16A149)" id="Ellipse 30" r="3" />
                        </svg>
                      </div>
                                              <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">Available for new projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MediaPlayer = forwardRef<{ playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; pauseAudio: () => void }, { onNavigateToProject?: (project: string) => void }>(({ onNavigateToProject }, ref) => {
  const [mediaState, setMediaState] = useState<MediaPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 574, // 9:34 in seconds
    currentProjectIndex: 0
  });

  const [isDragging, setIsDragging] = useState(false);
  const [hoverProgress, setHoverProgress] = useState<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Expose play and pause functions for external use
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

  const playEatsyAudio = () => {
    if (audioRef.current) {
      // Set to Eatsy project (index 1)
      setMediaState(prev => ({ ...prev, currentProjectIndex: 1, currentTime: 0 }));
      // Play the audio
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const playBrainBoxAudio = () => {
    if (audioRef.current) {
      // Set to BrainBox project (index 2)
      setMediaState(prev => ({ ...prev, currentProjectIndex: 2, currentTime: 0 }));
      // Play the audio
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  // Expose the play and pause functions via ref
  useImperativeHandle(ref, () => ({
    playAirframeAudio,
    playEatsyAudio,
    playBrainBoxAudio,
    pauseAudio
  }));

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
      // Dispatch custom event for project pages to listen to
      window.dispatchEvent(new CustomEvent('mediaStateChange', { 
        detail: { isPlaying: true } 
      }));
    };

    const handlePause = () => {
      setMediaState(prev => ({ ...prev, isPlaying: false }));
      // Dispatch custom event for project pages to listen to
      window.dispatchEvent(new CustomEvent('mediaStateChange', { 
        detail: { isPlaying: false } 
      }));
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

  // Generate waveform data for each project
  const generateProjectWaveform = (duration: number, projectIndex: number) => {
    // Create different waveform patterns for each project
    const complexity = [1.2, 0.8, 1.5, 1.0][projectIndex] || 1.0;
    return generateRealisticWaveform(duration, complexity);
  };

  // Waveform data for each project
  const projectWaveforms = projects.map((project, index) => 
    generateProjectWaveform(mediaState.duration, index)
  );

  // Handle seek functionality
  const handleSeek = (progress: number) => {
    if (audioRef.current) {
      const newTime = progress * mediaState.duration;
      audioRef.current.currentTime = newTime;
      setMediaState(prev => ({ ...prev, currentTime: newTime }));
    }
  };

  // Handle progress bar interactions
  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    handleSeek(progress);
  };

  const handleProgressMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      handleSeek(progress);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      setHoverProgress(progress);
    }
  };

  const handleProgressMouseLeave = () => {
    setHoverProgress(null);
  };

  const handleProgressMouseUp = () => {
    setIsDragging(false);
  };

  // Global mouse up listener for dragging
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging]);

  // Update audio source when project changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentProject.audio;
      audioRef.current.load();
      setMediaState(prev => ({ ...prev, currentTime: 0, isPlaying: false }));
    }
  }, [currentProject.audio]);

  const togglePlayPause = () => {
    console.log('Play button clicked, current state:', mediaState.isPlaying);
    if (audioRef.current) {
      if (mediaState.isPlaying) {
        console.log('Pausing audio');
        audioRef.current.pause();
      } else {
        console.log('Playing audio');
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    } else {
      console.error('Audio ref is null');
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
      
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-center overflow-clip relative size-full">
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
              className="box-border content-stretch flex flex-col font-didact-gothic font-normal items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
              data-name="title"
            >
              <div className="relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{currentProject.title}</p>
              </div>
              <div className="min-w-full relative shrink-0 text-[12px] text-gray-300" style={{ width: "min-content" }}>
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
              <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[#D1D5DB] text-[12px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{formatTime(mediaState.currentTime)}</p>
              </div>
              <div 
                ref={progressRef}
                className="h-[10px] relative shrink-0 w-[285px] overflow-hidden cursor-pointer"
                onMouseDown={handleProgressMouseDown}
                onMouseMove={handleProgressMouseMove}
                onMouseLeave={handleProgressMouseLeave}
                onMouseUp={handleProgressMouseUp}
              >
                <WaveformCanvas
                  width={285}
                  height={10}
                  waveformData={projectWaveforms[mediaState.currentProjectIndex]}
                  progress={mediaState.currentTime / mediaState.duration}
                  isPlaying={mediaState.isPlaying}
                  onSeek={handleSeek}
                  className="rounded-sm"
                />
                {/* Hover indicator */}
                {hoverProgress !== null && !isDragging && (
                  <div 
                    className="absolute top-0 bottom-0 w-0.5 bg-white opacity-60 pointer-events-none"
                    style={{ left: `${hoverProgress * 100}%` }}
                  />
                )}
              </div>
              <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[#D1D5DB] text-[12px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{formatTime(mediaState.duration)}</p>
              </div>
            </div>
          </div>

          <div
            className="box-border content-stretch flex flex-col gap-2.5 items-end justify-center px-5 py-0 relative shrink-0 w-[299px]"
            data-name="action"
          >
            <motion.button
              className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end px-4 py-[6px] relative rounded-[999px] shrink-0 border border-[#e6ff02] border-solid hover:bg-[#e6ff02]/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log('MediaPlayer Open Project clicked');
                if (onNavigateToProject) {
                  const projectMap = ['airframe', 'eatsy', 'brainbox', 'shelf-life'];
                  const currentProject = projectMap[mediaState.currentProjectIndex];
                  onNavigateToProject(currentProject);
                } else {
                  toast.info("Opening project details...");
                }
              }}
            >
              <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[12px] text-left text-nowrap">
                <p className="block leading-[22px] whitespace-pre">Open Project</p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="icon">
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

      {/* Tablet/Mobile Layout */}
      <div className="lg:hidden bg-neutral-950 p-1 relative">
        <div className="bg-[#121212] rounded-md p-2 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center flex-1">
              <div 
                className="w-10 h-10 bg-cover bg-center bg-no-repeat rounded-md"
                style={{ backgroundImage: `url('${currentProject.image}')` }}
              />
              <div className="flex flex-col flex-1 min-w-0">
                <div className="text-white text-sm font-normal truncate">
                  {currentProject.title}
                </div>
                <div className="text-gray-400 text-xs">
                  {currentProject.subtitle}
                </div>
              </div>
            </div>
            <div className="flex items-center">
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
            </div>
          </div>
          {/* Progress bars */}
          <div 
            className="relative h-0.5 cursor-pointer"
            onMouseDown={handleProgressMouseDown}
            onMouseMove={handleProgressMouseMove}
            onMouseLeave={handleProgressMouseLeave}
            onMouseUp={handleProgressMouseUp}
          >
            <div className="absolute inset-0 bg-[#e6ff02] w-full"></div>
            <div className="absolute inset-0 bg-[#f4915c]" style={{ width: `${(mediaState.currentTime / mediaState.duration) * 100}%` }}></div>
            {/* Progress indicator dot */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm"
              style={{ left: `${(mediaState.currentTime / mediaState.duration) * 100}%` }}
            />
            {/* Hover indicator for mobile/tablet */}
            {hoverProgress !== null && !isDragging && (
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white opacity-60 pointer-events-none"
                style={{ left: `${hoverProgress * 100}%` }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

MediaPlayer.displayName = 'MediaPlayer';

interface InteractiveHomeProps {
  onNavigateToProject?: (project: string) => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
}



// Tablet Home Component
function TabletHome({ onNavigateToProject, onNavigateToAbout }: { onNavigateToProject?: (project: string) => void; onNavigateToAbout?: () => void }) {
  const [formData, setFormData] = useState<FormData>({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; pauseAudio: () => void }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formspreeEndpoint = 'https://formspree.io/f/xkgzevdg';
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Form Submission'
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0a0a0a] relative min-h-screen flex flex-col" data-name="tablet/home">
      {/* Header - Mobile style */}
      <div className="absolute bg-neutral-950 box-border content-stretch flex items-center justify-between left-0 p-[16px] right-0 top-0 z-50">
        <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
          <div className="relative shrink-0 size-9">
            <img alt="Hailey Hsu Logo" className="block max-w-none size-full" src="/images/logo.png" />
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-[132px]">
            <div className="font-didact-gothic font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] w-full">
              <p className="leading-[normal]">Hailey Hsu</p>
            </div>
          </div>
        </div>
        <button 
          className="bg-[rgba(31,31,31,0.1)] box-border content-stretch cursor-pointer flex gap-2.5 items-center justify-start overflow-visible relative rounded-md shrink-0 hover:bg-[rgba(31,31,31,0.2)] transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative shrink-0 w-[31.5px] h-[31.5px]">
            <img 
              src="/images/menu-icon.png" 
              alt="Menu" 
              className="block max-w-none w-full h-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigateToProject={onNavigateToProject}
        onNavigateToAbout={onNavigateToAbout}
      />

      {/* Main Content - Tablet Layout */}
      <div className="bg-neutral-950 box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full pt-20 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {/* Hero Section - Mobile style */}
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start px-8 py-[100px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full">
            <div className="basis-0 font-didact-gothic font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-gray-300">
              <p className="font-didact-gothic leading-[28px] mb-0">
                <span>{`I design products that make complex information `}</span>
                <span className="text-[#f4915c]">easy to use.</span>
              </p>
              <p className="font-didact-gothic leading-[28px]">
                <span>{`I focus on practical workflows and turn messy problems into systems that `}</span>
                <span className="text-[#f4915c]">grow smoothly.</span>
              </p>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-2 items-start justify-center relative shrink-0 w-full">
            {["Design Systems", "User Research", "Prototyping", "A/B Testing", "Data Viz"].map((tag) => (
              <div key={tag} className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
                <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-nowrap">
                  <p className="leading-[22px] whitespace-pre">{tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections - Desktop style but in tablet layout */}
        <div className="bg-[#121212] relative rounded-[12px] w-full">
          <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-5 py-6 relative w-full">
            {/* Featured Section */}
            <FeaturedSection sectionRef={featuredRef} mediaPlayerRef={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
            
            {/* More Projects Section */}
            <MoreProjectsSection sectionRef={moreRef} onNavigateToProject={onNavigateToProject} />
            
            {/* Contact Section */}
            <ContactSection sectionRef={contactRef} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>

      {/* Audio Player - Bottom */}
      <div className="bg-neutral-950 box-border content-stretch flex items-center justify-between pb-4 pt-0 px-4 relative w-full mt-auto">
        <MediaPlayer onNavigateToProject={onNavigateToProject} />
      </div>
    </div>
  );
}

// Device detection hook
function useDeviceType() {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const checkDeviceType = () => {
      let deviceType: "mobile" | "tablet" | "desktop";
      if (window.innerWidth < 768) {
        deviceType = "mobile";
      } else if (window.innerWidth < 1000) {
        deviceType = "tablet";
      } else {
        deviceType = "desktop";
      }
      console.log('Device detection - Window width:', window.innerWidth, 'deviceType:', deviceType);
      setDeviceType(deviceType);
    };

    // Only run on client side
    if (typeof window !== 'undefined') {
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
    }
  }, []);

  return deviceType;
}

export default function InteractiveHome({ onNavigateToProject, openProjects, onCloseProject }: InteractiveHomeProps) {
  const deviceType = useDeviceType();
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'featured' });
  const [isNavigating, setIsNavigating] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; pauseAudio: () => void }>(null);

  // Debug logging
  console.log('InteractiveHome render - deviceType:', deviceType, 'window.innerWidth:', typeof window !== 'undefined' ? window.innerWidth : 'N/A');

  // Handle scroll to section
  const handleNavigateToSection = (section: 'featured' | 'more' | 'contact') => {
    console.log('Navigating to section:', section);
    setIsNavigating(true);
    setNavigation({ activeSection: section });
    
    const refs = {
      featured: featuredRef,
      more: moreRef,
      contact: contactRef
    };
    
    const targetRef = refs[section];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Re-enable scroll detection after navigation completes
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  // Handle about page navigation
  const handleNavigateToAbout = () => {
    setIsAboutPage(true);
  };

  // Handle back to home
  const handleBackToHome = () => {
    setIsAboutPage(false);
  };



  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Don't update if we're in the middle of a navigation
      if (isNavigating) return;

      const sections = [
        { ref: featuredRef, name: 'featured' as const },
        { ref: moreRef, name: 'more' as const },
        { ref: contactRef, name: 'contact' as const }
      ];

      // Get the scrollable container
      const scrollContainer = document.querySelector('[data-name="middle"] > div');
      if (!scrollContainer) return;

      const scrollPosition = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      const threshold = containerHeight * 0.3; // 30% threshold

      let activeSection = 'featured';

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const containerRect = scrollContainer.getBoundingClientRect();
          const elementTop = rect.top - containerRect.top;
          const elementBottom = elementTop + rect.height;

          // Check if the section is in view with a threshold
          if (scrollPosition + threshold >= elementTop && scrollPosition + threshold < elementBottom) {
            activeSection = section.name;
            break;
          }
        }
      }

      if (navigation.activeSection !== activeSection) {
        setNavigation({ activeSection: activeSection as 'featured' | 'more' | 'contact' });
      }
    };

    // Get the scrollable container
    const scrollContainer = document.querySelector('[data-name="middle"] > div');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [navigation.activeSection, isNavigating]);

  // Render mobile version on mobile devices
  if (deviceType === "mobile") {
    console.log('Rendering MobileHome component');
    if (isAboutPage) {
      return <MobileAbout onNavigateToProject={onNavigateToProject} onBackToHome={handleBackToHome} />;
    }
    return <MobileHome onNavigateToProject={onNavigateToProject} onNavigateToAbout={handleNavigateToAbout} />;
  }

  // Render tablet version on tablet devices
  if (deviceType === "tablet") {
    console.log('Rendering TabletHome component');
    if (isAboutPage) {
      return <MobileAbout onNavigateToProject={onNavigateToProject} onBackToHome={handleBackToHome} />;
    }
    return <TabletHome onNavigateToProject={onNavigateToProject} onNavigateToAbout={handleNavigateToAbout} />;
  }

  // Desktop version
  console.log('Rendering Desktop version');
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full h-screen overflow-hidden"
      data-name="home"
    >
      <div className="flex-1 bg-neutral-950 min-w-0 relative shrink-0 w-full overflow-hidden" data-name="top">
        <div className="overflow-clip relative w-full h-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-stretch justify-start p-[12px] relative h-full w-full min-w-0">
            <div className="w-[200px] flex-shrink-0 h-full">
              <Sidebar 
                navigation={navigation} 
                onNavigateToSection={handleNavigateToSection}
                openProjects={openProjects}
                currentProjectId={undefined}
                onCloseProject={onCloseProject}
                onNavigateToProject={onNavigateToProject}
                isProjectPage={false}
                onLogoClick={() => {
                  // This will be handled by the parent component
                  // For now, just log that it was clicked
                  console.log('Logo clicked');
                }}
              />
            </div>
            
            <div className="bg-[#121212] h-full relative rounded-xl flex-1 min-w-0 overflow-hidden" data-name="middle">
                              <div className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start overflow-x-clip overflow-y-auto px-4 py-4 relative w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  <FeaturedSection sectionRef={featuredRef} mediaPlayerRef={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
                  <MoreProjectsSection sectionRef={moreRef} onNavigateToProject={onNavigateToProject} />
                  <ContactSection sectionRef={contactRef} />
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
              <div className="font-didact-gothic font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">About Hailey</p>
              </div>
              
              <div
                className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="container"
              >
                <div className="relative shrink-0 size-[61px]" data-name="avatar">
                  <img className="block max-w-none size-full" height="61" src={imgAvatar} width="61" />
                </div>
                <div
                  className="font-didact-gothic font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
                  style={{ width: "min-content" }}
                >
                  <p className="leading-[22px]">
                    <span>{`I design products that make complex information `}</span>
                    <span className="font-didact-gothic font-normal not-italic text-[#F4915C]">
                      easy to use.
                    </span>
                  </p>
                  <p className="leading-[22px]">
                    <span>{`I focus on practical workflows and turn messy problems into systems that `}</span>
                    <span className="font-didact-gothic font-normal not-italic text-[#F4915C]">
                      grow smoothly.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative shrink-0 w-full" data-name="container">
                <div className="relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-1 py-0 relative w-full">
                    <div
                      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                      data-name="top"
                    >
                      <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="experience">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
                        />
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] not-italic p-[12px] relative text-left w-full">
                            <div className="font-didact-gothic font-normal relative shrink-0 text-[14px] text-gray-300 w-full">
                              <p className="block leading-[22px]">Years of experience</p>
                            </div>
                            <div className="font-didact-gothic font-semibold relative shrink-0 text-[#ffffff] text-[24px] w-full">
                              <p className="block leading-[normal]">4</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="client">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
                        />
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] not-italic p-[12px] relative text-left w-full">
                            <div className="font-didact-gothic font-normal leading-[22px] relative shrink-0 text-[14px] text-gray-300 w-full">
                              <p className="block mb-0">Clients</p>
                              <p className="block">shipped</p>
                            </div>
                            <div className="font-didact-gothic font-semibold relative shrink-0 text-[#ffffff] text-[24px] w-full">
                              <p className="block leading-[normal]">{`>10`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                      data-name="bottom"
                    >
                      <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="tooling">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
                        />
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-col font-didact-gothic font-normal gap-3 items-start justify-start leading-[0] not-italic p-[12px] relative text-[14px] text-left w-full">
                            <div className="relative shrink-0 text-gray-300 w-full">
                              <p className="block leading-[22px]">Tooling</p>
                            </div>
                            <div className="leading-[22px] relative shrink-0 text-[#ffffff] w-full">
                              <p className="block">Figma, Framer, Cursor, html, css, javascript</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                        <div className="font-oregano font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
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
                  onClick={() => handleNavigateToSection('contact')}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
                      <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">Contact</p>
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
                      <div className="font-didact-gothic font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">LinkedIn</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M13.3333 6.66699C14.6593 6.66699 15.9311 7.19378 16.8688 8.13146C17.8065 9.06914 18.3333 10.3409 18.3333 11.667V17.5003H14.9999V11.667C14.9999 11.225 14.8243 10.801 14.5118 10.4885C14.1992 10.1759 13.7753 10.0003 13.3333 10.0003C12.8912 10.0003 12.4673 10.1759 12.1547 10.4885C11.8422 10.801 11.6666 11.225 11.6666 11.667V17.5003H8.33325V11.667C8.33325 10.3409 8.86004 9.06914 9.79772 8.13146C10.7354 7.19378 12.0072 6.66699 13.3333 6.66699Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.00008 7.5H1.66675V17.5H5.00008V7.5Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.33341 5.00033C4.25389 5.00033 5.00008 4.25413 5.00008 3.33366C5.00008 2.41318 4.25389 1.66699 3.33341 1.66699C2.41294 1.66699 1.66675 2.41318 1.66675 3.33366C1.66675 4.25413 2.41294 5.00033 3.33341 5.00033Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
        <MediaPlayer ref={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
      </div>
    </div>
  );
}