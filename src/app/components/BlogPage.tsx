import { useRef, useState } from "react";
import { ArrowRight, FileText, Leaf, UploadCloud } from "lucide-react";
import { Link } from "react-router";
import { articles, getAuthor } from "../blogData";

export function BlogPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const featured = articles.find((article) => article.featured)!;
  const remaining = articles.filter((article) => !article.featured);
  const featuredAuthor = getAuthor(featured.authorSlug)!;

  return (
    <div className="overflow-hidden bg-[#fffdfd] pt-20">
      <section className="relative border-b border-pink-100 px-4 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-pink-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[var(--matcha-light)] blur-3xl" />
        <div className="container relative mx-auto max-w-6xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.42fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                <Leaf className="h-4 w-4" aria-hidden="true" />
                The Skin We&apos;re In
              </div>
              <h1 className="max-w-4xl font-heading text-5xl font-black leading-[0.98] tracking-[-0.04em] text-gray-900 md:text-7xl">
                Knowledge for healthier skin—and kinder communities.
              </h1>
            </div>
            <p className="max-w-lg border-l-2 border-[var(--matcha-medium)] pl-5 text-lg leading-8 text-gray-600">
              Evidence-informed stories, practical prevention, and thoughtful
              perspectives from our community dermatological health educators.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-article" className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.24em] text-[var(--matcha-dark)]">
            Featured story
          </p>
          <article className="group grid overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-[0_24px_70px_rgba(138,78,99,0.10)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72 overflow-hidden bg-[var(--matcha-light)] p-10 md:p-14">
              <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border-[32px] border-white/60" />
              <div className="absolute right-10 top-10 h-24 w-24 rotate-12 rounded-[2rem_0.5rem_2rem_0.5rem] bg-pink-200/80" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--matcha-dark)]">
                  {featured.category}
                </span>
                <span className="mt-24 font-heading text-7xl font-black text-[var(--matcha-medium)]/55 md:text-8xl">
                  01
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14">
              <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                <span>{featured.date}</span>
                <span aria-hidden="true">•</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 id="featured-article" className="font-heading text-3xl font-black leading-tight text-gray-900 md:text-5xl">
                <Link className="decoration-primary decoration-2 underline-offset-8 hover:underline focus-visible:underline" to={`/blog/${featured.slug}`}>
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">{featured.deck}</p>
              <p className="mt-6 text-sm text-gray-500">
                By{" "}
                <Link to={`/authors/${featuredAuthor.slug}`} className="font-bold text-primary underline decoration-pink-200 underline-offset-4 hover:decoration-primary">
                  {featuredAuthor.name}
                </Link>
              </p>
              <Link to={`/blog/${featured.slug}`} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:gap-3 hover:bg-[var(--pink-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="latest-heading" className="bg-[var(--pink-light)]/60 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 id="latest-heading" className="font-heading text-4xl font-black text-gray-900">
            More from the journal
          </h2>
          <div className="mt-10 divide-y divide-pink-200 border-y border-pink-200">
            {remaining.map((article, index) => {
              const author = getAuthor(article.authorSlug)!;
              return (
                <article key={article.slug} className="grid gap-5 py-9 md:grid-cols-[6rem_1fr_auto] md:items-center">
                  <span className="font-heading text-4xl font-black text-pink-300" aria-hidden="true">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--matcha-dark)]">
                      {article.category}
                    </p>
                    <h3 className="font-heading text-2xl font-black text-gray-900 md:text-3xl">
                      <Link to={`/blog/${article.slug}`} className="hover:text-primary focus-visible:text-primary">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-2 max-w-2xl leading-7 text-gray-600">{article.deck}</p>
                    <p className="mt-3 text-sm text-gray-500">
                      By{" "}
                      <Link to={`/authors/${author.slug}`} className="font-bold text-primary underline underline-offset-4">
                        {author.name}
                      </Link>
                      <span aria-hidden="true"> · </span>{article.readTime}
                    </p>
                  </div>
                  <Link to={`/blog/${article.slug}`} aria-label={`Read ${article.title}`} className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-white text-primary transition hover:translate-x-1 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="submit-heading" className="px-4 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--matcha-medium)]/30 bg-white shadow-[0_20px_60px_rgba(93,138,93,0.10)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-[var(--matcha-light)] p-8 md:p-12">
            <FileText className="mb-6 h-10 w-10 text-[var(--matcha-dark)]" aria-hidden="true" />
            <h2 id="submit-heading" className="font-heading text-3xl font-black text-gray-900 md:text-4xl">
              Have an article to share?
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Attach a PDF or text document for editorial review. We accept PDF,
              DOC, DOCX, TXT, RTF, and Markdown files up to 10 MB each.
            </p>
          </div>
          <div className="p-8 md:p-12">
            <input
              ref={inputRef}
              className="sr-only"
              id="article-files"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.txt,.rtf,.md,application/pdf,text/plain,text/markdown"
              onChange={(event) => setSelectedFiles(Array.from(event.target.files ?? []))}
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex min-h-48 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pink-200 bg-pink-50/40 px-6 text-center transition hover:border-primary hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <UploadCloud className="mb-4 h-9 w-9 text-primary" aria-hidden="true" />
              <span className="font-heading text-xl font-black text-gray-900">Choose article files</span>
              <span className="mt-2 text-sm text-gray-500">PDF or text document</span>
            </button>
            <div aria-live="polite" className="mt-5">
              {selectedFiles.length > 0 ? (
                <div>
                  <p className="font-semibold text-gray-900">
                    {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} ready
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    {selectedFiles.map((file) => <li key={`${file.name}-${file.size}`}>{file.name}</li>)}
                  </ul>
                  <p className="mt-4 text-xs leading-5 text-gray-500">
                    Files are selected locally in this preview. Connect your secure form or storage service before accepting public submissions.
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No files selected.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
