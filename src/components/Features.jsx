import { features } from "@/data/features";
import FeatureCard from "./ui/FeatureCard";
import SectionHeader from "./ui/SectionHeader";
import DiagonalPattern from "./ui/DiagonalPattern";
import ServicesBadgeIcon from "./icons/ServicesBadgeIcon";

const getBorderClasses = (index, total) =>
  [
    index !== total - 1 && "border-b",
    index >= total - 2 && "md:border-b-0",
    index % 2 === 0 && "md:border-r",
  ]
    .filter(Boolean)
    .join(" ");

export default function Features() {
  return (
    <section className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <SectionHeader
        icon={<ServicesBadgeIcon />}
        label="Services"
        title="Built for absolute clarity and focused work"
        description={
          <>
            Stay focused with tools that organize, connect
            <br /> and turn information into confident decisions.
          </>
        }
      />

      <div className="self-stretch flex justify-center items-start">
        <DiagonalPattern className="w-12 hidden md:block" />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {features.map(({ id, ...feature }, index) => (
            <FeatureCard
              key={id}
              {...feature}
              className={getBorderClasses(index, features.length)}
            />
          ))}
        </div>

        <DiagonalPattern className="w-12 hidden md:block" />
      </div>
    </section>
  );
}