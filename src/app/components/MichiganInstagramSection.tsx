import { useEffect } from "react";
import { Instagram } from "lucide-react";

export function MichiganInstagramSection() {
  useEffect(() => {
    // Only load the Behold script once
    if ((window as any).__bhldScript) return;

    (window as any).__bhldScript = true;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";

    document.head.appendChild(script);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      
      {/* Soft background accents */}
      <div className="pointer-events-none absolute left-[-120px] top-[80px] h-[300px] w-[300px] rounded-full bg-pink-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-100px] h-[300px] w-[300px] rounded-full bg-[var(--matcha-light)]/40 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <div className="mb-5 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
              <Instagram className="h-5 w-5 text-primary" />
            </div>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-primary">
            Follow Our Chapter
          </p>

          <h2 className="mb-6 text-3xl md:text-5xl text-gradient">
            Life at Project Save Our Skin Michigan
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Follow our University of Michigan chapter as we bring skin health
            education, advocacy, and community outreach to campus and beyond.
          </p>

        </div>

        {/* Behold Instagram Feed */}
        <div className="mx-auto max-w-7xl">
          {/* @ts-ignore */}
          <behold-widget feed-id="cQ5rsiwmPlaaeuxQKaxn"></behold-widget>
        </div>

        {/* Instagram Button */}
        <div className="mt-12 text-center">

          <a
            href="https://www.instagram.com/projectsaveourskin.umich/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-7 py-3 text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-pink-50 hover:shadow-md"
          >
            <Instagram className="h-4 w-4" />
            Follow Our Michigan Chapter
          </a>

        </div>

      </div>
    </section>
  );
}