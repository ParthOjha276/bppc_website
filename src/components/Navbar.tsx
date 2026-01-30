"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
    };

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur bg-white dark:bg-black/80 border-b border-neutral-200 dark:border-neutral-800">
            <div className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3 text-lg font-semibold text-neutral-900 dark:text-white transition-colors hover:text-blue-500 dark:hover:text-blue-400 md:text-xl"
                >
                    <div className="relative h-8 w-8">
                        <Image
                            src="/bpcclogo_light.png"
                            alt="BPCC Logo"
                            fill
                            className="object-contain dark:hidden"
                            priority
                        />
                        <Image
                            src="/bpcclogo.png"
                            alt="BPCC Logo"
                            fill
                            className="object-contain hidden dark:block"
                            priority
                        />
                    </div>
                    BITS Pilani Consulting Club
                </Link>


                {/* Nav */}
                <nav className="flex items-center gap-6 text-sm text-neutral-300">
                    <Link href="/" className="transition-colors text-neutral-700 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400">Home</Link>
                    <Link href="/about" className="transition-colors text-neutral-700 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400">About</Link>
                    <Link href="/projects" className="transition-colors text-neutral-700 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400">Projects</Link>
                    <Link href="/team" className="transition-colors text-neutral-700 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400">Team</Link>
                    <Link href="/events" className="transition-colors text-neutral-700 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400">Events</Link>
                    <Link href="/contact" className="transition-colors text-neutral-700 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400">Contact</Link>

                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="ml-2 flex h-9 w-9 items-center justify-center rounded-full text-lg
                         text-neutral-300 hover:text-white
                         hover:bg-white/10
                        focus:outline-none"
                    >
                        {isDark ? "🌙" : "☀️"}
                    </button>

                </nav>
            </div>
        </header>
    );
}
