import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import psosLogo from "../../imports/58DE67EF-9F2A-4EBC-801D-9740E0F22DE5.JPG";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
    isActive
      ? "text-primary after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary"
      : "text-gray-700 hover:text-primary"
  }`;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const openApplication = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-pink-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex min-h-20 items-center justify-between gap-5 px-4">
        <Link
          to="/"
          aria-label="Project Save Our Skin home"
          className="flex min-w-0 items-center gap-3 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pink-100 p-1">
            <img
              src={psosLogo}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </span>
          <span className="hidden font-heading text-lg font-black text-primary sm:block lg:text-xl">
            Project Save Our Skin
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>
          <button
            onClick={() => goToSection("projects")}
            className="py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Chapters
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                Get Involved
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-60">
              <DropdownMenuItem onClick={() => goToSection("get-involved")}>
                Ways to get involved
              </DropdownMenuItem>
              <DropdownMenuItem onClick={openApplication}>
                Apply for a board position
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  (window.location.href =
                    "mailto:projectsaveourskin@gmail.com")
                }
              >
                Contact via email
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink to="/blog" className={navClass}>
            Blog
          </NavLink>
          <button
            onClick={() => goToSection("contact")}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--pink-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-full p-2 text-gray-800 hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-pink-100 bg-white px-5 py-5 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-lg flex-col gap-1">
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-gray-800 hover:bg-pink-50">
              About Us
            </NavLink>
            <button onClick={() => goToSection("projects")} className="rounded-xl px-4 py-3 text-left font-semibold text-gray-800 hover:bg-pink-50">
              Chapters
            </button>
            <button onClick={() => goToSection("get-involved")} className="rounded-xl px-4 py-3 text-left font-semibold text-gray-800 hover:bg-pink-50">
              Get Involved
            </button>
            <NavLink to="/blog" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-gray-800 hover:bg-pink-50">
              Blog
            </NavLink>
            <button onClick={() => goToSection("contact")} className="mt-2 rounded-full bg-primary px-4 py-3 text-center font-semibold text-white">
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
