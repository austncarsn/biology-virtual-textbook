import svgPaths from "./svg-hdfx506f1n";

function BioLogo() {
  return (
    <div className="absolute h-[2049px] left-0 top-0 w-[2048px]" data-name="BIO LOGO">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2048 2049">
        <g id="BIO LOGO">
          <path d={svgPaths.pa964000} fill="url(#paint0_linear_27_198)" id="Vector" />
          <path d={svgPaths.p310baf00} fill="url(#paint1_linear_27_198)" id="Vector_2" />
          <path d={svgPaths.pc1a8c80} fill="var(--fill-0, #B7C2CB)" id="Vector_3" />
          <path d={svgPaths.p1b0e7a00} fill="var(--fill-0, #B7C2CB)" id="Vector_4" />
          <path d={svgPaths.p1440b800} fill="var(--fill-0, #F4F1BB)" id="Vector_5" />
          <path d={svgPaths.p26d33300} fill="var(--fill-0, #9BC0BB)" id="Vector_6" />
          <path d={svgPaths.p38206980} fill="var(--fill-0, #B7C2CB)" id="Vector_7" />
          <path d={svgPaths.p3eb7b0c0} fill="var(--fill-0, #B7C2CB)" id="Vector_8" />
          <path d={svgPaths.p20b5c900} fill="var(--fill-0, #B7C2CB)" id="Vector_9" />
          <path d={svgPaths.p14416c00} fill="var(--fill-0, #B7C2CB)" id="Vector_10" />
          <path d={svgPaths.p1e5dc300} fill="var(--fill-0, #B7C2CB)" id="Vector_11" />
          <path d={svgPaths.p1a7c4000} fill="var(--fill-0, #B7C2CB)" id="Vector_12" />
          <path d={svgPaths.p35a9c580} fill="var(--fill-0, #B7C2CB)" id="Vector_13" />
          <path d={svgPaths.p3eab9000} fill="var(--fill-0, #B7C2CB)" id="Vector_14" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_27_198" x1="1458.56" x2="638.313" y1="1593.35" y2="515.435">
            <stop stopColor="#95BAB5" />
            <stop offset="1" stopColor="#B3C2CA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_27_198" x1="1395.24" x2="651.184" y1="1440.16" y2="602.686">
            <stop stopColor="#9BC1BC" />
            <stop offset="1" stopColor="#B9C5CA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <BioLogo />
    </div>
  );
}