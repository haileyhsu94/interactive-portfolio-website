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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8L2 12L6 16" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H22" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#121212] text-[20px] text-nowrap" data-node-id="3005:2102">
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
              <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#121212] text-[20px] text-nowrap" data-node-id="3005:2106">
                <p className="leading-[normal] whitespace-pre">About</p>
              </div>
            </button>
          </div>

          {/* Separator */}
          <div className="h-[404px] relative shrink-0 w-5 flex justify-center" data-name="separator" data-node-id="3005:2108">
            <div className="w-px h-full bg-[#0A0A0A] opacity-100"></div>
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
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#252525] text-[14px] text-nowrap" data-node-id="3007:2345">
              <p className="leading-[22px] whitespace-pre">LinkedIn</p>
            </div>
            <div className="relative shrink-0 size-4" data-name="Frame" data-node-id="3007:2346">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1667 5.33301C12.2276 5.33301 13.245 5.75444 13.9952 6.50458C14.7453 7.25473 15.1667 8.27214 15.1667 9.33301V13.9997H12.5001V9.33301C12.5001 8.97939 12.3596 8.64025 12.1096 8.3902C11.8595 8.14015 11.5204 7.99967 11.1667 7.99967C10.8131 7.99967 10.474 8.14015 10.2239 8.3902C9.97389 8.64025 9.83341 8.97939 9.83341 9.33301V13.9997H7.16675V9.33301C7.16675 8.27214 7.58818 7.25473 8.33832 6.50458C9.08847 5.75444 10.1059 5.33301 11.1667 5.33301Z" stroke="#252525" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.49992 6H1.83325V14H4.49992V6Z" stroke="#252525" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.16659 3.99967C3.90296 3.99967 4.49992 3.40272 4.49992 2.66634C4.49992 1.92996 3.90296 1.33301 3.16659 1.33301C2.43021 1.33301 1.83325 1.92996 1.83325 2.66634C1.83325 3.40272 2.43021 3.99967 3.16659 3.99967Z" stroke="#252525" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
