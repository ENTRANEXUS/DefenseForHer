import { useEffect, useRef, useState } from "react";

export default function AgeWarning() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.localStorage.getItem("ageAccepted");
  });
  const [isVisible, setIsVisible] = useState(false);
  const [is18, setIs18] = useState(false);
  const [understandsPurpose, setUnderstandsPurpose] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setIsVisible(false);
      return;
    }

    const timeoutId = window.setTimeout(() => setIsVisible(true), 20);
    dialogRef.current?.focus();

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyOverflowX = document.body.style.overflowX;
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overflowX = previousBodyOverflowX;
    };
  }, [open]);

  const handleAccept = () => {
    window.localStorage.setItem("ageAccepted", "true");
    setIsVisible(false);
    setOpen(false);
  };

  const handleLeave = () => {
    window.location.assign("https://www.google.com");
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-md sm:px-6">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-warning-title"
        aria-describedby="age-warning-description"
        className={`w-full max-w-3xl rounded-2xl border border-red-600/50 bg-zinc-950/95 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_80px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out sm:p-8 ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-red-500">
          <span className="rounded-full border border-red-600/40 bg-red-600/10 p-2 text-xl">🔞</span>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-red-400">
              Adults Only
            </p>
            <h1 id="age-warning-title" className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Educational Self-Defense Content
            </h1>
          </div>
        </div>

        <div id="age-warning-description" className="mt-6 space-y-5 text-sm leading-7 text-zinc-300 sm:text-base">
          <p>
            This website discusses self-defense strategies, violence prevention, and fictionalized assault scenarios inspired by real-world incidents.
          </p>
          <p>
            The purpose of this project is education, awareness, and personal safety—not entertainment or encouragement of violence.
          </p>
          <p>
            Some pages contain mature themes that may not be suitable for children or sensitive viewers.
          </p>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-200">
              Important Notice
            </h2>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>• All stories are fictionalized adaptations inspired by real-life situations.</li>
              <li>• They are written solely for educational, awareness, and self-defense discussion.</li>
              <li>• This website does not encourage violence, vigilantism, revenge, or illegal conduct.</li>
              <li>• Any physical defensive actions discussed are intended only as last-resort measures to create an opportunity to escape imminent danger and seek help.</li>
              <li>• Users should always comply with the laws of their jurisdiction.</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
            <label className="flex items-start gap-3 text-sm text-zinc-200">
              <input
                type="checkbox"
                checked={is18}
                onChange={(event) => setIs18(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-red-600 focus:ring-red-500"
              />
              <span>I confirm that I am at least 18 years old.</span>
            </label>

            <label className="flex items-start gap-3 text-sm text-zinc-200">
              <input
                type="checkbox"
                checked={understandsPurpose}
                onChange={(event) => setUnderstandsPurpose(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-red-600 focus:ring-red-500"
              />
              <span>I understand this website is for educational and awareness purposes only.</span>
            </label>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleLeave}
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-700"
          >
            Leave Website
          </button>
          <button
            type="button"
            onClick={handleAccept}
            disabled={!is18 || !understandsPurpose}
            className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-900/50 disabled:text-zinc-400"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}