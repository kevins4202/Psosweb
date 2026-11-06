import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { getArticle, getAuthor } from "../blogData";

export function ArticlePage() {
  const { articleSlug } = useParams();
  const article = getArticle(articleSlug);
  if (!article) return <Navigate to="/blog" replace />;
  const author = getAuthor(article.authorSlug)!;

  return (
    <article className="bg-[#fffdfd] pt-20">
      <header className="relative overflow-hidden border-b border-pink-100 px-4 py-16 md:py-24">
        <div className="absolute right-[-5rem] top-[-5rem] h-80 w-80 rounded-full bg-[var(--matcha-light)] blur-2xl" />
        <div className="container relative mx-auto max-w-4xl">
          <Link to="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 focus-visible:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the blog
          </Link>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[var(--matcha-dark)]">{article.category}</p>
          <h1 className="font-heading text-5xl font-black leading-[1.02] tracking-[-0.035em] text-gray-900 md:text-7xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-600">{article.deck}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-pink-100 pt-6 text-sm text-gray-500">
            <span>
              Written by{" "}
              <Link to={`/authors/${author.slug}`} className="font-bold text-primary underline decoration-pink-200 underline-offset-4 hover:decoration-primary">
                {author.name}
              </Link>
            </span>
            <span>{article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" />{article.readTime}</span>
          </div>
        </div>
      </header>

      <div className="px-4 py-16 md:py-24">
        <div className="container mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_14rem]">
          <div className="max-w-3xl">
            {article.sections.map((section, index) => (
              <section key={section.heading ?? index} className="mb-12">
                {section.heading && <h2 className="mb-5 font-heading text-3xl font-black text-gray-900">{section.heading}</h2>}
                <div className="space-y-6">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[1.08rem] leading-8 text-gray-700">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
            <div className="mt-14 rounded-2xl border border-pink-100 bg-pink-50 p-6 text-sm leading-6 text-gray-600">
              This article is for educational purposes and is not a substitute
              for personalized medical advice. Consult a qualified healthcare
              professional with questions about your skin.
            </div>
          </div>
          <aside aria-label="About the author" className="h-fit border-t-2 border-[var(--matcha-medium)] pt-5 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">About the author</p>
            <h2 className="mt-3 font-heading text-xl font-black text-gray-900">{author.name}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{author.role}</p>
            <Link to={`/authors/${author.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3">
              View credentials <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}
