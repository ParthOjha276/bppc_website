"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { TrendingUp } from "lucide-react";

const clients = [
    { name: "Visit Health", logo: "visit.png", href: "https://getvisitapp.com" },
    { name: "NuPort", logo: "nuport.png", href: "https://nuport.io" },
    { name: "Origin Medical", logo: "origin.png", href: "#" }, // need link , will do later 
    { name: "Belgian Waffle House", logo: "bwh.png", href: "https://thebelgianwaffle.co" },
    { name: "Smile Foundation", logo: "smile.png", href: "https://www.smilefoundationindia.org" },
    { name: "Infosys", logo: "infosys.png", href: "https://www.infosys.com" },
];

export default function ClientsPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white py-24 px-6">

            <BackToTop />

            {/* header  */}
            <section className="mx-auto max-w-4xl text-center mb-16">
                <h1 className="mb-6 font-playfair text-5xl font-bold">Our Clients</h1>
                <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto mb-6"></div>
                <p className="text-neutral-400 text-lg">
                    Trusted by leading organizations across various industries
                </p>
            </section>

            <section className="mx-auto max-w-6xl mb-24">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {clients.map((client) => (
                        <Link
                            key={client.name}
                            href={client.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-48 w-full max-w-sm items-center justify-center
                         rounded-xl bg-white p-8 shadow-md 
                         transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="relative w-full h-full">

                                <Image
                                    src={`/logos/${client.logo}`}
                                    alt={client.name}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-4">
                <div className="relative overflow-hidden rounded-2xl bg-neutral-900/80 border border-white/5 p-8 md:p-12 shadow-2xl">

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                        <div className="max-w-2xl">
                            <h2 className="font-playfair text-3xl font-bold mb-4 text-white">
                                Currently Working On
                            </h2>
                            <p className="text-neutral-400 mb-8 leading-relaxed">
                                We are actively engaged with multiple clients across diverse sectors,
                                delivering strategic solutions and driving business growth.
                            </p>

                            <div className="flex gap-12">
                                <div>
                                    <div className="text-3xl font-bold text-blue-500">10+</div>
                                    <div className="text-sm text-neutral-400 mt-1">Active Projects</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-500">5+</div>
                                    <div className="text-sm text-neutral-400 mt-1">Industries</div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center justify-center pr-8">
                            <TrendingUp className="w-24 h-24 text-blue-500 opacity-80" />
                        </div>

                    </div>
                </div>
            </section>
            <div className="mt-24">
                <Footer />
            </div>
        </main>
    );
}