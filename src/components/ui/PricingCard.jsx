import CheckIcon from "../icons/CheckIcon";

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted,
}) {
  const textMain = highlighted ? "text-white" : "text-[#37322F]";
  const textSub = highlighted ? "text-white/70" : "text-[#605A57]";

  return (
    <div
      className={`flex-1 p-6 md:p-8 flex flex-col gap-6 border-b md:border-b-0 border-[rgba(55,50,47,0.12)] ${
        highlighted ? "bg-[#37322F]" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h3 className={`text-lg font-semibold ${textMain}`}>{name}</h3>
        <p className={`text-sm leading-6 ${textSub}`}>{description}</p>
      </div>

      <div className={`flex items-end gap-1 ${textMain}`}>
        <span className="text-4xl md:text-5xl font-semibold tracking-tight">
          {price}
        </span>
        <span className={`text-sm pb-2 ${textSub}`}>{period}</span>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className={`flex items-center gap-2 text-sm ${textMain}`}>
            <CheckIcon className="shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`h-11 rounded-full text-sm font-medium cursor-pointer ${
          highlighted
            ? "bg-white text-[#37322F]"
            : "bg-[#37322F] text-white shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}