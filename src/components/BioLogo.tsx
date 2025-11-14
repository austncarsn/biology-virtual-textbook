import svgPaths from "../imports/svg-hdfx506f1n";

interface BioLogoProps {
  size?: number;
  className?: string;
}

export default function BioLogo({ size = 24, className = "" }: BioLogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 2048 2049"
      style={{ display: "block" }}
    >
      <g>
        <path d={svgPaths.pa964000} fill="url(#paint0_linear_27_198)" />
        <path d={svgPaths.p310baf00} fill="url(#paint1_linear_27_198)" />
        <path d={svgPaths.pc1a8c80} fill="#B7C2CB" />
        <path d={svgPaths.p1b0e7a00} fill="#B7C2CB" />
        <path d={svgPaths.p1440b800} fill="#F4F1BB" />
        <path d={svgPaths.p26d33300} fill="#9BC0BB" />
        <path d={svgPaths.p38206980} fill="#B7C2CB" />
        <path d={svgPaths.p3eb7b0c0} fill="#B7C2CB" />
        <path d={svgPaths.p20b5c900} fill="#B7C2CB" />
        <path d={svgPaths.p14416c00} fill="#B7C2CB" />
        <path d={svgPaths.p1e5dc300} fill="#B7C2CB" />
        <path d={svgPaths.p1a7c4000} fill="#B7C2CB" />
        <path d={svgPaths.p35a9c580} fill="#B7C2CB" />
        <path d={svgPaths.p3eab9000} fill="#B7C2CB" />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_27_198"
          x1="1458.56"
          x2="638.313"
          y1="1593.35"
          y2="515.435"
        >
          <stop stopColor="#95BAB5" />
          <stop offset="1" stopColor="#B3C2CA" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_27_198"
          x1="1395.24"
          x2="651.184"
          y1="1440.16"
          y2="602.686"
        >
          <stop stopColor="#9BC1BC" />
          <stop offset="1" stopColor="#B9C5CA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
