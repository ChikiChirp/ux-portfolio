"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const REDIRECT_URL = "https://nikitaquazi.framer.website";
const DEFAULT_DELAY_SECONDS = 10;

export default function RedirectModal() {
  const [open, setOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_DELAY_SECONDS);

  // Always show (no dismiss), but disable in dev or via env flag
  useEffect(() => {
    const disabled =
      process.env.NEXT_PUBLIC_DISABLE_REDIRECT === "1" ||
      process.env.NODE_ENV === "development"; // avoid interrupting local dev

    if (!disabled) {
      setOpen(true);
    }
  }, []);

  // Countdown and redirect
  useEffect(() => {
    if (!open) return;
    if (secondsLeft <= 0) {
      window.location.assign(REDIRECT_URL);
      return;
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [open, secondsLeft]);

  if (!open) return null;

  const goNow = () => {
    window.location.assign(REDIRECT_URL);
  };

  return (
    <>
      {/* Tenor embed loader */}
      <Script src="https://tenor.com/embed.js" strategy="afterInteractive" />

      {/* Overlay */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
        <div className="w-full max-w-md rounded-2xl bg-white text-gray-900 shadow-2xl ring-1 ring-black/10 dark:bg-neutral-900 dark:text-white">
          <div className="p-5">
            <h2 className="text-lg font-semibold">New site incoming!</h2>
            <p className="mt-1 text-lg opacity-80">
              You will be redirected to my new site in {secondsLeft}s.
            </p>

            {/* Tenor GIF */}
            <div
              className="tenor-gif-embed mt-4 overflow-hidden rounded-lg"
              data-postid="13829765"
              data-share-method="host"
              data-aspect-ratio="0.859107"
              data-width="100%"
            >
              <a href="https://tenor.com/view/kirby-dance-victory-dance-sprite-cloud-gif-13829765">
                Kirby Dance GIF
              </a>
              from <a href="https://tenor.com/search/kirby-gifs">Kirby GIFs</a>
            </div>

            {/* Action */}
            <div className="mt-5 flex">
              <button
                onClick={goNow}
                className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Go now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
