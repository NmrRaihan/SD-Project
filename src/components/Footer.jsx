import { socials, footerColumns } from "@/data/footer";
import FooterColumn from "./ui/FooterColumn";

export default function Footer() {
  return (
    <footer className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
      <div className="self-stretch flex flex-col md:flex-row justify-between items-stretch pb-8">
        {/* Brand */}
        <div className="p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          <div className="text-[#49423D] text-xl font-semibold leading-4">
            Brillance
          </div>
          <p className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
            Coding made effortless
          </p>

          <div className="flex justify-start items-start gap-4">
            {socials.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                aria-label={label}
                className="size-6 flex items-center justify-center"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {footerColumns.map(({ id, ...column }) => (
            <FooterColumn key={id} {...column} />
          ))}
        </div>
      </div>

      {/* Decorative bottom pattern */}
      <div
        aria-hidden="true"
        className="self-stretch h-12 border-t border-b border-[rgba(55,50,47,0.12)] bg-[repeating-linear-gradient(-45deg,rgba(3,7,18,0.08)_0_0.5px,transparent_0.5px_8px)]"
      />
    </footer>
  );
}