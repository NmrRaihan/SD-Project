import { services } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import DiagonalPattern from "./ui/DiagonalPattern";

export default function Services() {
  return (
    <section className="self-stretch w-full border-t border-b border-[#E0DEDB] flex justify-center items-start mt-60">
      <DiagonalPattern />

      <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <DiagonalPattern />
    </section>
  );
}