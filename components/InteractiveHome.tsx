"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import svgPaths from "../imports/svg-09p2j473t4";
import { toast } from "sonner";

// Placeholder images - replace with actual images later
const imgHeroImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYxZjFmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2U2ZmYwMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkhlcm8gSW1hZ2U8L3RleHQ+PC9zdmc+";
const imgImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYxZjFmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2U2ZmYwMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgMTwvdGV4dD48L3N2Zz4=";
const imgImage1 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYxZjFmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2U2ZmYwMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgMjwvdGV4dD48L3N2Zz4=";
const imgImage2 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYxZjFmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2U2ZmYwMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgMzwvdGV4dD48L3N2Zz4=";
const imgAvatar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iIzFmMWYxZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNlNmZmMDIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BdmF0YXI8L3RleHQ+PC9zdmc+";
const imgImage3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYxZjFmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2U2ZmYwMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgNDwvdGV4dD48L3N2Zz4=";

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
}

function Logo() {
  return (
    <motion.div
      className="bg-[#e6ff02] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1.5 py-2 relative rounded-[999px] shrink-0 size-9 cursor-pointer"
      data-name="logo"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="font-['HanziPen_TC:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
        <p className="block leading-[normal] whitespace-pre">HH</p>
      </div>
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
      className="bg-[#121212] box-border content-stretch flex flex-col gap-6 h-full items-start justify-start px-5 py-6 relative rounded-xl shrink-0"
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
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent successfully!");
    setFormData({ email: '', message: '' });
    setIsSubmitting(false);
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
          <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-center px-3 py-2 relative w-full h-[60px]">
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project"
              rows={3}
              className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-gray-300 text-left bg-transparent border-none outline-none placeholder-gray-600 resize-none"
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

function FeaturedSection({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement> }) {
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
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text">
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
                      <p className="block leading-[normal]">Airframe – AI-powered B2B Procurement Platform</p>
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
                        <p className="block leading-[22px] whitespace-pre">AI Prototype</p>
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
                        <p className="block leading-[22px] whitespace-pre text-[14px]">View Case Study</p>
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
                    toast.info("Playing audio preview...");
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
          className="bg-center bg-cover bg-no-repeat h-[338px] shrink-0 w-[426px]"
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
              <p className="block leading-[22px]">Let's discuss your next project or collaboration</p>
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
                            <motion.a
                              href="https://linkedin.com"
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

function MediaPlayer() {
  const [mediaState, setMediaState] = useState<MediaPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 574 // 9:34 in seconds
  });

  const togglePlayPause = () => {
    setMediaState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const skipPrevious = () => {
    setMediaState(prev => ({ ...prev, currentTime: 0 }));
  };

  const skipNext = () => {
    setMediaState(prev => ({ ...prev, currentTime: prev.duration }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-neutral-950 relative shrink-0 w-full" data-name="play section">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-4 pt-0 px-4 relative w-full">
          <div
            className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start px-3 py-0 relative shrink-0"
            data-name="detail"
          >
            <div
              className="bg-center bg-cover bg-no-repeat rounded-lg shrink-0 size-[60px]"
              data-name="image"
              style={{ backgroundImage: `url('${imgImage3}')` }}
            />
            <div
              className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
              data-name="title"
            >
              <div className="relative shrink-0 text-[#ffffff] text-[16px] text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{`B2B Procurement AI Agent `}</p>
              </div>
              <div className="min-w-full relative shrink-0 text-[14px] text-gray-300" style={{ width: "min-content" }}>
                <p className="block leading-[22px]">Airframe</p>
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
                className="h-[24.001px] relative shrink-0 w-[23.668px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Frame">
                    <rect fill="var(--fill-0, white)" height="24.0008" rx="11.8337" width="23.6675" />
                    <path d={mediaState.isPlaying ? "M9 8V16M15 8V16" : svgPaths.p2e219100} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                  </g>
                </svg>
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
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{formatTime(mediaState.currentTime)}</p>
              </div>
              <div
                className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
                data-name="progress bar"
              >
                {/* Orange bars */}
                <div className="h-[9px] relative shrink-0 w-4">
                  <div className="absolute bottom-0 left-0 right-[-6.25%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 9">
                      <g id="Frame 232">
                        <line id="Line 4" stroke="var(--stroke-0, #F4915C)" x1="0.5" x2="0.5" y1="3" y2="6" />
                        <line id="Line 5" stroke="var(--stroke-0, #F4915C)" x1="2.5" x2="2.5" y1="2" y2="7" />
                        <line id="Line 6" stroke="var(--stroke-0, #F4915C)" x1="4.5" x2="4.5" y1="1" y2="8" />
                        <line id="Line 7" stroke="var(--stroke-0, #F4915C)" x1="6.5" x2="6.5" y2="9" />
                        <line id="Line 8" stroke="var(--stroke-0, #F4915C)" x1="8.5" x2="8.5" y2="9" />
                        <line id="Line 9" stroke="var(--stroke-0, #F4915C)" x1="10.5" x2="10.5" y1="1" y2="8" />
                        <line id="Line 10" stroke="var(--stroke-0, #F4915C)" x1="12.5" x2="12.5" y1="2" y2="7" />
                        <line id="Line 11" stroke="var(--stroke-0, #F4915C)" x1="14.5" x2="14.5" y1="3" y2="6" />
                        <line id="Line 12" stroke="var(--stroke-0, #F4915C)" x1="16.5" x2="16.5" y1="3" y2="6" />
                      </g>
                    </svg>
                  </div>
                </div>
                
                {/* Repeated pattern - mix of orange and yellow */}
                {Array.from({ length: 11 }, (_, i) => (
                  <div key={i} className="h-[9px] relative shrink-0 w-6">
                    <div className="absolute bottom-0 left-0 right-[-4.17%] top-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 9">
                        <g>
                          {Array.from({ length: 13 }, (_, j) => (
                            <line 
                              key={j}
                              stroke={i > 5 ? "var(--stroke-0, #E6FF02)" : "var(--stroke-0, #F4915C)"} 
                              x1={`${j * 2 + 0.5}`} 
                              x2={`${j * 2 + 0.5}`} 
                              y1={j % 2 === 0 ? "1" : "2"} 
                              y2={j % 2 === 0 ? "8" : "7"} 
                            />
                          ))}
                        </g>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
              <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[14px] text-left text-nowrap">
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
}

export default function InteractiveHome() {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'featured' });
  const featuredRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Handle scroll to section
  const handleNavigateToSection = (section: 'featured' | 'more' | 'contact') => {
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
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: featuredRef, name: 'featured' as const },
        { ref: moreRef, name: 'more' as const },
        { ref: contactRef, name: 'contact' as const }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (navigation.activeSection !== section.name) {
              setNavigation({ activeSection: section.name });
            }
            break;
          }
        }
      }
    };

    // Get the scrollable container
    const scrollContainer = document.querySelector('[data-name="middle"] > div');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [navigation.activeSection]);

  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full min-h-screen"
      data-name="home"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="basis-0 bg-neutral-950 grow min-h-screen min-w-px relative shrink-0 w-full" data-name="top">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[16px] relative size-full">
            <Sidebar navigation={navigation} onNavigateToSection={handleNavigateToSection} />
            
            <div className="bg-[#121212] h-full relative rounded-xl shrink-0 w-[798px]" data-name="middle">
              <div className="box-border content-stretch flex flex-col gap-8 h-full items-start justify-start overflow-x-clip overflow-y-auto px-5 py-6 relative w-[798px]" style={{ minHeight: '600px' }}>
                <div style={{ color: 'white', fontSize: '24px', padding: '20px' }}>DEBUG: Content should be visible</div>
                <FeaturedSection sectionRef={featuredRef} />
                <MoreProjectsSection sectionRef={moreRef} />
                <ContactSection sectionRef={contactRef} />
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
              />
            </div>

            <div
              className="bg-[#121212] box-border content-stretch flex flex-col gap-6 h-full items-start justify-start px-5 py-6 relative rounded-xl shrink-0 w-[310px]"
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
                  href="https://linkedin.com"
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
      
      <MediaPlayer />
    </div>
  );
}