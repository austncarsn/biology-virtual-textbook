import imgErSmoothEr from "figma:asset/782d4571ef70645e125c99d36418a622331e5787.png";
import imgChloroplast from "figma:asset/df5f0f3c6585a6ef6797664c364850fdc1513295.png";
import imgCellDiagram from "figma:asset/bb22202a93c2206aa7829bf11e27fc484d97f675.png";
import imgMitochondrion from "figma:asset/5390f60f8329fea6e722304b46094a93520ed623.png";
import imgOsmosisTurgorPressure from "figma:asset/183ec5c170f45f08a85427ff40e7a785d4dd2873.png";
import imgC from "figma:asset/682af015357950540c5236f0bbbd3c791d64dd3e.png";

/**
 * @figmaAssetKey b44ae3f606c85e77a35909a86e731c0dad48a3f0
 */
function Component({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Component 1">
      <div className="absolute aspect-[1536/1024] left-0 right-[51%] top-0" data-name="ER/Smooth ER">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgErSmoothEr} />
      </div>
      <div className="absolute aspect-[1536/1024] left-0 right-[51%] top-[1068.07px]" data-name="Chloroplast">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChloroplast} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[51%] right-0 top-[1068.07px]" data-name="Cell Diagram">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCellDiagram} />
      </div>
      <div className="absolute aspect-[1536/1024] left-0 right-[51%] top-[2136.14px]" data-name="Mitochondrion">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMitochondrion} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[51%] right-0 top-[2136.14px]" data-name="Osmosis/Turgor Pressure">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOsmosisTurgorPressure} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[51%] right-0 top-0" data-name="c">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgC} />
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="relative size-full" />;
}