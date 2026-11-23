const navLinks = ["Products", "Pricing", "Docs"];

export default function Header() {
  return (
    <header className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]" />

      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
        <div className="flex justify-center items-center">
          <div className="text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 cursor-pointer">
            Brillance
          </div>

          <nav className="pl-3 sm:pl-4 md:pl-5 hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <button className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] rounded-full text-[#37322F] text-xs md:text-[13px] font-medium leading-5 cursor-pointer">
          Log in
        </button>
      </div>
    </header>
  );
}