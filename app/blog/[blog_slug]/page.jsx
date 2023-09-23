import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
const BlogDetails = () => {
  return (
    <MotionWrapper>
      <div className="overflow-hidden py-20 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="flex px-4 pt-8 pb-10 lg:px-8">
            <Link
              className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              href="/blog"
            >
              <svg
                viewBox="0 -9 3 24"
                className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300"
              >
                <path
                  d="M3 0L0 3L3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Go back
            </Link>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <main>
              <article className="relative pt-10">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">
                  Meet Studio: Our beautiful new agency site&nbsp;template
                </h1>
                <div className="text-sm leading-6">
                  <dl>
                    <dt className="sr-only">Date</dt>
                    <dd className="absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400">
                      <time dateTime="2023-08-07T10:30:00.000Z">
                        Monday, August 7, 2023
                      </time>
                    </dd>
                  </dl>
                </div>
                <div className="mt-6">
                  <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                      <img
                        src="/blog/adamwathan.8adb7a70.jpg"
                        alt=""
                        className="mr-3 w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800"
                        decoding="async"
                      />
                      <div className="text-sm leading-4">
                        <div className="text-slate-900 dark:text-slate-200">
                          Adam Wathan
                        </div>
                        <div className="mt-1">
                          <a
                            href="https://twitter.com/adamwathan"
                            className="text-sky-500 hover:text-sky-600 dark:text-sky-400"
                          >
                            @adamwathan
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 prose prose-slate dark:prose-dark">
                  <p>
                    We just released{" "}
                    <a href="https://tailwindui.com/templates/studio">Studio</a>{" "}
                    — a beautiful new agency website template we’ve been working
                    on for the last couple of months for Tailwind UI.
                  </p>
                  <a href="https://tailwindui.com/templates/studio">
                    <div className="relative not-prose [a:not(:first-child)>&]:mt-12 [a:not(:last-child)>&]:mb-12 my-12 first:mt-0 last:mb-0 rounded-2xl overflow-hidden [figure>&]:my-0">
                      <img
                        src="/blog/template.37676ea1.png"
                        alt="Learn about the Studio template"
                        decoding="async"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10" />
                    </div>
                  </a>
                  <p>
                    We built it with Next.js, MDX, and of course Tailwind CSS,
                    and it’s the first template we’ve published using the new
                    Next.js <a href="https://nextjs.org/docs/app">App Router</a>
                    .
                  </p>
                  <p>
                    Designing an agency template is an interesting project,
                    because creative agencies commonly use their own website to
                    show off some really flashy, bespoke ideas, and using a
                    template just kind of feels strange when the goal is to show
                    what your own company is capable of.
                  </p>
                  <p>
                    So we tried to approach this one with two goals in mind to
                    actually make it useful to people:
                  </p>
                  <ol role="list">
                    <li>
                      <strong>
                        Teach people how to do some of the cool stuff you see on
                        flash agency sites
                      </strong>{" "}
                      — I’ve always believed our templates are just as (if not
                      more) valuable as an educational resource than as simply
                      templates, so we wanted to use this template as an
                      opportunity to show off how we’d build a lot of the cool
                      interactive and animated details you see on these sorts of
                      sites.
                    </li>
                    <li>
                      <strong>
                        Design it for agencies that don’t sell design
                      </strong>{" "}
                      — there are a lot of agencies out there who just focus on
                      engineering work, and a lot of the time those companies
                      struggle to stand out design-wise. We tried to design this
                      template in a way that it didn’t depend on tons of
                      screenshots of design work and stuff to look good, so that
                      an agency that focuses on code could use it as a starting
                      point for their own site.
                    </li>
                  </ol>
                  <p>
                    I think what we came up with nailed these two goals and I’m
                    really proud of how it all turned out.
                  </p>
                  <p>
                    Check out the{" "}
                    <a href="https://studio.tailwindui.com/">live preview</a> as
                    always for the full experience — there are tons of cool
                    details in this one that you have to see in the browser to
                    really appreciate.
                  </p>
                  <hr />
                  <h2
                    className="flex whitespace-pre-wrap not-prose"
                    id="delightfully-animated"
                  >
                    <a
                      className="group relative border-none lg:-ml-2 lg:pl-2"
                      href="#delightfully-animated"
                    >
                      <div className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
                        ​
                        <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
                          <svg
                            width={12}
                            height={12}
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      Delightfully animated
                    </a>
                  </h2>
                  <p>
                    One of the unspoken rules of agency websites is that they’ve
                    gotta be flashy. We didn’t go full replace-the-mouse-cursor
                    or render-the-entire-site-with-WebGL but we did look for
                    opportunities to tastefully introduce animations and
                    interactivity wherever we could.
                  </p>
                  <p>
                    For instance, we built a light declarative component-based
                    API around some features of{" "}
                    <a href="https://www.framer.com/motion/">Framer Motion</a>{" "}
                    to make it easy to do scroll-triggered entrance animations:
                  </p>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default BlogDetails;
