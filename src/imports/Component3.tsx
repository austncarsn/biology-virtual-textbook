import imgEndomembraneSystemIntegration from "figma:asset/701f6fa66894e2506643db74cc271e3df0d196e1.png";
import imgMicrotubules from "figma:asset/74a02b7a68f4731b55c5a647e84ad8af70b4a07f.png";
import imgMemrbaneTransport from "figma:asset/88b70dcb38c59b9c489d8f09e325a85266a59b75.png";

/**
 * @figmaAssetKey a520e6a002b2f23c5c88babfe6a9be25e23d1cc7
 */
function Component({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Component 3">
      <div className="absolute aspect-[1536/1024] left-0 right-[67.57%] top-0" data-name="Endomembrane System Integration">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEndomembraneSystemIntegration} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[33.78%] right-[33.78%] top-0" data-name="Microtubules">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMicrotubules} />
      </div>
      <div className="absolute aspect-[1536/1024] left-[67.57%] right-0 top-0" data-name="Memrbane Transport">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMemrbaneTransport} />
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="relative size-full" />;
}