"use client";

import { motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToProject?: (project: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavigateToProject }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 bg-[#ffffff]"
      data-name="menu" 
      data-node-id="3002:2084"
    >
      <div className="basis-0 content-stretch flex flex-col gap-11 grow items-center justify-start min-h-px min-w-px relative shrink-0 h-full" data-node-id="3005:2110">
        {/* Header with back button */}
        <div className="box-border content-stretch flex gap-[154px] items-center justify-start p-[16px] relative shrink-0 w-full" data-node-id="3002:2085">
          <button 
            onClick={onClose}
            className="box-border content-stretch cursor-pointer flex gap-2.5 items-center justify-start overflow-visible p-[8px] relative rounded-[6px] shrink-0 hover:bg-gray-100 transition-colors duration-200" 
            data-name="button" 
            data-node-id="3002:2092"
          >
            <div className="relative shrink-0 size-6" data-name="Frame" data-node-id="3005:2098">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </button>
        </div>

        {/* Menu Content */}
        <div className="content-stretch flex flex-col gap-[52px] items-center justify-start relative shrink-0 w-full" data-node-id="3005:2109">
          <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full" data-name="page" data-node-id="3005:2111">
            <button 
              onClick={() => {
                onClose();
                // Navigate to projects section
                const projectsSection = document.querySelector('[data-name="more"]');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-3 relative shrink-0 w-full hover:bg-gray-100 transition-colors duration-200" 
              data-name="button" 
              data-node-id="3005:2104"
            >
              <div className="font-['Didact_Gothic:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[20px] text-nowrap" data-node-id="3005:2102">
                <p className="leading-[normal] whitespace-pre">Projects</p>
              </div>
            </button>
            <button 
              onClick={() => {
                onClose();
                // Navigate to contact section
                const contactSection = document.querySelector('[data-name="contact"]');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-3 relative shrink-0 w-full hover:bg-gray-100 transition-colors duration-200" 
              data-name="button" 
              data-node-id="3005:2105"
            >
              <div className="font-['Didact_Gothic:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[20px] text-nowrap" data-node-id="3005:2106">
                <p className="leading-[normal] whitespace-pre">About</p>
              </div>
            </button>
          </div>

          {/* Separator */}
          <div className="h-[404px] relative shrink-0 w-5" data-name="separator" data-node-id="3005:2108">
            <div className="w-5 h-full bg-gray-300"></div>
          </div>

          {/* LinkedIn Link */}
          <a 
            href="https://linkedin.com/in/yu-hsuan-hsu"
            target="_blank"
            rel="noopener noreferrer"
            className="box-border content-stretch flex gap-2.5 items-center justify-end px-4 py-1.5 relative rounded-[999px] shrink-0 hover:bg-gray-100 transition-colors duration-200" 
            data-name="container" 
            data-node-id="3007:2344"
          >
            <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[999px]" />
            <div className="font-['Didact_Gothic:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] text-nowrap" data-node-id="3007:2345">
              <p className="leading-[22px] whitespace-pre">LinkedIn</p>
            </div>
            <div className="relative shrink-0 size-4" data-name="Frame" data-node-id="3007:2346">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" fill="currentColor" />
                <path d="M6.5 6.5h-2v6h2v-6zM5.5 5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" fill="white" />
                <path d="M10.5 6.5h-2v6h2v-6z" fill="white" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
