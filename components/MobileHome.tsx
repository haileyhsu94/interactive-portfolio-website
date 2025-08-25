"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import MobileMenu from './MobileMenu';

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

export default function MobileHome({ onNavigateToProject }: { onNavigateToProject?: (project: string) => void }) {
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
    <div className="bg-black !bg-black relative size-full min-h-screen" data-name="mobile/home" data-node-id="2997:1646">
      {/* Header */}
      <div className="absolute bg-black box-border content-stretch flex items-center justify-between left-0 p-[16px] right-0 top-0" data-node-id="3000:1702">
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
      <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-0 pb-0 pt-[80px] px-4 right-0 top-[72px] overflow-y-auto h-[calc(100vh-72px)]" data-node-id="3000:1756">
        {/* Hero Section */}
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start px-8 py-5 relative shrink-0 w-full" data-node-id="3000:1755">
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
              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1707">
                <p className="leading-[22px] whitespace-pre">Design Systems</p>
              </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1708">
              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1709">
                <p className="leading-[22px] whitespace-pre">User Research</p>
              </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1710">
              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1711">
                <p className="leading-[22px] whitespace-pre">Prototyping</p>
              </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1712">
              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1713">
                <p className="leading-[22px] whitespace-pre">A/B Testing</p>
              </div>
            </div>
            <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1714">
              <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1715">
                <p className="leading-[22px] whitespace-pre">Data Viz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-0 relative shrink-0 w-full" data-name="feature" data-node-id="3000:1717">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full" data-name="title" data-node-id="3000:1718">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-nowrap" data-node-id="3000:1719">
              <p className="leading-[normal] whitespace-pre">Featured Project</p>
            </div>
          </div>
          <div className="bg-[#121212] content-stretch flex flex-col gap-4 items-start justify-start relative rounded-[16px] shrink-0 w-full" data-name="container" data-node-id="3000:1721">
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
                    <p className="leading-[22px]">{`Delivered 100+ high-fidelity screens for buyer & vendor flows.`}</p>
                  </div>
                  <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full" data-name="tags" data-node-id="3000:1737">
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1738">
                      <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1739">
                        <p className="leading-[22px] whitespace-pre">$4M funding</p>
                      </div>
                    </div>
                    <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1742">
                      <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1743">
                        <p className="leading-[22px] whitespace-pre">AI Prototype</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-node-id="3000:1744">
                <button 
                  onClick={() => {
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
          </div>
        </div>

        {/* More Projects Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-0 relative shrink-0 w-full" data-name="more" data-node-id="3000:1757">
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
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1777">
                    <p className="leading-[22px] whitespace-pre">Cost Reduction</p>
                  </div>
                </div>
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1778">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1779">
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
                <p className="leading-[22px]">Conducted heatmap analysis and A/B testing to refine practice setup flow and dashboard layout. Led 4 designers to deliver 100+ screens, integrating AI tutor and performance reports.</p>
              </div>
              <div className="box-border content-start flex flex-wrap gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full" data-node-id="3000:1801">
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1802">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1803">
                    <p className="leading-[22px] whitespace-pre">Heatmap Analysis</p>
                  </div>
                </div>
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1804">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1805">
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
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1827">
                    <p className="leading-[22px] whitespace-pre">Dual Interface</p>
                  </div>
                </div>
                <div className="bg-[#333333] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0" data-node-id="3000:1828">
                  <div className="font-oregano leading-[0] not-italic relative shrink-0 text-[15px] text-gray-300 text-nowrap tracking-[0.15px]" data-node-id="3000:1829">
                    <p className="leading-[22px] whitespace-pre">Sustainability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-0 px-4 relative shrink-0 w-full" data-name="contact" data-node-id="3000:1836">
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
                      <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="3000:1863">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d="M16 8A6 6 0 0 0 4 8v6H2V8a8 8 0 0 1 16 0v6h-2V8z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                          <path d="M5 7.5H1.66667V17.5H5V7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                          <path d="M13.3333 7.5H10V17.5h3.3333V7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </div>
                      <div className="h-4 relative shrink-0 w-[104px]" data-name="medium_logo.svg" data-node-id="3000:1867">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 16">
                          <path d="M0 2h2v12H0V2zm4 0h2v12H4V2zm8 0h2v12h-2V2z" fill="currentColor" />
                        </svg>
                      </div>
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
                      className="bg-[#e6ff02] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-2 relative rounded-[999px] shrink-0 w-full" data-name="button" data-node-id="3000:1882"
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
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigateToProject={onNavigateToProject}
      />
    </div>
  );
}
