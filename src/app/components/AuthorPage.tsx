import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { articles, getAuthor } from "../blogData";

export function AuthorPage() {
  const { authorSlug } = useParams();
  const author = getAuthor(authorSlug);
  if (!author) return <Navigate to="/blog" replace />;
  const authoredArticles = articles.filter((article) => article.authorSlug === author.slug);

  return (
    <div className="bg-[#fffdfd] pt-20">
      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-pink-100/70 blur-3xl" />
        <div className="container relative mx-auto max-w-5xl">
          <Link to="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the blog
          </Link>
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr]">
            <div>
              <div className="flex aspect-square items-center justify-center rounded-[3rem_1rem_3rem_1rem] bg-[var(--matcha-light)]">
                <span className="font-heading text-7xl font-black text-[var(--matcha-dark)]" aria-hidden="true">
                  {author.name.split(" ").map((name) => name[0]).join("")}
                </span>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[var(--matcha-dark)]">Contributor profile</p>
              <h1 className="font-heading text-5xl font-black tracking-[-0.035em] text-gray-900 md:text-7xl">{author.name}</h1>
              <p className="mt-4 text-xl font-semibold text-primary">{author.role}</p>
              <p className="mt-8 text-lg leading-8 text-gray-700">{author.bio}</p>
              <div className="mt-10 grid gap-8 border-t border-pink-100 pt-8 md:grid-cols-2">
                <div>
                  <h2 className="flex items-center gap-2 font-heading text-xl font-black text-gray-900">
                    <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" /> Credentials
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    {author.credentials.map((credential) => (
                      <li key={credential} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--matcha-medium)]" />{credential}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="flex items-center gap-2 font-heading text-xl font-black text-gray-900">
                    <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" /> Area of focus
                  </h2>
                  <p className="mt-4 leading-7 text-gray-600">{author.focus}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="author-articles" className="bg-[var(--pink-light)]/60 px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 id="author-articles" className="font-heading text-3xl font-black text-gray-900">Articles by {author.name}</h2>
          <div className="mt-8 space-y-4">
            {authoredArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group flex items-center justify-between gap-6 rounded-2xl border border-pink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--matcha-dark)]">{article.category}</p>
                  <h3 className="mt-2 font-heading text-xl font-black text-gray-900 group-hover:text-primary">{article.title}</h3>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
