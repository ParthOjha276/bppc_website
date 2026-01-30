"use client";

import { useState } from "react";
import {
    Mail,
    Phone,
    Linkedin,
    Instagram,
    Send,
    CheckCircle,
    ArrowRight,
    Loader2
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-300 selection:bg-blue-500/30">

            {/* Background Ambience */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
            </div>

            <div className="relative z-10 py-24 px-6">

                {/* Header */}
                <section className="mx-auto max-w-4xl text-center mb-12">
                    <h1 className="mb-4 font-playfair text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors duration-300">
                        Contact Us
                    </h1>
                    <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg transition-colors duration-300">
                        Ready to strategize, solve, and succeed? Get in touch.
                    </p>
                </section>

                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    {/* Left Column: Form */}
                    <div className="h-full">
                        <div className={`
                            h-full p-6 md:p-8 rounded-2xl 
                            bg-white border border-neutral-200 shadow-sm
                            dark:bg-neutral-900/50 dark:border-white/5 dark:backdrop-blur-md
                            dark:shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]
                            hover:shadow-md dark:hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]
                            transition-all duration-500
                        `}>

                            {status === "success" ? (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-10">
                                    <div className="mb-6 p-4 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 shadow-sm dark:shadow-[0_0_20px_-5px_rgba(74,222,128,0.3)]">
                                        <CheckCircle size={60} strokeWidth={1.5} />
                                    </div>
                                    <h2 className="font-playfair text-2xl font-bold mb-3 text-neutral-900 dark:text-white">Message Received!</h2>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
                                        We'll get back to you at <strong>{formData.email}</strong> shortly.
                                    </p>

                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-90 dark:hover:bg-neutral-200 transition-all"
                                    >
                                        Send another
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ) : (
                                // Form State
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="font-playfair text-2xl font-bold mb-6 text-neutral-900 dark:text-white transition-colors duration-300">
                                        Send us a Message
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl 
                                                bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400
                                                dark:bg-neutral-950/50 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-700
                                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 
                                                outline-none transition-all text-sm"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl 
                                                bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400
                                                dark:bg-neutral-950/50 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-700
                                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 
                                                outline-none transition-all text-sm"
                                                placeholder="Enter your email address"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl 
                                                bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400
                                                dark:bg-neutral-950/50 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-700
                                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 
                                                outline-none transition-all text-sm"
                                                placeholder="Project Inquiry"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl 
                                                bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400
                                                dark:bg-neutral-950/50 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-700
                                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 
                                                outline-none transition-all text-sm resize-none"
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                        >
                                            {status === "submitting" ? (
                                                <><Loader2 className="animate-spin w-4 h-4" /> Sending...</>
                                            ) : (
                                                <>Send Message <Send size={16} /></>
                                            )}
                                        </button>

                                        {status === "error" && (
                                            <p className="text-red-500 dark:text-red-400 text-xs text-center mt-2 bg-red-100 dark:bg-red-900/20 py-2 rounded-lg border border-red-200 dark:border-red-900/50">
                                                Something went wrong. Please check your connection.
                                            </p>
                                        )}
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="flex flex-col h-full">
                        <div className={`
                            h-full p-8 rounded-2xl 
                            bg-white border border-neutral-200 shadow-sm
                            dark:bg-neutral-900/50 dark:border-white/5 dark:backdrop-blur-md
                            dark:shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)]
                            hover:shadow-md dark:hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)]
                            transition-all duration-500 flex flex-col justify-between
                        `}>

                            <div>
                                <h2 className="font-playfair text-2xl font-bold mb-8 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-white/10 pb-4 transition-colors duration-300">
                                    Get in Touch
                                </h2>

                                <div className="mb-8 group">
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Club Email</h3>
                                    <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 text-sm">
                                        <div className="p-2 rounded-full bg-neutral-100 border border-neutral-200 dark:bg-white/5 dark:border-white/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/10 group-hover:border-blue-200 dark:group-hover:border-blue-500/50 transition-all">
                                            <Mail size={16} />
                                        </div>
                                        <a href="mailto:bitspilaniconsultingclub@bits-pilani.ac.in" className="hover:text-neutral-900 dark:hover:text-white transition-colors break-all">
                                            bitspilaniconsultingclub@bits-pilani.ac.in
                                        </a>
                                    </div>
                                </div>

                                <div className="mb-8 group">
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">President</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-base font-bold text-neutral-900 dark:text-white transition-colors">Baibhab Mishra</p>
                                        <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 text-sm">
                                            <div className="p-2 rounded-full bg-neutral-100 border border-neutral-200 dark:bg-white/5 dark:border-white/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/10 group-hover:border-indigo-200 dark:group-hover:border-indigo-500/50 transition-all">
                                                <Phone size={16} />
                                            </div>
                                            <span>+91 76205 79133</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8 group">
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Head of Outreach</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-base font-bold text-neutral-900 dark:text-white transition-colors">Yashvardhan Parihar</p>
                                        <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 text-sm">
                                            <div className="p-2 rounded-full bg-neutral-100 border border-neutral-200 dark:bg-white/5 dark:border-white/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-100 dark:group-hover:bg-violet-500/10 group-hover:border-violet-200 dark:group-hover:border-violet-500/50 transition-all">
                                                <Phone size={16} />
                                            </div>
                                            <span>+91 70022 31892</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-neutral-200 dark:border-white/10 pt-6">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    <Link href="#" className="p-3 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 dark:hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300">
                                        <Linkedin size={18} />
                                    </Link>
                                    <Link href="#" className="p-3 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 dark:hover:text-white dark:hover:bg-pink-600 dark:hover:border-pink-600 transition-all duration-300">
                                        <Instagram size={18} />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}