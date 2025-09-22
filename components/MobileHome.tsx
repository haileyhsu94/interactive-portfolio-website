"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import MobileMenu from './MobileMenu';
import Footer from './Footer';

// Image paths - replace with your actual images
const imgHeroImage1 = "/images/airframe/thumbnail.png"; // Featured project hero image
const imgImage = "/images/project-1.png";      // Project 1 image
const imgImage1 = "/images/project-2.png";     // Project 2 image  
const imgImage2 = "/images/project-3.jpg";     // Project 3 image
const imgLogo = "/images/logo.png";            // Logo image
const imgMenuIcon = "/images/menu-icon.png";   // Menu icon

interface FormData {
  email: string;
  message: string;
}

export default function MobileHome({ 
  onNavigateToProject, 
  onNavigateToAbout 
}: { 
  onNavigateToProject?: (project: string) => void;
  onNavigateToAbout?: () => void;
}) {
  const [formData, setFormData] = useState<FormData>({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="bg-black !bg-black relative w-full h-full min-h-screen mobile-container" data-name="mobile/home" data-node-id="2997:1646">
      {/* Header */}
      <div className="fixed bg-black box-border content-stretch flex items-center justify-between left-0 p-[16px] right-0 top-0 z-50 mobile-header" data-node-id="3000:1702">
        <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0" data-name="header" data-node-id="2997:1690">
          <img 
            src={imgLogo} 
            alt="Hailey Hsu Logo" 
            className="block max-w-none size-9 rounded-[999px]"
          />
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-[132px]" data-name="name and title" data-node-id="2997:1693">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] w-full" data-node-id="2997:1694">
              <p className="leading-[normal]">Hailey Hsu</p>
            </div>
          </div>
        </div>
        <img 
          src={imgMenuIcon} 
          alt="Menu" 
          className="block max-w-none w-[31.5px] h-[31.5px] cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* Main Content */}
      <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-0 pb-24 pt-[80px] px-4 right-0 top-[72px] overflow-y-auto mobile-content scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent" data-node-id="3000:1756">
        {/* Hero Section */}
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start px-2.5 py-5 relative shrink-0 w-full mb-20" data-node-id="3000:1755">
          <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full" data-node-id="3000:1704">
            <div className="basis-0 font-didact-gothic font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-gray-300" data-node-id="2997:1688">
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
          <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full" data-name="tags" data-node-id="3000:1705">
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1706">
                              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1707">
                  <p className="leading-[22px] whitespace-pre">Design Systems</p>
                </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1708">
                              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1709">
                  <p className="leading-[22px] whitespace-pre">User Research</p>
                </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1710">
                              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1711">
                  <p className="leading-[22px] whitespace-pre">Prototyping</p>
                </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1712">
                              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1713">
                  <p className="leading-[22px] whitespace-pre">A/B Testing</p>
                </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1714">
                              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1715">
                  <p className="leading-[22px] whitespace-pre">Data Viz</p>
                </div>
            </div>
          </div>
        </div>

        {/* Featured Project Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full" data-name="feature" data-node-id="3000:1717">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full" data-name="title" data-node-id="3000:1718">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap" data-node-id="3000:1719">
              <p className="leading-[normal] whitespace-pre">Featured Project</p>
            </div>
          </div>
          <motion.div 
            onClick={() => {
              if (onNavigateToProject) {
                onNavigateToProject('airframe');
              } else {
                toast.info("Opening Airframe project...");
              }
            }}
            className="bg-[#121212] content-stretch flex flex-col gap-4 items-start justify-start relative rounded-[16px] shrink-0 w-full hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer" 
            data-name="container" 
            data-node-id="3000:1721"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.99 }}
          >
            <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative shrink-0 w-full" data-name="text" data-node-id="3000:1722">
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-node-id="3000:1723">
                <div className="aspect-[852/676] bg-center bg-cover bg-no-repeat rounded-[12px] shrink-0 w-full" data-name="hero image 1" data-node-id="3000:1753" style={{ backgroundImage: `url('${imgHeroImage1}')` }} />
                <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="3000:1731">
                  <div className="content-stretch flex flex-col font-didact-gothic gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="title" data-node-id="3000:1732">
                    <div className="relative shrink-0 text-[#ffffff] text-[20px] w-full" data-node-id="3000:1733">
                      <p className="leading-[normal]">AI-powered B2B Procurement Platform</p>
                    </div>
                    <div className="relative shrink-0 text-[#f4915c] text-[16px] w-full" data-node-id="3000:1734">
                      <p className="leading-[normal]">Projected to cut vendor sourcing time by 40%</p>
                    </div>
                  </div>
                  <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[16px] text-gray-300 w-full" data-node-id="3000:1736">
                    <p className="leading-[22px]">{`Delivered 250+ high-fidelity screens for buyer & vendor flows.`}</p>
                  </div>
                  <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full" data-name="tags" data-node-id="3000:1737">
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1738">
                                          <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1739">
                      <p className="leading-[22px] whitespace-pre">$4M funding</p>
                    </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1742">
                                          <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1743">
                      <p className="leading-[22px] whitespace-pre">AI Prototype</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-node-id="3000:1744">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigateToProject) {
                      onNavigateToProject('airframe');
                    } else {
                      toast.info("Opening Airframe project...");
                    }
                  }}
                  className="bg-[#e6ff02] box-border content-stretch flex gap-2.5 items-center justify-center px-4 py-3 relative rounded-[999px] shrink-0 w-full hover:bg-[#d9f00c] transition-colors duration-200 cursor-pointer" data-name="contact" data-node-id="3000:1745"
                >
                  <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap" data-node-id="3000:1746">
                    <p className="leading-[22px] whitespace-pre">See work</p>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* More Projects Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2.5 py-0 relative shrink-0 w-full" data-name="more" data-node-id="3000:1757">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full" data-name="title" data-node-id="3000:1758">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap" data-node-id="3000:1759">
              <p className="leading-[normal] whitespace-pre">More Projects</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="container" data-node-id="3000:1761">
            <div 
              onClick={() => {
                if (onNavigateToProject) {
                  onNavigateToProject('eatsy');
                } else {
                  toast.info("Opening Eatsy project...");
                }
              }}
              className="bg-[#121212] box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative rounded-[16px] shrink-0 w-full hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer" data-name="project" data-node-id="3000:1762"
            >
              <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="aspect-[225/144] bg-center bg-cover bg-no-repeat rounded-[12px] shrink-0 w-full" data-name="image" data-node-id="3000:1770" style={{ backgroundImage: `url('${imgImage}')` }} />
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="title" data-node-id="3000:1771">
                <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] w-full" data-node-id="3000:1772">
                  <p className="leading-[normal]">Customizable Reservation Platform</p>
                </div>
              </div>
              <div className="font-didact-gothic leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-gray-300" data-node-id="3000:1774" style={{ width: "min-content" }}>
                <p className="leading-[22px]">Reduced booking setup steps by 40% in prototype testing. Designed fully customizable workflows, giving small restaurants control over reservations and payments.</p>
              </div>
              <div className="box-border content-start flex flex-wrap gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full" data-node-id="3000:1775">
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1776">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1777">
                    <p className="leading-[22px] whitespace-pre">Cost Reduction</p>
                  </div>
                </div>
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1778">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1779">
                    <p className="leading-[22px] whitespace-pre">Prototype Testing</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              onClick={() => {
                if (onNavigateToProject) {
                  onNavigateToProject('brainbox');
                } else {
                  toast.info("Opening BrainBox project...");
                }
              }}
              className="bg-[#121212] box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative rounded-[16px] shrink-0 w-full hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer" data-name="project" data-node-id="3000:1788"
            >
              <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="aspect-[225/144] bg-center bg-cover bg-no-repeat rounded-[12px] shrink-0 w-full" data-name="image" data-node-id="3000:1796" style={{ backgroundImage: `url('${imgImage1}')` }} />
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="title" data-node-id="3000:1797">
                <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] w-full" data-node-id="3000:1798">
                  <p className="leading-[normal]">AI-Powered SAT Preparation Platform</p>
                </div>
              </div>
              <div className="font-didact-gothic leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-gray-300" data-node-id="3000:1800" style={{ width: "min-content" }}>
                <p className="leading-[22px]">Conducted heatmap analysis and A/B testing to refine practice setup flow and dashboard layout. Led 4 designers to deliver 200+ screens, integrating AI tutor and performance reports.</p>
              </div>
              <div className="box-border content-start flex flex-wrap gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full" data-node-id="3000:1801">
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1802">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1803">
                    <p className="leading-[22px] whitespace-pre">Heatmap Analysis</p>
                  </div>
                </div>
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1804">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1805">
                    <p className="leading-[22px] whitespace-pre">A/B Testing</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              onClick={() => {
                if (onNavigateToProject) {
                  onNavigateToProject('shelf-life');
                } else {
                  toast.info("Opening Shelf Life project...");
                }
              }}
              className="bg-[#121212] box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative rounded-[16px] shrink-0 w-full hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer" data-name="project" data-node-id="3000:1812"
            >
              <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="aspect-[225/144] bg-center bg-cover bg-no-repeat rounded-[12px] shrink-0 w-full" data-name="image" data-node-id="3000:1820" style={{ backgroundImage: `url('${imgImage2}')` }} />
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="title" data-node-id="3000:1821">
                <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] w-full" data-node-id="3000:1822">
                  <p className="leading-[normal]">Dual-Interface Platform to Reduce Food Waste</p>
                </div>
              </div>
              <div className="font-didact-gothic leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-gray-300" data-node-id="3000:1824" style={{ width: "min-content" }}>
                <p className="leading-[22px]">{`Expected to help restaurants clear surplus food faster by streamlining listing to under 2 minutes. Delivered mobile B2C app & tablet B2B dashboard with 50+ unique screens.`}</p>
              </div>
              <div className="box-border content-start flex flex-wrap gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full" data-node-id="3000:1825">
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1826">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1827">
                    <p className="leading-[22px] whitespace-pre">Dual Interface</p>
                  </div>
                </div>
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1828">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap" style={{ letterSpacing: '0.01em' }} data-node-id="3000:1829">
                    <p className="leading-[22px] whitespace-pre">Sustainability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-0 px-2.5 relative shrink-0 w-full" data-name="contact" data-node-id="3000:1836">
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative rounded-[12px] shrink-0 w-full" data-name="container" data-node-id="3000:1837">
            <div className="content-stretch flex flex-col font-didact-gothic gap-1 items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="3000:1889">
              <div className="relative shrink-0 text-[#ffffff] text-[21px] text-nowrap" data-node-id="3000:1838">
                <p className="leading-[normal] whitespace-pre">Get in Touch</p>
              </div>
              <div className="min-w-full relative shrink-0 text-[16px] text-gray-300" data-node-id="3000:1839" style={{ width: "min-content" }}>
                <p className="leading-[22px]">Let&apos;s discuss your next project or collaboration</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="container" data-node-id="3000:1840">
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="container" data-node-id="3000:1841">
                <div className="bg-[#121212] box-border content-stretch flex flex-col gap-5 items-start justify-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="left" data-node-id="3000:1842">
                  <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="top" data-node-id="3000:1843">
                    <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] w-full" data-node-id="3000:1844">
                      <p className="leading-[normal]">Contact Information</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="container" data-node-id="3000:1845">
                      <div className="box-border content-stretch flex gap-3 items-center justify-start px-3 py-2 relative shrink-0 w-full" data-name="mail" data-node-id="3000:1846">
                        <div className="relative shrink-0 size-[18px]" data-name="Frame" data-node-id="3000:1847">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 5.4248L9.75675 9.72005C9.52792 9.85296 9.268 9.92297 9.00337 9.92297C8.73875 9.92297 8.47883 9.85296 8.25 9.72005L1.5 5.4248" stroke="#E6FF02" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 3.1748H3C2.17157 3.1748 1.5 3.84638 1.5 4.6748V13.6748C1.5 14.5032 2.17157 15.1748 3 15.1748H15C15.8284 15.1748 16.5 14.5032 16.5 13.6748V4.6748C16.5 3.84638 15.8284 3.1748 15 3.1748Z" stroke="#E6FF02" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-nowrap" data-node-id="3000:1850">
                          <p className="leading-[normal] whitespace-pre">haileyhsu94@gmail.com</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex gap-3 items-center justify-start px-3 py-2 relative shrink-0 w-full" data-name="phone" data-node-id="3000:1851">
                        <div className="relative shrink-0 size-[18px]" data-name="Frame" data-node-id="3000:1852">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.374 12.6008C10.5289 12.6719 10.7034 12.6882 10.8688 12.6469C11.0341 12.6056 11.1805 12.5092 11.2838 12.3736L11.55 12.0248C11.6897 11.8385 11.8709 11.6873 12.0792 11.5832C12.2875 11.479 12.5171 11.4248 12.75 11.4248H15C15.3978 11.4248 15.7794 11.5828 16.0607 11.8641C16.342 12.1454 16.5 12.527 16.5 12.9248V15.1748C16.5 15.5726 16.342 15.9542 16.0607 16.2355C15.7794 16.5168 15.3978 16.6748 15 16.6748C11.4196 16.6748 7.9858 15.2525 5.45406 12.7207C2.92232 10.189 1.5 6.75523 1.5 3.1748C1.5 2.77698 1.65804 2.39545 1.93934 2.11414C2.22064 1.83284 2.60218 1.6748 3 1.6748H5.25C5.64782 1.6748 6.02936 1.83284 6.31066 2.11414C6.59196 2.39545 6.75 2.77698 6.75 3.1748V5.4248C6.75 5.65767 6.69578 5.88734 6.59164 6.09563C6.4875 6.30391 6.33629 6.48508 6.15 6.6248L5.799 6.88805C5.66131 6.99319 5.56426 7.14274 5.52434 7.31132C5.48442 7.47989 5.50409 7.65709 5.58 7.8128C6.60501 9.8947 8.29082 11.5784 10.374 12.6008Z" stroke="#E6FF02" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-nowrap" data-node-id="3000:1854">
                          <p className="leading-[normal] whitespace-pre">+1 (347) 806-1403</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex gap-3 items-center justify-start px-3 py-2 relative shrink-0" data-name="location" data-node-id="3000:1855">
                        <div className="relative shrink-0 size-[18px]" data-name="Frame" data-node-id="3000:1856">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7.6748C15 11.4196 10.8457 15.3196 9.45075 16.5241C9.32079 16.6218 9.1626 16.6746 9 16.6746C8.8374 16.6746 8.67921 16.6218 8.54925 16.5241C7.15425 15.3196 3 11.4196 3 7.6748C3 6.08351 3.63214 4.55738 4.75736 3.43216C5.88258 2.30695 7.4087 1.6748 9 1.6748C10.5913 1.6748 12.1174 2.30695 13.2426 3.43216C14.3679 4.55738 15 6.08351 15 7.6748Z" stroke="#E6FF02" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 9.9248C10.2426 9.9248 11.25 8.91745 11.25 7.6748C11.25 6.43216 10.2426 5.4248 9 5.4248C7.75736 5.4248 6.75 6.43216 6.75 7.6748C6.75 8.91745 7.75736 9.9248 9 9.9248Z" stroke="#E6FF02" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-nowrap" data-node-id="3000:1859">
                          <p className="leading-[normal] whitespace-pre">New York, NY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="bottom" data-node-id="3000:1860">
                    <div className="font-didact-gothic leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[16px]" data-node-id="3000:1861" style={{ width: "min-content" }}>
                      <p className="leading-[normal]">Follow me</p>
                    </div>
                    <div className="box-border content-stretch flex gap-3 items-center justify-start px-3 py-0 relative shrink-0" data-name="logos" data-node-id="3000:1862">
                      <a
                        href="https://www.linkedin.com/in/yu-hsuan-hsu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative shrink-0 size-5 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        data-name="Frame" 
                        data-node-id="3000:1863"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M13.3333 6.66699C14.6593 6.66699 15.9311 7.19378 16.8688 8.13146C17.8065 9.06914 18.3333 10.3409 18.3333 11.667V17.5003H14.9999V11.667C14.9999 11.225 14.8243 10.801 14.5118 10.4885C14.1992 10.1759 13.7753 10.0003 13.3333 10.0003C12.8912 10.0003 12.4673 10.1759 12.1547 10.4885C11.8422 10.801 11.6666 11.225 11.6666 11.667V17.5003H8.33325V11.667C8.33325 10.3409 8.86004 9.06914 9.79772 8.13146C10.7354 7.19378 12.0072 6.66699 13.3333 6.66699Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.00008 7.5H1.66675V17.5H5.00008V7.5Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.33341 5.00033C4.25389 5.00033 5.00008 4.25413 5.00008 3.33366C5.00008 2.41318 4.25389 1.66699 3.33341 1.66699C2.41294 1.66699 1.66675 2.41318 1.66675 3.33366C1.66675 4.25413 2.41294 5.00033 3.33341 5.00033Z" stroke="#D1D5DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a
                        href="https://medium.com/@haileyhsu."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-4 relative shrink-0 w-[104px] cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        data-name="medium_logo.svg" 
                        data-node-id="3000:1867"
                      >
                        <svg width="104" height="17" viewBox="0 0 104 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_3000_1867)">
                            <path d="M15.7 8.25876C15.7 12.5541 12.2197 16.0363 7.92642 16.0363C3.63312 16.0363 0.153076 12.5552 0.153076 8.25876C0.153076 3.96236 3.63338 0.481445 7.92642 0.481445C12.2195 0.481445 15.7 3.96341 15.7 8.25876Z" fill="#D1D5DB"/>
                            <path d="M24.2277 8.25868C24.2277 12.3022 22.4874 15.5799 20.3409 15.5799C18.1944 15.5799 16.4541 12.3012 16.4541 8.25868C16.4541 4.21619 18.1944 0.9375 20.3409 0.9375C22.4874 0.9375 24.2277 4.21619 24.2277 8.25868Z" fill="#D1D5DB"/>
                            <path d="M27.7158 8.2587C27.7158 11.8815 27.1037 14.8182 26.3487 14.8182C25.5938 14.8182 24.9817 11.8805 24.9817 8.2587C24.9817 4.63692 25.5938 1.69922 26.349 1.69922C27.1042 1.69922 27.7158 4.63614 27.7158 8.2587Z" fill="#D1D5DB"/>
                            <path d="M49.1695 1.15597L49.1911 1.15125V0.98469H44.7704L40.6655 10.5716L36.5607 0.98469H31.7967V1.15125L31.8181 1.15597C32.6251 1.33695 33.0347 1.60685 33.0347 2.58023V13.9756C33.0347 14.949 32.6235 15.2189 31.8165 15.3999L31.7952 15.4046V15.5717H35.0273V15.4051L35.006 15.4004C34.199 15.2194 33.7894 14.9495 33.7894 13.9762V3.24121L39.0625 15.5717H39.3616L44.7883 2.89735V14.2576C44.7191 15.0264 44.3132 15.2638 43.5825 15.4277L43.5609 15.4327V15.5979H49.1911V15.4327L49.1695 15.4277C48.4381 15.2638 48.0223 15.0264 47.9532 14.2576L47.9495 2.58023H47.9532C47.9532 1.60685 48.3628 1.33695 49.1695 1.15597ZM51.7413 8.70482C51.8334 6.65735 52.5733 5.17957 53.8149 5.15413C54.1979 5.16043 54.5192 5.28528 54.7689 5.52554C55.2994 6.03728 55.5489 7.10666 55.5103 8.70482H51.7413ZM51.6856 9.28187H58.2845V9.25433C58.2658 7.68869 57.8094 6.47085 56.9294 5.63466C56.1686 4.91203 55.0423 4.51439 53.8593 4.51439H53.8329C53.2189 4.51439 52.4658 4.66233 51.93 4.93039C51.32 5.21105 50.782 5.63072 50.3344 6.18154C49.6137 7.06889 49.1772 8.2681 49.071 9.61577C49.0676 9.65617 49.0647 9.69656 49.0618 9.73695C49.0589 9.77734 49.0571 9.81354 49.0552 9.8521C49.0515 9.92423 49.0486 9.99662 49.047 10.0693C49.0444 10.1857 49.0436 10.303 49.0457 10.421C49.1172 13.4733 50.7765 15.9127 53.7236 15.9127C56.3104 15.9127 57.8168 14.0336 58.1924 11.5114L58.0026 11.445C57.3427 12.8006 56.1576 13.6221 54.8087 13.5219C52.9673 13.385 51.5567 11.5297 51.6848 9.28239M65.7456 13.4183C65.5292 13.9284 65.0775 14.2091 64.4723 14.2091C63.867 14.2091 63.3138 13.7962 62.9207 13.0461C62.4984 12.2408 62.2761 11.1025 62.2761 9.754C62.2761 6.94744 63.1546 5.1321 64.5143 5.1321C65.0836 5.1321 65.5318 5.41276 65.7456 5.90246V13.4183ZM70.1231 15.419C69.3162 15.2294 68.9065 14.9469 68.9065 13.924V0.313477L64.004 1.74876V1.92449L64.0341 1.92213C64.7104 1.86784 65.1691 1.96069 65.4355 2.20515C65.644 2.39662 65.7456 2.69039 65.7456 3.10377V4.96974C65.2623 4.66312 64.6874 4.51387 63.9898 4.51387C62.5749 4.51387 61.2818 5.10587 60.3492 6.18102C59.3771 7.30154 58.8631 8.83282 58.8631 10.6088C58.8629 13.7808 60.4342 15.9127 62.7729 15.9127C64.141 15.9127 65.2417 15.1678 65.7456 13.9114V15.5979H70.1445V15.4232L70.1231 15.419ZM74.3277 2.16449C74.3277 1.17407 73.5762 0.42705 72.5793 0.42705C71.587 0.42705 70.8107 1.19033 70.8107 2.16449C70.8107 3.13866 71.5878 3.90194 72.5793 3.90194C73.5762 3.90194 74.3277 3.15492 74.3277 2.16449ZM75.4849 15.419C74.678 15.2294 74.2683 14.9469 74.2683 13.924H74.2649V4.54613L69.8658 5.80121V5.97171L69.8922 5.97407C70.844 6.05826 71.1045 6.38403 71.1045 7.48935V15.5979H75.5074V15.4232L75.4849 15.419ZM86.7573 15.419C85.9504 15.2294 85.5407 14.9469 85.5407 13.924V4.54613L81.3522 5.75977V5.93079L81.377 5.93341C82.1552 6.01472 82.3801 6.35912 82.3801 7.46941V13.3973C82.1206 13.9074 81.6339 14.2104 81.0442 14.2309C80.0879 14.2309 79.5613 13.589 79.5613 12.4236V4.54639L75.1621 5.80148V5.97171L75.1885 5.97407C76.1403 6.058 76.4011 6.38377 76.4011 7.48935V12.5063C76.3989 12.8565 76.4295 13.2062 76.4927 13.5507L76.5719 13.893C76.9444 15.2192 77.9202 15.9127 79.4491 15.9127C80.7441 15.9127 81.8791 15.1161 82.379 13.8697V15.6008H86.7782V15.4261L86.7573 15.419ZM103.847 15.5979V15.423L103.825 15.418C102.95 15.2173 102.609 14.8391 102.609 14.069V7.69C102.609 5.70102 101.485 4.51387 99.6016 4.51387C98.229 4.51387 97.0715 5.30207 96.626 6.52987C96.272 5.22889 95.2534 4.51387 93.7472 4.51387C92.4243 4.51387 91.3874 5.20764 90.9427 6.37958V4.54692L86.5435 5.75059V5.92213L86.5699 5.92449C87.5104 6.00738 87.7823 6.34259 87.7823 7.41958V15.5979H91.8868V15.4232L91.8652 15.418C91.1668 15.2549 90.9413 14.9574 90.9413 14.1941V6.88239C91.1261 6.45354 91.4986 5.94548 92.2347 5.94548C93.1491 5.94548 93.6126 6.57499 93.6126 7.81512V15.5979H97.7182V15.4232L97.6966 15.418C96.9981 15.2549 96.7727 14.9574 96.7727 14.1941V7.68921C96.7745 7.44599 96.7551 7.20307 96.7147 6.96318C96.9105 6.49708 97.3043 5.94548 98.0706 5.94548C98.9979 5.94548 99.4485 6.55689 99.4485 7.81512V15.5979H103.847Z" fill="#D1D5DB"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_3000_1867">
                              <rect width="104" height="16" fill="white" transform="translate(0 0.174805)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-[#121212] box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="right" data-node-id="3000:1872">
                  <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] w-full" data-node-id="3000:1873">
                    <p className="leading-[normal]">Quick Messages</p>
                  </div>
                  <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-node-id="3000:1874">
                    <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 w-full" data-node-id="3000:1875">
                      <p className="leading-[22px]">Your email</p>
                    </div>
                    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-2 relative rounded-[12px] shrink-0 w-full" data-name="input box" data-node-id="3000:1876">
                      <div aria-hidden="true" className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="basis-0 font-didact-gothic grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-300 bg-transparent border-none outline-none placeholder-gray-600"
                      />
                    </div>
                    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-node-id="3000:1878">
                      <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 w-full" data-node-id="3000:1879">
                        <p className="leading-[22px]">Message</p>
                      </div>
                      <div className="bg-[#1f1f1f] box-border content-stretch flex gap-2.5 h-[60px] items-start justify-center px-3 py-2 relative rounded-[12px] shrink-0 w-full" data-name="input box" data-node-id="3000:1880">
                        <div aria-hidden="true" className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project"
                          rows={3}
                          className="basis-0 font-didact-gothic grow min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-300 bg-transparent border-none outline-none placeholder-gray-600 resize-none leading-relaxed"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#e6ff02] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-2 relative rounded-[999px] shrink-0 w-full mt-2" data-name="button" data-node-id="3000:1882"
                    >
                      <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap" data-node-id="3000:1883">
                        <p className="leading-[22px] whitespace-pre">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </p>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full" data-name="container" data-node-id="3000:1884">
                <div className="bg-[#252525] box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-[99px] shrink-0" data-name="container" data-node-id="3000:1885">
                  <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[99px]" />
                  <div className="relative shrink-0 size-1.5" data-node-id="3000:1886">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-didact-gothic font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-nowrap" data-node-id="3000:1887">
                    <p className="leading-[22px] whitespace-pre">Available for new projects</p>
                  </div>
                </div>
              </div>
              
              {/* Footer Attribution */}
              <div className="w-full flex justify-center">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigateToProject={onNavigateToProject}
        onNavigateToAbout={onNavigateToAbout}
      />
    </div>
  );
}
