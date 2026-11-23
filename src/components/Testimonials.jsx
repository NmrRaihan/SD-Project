"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "./ui/SectionHeader";
import TestimonialsBadgeIcon from "./icons/TestimonialsBadgeIcon";

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];

    return (
        <section className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
            <SectionHeader
                icon={<TestimonialsBadgeIcon />}
                label="Testimonials"
                title="Confidence backed by results"
                description={
                    <>
                        Our customers achieve more each day
                        <br className="hidden sm:block" /> because their tools are simple,
                        powerful, and clear.
                    </>
                }
            />

            <div className="self-stretch px-2 overflow-hidden flex justify-start items-center">
                <div className="flex-1 py-12 md:py-16 flex flex-col justify-center items-center gap-6">
                    <div className="self-stretch px-3 md:px-12 flex flex-col md:flex-row justify-center items-start gap-4">
                        <Image
                            src={active.image}
                            alt={active.name}
                            width={192}
                            height={200}
                            priority
                            className="w-48 h-50 rounded-lg object-cover"
                        />

                        <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6">
                            <p className="self-stretch text-[#49423D] text-2xl md:text-[32px] font-medium leading-10 md:leading-[42px] tracking-tight">
                                &ldquo;{active.quote}&rdquo;
                            </p>
                            <div className="self-stretch flex flex-col gap-1">
                                <div className="text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px]">
                                    {active.name}
                                </div>
                                <div className="text-[rgba(73,66,61,0.70)] text-lg font-medium leading-[26px]">
                                    {active.role}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Avatar switcher */}
                    <div className="flex items-center gap-3">
                        {testimonials.map((t, index) => (
                            <button
                                key={t.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show testimonial from ${t.name}`}
                                className={`rounded-full overflow-hidden size-10 border-2 cursor-pointer transition-all ${index === activeIndex
                                    ? "border-[#37322F] opacity-100"
                                    : "border-transparent opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    loading="eager"
                                    className="size-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}