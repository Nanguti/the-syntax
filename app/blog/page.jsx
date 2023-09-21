import MotionWrapper from "@/components/MotionWrapper";
const Blog = () => {
  return (
    <>
      <MotionWrapper>
        <main className="bg-white max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
          <header className="py-16 sm:text-center py-40">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
              Latest Articles
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              All the latest Tailwind CSS news, straight from the&nbsp;team.
            </p>
            <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
              <h2 className="sr-only">Sign up for our newsletter</h2>
              <form
                action="https://app.convertkit.com/forms/3181837/subscriptions"
                method="post"
                className="flex flex-wrap -mx-2"
              >
                <div className="px-2 grow-[9999] basis-64 mt-3">
                  <div className="group relative">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
                    >
                      <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
                      <path d="m6 7 6 5 6-5" />
                    </svg>
                    <input
                      name="search_query"
                      type="text"
                      required=""
                      aria-label="Email address"
                      className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
                      placeholder="Enter term to search"
                    />
                  </div>
                </div>
                <div className="px-2 grow flex mt-3">
                  <button
                    type="submit"
                    className="bg-sky-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700"
                  >
                    Search
                  </button>
                </div>
              </form>
            </section>
          </header>
          <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
            <div className="space-y-16">
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Meet Studio: Our beautiful new agency site template
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      We just released{" "}
                      <a href="https://tailwindui.com/templates/studio">
                        Studio
                      </a>{" "}
                      — a beautiful new agency website template we’ve been
                      working on for the last couple of months for Tailwind UI.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2023-08-07T10:30:00.000Z">
                        August 7, 2023
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2023-08-07-meet-studio-our-new-agency-template"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Meet Studio: Our beautiful new agency site template
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Tailwind Connect 2023: Recap of our first in-person event
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Last month, over 200 people got together in my hometown of
                      Cambridge, Ontario to hang out, talk shop, and get a peek
                      behind the curtain at some of the new stuff we’ve been
                      working on.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2023-07-19T17:00:00.000Z">
                        July 19, 2023
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2023-07-18-tailwind-connect-2023-recap"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Tailwind Connect 2023: Recap of our first in-person
                      event
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    New changelog template + the biggest Tailwind UI update ever
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Over the last four months we’ve probably done more work on
                      Tailwind UI than we ever have, and having finally wrapped
                      up what we set out to achieve I’m excited to lay it all
                      out for you.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2023-04-24T14:00:00.000Z">
                        April 24, 2023
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2023-04-24-new-changelog-template-and-the-biggest-tailwind-ui-update-ever"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , New changelog template + the biggest Tailwind UI update
                      ever
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Tailwind CSS v3.3: Extended color palette, ESM/TS support,
                    logical properties, and more
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Tailwind CSS v3.3 is here — bringing a bunch of new
                      features people have been asking for forever, and a bunch
                      of new stuff you didn’t even know you wanted.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2023-03-28T14:30:00.000Z">
                        March 28, 2023
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-v3-3"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Tailwind CSS v3.3: Extended color palette, ESM/TS
                      support, logical properties, and more
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Protocol: A beautiful starting point for your next API
                    documentation site
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      It’s been months in the making but I’m excited to finally
                      release our next website template —{" "}
                      <a href="https://tailwindui.com/templates/protocol">
                        Protocol
                      </a>
                      , a beautiful starter kit for building amazing API
                      reference websites.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-12-15T15:00:00.000Z">
                        December 15, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2022-12-15-protocol-api-documentation-template"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Protocol: A beautiful starting point for your next API
                      documentation site
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Tailwind CSS v3.2: Dynamic breakpoints, multi-config, and
                    container queries, oh my!
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Well it’s that time again! The time where we quickly go
                      from{" "}
                      <em>
                        “I really have no idea what we could even add to a new
                        Tailwind release”
                      </em>{" "}
                      to{" "}
                      <em>
                        “wow, well this is actually a ridiculous amount of new
                        stuff — we better tag a release before things get
                        completely out of hand”
                      </em>
                      .
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-10-19T15:30:00.000Z">
                        October 19, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-v3-2"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Tailwind CSS v3.2: Dynamic breakpoints, multi-config,
                      and container queries, oh my!
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    We built you a new personal website + Heroicons v2.0,
                    Headless UI v1.7, and more
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      We just released a stunning new personal website template
                      for Tailwind UI, redesigned Heroicons from scratch, tagged
                      a new version of Headless UI with some exciting new
                      features, and more.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-09-09T16:24:00.000Z">
                        September 9, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2022-09-09-new-personal-website-heroicons-2-headless-ui-v17"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , We built you a new personal website + Heroicons v2.0,
                      Headless UI v1.7, and more
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    New Tailwind CSS + Framer Motion template and Tailwind Jobs
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      All about the brand new Tailwind UI template we just
                      shipped, the official Tailwind CSS job board, and a bunch
                      of new projects coming out in the next few weeks.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-08-19T12:45:00.000Z">
                        August 19, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2022-08-17-tailwind-framer-motion-template-and-tailwind-jobs"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , New Tailwind CSS + Framer Motion template and Tailwind
                      Jobs
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Tailwind UI: Site templates and all-access
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      When I was early in my programming career, I loved
                      following <a href="https://thoughtbot.com/">thoughtbot</a>
                      . They were always writing interesting programming
                      articles, producing fantastic screencasts, and publishing
                      incredible books. I could tell they really cared about
                      their craft and it inspired the hell out of me.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-06-23T19:40:00.000Z">
                        June 23, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2022-06-23-tailwind-templates-and-all-access"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Tailwind UI: Site templates and all-access
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Tailwind CSS v3.1: You wanna get nuts? Come on, let's get
                    nuts!
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      It’s been about six months since we released{" "}
                      <a href="/blog/tailwindcss-v3">Tailwind CSS v3.0</a>, and
                      even though we’ve been collecting a lot of little
                      improvements in the codebase since then, we just didn’t
                      have <em>that-one-feature</em> yet that makes you say{" "}
                      <em>“okay, it’s release-cuttin’ time”</em>.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-06-07T15:00:00.000Z">
                        June 7, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-v3-1"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Tailwind CSS v3.1: You wanna get nuts? Come on, let's
                      get nuts!
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Headless UI v1.6, Tailwind UI team management, Tailwind Play
                    improvements, and more
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      It’s been a while since I’ve written about what we’ve been
                      working on so I have a lot to share! Too much honestly —
                      my main motivator for even getting this update out is that
                      we’ve got even more stuff coming next week, and I feel
                      like I’m not allowed to share that stuff until I share all
                      of the stuff we’ve already shipped.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-05-27T15:00:00.000Z">
                        May 27, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/2022-05-23-headless-ui-v1-6-tailwind-ui-team-management"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Headless UI v1.6, Tailwind UI team management, Tailwind
                      Play improvements, and more
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Headless UI v1.5: The One With Comboboxes
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      We just released Headless UI v1.5, which includes a brand
                      new <code>Combobox</code> component. Comboboxes are like
                      select controls but with autocomplete/typeahead
                      functionality, and are a great alternative to a regular
                      select when you’re working with large datasets and want to
                      quickly filter for the right option.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-02-24T12:00:00.000Z">
                        February 24, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/headless-ui-v1-5"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Headless UI v1.5: The One With Comboboxes
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
              <article className="relative group">
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    Automatic Class Sorting with Prettier
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      People have been talking about the best way to sort your
                      utility classes in Tailwind projects for{" "}
                      <a href="https://github.com/tailwindlabs/discuss/issues/97">
                        at least four years
                      </a>
                      . Today we’re excited to announce that you can finally
                      stop worrying about it with the release of our official{" "}
                      <a href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss">
                        Prettier plugin for Tailwind CSS
                      </a>
                      .
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-01-24T19:00:00.000Z">
                        January 24, 2022
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/automatic-class-sorting-with-prettier"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Automatic Class Sorting with Prettier
                    </span>
                  </span>
                  <svg
                    className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </main>
      </MotionWrapper>
    </>
  );
};

export default Blog;
