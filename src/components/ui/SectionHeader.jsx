import SectionBadge from "./SectionBadge";

export default function SectionHeader({ icon, label, title, description }) {
  return (
    <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
      <div className="w-full max-w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
        <SectionBadge icon={icon} label={label} />
        <h2 className="w-full text-center text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
          {title}
        </h2>
        <p className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}