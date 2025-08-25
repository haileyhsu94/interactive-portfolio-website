import svgPaths from "./svg-6oqrfnq9lp";
import imgHeroImage from "figma:asset/877a3f5cffcd89b2e810ff524710410d8cfb0d94.png";
import imgImage from "figma:asset/9e88f57f74aa86590627a682f5d048b7e3de6a19.png";
import imgImage1 from "figma:asset/8951f9a5f7b2f450439e486c3553fef5dda7911e.png";
import imgImage2 from "figma:asset/74dba01011dacb7d08cd7a8beedaf88a19530538.png";
import imgAvatar from "figma:asset/db34a798bc418cc164002d3c6fad2addd42b2cb6.png";

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

function Frame() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
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

function Featured() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-[999px] shrink-0 w-full" data-name="featured">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <Frame />
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e6ff02] text-[17px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Featured</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
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

function More() {
  return (
    <div className="relative shrink-0 w-full" data-name="more">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <Frame1 />
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">More Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
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

function Contact() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative shrink-0"
      data-name="contact"
    >
      <Frame2 />
      <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="items"
    >
      <Featured />
      <More />
      <Contact />
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

function Frame3() {
  return (
    <div className="relative shrink-0 size-10" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path
            d={svgPaths.p2fa0ec00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p23528000}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.pec95ec0}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p37894300}
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p11494970}
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

function Icon() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative rounded-[20px] shrink-0"
      data-name="icon"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <Frame3 />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="title"
    >
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[21px] text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`B2B Procurement AI Agent `}</p>
      </div>
      <div
        className="font-[.Didact_Gothic,_sans-serif] font-normal min-w-full relative shrink-0 text-[17px] text-gray-300"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[22px]">6 months</p>
      </div>
    </div>
  );
}

function Frame224() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Design Systems</p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">User Research</p>
      </div>
    </div>
  );
}

function Frame230() {
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
        <p className="block leading-[22px] whitespace-pre">A/B tesing</p>
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

function Tags() {
  return (
    <div className="relative shrink-0 w-full" data-name="tags">
      <div className="relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start px-1 py-0 relative w-full">
          <Frame224 />
          <Frame225 />
          <Frame230 />
          <Frame228 />
          <Frame227 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[12px] relative w-full">
          <Icon />
          <Title1 />
          <div
            className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-gray-300 text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22px]">
              Lorem ipsum dolor sit amet consectetur. Enim orci libero et bibendum elit nibh. Maecenas in in feugiat
              magna enim aliquet varius. Dui vitae nulla vel venenatis ornare. Laoreet vel magna et quam gravida massa
              congue egestas.
            </p>
          </div>
          <Tags />
        </div>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div
      className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-br-[20px] rounded-tr-[20px] self-stretch shrink-0"
      data-name="hero image"
      style={{ backgroundImage: `url('${imgHeroImage}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative rounded-3xl shrink-0 w-full"
      data-name="container"
    >
      <Text />
      <HeroImage />
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
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="title"
    >
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[17px] text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Restaurant Reservation</p>
      </div>
      <div
        className="font-[.Didact_Gothic,_sans-serif] font-normal min-w-full relative shrink-0 text-[17px] text-gray-300"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[22px]">7 months</p>
      </div>
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
            <p className="block leading-[22px]">{`Lorem ipsum dolor sit amet consectetur. Enim orci libero et bibendum elit nibh. Maecenas in in feugiat magna enim aliquet varius. `}</p>
          </div>
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
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="title"
    >
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[17px] text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`AI Tutor For Students `}</p>
      </div>
      <div
        className="font-[.Didact_Gothic,_sans-serif] font-normal min-w-full relative shrink-0 text-[17px] text-gray-300"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[22px]">12 months</p>
      </div>
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
            <p className="block leading-[22px]">{`Lorem ipsum dolor sit amet consectetur. Enim orci libero et bibendum elit nibh. Maecenas in in feugiat magna enim aliquet varius. `}</p>
          </div>
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
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="title"
    >
      <div className="font-[.Didact_Gothic,_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-[17px] text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Save Food</p>
      </div>
      <div
        className="font-[.Didact_Gothic,_sans-serif] font-normal min-w-full relative shrink-0 text-[17px] text-gray-300"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[22px]">4 months</p>
      </div>
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
            <p className="block leading-[22px]">{`Lorem ipsum dolor sit amet consectetur. Enim orci libero et bibendum elit nibh. Maecenas in in feugiat magna enim aliquet varius. `}</p>
          </div>
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

function More1() {
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

function Frame7() {
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
          <Frame7 />
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">haileyhsu94@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
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
          <Frame8 />
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">+1 (347) 806-1403</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
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
      <Frame9 />
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

function Frame10() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path
            d={svgPaths.p30958080}
            id="Vector"
            stroke="var(--stroke-0, #D1D5DB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M6 9H2V21H6V9Z"
            id="Vector_2"
            stroke="var(--stroke-0, #D1D5DB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.p1bb3a100}
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
    <div className="h-[18px] relative shrink-0 w-[117px]" data-name="medium_logo.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 18">
        <g clipPath="url(#clip0_1_281)" id="medium_logo.svg">
          <path d={svgPaths.p1968fe80} fill="var(--fill-0, #D1D5DB)" id="Vector" />
          <path d={svgPaths.p11e0c480} fill="var(--fill-0, #D1D5DB)" id="Vector_2" />
          <path d={svgPaths.p3737de80} fill="var(--fill-0, #D1D5DB)" id="Vector_3" />
          <path d={svgPaths.p30f0f3b0} fill="var(--fill-0, #D1D5DB)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_281">
            <rect fill="white" height="18" width="117" />
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
      <Frame10 />
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
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="left">
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-[12px] relative size-full">
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

function InputBox1() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-xl shrink-0 w-full" data-name="input box">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-2 relative w-full">
          <div className="basis-0 font-[.Didact_Gothic,_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-gray-600 text-left">
            <p className="block leading-[22px]">Tell me about your project</p>
          </div>
        </div>
      </div>
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
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="right">
      <div
        aria-hidden="true"
        className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[12px] relative w-full">
          <div className="font-[.Didact_Gothic,_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left w-full">
            <p className="block leading-[normal]">Quick Messages</p>
          </div>
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left w-full">
            <p className="block leading-[22px]">Your email</p>
          </div>
          <InputBox />
          <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left w-full">
            <p className="block leading-[22px]">Your message</p>
          </div>
          <InputBox1 />
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

function Contact1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-6 pt-0 px-0 relative shrink-0 w-full"
      data-name="contact"
    >
      <Container7 />
    </div>
  );
}

function Middle() {
  return (
    <div className="bg-[#121212] h-full relative rounded-xl shrink-0 w-[798px]" data-name="middle">
      <div className="box-border content-stretch flex flex-col gap-8 h-full items-start justify-start overflow-x-clip overflow-y-auto px-5 py-6 relative w-[798px]">
        <Feature />
        <More1 />
        <Contact1 />
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

function Frame226() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Design Systems</p>
      </div>
    </div>
  );
}

function Frame229() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">User Research</p>
      </div>
    </div>
  );
}

function Frame231() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Prototyping</p>
      </div>
    </div>
  );
}

function Frame232() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[999px] shrink-0">
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-gray-300 text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">A/B tesing</p>
      </div>
    </div>
  );
}

function Frame233() {
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
          <Frame226 />
          <Frame229 />
          <Frame231 />
          <Frame232 />
          <Frame233 />
        </div>
      </div>
    </div>
  );
}

function Contact2() {
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
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="buttons"
    >
      <Contact2 />
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
    <div className="bg-neutral-950 h-[800px] relative shrink-0 w-full" data-name="top">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[800px] items-start justify-start p-[16px] relative w-full">
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
      style={{ backgroundImage: `url('${imgHeroImage}')` }}
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

function Frame11() {
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

function Frame12() {
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

function Frame13() {
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
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Bar() {
  return (
    <div
      className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-px min-w-px place-items-start relative shrink-0"
      data-name="bar"
    >
      <div className="[grid-area:1_/_1] bg-[#252525] h-[7px] ml-0 mt-0 rounded-[99px] w-[326px]" />
      <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[7px] ml-0 mt-0 rounded-[99px] w-[1.168px]" />
    </div>
  );
}

function Progress() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start leading-[0] p-0 relative shrink-0 w-full"
      data-name="progress"
    >
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">0:00</p>
      </div>
      <Bar />
      <div className="font-[.Didact_Gothic,_sans-serif] font-normal not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
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

function Icon1() {
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
      <Icon1 />
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