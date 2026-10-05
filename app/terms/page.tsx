import Link from "next/link";

export default function TermsPage() {
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
            Terms of Use
          </h1>

          <p className="mt-3 text-sm text-[#75675c]">
            Effective Date: October 5, 2026
          </p>
        </div>

        {/* Terms */}
        <div className="mt-10 space-y-8 rounded-3xl bg-white/80 p-6 shadow-xl sm:p-9">

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Acceptance of These Terms
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              By accessing or using Walking With Jesus, you agree to these Terms
              of Use. If you do not agree with these terms, please do not use
              the website or app.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Purpose of Walking With Jesus
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is a Christian spiritual resource created for
              prayer, Scripture reflection, journaling, quiet time, and
              spiritual encouragement.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              The content is intended to support personal reflection and faith
              practices. It is not intended to replace your personal
              relationship with Jesus, prayer, Scripture study, church
              community, pastoral care, or qualified professional services when
              those services are needed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Not Medical or Mental Health Care
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is not a medical, mental health, counseling,
              therapy, diagnostic, treatment, crisis, or healthcare service.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Nothing provided through Walking With Jesus should be interpreted
              as medical advice, mental health advice, diagnosis, treatment, or
              a substitute for care from a qualified professional.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              If you believe you are experiencing a medical or mental health
              emergency, contact local emergency services or an appropriate
              qualified professional.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Spiritual Content
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus contains Christian spiritual content,
              reflection prompts, prayer prompts, and Scripture-based
              encouragement.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Reflection prompts are provided for personal contemplation. They
              should not be understood as guaranteed statements of what God is
              specifically saying to an individual person in a particular
              situation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Scripture
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Scripture quotations used in Walking With Jesus are from the
              World English Bible (WEB), a public-domain Bible translation.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              “World English Bible” is the name associated with that
              translation. Walking With Jesus is not affiliated with or
              endorsed by the publishers or maintainers of the World English
              Bible.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Journal and Prayer Entries
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              The current version of Walking With Jesus stores journal and Talk
              With Jesus entries locally in your browser on your device.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              You are responsible for protecting access to your device and
              browser. Information stored locally may be accessible to other
              people who can access your device or browser.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Clearing browser data, changing devices, changing browsers, or
              removing local storage may cause locally stored entries to be
              permanently lost.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Personal Responsibility
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              You are responsible for how you use the information, prompts,
              reflections, and features available through Walking With Jesus.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              You should use your own judgment and seek appropriate pastoral,
              professional, legal, financial, medical, or other qualified
              guidance when your situation requires it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Availability and Changes
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus may be changed, updated, interrupted, or
              discontinued at any time. We do not guarantee that every feature
              will always be available or operate without interruption or
              error.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Intellectual Property
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Except for public-domain Scripture and other materials clearly
              identified as belonging to others, the original design,
              organization, written content, branding, graphics, and other
              original materials created for Walking With Jesus are protected
              by applicable intellectual property laws.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              You may use Walking With Jesus for personal, non-commercial use.
              You may not copy, reproduce, sell, republish, or distribute
              original Walking With Jesus content for commercial purposes
              without permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              No Warranties
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is provided on an “as is” and “as available”
              basis to the extent permitted by law.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              We do not guarantee that the website will always be available,
              error-free, uninterrupted, completely secure, or suitable for
              every individual or situation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Limitation of Liability
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              To the fullest extent permitted by applicable law, Walking With
              Jesus and its owner will not be responsible for indirect,
              incidental, special, consequential, or similar damages arising
              from or related to your use of, or inability to use, the website
              or app.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Nothing in these Terms is intended to exclude or limit liability
              where doing so would be prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Changes to These Terms
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              These Terms of Use may be updated as Walking With Jesus changes.
              When material changes are made, the effective date shown at the
              top of this page will be updated.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Contact
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              For questions about these Terms of Use, please contact:
            </p>

            <a
              href="mailto:walkingwithjesusprivacy@gmail.com"
              className="mt-3 inline-block break-all font-medium text-[#654e3b] underline"
            >
              walkingwithjesusprivacy@gmail.com
            </a>

            <p className="mt-4 leading-7 text-[#62574e]">
              Please do not include medical records, passwords, financial
              information, or other highly sensitive personal information in
              your email.
            </p>
          </section>

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