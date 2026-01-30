"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const teamMembers = [
    {
        name: "Baibhab Mishra",
        role: "President",
        image: "baibhab.png",
        linkedin: "#",
        email: "mailto:example@email.com",
        bio: "Lorem ipsum ",
        color: "blue",
    },
    {
        name: "Varan Bhatia",
        role: "Vice President",
        image: "varan.png",
        linkedin: "#",
        email: "mailto:example@email.com",
        bio: "Leading project execution and client relations.",
        color: "indigo",
    },
    {
        name: "Yashvardhan Parihar",
        role: "Director of Outreach",
        image: "yash.jpg",
        linkedin: "#",
        email: "mailto:example@email.com",
        bio: "Managing external partnerships and alumni relations.",
        color: "violet",
    },
    {
        name: "Jeevan Mohapatra",
        role: "CaseQuesta Coordinator",
        image: "jeevan.jpg",
        linkedin: "#",
        email: "mailto:example@email.com",
        bio: "Spearheading the flagship case competition.",
        color: "emerald",
    },
    {
        name: "Deepinder Singh Pruthi",
        role: "Case Hackathon Coordinator",
        image: "deepinder.jpg",
        linkedin: "#",
        email: "mailto:example@email.com",
        bio: "Organizing high-impact hackathons.",
        color: "blue",
    },
    {
        name: "Anushka Purwar",
        role: "Director of Brand Building",
        image: "anushka.jpg",
        linkedin: "#",
        email: "mailto:example@email.com",
        bio: "Crafting the club's narrative and digital presence.",
        color: "indigo",
    },
];

const glowMap: Record<string, string> = {
    blue: `
    group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/10
    dark:group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] dark:group-hover:border-blue-500/30
  `,
    indigo: `
    group-hover:border-indigo-400 group-hover:shadow-lg group-hover:shadow-indigo-500/10
    dark:group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)] dark:group-hover:border-indigo-500/30
  `,
    violet: `
    group-hover:border-violet-400 group-hover:shadow-lg group-hover:shadow-violet-500/10
    dark:group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)] dark:group-hover:border-violet-500/30
  `,
    emerald: `
    group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/10
    dark:group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] dark:group-hover:border-emerald-500/30
  `,
};

const iconHoverMap: Record<string, string> = {
    blue: "hover:text-blue-600 hover:bg-blue-100 hover:border-blue-300 dark:hover:text-blue-400 dark:hover:bg-blue-400/10 dark:hover:border-blue-400/50",
    indigo: "hover:text-indigo-600 hover:bg-indigo-100 hover:border-indigo-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-400/10 dark:hover:border-indigo-400/50",
    violet: "hover:text-violet-600 hover:bg-violet-100 hover:border-violet-300 dark:hover:text-violet-400 dark:hover:bg-violet-400/10 dark:hover:border-violet-400/50",
    emerald: "hover:text-emerald-600 hover:bg-emerald-100 hover:border-emerald-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-400/10 dark:hover:border-emerald-400/50",
};

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-300 selection:bg-blue-500/30">
            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-200/20 dark:bg-blue-900/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-200/20 dark:bg-indigo-900/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 py-24 px-6">
                <section className="mx-auto max-w-4xl text-center mb-20">
                    <h1 className="mb-6 font-playfair text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Our Team
                    </h1>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                        Meet the dedicated leaders driving BPCC's mission with passion and expertise.
                    </p>
                </section>

                <section className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className={`
                  group relative flex flex-col items-center justify-center
                  h-[400px] w-full rounded-2xl 
                  bg-white border border-neutral-200 shadow-sm
                  dark:bg-neutral-900/80 dark:border-white/5 dark:backdrop-blur-sm
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  ${glowMap[member.color]}
                `}
                            >
                                <div className="flex flex-col items-center justify-center px-6 transition-transform duration-500 ease-out group-hover:-translate-y-4">
                                    <div className="relative mb-6 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                                  h-32 w-32 group-hover:h-20 group-hover:w-20 group-hover:mb-4">
                                        <div className="absolute inset-0 rounded-full border border-neutral-200 dark:border-white/10 p-1 shadow-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">

                                            {/* 👇👇 THE PATH IS SET HERE 👇👇 */}
                                            <Image
                                                src={`/logos/${member.image}`}
                                                alt={member.name}
                                                fill
                                                className="rounded-full object-cover"
                                            />

                                        </div>
                                    </div>

                                    <div className="text-center mb-4">
                                        <h3 className="font-playfair text-2xl font-bold text-neutral-900 dark:text-white mb-2 transition-all duration-300 group-hover:scale-95">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                                            {member.role}
                                        </p>
                                    </div>

                                    <div className="flex gap-4 mb-2">
                                        <Link
                                            href={member.linkedin}
                                            target="_blank"
                                            className={`
                        p-2 rounded-full border border-neutral-200 dark:border-white/10 
                        text-neutral-500 dark:text-neutral-400 transition-all duration-300
                        ${iconHoverMap[member.color]}
                      `}
                                        >
                                            <Linkedin size={18} />
                                        </Link>
                                        <Link
                                            href={member.email}
                                            className={`
                        p-2 rounded-full border border-neutral-200 dark:border-white/10 
                        text-neutral-500 dark:text-neutral-400 transition-all duration-300
                        ${iconHoverMap[member.color]}
                      `}
                                        >
                                            <Mail size={18} />
                                        </Link>
                                    </div>

                                    <div
                                        className="
                      max-h-0 opacity-0 overflow-hidden 
                      transition-all duration-500 ease-out 
                      group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-2
                    "
                                    >
                                        <div className="w-8 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-auto mb-3"></div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}