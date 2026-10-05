import Link from "next/link";

export default function DisclaimerPage() {
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
            Disclaimer
          </h1>

          <p className="mt-3 text-sm text-[#75675c]">
            Effective Date: October 5, 2026
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 space-y-8 rounded-3xl bg-white/80 p-6 shadow-xl sm:p-9">

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Christian Spiritual Resource
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is a Christian spiritual resource created for
              prayer, Scripture reflection, journaling, quiet time, and
              spiritual encouragement.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              The content is provided for general spiritual encouragement and
              personal reflection. It is not intended to replace your personal
              relationship with Jesus, prayer, Scripture study, church
              community, pastoral care, or professional services when those
              services are needed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Not Medical or Mental Health Advice
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is not a medical, mental health, counseling,
              therapy, diagnostic, treatment, crisis, or healthcare service.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Nothing on this website or app should be understood as medical
              advice, mental health advice, diagnosis, treatment, or a
              substitute for care from a qualified healthcare or mental health
              professional.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              If you have concerns about your physical or mental health, please
              seek guidance from an appropriate qualified professional.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Emergencies and Crisis Situations
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus is not an emergency or crisis response
              service and is not monitored for urgent requests.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              If you believe you or another person is in immediate danger or
              experiencing an emergency, contact local emergency services or an
              appropriate crisis or healthcare professional in your area.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Spiritual Reflection and Guidance
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus may include prayer prompts, reflection
              questions, journaling prompts, and Scripture-based encouragement.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              These prompts are intended to help you slow down, reflect, pray,
              and spend time with Jesus. They are not presented as direct,
              individualized messages from God and should not be treated as
              guaranteed divine instruction for a specific decision or
              situation.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Users are encouraged to prayerfully consider Scripture, exercise
              personal judgment, and seek appropriate pastoral or professional
              guidance when needed.
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
              Walking With Jesus is not affiliated with or endorsed by the
              publishers or maintainers of the World English Bible.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Journal and Prayer Content
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              The current Journal and Talk With Jesus features are designed to
              store entries locally in your browser on your device.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus does not review or monitor those locally stored
              entries for emergencies, threats, medical concerns, or requests
              for assistance.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Do not rely on a journal or prayer entry as a way to contact
              Walking With Jesus or request emergency assistance.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              No Professional Relationship
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Your use of Walking With Jesus does not create a doctor-patient,
              therapist-client, counselor-client, attorney-client,
              financial-adviser, clergy-confidentiality, or other professional
              relationship with Walking With Jesus or its owner.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Accuracy and Availability
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              We make reasonable efforts to present content carefully, but we do
              not guarantee that every part of the website or app will always
              be complete, error-free, uninterrupted, or suitable for every
              person or circumstance.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Features, content, and availability may change over time.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Personal Responsibility
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              You are responsible for your own decisions and for how you use
              information, reflection prompts, Scripture, journal features, and
              other content provided through Walking With Jesus.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              When making important medical, mental health, legal, financial,
              safety, or other significant decisions, seek guidance from an
              appropriately qualified professional.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              External Links
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              Walking With Jesus may eventually provide links to third-party
              websites or resources for convenience or additional information.
              We are not responsible for the content, privacy practices,
              availability, or actions of third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Limitation of Responsibility
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              To the fullest extent permitted by applicable law, Walking With
              Jesus and its owner are not responsible for losses or damages
              arising from reliance on spiritual reflection content, use of the
              website or app, loss of locally stored entries, interruption of
              service, or decisions made based on content provided through the
              service.
            </p>

            <p className="mt-3 leading-7 text-[#62574e]">
              Nothing in this Disclaimer is intended to exclude or limit
              responsibility where doing so would be prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Changes to This Disclaimer
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              This Disclaimer may be updated as Walking With Jesus changes.
              When material changes are made, the effective date shown at the
              top of this page will be updated.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Contact
            </h2>

            <p className="mt-3 leading-7 text-[#62574e]">
              For questions about this Disclaimer or Walking With Jesus, please
              contact:
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