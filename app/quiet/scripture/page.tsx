"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Scripture = {
  reference: string;
  text: string;
  category: string;
};

type ReflectionEntry = {
  id: string;
  reference: string;
  scripture: string;
  reflection: string;
  createdAt: string;
};

const REFLECTION_STORAGE_KEY = "walking-with-jesus-scripture-reflections";

const verses: Scripture[] = [
  {
    reference: "Psalm 46:10",
    text: "Be still, and know that I am God. I will be exalted among the nations. I will be exalted in the earth.",
    category: "Rest",
  },
  {
    reference: "Matthew 11:28",
    text: "Come to me, all you who labor and are heavily burdened, and I will give you rest.",
    category: "Rest",
  },
  {
    reference: "Psalm 62:1",
    text: "My soul rests in God alone. My salvation is from him.",
    category: "Rest",
  },
  {
    reference: "Psalm 23:1",
    text: "Yahweh is my shepherd. I shall lack nothing.",
    category: "Rest",
  },
  {
    reference: "Psalm 23:4",
    text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me.",
    category: "Comfort",
  },
  {
    reference: "Psalm 34:18",
    text: "Yahweh is near to those who have a broken heart, and saves those who have a crushed spirit.",
    category: "Comfort",
  },
  {
    reference: "Psalm 147:3",
    text: "He heals the broken in heart, and binds up their wounds.",
    category: "Comfort",
  },
  {
    reference: "2 Corinthians 1:3-4",
    text: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort; who comforts us in all our affliction.",
    category: "Comfort",
  },
  {
    reference: "Psalm 56:3",
    text: "When I am afraid, I will put my trust in you.",
    category: "Fear",
  },
  {
    reference: "Isaiah 41:10",
    text: "Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.",
    category: "Fear",
  },
  {
    reference: "John 14:27",
    text: "Peace I leave with you. My peace I give to you; not as the world gives, I give to you. Don’t let your heart be troubled, neither let it be fearful.",
    category: "Fear",
  },
  {
    reference: "Psalm 34:4",
    text: "I sought Yahweh, and he answered me, and delivered me from all my fears.",
    category: "Fear",
  },
  {
    reference: "Proverbs 3:5-6",
    text: "Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.",
    category: "Trust",
  },
  {
    reference: "Psalm 37:5",
    text: "Commit your way to Yahweh. Trust also in him, and he will do this.",
    category: "Trust",
  },
  {
    reference: "Jeremiah 17:7",
    text: "Blessed is the man who trusts in Yahweh, and whose confidence is in Yahweh.",
    category: "Trust",
  },
  {
    reference: "Psalm 28:7",
    text: "Yahweh is my strength and my shield. My heart has trusted in him, and I am helped.",
    category: "Trust",
  },
  {
    reference: "Isaiah 40:31",
    text: "But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.",
    category: "Strength",
  },
  {
    reference: "Philippians 4:13",
    text: "I can do all things through Christ, who strengthens me.",
    category: "Strength",
  },
  {
    reference: "Psalm 18:2",
    text: "Yahweh is my rock, my fortress, and my deliverer; my God, my rock, in whom I take refuge.",
    category: "Strength",
  },
  {
    reference: "Joshua 1:9",
    text: "Haven’t I commanded you? Be strong and courageous. Don’t be afraid. Don’t be dismayed, for Yahweh your God is with you wherever you go.",
    category: "Strength",
  },
  {
    reference: "Jeremiah 29:11",
    text: "For I know the thoughts that I think toward you, says Yahweh, thoughts of peace, and not of evil, to give you hope and a future.",
    category: "Hope",
  },
  {
    reference: "Romans 8:28",
    text: "We know that all things work together for good for those who love God, for those who are called according to his purpose.",
    category: "Hope",
  },
  {
    reference: "Psalm 30:5",
    text: "Weeping may stay for the night, but joy comes in the morning.",
    category: "Hope",
  },
  {
    reference: "Lamentations 3:22-23",
    text: "It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail. They are new every morning. Great is your faithfulness.",
    category: "Hope",
  },
  {
    reference: "John 3:16",
    text: "For God so loved the world, that he gave his only born Son, that whoever believes in him should not perish, but have eternal life.",
    category: "Love",
  },
  {
    reference: "Romans 5:8",
    text: "But God commends his own love toward us, in that while we were yet sinners, Christ died for us.",
    category: "Love",
  },
  {
    reference: "Romans 8:38-39",
    text: "For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing will be able to separate us from God’s love which is in Christ Jesus our Lord.",
    category: "Love",
  },
  {
    reference: "1 John 4:19",
    text: "We love him, because he first loved us.",
    category: "Love",
  },
  {
    reference: "2 Corinthians 5:17",
    text: "Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.",
    category: "Identity",
  },
  {
    reference: "Romans 8:1",
    text: "There is therefore now no condemnation to those who are in Christ Jesus.",
    category: "Identity",
  },
  {
    reference: "Galatians 2:20",
    text: "I have been crucified with Christ, and it is no longer I that live, but Christ lives in me.",
    category: "Identity",
  },
  {
    reference: "Ephesians 2:10",
    text: "For we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them.",
    category: "Identity",
  },
  {
    reference: "Philippians 4:6-7",
    text: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. The peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.",
    category: "Prayer",
  },
  {
    reference: "1 Thessalonians 5:17",
    text: "Pray without ceasing.",
    category: "Prayer",
  },
  {
    reference: "Matthew 6:6",
    text: "But you, when you pray, enter into your inner room, and having shut your door, pray to your Father who is in secret.",
    category: "Prayer",
  },
  {
    reference: "James 5:16",
    text: "The insistent prayer of a righteous person is powerfully effective.",
    category: "Prayer",
  },
  {
    reference: "James 1:5",
    text: "But if any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach; and it will be given to him.",
    category: "Wisdom",
  },
  {
    reference: "Proverbs 16:3",
    text: "Commit your deeds to Yahweh, and your plans shall succeed.",
    category: "Wisdom",
  },
  {
    reference: "Psalm 119:105",
    text: "Your word is a lamp to my feet, and a light for my path.",
    category: "Wisdom",
  },
  {
    reference: "Proverbs 18:10",
    text: "Yahweh’s name is a strong tower: the righteous run to him, and are safe.",
    category: "Wisdom",
  },
  {
    reference: "John 8:12",
    text: "I am the light of the world. He who follows me will not walk in the darkness, but will have the light of life.",
    category: "Jesus",
  },
  {
    reference: "John 10:10",
    text: "I came that they may have life, and may have it abundantly.",
    category: "Jesus",
  },
  {
    reference: "John 14:6",
    text: "Jesus said to him, I am the way, the truth, and the life. No one comes to the Father, except through me.",
    category: "Jesus",
  },
  {
    reference: "John 15:5",
    text: "I am the vine. You are the branches. He who remains in me and I in him bears much fruit, for apart from me you can do nothing.",
    category: "Jesus",
  },
  {
    reference: "Matthew 19:26",
    text: "With men this is impossible, but with God all things are possible.",
    category: "Faith",
  },
  {
    reference: "Mark 9:23",
    text: "All things are possible to him who believes.",
    category: "Faith",
  },
  {
    reference: "Luke 1:37",
    text: "For nothing spoken by God is impossible.",
    category: "Faith",
  },
  {
    reference: "Hebrews 11:1",
    text: "Now faith is assurance of things hoped for, proof of things not seen.",
    category: "Faith",
  },
  {
    reference: "Psalm 91:1-2",
    text: "He who dwells in the secret place of the Most High will rest in the shadow of the Almighty. I will say of Yahweh, He is my refuge and my fortress; my God, in whom I trust.",
    category: "Protection",
  },
  {
    reference: "Psalm 121:1-2",
    text: "I will lift up my eyes to the hills. Where does my help come from? My help comes from Yahweh, who made heaven and earth.",
    category: "Protection",
  },
  {
    reference: "Psalm 27:1",
    text: "Yahweh is my light and my salvation. Whom shall I fear? Yahweh is the strength of my life. Of whom shall I be afraid?",
    category: "Protection",
  },
  {
    reference: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you, and through the rivers, they will not overflow you.",
    category: "Protection",
  },
  {
    reference: "Psalm 103:2-3",
    text: "Praise Yahweh, my soul, and don’t forget all his benefits; who forgives all your sins; who heals all your diseases.",
    category: "Healing",
  },
  {
    reference: "Psalm 147:3",
    text: "He heals the broken in heart, and binds up their wounds.",
    category: "Healing",
  },
  {
    reference: "Jeremiah 17:14",
    text: "Heal me, O Yahweh, and I will be healed. Save me, and I will be saved; for you are my praise.",
    category: "Healing",
  },
  {
    reference: "Isaiah 53:5",
    text: "He was wounded for our transgressions. He was bruised for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.",
    category: "Healing",
  },
  {
    reference: "Matthew 6:33",
    text: "But seek first God’s Kingdom and his righteousness; and all these things will be given to you as well.",
    category: "Surrender",
  },
  {
    reference: "Luke 9:23",
    text: "If anyone desires to come after me, let him deny himself, take up his cross, and follow me.",
    category: "Surrender",
  },
  {
    reference: "Romans 12:1",
    text: "Present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service.",
    category: "Surrender",
  },
  {
    reference: "Proverbs 3:5",
    text: "Trust in Yahweh with all your heart, and don’t lean on your own understanding.",
    category: "Surrender",
  },
  {
    reference: "Psalm 139:23-24",
    text: "Search me, God, and know my heart. Try me, and know my thoughts. See if there is any wicked way in me, and lead me in the everlasting way.",
    category: "Growth",
  },
  {
    reference: "James 1:2-4",
    text: "Count it all joy, my brothers, when you fall into various temptations, knowing that the testing of your faith produces endurance.",
    category: "Growth",
  },
  {
    reference: "Romans 12:2",
    text: "Don’t be conformed to this world, but be transformed by the renewing of your mind.",
    category: "Growth",
  },
  {
    reference: "Philippians 1:6",
    text: "Being confident of this very thing, that he who began a good work in you will complete it until the day of Jesus Christ.",
    category: "Growth",
  },
];

const categories = [
  "All",
  "Rest",
  "Comfort",
  "Fear",
  "Trust",
  "Strength",
  "Hope",
  "Love",
  "Identity",
  "Prayer",
  "Wisdom",
  "Jesus",
  "Faith",
  "Protection",
  "Healing",
  "Surrender",
  "Growth",
];

export default function ReadScripture() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [reflection, setReflection] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const [savedReflections, setSavedReflections] = useState<ReflectionEntry[]>(
    []
  );

  useEffect(() => {
    const stored = localStorage.getItem(REFLECTION_STORAGE_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          setSavedReflections(parsed);
        }
      } catch {
        setSavedReflections([]);
      }
    }
  }, []);

  const filteredVerses = useMemo(() => {
    if (selectedCategory === "All") {
      return verses;
    }

    return verses.filter(
      (verse) => verse.category === selectedCategory
    );
  }, [selectedCategory]);

  const verse = filteredVerses[selectedIndex] ?? filteredVerses[0];

  function changeCategory(category: string) {
    setSelectedCategory(category);
    setSelectedIndex(0);
    setReflection("");
    setSavedMessage("");
  }

  function showNextVerse() {
    setSelectedIndex((current) =>
      current === filteredVerses.length - 1 ? 0 : current + 1
    );

    setReflection("");
    setSavedMessage("");
  }

  function showPreviousVerse() {
    setSelectedIndex((current) =>
      current === 0 ? filteredVerses.length - 1 : current - 1
    );

    setReflection("");
    setSavedMessage("");
  }

  function showRandomVerse() {
    if (filteredVerses.length <= 1) return;

    let random = Math.floor(Math.random() * filteredVerses.length);

    if (random === selectedIndex) {
      random = (random + 1) % filteredVerses.length;
    }

    setSelectedIndex(random);
    setReflection("");
    setSavedMessage("");
  }

  function saveReflection() {
    const cleanReflection = reflection.trim();

    if (!cleanReflection) return;

    const newReflection: ReflectionEntry = {
      id: `${Date.now()}-${Math.random()}`,
      reference: verse.reference,
      scripture: verse.text,
      reflection: cleanReflection,
      createdAt: new Date().toISOString(),
    };

    const updated = [newReflection, ...savedReflections];

    localStorage.setItem(
      REFLECTION_STORAGE_KEY,
      JSON.stringify(updated)
    );

    setSavedReflections(updated);
    setReflection("");
    setSavedMessage("Your Scripture reflection was saved on this device.");
  }

  function deleteReflection(id: string) {
    const updated = savedReflections.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      REFLECTION_STORAGE_KEY,
      JSON.stringify(updated)
    );

    setSavedReflections(updated);
  }

  return (
    <main className="min-h-screen bg-[#efe7da] px-4 py-7 text-[#40362d] sm:px-6">
      <div className="mx-auto max-w-6xl">

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
        <div className="mt-8 text-center">
          <div className="text-4xl">📖</div>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Read Scripture
          </h1>

          <p className="mt-3 font-serif text-lg italic text-[#735f4c] sm:text-xl">
            Slow down and let God&apos;s Word speak.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#65584e] sm:text-base">
            Choose what your heart needs today, or simply let a Scripture meet
            you right where you are.
          </p>
        </div>

        {/* Mobile Topic Picker */}
        <div className="mx-auto mt-8 max-w-2xl lg:hidden">
          <label
            htmlFor="topic"
            className="mb-2 block text-sm font-semibold text-[#55483e]"
          >
            Choose a Scripture Topic
          </label>

          <select
            id="topic"
            value={selectedCategory}
            onChange={(e) => changeCategory(e.target.value)}
            className="w-full rounded-2xl border border-[#d6c7b7] bg-white px-4 py-4 text-base text-[#4d4239]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[230px_1fr]">

          {/* Desktop Topics */}
          <aside className="hidden self-start rounded-3xl bg-white/80 p-5 shadow-xl lg:block">
            <h2 className="font-serif text-2xl text-[#4d4239]">
              Scripture Topics
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#74675c]">
              Choose a topic that fits what you need today.
            </p>

            <div className="mt-5 space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => changeCategory(category)}
                  className={`w-full rounded-full px-4 py-2.5 text-left text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-[#654e3b] text-white"
                      : "bg-[#f5eee5] text-[#654e3b]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section>

            {/* Scripture */}
            <div className="rounded-[2rem] bg-white/90 p-6 text-center shadow-xl sm:p-10">
              <div className="inline-flex rounded-full bg-[#f5eee5] px-4 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d6a5a]">
                  {selectedCategory === "All"
                    ? "All Scriptures"
                    : selectedCategory}
                </p>
              </div>

              <p className="mt-4 text-xs text-[#9a8b7f]">
                Scripture {selectedIndex + 1} of {filteredVerses.length}
              </p>

              <div className="mx-auto mt-8 max-w-3xl">
                <div className="font-serif text-5xl text-[#c1a27d]">
                  “
                </div>

                <p className="font-serif text-xl leading-9 text-[#443a32] sm:text-3xl sm:leading-[1.6]">
                  {verse.text}
                </p>

                <div className="mx-auto mt-7 h-px w-20 bg-[#d8c7b4]" />

                <p className="mt-6 text-lg font-semibold text-[#654e3b]">
                  {verse.reference}
                </p>

                <p className="mt-2 text-sm text-[#85766a]">
                  World English Bible (WEB)
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={showPreviousVerse}
                className="rounded-full bg-white/90 px-5 py-3 font-medium text-[#654e3b] shadow-md"
              >
                ← Previous
              </button>

              <button
                type="button"
                onClick={showRandomVerse}
                className="rounded-full border border-[#bba894] bg-[#f7f1e9] px-5 py-3 font-medium text-[#654e3b] shadow-md"
              >
                ✨ Give Me a Scripture
              </button>

              <button
                type="button"
                onClick={showNextVerse}
                className="rounded-full bg-[#654e3b] px-5 py-3 font-medium text-white shadow-md"
              >
                Next →
              </button>
            </div>

            {/* Pause */}
            <div className="mt-5 rounded-3xl border border-[#ddcfbf] bg-[#f8f2ea] p-5 text-center">
              <p className="font-serif text-lg italic text-[#6c5948]">
                Read it slowly. You don&apos;t have to rush to the next verse.
              </p>
            </div>

            {/* Sit With Jesus - MOVED UP */}
            <div className="mt-5 rounded-3xl bg-white/80 p-6 shadow-md sm:p-8">

              <div className="text-center">
                <div className="text-3xl">🌿</div>

                <h2 className="mt-3 font-serif text-2xl text-[#4d4239]">
                  Sit With Jesus
                </h2>

                <p className="mt-2 text-sm text-[#74675c]">
                  Sit with this Scripture before moving on.
                </p>
              </div>

              <div className="mt-6 space-y-4 rounded-2xl bg-[#fffaf4] p-5">
                <p className="leading-7 text-[#62574e]">
                  <strong>1.</strong> What word or phrase stood out to you?
                </p>

                <p className="leading-7 text-[#62574e]">
                  <strong>2.</strong> What does this Scripture show you about
                  God, Jesus, or your relationship with Him?
                </p>

                <p className="leading-7 text-[#62574e]">
                  <strong>3.</strong> Is there anything this Scripture is
                  helping you trust, surrender, remember, or pray about today?
                </p>
              </div>

              {/* Scripture Reflection Journal */}
              <div className="mt-6">
                <label
                  htmlFor="scripture-reflection"
                  className="font-serif text-xl text-[#4d4239]"
                >
                  My Scripture Reflection
                </label>

                <p className="mt-2 text-sm leading-6 text-[#74675c]">
                  Write your answers, prayer, thoughts, or anything that stood
                  out while reading {verse.reference}.
                </p>

                <textarea
                  id="scripture-reflection"
                  value={reflection}
                  onChange={(e) => {
                    setReflection(e.target.value.slice(0, 4000));
                    setSavedMessage("");
                  }}
                  placeholder="What stood out to me from this Scripture..."
                  className="mt-4 min-h-[220px] w-full resize-none rounded-2xl border border-[#d6c8b8] bg-white p-5 leading-7 text-[#463c34] outline-none focus:border-[#8c735c]"
                />

                <div className="mt-2 text-right text-xs text-[#807369]">
                  {reflection.length}/4000
                </div>

                <button
                  type="button"
                  onClick={saveReflection}
                  disabled={!reflection.trim()}
                  className="mt-4 w-full rounded-full bg-[#654e3b] px-6 py-4 font-medium text-white shadow-lg disabled:opacity-50"
                >
                  Save Scripture Reflection
                </button>

                {savedMessage && (
                  <div className="mt-4 rounded-2xl bg-[#edf2e9] px-4 py-3 text-center">
                    <p className="text-sm font-medium text-[#5d7154]">
                      {savedMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>

          </section>
        </div>

        {/* Saved Scripture Reflections */}
        <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white/80 p-6 shadow-xl sm:p-8">
          <h2 className="font-serif text-2xl text-[#4d4239]">
            Saved Scripture Reflections
          </h2>

          <p className="mt-2 text-sm text-[#74675c]">
            Your reflections stay in this browser on this device.
          </p>

          {savedReflections.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-[#d6c8b8] bg-[#fffaf4] p-6 text-center">
              <p className="text-sm text-[#74675c]">
                You haven&apos;t saved any Scripture reflections yet.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {savedReflections.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#ddd0c1] bg-[#fffdf9] p-5"
                >
                  <div className="flex flex-wrap justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#654e3b]">
                        {item.reference}
                      </p>

                      <p className="mt-1 text-xs text-[#8a796b]">
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => deleteReflection(item.id)}
                      className="text-xs font-medium text-[#8b5e55] underline"
                    >
                      Delete
                    </button>
                  </div>

                  <p className="mt-4 font-serif text-sm italic leading-6 text-[#74675c]">
                    “{item.scripture}”
                  </p>

                  <div className="mt-4 border-t border-[#e7ddd2] pt-4">
                    <p className="whitespace-pre-wrap leading-7 text-[#51463d]">
                      {item.reflection}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Translation Notice */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#d9ccb9] bg-[#f8f3ec] p-5 text-sm leading-6 text-[#62574e]">
          <p className="font-semibold text-[#493f37]">
            Scripture Translation
          </p>

          <p className="mt-2">
            Scripture quotations in Walking With Jesus are from the World
            English Bible (WEB), a public-domain Bible translation.
          </p>
        </div>

        {/* Health Notice */}
        <div className="mx-auto mt-4 max-w-3xl rounded-2xl border border-[#d9ccb9] bg-white/65 p-5 text-sm leading-6 text-[#62574e]">
          <p className="font-semibold text-[#493f37]">
            Important Health & Safety Notice
          </p>

          <p className="mt-2">
            Walking With Jesus is a Christian spiritual reflection and prayer
            resource. It is not a medical, mental health, counseling, therapy,
            diagnostic, treatment, crisis, or healthcare service.
          </p>

          <p className="mt-2">
            Nothing on this page should be used as a substitute for advice,
            diagnosis, treatment, or care from a qualified professional.
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