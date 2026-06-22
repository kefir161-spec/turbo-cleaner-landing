"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { VideoModal } from "@/components/media/VideoModal";
import { useProduct, useUi } from "@/lib/content-context";
import type { DemoClip } from "@/content/types";
import { cn } from "@/lib/utils";

function DemoCard({ clip, watchLabel }: { clip: DemoClip; watchLabel: string }) {
  const portrait = clip.orientation === "portrait";
  return (
    <VideoModal src={clip.src} poster={clip.poster} caption={clip.caption} orientation={clip.orientation}>
      <button
        type="button"
        aria-label={`${watchLabel}: ${clip.caption}`}
        className={cn(
          "group relative w-full overflow-hidden rounded-[var(--radius-card)] border border-line text-left",
          portrait ? "aspect-[9/16]" : "aspect-video",
        )}
      >
        <Image
          src={clip.poster}
          alt=""
          fill
          sizes={portrait ? "(max-width: 640px) 50vw, 240px" : "(max-width: 640px) 100vw, 50vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/20" />
        <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-2 py-0.5 font-mono text-xs text-fg backdrop-blur-sm">
          {clip.duration}
        </span>
        <span className="absolute left-1/2 top-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-[#1a0e03] shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="size-6" aria-hidden />
        </span>
        <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-fg">
          {clip.caption}
        </span>
      </button>
    </VideoModal>
  );
}

export function Demos() {
  const { demos } = useProduct();
  const { sectionDemos, watchVideo } = useUi();
  const landscape = demos.items.filter((c) => c.orientation === "landscape");
  const portrait = demos.items.filter((c) => c.orientation === "portrait");

  return (
    <Section id="demos" className="bg-ink-2">
      <SectionHeading
        eyebrow={demos.eyebrow}
        title={demos.title}
        intro={demos.intro}
        index={sectionDemos}
      />

      <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2">
        {landscape.map((clip) => (
          <DemoCard key={clip.id} clip={clip} watchLabel={watchVideo} />
        ))}
      </Reveal>

      <Reveal stagger className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-4">
        {portrait.map((clip) => (
          <DemoCard key={clip.id} clip={clip} watchLabel={watchVideo} />
        ))}
      </Reveal>
    </Section>
  );
}
