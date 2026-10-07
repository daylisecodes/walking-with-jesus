import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e8dcc7] text-[#40362d]">
      <style>{`
        @keyframes peacefulOceanMove {
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

        .peaceful-ocean-background {
          animation: peacefulOceanMove 24s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .peaceful-ocean-background {
            animation: none;
          }
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">

        {/* Slowly Moving Coastal Background */}
        <div
          className="peaceful-ocean-background absolute -inset-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/walking-with-jesus-coast-clean.png')",
          }}
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Main Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center px-5 py-8 text-center sm:px-6 sm:py-10">

          {/* Logo */}
          <img
            src="/walking-with-jesus-logo.png"
            alt="Walking With Jesus"
            className="mt-3 w-44 rounded-3xl shadow-2xl sm:w-56 md:w-64"
          />

          {/* Brand */}
          <p className="mt-5 text-xs font-medium tracking-[0.3em] text-white drop-shadow-md sm:text-sm sm:tracking-[0.35em]">
            WALKING WITH JESUS
          </p>

          {/* Welcome Card */}
          <div className="mt-7 w-full max-w-3xl rounded-3xl bg-white/75 px-5 py-7 shadow-2xl backdrop-blur-sm sm:px-10 sm:py-9">

            <h1 className="font-serif text-4xl leading-tight text-[#3d342b] sm:text-6xl md:text-7xl">
              Come as you are.
            </h1>

            <div className="mx-auto mt-5 max-w-xl space-y-2 text-base leading-7 text-[#51463d] sm:text-lg">
              <p>You don&apos;t have to have the right words.</p>
              <p>You don&apos;t have to have it all together.</p>
              <p>Just come.</p>
            </div>

            <div className="mt-8">
              <Link
                href="/quiet"
                className="inline-block rounded-full bg-[#654e3b] px-8 py-4 text-base font-medium text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#503d2e] sm:px-10"
              >
                Enter Your Quiet Place
              </Link>
            </div>

            <p className="mt-6 font-serif text-lg italic text-[#654e3b]">
              Stay a little longer.
            </p>

          </div>

          {/* Main Navigation */}
          <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">

            <Link
              href="/quiet/scripture"
              className="rounded-2xl bg-white/90 px-4 py-5 shadow-xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-2xl">📖</span>

              <span className="mt-2 block text-sm font-medium">
                Read Scripture
              </span>
            </Link>

            <Link
              href="/quiet/journal"
              className="rounded-2xl bg-white/90 px-4 py-5 shadow-xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-2xl">📔</span>

              <span className="mt-2 block text-sm font-medium">
                Journal
              </span>
            </Link>

            <Link
              href="/quiet/talk"
              className="rounded-2xl bg-white/90 px-4 py-5 shadow-xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-2xl">🙏</span>

              <span className="mt-2 block text-sm font-medium">
                Talk With Jesus
              </span>
            </Link>

            <Link
              href="/quiet/still"
              className="rounded-2xl bg-white/90 px-4 py-5 shadow-xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span className="text-2xl">🌿</span>

              <span className="mt-2 block text-sm font-medium">
                Quiet Mode
              </span>
            </Link>

          </div>

          {/* Site Notice */}
          <div className="mt-10 w-full max-w-2xl rounded-2xl bg-white/80 px-5 py-4 text-left shadow-md backdrop-blur-sm">

            <p className="text-sm font-semibold text-[#493f37]">
              A quiet place for spiritual encouragement
            </p>

            <p className="mt-2 text-xs leading-5 text-[#62574e] sm:text-sm">
              Walking With Jesus is created for Christian prayer, Scripture
              reflection, journaling, and spiritual encouragement.
            </p>

            <p className="mt-2 text-xs leading-5 text-[#62574e] sm:text-sm">
              Walking With Jesus is not a medical, mental health, counseling,
              therapy, diagnostic, treatment, or healthcare service.
            </p>

          </div>

          {/* Footer */}
          <footer className="mt-7 w-full max-w-3xl rounded-2xl bg-black/25 px-5 py-6 text-center backdrop-blur-sm">

            <p className="text-sm font-medium leading-6 text-white drop-shadow-lg">
              Your privacy matters. Private journal and Talk With Jesus entries
              are designed to remain on your device unless a future feature
              clearly tells you otherwise.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">

              <Link
                href="/privacy"
                className="font-medium text-white underline drop-shadow-md"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="font-medium text-white underline drop-shadow-md"
              >
                Terms of Use
              </Link>

              <Link
                href="/disclaimer"
                className="font-medium text-white underline drop-shadow-md"
              >
                Disclaimer
              </Link>

              <Link
                href="/contact"
                className="font-medium text-white underline drop-shadow-md"
              >
                Contact
              </Link>

            </div>

            <p className="mt-5 text-sm text-white drop-shadow-lg">
              © {new Date().getFullYear()} Walking With Jesus. All rights
              reserved.
            </p>

          </footer>

        </div>
      </section>
    </main>
  );
}