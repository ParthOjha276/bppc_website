import Link from "next/link";

export default function Hero() {
    return (

        <section id="hero" className="relative h-[87vh] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/campus.jpg')",
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="mb-8 max-w-4xl font-serif text-3xl font-bold leading-tight tracking-[0.035em] md:text-5xl">
                    Strategize. Solve. Succeed.
                </h1>

                <p className="mx-auto mb-10 max-w-[38rem] font-sans text-sm text-neutral-200 md:text-base">
                    BITS Pilani Consulting Club is a premier student-led consulting
                    organization with a rich legacy of 10+ years, fostering BITSians
                    with a founder-like approach.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/projects"
                        className="rounded-md bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-500"
                    >
                        View Projects
                    </Link>

                    <Link
                        href="/team"
                        className="rounded-md border border-white/40 px-6 py-2.5 font-medium text-white transition hover:bg-white/10"
                    >
                        Meet Our Team
                    </Link>
                </div>
            </div>
        </section>
    );
}
