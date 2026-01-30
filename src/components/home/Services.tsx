import {
    Rocket,
    Package,
    Settings,
    Briefcase,
    Search,
    TrendingUp,
} from "lucide-react";

const services = [
    {
        title: "Market Entry",
        description:
            "We help organizations enter new segments, geographies, and verticals through tailored market research and impact-driven strategy.",
        icon: Rocket,
        glow: "blue",
    },
    {
        title: "Product Consulting",
        description:
            "We convert user insights into actionable product decisions by prioritizing the right features, flows, and fixes.",
        icon: Package,
        glow: "indigo",
    },
    {
        title: "Tailored Services",
        description:
            "From strategy to execution, we customize our approach to fit your stage, sector, and specific challenges.",
        icon: Settings,
        glow: "violet",
    },
    {
        title: "Company Strategy",
        description:
            "We assess business models, goals, and market positioning to sharpen long-term strategic direction.",
        icon: Briefcase,
        glow: "emerald",
    },
    {
        title: "Research",
        description:
            "Our research goes beyond trends to uncover nuanced insights specific to your industry and objectives.",
        icon: Search,
        glow: "amber",
    },
    {
        title: "Market Strategies",
        description:
            "From pricing and channels to activation playbooks, we design scalable go-to-market strategies.",
        icon: TrendingUp,
        glow: "rose",
    },
];

const glowStyles: Record<string, string> = {
    blue:
        "shadow-[0_0_18px_rgba(59,130,246,0.2)] hover:shadow-[0_0_34px_rgba(59,130,246,0.38)] hover:border-blue-400/50",
    indigo:
        "shadow-[0_0_18px_rgba(99,102,241,0.2)] hover:shadow-[0_0_34px_rgba(99,102,241,0.45)] hover:border-indigo-400/50",
    violet:
        "shadow-[0_0_18px_rgba(139,92,246,0.2)] hover:shadow-[0_0_34px_rgba(139,92,246,0.40)] hover:border-violet-400/50",
    emerald:
        "shadow-[0_0_18px_rgba(16,185,129,0.2)] hover:shadow-[0_0_34px_rgba(16,185,129,0.40)] hover:border-emerald-400/50",
    amber:
        "shadow-[0_0_18px_rgba(245,158,11,0.2)] hover:shadow-[0_0_34px_rgba(245,158,11,0.39)] hover:border-amber-400/50",
    rose:
        "shadow-[0_0_18px_rgba(244,63,94,0.2)] hover:shadow-[0_0_34px_rgba(244,63,94,0.40)] hover:border-rose-400/50",
};

const iconHoverColor: Record<string, string> = {
    blue: "group-hover:text-blue-400",
    indigo: "group-hover:text-indigo-400",
    violet: "group-hover:text-violet-400",
    emerald: "group-hover:text-emerald-400",
    amber: "group-hover:text-amber-400",
    rose: "group-hover:text-rose-400",
};

export default function Services() {
    return (
        <section className="relative -mt-24 bg-neutral-50 px-5 py-20 dark:bg-neutral-950 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-7xl">
                {/* header */}
                <div className="mb-14 text-center sm:mb-16">
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-wide text-neutral-900 dark:text-white md:text-4xl">
                        Our Services
                    </h2>
                    <p className="mx-auto max-w-2xl font-sans text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
                        We help businesses overcome challenges through tailored consulting
                        services.
                    </p>
                </div>

                {/* grid */}
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
                    {services.map((service, idx) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={idx}
                                className={`group rounded-lg border border-neutral-200 bg-white p-7
                  transition-all duration-300
                  hover:-translate-y-1
                  dark:border-neutral-800 dark:bg-neutral-900
                  sm:p-8
                  ${glowStyles[service.glow]}`}
                            >
                                <div
                                    className={`mb-5 flex justify-center
                    text-neutral-500 dark:text-neutral-300
                    transition-all duration-300 ease-out
                    group-hover:rotate-6
                    group-hover:scale-105
                    ${iconHoverColor[service.glow]}`}
                                >
                                    <Icon size={22} strokeWidth={1.75} />
                                </div>

                                <h3 className="mb-3 text-center font-serif text-lg font-semibold text-neutral-900 dark:text-white">
                                    {service.title}
                                </h3>

                                <p className="text-center font-sans text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
