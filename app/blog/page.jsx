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
                    Effortless Typography, Even in Dark Mode
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Today we’re announcing the next version of the{" "}
                      <a href="/docs/typography-plugin">
                        Tailwind CSS Typography plugin
                      </a>
                      , which brings easy dark mode support, a brand new
                      customization API, and the <code>not-prose</code> class I
                      wasn’t sure we’d ever figure out how to support.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-12-17T18:50:00.000Z">
                        December 17, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-typography-v0-5"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Effortless Typography, Even in Dark Mode
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
                    Standalone CLI: Use Tailwind CSS without Node.js
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Tailwind CSS is written in JavaScript and distributed as
                      an npm package, which means you’ve always had to have
                      Node.js and npm installed to use it.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-12-16T16:00:00.000Z">
                        December 16, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/standalone-cli"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Standalone CLI: Use Tailwind CSS without Node.js
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
                    Tailwind CSS v3.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Tailwind CSS v3.0 is here — bringing incredible
                      performance gains, huge workflow improvements, and a
                      seriously ridiculous number of new features.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-12-09T16:00:00.000Z">
                        December 9, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-v3"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v3.0</span>
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
                    Introducing Tailwind UI Ecommerce
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Almost 6 months in the making, we finally released{" "}
                      <a href="https://tailwindui.com/#product-ecommerce">
                        Tailwind UI Ecommerce
                      </a>{" "}
                      — the first all-new component kit for Tailwind UI since
                      the initial launch back in February 2020.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-08-11T19:30:00.000Z">
                        August 11, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwind-ui-ecommerce"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Introducing Tailwind UI Ecommerce
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
                    Headless UI v1.4: The One With Tabs
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      We just released Headless UI v1.4, which includes a brand
                      new <code>Tab</code> component, and new APIs for manually
                      closing <code>Popover</code> and <code>Disclosure</code>{" "}
                      components more easily.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-07-29T12:00:00.000Z">
                        July 29, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/headless-ui-v1-4"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Headless UI v1.4: The One With Tabs
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
                    Tailwind CSS v2.2
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Well I can’t say we were really planning on it but over
                      the last few weeks we’ve been having a ton of fun dumping
                      new and exciting features into Tailwind and now feels like
                      the right time to cut a release, so here it is — Tailwind
                      CSS v2.2!
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-06-17T14:00:00.000Z">
                        June 17, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-2-2"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v2.2</span>
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
                    Tailwind UI: Now with React + Vue support
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Last year we released{" "}
                      <a href="https://tailwindui.com">Tailwind UI</a> — a huge
                      directory of professionally designed UI examples built
                      with Tailwind CSS. Up until now, all of the examples in
                      Tailwind UI have been pure HTML which is sort of the
                      lowest common denominator for all web developers, and
                      makes it possible to adapt them to any templating language
                      or JavaScript framework.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-04-14T16:01:00.000Z">
                        April 14, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwind-ui-now-with-react-and-vue-support"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Tailwind UI: Now with React + Vue support
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
                    Headless UI v1.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Last fall we announced{" "}
                      <a href="https://blog.tailwindcss.com/headless-ui-unstyled-accessible-ui-components">
                        Headless UI
                      </a>
                      , a library of completely unstyled, fully accessible UI
                      components, designed to pair perfectly with Tailwind CSS.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-04-14T16:00:00.000Z">
                        April 14, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/headless-ui-v1"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more<span className="sr-only">, Headless UI v1.0</span>
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
                    Tailwind CSS v2.1
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      The first new feature update since Tailwind CSS v2.0 is
                      here and loaded with lots of cool stuff! We’ve merged the
                      new JIT engine to core, added first-class support for
                      composable CSS filters, added blending mode utilities, and
                      a bunch more.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-04-05T19:00:00.000Z">
                        April 5, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-2-1"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v2.1</span>
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
                    Heroicons v1.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Just over a year ago we released the very first version of{" "}
                      <a href="https://heroicons.com">Heroicons</a>, which is a
                      set of beautiful UI icons we designed alongside Tailwind
                      UI. Since then we’ve added tons of new icons, and designed
                      and launched a dedicated web experience.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-03-29T19:00:00.000Z">
                        March 29, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/heroicons-v1"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more<span className="sr-only">, Heroicons v1.0</span>
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
                    Just-In-Time: The Next Generation of Tailwind CSS
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      One of the hardest constraints we’ve had to deal with as
                      we’ve improved Tailwind CSS over the years is the
                      generated file size in development. With enough
                      customizations to your config file, the generated CSS can
                      reach 10mb or more, and there’s only so much CSS that
                      build tools and even the browser itself will comfortably
                      tolerate.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-03-15T16:30:00.000Z">
                        March 15, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/just-in-time-the-next-generation-of-tailwind-css"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Just-In-Time: The Next Generation of Tailwind CSS
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
                    Welcoming James McDonald to Tailwind Labs
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Many years ago I got a message from{" "}
                      <a href="https://twitter.com/steveschoger">Steve</a> that
                      said something like{" "}
                      <em>
                        “Have I ever shared this guy’s Dribbble profile with you
                        before? Been following him forever, some of my absolute
                        favorite work I’ve ever found”
                      </em>
                      . That person was{" "}
                      <a href="https://dribbble.com/james">James McDonald</a>,
                      and today we’re totally over the moon to share that James
                      is joining our team full-time.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-03-08T19:00:00.0Z">
                        March 8, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/welcoming-james-mcdonald-to-tailwind-labs"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Welcoming James McDonald to Tailwind Labs
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
                    "Tailwind CSS: From Zero to Production" on YouTube
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Today we’re excited to release{" "}
                      <a href="https://www.youtube.com/watch?v=elgqxmdVms8&list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=1">
                        Tailwind CSS: From Zero to Production
                      </a>
                      , a new screencast series that teaches you everything you
                      need to know to get up and running with Tailwind CSS v2.0
                      from scratch.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-02-16T16:05:00.000Z">
                        February 16, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-from-zero-to-production"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , "Tailwind CSS: From Zero to Production" on YouTube
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
                    Welcoming David Luhr to Tailwind Labs
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      We started working with{" "}
                      <a href="https://twitter.com/david_luhr">David Luhr</a>{" "}
                      last summer on a project-by-project basis to help us
                      develop a Figma version of{" "}
                      <a href="https://tailwindui.com">Tailwind UI</a>{" "}
                      <em>(almost ready!)</em>, as well as to leverage his
                      accessibility expertise when building Tailwind UI
                      templates, ensuring we were following best practices and
                      delivering markup that would work for everyone, no matter
                      what tools they use to browse the web.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-02-01T13:35:00.0Z">
                        February 1, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/welcoming-david-luhr-to-tailwind-labs"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Welcoming David Luhr to Tailwind Labs
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
                    Multi-line truncation with @tailwindcss/line-clamp
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Imagine you’re implementing a beautiful design you or
                      someone on your team carefully crafted in Figma. You’ve
                      nailed all the different layouts at each breakpoint,
                      perfected the whitespace and typography, and the
                      photography you’re using is really bringing the design to
                      life.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2021-01-24T20:00:00Z">
                        January 24, 2021
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/multi-line-truncation-with-tailwindcss-line-clamp"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Multi-line truncation with @tailwindcss/line-clamp
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
                    Tailwind CSS v2.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Almost exactly 18 months ago we released Tailwind CSS
                      v1.0, which signalled a commitment to stability while
                      continuing to push the boundaries with exciting new
                      features in every minor release.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-11-18T17:45:00.000Z">
                        November 18, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-v2"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v2.0</span>
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
                    Tailwind CSS v1.9.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      We just released Tailwind CSS v1.9 which adds support for
                      configuration presets, useful new CSS grid utilities,
                      extended border radius, rotate, and skew scales, helpful
                      accessibility improvements, and more!
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-10-13T18:30:00.000Z">
                        October 13, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-1-9"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v1.9.0</span>
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
                    Introducing Tailwind Play
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      To get the most out of Tailwind, you need a build step.
                      It’s the only way to be able to customize your{" "}
                      <a href="/docs/configuration">
                        <code>tailwind.config.js</code>
                      </a>{" "}
                      file, extract components with{" "}
                      <a href="/docs/functions-and-directives#apply">
                        <code>@apply</code>
                      </a>
                      , or include <a href="/docs/plugins">plugins</a>.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-10-07T13:00:00.000Z">
                        October 7, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/introducing-tailwind-play"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Introducing Tailwind Play</span>
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
                    Headless UI: Unstyled, Accessible UI Components
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      One of the biggest pain points when building modern web
                      applications is building custom components like select
                      menus, dropdowns, toggles, modals, tabs, radio groups —
                      components that are pretty similar from project to
                      project, but never quite the <em>same</em>.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-10-06T18:30:00.000Z">
                        October 6, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/headless-ui-unstyled-accessible-ui-components"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Headless UI: Unstyled, Accessible UI Components
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
                    "What's new in Tailwind CSS?" on YouTube
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      A lot of cool stuff has been added to Tailwind since the
                      last time we published any screencasts, so we thought it
                      would be a great idea to record a little series that
                      covers all of the new additions.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-09-23T18:30:00.000Z">
                        September 23, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/whats-new-in-tailwindcss-on-youtube"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , "What's new in Tailwind CSS?" on YouTube
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
                    Tailwind CSS v1.8.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Tailwind CSS v1.8 is now available with a handful of new
                      utilities, a couple new features, and an exciting new
                      experiment!
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-09-04T20:15:00.000Z">
                        September 4, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-1-8"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v1.8.0</span>
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
                    Utility-Friendly Transitions with @tailwindui/react
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Back in February we released{" "}
                      <a href="https://tailwindui.com">Tailwind UI</a>, a
                      directory of HTML component examples designed for you to
                      copy and paste into your Tailwind projects as a starting
                      point for your own designs.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-08-27T18:30:00.000Z">
                        August 27, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/utility-friendly-transitions-with-tailwindui-react"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Utility-Friendly Transitions with @tailwindui/react
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
                    Introducing Heroicons.com
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      A few months back we quietly released{" "}
                      <a href="https://www.heroicons.com/">Heroicons</a>, a set
                      of free SVG icons we initially designed to support the
                      components in Tailwind UI. Today we’re launching the
                      official{" "}
                      <a href="https://www.heroicons.com/">
                        Heroicons web experience
                      </a>
                      , which makes it easier than ever to search for icons and
                      quickly copy them to your clipboard as Tailwind-ready HTML
                      or JSX.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-08-25T13:00:00.000Z">
                        August 25, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/introducing-heroicons"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Introducing Heroicons.com</span>
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
                    Tailwind CSS v1.7.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Another new Tailwind release is here! This time with
                      support for gradients, background-clip, experimental
                      support for using <code>@apply</code> with variant
                      utilities, and tons more. Let’s dig in!
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-08-18T19:15:00.000Z">
                        August 18, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-1-7"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v1.7.0</span>
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
                    From Nine Hundred to One: How We Hired Robin Malfait
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Back in May we published{" "}
                      <a href="https://jobs.tailwindui.com/full-stack-developer">
                        our first job posting
                      </a>{" "}
                      to help us find a full-stack developer to join our team.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-08-10T13:30:00.000Z">
                        August 10, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/from-900-to-1-how-we-hired-robin-malfait"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , From Nine Hundred to One: How We Hired Robin Malfait
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
                    Tailwind CSS v1.6.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      It’s like Tailwind CSS v1.5 except now there’s animation
                      support, overscroll utilities, and more!
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-07-28T16:58:33.714Z">
                        July 28, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-1-6"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v1.6.0</span>
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
                    Simon Vrachliotis Joins Tailwind Labs
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Today we are super excited to share that{" "}
                      <a href="https://twitter.com/simonswiss">
                        Simon Vrachliotis
                      </a>{" "}
                      has joined the development team at Tailwind Labs! (We just
                      finalized that new business name by the way, pretty cool
                      right?)
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-07-19T19:00:00.000Z">
                        July 19, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/simon-vrachliotis-joins-tailwind-labs"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Simon Vrachliotis Joins Tailwind Labs
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
                    Welcoming Brad Cornes to the Team
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Back in June,{" "}
                      <a href="https://twitter.com/bradlc">Brad Cornes</a>{" "}
                      joined our company as our very first team member. We
                      didn’t have a blog to announce it back then, but better
                      late than never right?
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-07-18T15:43:02.988Z">
                        July 18, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/welcoming-brad-cornes-to-the-tailwind-team"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Welcoming Brad Cornes to the Team
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
                    Tailwind CSS v1.5.0
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      I was hoping to save v1.5.0 for something <em>really</em>{" "}
                      exciting but we needed a new feature to support the new{" "}
                      <a href="https://github.com/tailwindcss/typography">
                        <code>@tailwindcss/typography</code>
                      </a>{" "}
                      plugin so h*ck it, we’re dropping some new stuff on you
                      early.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-07-15T18:55:18.391Z">
                        July 15, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-1-5"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">, Tailwind CSS v1.5.0</span>
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
                    Introducing Tailwind CSS Typography
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Until now, trying to style an article, document, or blog
                      post with Tailwind has been a tedious task that required a
                      keen eye for typography and a lot of complex custom CSS.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-07-13T16:35:02.037Z">
                        July 13, 2020
                      </time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/tailwindcss-typography"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Introducing Tailwind CSS Typography
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
                    Building the Tailwind Blog with Next.js
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      One of the things we believe as a team is that everything
                      we make should be{" "}
                      <a href="https://public.3.basecamp.com/p/toAcDMxu8Fvq2yMfd2azTuaV">
                        sealed with a blog post
                      </a>
                      . Forcing ourselves to write up a short announcement post
                      for every project we work on acts as a built-in quality
                      check, making sure that we never call a project “done”
                      until we feel comfortable telling the world it’s out
                      there.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-06-30T18:05:31Z">June 30, 2020</time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/building-the-tailwind-blog"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Building the Tailwind Blog with Next.js
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
                    Introducing linting for Tailwind CSS IntelliSense
                  </h3>
                  <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>
                      Today we’re releasing a new version of the{" "}
                      <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
                        Tailwind CSS IntelliSense extension for Visual Studio
                        Code
                      </a>{" "}
                      that adds Tailwind-specific linting to both your CSS and
                      your markup.
                    </p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2020-06-23T18:52:03Z">June 23, 2020</time>
                    </dd>
                  </dl>
                </div>
                <a
                  className="flex items-center text-sm text-sky-500 font-medium"
                  href="/blog/introducing-linting-for-tailwindcss-intellisense"
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative">
                    Read more
                    <span className="sr-only">
                      , Introducing linting for Tailwind CSS IntelliSense
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
