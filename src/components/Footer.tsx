import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-neutral-100 text-neutral-700 dark:bg-black dark:text-neutral-300">
            {/* Top accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />

            <div className="mx-auto max-w-7xl px-6 py-14">
                {/* Main content */}
                <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                    {/* Left: Logo + tagline */}
                    <Link href="/" className="flex items-center gap-4">
                        {/* Dark mode logo */}
                        <Image
                            src="/bpcclogo.png"
                            alt="BITS Pilani Consulting Club"
                            width={40}
                            height={40}
                            className="hidden dark:block"
                            priority
                        />

                        {/* Light mode logo */}
                        <Image
                            src="/bpcclogo_light.png"
                            alt="BITS Pilani Consulting Club"
                            width={40}
                            height={40}
                            className="block dark:hidden"
                            priority
                        />

                        <p className="font-serif text-lg text-neutral-900 dark:text-white">
                            Strategize. Solve. Succeed.
                        </p>
                    </Link>

                    {/* Center: Quick Links */}
                    <div className="text-center">
                        <h4 className="mb-3 font-serif text-lg text-neutral-900 dark:text-white">
                            Quick Links
                        </h4>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link href="/" className="hover:text-black dark:hover:text-white">
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="hover:text-black dark:hover:text-white"
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className="hover:text-black dark:hover:text-white"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/team"
                                className="hover:text-black dark:hover:text-white"
                            >
                                Team
                            </Link>
                            <Link
                                href="/contact"
                                className="hover:text-black dark:hover:text-white"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Right: Contact + Socials */}
                    <div className="flex flex-col items-center gap-4 md:items-end">
                        <h4 className="font-serif text-lg text-neutral-900 dark:text-white">
                            Contact
                        </h4>

                        <div className="flex items-center gap-2 text-sm">
                            <Mail size={16} className="text-blue-500" />
                            <span>bitspilaniconsultingclub@bits-pilani.ac.in</span>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/bits-pilani-consulting-club/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md p-2 transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
                            >
                                <Linkedin size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/bitspilaniconsultingclub/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md p-2 transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-neutral-300 dark:bg-neutral-800" />

                {/* Bottom text */}
                <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                    © 2025 BITS Pilani Consulting Club. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
