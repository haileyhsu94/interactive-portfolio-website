"use client";

import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import { motion } from "framer-motion";
import svgPaths from "../imports/svg-09p2j473t4";
import { toast } from "sonner";
import WaveformCanvas from "./ui/WaveformCanvas";
import { generateRealisticWaveform, chunkWaveformData } from "../utils/audioUtils";
import emailjs from '@emailjs/browser';

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

function Logo() {
  return (
    <motion.div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center relative shrink-0 size-9 cursor-pointer"
      data-name="logo"
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
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[16px] w-full">
        <p className="block leading-[normal]">Hailey Hsu</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-gray-400 w-full">
        <p className="block leading-[normal]">Product Designer</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="header"
    >
      <Logo />
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
      <div className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
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

function Sidebar({ 
  navigation, 
  onNavigateToSection 
}: { 
  navigation: NavigationState; 
  onNavigateToSection: (section: 'featured' | 'more' | 'contact') => void;
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
      <Header />
      <Items navigation={navigation} onNavigateToSection={onNavigateToSection} />
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
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID'; // You'll get this from EmailJS
      const templateId = 'YOUR_TEMPLATE_ID'; // You'll get this from EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll get this from EmailJS

      const templateParams = {
        to_email: 'haileyhsu94@gmail.com',
        from_email: formData.email,
        message: formData.message,
        subject: 'New Portfolio Contact Form Submission'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Message sent successfully!");
      setFormData({ email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[12px] relative w-full">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[normal]">Quick Messages</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left w-full">
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
              className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-300 text-left bg-transparent border-none outline-none placeholder-gray-600"
            />
          </div>
        </div>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left w-full">
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
              className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-gray-300 text-left bg-transparent border-none outline-none placeholder-gray-600 resize-none leading-relaxed"
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
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
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

function FeaturedSection({ sectionRef, mediaPlayerRef }: { sectionRef: React.RefObject<HTMLDivElement>; mediaPlayerRef: React.RefObject<{ playAirframeAudio: () => void }> }) {
  return (
    <motion.div
      ref={sectionRef}
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full scroll-mt-6"
      data-name="feature"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="box-border content-stretch flex flex-row items-start justify-between leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
        data-name="title"
      >
        <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[20px]">
          <p className="block leading-[normal] text-nowrap whitespace-pre">Featured Project</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-gray-300">
          <p className="block leading-[22px] text-nowrap whitespace-pre">1 featured</p>
        </div>
      </div>
      
      <motion.div
        className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative rounded-3xl shrink-0 w-full hover:bg-white/5 transition-colors duration-300 cursor-pointer"
        data-name="container"
        whileHover={{ scale: 1.02 }}
        onClick={() => toast.info("Opening featured project...")}
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
                    <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[#ffffff] w-full">
                      <p className="block leading-[normal]">AI-powered B2B Procurement Platform</p>
                    </div>
                    <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#f4915c] w-full">
                      <p className="block leading-[normal]">Projected to cut vendor sourcing time by 40%</p>
                    </div>
                  </div>
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left w-full">
                    <p className="block leading-[22px]">{`Delivered 100+ high-fidelity screens for buyer & vendor flows.`}</p>
                  </div>
                  <div
                    className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative shrink-0 w-full"
                    data-name="tags"
                  >
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
                    toast.info("Opening case study...");
                  }}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
                      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
                        <p className="block leading-[22px] whitespace-pre text-[14px]">See Work</p>
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
                      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre text-[14px]">Listen</p>
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
      </motion.div>
    </motion.div>
  );
}

function MoreProjectsSection({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement> }) {
  const projects = [
    { 
      title: "Customizable Reservation Platform", 
      description: "Reduced booking setup steps by 40% in prototype testing. Designed fully customizable workflows, giving small restaurants control over reservations and payments.",
      tags: ["Cost Reduction", "Prototype Testing"],
      image: imgImage 
    },
    { 
      title: "AI-Powered SAT Preparation Platform", 
      description: "Conducted heatmap analysis and A/B testing to refine practice setup flow and dashboard layout. Led 4 designers to deliver 100+ screens, integrating AI tutor and performance reports.",
      tags: ["Heatmap Analysis", "A/B Testing"],
      image: imgImage1 
    },
    { 
      title: "Dual-Interface Platform to Reduce Food Waste", 
      description: "Expected to help restaurants clear surplus food faster by streamlining listing to under 2 minutes. Delivered mobile B2C app & tablet B2B dashboard with 50+ unique screens.",
      tags: ["Dual Interface", "Sustainability"],
      image: imgImage2 
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full scroll-mt-6"
      data-name="more"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="box-border content-stretch flex flex-row items-start justify-between leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
        data-name="title"
      >
        <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[20px]">
          <p className="block leading-[normal] text-nowrap whitespace-pre">More Projects</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-gray-300">
          <p className="block leading-[22px] text-nowrap whitespace-pre">3 more</p>
        </div>
      </div>
      <div
        className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full"
        data-name="container"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="basis-0 grow min-h-px min-w-px relative shrink-0 hover:bg-white/5 rounded-xl transition-colors duration-300 cursor-pointer" 
            data-name="project"
            whileHover={{ scale: 1.05 }}
            onClick={() => toast.info(`Opening ${project.title}...`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[12px] relative w-full">
                <div
                  className="bg-center bg-cover bg-no-repeat h-36 rounded-xl shrink-0 w-full"
                  data-name="image"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div
                  className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
                  data-name="title"
                >
                  <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
                    <p className="block leading-[normal]">{project.title}</p>
                  </div>
                </div>
                <div
                  className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
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
                      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">{tag}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactSection({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement> }) {
  return (
    <motion.div
      ref={sectionRef}
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-6 pt-0 px-0 relative shrink-0 w-full scroll-mt-6"
      data-name="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#121212] relative rounded-xl shrink-0 w-full" data-name="container">
        <div
          aria-hidden="true"
          className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
        />
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start px-5 py-6 relative w-full">
            <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">Get in Touch</p>
            </div>
            <div
              className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
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
                            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
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
                                    <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
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
                                    <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
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
                                <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
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
                              className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left"
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
                      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
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
    </motion.div>
  );
}

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

  // Update audio source when project changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentProject.audio;
      audioRef.current.load();
      setMediaState(prev => ({ ...prev, currentTime: 0, isPlaying: false }));
    }
  }, [currentProject.audio]);

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
              className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
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
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#D1D5DB] text-[12px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{formatTime(mediaState.currentTime)}</p>
              </div>
              <div className="h-[10px] relative shrink-0 w-[285px] overflow-hidden">
                <WaveformCanvas
                  width={285}
                  height={10}
                  waveformData={projectWaveforms[mediaState.currentProjectIndex]}
                  progress={mediaState.currentTime / mediaState.duration}
                  isPlaying={mediaState.isPlaying}
                  onSeek={handleSeek}
                  className="rounded-sm"
                />
              </div>
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#D1D5DB] text-[12px] text-left text-nowrap">
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
              onClick={() => toast.info("Opening project details...")}
            >
              <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[12px] text-left text-nowrap">
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
    </div>
  );
});

MediaPlayer.displayName = 'MediaPlayer';

export default function InteractiveHome() {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'featured' });
  const [isNavigating, setIsNavigating] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void }>(null);

  // Handle scroll to section
  const handleNavigateToSection = (section: 'featured' | 'more' | 'contact') => {
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
                <FeaturedSection sectionRef={featuredRef} mediaPlayerRef={mediaPlayerRef} />
                <MoreProjectsSection sectionRef={moreRef} />
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
              <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap">
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
                  className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
                  style={{ width: "min-content" }}
                >
                  <p className="leading-[22px]">
                    <span>{`Product designer focused on data-dense UX, calm interfaces, and evidence-base workflows. I translate messy `}</span>
                    <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#ffffff]">
                      problems into systems that scale.
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
                            <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-gray-300 w-full">
                              <p className="block leading-[22px]">Years of experience</p>
                            </div>
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[24px] w-full">
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
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-gray-300 w-full">
                              <p className="block mb-0">Clients</p>
                              <p className="block">shipped</p>
                            </div>
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[24px] w-full">
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
                      <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="industries">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
                        />
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-3 items-start justify-start leading-[0] not-italic p-[12px] relative text-[14px] text-left w-full">
                            <div className="relative shrink-0 text-gray-300 w-full">
                              <p className="block leading-[22px]">Industries</p>
                            </div>
                            <div className="leading-[22px] relative shrink-0 text-[#ffffff] w-full">
                              <p className="block mb-0">Procurement,</p>
                              <p className="block mb-0">Ops,</p>
                              <p className="block">Edtech</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="tooling">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
                        />
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-3 items-start justify-start leading-[0] not-italic p-[12px] relative text-[14px] text-left w-full">
                            <div className="relative shrink-0 text-gray-300 w-full">
                              <p className="block leading-[22px]">Tooling</p>
                            </div>
                            <div className="leading-[22px] relative shrink-0 text-[#ffffff] w-full">
                              <p className="block mb-0">{`Figma, `}</p>
                              <p className="block mb-0">{`Framer, `}</p>
                              <p className="block">Cursor</p>
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
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
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
                      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
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
                      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
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