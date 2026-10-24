import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import ganesha from "@/assets/ganesha.png";
import toran from "@/assets/toran.png";
const photoAsleep = "/images/image11.jpg";
const photoBlooms = "/images/image22.jpg";
const photoGanesha = "/images/uyyala.jpeg";
const photoFamily = "/images/family-photo.jpeg"; // The family photo replaces the duplicate cradle image.
const photoThali = "/images/thali.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Baby Girl Naming Ceremony Reveal",
      },
      {
        name: "description",
        content:
          "With the blessings of Lord Ganesha, join us for the naming ceremony reveal of our darling baby girl — Vaamika.",
      },
      { property: "og:title", content: "Naming Ceremony Reveal" },
      {
        property: "og:description",
        content:
          "With the blessings of Lord Ganesha, we joyfully reveal the name of our baby girl: Vaamika.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Naming Ceremony Reveal" },
      {
        name: "twitter:description",
        content:
          "With the blessings of Lord Ganesha, we joyfully reveal the name of our baby girl: Vaamika.",
      },
    ],
  }),
  component: Index,
});

const NAME = "Vaamika";
const NAME_TELUGU = "వామిక";

const PHOTOS = [
  {
    src: photoGanesha,
    alt: "The decorated naming ceremony cradle and Lord Ganesha backdrop",
    caption: "A blessed ceremony setting",
    rotate: "-rotate-2",
    focus: "object-[50%_88%]",
  },
  {
    src: photoAsleep,
    alt: "Vaamika fast asleep, hugging her teddy bear",
    caption: "Fast asleep with her first friend",
    rotate: "rotate-2",
    focus: "object-[50%_35%]",
  },
  {
    src: photoBlooms,
    alt: "Vaamika lying on a green cloth decorated with white flowers and rose petals",
    caption: "Surrounded by fresh blooms",
    rotate: "-rotate-1",
    focus: "object-[50%_55%]",
  },
  {
    src: photoFamily,
    alt: "Vaamika with her parents at her naming ceremony",
    caption: "A precious family moment",
    rotate: "rotate-1",
    focus: "object-[50%_48%]",
  },
];

function Index() {
  const [revealed, setRevealed] = useState(false);

  const petals = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: 4 + (i * 92) / 14 + ((i * 37) % 9),
        delay: (i * 1.3) % 12,
        duration: 11 + ((i * 7) % 6),
        size: 10 + ((i * 5) % 9),
        tone: i % 3,
      })),
    []
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Festive canopy: marigold toran across the top */}
      <img
        src={toran}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 left-1/2 z-10 w-[min(115%,1400px)] -translate-x-1/2"
        width={1920}
        height={512}
      />

      {revealed && <PetalRain petals={petals} />}

      {/* Soft radial warmth behind the ceremony */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[110vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, var(--secondary), transparent 75%)",
        }}
      />

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-40 pb-16 text-center sm:pt-48">
        {!revealed ? (
          <InvitationScreen onReveal={() => setRevealed(true)} />
        ) : (
          <RevealScreen />
        )}
      </main>

      <footer className="relative z-10 pb-6 text-center text-xs tracking-[0.3em] text-muted-foreground uppercase">
        Sri Ganeshaya Namah
      </footer>
    </div>
  );
}

function InvitationScreen({ onReveal }: { onReveal: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center gap-8">
      <div className="animate-fade-up">
        {/* Auspicious Ganesha with a gently pulsing golden halo */}
        <div className="relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="animate-halo-pulse absolute size-64 rounded-full sm:size-72"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 55%, transparent), transparent 70%)",
            }}
          />
          <img
            src={ganesha}
            alt="Lord Ganesha"
            width={1024}
            height={1024}
            className="animate-float-slow relative w-52 drop-shadow-[0_18px_30px_rgba(0,0,0,0.25)] sm:w-60"
          />
        </div>
      </div>

      <div className="animate-fade-up space-y-4" style={{ animationDelay: "0.25s" }}>
        <p className="text-xs font-semibold tracking-[0.45em] text-accent uppercase">
          Om Shri Ganeshaya Namah
        </p>
        <h1 className="font-display text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
          Baby Girl Naming Ceremony
        </h1>
        <p className="mx-auto max-w-md text-base text-muted-foreground sm:text-lg">
          With the blessings of Lord Ganesha, we are overjoyed to unveil the
          name chosen with love for our darling little one.
        </p>
      </div>

      <button
        onClick={onReveal}
        className="animate-fade-up group relative overflow-hidden rounded-full border border-gold-deep/40 bg-gradient-to-r from-maroon via-accent to-maroon px-10 py-4 text-base font-semibold tracking-widest text-accent-foreground shadow-temple transition-transform duration-300 hover:scale-105 active:scale-95 sm:text-lg"
        style={{ animationDelay: "0.5s" }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
        Reveal Her Name ✨
      </button>

      <p className="animate-fade-up text-sm text-muted-foreground" style={{ animationDelay: "0.7s" }}>
        Tap the seal of blessing to unveil
      </p>

      <ThaliCard />
    </div>
  );
}

function ThaliCard() {
  return (
    <figure
      className="animate-fade-up mt-4 w-full max-w-sm overflow-hidden rounded-3xl border border-gold-deep/30 bg-card/85 p-3 shadow-temple backdrop-blur-sm"
      style={{ animationDelay: "0.9s" }}
    >
      <img
        src={photoThali}
        alt="Traditional naming ceremony thali with sacred items arranged on a silk cloth"
        loading="lazy"
        className="h-44 w-full rounded-2xl object-cover"
      />
      <figcaption className="px-2 pt-3 pb-1 font-display text-sm text-muted-foreground italic">
        Sacred offerings for naming ceremony.
      </figcaption>
    </figure>
  );
}

function RevealScreen() {
  return (
    <div className="flex flex-col items-center gap-8">
      <img
        src={ganesha}
        alt="Lord Ganesha"
        loading="lazy"
        width={1024}
        height={1024}
        className="animate-fade-up w-28 opacity-95 sm:w-32"
      />

      <div className="animate-fade-up space-y-3" style={{ animationDelay: "0.15s" }}>
        <p className="text-xs font-semibold tracking-[0.45em] text-accent uppercase">
          Her name is
        </p>
        <h1 className="font-script animate-gold-shimmer text-gradient-gold text-7xl leading-tight sm:text-8xl md:text-9xl">
          {NAME}
        </h1>
        <p className="font-telugu text-3xl text-foreground sm:text-4xl">{NAME_TELUGU}</p>
      </div>

      <div
        className="animate-fade-up rounded-3xl border border-gold-deep/30 bg-card/80 px-8 py-5 shadow-temple backdrop-blur-sm"
        style={{ animationDelay: "0.4s" }}
      >
        <p className="text-sm tracking-[0.25em] text-muted-foreground uppercase">Meaning</p>
        <p className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
          “A name of Goddess Parvati”
        </p>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Vaamika — strength, grace and devotion. Our little blessing now has
          a name as divine as her smile.
        </p>
      </div>

      <p
        className="animate-fade-up font-display text-lg text-muted-foreground italic"
        style={{ animationDelay: "0.6s" }}
      >
        Blessed by Lord Ganesha, welcomed with marigold blooms — our little
        wonder has a name.
      </p>

      <PhotoGallery />
    </div>
  );
}

function PhotoGallery() {
  return (
    <section className="mt-8 w-full">
      <div className="animate-fade-up mb-8 space-y-2" style={{ animationDelay: "0.8s" }}>
        <p className="text-xs font-semibold tracking-[0.45em] text-accent uppercase">
          Little moments
        </p>
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Our precious memories
        </h2>
      </div>

      <div className="grid w-full grid-cols-2 gap-5 sm:gap-7">
        {PHOTOS.map((photo, i) => (
          <GalleryCard key={photo.caption} photo={photo} index={i} />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({
  photo,
  index,
}: {
  photo: (typeof PHOTOS)[number];
  index: number;
}) {
  return (
    <figure
      className={`animate-fade-up ${photo.rotate} group rounded-2xl border border-gold-deep/25 bg-card p-2.5 shadow-temple transition-transform duration-300 hover:rotate-0 hover:scale-[1.04] sm:p-3.5`}
      style={{ animationDelay: `${0.9 + index * 0.15}s` }}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className={`aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 ${photo.focus}`}
        />
      </div>
      <figcaption className="px-1 pt-2.5 pb-1 font-display text-sm text-foreground italic sm:text-base">
        {photo.caption}
      </figcaption>
    </figure>
  );
}

function PetalRain({
  petals,
}: {
  petals: { left: number; delay: number; duration: number; size: number; tone: number }[];
}) {
  const tones = ["var(--gold)", "var(--primary)", "var(--gold-soft)"];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[110vh] overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="animate-petal-fall absolute top-0 rounded-[60%_40%_55%_45%/50%_60%_40%_50%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.4,
            background: tones[p.tone],
            opacity: 0.8,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
