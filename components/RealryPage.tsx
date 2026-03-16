'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Sidebar } from './InteractiveHome';
import { Separator } from './ui/separator';
import Footer from './Footer';

const imgRealryThumbnail = '/images/realry/hero/thumbnail.png';
const imgOldLandingPage = '/images/realry/old-ui/landing-page.png';
const imgOldSearch = '/images/realry/old-ui/search.png';
const imgOldCategoryNav = '/images/realry/old-ui/category-nav.png';
const imgOldPriceComparison = '/images/realry/old-ui/price-comparison.png';
const imgHomepageBefore = '/images/realry/solutions/homepage-before.png';
const imgHomepageAfter = '/images/realry/solutions/homepage-after.png';
const imgHomepageBrands = '/images/realry/solutions/homepage-brands.png';
const imgSearchBefore = '/images/realry/solutions/search-before.png';
const imgSearchAfter = '/images/realry/solutions/search-after.png';
const imgMenuBefore = '/images/realry/solutions/menu-before.png';
const imgMenuAfter = '/images/realry/solutions/menu-after.png';
const imgStoresDirectory = '/images/realry/solutions/stores-directory.png';
const imgPriceBefore = '/images/realry/solutions/price-before.png';
const imgPriceAfter = '/images/realry/solutions/price-after.png';

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

interface RealryPageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

export default function RealryPage({
  openProjects,
  onCloseProject,
  onNavigateToProject,
  onLogoClick,
}: RealryPageProps) {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'more' });
  const [zoomedImage, setZoomedImage] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNavigateToSection = (section: 'featured' | 'more' | 'contact') => {
    setNavigation({ activeSection: section });
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
    <div className="h-screen bg-neutral-950 text-white w-full overflow-hidden">
      <div
        className="box-border content-stretch flex flex-row gap-4 items-stretch justify-start p-[12px] relative w-full min-w-0 overflow-hidden"
        style={{ height: 'calc(100vh - 74px)', maxHeight: 'calc(100vh - 74px)' }}
      >
        {/* Sidebar */}
        <div className="hidden lg:block w-[200px] flex-shrink-0 h-full">
          <Sidebar
            navigation={navigation}
            onNavigateToSection={handleNavigateToSection}
            openProjects={openProjects}
            currentProjectId="realry"
            onCloseProject={onCloseProject}
            onNavigateToProject={onNavigateToProject}
            isProjectPage={true}
            onLogoClick={onLogoClick}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 flex flex-col relative rounded-xl overflow-hidden h-full">
          <div
            aria-hidden="true"
            className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
          />

          <div
            className="flex-1 overflow-y-auto scrollbar-thin h-full"
            style={{ maxHeight: 'calc(100vh - 74px - 24px)' }}
          >
            {/* Hero */}
            <div style={{ background: 'linear-gradient(179deg, #4A6FA5 -37.41%, #1E3A5F 41.39%)' }}>
              <div className="p-7">
                <div className="flex items-center justify-between mb-5">
                  <a href="/" className="w-12 h-12 flex items-center justify-center" aria-label="Back to home">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" />
                      <path d="M18 20L14 24L18 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 24H34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="https://realry.com" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gray-300 text-neutral-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors">
                      Visit Website
                    </div>
                  </a>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 items-start h-full">
                  <div
                    className="w-60 h-60 bg-cover bg-center rounded-lg flex-shrink-0 bg-neutral-800 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundImage: `url('${imgRealryThumbnail}')` }}
                    onClick={() => handleImageClick(imgRealryThumbnail)}
                  />
                  <div className="flex-1 pb-3 min-w-0 flex flex-col justify-start">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.div
                        className="bg-[#2a2a2a] box-border flex items-center justify-center px-3 py-1 rounded-[999px] hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="font-normal text-[17px] text-gray-300 tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          Smart Shopping
                        </span>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border flex items-center justify-center px-3 py-1 rounded-[999px] hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="font-normal text-[17px] text-gray-300 tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          1.2M MAU
                        </span>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border flex items-center justify-center px-3 py-1 rounded-[999px] hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="font-normal text-[17px] text-gray-300 tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          Web + iOS
                        </span>
                      </motion.div>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">Reshaping Shopping Experience</h1>
                    <p className="text-xl text-gray-300">
                      Helping users shop more efficiently across the web
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-7">
              <div className="hidden lg:flex flex-col sm:flex-row gap-5 items-center">
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Duration</div>
                  <div className="text-gray-300">6 weeks</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Role</div>
                  <div className="text-gray-300">Product Designer</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Collaborators</div>
                  <div className="text-gray-300">PM/CEO, 2 Frontend Dev, CTO, Backend Dev, iOS Dev, Data Scientist</div>
                </div>
              </div>

              {/* Mobile Details */}
              <div className="lg:hidden flex flex-col gap-4">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="text-[#f4915c] text-sm mb-1">Duration</div>
                      <div className="text-gray-300">6 weeks</div>
                    </div>
                    <div>
                      <div className="text-[#f4915c] text-sm mb-1">Role</div>
                      <div className="text-gray-300">Product Designer</div>
                    </div>
                    <div>
                      <div className="text-[#f4915c] text-sm mb-1">Collaborators</div>
                      <div className="text-gray-300">PM/CEO, 2 Frontend Dev, CTO, Backend Dev, iOS Dev, Data Scientist</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="p-7">
              <div className="w-full h-px bg-[#252525] mb-6"></div>
            </div>

            {/* Main Content */}
            <div className="px-6 md:px-12 lg:px-24 pb-10">
              {/* Overview */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                <div className="text-lg text-gray-300 leading-[1.6]">
                  <p className="mb-4">
                    Realry is a smart shopping platform that helps users find the best deals by aggregating prices across the web. With <span className="text-white font-medium">1.2 million monthly active users</span>, the platform acts as a price comparison engine that saves shoppers time and money.
                  </p>
                  <p>
                    My focus was improving the navigation and overall user experience to increase conversion. In this case study, I&apos;ll walk through the problem space, my research process, the design solutions I created, and the impact on business metrics and user behavior.
                  </p>
                </div>
              </div>

              {/* The Problems */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">The Problems</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Through discovery research and analytics audit, I identified four critical UX issues causing user drop-off:
                </p>

                {/* Problem Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Problem 1 */}
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#252525]">
                    <div className="text-[#f4915c] text-sm font-medium mb-2">PROBLEM 1</div>
                    <h3 className="text-xl font-bold mb-3">Landing Page Layout</h3>
                    <p className="text-gray-400 mb-4">
                      Users were abandoning the platform before engaging with products due to unclear value proposition and poor information hierarchy.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Unclear hero section: AI feature dominated but lacked clear description</li>
                      <li>• Misplaced content: AI blog appeared before products</li>
                      <li>• Buried products: Core shopping experience hidden below the fold</li>
                    </ul>
                    <div
                      className="mt-4 w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgOldLandingPage}')` }}
                      onClick={() => handleImageClick(imgOldLandingPage)}
                    />
                  </div>

                  {/* Problem 2 */}
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#252525]">
                    <div className="text-[#f4915c] text-sm font-medium mb-2">PROBLEM 2</div>
                    <h3 className="text-xl font-bold mb-3">Unintuitive Search</h3>
                    <p className="text-gray-400 mb-4">
                      Users were dropping off during search due to forced AI activation, disrupting their shopping flow and causing confusion.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• AI and search bar combined into one interface</li>
                      <li>• Search keywords triggered AI conversation instead of results</li>
                      <li>• Search bar disappeared after exiting AI</li>
                    </ul>
                    <div
                      className="mt-4 w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgOldSearch}')` }}
                      onClick={() => handleImageClick(imgOldSearch)}
                    />
                  </div>

                  {/* Problem 3 */}
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#252525]">
                    <div className="text-[#f4915c] text-sm font-medium mb-2">PROBLEM 3</div>
                    <h3 className="text-xl font-bold mb-3">Category Navigation</h3>
                    <p className="text-gray-400 mb-4">
                      Users couldn&apos;t find products through browsing due to confusing, non-standard category structure that led to dead ends.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Categories appeared as horizontal buttons (looked like tags)</li>
                      <li>• Sub-category pages looked like product listings</li>
                      <li>• &quot;Back&quot; button returned to homepage, not parent category</li>
                    </ul>
                    <div
                      className="mt-4 w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgOldCategoryNav}')` }}
                      onClick={() => handleImageClick(imgOldCategoryNav)}
                    />
                  </div>

                  {/* Problem 4 */}
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#252525]">
                    <div className="text-[#f4915c] text-sm font-medium mb-2">PROBLEM 4</div>
                    <h3 className="text-xl font-bold mb-3">Price Comparison Unclear</h3>
                    <p className="text-gray-400 mb-4">
                      The main price comparison feature was buried and invisible to users, undermining the platform&apos;s core value.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• &quot;Do not purchase&quot; recommendation blocked conversions</li>
                      <li>• Related products pulled users out of conversion path</li>
                      <li>• Price insights hidden, requiring user exploration</li>
                    </ul>
                    <div
                      className="mt-4 w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgOldPriceComparison}')` }}
                      onClick={() => handleImageClick(imgOldPriceComparison)}
                    />
                  </div>
                </div>
              </div>

              {/* Constraints */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Constraints</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#252525]">
                    <div className="text-3xl mb-3">⏱️</div>
                    <h3 className="text-lg font-bold mb-2">Timeline Pressure</h3>
                    <p className="text-gray-400 text-sm">
                      6 weeks to redesign the entire platform, driven by an upcoming investment pitch deadline.
                    </p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#252525]">
                    <div className="text-3xl mb-3">📱</div>
                    <h3 className="text-lg font-bold mb-2">Multi-Platform</h3>
                    <p className="text-gray-400 text-sm">
                      Needed to design both web and iOS app simultaneously. Device distribution was split 50/50.
                    </p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#252525]">
                    <div className="text-3xl mb-3">🧩</div>
                    <h3 className="text-lg font-bold mb-2">Design System</h3>
                    <p className="text-gray-400 text-sm">
                      Had to create reusable components from the start to ensure consistency across web and mobile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Design Process */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Design Process</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                    <div className="text-sm font-medium">Discovery & Audit</div>
                    <div className="text-xs text-gray-500 mt-1">Analytics review</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                    <div className="text-sm font-medium">Competitive Analysis</div>
                    <div className="text-xs text-gray-500 mt-1">Honey, ShopBack</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                    <div className="text-sm font-medium">Design Exploration</div>
                    <div className="text-xs text-gray-500 mt-1">Daily syncs w/ CEO</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
                    <div className="text-sm font-medium">Design System</div>
                    <div className="text-xs text-gray-500 mt-1">IBM Carbon base</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">5</div>
                    <div className="text-sm font-medium">Handoff</div>
                    <div className="text-xs text-gray-500 mt-1">Dev collaboration</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#4A6FA5] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">6</div>
                    <div className="text-sm font-medium">A/B Testing</div>
                    <div className="text-xs text-gray-500 mt-1">Iteration</div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-[#252525] mb-16"></div>

              {/* Solutions Section */}
              <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-[#e6ff02]">Solutions</h2>
              </div>

              {/* Solution 1: Redesigned Homepage */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="7" height="9" x="3" y="3" rx="1"/>
                      <rect width="7" height="5" x="14" y="3" rx="1"/>
                      <rect width="7" height="9" x="14" y="12" rx="1"/>
                      <rect width="7" height="5" x="3" y="16" rx="1"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Redesigned Homepage Hierarchy</h3>
                </div>
                <div className="text-lg text-gray-300 mb-6">
                  <p className="mb-4">
                    Moved AI feature from hero to floating animation (fixed bottom-right) to maximize partner exposure and grab attention without blocking content.
                  </p>
                  <p>
                    Created themed collections (Popular Items, Not Sure Where to Start, Trending Now, Top Deals) vs. single &quot;Top Sales&quot; list—diversifying entry points for different user intents.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Before</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgHomepageBefore}')` }}
                      onClick={() => handleImageClick(imgHomepageBefore)}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">After</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgHomepageAfter}')` }}
                      onClick={() => handleImageClick(imgHomepageAfter)}
                    />
                  </div>
                </div>
                <div className="text-lg text-gray-300 mb-4">
                  <p className="font-medium text-white mb-2">Enhanced Brand Visibility</p>
                  <p>Replaced single-product brand displays with bento box layout showcasing multiple brands with bigger space simultaneously.</p>
                </div>
                <div
                  className="w-full max-w-2xl mx-auto aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url('${imgHomepageBrands}')` }}
                  onClick={() => handleImageClick(imgHomepageBrands)}
                />
              </div>

              {/* Solution 2: Decoupled Search */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.3-4.3"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Decoupled Search from AI</h3>
                </div>
                <div className="text-lg text-gray-300 mb-6">
                  <p className="mb-4">
                    Decoupled search input from AI chat interface: users can now search for products without triggering unwanted AI conversations.
                  </p>
                  <p>
                    Created persistent search with dropdown suggestions that include product previews and store recommendations—turning a friction point into a revenue opportunity.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Before</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgSearchBefore}')` }}
                      onClick={() => handleImageClick(imgSearchBefore)}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">After</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgSearchAfter}')` }}
                      onClick={() => handleImageClick(imgSearchAfter)}
                    />
                  </div>
                </div>
              </div>

              {/* Solution 3: Persistent Menu */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" x2="20" y1="12" y2="12"/>
                      <line x1="4" x2="20" y1="6" y2="6"/>
                      <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Persistent Menu with Clear Hierarchy</h3>
                </div>
                <div className="text-lg text-gray-300 mb-6">
                  <p className="mb-4">
                    Replaced ambiguous horizontal buttons with a persistent top nav menu that opens an overlay, making it visually clear users are in a navigation menu, not clicking tags.
                  </p>
                  <p>
                    Added Stores Directory alongside product categories—giving users two ways to shop (by product type or by preferred store).
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Before</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgMenuBefore}')` }}
                      onClick={() => handleImageClick(imgMenuBefore)}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">After</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgMenuAfter}')` }}
                      onClick={() => handleImageClick(imgMenuAfter)}
                    />
                  </div>
                </div>
                <div
                  className="w-full max-w-2xl mx-auto aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url('${imgStoresDirectory}')` }}
                  onClick={() => handleImageClick(imgStoresDirectory)}
                />
              </div>

              {/* Solution 4: Transparent Price Insights */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6FF02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" x2="12" y1="2" y2="22"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Transparent Price Insights</h3>
                </div>
                <div className="text-lg text-gray-300 mb-6">
                  <p className="mb-4">
                    Elevated price comparison visibility with clear &quot;Best Price&quot; badges and list all the available options.
                  </p>
                  <p>
                    Reframed recommendations from prescriptive commands (&quot;don&apos;t purchase&quot;) to informative insights (&quot;Price higher than average&quot; / &quot;Price lower than average&quot;), empowering users to decide rather than blocking them.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Before</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgPriceBefore}')` }}
                      onClick={() => handleImageClick(imgPriceBefore)}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">After</div>
                    <div
                      className="w-full aspect-video bg-neutral-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${imgPriceAfter}')` }}
                      onClick={() => handleImageClick(imgPriceAfter)}
                    />
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-[#252525] mb-16"></div>

              {/* Results Section */}
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-[#e6ff02]">Results</h2>
                  <p className="text-gray-400 mt-2">A/B testing over 3 weeks</p>
                </div>

                {/* Revenue Highlight */}
                <div className="bg-gradient-to-r from-[#1a1a1a] to-[#252525] rounded-xl p-8 text-center mb-8 border border-[#333]">
                  <div className="text-5xl font-bold text-[#e6ff02] mb-2">+17%</div>
                  <div className="text-xl text-white">Revenue Increase</div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-[#252525]">
                    <div className="text-2xl font-bold text-green-400 mb-1">+23%</div>
                    <div className="text-sm text-gray-400">Partner Click-out Rate</div>
                    <div className="text-xs text-gray-500 mt-1">6.8% → 8.4%</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-[#252525]">
                    <div className="text-2xl font-bold text-green-400 mb-1">+39%</div>
                    <div className="text-sm text-gray-400">Search → Product CTR</div>
                    <div className="text-xs text-gray-500 mt-1">15.2% → 21.2%</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-[#252525]">
                    <div className="text-2xl font-bold text-green-400 mb-1">+50%</div>
                    <div className="text-sm text-gray-400">Home → Product CTR</div>
                    <div className="text-xs text-gray-500 mt-1">7.2% → 10.8%</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-[#252525]">
                    <div className="text-2xl font-bold text-green-400 mb-1">+28%</div>
                    <div className="text-sm text-gray-400">Product → Partner CTR</div>
                    <div className="text-xs text-gray-500 mt-1">12.4% → 15.9%</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-[#252525]">
                    <div className="text-2xl font-bold text-red-400 mb-1">-10%</div>
                    <div className="text-sm text-gray-400">Bounce Rate</div>
                    <div className="text-xs text-gray-500 mt-1">65.0% → 58.5%</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-[#252525]">
                    <div className="text-2xl font-bold text-red-400 mb-1">-18%</div>
                    <div className="text-sm text-gray-400">Landing Drop Rate</div>
                    <div className="text-xs text-gray-500 mt-1">68.5% → 56.2%</div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-[#252525] mb-16"></div>

              {/* What I Learned */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">What I Learned</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#4A6FA5] rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Efficiency &gt; Engagement</h3>
                      <p className="text-gray-400">
                        While click-out rate went up, average session duration actually dropped by 15%. For an aggregator, less time on site means we helped users find what they want faster. This is a success, not a failure.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#4A6FA5] rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Avoid Over-Engineering</h3>
                      <p className="text-gray-400">
                        I spent a lot of time designing a complex Advanced Filter (by material, sleeve length, etc.). However, heatmaps showed less than 4% of users touched it. Most users only used &quot;Sort by Price.&quot; Next time, I&apos;ll validate feature necessity with an MVP first.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#4A6FA5] rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Solve the &quot;Dead End&quot;</h3>
                      <p className="text-gray-400">
                        The new design drove more traffic to popular items (high click-out rate). However, we noticed a high &quot;Bounce Back&quot; rate—users clicking out but coming back within 5 seconds. High clicks mean nothing if items are out-of-stock. We need to sync real-time inventory to manage user expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
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
              <X size={32} />
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
