import { MapPin, ArrowRight, Plus } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "../../../IMG_4576.jpg";

export function HeroSection() {
  const chapters = [
    {
      name: "Chicago Chapter",
      city: "Chicago, IL",
      route: "chicago",
      x: 64.5,
      y: 40,
    },
    {
      name: "University of Michigan",
      city: "Ann Arbor, MI",
      route: "michigan",
      x: 70,
      y: 39,
      affiliation: "University of Michigan",
    },
    {
      name: "Union County Chapter",
      city: "Union County, NJ",
      route: "newjersey",
      x: 82,
      y: 44,
    },
    {
      name: "University of Iowa",
      city: "Iowa City, IA",
      route: "iowa",
      x: 57.5,
      y: 42,
      affiliation: "University of Iowa",
      comingSoon: true,
    },
    {
      name: "North Carolina Chapter",
      city: "North Carolina",
      route: "northcarolina",
      x: 78,
      y: 57,
    },
  ];

  const navigateToChapter = (
    route: string,
    comingSoon?: boolean
  ) => {
    if (!comingSoon) {
      window.dispatchEvent(
        new CustomEvent("navigate", {
          detail: route,
        })
      );
    }
  };

  return (
    <>
      {/* =====================================================
          FULL-SCREEN HOMEPAGE HERO
      ====================================================== */}

      <section className="relative h-screen min-h-[650px] w-full overflow-hidden">

        {/* Background Photo */}
        <img
          src={heroImage}
          alt="Project Save Our Skin"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="mx-auto max-w-5xl text-center text-white">

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] md:text-base">
              Project Save Our Skin
            </p>

            <h1 className="mb-8 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Saving Skin.
              <br />
              Changing Lives.
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/95 md:text-2xl">
              Empowering communities through skin cancer awareness,
              prevention, education, and early detection.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Button
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-gray-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-pink-50"
                onClick={() =>
                  document
                    .getElementById("mission")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn Our Mission
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/80 bg-white/10 px-8 py-6 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Find a Chapter
              </Button>

            </div>
          </div>
        </div>

        {/* Fade Into White */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-64 bg-gradient-to-b from-transparent via-white/25 to-white" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center gap-1">

            <span className="text-[10px] uppercase tracking-[0.3em]">
              Explore
            </span>

            <span className="animate-bounce text-xl">
              ↓
            </span>

          </div>
        </div>

      </section>

      {/* =====================================================
          INTERACTIVE NATIONAL CHAPTER MAP
      ====================================================== */}

      <section
        id="projects"
        className="relative overflow-hidden bg-white py-24 md:py-32"
      >

        {/* Background decoration */}
        <div className="pointer-events-none absolute left-[-100px] top-[150px] h-[300px] w-[300px] rounded-full bg-pink-100/40 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[50px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[var(--matcha-light)]/40 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">

          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-primary">
              Our National Network
            </p>

            <h2 className="mb-6 text-4xl md:text-6xl text-gradient">
              Find Your Local Chapter
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Explore Project Save Our Skin chapters bringing skin health
              education, prevention, and advocacy to communities across
              the country.
            </p>

          </div>

          {/* =================================================
              UNITED STATES MAP
          ================================================== */}

          <div className="relative mx-auto max-w-6xl">

            <div className="relative aspect-[1.55/1] w-full">

              {/* Pink glow */}
              <div className="absolute inset-[12%] rounded-full bg-pink-100/50 blur-3xl" />

              {/* 960px Wikimedia map */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blank_US_Map_%28states_only%29.svg/960px-Blank_US_Map_%28states_only%29.svg.png"
                alt="Map of the United States"
                className="absolute inset-0 z-10 h-full w-full object-contain opacity-90"
              />

              {/* =================================================
                  CHAPTER MARKERS
              ================================================== */}

              {chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${chapter.x}%`,
                    top: `${chapter.y}%`,
                  }}
                >

                  {/* Marker */}
                  <button
                    type="button"
                    onClick={() =>
                      navigateToChapter(
                        chapter.route,
                        chapter.comingSoon
                      )
                    }
                    className={`relative flex h-14 w-14 items-center justify-center ${
                      chapter.comingSoon
                        ? "cursor-default"
                        : "cursor-pointer"
                    }`}
                    aria-label={`${chapter.name}, ${chapter.city}`}
                  >

                    {/* Pulse */}
                    {!chapter.comingSoon && (
                      <>
                        <span className="absolute h-10 w-10 animate-ping rounded-full bg-pink-500/20" />

                        <span className="absolute h-8 w-8 rounded-full bg-pink-400/20" />
                      </>
                    )}

                    {/* Dot */}
                    <span
                      className={`relative flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white shadow-xl transition-all duration-300 group-hover:scale-125 ${
                        chapter.comingSoon
                          ? "bg-gray-400"
                          : "bg-primary"
                      }`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    </span>

                  </button>

                  {/* =================================================
                      HOVER CARD
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[58px]
                      left-1/2
                      z-50
                      w-[240px]
                      -translate-x-1/2
                      translate-y-3
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >

                    <div className="rounded-2xl border border-pink-100 bg-white p-5 text-left shadow-2xl">

                      <div className="mb-3 flex items-start gap-3">

                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-50">

                          <MapPin className="h-5 w-5 text-primary" />

                        </div>

                        <div>

                          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                            {chapter.comingSoon
                              ? "Coming Soon"
                              : "Local Chapter"}
                          </p>

                          <h3 className="mt-1 text-base font-semibold leading-tight text-gray-900">
                            {chapter.name}
                          </h3>

                        </div>

                      </div>

                      <p className="text-sm text-gray-500">
                        {chapter.city}
                      </p>

                      {chapter.affiliation && (
                        <p className="mt-1 text-xs text-gray-400">
                          {chapter.affiliation}
                        </p>
                      )}

                      {!chapter.comingSoon && (
                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                          Visit Chapter
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}

                    </div>

                    {/* Popup triangle */}
                    <div className="mx-auto h-0 w-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white" />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Instructions */}
          <div className="mt-2 text-center">

            <p className="text-sm text-gray-400">
              Hover over a location to explore our chapters.
            </p>

          </div>

          {/* =================================================
              START A CHAPTER
          ================================================== */}

          <div className="mx-auto mt-16 max-w-4xl">

            <div className="relative overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-[var(--matcha-light)] p-8 text-center md:p-12">

              <div className="relative z-10">

                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">

                  <Plus className="h-5 w-5 text-primary" />

                </div>

                <h3 className="mb-4 text-2xl text-gray-800 md:text-3xl">
                  Don't see a chapter near you?
                </h3>

                <p className="mx-auto mb-7 max-w-xl leading-relaxed text-gray-600">
                  Help bring Project Save Our Skin to your campus or
                  community and join our growing national network.
                </p>

                <Button
                  size="lg"
                  className="rounded-full bg-primary px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-[var(--pink-dark)]"
                  onClick={() =>
                    document
                      .getElementById("get-involved")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Start a Chapter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </div>

            </div>

          </div>

          {/* Attribution */}
          <p className="mt-6 text-center text-[10px] text-gray-300">
            U.S. map: Heitordp, CC0, via Wikimedia Commons
          </p>

        </div>

      </section>
    </>
  );
}