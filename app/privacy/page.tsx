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
            Effective Date: October 6, 2026
          </p>
        </div>

        {/* Policy */}
        <div className="mt-10 space-y-8 rounded-3xl bg-white/80 p-6 shadow-xl sm:p-9">

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Our Commitment to Privacy
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is designed to provide a peaceful Christian
              space for prayer, Scripture reflection, journaling, quiet time,
              and spiritual encouragement while collecting as little personal
              information as reasonably possible.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              This Privacy Policy explains what information may be processed
              when you use Walking With Jesus, how certain features store
              information, and the third-party services currently used by the
              website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Journal, Talk With Jesus, and Scripture Reflections
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Journal entries, Talk With Jesus entries, and saved Scripture
              reflections are designed to be stored locally in your browser on
              your device using browser storage.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not intentionally transmit the written
              content of these locally stored entries to our server or use
              Vercel Web Analytics to read or analyze the content you type into
              these private writing areas.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Because these entries are stored on your device, clearing browser
              data, using a different browser, using private or incognito mode,
              or moving to another device may cause your saved entries to become
              unavailable.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Anyone who has access to your device or browser may potentially
              be able to access information stored locally on that device.
              Please avoid entering information you do not want stored on your
              device.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Vercel Web Analytics
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus uses Vercel Web Analytics to help us understand
              general website usage and improve the experience for visitors.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Analytics information may include information such as page views,
              pages visited, referring websites, browser type, operating system,
              device information, and general geographic information such as
              country-level location.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Vercel describes its Web Analytics service as first-party and
              privacy-focused. It is designed to measure website activity
              without tracking visitors across unrelated websites.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Vercel Web Analytics is used to understand overall traffic and
              page activity. It is not used by Walking With Jesus to read the
              text of your Journal, Talk With Jesus, or Scripture Reflection
              entries.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Website Hosting and Technical Information
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is hosted using Vercel. Like other website
              hosting providers, Vercel may process technical information
              necessary to deliver, secure, and operate the website.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              This may include information such as IP address, request
              information, system configuration information, browser or device
              information, and location information derived from an IP address.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Vercel processes information according to its own privacy
              practices and policies.
            </p>

            <a
              href="https://vercel.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-medium text-[#654e3b] underline"
            >
              View Vercel&apos;s Privacy Notice
            </a>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Cookies and Similar Technologies
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not currently use advertising cookies or
              third-party advertising trackers of its own.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Browser local storage is used for features such as saved Journal,
              Talk With Jesus, and Scripture Reflection entries. Local storage
              is different from a traditional browser cookie, but it also stores
              information on your device.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Third-party infrastructure providers may use technologies or
              process technical information as described in their own privacy
              policies and as necessary to provide their services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Information You Send by Email
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              If you contact Walking With Jesus by email, we may receive the
              email address you use, your message, and any information you
              voluntarily include in that message.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Please do not send medical records, passwords, financial account
              information, Social Security numbers, or other highly sensitive
              personal information by email.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              How Information Is Used
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Information available to Walking With Jesus may be used to operate
              and improve the website, understand general website traffic,
              identify technical problems, respond to messages, protect the
              website from misuse, and maintain the security and reliability of
              the service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              We Do Not Sell Your Personal Information
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not sell personal information collected
              directly through the website and does not operate an advertising
              profile based on the content of your private journal or prayer
              entries.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Children&apos;s Privacy
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is not specifically designed to knowingly
              collect personal information from children. If you believe a
              child has provided personal information to us through email or
              another direct communication method, please contact us so the
              situation can be reviewed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Third-Party Links
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus may contain links to websites or services
              operated by third parties. Their privacy practices are governed
              by their own policies. We encourage you to review those policies
              before providing personal information to another website or
              service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Data Security
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Reasonable steps are taken to keep the website and its
              configuration secure. However, no website, browser storage
              system, internet transmission, or electronic storage method can
              be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              This Privacy Policy may be updated as Walking With Jesus changes,
              including when new features, analytics services, or other
              technologies are added. When material changes are made, the
              effective date shown at the top of this page will be updated.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Contact
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              For privacy questions or concerns about Walking With Jesus,
              contact:
            </p>

            <p className="mt-3 break-all font-medium text-[#654e3b]">
              walkingwithjesusprivacy@gmail.com
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-block font-medium text-[#654e3b] underline"
            >
              Visit the Contact page
            </Link>
          </section>

        </div>

        {/* Legal Links */}
        <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">
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

          <Link
            href="/contact"
            className="font-medium text-[#654e3b] underline"
          >
            Contact
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