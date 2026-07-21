import { useEffect, useState } from "react";

export default function AgeWarning() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("ageAccepted");
    if (!accepted) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ageAccepted", "true");
    setOpen(false);
  };

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-5">
      <div className="bg-zinc-900 border border-red-600 rounded-xl max-w-2xl w-full p-8">

        <h1 className="text-3xl font-bold text-red-500 mb-4">
          🔞 18+ Content Warning
        </h1>

        <p className="text-zinc-300 leading-7 mb-4">
          This website contains mature themes including violence,
          sexual assault scenarios and self-defense techniques.
          It is intended for adults (18 years and older).
        </p>

        <p className="text-zinc-400 mb-4">
          The stories on this website are fictionalized narratives
          inspired by real-world incidents and are presented solely
          for education, awareness, and self-defense learning.
        </p>

        <ul className="list-disc ml-6 text-zinc-400 mb-8 space-y-2">
          <li>I am 18 years of age or older.</li>
          <li>I understand this website contains mature material.</li>
          <li>I am viewing this website for educational purposes.</li>
          <li>I understand the stories are fictionalized.</li>
        </ul>

        <div className="flex gap-4">

          <button
            onClick={handleAccept}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold"
          >
            I am 18+ & Continue
          </button>

          <button
            onClick={handleLeave}
            className="bg-zinc-700 hover:bg-zinc-600 px-6 py-3 rounded-lg"
          >
            Leave Website
          </button>

        </div>

      </div>
    </div>
  );
}