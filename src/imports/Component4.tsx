import imgMitochondrion from "figma:asset/bb61d4a3cc51a74c080384c9ca767d9d283f74d4.png";
import imgVacuole from "figma:asset/87a494eedaefd579b8e0dabc8d3c6373682b5180.png";

/**
 * @figmaAssetKey 3c2ae3f37fce1c8216efcfca6dc20baf8dbad0a1
 */
function Component({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Component 4">
      <div className="absolute aspect-[1536/1024] left-0 right-[51.02%] top-0" data-name="Mitochondrion">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMitochondrion} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[51.02%] right-0 top-0" data-name="Vacuole">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVacuole} />
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="relative size-full" />;
}