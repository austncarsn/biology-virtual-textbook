import imgLysosome from "figma:asset/c53cb361b74f2d003e38d0cb46ef8bc8d8c83421.png";
import imgPlantCell from "figma:asset/2b2342859da9a3d52a7c38ef9379c8953a71e32c.png";
import imgRibosome80SEukarotic from "figma:asset/55875ca133e9e74589135174fa0cac54f76cbb44.png";
import imgCentrosomeCentrioles from "figma:asset/7812bee65a0bf168f737e26c9905dd1667088d91.png";
import imgNuclearPoreComplex from "figma:asset/619a02196aae72fae148649088eaccbffef32f08.png";

/**
 * @figmaAssetKey 58a4cc2602894442e3a1229c4a0f11a2f15864df
 */
function Component({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Component 2">
      <div className="absolute aspect-[1536/1024] left-[31.93%] right-[34.71%] top-0" data-name="Lysosome">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLysosome} />
      </div>
      <div className="absolute aspect-[1024/1536] left-0 right-[69.5%] top-0" data-name="Plant Cell">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlantCell} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[66.64%] right-0 top-0" data-name="Ribosome (80S Eukarotic)">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRibosome80SEukarotic} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[31.93%] right-[34.71%] top-[1082.85px]" data-name="Centrosome & Centrioles">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCentrosomeCentrioles} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[66.64%] right-0 top-[1082.85px]" data-name="Nuclear Pore Complex">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNuclearPoreComplex} />
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="relative size-full" />;
}