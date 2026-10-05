import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-[#75675c]">
            Effective Date: October 5, 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 rounded-3xl bg-white/80 p-6 shadow-xl sm:p-9">

          {/* Privacy Commitment */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Our Commitment to Privacy
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is designed to provide a peaceful space for
              Christian prayer, Scripture reflection, journaling, and spiritual
              encouragement.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              We believe private prayer and journal content should remain
              private. The current version of Walking With Jesus is designed so
              that journal and Talk With Jesus entries remain in your browser
              on your device rather than being sent to Walking With Jesus for
              storage.
            </p>
          </section>

          {/* Journal and Prayer */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Journal and Prayer Entries
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Journal entries and Talk With Jesus entries are currently stored
              using local browser storage on your device.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not intentionally receive, read, upload,
              sell, or store the content of those entries on its servers.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Anyone who has access to your device or browser may potentially
              have access to information stored locally on that device. Please
              avoid entering information that you do not want stored on your
              device.
            </p>
          </section>

          {/* Information Requested */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Information We Currently Request
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              The current version of Walking With Jesus does not require you to
              create an account or provide your name, email address, phone
              number, medical information, or payment information to use the
              core prayer, Scripture, breathing, and journaling features.
            </p>
          </section>

          {/* Technical Information */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Technical Information
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              When this website is made publicly available, the website hosting
              provider or other infrastructure providers may automatically
              process ordinary technical information needed to operate and
              protect the website. This may include information such as an IP
              address, browser type, device type, request information, and
              security or server logs.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not use this technical information to
              read the private content you write inside your locally stored
              journal or Talk With Jesus entries.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Cookies and Tracking
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              The current version of Walking With Jesus is not designed to use
              advertising cookies, behavioral advertising trackers, or social
              media tracking pixels.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Local browser storage may be used to keep journal and prayer
              entries on your device.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              If we add analytics, advertising, accounts, cloud storage, or
              other technologies in the future, this Privacy Policy will be
              updated to explain those practices.
            </p>
          </section>

          {/* Selling Data */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Selling Personal Information
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not sell the content of your private
              journal or Talk With Jesus entries.
            </p>
          </section>

          {/* Health Information */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Health Information
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is not designed as a medical or healthcare
              service and does not ask users to submit medical records,
              diagnoses, treatment information, or other healthcare records.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Because users may choose to write personal thoughts in a private
              journal or prayer entry, we strongly encourage users not to enter
              sensitive information that they do not want stored on their
              device.
            </p>
          </section>

          {/* Deleting Entries */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Deleting Your Entries
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              The Journal and Talk With Jesus sections provide controls that
              allow you to delete the entry stored through those features.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Clearing your browser data may also remove information stored
              locally by the website.
            </p>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Third Parties
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not currently intentionally share your
              locally stored journal or Talk With Jesus entries with
              advertisers, data brokers, or social media companies.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Website hosting and infrastructure providers may process limited
              technical information necessary to provide and secure the
              website.
            </p>
          </section>

          {/* Policy Changes */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus may update this Privacy Policy as the website
              or app changes. If material changes are made to how information
              is collected, stored, used, or shared, this page will be updated
              and the effective date will be changed.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Contact
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              For privacy questions, concerns, or requests related to Walking
              With Jesus, please contact:
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

        {/* Important Notice */}
        <div className="mt-6 rounded-2xl border border-[#d9ccb9] bg-[#f8f3ec] p-5 text-sm leading-6 text-[#62574e]">
          <p className="font-semibold text-[#493f37]">
            Important Notice
          </p>

          <p className="mt-2">
            This Privacy Policy describes how Walking With Jesus is currently
            designed. If features involving accounts, cloud storage, analytics,
            advertising, email subscriptions, payments, or other data
            collection are added, this policy should be reviewed and updated
            before those features are made available.
          </p>
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