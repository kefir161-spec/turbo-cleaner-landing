"use client";

import { useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  src: string;
  poster: string;
  caption: string;
  orientation?: "landscape" | "portrait";
  children: ReactNode;
}

/**
 * Доступный модальный плеер: focus trap, Escape и возврат фокуса — от Radix Dialog.
 * Видео монтируется только при открытии (ленивая загрузка). Звук не автозапускается.
 */
export function VideoModal({
  src,
  poster,
  caption,
  orientation = "landscape",
  children,
}: VideoModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/85 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[60] w-[min(94vw,1000px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-line bg-ink-2 p-3 shadow-2xl focus:outline-none sm:p-4"
          aria-describedby={undefined}
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <Dialog.Title className="text-sm font-semibold text-fg sm:text-base">
              {caption}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Закрыть видео"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-fg hover:bg-surface-2"
              >
                <X className="size-4" aria-hidden />
              </button>
            </Dialog.Close>
          </div>
          {open && (
            <video
              className={cn(
                "mx-auto w-full rounded-lg bg-black",
                orientation === "portrait" ? "max-h-[78vh] w-auto" : "max-h-[72vh]",
              )}
              src={src}
              poster={poster}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
