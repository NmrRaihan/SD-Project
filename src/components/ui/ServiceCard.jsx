import Image from "next/image";

export default function ServiceCard({ title, description, image, alt }) {
  return (
    <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
      <h3 className="self-stretch text-[#49423D] text-sm font-semibold leading-6">
        {title}
      </h3>
      <p className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px]">
        {description}
      </p>
      <Image
        src={image}
        alt={alt}
        width={500}
        height={160}
        className="w-full h-40 object-cover rounded-md mt-3"
      />
    </div>
  );
}