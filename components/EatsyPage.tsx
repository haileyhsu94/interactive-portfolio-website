'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Sidebar, MediaPlayer } from './InteractiveHome';
import { Card } from './ui/card';
import { Separator } from './ui/separator';

// Image assets from Figma
const imgAirframeThumbnail1 = "http://localhost:3845/assets/9e88f57f74aa86590627a682f5d048b7e3de6a19.png";
const imgImage38 = "http://localhost:3845/assets/ef248765b067a3fbc9513d754c33a459c4bb71fe.png";
const imgImage39 = "http://localhost:3845/assets/8a50a14cd01774dd310482963e1f9ddfc14ddcb4.png";
const imgImage40 = "http://localhost:3845/assets/3be4053c8f12d2cfeb3bf656425f9b4668cd85b3.png";
const imgImage41 = "http://localhost:3845/assets/3d514c74d4ddfd945fd7b361fb63ef77ca0832f4.png";
const imgImage43 = "http://localhost:3845/assets/80c9a78385920af65f217bea5369d1850e10388c.png";
const imgImage47 = "http://localhost:3845/assets/b295abc057b7185faf2d28710f6e6bd701342590.png";
const imgImage46 = "http://localhost:3845/assets/f2d2680189566750b7534ed6dc570059ffecc07b.png";
const imgImage48 = "http://localhost:3845/assets/03509389b9fbad1d7150cd90e676cd7870a04506.png";
const imgImage49 = "http://localhost:3845/assets/652c7b0cc6a049c70e93e8ac999f9f47c35c6ab0.png";
const imgImage53 = "http://localhost:3845/assets/c711a1e2a8fa95048211c1bdb1e1a9ca49a3ba52.png";
const imgImage52 = "http://localhost:3845/assets/91227c39842f610cb613cef432cac13adbbb190d.png";
const imgImage51 = "http://localhost:3845/assets/2fe490454f4d095f011e849bd40ca43b239f3934.png";
const imgEllipse44 = "http://localhost:3845/assets/30dc41d365bffe7653c865f46e4216d4ab6227c5.png";
const imgEllipse45 = "http://localhost:3845/assets/4f1540076712b0e8c7c9598d8167782d5c190366.png";
const imgEllipse46 = "http://localhost:3845/assets/31febe0d828f7d779ef70c9b4871d228f0aa2939.png";

interface NavigationState {
  activeSection: 'featured' | 'more' | 'contact';
}

interface EatsyPageProps {
  onBack?: () => void;
  openProjects?: { id: string; title: string }[];
  onCloseProject?: (projectId: string) => void;
  onNavigateToProject?: (projectId: string) => void;
  onLogoClick?: () => void;
}

export default function EatsyPage({ onBack, openProjects, onCloseProject, onNavigateToProject, onLogoClick }: EatsyPageProps) {
  const [navigation, setNavigation] = useState<NavigationState>({ activeSection: 'more' });
  const mediaPlayerRef = useRef<{ playAirframeAudio: () => void }>(null);

  const handleNavigateToSection = (section: 'featured' | 'more' | 'contact') => {
    setNavigation({ activeSection: section });
  };

  return (
    <div className="h-screen bg-neutral-950 text-white w-full overflow-hidden">
      <div className="box-border content-stretch flex flex-row gap-4 items-stretch justify-start p-[12px] relative w-full min-w-0" style={{ height: 'calc(100vh - 74px)' }}>
        {/* Sidebar */}
        <div className="w-[200px] flex-shrink-0 h-full">
          <Sidebar 
            navigation={navigation} 
            onNavigateToSection={handleNavigateToSection}
            openProjects={openProjects}
            currentProjectId="eatsy"
            onCloseProject={onCloseProject}
            onNavigateToProject={onNavigateToProject}
            isProjectPage={true}
            onLogoClick={onLogoClick}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 flex flex-col relative rounded-xl overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
          />

          {/* Scrollable Content Section */}
          <div className="flex-1 overflow-y-auto">
            {/* Gradient Section - Hero */}
            <div style={{ background: 'linear-gradient(179deg, #E26C6A -37.41%, #613C3D 41.39%)' }}>
              <div className="p-7">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <button 
                    onClick={onBack}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white"/>
                      <path d="M18 20L14 24L18 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 24H34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <a href="https://partners.eatsy.tech/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gray-300 px-4 py-2 rounded-full flex items-center gap-2">
                      <span className="text-gray-800 text-sm">Website</span>
                    </div>
                  </a>
                </div>

                {/* Project Header */}
                <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-end">
                  <div
                    className="w-full lg:w-60 h-60 bg-cover bg-center rounded-lg flex-shrink-0"
                    style={{ backgroundImage: `url('${imgAirframeThumbnail1}')` }}
                  />
                  <div className="flex-1 pb-3 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">12 months</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">Cost Reduction</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2a2a2a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0 hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap tracking-wide" style={{ fontFamily: 'var(--font-oregano)' }}>
                          <p className="block leading-[22px] whitespace-pre">Prototype Testing</p>
                        </div>
                      </motion.div>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">
                      Customizable Reservation Platform
                    </h1>
                    <p className="text-xl text-gray-300">
                      Built online reservation system to streamline operations and reduce staff workload by 40%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-7">
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Duration</div>
                  <div className="text-gray-300">Jan 2024 - Dec 2024</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Role</div>
                  <div className="text-gray-300">Product Designer</div>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div>
                  <div className="text-[#f4915c] text-sm mb-1">Collaborators</div>
                  <div className="text-gray-300">CEO, 1 Designer & 3 Engineers</div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="p-7">
              <div className="w-full h-px bg-[#252525] mb-6"></div>
            </div>

            {/* Main Content */}
            <div className="px-6 md:px-12 lg:px-24 pb-10">
              {/* Background & Challenges */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  Background & Challenges
                </h2>
                <div className="text-lg text-gray-300 leading-[1.5] max-w-none">
                  <p className="mb-4">
                    In Taiwan, three major platforms—<span className="underline">Inline</span>, <span className="underline">Eats365</span>, and <span className="underline">EZTABLE</span>—control nearly 90% of the online reservation market. For most restaurants, adopting a digital booking system means choosing one of these providers. However, their rigid pricing models and setup requirements often do not fit the realities of independent restaurants, whose limited budgets cannot absorb high monthly fees or minimum booking volumes.
                  </p>
                  <p>
                    At the same time, independent restaurants typically operate with lean teams. Without a reservation system, staff are forced to handle calls for bookings, modifications, and cancellations —an exhausting and inefficient process that stretches already scarce manpower. This combination of financial and operational strain highlights a gap in the market: a solution tailored to the unique needs of small restaurants.
                  </p>
                </div>
              </div>

              {/* My Contribution */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  My Contribution
                </h2>
                <ul className="text-lg text-gray-300 leading-[1.5] list-disc pl-6 space-y-2">
                  <li>Built key product features: real-time dashboard, business hours management, deposit booking, blacklist system, reservation notifications, customer preferences, booking rules and online ordering system</li>
                  <li>Redefined the brand&apos;s visual identity</li>
                  <li>Drove product iterations based on user interview insights</li>
                  <li>Collaborated closely with the CEO to align design with business goals</li>
                </ul>
              </div>

              {/* Goal */}
              <div className="text-center mb-16">
                <p className="text-xl text-gray-400 mb-2">GOAL</p>
                <h2 className="text-3xl font-bold leading-[1.5]">
                  A flexible reservation system that lowers costs and reduces the workload for independent restaurants.
                </h2>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Screenshots Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-[#e6ff02]">
                  Screenshots
                </h2>
              </div>

              {/* Redefining the Look and Feel */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 bg-[#e6ff02] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Redefining the Look and Feel
                  </h3>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  Previously, the blue color scheme had been criticized by customers as feeling dull and lifeless. In addition, due to the old layout design, much of the information could not be effectively presented.
                </p>
                
                <div className="flex gap-3 items-end justify-center mb-8">
                  <div 
                    className="h-[358px] w-[520px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${imgImage38}')` }}
                  />
                  <div 
                    className="h-[275px] w-[400px] rounded-lg bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${imgImage39}')` }}
                  />
                </div>

                <div className="text-lg text-gray-300">
                  <p className="mb-4">Key improvements include:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Shifting the main color from dark blue to a bright red, as research shows that red stimulates appetite and draws attention more effectively.</li>
                    <li>Moving the main navigation from the top to the left side, aligning with modern dashboard usage patterns.</li>
                    <li>Applying the primary color to buttons and notifications, helping users quickly identify actionable areas.</li>
                    <li>Adding icons to create a more lively and engaging interface.</li>
                  </ol>
                </div>
              </div>

              <div className="flex justify-center mb-16">
                <div 
                  className="h-[419px] w-[600px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage41}')` }}
                />
              </div>

              {/* Building Customized Reservation Features */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 bg-[#e6ff02] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Building Customized Reservation Features
                  </h3>
                </div>
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    To address the diverse needs of different users rather than forcing users to adapt to the system, we decided to make all reservation features fully customizable.
                  </p>
                  <p>
                    For example, users can define which customers are eligible to make reservations, set specific tables as available or unavailable for online booking depending on the time, configure reservation windows for particular time slots, and require deposits for bookings above a certain party size.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <div 
                  className="h-[419px] w-[600px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage43}')` }}
                />
              </div>

              <div className="flex gap-3 justify-center mb-8">
                <div 
                  className="h-[707px] w-[440px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage47}')` }}
                />
                <div 
                  className="h-[664px] w-[440px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage46}')` }}
                />
              </div>

              <div className="flex gap-3 justify-center mb-16">
                <div 
                  className="h-[477px] w-[440px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage48}')` }}
                />
                <div 
                  className="h-[404px] w-[440px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage49}')` }}
                />
              </div>

              {/* Reducing Transaction Fees */}
              <div className="mb-16">
                <div className="flex gap-2 items-center mb-6">
                  <div className="w-10 h-10 bg-[#e6ff02] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Reducing Transaction Fees for Independent Restaurants
                  </h3>
                </div>
                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">
                    Another major topic we addressed was the need for independent restaurants to avoid third-party payment processing fees.
                  </p>
                  <p className="mb-4">
                    To meet this demand, we developed a feature that allows restaurants to collect reservation deposits through direct bank transfers instead of using third-party payment gateways.
                  </p>
                </div>

                <div className="text-lg text-gray-300 mb-8">
                  <p>
                    Previously, restaurants needed to manually remind customers to pay their reservation deposits through messaging apps such as Facebook Messenger, Instagram, or Line.
                  </p>
                </div>

                <div className="flex gap-10 justify-center mb-8">
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">FB</span>
                  </div>
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">IG</span>
                  </div>
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">LI</span>
                  </div>
                </div>

                <div className="text-lg text-gray-300 mb-8">
                  <p>
                    This created an additional pain point: incomplete or missing transfer information from customers, making the reconciliation process challenging.
                  </p>
                </div>

                <div className="text-lg text-gray-300 mb-8">
                  <p className="mb-4">To solve this, we introduced:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>An automated deposit reminder system triggered immediately after a reservation is made.</li>
                    <li>Email notifications sent to customers to prompt deposit payment.</li>
                    <li>A standardized transfer confirmation form for customers to submit payment details.</li>
                    <li>Automatic forwarding of submitted information to the restaurant via platform notifications.</li>
                  </ol>
                </div>
              </div>

              <div className="flex gap-2.5 justify-center mb-16">
                <div 
                  className="h-[941px] w-[300px] rounded-2xl bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage53}')` }}
                />
                <div 
                  className="h-[1022px] w-[300px] rounded-2xl bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage52}')` }}
                />
                <div 
                  className="h-[710px] w-[300px] rounded-2xl bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${imgImage51}')` }}
                />
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* User Feedback Section */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-[#e6ff02]">
                  Positive User Feedback
                </h2>
              </div>

              {/* Feedback 1 */}
              <div className="mb-16">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img src={imgEllipse44} alt="Wakatake" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-oregano text-white mb-3">
                      A reservation system that truly fits the rhythm of a small business
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-4xl font-oregano text-white">Wakatake</h4>
                      <div className="w-7 h-7 bg-[#e6ff02] rounded-full flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    </div>
                    <div className="text-lg text-gray-400 leading-[1.5]">
                      <p className="mb-2">&ldquo;We used to work with a reservation system, but the fixed monthly fees were just too heavy.</p>
                      <p className="mb-2">For a small shop like ours—where guest volume is low and quality matters most—it simply wasn&apos;t a good fit.</p>
                      <p className="mb-2">Eatsy offers flexible pricing that aligns with our operating rhythm. We have full control over when and how reservations open, depending on our needs.</p>
                      <p className="mb-2">More importantly, it turns the booking process into part of the customer experience—visually appealing, easy to use, and refined in design.</p>
                      <p>We also feel that the team behind Eatsy genuinely wants to grow with small businesses. Even if you&apos;re not a big client, you won&apos;t be overlooked.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback 2 */}
              <div className="mb-16">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img src={imgEllipse45} alt="Yang Er Lou" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-oregano text-white mb-3">
                      Private kitchens without a reception area can smoothly welcome guests
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-4xl font-oregano text-white">Yang Er Lou</h4>
                      <div className="w-7 h-7 bg-[#e6ff02] rounded-full flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    </div>
                    <div className="text-lg text-gray-400 leading-[1.5]">
                      <p className="mb-2">&ldquo;We run a reservation-only private kitchen with a small space and a limited team.</p>
                      <p className="mb-2">I used to handle all the messages myself, and when things got busy, I would sometimes miss bookings.</p>
                      <p>After switching to Eatsy, guests can make reservations on their own. It gives me peace of mind to focus on prep work—and even on my days off, I can truly rest.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback 3 */}
              <div className="mb-16">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img src={imgEllipse46} alt="WAGYUMANI" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-oregano text-white mb-3">
                      Free restaurants from the order-taking pressure of high-end barbecue operations.
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-4xl font-oregano text-white">WAGYUMANI</h4>
                      <div className="w-7 h-7 bg-[#e6ff02] rounded-full flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    </div>
                    <div className="text-lg text-gray-400 leading-[1.5]">
                      <p>&ldquo;High-value restaurants risk big losses from booking errors or no-shows. Eatsy&apos;s reminders and workflow help secure every genuine reservation.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-16">
                <button className="text-lg text-gray-300 underline hover:text-white">
                  View more
                </button>
              </div>
            </div>

            {/* Separator */}
            <div className="px-6 md:px-12 lg:px-24">
              <div className="w-full h-px bg-[#252525] mb-16"></div>
            </div>

            {/* Personal Growth */}
            <div className="px-6 md:px-12 lg:px-24 pb-16 text-center">
              <p className="text-xl text-gray-400 mb-2">Personal growth</p>
              <h2 className="text-3xl font-bold leading-[1.5]">
                Even in a saturated market, truly understanding user pain points and delivering solutions aligned with business goals is what makes design genuinely valuable.
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      {/* Audio Player */}
      <div className="flex-shrink-0 bg-neutral-950 w-full" style={{ height: '74px' }}>
        <MediaPlayer ref={mediaPlayerRef} onNavigateToProject={onNavigateToProject} />
      </div>
    </div>
  );
}
