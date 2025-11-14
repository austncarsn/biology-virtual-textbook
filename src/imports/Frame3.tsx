import imgOsmosis from "figma:asset/169430122be2e3705ec095ce9c7e9e54ac04f0ca.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1024px] left-0 top-0 w-[1536px]" data-name="Osmosis">
  <img alt="" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOsmosis} />
      </div>
    </div>
  );
}