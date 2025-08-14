import svgPaths from "./svg-09p2j473t4";
import imgHeroImage1 from "figma:asset/a6513f6cf53298c367b28e9ad8f4052f41cf6d84.png";
import imgImage from "figma:asset/9e88f57f74aa86590627a682f5d048b7e3de6a19.png";
import imgImage1 from "figma:asset/8951f9a5f7b2f450439e486c3553fef5dda7911e.png";
import imgImage2 from "figma:asset/74dba01011dacb7d08cd7a8beedaf88a19530538.png";
import imgAvatar from "figma:asset/db34a798bc418cc164002d3c6fad2addd42b2cb6.png";
import imgImage3 from "figma:asset/877a3f5cffcd89b2e810ff524710410d8cfb0d94.png";

function Logo() {
  return (
    <div
      className="bg-[#e6ff02] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1.5 py-2 relative rounded-[999px] shrink-0 size-9"
      data-name="logo"
    >
      <div className="font-['HanziPen_TC:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
        <p className="block leading-[normal] whitespace-pre">HH</p>
      </div>
    </div>
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

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path
            d={svgPaths.pda9d200}
            id="Vector"
            stroke="var(--stroke-0, #E6FF02)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <button
      className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px]"
      data-name="item"
    >
      <Icon />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[14px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Featured</p>
      </div>
    </button>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path
            d={svgPaths.p1dfbdc00}
            id="Vector"
            stroke="var(--stroke-0, #D1D5DB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <button
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px]"
      data-name="item"
    >
      <Icon1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">More Projects</p>
      </div>
    </button>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path
            d={svgPaths.p24d83580}
            id="Vector"
            stroke="var(--stroke-0, #D1D5DB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.pd919a80}
            id="Vector_2"
            stroke="var(--stroke-0, #D1D5DB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <button
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-visible px-3 py-2 relative rounded-[999px] shrink-0 w-[175px]"
      data-name="item"
    >
      <Icon2 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Contact</p>
      </div>
    </button>
  );
}

function Items() {
  return (
    <div
      className="box-border content-stretch cursor-pointer flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="items"
    >
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Sidebar() {
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
      <Items />
    </div>
  );
}

function Title() {
  return (
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
  );
}

function Frame() {
  return (
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
  );
}

function Icon3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[12px] relative rounded-[99px] shrink-0"
      data-name="icon"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[99px]"
      />
      <Frame />
    </div>
  );
}

function Title1() {
  return (
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
  );
}

function Frame224() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$4M funding</p>
      </div>
    </div>
  );
}

function Frame230() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">AI Prototype</p>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="tags"
    >
      <Frame224 />
      <Frame230 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Title1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left w-full">
        <p className="block leading-[22px]">{`Delivered 100+ high-fidelity screens for buyer & vendor flows.`}</p>
      </div>
      <Tags />
    </div>
  );
}

function Frame259() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Icon3 />
      <Frame258 />
    </div>
  );
}

function Contact() {
  return (
    <div className="basis-0 bg-[#e6ff02] grow min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="contact">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
            <p className="block leading-[22px] whitespace-pre">View Case Study</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
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
  );
}

function Contact1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="contact">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-[999px]"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-2 relative w-full">
          <Frame1 />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">Listen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame231() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Contact />
      <Contact1 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start px-4 py-3 relative w-full">
          <Frame259 />
          <Frame231 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative rounded-3xl shrink-0 w-full"
      data-name="container"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[338px] shrink-0 w-[426px]"
        data-name="hero image 1"
        style={{ backgroundImage: `url('${imgHeroImage1}')` }}
      />
    </div>
  );
}

function Feature() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="feature"
    >
      <Title />
      <Container />
    </div>
  );
}

function Title2() {
  return (
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
  );
}

function Image() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-36 rounded-xl shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage}')` }}
    />
  );
}

function Title3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="title"
    >
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[normal]">Customizable Reservation Platform</p>
      </div>
    </div>
  );
}

function Frame226() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Cost Reduction</p>
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Prototype Testing</p>
      </div>
    </div>
  );
}

function Frame229() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full">
      <Frame226 />
      <Frame235 />
    </div>
  );
}

function Project() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="project">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[12px] relative w-full">
          <Image />
          <Title3 />
          <div
            className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22px]">
              Reduced booking setup steps by 40% in prototype testing. Designed fully customizable workflows, giving
              small restaurants control over reservations and payments.
            </p>
          </div>
          <Frame229 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-36 rounded-xl shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage1}')` }}
    />
  );
}

function Title4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="title"
    >
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[normal]">AI-Powered SAT Preparation Platform</p>
      </div>
    </div>
  );
}

function Frame237() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Heatmap Analysis</p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">A/B Testing</p>
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full">
      <Frame237 />
      <Frame225 />
    </div>
  );
}

function Project1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="project">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[12px] relative w-full">
          <Image1 />
          <Title4 />
          <div
            className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22px]">
              Conducted heatmap analysis and A/B testing to refine practice setup flow and dashboard layout. Led 4
              designers to deliver 100+ screens, integrating AI tutor and performance reports.
            </p>
          </div>
          <Frame238 />
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-36 rounded-xl shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage2}')` }}
    />
  );
}

function Title5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="title"
    >
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[normal]">Dual-Interface Platform to Reduce Food Waste</p>
      </div>
    </div>
  );
}

function Frame239() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Dual Interface</p>
      </div>
    </div>
  );
}

function Frame240() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Sustainability</p>
      </div>
    </div>
  );
}

function Frame241() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full">
      <Frame239 />
      <Frame240 />
    </div>
  );
}

function Project2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="project">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[12px] relative w-full">
          <Image2 />
          <Title5 />
          <div
            className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-gray-300 text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22px]">{`Expected to help restaurants clear surplus food faster by streamlining listing to under 2 minutes. Delivered mobile B2C app & tablet B2B dashboard with 50+ unique screens.`}</p>
          </div>
          <Frame241 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="container"
    >
      <Project />
      <Project1 />
      <Project2 />
    </div>
  );
}

function More() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="more"
    >
      <Title2 />
      <Container1 />
    </div>
  );
}

function Frame5() {
  return (
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
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 w-full" data-name="mail">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <Frame5 />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">haileyhsu94@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
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
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 w-full" data-name="phone">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <Frame6 />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">+1 (347) 806-1403</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
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
  );
}

function Location() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative shrink-0"
      data-name="location"
    >
      <Frame7 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">New York, NY</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="container"
    >
      <Mail />
      <Phone />
      <Location />
    </div>
  );
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="top"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[normal]">Contat Information</p>
      </div>
      <Container2 />
    </div>
  );
}

function Frame8() {
  return (
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
  );
}

function MediumLogoSvg() {
  return (
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
  );
}

function Logos() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="logos"
    >
      <Frame8 />
      <MediumLogoSvg />
    </div>
  );
}

function Bottom() {
  return (
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
      <Logos />
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-2xl self-stretch shrink-0" data-name="left">
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-2xl"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-[16px] relative size-full">
          <Top />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-xl shrink-0 w-full" data-name="input box">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-600 text-left">
            <p className="block leading-[22px]">your@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame260() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left w-full">
        <p className="block leading-[22px]">Your email</p>
      </div>
      <InputBox />
    </div>
  );
}

function InputBox1() {
  return (
    <div className="bg-[#1f1f1f] h-[60px] relative rounded-xl shrink-0 w-full" data-name="input box">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[60px] items-start justify-center px-3 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-600 text-left">
            <p className="block leading-[22px]">Tell me about your project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame261() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left w-full">
        <p className="block leading-[22px]">Message</p>
      </div>
      <InputBox1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e6ff02] relative rounded-[999px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
            <p className="block leading-[22px] whitespace-pre">Send Message</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-2xl shrink-0" data-name="right">
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-2xl"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
            <p className="block leading-[normal]">Quick Messages</p>
          </div>
          <Frame260 />
          <Frame261 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="container"
    >
      <Left />
      <Right />
    </div>
  );
}

function Container4() {
  return (
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
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="container"
    >
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-1 py-0 relative w-full">
          <Container3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
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
            <p className="block leading-[22px]">Let’s discuss your next project or collaboration</p>
          </div>
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Contact2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-4 pt-0 px-0 relative shrink-0 w-full"
      data-name="contact"
    >
      <Container7 />
    </div>
  );
}

function Middle() {
  return (
    <div className="basis-0 bg-[#121212] grow h-full min-h-px min-w-px relative rounded-xl shrink-0" data-name="middle">
      <div className="overflow-x-clip overflow-y-auto relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-5 py-6 relative size-full">
          <Feature />
          <More />
          <Contact2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="container"
    >
      <div className="relative shrink-0 size-[61px]" data-name="avatar">
        <img className="block max-w-none size-full" height="61" src={imgAvatar.src} width="61" />
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
  );
}

function Experience() {
  return (
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
  );
}

function Client() {
  return (
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
  );
}

function Top1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="top"
    >
      <Experience />
      <Client />
    </div>
  );
}

function Industries() {
  return (
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
  );
}

function Tooling() {
  return (
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
  );
}

function Bottom1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="bottom"
    >
      <Industries />
      <Tooling />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-1 py-0 relative w-full">
          <Top1 />
          <Bottom1 />
        </div>
      </div>
    </div>
  );
}

function Frame242() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Design Systems</p>
      </div>
    </div>
  );
}

function Frame243() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">User Research</p>
      </div>
    </div>
  );
}

function Frame244() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Prototyping</p>
      </div>
    </div>
  );
}

function Frame228() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">A/B Testing</p>
      </div>
    </div>
  );
}

function Frame227() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Data Viz</p>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div className="relative shrink-0 w-full" data-name="tags">
      <div className="relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start px-1 py-0 relative w-full">
          <Frame242 />
          <Frame243 />
          <Frame244 />
          <Frame228 />
          <Frame227 />
        </div>
      </div>
    </div>
  );
}

function Contact3() {
  return (
    <div className="bg-[#e6ff02] relative rounded-[999px] shrink-0 w-full" data-name="contact">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-950 text-nowrap">
            <p className="block leading-[22px] whitespace-pre">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
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
  );
}

function Linkedin() {
  return (
    <div className="relative rounded-[999px] shrink-0 w-full" data-name="linkedin">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-[999px]"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">LinkedIn</p>
          </div>
          <Logo1 />
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="buttons"
    >
      <Contact3 />
      <Linkedin />
    </div>
  );
}

function About() {
  return (
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
      <Container8 />
      <Container9 />
      <Tags1 />
      <Buttons />
    </div>
  );
}

function Top2() {
  return (
    <div className="basis-0 bg-neutral-950 grow min-h-px min-w-px relative shrink-0 w-full" data-name="top">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[16px] relative size-full">
          <Sidebar />
          <Middle />
          <About />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-lg shrink-0 size-[60px]"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage3}')` }}
    />
  );
}

function Title6() {
  return (
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
  );
}

function Detail() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start px-3 py-0 relative shrink-0"
      data-name="detail"
    >
      <Image3 />
      <Title6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
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
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[24.001px] relative shrink-0 w-[23.668px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <rect fill="var(--fill-0, white)" height="24.0008" rx="11.8337" width="23.6675" />
          <path d={svgPaths.p2e219100} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
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
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-10 items-center justify-start p-0 relative shrink-0"
      data-name="container"
    >
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame232() {
  return (
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
  );
}

function Frame233() {
  return (
    <div className="h-[9px] relative shrink-0 w-6">
      <div className="absolute bottom-0 left-0 right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 9">
          <g id="Frame 233">
            <line id="Line 4" stroke="var(--stroke-0, #F4915C)" x1="0.5" x2="0.5" y1="3" y2="6" />
            <line id="Line 5" stroke="var(--stroke-0, #F4915C)" x1="2.5" x2="2.5" y1="2" y2="7" />
            <line id="Line 6" stroke="var(--stroke-0, #F4915C)" x1="4.5" x2="4.5" y1="1" y2="8" />
            <line id="Line 7" stroke="var(--stroke-0, #F4915C)" x1="6.5" x2="6.5" y2="9" />
            <line id="Line 8" stroke="var(--stroke-0, #F4915C)" x1="8.5" x2="8.5" y2="9" />
            <line id="Line 9" stroke="var(--stroke-0, #F4915C)" x1="10.5" x2="10.5" y1="1" y2="8" />
            <line id="Line 13" stroke="var(--stroke-0, #F4915C)" x1="12.5" x2="12.5" y1="1" y2="8" />
            <line id="Line 14" stroke="var(--stroke-0, #F4915C)" x1="14.5" x2="14.5" y1="1" y2="8" />
            <line id="Line 10" stroke="var(--stroke-0, #F4915C)" x1="16.5" x2="16.5" y1="2" y2="7" />
            <line id="Line 15" stroke="var(--stroke-0, #F4915C)" x1="18.5" x2="18.5" y1="2" y2="7" />
            <line id="Line 11" stroke="var(--stroke-0, #F4915C)" x1="20.5" x2="20.5" y1="3" y2="6" />
            <line id="Line 16" stroke="var(--stroke-0, #F4915C)" x1="22.5" x2="22.5" y1="4" y2="5" />
            <line id="Line 12" stroke="var(--stroke-0, #F4915C)" x1="24.5" x2="24.5" y1="3" y2="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame236() {
  return (
    <div className="h-[9px] relative shrink-0 w-6">
      <div className="absolute bottom-0 left-0 right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 9">
          <g id="Frame 236">
            <line id="Line 4" stroke="var(--stroke-0, #F4915C)" x1="0.5" x2="0.5" y1="3" y2="6" />
            <line id="Line 13" stroke="var(--stroke-0, #F4915C)" x1="2.5" x2="2.5" y1="3" y2="6" />
            <line id="Line 14" stroke="var(--stroke-0, #F4915C)" x1="4.5" x2="4.5" y1="3" y2="6" />
            <line id="Line 5" stroke="var(--stroke-0, #F4915C)" x1="6.5" x2="6.5" y1="2" y2="7" />
            <line id="Line 6" stroke="var(--stroke-0, #F4915C)" x1="8.5" x2="8.5" y1="1" y2="8" />
            <line id="Line 15" stroke="var(--stroke-0, #F4915C)" x1="10.5" x2="10.5" y1="2" y2="7" />
            <line id="Line 7" stroke="var(--stroke-0, #F4915C)" x1="12.5" x2="12.5" y2="9" />
            <line id="Line 8" stroke="var(--stroke-0, #F4915C)" x1="14.5" x2="14.5" y2="9" />
            <line id="Line 9" stroke="var(--stroke-0, #F4915C)" x1="16.5" x2="16.5" y1="1" y2="8" />
            <line id="Line 16" stroke="var(--stroke-0, #F4915C)" x1="18.5" x2="18.5" y2="9" />
            <line id="Line 10" stroke="var(--stroke-0, #F4915C)" x1="20.5" x2="20.5" y1="2" y2="7" />
            <line id="Line 11" stroke="var(--stroke-0, #F4915C)" x1="22.5" x2="22.5" y1="3" y2="6" />
            <line id="Line 12" stroke="var(--stroke-0, #F4915C)" x1="24.5" x2="24.5" y1="3" y2="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="h-[9px] relative shrink-0 w-4">
      <div className="absolute bottom-0 left-0 right-[-6.25%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 9">
          <g id="Frame 252">
            <line id="Line 4" stroke="var(--stroke-0, #E6FF02)" x1="0.5" x2="0.5" y1="3" y2="6" />
            <line id="Line 5" stroke="var(--stroke-0, #E6FF02)" x1="2.5" x2="2.5" y1="2" y2="7" />
            <line id="Line 6" stroke="var(--stroke-0, #E6FF02)" x1="4.5" x2="4.5" y1="1" y2="8" />
            <line id="Line 7" stroke="var(--stroke-0, #E6FF02)" x1="6.5" x2="6.5" y2="9" />
            <line id="Line 8" stroke="var(--stroke-0, #E6FF02)" x1="8.5" x2="8.5" y2="9" />
            <line id="Line 9" stroke="var(--stroke-0, #E6FF02)" x1="10.5" x2="10.5" y1="1" y2="8" />
            <line id="Line 10" stroke="var(--stroke-0, #E6FF02)" x1="12.5" x2="12.5" y1="2" y2="7" />
            <line id="Line 11" stroke="var(--stroke-0, #E6FF02)" x1="14.5" x2="14.5" y1="3" y2="6" />
            <line id="Line 12" stroke="var(--stroke-0, #E6FF02)" x1="16.5" x2="16.5" y1="3" y2="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="h-[9px] relative shrink-0 w-6">
      <div className="absolute bottom-0 left-0 right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 9">
          <g id="Frame 253">
            <line id="Line 4" stroke="var(--stroke-0, #E6FF02)" x1="0.5" x2="0.5" y1="3" y2="6" />
            <line id="Line 5" stroke="var(--stroke-0, #E6FF02)" x1="2.5" x2="2.5" y1="2" y2="7" />
            <line id="Line 6" stroke="var(--stroke-0, #E6FF02)" x1="4.5" x2="4.5" y1="1" y2="8" />
            <line id="Line 7" stroke="var(--stroke-0, #E6FF02)" x1="6.5" x2="6.5" y2="9" />
            <line id="Line 8" stroke="var(--stroke-0, #E6FF02)" x1="8.5" x2="8.5" y2="9" />
            <line id="Line 9" stroke="var(--stroke-0, #E6FF02)" x1="10.5" x2="10.5" y1="1" y2="8" />
            <line id="Line 13" stroke="var(--stroke-0, #E6FF02)" x1="12.5" x2="12.5" y1="1" y2="8" />
            <line id="Line 14" stroke="var(--stroke-0, #E6FF02)" x1="14.5" x2="14.5" y1="1" y2="8" />
            <line id="Line 10" stroke="var(--stroke-0, #E6FF02)" x1="16.5" x2="16.5" y1="2" y2="7" />
            <line id="Line 15" stroke="var(--stroke-0, #E6FF02)" x1="18.5" x2="18.5" y1="2" y2="7" />
            <line id="Line 11" stroke="var(--stroke-0, #E6FF02)" x1="20.5" x2="20.5" y1="3" y2="6" />
            <line id="Line 16" stroke="var(--stroke-0, #E6FF02)" x1="22.5" x2="22.5" y1="4" y2="5" />
            <line id="Line 12" stroke="var(--stroke-0, #E6FF02)" x1="24.5" x2="24.5" y1="3" y2="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame254() {
  return (
    <div className="h-[9px] relative shrink-0 w-[22px]">
      <div className="absolute bottom-0 left-0 right-[-4.55%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 9">
          <g id="Frame 254">
            <line id="Line 4" stroke="var(--stroke-0, #E6FF02)" x1="0.5" x2="0.5" y1="3" y2="6" />
            <line id="Line 5" stroke="var(--stroke-0, #E6FF02)" x1="2.5" x2="2.5" y1="2" y2="7" />
            <line id="Line 6" stroke="var(--stroke-0, #E6FF02)" x1="4.5" x2="4.5" y1="1" y2="8" />
            <line id="Line 7" stroke="var(--stroke-0, #E6FF02)" x1="6.5" x2="6.5" y2="9" />
            <line id="Line 8" stroke="var(--stroke-0, #E6FF02)" x1="8.5" x2="8.5" y2="9" />
            <line id="Line 14" stroke="var(--stroke-0, #E6FF02)" x1="10.5" x2="10.5" y1="1" y2="8" />
            <line id="Line 13" stroke="var(--stroke-0, #E6FF02)" x1="12.5" x2="12.5" y2="9" />
            <line id="Line 9" stroke="var(--stroke-0, #E6FF02)" x1="14.5" x2="14.5" y1="1" y2="8" />
            <line id="Line 10" stroke="var(--stroke-0, #E6FF02)" x1="16.5" x2="16.5" y1="2" y2="7" />
            <line id="Line 11" stroke="var(--stroke-0, #E6FF02)" x1="18.5" x2="18.5" y1="3" y2="6" />
            <line id="Line 15" stroke="var(--stroke-0, #E6FF02)" x1="20.5" x2="20.5" y1="2" y2="7" />
            <line id="Line 12" stroke="var(--stroke-0, #E6FF02)" x1="22.5" x2="22.5" y1="3" y2="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame257() {
  return (
    <div className="h-[9px] relative shrink-0 w-6">
      <div className="absolute bottom-0 left-0 right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 9">
          <g id="Frame 257">
            <line id="Line 4" stroke="var(--stroke-0, #E6FF02)" x1="0.5" x2="0.5" y1="3" y2="6" />
            <line id="Line 13" stroke="var(--stroke-0, #E6FF02)" x1="2.5" x2="2.5" y1="3" y2="6" />
            <line id="Line 14" stroke="var(--stroke-0, #E6FF02)" x1="4.5" x2="4.5" y1="3" y2="6" />
            <line id="Line 5" stroke="var(--stroke-0, #E6FF02)" x1="6.5" x2="6.5" y1="2" y2="7" />
            <line id="Line 6" stroke="var(--stroke-0, #E6FF02)" x1="8.5" x2="8.5" y1="1" y2="8" />
            <line id="Line 15" stroke="var(--stroke-0, #E6FF02)" x1="10.5" x2="10.5" y1="2" y2="7" />
            <line id="Line 7" stroke="var(--stroke-0, #E6FF02)" x1="12.5" x2="12.5" y2="9" />
            <line id="Line 8" stroke="var(--stroke-0, #E6FF02)" x1="14.5" x2="14.5" y2="9" />
            <line id="Line 9" stroke="var(--stroke-0, #E6FF02)" x1="16.5" x2="16.5" y1="1" y2="8" />
            <line id="Line 16" stroke="var(--stroke-0, #E6FF02)" x1="18.5" x2="18.5" y2="9" />
            <line id="Line 10" stroke="var(--stroke-0, #E6FF02)" x1="20.5" x2="20.5" y1="2" y2="7" />
            <line id="Line 11" stroke="var(--stroke-0, #E6FF02)" x1="22.5" x2="22.5" y1="3" y2="6" />
            <line id="Line 12" stroke="var(--stroke-0, #E6FF02)" x1="24.5" x2="24.5" y1="3" y2="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="progress bar"
    >
      <Frame232 />
      <Frame233 />
      <Frame232 />
      <Frame233 />
      <Frame233 />
      <Frame236 />
      <Frame252 />
      <Frame253 />
      <Frame254 />
      <Frame253 />
      <Frame253 />
      <Frame257 />
    </div>
  );
}

function Progress() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
      data-name="progress"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">0:00</p>
      </div>
      <ProgressBar />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">9:34</p>
      </div>
    </div>
  );
}

function Controller() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-[400px]"
      data-name="controller"
    >
      <Container10 />
      <Progress />
    </div>
  );
}

function Icon4() {
  return (
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
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end px-4 py-2 relative rounded-[999px] shrink-0"
      data-name="container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e6ff02] border-solid inset-0 pointer-events-none rounded-[999px]"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Open Project</p>
      </div>
      <Icon4 />
    </div>
  );
}

function Action() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-end justify-center px-5 py-0 relative shrink-0 w-[299px]"
      data-name="action"
    >
      <Container11 />
    </div>
  );
}

function PlaySection() {
  return (
    <div className="bg-neutral-950 relative shrink-0 w-full" data-name="play section">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-4 pt-0 px-4 relative w-full">
          <Detail />
          <Controller />
          <Action />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="home"
    >
      <Top2 />
      <PlaySection />
    </div>
  );
}