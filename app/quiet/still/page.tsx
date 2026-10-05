"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BeStillPage() {
  const [breatheIn, setBreatheIn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setBreatheIn((current) => !current);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen text-white">
      <section className="relative min-h-screen overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/walking-with-jesus-coast-clean.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center px-5 py-8 text-center sm:px-6 sm:py-10">

          {/* Top Navigation */}
          <div className="flex w-full max-w-5xl items-center justify-between gap-3">

            <Link
              href="/"
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#654e3b] shadow-md transition hover:bg-white"
            >
              ← Home
            </Link>

            <Link
              href="/quiet"
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#654e3b] shadow-md transition hover:bg-white"
            >
              Quiet Place
            </Link>

          </div>

          {/* Heading */}
          <h1 className="mt-10 font-serif text-5xl drop-shadow-lg sm:text-6xl md:text-7xl">
            Be Still.
          </h1>

          <div className="mt-5 space-y-2 text-lg drop-shadow-md sm:text-xl">
            <p>You don&apos;t have to rush this moment.</p>
            <p>Just breathe.</p>
          </div>

          {/* Breathing Circle */}
          <div className="mt-14 flex h-72 w-72 items-center justify-center rounded-full border border-white/60 bg-slate-600/55 shadow-2xl backdrop-blur-sm sm:h-80 sm:w-80">

            <div
              className="flex h-36 w-36 items-center justify-center rounded-full bg-white/90 shadow-xl sm:h-40 sm:w-40"
              style={{
                transform: breatheIn
                  ? "scale(1.25)"
                  : "scale(0.82)",
                transition:
                  "transform 4s ease-in-out",
              }}
            >
              <span className="font-serif text-xl italic text-[#59605e] sm:text-2xl">
                {breatheIn ? "Breathe in" : "Breathe out"}
              </span>
            </div>

          </div>

          {/* Scripture */}
          <div className="mt-10">

            <p className="font-serif text-2xl italic drop-shadow-lg sm:text-3xl">
              “Be still, and know that I am God.”
            </p>

            <p className="mt-3 text-lg font-medium drop-shadow-md">
              Psalm 46:10
            </p>

            <p className="mt-2 text-sm text-white/90 drop-shadow-md">
              World English Bible (WEB)
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="rounded-full bg-white/90 px-9 py-4 text-lg font-medium text-[#654e3b] shadow-xl transition hover:-translate-y-1 hover:bg-white"
            >
              Stay Here
            </button>

            <Link
              href="/quiet"
              className="rounded-full bg-[#654e3b] px-9 py-4 text-lg font-medium text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#503d2e]"
            >
              I&apos;m Ready
            </Link>

          </div>

          {/* Bottom Message */}
          <p className="mt-12 max-w-xl font-serif text-lg italic drop-shadow-lg sm:text-xl">
            You don&apos;t have to hide the tired parts of your heart.
          </p>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-5 pb-5">

            <Link
              href="/quiet"
              className="text-sm font-medium text-white underline drop-shadow-md"
            >
              Back to Quiet Place
            </Link>

            <Link
              href="/"
              className="text-sm font-medium text-white underline drop-shadow-md"
            >
              Return to Home
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}