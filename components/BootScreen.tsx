"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const LINES = [
  "[ OK ] Initializing portfolio environment",
  "[ OK ] Loading Linux mindset",
  "[ OK ] Establishing network interface",
  "[ OK ] Checking security layer",
  "[ OK ] Starting Ridho's portfolio",
  "> system ready.",
];

const STORAGE_KEY = "ryp-boot-seen";

export default function BootScreen() {
  const [visible, setVisible] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;
    setVisible(true);

    if (prefersReducedMotion) {
      setLineCount(LINES.length);
      const t = setTimeout(finish, 300);
      return () => clearTimeout(t);
    }

    const interval = setInterval(() => {
      setLineCount((c) => {
        if (c + 1 >= LINES.length) clearInterval(interval);
        return c + 1;
      });
    }, 180);

    const t = setTimeout(finish, 1600);
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={finish}
          className="fixed inset-0 z-[200] flex cursor-pointer items-center justify-center bg-base px-6"
        >
          <div className="w-full max-w-md font-mono text-sm text-ink-muted">
            {LINES.slice(0, lineCount).map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith(">") ? "mt-2 text-signal-teal" : "text-ink-muted"
                }
              >
                {line}
              </p>
            ))}
            <span className="mt-1 inline-block h-4 w-2 animate-blink bg-signal-teal align-middle" />
            <p className="mt-6 text-xs text-ink-faint">press anywhere to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
