import { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ChicagoPage } from "./components/ChicagoPage";
import { MichiganPage } from "./components/MichiganPage";
import { NewJerseyPage } from "./components/NewJerseyPage";
import { NorthCarolinaPage } from "./components/NorthCarolinaPage";
import { BlogPage } from "./components/BlogPage";
import { ArticlePage } from "./components/ArticlePage";
import { AuthorPage } from "./components/AuthorPage";

const chapterPaths: Record<string, string> = {
  chicago: "/chapters/chicago",
  michigan: "/chapters/ann-arbor",
  newjersey: "/chapters/union-county",
  northcarolina: "/chapters/north-carolina",
};

function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateLegacy = (page: string) => {
    navigate(chapterPaths[page] ?? (page === "home" ? "/" : `/${page}`));
  };

  useEffect(() => {
    const handleCustomNavigate = (event: Event) => {
      const destination = (event as CustomEvent<string>).detail;
      navigateLegacy(destination);
    };
    window.addEventListener("navigate", handleCustomNavigate);
    return () => window.removeEventListener("navigate", handleCustomNavigate);
  });

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet context={{ navigateLegacy }} />
      </main>
      <Footer />
    </div>
  );
}

function AboutRoute() {
  const navigate = useNavigate();
  return (
    <AboutPage
      onNavigate={(page) =>
        navigate(chapterPaths[page] ?? `/${page}`)
      }
    />
  );
}

function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 pt-24 text-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          404
        </p>
        <h1 className="font-heading text-4xl font-black text-gray-900">
          This page needs a little care.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-gray-600">
          The page you requested could not be found.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-[var(--pink-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Return home
        </button>
      </div>
    </section>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutRoute },
      { path: "chapters/chicago", Component: ChicagoPage },
      { path: "chapters/ann-arbor", Component: MichiganPage },
      { path: "chapters/union-county", Component: NewJerseyPage },
      { path: "chapters/north-carolina", Component: NorthCarolinaPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:articleSlug", Component: ArticlePage },
      { path: "authors/:authorSlug", Component: AuthorPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
