"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const heroHeight = window.innerHeight * 0.87;
            setVisible(window.scrollY > heroHeight);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
        fixed bottom-6 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        bg-blue-600 text-white
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1 hover:bg-blue-500
        dark:bg-blue-500 dark:hover:bg-blue-400
      "
            aria-label="Back to top"
        >
            <ArrowUp size={18} />
        </button>
    );
}
