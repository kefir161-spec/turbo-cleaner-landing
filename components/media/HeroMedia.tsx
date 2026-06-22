"use client";

import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { Pause, Play } from "lucide-react";
import { media } from "@/lib/assets";
import { useEnhancedMotion } from "@/lib/motion";
import { useUi } from "@/lib/content-context";
import { cn } from "@/lib/utils";

/**
 * Фоновое видео hero: muted + playsInline + poster. На слабом устройстве или при
 * reduced motion остаётся постер, видео подгружается по запросу. Пауза за вьюпортом
 * и при скрытой вкладке. Ошибка загрузки → постер поверх, без размонтирования
 * (иначе браузер не успевает переключиться на следующий <source>).
 */
export function HeroMedia() {
  const { playBgVideo, pauseBgVideo } = useUi();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const motionEnabled = useEnhancedMotion();
  const enabled = mounted && motionEnabled;
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !enabled) return;

    const tryPlay = () => {
      if (paused || document.visibilityState !== "visible") return;
      if (!v.currentSrc || v.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
      void v.play().catch(() => {});
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !paused && document.visibilityState === "visible") {
          tryPlay();
        } else {
          v.pause();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(v);

    const onVisibility = () => {
      if (document.visibilityState === "hidden") v.pause();
      else tryPlay();
    };

    v.addEventListener("canplay", tryPlay);
    v.addEventListener("loadeddata", tryPlay);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, [enabled, paused]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  const onVideoError = (event: SyntheticEvent<HTMLVideoElement>) => {
    const code = event.currentTarget.error?.code;
    if (!code || code === MediaError.MEDIA_ERR_ABORTED) return;

    // Дать браузеру время переключиться на следующий <source>.
    window.setTimeout(() => {
      const v = videoRef.current;
      const err = v?.error?.code;
      if (
        err === MediaError.MEDIA_ERR_DECODE ||
        err === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
      ) {
        setFailed(true);
      }
    }, 200);
  };

  const showPoster = !enabled || failed;

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {showPoster && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={media.hero.poster}
          alt=""
          aria-hidden
          className="absolute inset-0 z-[1] size-full object-cover"
          fetchPriority="high"
        />
      )}

      {enabled && (
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          poster={media.hero.poster}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onPlaying={() => setFailed(false)}
          onError={onVideoError}
        >
          <source src={media.hero.mobileMp4} type="video/mp4" media="(max-width: 640px)" />
          <source src={media.hero.mp4} type="video/mp4" />
          <source src={media.hero.webm} type="video/webm" />
        </video>
      )}

      {/* Читаемость текста без сплошной чёрной плашки */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/55 to-ink/15"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40"
      />

      {enabled && !failed && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={paused ? playBgVideo : pauseBgVideo}
          className={cn(
            "absolute bottom-5 right-5 z-10 inline-flex size-11 items-center justify-center",
            "rounded-full border border-line bg-ink/60 text-fg backdrop-blur-md transition-colors hover:bg-surface-2",
          )}
        >
          {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
        </button>
      )}
    </div>
  );
}
