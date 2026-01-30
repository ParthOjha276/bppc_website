"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const glowMap: Record<string, string> = {
    blue: `
    shadow-[0_0_18px_rgba(59,130,246,0.15)] 
    hover:shadow-[0_0_34px_rgba(59,130,246,0.30)] 
    hover:border-blue-500/50
  `,
    indigo: `
    shadow-[0_0_18px_rgba(99,102,241,0.15)] 
    hover:shadow-[0_0_34px_rgba(99,102,241,0.35)] 
    hover:border-indigo-500/50
  `,
    violet: `
    shadow-[0_0_18px_rgba(139,92,246,0.15)] 
    hover:shadow-[0_0_34px_rgba(139,92,246,0.30)] 
    hover:border-violet-500/50
  `,
    emerald: `
    shadow-[0_0_18px_rgba(16,185,129,0.15)] 
    hover:shadow-[0_0_34px_rgba(16,185,129,0.30)] 
    hover:border-emerald-500/50
  `,
};

const approachCards = [
    {
        step: "01",
        title: "Understanding Your Needs",
        text: "We spend time deeply understanding your problem and objectives before proposing solutions.",
        color: "blue",
    },
    {
        step: "02",
        title: "Data Driven Analysis",
        text: "Every idea is backed by rigorous research and structured analysis.",
        color: "indigo",
    },
    {
        step: "03",
        title: "Strategic Problem Solving",
        text: "We turn insights into focused strategies aligned with your vision.",
        color: "violet",
    },
    {
        step: "04",
        title: "Deliver & Iterate",
        text: "Execution, feedback loops, and refinement to maximize impact.",
        color: "emerald",
    },
];

const alumniLogos = [
    { src: "mckinseey.png", alt: "McKinsey", href: "https://www.mckinsey.com" },
    { src: "bcg.png", alt: "BCG", href: "https://www.bcg.com" },
    { src: "bain.png", alt: "Bain", href: "https://www.bain.com" },
    { src: "pwc.png", alt: "PwC", href: "https://www.pwc.com" },
    { src: "kpmg.png", alt: "KPMG", href: "https://home.kpmg" },
    { src: "ey.png", alt: "EY", href: "https://www.ey.com" },
    { src: "deloitte.png", alt: "Deloitte", href: "https://www2.deloitte.com" },
    { src: "jpmorgan.png", alt: "JP Morgan", href: "https://www.jpmorgan.com" },
    { src: "blackrock.png", alt: "BlackRock", href: "https://www.blackrock.com" },
    { src: "goldman.png", alt: "Goldman Sachs", href: "https://www.goldmansachs.com" },
];

const caseCompLogos = [
    { src: "iimb.png", alt: "IIM Bangalore", href: "https://www.iimb.ac.in" },
    { src: "iima.png", alt: "IIM Ahmedabad", href: "https://www.iima.ac.in" },
    { src: "iimc.png", alt: "IIM Calcutta", href: "https://www.iimcal.ac.in" },
    { src: "iitb.png", alt: "IIT Bombay", href: "https://www.iitb.ac.in" },
    { src: "iitd.png", alt: "IIT Delhi", href: "https://home.iitd.ac.in" },
    { src: "iitk.png", alt: "IIT Kanpur", href: "https://www.iitk.ac.in" },
    { src: "xlri.png", alt: "XLRI", href: "https://xlri.ac.in" },
    { src: "isb.png", alt: "ISB", href: "https://www.isb.edu" },
    { src: "mastersunion.png", alt: "Masters Union", href: "https://mastersunion.org" },
];

function CountUp({ target }: { target: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStarted(true);
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        let current = 0;
        const step = Math.ceil(target / 60);

        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            if (ref.current) ref.current.textContent = current.toString();
        }, 20);

        return () => clearInterval(interval);
    }, [started, target]);

    return <span ref={ref}>0</span>;
}

export default function AboutPage() {
    return (
        <main className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-300">
            <BackToTop />

            {/* abt us  */}
            <section className="mx-auto max-w-4xl px-6 py-24 text-center">
                <h1 className="mb-6 font-playfair text-5xl font-bold">About Us</h1>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                    Founded in 2012, BITS Pilani Consulting Club is a student-run consulting
                    organization known for sharp problem-solving and real-world impact.
                </p>
            </section>

            {/* consulting approach  */}
            <section className="px-6 py-24">
                <h2 className="mb-14 text-center font-playfair text-4xl">
                    Our Consulting Approach
                </h2>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {approachCards.map((card) => (
                        <div
                            key={card.title}
                            className={`
                group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2
                bg-white border border-neutral-200
                dark:bg-neutral-900/80 dark:border-white/10
                ${glowMap[card.color]}
              `}
                        >
                            <div className="mb-4 text-sm font-semibold text-neutral-400 dark:text-neutral-500">
                                {card.step}
                            </div>
                            <h3 className="mb-4 font-playfair text-xl font-semibold">
                                {card.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* aluminis */}
            <section className="px-6 py-24">
                <div className="text-center mb-14">
                    <h2 className="font-playfair text-4xl mb-4">Our Alumni</h2>
                    <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto"></div>
                </div>

                <div className="mx-auto flex flex-wrap justify-center gap-8 max-w-6xl">
                    {alumniLogos.map((item) => (
                        <Link
                            key={item.alt}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-28 w-60 items-center justify-center
                         rounded-xl p-6 shadow-md transition-all duration-300 
                         bg-white border border-neutral-200
                         dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-sm
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <Image
                                src={`/logos/${item.src}`}
                                alt={item.alt}
                                width={180}
                                height={80}

                                className="object-contain max-h-14 w-auto transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
                            />
                        </Link>
                    ))}
                </div>
            </section>

            {/* case comps  */}
            <section className="px-6 py-24">
                <div className="text-center mb-14">
                    <h2 className="font-playfair text-4xl mb-4">Case Competitions Won At</h2>
                    <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto"></div>
                </div>

                <div className="mx-auto flex flex-wrap justify-center gap-8 max-w-6xl">
                    {caseCompLogos.map((item) => (
                        <Link
                            key={item.alt}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-28 w-60 items-center justify-center
                         rounded-xl p-6 shadow-md transition-all duration-300 
                         bg-white border border-neutral-200
                         dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-sm
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <Image
                                src={`/logos/${item.src}`}
                                alt={item.alt}
                                width={180}
                                height={80}

                                className="object-contain max-h-14 w-auto transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
                            />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Abt pilani  */}
            <section
                className="relative px-6 py-32 text-center bg-cover bg-center mb-24"
                style={{ backgroundImage: "url(/bits-pilani.jpg)" }}
            >
                <div className="absolute inset-0 bg-neutral-900/80 dark:bg-black/70" />

                <div className="relative mx-auto max-w-4xl text-white">
                    <h2 className="mb-6 font-playfair text-5xl">About BITS Pilani</h2>
                    <p className="mb-16 text-neutral-200 leading-relaxed">
                        BITS Pilani is a globally acclaimed institution with a legacy of
                        producing leaders across consulting, technology, and entrepreneurship.
                    </p>

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div>
                            <div className="text-4xl font-bold text-blue-400">
                                <CountUp target={15} />+
                            </div>
                            <div className="text-sm text-neutral-300">Unicorns</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-400">
                                <CountUp target={1000} />+
                            </div>
                            <div className="text-sm text-neutral-300">
                                Consulting Professionals
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-400">
                                <CountUp target={15} />L+
                            </div>
                            <div className="text-sm text-neutral-300">Alumni Network</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-400">
                                <CountUp target={10000} />+
                            </div>
                            <div className="text-sm text-neutral-300">Founders & CEOs</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}