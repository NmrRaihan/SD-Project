import { plans } from "@/data/pricing";
import PricingCard from "./ui/PricingCard";
import SectionHeader from "./ui/SectionHeader";
import DiagonalPattern from "./ui/DiagonalPattern";
import PricingBadgeIcon from "./icons/PricingBadgeIcon";

export default function Pricing() {
  return (
    <section className="w-full flex flex-col justify-center items-center border-b border-[rgba(55,50,47,0.12)]">
      <SectionHeader
        icon={<PricingBadgeIcon />}
        label="Plans & Pricing"
        title="Choose the perfect plan for your business"
        description={
          <>
            Scale your operations with flexible pricing that grows with your
            team.
            <br /> Start free, upgrade when you&apos;re ready.
          </>
        }
      />

      <div className="self-stretch flex justify-center items-stretch">
        <DiagonalPattern className="w-12 hidden md:block" />

        <div className="flex-1 flex flex-col md:flex-row border-l border-r border-[rgba(55,50,47,0.12)] md:divide-x md:divide-[rgba(55,50,47,0.12)]">
          {plans.map(({ id, ...plan }) => (
            <PricingCard key={id} {...plan} />
          ))}
        </div>

        <DiagonalPattern className="w-12 hidden md:block" />
      </div>
    </section>
  );
}