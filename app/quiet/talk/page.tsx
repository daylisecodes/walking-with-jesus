"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SavedConversation = {
  id: string;
  text: string;
  createdAt: string;
};

const prompts = [
  "I'm feeling overwhelmed",
  "I don't understand",
  "I need Your help",
  "Thank You for...",
  "I'm struggling with...",
  "I just need You",
];

const STORAGE_KEY = "walking-with-jesus-prayer-entries";

export default function TalkWithJesusPage() {
  const [entry, setEntry] = useState("");
  const [savedEntries, setSavedEntries] = useState<SavedConversation[]>([]);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const storedEntries = localStorage.getItem(STORAGE_KEY);

    if (storedEntries) {
      try {
        const parsedEntries = JSON.parse(storedEntries);

        if (Array.isArray(parsedEntries)) {
          setSavedEntries(parsedEntries);
        }
      } catch {
        setSavedEntries([]);
      }
    }
  }, []);

  function updateStorage(entries: SavedConversation[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    setSavedEntries(entries);
  }

  function choosePrompt(prompt: string) {
    setEntry((current) =>
      current ? `${current}\n\n${prompt}\n` : `${prompt}\n`
    );

    setSavedMessage("");
  }

  function saveConversation() {
    const cleanEntry = entry.trim();

    if (!cleanEntry) return;

    const newConversation: SavedConversation = {
      id: `${Date.now()}-${Math.random()}`,
      text: cleanEntry,
      createdAt: new Date().toISOString(),
    };

    const updatedEntries = [newConversation, ...savedEntries];

    updateStorage(updatedEntries);

    setEntry("");
    setSavedMessage("Your conversation was saved privately on this device.");
  }

  function deleteConversation(id: string) {
    const updatedEntries = savedEntries.filter(
      (conversation) => conversation.id !== id
    );

    updateStorage(updatedEntries);
  }

  function startNewConversation() {
    setEntry("");
    setSavedMessage("");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-[#efe7da] px-4 py-7 text-[#40362d] sm:px-6">
      <div className="mx-auto max-w-3xl">

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#654e3b] shadow-sm transition hover:bg-[#f7f1e9]"
          >
            ← Home
          </Link>

          <Link
            href="/quiet"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#654e3b] shadow-sm transition hover:bg-[#f7f1e9]"
          >
            Quiet Place
          </Link>
        </div>

        {/* Header */}
        <div className="mt-8 text-center">
          <div className="text-4xl">🙏</div>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Talk With Jesus
          </h1>

          <p className="mt-3 font-serif text-xl italic text-[#735f4c]">
            Write it out. He&apos;s listening.
          </p>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#65584e]">
            Bring Jesus the real conversation. You don&apos;t have to clean it
            up, find the perfect words, or pretend everything is okay.
          </p>
        </div>

        {/* Main Writing Card */}
        <div className="mt-9 rounded-3xl bg-white/85 p-6 shadow-xl sm:p-8">

          <h2 className="font-serif text-2xl text-[#4d4239]">
            Need help getting started?
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#74675c]">
            Choose a prompt below or simply begin with whatever is on your heart.
          </p>

          {/* Prompts */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => choosePrompt(prompt)}
                className="rounded-2xl border border-[#d7c8b8] bg-[#f8f2ea] px-4 py-3 text-left text-sm leading-6 text-[#5d5046] transition hover:bg-[#eee2d3]"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Writing Area */}
          <div className="mt-7">
            <label
              htmlFor="prayer-entry"
              className="block font-serif text-xl text-[#4d4239]"
            >
              Your conversation
            </label>

            <textarea
              id="prayer-entry"
              value={entry}
              onChange={(e) => {
                setEntry(e.target.value.slice(0, 3000));
                setSavedMessage("");
              }}
              placeholder="Jesus, here's what's really on my heart..."
              className="mt-3 min-h-[330px] w-full resize-none rounded-2xl border border-[#d6c8b8] bg-[#fffdf9] p-5 text-base leading-7 text-[#463c34] outline-none transition focus:border-[#8c735c]"
            />

            <div className="mt-2 flex items-center justify-between gap-3 text-xs text-[#807369]">
              <span>Take your time.</span>
              <span>{entry.length}/3000</span>
            </div>
          </div>

          {/* Save */}
          <button
            type="button"
            onClick={saveConversation}
            disabled={!entry.trim()}
            className="mt-5 w-full rounded-full bg-[#654e3b] px-6 py-4 font-medium text-white shadow-lg transition hover:bg-[#503d2e] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Save This Conversation
          </button>

          {savedMessage && (
            <div className="mt-4 rounded-2xl bg-[#edf2e9] px-4 py-3 text-center">
              <p className="text-sm font-medium text-[#5d7154]">
                {savedMessage}
              </p>
            </div>
          )}
        </div>

        {/* Saved Conversations */}
        <div className="mt-8 rounded-3xl bg-white/80 p-6 shadow-xl sm:p-8">

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-2xl text-[#4d4239]">
                Saved Conversations
              </h2>

              <p className="mt-2 text-sm text-[#74675c]">
                Your saved conversations stay on this device.
              </p>
            </div>

            <button
              type="button"
              onClick={startNewConversation}
              className="rounded-full bg-[#f1e6d8] px-4 py-2 text-sm font-medium text-[#654e3b] transition hover:bg-[#e7d8c7]"
            >
              + New Conversation
            </button>
          </div>

          {savedEntries.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-[#d6c8b8] bg-[#fffaf4] p-6 text-center">
              <p className="text-sm leading-6 text-[#74675c]">
                You haven&apos;t saved any conversations yet.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {savedEntries.map((conversation) => (
                <div
                  key={conversation.id}
                  className="rounded-2xl border border-[#ddd0c1] bg-[#fffdf9] p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">

                    <p className="text-xs font-medium text-[#8a796b]">
                      {new Date(conversation.createdAt).toLocaleString()}
                    </p>

                    <button
                      type="button"
                      onClick={() => deleteConversation(conversation.id)}
                      className="text-xs font-medium text-[#8b5e55] underline"
                    >
                      Delete
                    </button>

                  </div>

                  <p className="mt-4 whitespace-pre-wrap leading-7 text-[#51463d]">
                    {conversation.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Encouragement */}
        <div className="mt-7 rounded-3xl bg-white/65 p-6 shadow-sm">

          <h2 className="font-serif text-2xl text-[#4d4239]">
            Come Back and Reflect
          </h2>

          <p className="mt-4 leading-7 text-[#62574e]">
            Looking back at an older conversation can help you notice what you
            were carrying, what changed, what you&apos;re still praying about,
            and where you may be growing.
          </p>

          <p className="mt-3 leading-7 text-[#62574e]">
            There is no pressure to have an answer. This space is simply here
            to help you slow down and be honest with Jesus.
          </p>

        </div>

        {/* Privacy */}
        <div className="mt-7 rounded-2xl border border-[#d9ccb9] bg-[#f8f3ec] p-5 text-sm leading-6 text-[#62574e]">

          <p className="font-semibold text-[#493f37]">
            Your privacy matters.
          </p>

          <p className="mt-2">
            Saved conversations are stored only in this browser on this device.
            Walking With Jesus does not receive or store the content of these
            conversations on its servers.
          </p>

          <p className="mt-2">
            Clearing browser data, switching browsers, or changing devices may
            remove your saved conversations.
          </p>

          <p className="mt-2">
            Anyone who has access to this device or browser may potentially
            have access to information stored on it.
          </p>

        </div>

        {/* Health Notice */}
        <div className="mt-4 rounded-2xl border border-[#d9ccb9] bg-white/65 p-5 text-sm leading-6 text-[#62574e]">

          <p className="font-semibold text-[#493f37]">
            Important Health & Safety Notice
          </p>

          <p className="mt-2">
            Walking With Jesus is a Christian spiritual reflection and prayer
            resource. It is not a medical, mental health, counseling, therapy,
            diagnostic, treatment, crisis, or healthcare service.
          </p>

          <p className="mt-2">
            Nothing on this page should be used as a substitute for care,
            diagnosis, treatment, or advice from a qualified professional.
          </p>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 pb-5">

          <Link
            href="/quiet"
            className="text-sm font-medium text-[#654e3b] underline"
          >
            Back to Quiet Place
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