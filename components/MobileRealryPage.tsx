'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { MediaPlayer } from './InteractiveHome';
import MobileMenu from './MobileMenu';
import { Separator } from './ui/separator';
import Footer from './Footer';

const imgLogo = '/images/logo.png';
const imgMenuIcon = '/images/menu-icon.png';
const imgRealryThumbnail = '/images/realry/thumbnail.png';
const imgOldLandingPage = '/images/realry/old-ui/landing-page.png';
const imgOldSearch = '/images/realry/old-ui/search.png';
const imgOldCategoryNav = '/images/realry/old-ui/category-nav.png';
const imgOldPriceComparison = '/images/realry/old-ui/price-comparison.png';
const imgHomepageBefore = '/images/realry/solution/homepage-before.png';
const imgHomepageAfter = '/images/realry/solution/homepage-after.png';
const imgHomepageBrands = '/images/realry/solution/homepage-brand.png';
const imgSearchBefore = '/images/realry/solution/search-before.png';
const imgSearchAfter = '/images/realry/solution/search-after.png';
const imgMenuBefore = '/images/realry/solution/menu-before.png';
const imgMenuAfter = '/images/realry/solution/menu-after.png';
const imgPriceBefore = '/images/realry/solution/price-before.png';
const imgPriceAfter = '/images/realry/solution/price-after.png';

interface MobileRealryPageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

export default function MobileRealryPage({
  onBack,
  onNavigateToProject,
}: MobileRealryPageProps) {
  const mediaPlayerRef = useRef<{ playRealryAudio: () => void; playAirframeAudio: () => void; playEatsyAudio: () => void; playBrainBoxAudio: () => void; playShelfLifeAudio: () => void; pauseAudio: () => void }>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleMediaStateChange = (event: CustomEvent) => {
      setIsPlaying(event.detail?.isPlaying ?? false);
    };
    window.addEventListener('mediaStateChange', handleMediaStateChange as EventListener);
    return () => window.removeEventListener('mediaStateChange', handleMediaStateChange as EventListener);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      mediaPlayerRef.current?.pauseAudio();
      setIsPlaying(false);
    } else {
      mediaPlayerRef.current?.playRealryAudio();
      setIsPlaying(true);
    }
  };

  const handleImageClick = (image: string) => {
    setZoomedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage('');
  };

  return (
    <div className="bg-black relative size-full min-h-screen mobile-container flex flex-col" data-name="mobile/realry">
      {/* Fixed top nav bar - same as mobile home */}
      <div className="fixed bg-black box-border content-stretch flex items-center justify-between left-0 p-[16px] right-0 top-0 z-50 mobile-header">
        <button type="button" onClick={onBack} className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0" aria-label="Back to home">
          <img src={imgLogo} alt="Hailey Hsu Logo" className="block max-w-none size-9 rounded-[999px]" />
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-[132px]">
            <div className="font-didact-gothic leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] w-full">
              <p className="leading-[normal]">Hailey Hsu</p>
            </div>
          </div>
        </button>
        <button type="button" onClick={() => setIsMenuOpen(true)} className="block w-[31.5px] h-[31.5px] cursor-pointer hover:opacity-80 transition-opacity duration-200" aria-label="Open menu">
          <img src={imgMenuIcon} alt="Menu" className="block max-w-none w-full h-full" />
        </button>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigateToProject={onNavigateToProject}
        onBackToHome={onBack}
      />
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pt-[72px]">
      {/* Hero */}
      <div style={{ background: 'linear-gradient(179deg, #626BD9 -37.41%, #343973 41.39%)' }}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => onBack?.()}
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Back to home"
            >
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" />
                <path d="M18 20L14 24L18 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 24H34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a href="https://realry.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-gray-300 text-neutral-900 px-3 py-1.5 rounded-full text-xs font-medium">
              <ExternalLink className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              Website
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="w-full aspect-square max-w-[200px] bg-cover bg-center rounded-lg bg-neutral-800 cursor-pointer"
              style={{ backgroundImage: `url('${imgRealryThumbnail}')` }}
              onClick={() => handleImageClick(imgRealryThumbnail)}
            />
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full text-[13px] text-gray-300" style={{ fontFamily: 'var(--font-oregano)' }}>
                  Smart Shopping
                </span>
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full text-[13px] text-gray-300" style={{ fontFamily: 'var(--font-oregano)' }}>
                  1.2M MAU
                </span>
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full text-[13px] text-gray-300" style={{ fontFamily: 'var(--font-oregano)' }}>
                  Web + iOS
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Reshaping Shopping Experience</h1>
              <p className="text-gray-300 text-sm">Helping users shop more efficiently across the web</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex flex-col gap-3 min-w-0">
            <div>
              <div className="text-[#f4915c] text-xs mb-0.5">Duration</div>
              <div className="text-gray-300 text-sm">6 weeks</div>
            </div>
            <div>
              <div className="text-[#f4915c] text-xs mb-0.5">Role</div>
              <div className="text-gray-300 text-sm">Product Designer</div>
            </div>
            <div>
              <div className="text-[#f4915c] text-xs mb-0.5">Collaborators</div>
              <div className="text-gray-300 text-sm">PM/CEO, 2 Frontend Dev, CTO, Backend Dev, iOS Dev, Data Scientist</div>
            </div>
          </div>
          <motion.button
            type="button"
            onClick={toggleAudio}
            className="flex-shrink-0 transition-transform duration-200 hover:scale-105"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="white"/>
                <path d="M31.5002 17.75H28.7502C28.2439 17.75 27.8335 18.1604 27.8335 18.6667V33.3333C27.8335 33.8396 28.2439 34.25 28.7502 34.25H31.5002C32.0064 34.25 32.4168 33.8396 32.4168 33.3333V18.6667C32.4168 18.1604 32.0064 17.75 31.5002 17.75Z" fill="#121212"/>
                <path d="M23.2502 17.75H20.5002C19.9939 17.75 19.5835 18.1604 19.5835 18.6667V33.3333C19.5835 33.8396 19.9939 34.25 20.5002 34.25H23.2502C23.7564 34.25 24.1668 33.8396 24.1668 33.3333V18.6667C24.1668 18.1604 23.7564 17.75 23.2502 17.75Z" fill="#121212"/>
              </svg>
            ) : (
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="white"/>
                <path d="M19.8887 19.7782C19.8886 19.4654 19.971 19.1581 20.1277 18.8874C20.2843 18.6167 20.5096 18.392 20.7808 18.2362C21.0521 18.0804 21.3596 17.9989 21.6724 18C21.9852 18.0011 22.2921 18.0846 22.5623 18.2423L33.2256 24.4623C33.4947 24.6185 33.7181 24.8425 33.8735 25.1121C34.0289 25.3816 34.1108 25.6872 34.1111 25.9983C34.1113 26.3095 34.0299 26.6152 33.875 26.885C33.7201 27.1549 33.4971 27.3793 33.2282 27.5359L22.5623 33.7577C22.2921 33.9154 21.9852 33.9989 21.6724 34C21.3596 34.0011 21.0521 33.9196 20.7808 33.7638C20.5096 33.608 20.2843 33.3833 20.1277 33.1126C19.971 32.8419 19.8886 32.5346 19.8887 32.2218V19.7782Z" fill="#0A0A0A"/>
              </svg>
            )}
          </motion.button>
        </div>

        <Separator className="bg-[#252525] my-6" />

        {/* Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
          <div className="text-sm text-gray-300 leading-relaxed">
            <p className="mb-3">
              Realry is a smart shopping platform that helps users find the best deals by aggregating prices across the web. With <span className="text-white font-medium">1.2 million monthly active users</span>, the platform acts as a price comparison engine that saves shoppers time and money.
            </p>
            <p>
              My focus was improving the navigation and overall user experience to increase conversion.
            </p>
          </div>
        </div>

        {/* The Problems */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">The Problems</h2>
          <p className="text-sm text-gray-300 mb-4">
            Through discovery research and analytics audit, I identified four critical UX issues:
          </p>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
              <div className="text-[#f4915c] text-xs font-medium mb-1">PROBLEM 1</div>
              <h3 className="text-base font-bold text-white mb-2">Landing Page Layout</h3>
              <p className="text-gray-400 text-sm mb-3">
                Users abandoned before engaging with products due to unclear value proposition and poor hierarchy.
              </p>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgOldLandingPage}')` }}
                onClick={() => handleImageClick(imgOldLandingPage)}
              />
            </div>

            {/* Problem 2 */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
              <div className="text-[#f4915c] text-xs font-medium mb-1">PROBLEM 2</div>
              <h3 className="text-base font-bold text-white mb-2">Unintuitive Search</h3>
              <p className="text-gray-400 text-sm mb-3">
                Users dropped off during search due to forced AI activation disrupting their shopping flow.
              </p>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgOldSearch}')` }}
                onClick={() => handleImageClick(imgOldSearch)}
              />
            </div>

            {/* Problem 3 */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
              <div className="text-[#f4915c] text-xs font-medium mb-1">PROBLEM 3</div>
              <h3 className="text-base font-bold text-white mb-2">Category Navigation</h3>
              <p className="text-gray-400 text-sm mb-3">
                Users couldn&apos;t find products through browsing due to confusing category structure.
              </p>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgOldCategoryNav}')` }}
                onClick={() => handleImageClick(imgOldCategoryNav)}
              />
            </div>

            {/* Problem 4 */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
              <div className="text-[#f4915c] text-xs font-medium mb-1">PROBLEM 4</div>
              <h3 className="text-base font-bold text-white mb-2">Price Comparison Unclear</h3>
              <p className="text-gray-400 text-sm mb-3">
                The main price comparison feature was buried, undermining the platform&apos;s core value.
              </p>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgOldPriceComparison}')` }}
                onClick={() => handleImageClick(imgOldPriceComparison)}
              />
            </div>
          </div>
        </div>

        {/* Constraints */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Constraints</h2>
          <div className="space-y-3">
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="text-base font-bold text-white mb-1">Timeline Pressure</h3>
              <p className="text-gray-400 text-sm">6 weeks to redesign for investment pitch deadline.</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="text-base font-bold text-white mb-1">Multi-Platform</h3>
              <p className="text-gray-400 text-sm">Web and iOS simultaneously. 50/50 device split.</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
              <div className="text-2xl mb-2">🧩</div>
              <h3 className="text-base font-bold text-white mb-1">Design System</h3>
              <p className="text-gray-400 text-sm">Reusable components for consistency across platforms.</p>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Design Process</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-10 h-10 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">1</div>
              <h3 className="text-base font-bold text-white mb-1">Discovery</h3>
              <p className="text-gray-400 text-sm">Analytics review</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">2</div>
              <h3 className="text-base font-bold text-white mb-1">Competitive</h3>
              <p className="text-gray-400 text-sm">Honey, ShopBack</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">3</div>
              <h3 className="text-base font-bold text-white mb-1">Exploration</h3>
              <p className="text-gray-400 text-sm">Daily syncs w/ CEO</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">4</div>
              <h3 className="text-base font-bold text-white mb-1">System</h3>
              <p className="text-gray-400 text-sm">IBM Carbon base</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">5</div>
              <h3 className="text-base font-bold text-white mb-1">Handoff</h3>
              <p className="text-gray-400 text-sm">Dev collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">6</div>
              <h3 className="text-base font-bold text-white mb-1">A/B Test</h3>
              <p className="text-gray-400 text-sm">Iteration</p>
            </div>
          </div>
        </div>

        <Separator className="bg-[#252525] my-6" />

        {/* Solutions Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#e6ff02]">Solutions</h2>
        </div>

        {/* Solution 1 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-3">Redesigned Homepage Hierarchy</h3>
          <p className="text-sm text-gray-300 mb-4">
            Moved AI feature to floating animation. Created themed collections (Popular Items, Trending Now, Top Deals) vs. single list.
          </p>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-500 mb-1">Before</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgHomepageBefore}')` }}
                onClick={() => handleImageClick(imgHomepageBefore)}
              />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">After</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgHomepageAfter}')` }}
                onClick={() => handleImageClick(imgHomepageAfter)}
              />
            </div>
          </div>
          <div
            className="mt-4 w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url('${imgHomepageBrands}')` }}
            onClick={() => handleImageClick(imgHomepageBrands)}
          />
        </div>

        {/* Solution 2 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-3">Decoupled Search from AI</h3>
          <p className="text-sm text-gray-300 mb-4">
            Users can now search without triggering unwanted AI conversations. Persistent search with dropdown suggestions.
          </p>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-500 mb-1">Before</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgSearchBefore}')` }}
                onClick={() => handleImageClick(imgSearchBefore)}
              />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">After</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgSearchAfter}')` }}
                onClick={() => handleImageClick(imgSearchAfter)}
              />
            </div>
          </div>
        </div>

        {/* Solution 3 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-3">Persistent Menu with Clear Hierarchy</h3>
          <p className="text-sm text-gray-300 mb-4">
            Replaced horizontal buttons with overlay menu. Added Stores Directory alongside product categories.
          </p>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-500 mb-1">Before</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgMenuBefore}')` }}
                onClick={() => handleImageClick(imgMenuBefore)}
              />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">After</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgMenuAfter}')` }}
                onClick={() => handleImageClick(imgMenuAfter)}
              />
            </div>
          </div>
        </div>

        {/* Solution 4 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-3">Transparent Price Insights</h3>
          <p className="text-sm text-gray-300 mb-4">
            Clear &quot;Best Price&quot; badges. Reframed from &quot;don&apos;t purchase&quot; to informative insights like &quot;Price higher/lower than average.&quot;
          </p>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-500 mb-1">Before</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgPriceBefore}')` }}
                onClick={() => handleImageClick(imgPriceBefore)}
              />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">After</div>
              <div
                className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${imgPriceAfter}')` }}
                onClick={() => handleImageClick(imgPriceAfter)}
              />
            </div>
          </div>
        </div>

        <Separator className="bg-[#252525] my-6" />

        {/* Results */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#e6ff02]">Results</h2>
            <p className="text-gray-400 text-sm mt-1">A/B testing over 3 weeks</p>
          </div>

          {/* Revenue Highlight */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#252525] rounded-xl p-6 text-center mb-4 border border-[#333]">
            <div className="text-4xl font-bold text-[#e6ff02] mb-1">+17%</div>
            <div className="text-base text-white">Revenue Increase</div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1a1a1a] rounded-xl p-4 text-center border border-[#252525]">
              <div className="text-xl font-bold text-green-400 mb-1">+23%</div>
              <div className="text-xs text-gray-400">Click-out Rate</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 text-center border border-[#252525]">
              <div className="text-xl font-bold text-green-400 mb-1">+39%</div>
              <div className="text-xs text-gray-400">Search → Product</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 text-center border border-[#252525]">
              <div className="text-xl font-bold text-green-400 mb-1">+50%</div>
              <div className="text-xs text-gray-400">Home → Product</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 text-center border border-[#252525]">
              <div className="text-xl font-bold text-green-400 mb-1">+28%</div>
              <div className="text-xs text-gray-400">Product → Partner</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 text-center border border-[#252525]">
              <div className="text-xl font-bold text-red-400 mb-1">-10%</div>
              <div className="text-xs text-gray-400">Bounce Rate</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 text-center border border-[#252525]">
              <div className="text-xl font-bold text-red-400 mb-1">-18%</div>
              <div className="text-xs text-gray-400">Drop Rate</div>
            </div>
          </div>
        </div>

        <Separator className="bg-[#252525] my-6" />

        {/* What I Learned */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">What I Learned</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-1 bg-[#4A6FA5] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Efficiency &gt; Engagement</h3>
                <p className="text-gray-400 text-sm">
                  Session duration dropped 15%, but for an aggregator, less time on site means we helped users find what they want faster.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-[#4A6FA5] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Avoid Over-Engineering</h3>
                <p className="text-gray-400 text-sm">
                  Less than 4% of users touched my complex Advanced Filter. Most only used &quot;Sort by Price.&quot; Validate with MVP first.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1 bg-[#4A6FA5] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Solve the &quot;Dead End&quot;</h3>
                <p className="text-gray-400 text-sm">
                  High &quot;Bounce Back&quot; rate showed users clicking out but returning within 5 seconds. Need real-time inventory sync.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      </div>

      {/* Audio Player - Bottom bar */}
      <div className="flex-shrink-0 bg-neutral-950 w-full" style={{ height: '74px' }}>
        <MediaPlayer ref={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.img
              src={zoomedImage}
              alt="Zoomed view"
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
