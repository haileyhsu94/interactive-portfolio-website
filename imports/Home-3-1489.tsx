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
      <div className="font-['HanziPen_TC:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-left text-neutral-950 text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[17px] w-full">
        <p className="block leading-[normal]">Hailey Hsu</p>
      </div>
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal relative shrink-0 text-[17px] text-gray-400 w-full">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[17px] text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[21px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">Featured Project</p>
      </div>
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal relative shrink-0 text-[17px] text-gray-300">
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
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[21px] text-left w-full"
      data-name="title"
    >
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold relative shrink-0 text-[#ffffff] w-full">
        <p className="block leading-[normal]">Airframe – AI-powered B2B Procurement Platform</p>
      </div>
                          <div className="font-[.Didact_Gothic,_sans-serif] font-medium relative shrink-0 text-[#f4915c] text-[17px] w-full">
                      <p className="block leading-[normal]">Projected to cut vendor sourcing time by 40%</p>
                    </div>
    </div>
  );
}

function Frame224() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$4M funding</p>
      </div>
    </div>
  );
}

function Frame230() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left w-full">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-neutral-950 text-nowrap">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[21px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">More Projects</p>
      </div>
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal relative shrink-0 text-[17px] text-gray-300">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
        <p className="block leading-[normal]">Customizable Reservation Platform</p>
      </div>
    </div>
  );
}

function Frame226() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Cost Reduction</p>
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
            className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-gray-300 text-left"
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
        <p className="block leading-[normal]">AI-Powered SAT Preparation Platform</p>
      </div>
    </div>
  );
}

function Frame237() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Heatmap Analysis</p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
            className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-gray-300 text-left"
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
        <p className="block leading-[normal]">Dual-Interface Platform to Reduce Food Waste</p>
      </div>
    </div>
  );
}

function Frame239() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Dual Interface</p>
      </div>
    </div>
  );
}

function Frame240() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
            className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-gray-300 text-left"
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
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
                                  <svg width="104" height="17" viewBox="0 0 104 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3000_1867)">
                                      <path d="M15.7 8.25876C15.7 12.5541 12.2197 16.0363 7.92642 16.0363C3.63312 16.0363 0.153076 12.5552 0.153076 8.25876C0.153076 3.96236 3.63338 0.481445 7.92642 0.481445C12.2195 0.481445 15.7 3.96341 15.7 8.25876Z" fill="#D1D5DB"/>
                                      <path d="M24.2278 8.25868C24.2278 12.3022 22.4875 15.5799 20.341 15.5799C18.1945 15.5799 16.4542 12.3012 16.4542 8.25868C16.4542 4.21619 18.1945 0.9375 20.341 0.9375C22.4875 0.9375 24.2278 4.21619 24.2278 8.25868Z" fill="#D1D5DB"/>
                                      <path d="M27.7158 8.2587C27.7158 11.8815 27.1037 14.8182 26.3487 14.8182C25.5938 14.8182 24.9817 11.8805 24.9817 8.2587C24.9817 4.63692 25.5938 1.69922 26.349 1.69922C27.1042 1.69922 27.7158 4.63614 27.7158 8.2587Z" fill="#D1D5DB"/>
                                      <path d="M49.1696 1.15597L49.1913 1.15125V0.98469H44.7705L40.6656 10.5716L36.5608 0.98469H31.7969V1.15125L31.8183 1.15597C32.6252 1.33695 33.0348 1.60685 33.0348 2.58023V13.9756C33.0348 14.949 32.6236 15.2189 31.8167 15.3999L31.7953 15.4046V15.5717H35.0275V15.4051L35.0061 15.4004C34.1992 15.2194 33.7895 14.9495 33.7895 13.9762V3.24121L39.0626 15.5717H39.3617L44.7884 2.89735V14.2576C44.7193 15.0264 44.3133 15.2638 43.5827 15.4277L43.561 15.4327V15.5979H49.1913V15.4327L49.1696 15.4277C48.4382 15.2638 48.0225 15.0264 47.9533 14.2576L47.9496 2.58023H47.9533C47.9533 1.60685 48.363 1.33695 49.1696 1.15597ZM51.7414 8.70482C51.8335 6.65735 52.5734 5.17958 53.815 5.15413C54.198 5.16043 54.5193 5.28528 54.769 5.52554C55.2995 6.03728 55.549 7.10666 55.5105 8.70482H51.7414ZM51.6857 9.28187H58.2847V9.25433C58.2659 7.68869 57.8095 6.47085 56.9295 5.63466C56.1688 4.91203 55.0425 4.51439 53.8594 4.51439H53.833C53.219 4.51439 52.4659 4.66233 51.9301 4.93039C51.3201 5.21105 50.7822 5.63072 50.3345 6.18154C49.6139 7.06889 49.1773 8.2681 49.0712 9.61577C49.0677 9.65616 49.0648 9.69656 49.0619 9.73695C49.059 9.77735 49.0572 9.81354 49.0553 9.8521C49.0516 9.92423 49.0487 9.99662 49.0471 10.0693C49.0445 10.1857 49.0437 10.303 49.0458 10.421C49.1174 13.4733 50.7766 15.9127 53.7237 15.9127C56.3105 15.9127 57.8169 14.0336 58.1925 11.5114L58.0028 11.445C57.3429 12.8006 56.1577 13.6221 54.8088 13.5219C52.9675 13.385 51.5569 11.5297 51.6849 9.28239M65.7457 13.4183C65.5293 13.9284 65.0777 14.2091 64.4724 14.2091C63.8671 14.2091 63.3139 13.7962 62.9208 13.0461C62.4985 12.2408 62.2763 11.1025 62.2763 9.754C62.2763 6.94744 63.1547 5.1321 64.5144 5.1321C65.0837 5.1321 65.5319 5.41276 65.7457 5.90246V13.4183ZM70.1232 15.419C69.3163 15.2294 68.9067 14.9469 68.9067 13.924V0.313477L64.0041 1.74876V1.92449L64.0342 1.92213C64.7105 1.86784 65.1693 1.96069 65.4356 2.20515C65.6441 2.39662 65.7457 2.69039 65.7457 3.10377V4.96974C65.2624 4.66312 64.6875 4.51387 63.9899 4.51387C62.5751 4.51387 61.2819 5.10587 60.3494 6.18102C59.3772 7.30154 58.8633 8.83282 58.8633 10.6088C58.863 13.7808 60.4343 15.9127 62.773 15.9127C64.1411 15.9127 65.2418 15.1678 65.7457 13.9114V15.5979H70.1446V15.4232L70.1232 15.419ZM74.3279 2.16449C74.3279 1.17407 73.5764 0.42705 72.5794 0.42705C71.5872 0.42705 70.8109 1.19033 70.8109 2.16449C70.8109 3.13866 71.588 3.90194 72.5794 3.90194C73.5764 3.90194 74.3279 3.15492 74.3279 2.16449ZM75.4851 15.419C74.6781 15.2294 74.2685 14.9469 74.2685 13.924H74.265V4.54613L69.8659 5.80121V5.97171L69.8923 5.97407C70.8441 6.05826 71.1046 6.38403 71.1046 7.48935V15.5979H75.5075V15.4232L75.4851 15.419ZM86.7574 15.419C85.9505 15.2294 85.5408 14.9469 85.5408 13.924V4.54613L81.3523 5.75977V5.93079L81.3772 5.93341C82.1553 6.01472 82.3802 6.35912 82.3802 7.46941V13.3973C82.1207 13.9074 81.634 14.2104 81.0443 14.2309C80.088 14.2309 79.5614 13.589 79.5614 12.4236V4.54639L75.1622 5.80148V5.97171L75.1886 5.97407C76.1405 6.058 76.4013 6.38377 76.4013 7.48935V12.5063C76.399 12.8565 76.4297 13.2062 76.4928 13.5507L76.572 13.893C76.9445 15.2192 77.9203 15.9127 79.4492 15.9127C80.7442 15.9127 81.8792 15.1161 82.3791 13.8697V15.6008H86.7783V15.4261L86.7574 15.419ZM103.847 15.5979V15.423L103.826 15.418C102.95 15.2173 102.609 14.8391 102.609 14.069V7.69C102.609 5.70102 101.485 4.51387 99.6017 4.51387C98.2291 4.51387 97.0716 5.30207 96.6261 6.52987C96.2721 5.22889 95.2535 4.51387 93.7474 4.51387C92.4244 4.51387 91.3876 5.20764 90.9428 6.37958V4.54692L86.5436 5.75059V5.92213L86.57 5.92449C87.5105 6.00738 87.7824 6.34259 87.7824 7.41958V15.5979H91.887V15.4232L91.8653 15.418C91.1669 15.2549 90.9415 14.9574 90.9415 14.1941V6.88239C91.1262 6.45354 91.4987 5.94548 92.2349 5.94548C93.1492 5.94548 93.6127 6.57498 93.6127 7.81512V15.5979H97.7184V15.4232L97.6967 15.418C96.9983 15.2549 96.7728 14.9574 96.7728 14.1941V7.68921C96.7746 7.44599 96.7552 7.20307 96.7148 6.96318C96.9106 6.49708 97.3045 5.94548 98.0707 5.94548C98.998 5.94548 99.4486 6.55689 99.4486 7.81512V15.5979H103.847Z" fill="#D1D5DB"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_3000_1867">
                                        <rect width="104" height="16" fill="white" transform="translate(0 0.174805)"/>
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
        className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left"
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
          <div className="basis-0 font-[.Didact_Gothic,_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-gray-600 text-left">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left w-full">
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
          <div className="basis-0 font-[.Didact_Gothic,_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-gray-600 text-left">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left w-full">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-neutral-950 text-nowrap">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Get in Touch</p>
          </div>
          <div
            className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-gray-300 text-left"
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
        className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-gray-300 text-left"
        style={{ width: "min-content" }}
      >
        <p className="leading-[22px]">
          <span>{`Product designer focused on data-dense UX, calm interfaces, and evidence-base workflows. I translate messy `}</span>
          <span className="font-[.Didact_Gothic,_sans-serif] font-normal not-italic text-[#ffffff]">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal relative shrink-0 text-[17px] text-gray-300 w-full">
            <p className="block leading-[22px]">Years of experience</p>
          </div>
          <div className="font-[.Didact_Gothic,_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[25px] w-full">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-gray-300 w-full">
            <p className="block mb-0">Clients</p>
            <p className="block">shipped</p>
          </div>
          <div className="font-[.Didact_Gothic,_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[25px] w-full">
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
        <div className="box-border content-stretch flex flex-col font-[.Didact_Gothic,_sans-serif] font-normal gap-3 items-start justify-start leading-[0] not-italic p-[12px] relative text-[17px] text-left w-full">
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
        <div className="box-border content-stretch flex flex-col font-[.Didact_Gothic,_sans-serif] font-normal gap-3 items-start justify-start leading-[0] not-italic p-[12px] relative text-[17px] text-left w-full">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Design Systems</p>
      </div>
    </div>
  );
}

function Frame243() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">User Research</p>
      </div>
    </div>
  );
}

function Frame244() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Prototyping</p>
      </div>
    </div>
  );
}

function Frame228() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">A/B Testing</p>
      </div>
    </div>
  );
}

function Frame227() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-left text-neutral-950 text-nowrap">
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
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-left text-nowrap">
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
      className="box-border content-stretch flex flex-col font-[.Didact_Gothic,_sans-serif] font-normal items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="title"
    >
      <div className="relative shrink-0 text-[#ffffff] text-[17px] text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`B2B Procurement AI Agent `}</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[17px] text-gray-300" style={{ width: "min-content" }}>
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">0:00</p>
      </div>
      <ProgressBar />
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
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
      <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[17px] text-left text-nowrap">
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