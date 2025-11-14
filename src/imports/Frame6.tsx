import imgBiologyCover from "figma:asset/8c25ced55a2e868a767bcc863c13ebd93da8241f.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1345.05px] left-0 top-0 w-[900.996px]" data-name="Biology Cover">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" loading="lazy" decoding="async" className="absolute h-[114.2%] left-[-6.43%] max-w-none top-[-7.01%] w-[113.65%]" src={imgBiologyCover} />
        </div>
      </div>
    </div>
  );
}