import Jobcard from "@/components/Jobcard";
import MotionWrapper from "@/components/MotionWrapper";
import axiosClient from "@/utils/axios";
import { Joan } from "next/font/google";
export const metadata = {
  title: "Jobs in Kenya | Find Employment Opportunities - The Syntax",
  description:
    "Welcome to The Syntax, the top destination for job seekers in Kenya. Discover exciting job opportunities across various industries. Start your journey today!",
};
const JobListings = async () => {
  const response = await axiosClient.get("/jobs/list");
  const jobs = response.data.jobs.data;

  return (
    <>
      <MotionWrapper>
        <main className="bg-white max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
          <header className="sm:text-center py-40">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
              Discover Your Dream Job in Kenya
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              Your Ultimate Destination for Premier Employment Opportunities!
            </p>
            <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
              {/* <h2 className="sr-only">Sign up for our newsletter</h2> */}
              <form action="#" method="post" className="flex flex-wrap -mx-2">
                <div className="px-2 grow-[9999] basis-64 mt-3">
                  <div className="group relative">
                    <input
                      name="search_query"
                      type="text"
                      required=""
                      aria-label="Search ..."
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
              {jobs.map((job) => (
                <Jobcard job={job} key={job.id} />
              ))}
            </div>
          </div>
        </main>
      </MotionWrapper>
    </>
  );
};

export default JobListings;
