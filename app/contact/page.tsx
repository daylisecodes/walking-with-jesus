import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#efe7da] px-4 py-8 text-[#40362d] sm:px-6">
      <div className="mx-auto max-w-3xl">

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#654e3b] shadow-sm"
          >
            ← Home
          </Link>

          <Link
            href="/quiet"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#654e3b] shadow-sm"
          >
            Quiet Place
          </Link>
        </div>

        {/* Header */}
        <div className="mt-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl">
            Contact
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#65584e]">
            Have a question, privacy concern, technical issue, or feedback about
            Walking With Jesus? You can reach us by email.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mt-10 rounded-3xl bg-white/80 p-6 shadow-xl sm:p-9">

          <div className="text-center">
            <div className="text-4xl">✉️</div>

            <h2 className="mt-4 font-serif text-2xl text-[#4d4239]">
              Email Walking With Jesus
            </h2>

            {/* Gmail Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=walkingwithjesusprivacy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-[#654e3b] px-7 py-3 font-medium text-white shadow-lg transition hover:bg-[#503d2e]"
            >
              Open in Gmail
            </a>

            {/* Plain Email */}
            <p className="mt-5 text-sm text-[#6b6057]">
              Or copy and paste this email address:
            </p>

            <p className="mt-2 break-all font-medium text-[#654e3b]">
              walkingwithjesusprivacy@gmail.com
            </p>

            <p className="mt-5 text-sm leading-6 text-[#6b6057]">
              If you do not use Gmail, you can copy the email address above and
              use your preferred email service.
            </p>
          </div>

          {/* Contact Reasons */}
          <div className="mt-8 border-t border-[#ded2c4] pt-7">

            <h2 className="font-serif text-2xl text-[#4d4239]">
              You Can Contact Us About
            </h2>

            <div className="mt-4 space-y-3 text-[#62574e]">
              <p>• Privacy questions or concerns</p>
              <p>• Questions about Walking With Jesus</p>
              <p>• Technical problems with the website or app</p>
              <p>• General feedback or suggestions</p>
              <p>• Questions about our Terms of Use or Disclaimer</p>
            </div>

          </div>

          {/* Privacy Notice */}
          <div className="mt-8 rounded-2xl border border-[#d9ccb9] bg-[#f8f3ec] p-5">

            <p className="font-semibold text-[#493f37]">
              Please Protect Your Privacy
            </p>

            <p className="mt-2 text-sm leading-6 text-[#62574e]">
              Please do not send medical records, passwords, financial
              information, Social Security numbers, or other highly sensitive
              personal information by email.
            </p>

          </div>

          {/* Emergency Notice */}
          <div className="mt-5 rounded-2xl border border-[#d9ccb9] bg-white p-5">

            <p className="font-semibold text-[#493f37]">
              This Email Is Not an Emergency Service
            </p>

            <p className="mt-2 text-sm leading-6 text-[#62574e]">
              Walking With Jesus is not an emergency, crisis, medical, mental
              health, counseling, or healthcare service. This email address is
              not monitored for emergency assistance.
            </p>

            <p className="mt-2 text-sm leading-6 text-[#62574e]">
              If you or another person is in immediate danger or experiencing an
              emergency, contact local emergency services or an appropriate
              qualified professional.
            </p>

          </div>

        </div>

        {/* Legal Links */}
        <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">

          <Link
            href="/privacy"
            className="font-medium text-[#654e3b] underline"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="font-medium text-[#654e3b] underline"
          >
            Terms of Use
          </Link>

          <Link
            href="/disclaimer"
            className="font-medium text-[#654e3b] underline"
          >
            Disclaimer
          </Link>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 pb-6">

          <Link
            href="/quiet"
            className="text-sm font-medium text-[#654e3b] underline"
          >
            Quiet Place
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-[#654e3b] underline"
          >
            Return to Home
          </Link>

        </div>

      </div>
    </main>
  );
}