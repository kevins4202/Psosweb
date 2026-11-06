import { useEffect } from "react";

export function InstagramSection() {
  useEffect(() => {
    // Prevent Behold's script from being loaded more than once
    if ((window as any).__bhldScript) return;

    (window as any).__bhldScript = true;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";

    document.head.appendChild(script);

    return () => {
      // Leave the script loaded so the widget continues working
    };
  }, []);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-primary">
            Follow Our Impact
          </p>

          <h2 className="mb-6 text-4xl md:text-5xl text-gradient">
            See What We're Up To
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Follow Project Save Our Skin as we educate, advocate, and make
            an impact in communities across the country.
          </p>
        </div>

        {/* Behold Instagram Feed */}
        <div className="mx-auto max-w-7xl">
          {/* @ts-ignore */}
          <behold-widget feed-id="OkihqaZ0Esg4AHiCKyHV"></behold-widget>
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/projectsaveourskin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-7 py-3 text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-pink-50 hover:shadow-md"
          >
            Follow @projectsaveourskin
          </a>
        </div>

      </div>
    </section>
  );
}