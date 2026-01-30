"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
        }
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <>{children}</>;
}
