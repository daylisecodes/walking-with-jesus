import Link from "next/link";

export default function QuietPlace() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e8dcc7] text-[#40362d]">
      <style>{`
        @keyframes peacefulQuietMove {
          0% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }

          50% {
            transform: scale(1.09) translate3d(-1%, 0.5%, 0);
          }

          100% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }
        }

        .quiet-place-background {
          animation: peacefulQuietMove 26s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .quiet-place-background {
            animation: none;
          }
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        {/* Moving Background */}
        <div
          className="quiet-place-background absolute -inset-6 bg-cover bg-center"
          style={{
            backgroundImage: "url('/walking-with-jesus-coast-clean.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 flex min-h-screen flex-col items-center px-5 py-8 text-center sm:px-6 sm:py-10">
          {/* Top Navigation */}
          <div className="flex w-full max-w-5xl items-start justify-between gap-4">
            <Link
              href="/"
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#654e3b] shadow-md transition hover:bg-white"
            >
              ← Home
            </Link>

            <div className="text-right">
              <p className="text-xs font-medium tracking-[0.25em] text-white drop-shadow-md sm:text-sm">
                WALKING WITH JESUS
              </p>

              <p className="mt-2 max-w-md font-serif text-sm italic text-white drop-shadow-md sm:text-base">
                Your Quiet Place for Prayer, Scripture &amp; Reflection
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-10">
            <h1 className="font-serif text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl">
              Your Quiet Place
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white drop-shadow-md">
              Slow down. Bring the real conversation.
              <br />
              You don&apos;t have to perform here.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
            <Link
              href="/quiet/still"
              className="rounded-3xl bg-white/90 px-6 py-8 shadow-2xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-4xl">🌿</span>

              <span className="mt-4 block font-serif text-2xl font-medium">
                Be Still
              </span>

              <span className="mt-2 block text-base leading-6 text-[#6b6057]">
                Slow down, breathe, and sit quietly with Jesus.
              </span>
            </Link>

            <Link
              href="/quiet/talk"
              className="rounded-3xl bg-white/90 px-6 py-8 shadow-2xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-4xl">🙏</span>

              <span className="mt-4 block font-serif text-2xl font-medium">
                Talk With Jesus
              </span>

              <span className="mt-2 block text-base leading-6 text-[#6b6057]">
                Bring Him the honest conversation.
              </span>
            </Link>

            <Link
              href="/quiet/scripture"
              className="rounded-3xl bg-white/90 px-6 py-8 shadow-2xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-4xl">📖</span>

              <span className="mt-4 block font-serif text-2xl font-medium">
                Read Scripture
              </span>

              <span className="mt-2 block text-base leading-6 text-[#6b6057]">
                Slow down and let God&apos;s Word speak.
              </span>
            </Link>

            <Link
              href="/quiet/journal"
              className="rounded-3xl bg-white/90 px-6 py-8 shadow-2xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-4xl">📔</span>

              <span className="mt-4 block font-serif text-2xl font-medium">
                Journal
              </span>

              <span className="mt-2 block text-base leading-6 text-[#6b6057]">
                Reflect, process, and write what&apos;s on your heart.
              </span>
            </Link>
          </div>

          <div className="mt-12 rounded-3xl bg-white/70 px-6 py-5 shadow-lg backdrop-blur-sm">
            <p className="font-serif text-lg italic text-[#654e3b] sm:text-xl">
              Stay as long as you need.
            </p>

            <p className="mt-2 text-sm text-[#6b6057]">
              This isn&apos;t about getting everything right. It&apos;s about
              making room to walk with Jesus.
            </p>
          </div>

          <div className="mt-8 pb-4">
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