export default function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
      <h4 className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
        {title}
      </h4>
      <ul className="flex flex-col items-start gap-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[#49423D] text-sm font-normal leading-5 hover:text-[#37322F] transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}