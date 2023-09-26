"use client";
import MotionWrapper from "@/components/MotionWrapper";
import axiosClient from "@/utils/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

const Blog = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [links, setLinks] = useState([]);
  const [metadata, setMetadata] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const response = await axiosClient.get("/posts/list");
    setPosts(response.data.posts.data);
    setLinks(response.data.posts.links);
    setMetadata(response.data.posts);
  };

  const handlePostDetail = async (slug) => {
    router.push(`/blog/${slug}`);
  };

  const handlePagination = async (url) => {
    const response = await axiosClient.get(`${url}`);
    setPosts(response.data.posts.data);
    setLinks(response.data.posts.links);
    setMetadata(response.data.posts);
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MotionWrapper>
        <main className="bg-white max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
          <header className="sm:text-center py-40">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
              Latest Blog Articles
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              The latest developer insights.
            </p>
            <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
              <h2 className="sr-only">Sign up for our newsletter</h2>
              <form action="#" method="post" className="flex flex-wrap -mx-2">
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
              {posts.map((post) => (
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
                      {post.title}
                    </h3>
                    <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                      <p>{post.summary}</p>
                    </div>
                    <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                      <dt className="sr-only">Date</dt>
                      <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                        <time dateTime={post.created_at.substring(0, 10)}>
                          {post.created_at.substring(0, 10)}
                        </time>
                      </dd>
                    </dl>
                  </div>
                  <a
                    className="flex items-center text-sm text-sky-500 font-medium cursor-pointer"
                    onClick={() => handlePostDetail(post.slug)}
                  >
                    <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative">Read more</span>
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
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {metadata.current_page * 20 + 1 - 20}
                  </span>{" "}
                  to <span className="font-medium">{metadata.to}</span> of{" "}
                  <span className="font-medium">{metadata.total}</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  {links.map((link) => (
                    <a
                      key={link.label}
                      onClick={() => handlePagination(link.url)}
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-sky-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      {parse(link.label)}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </main>
      </MotionWrapper>
    </>
  );
};

export default Blog;
