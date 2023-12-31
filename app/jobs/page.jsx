"use client";
import Jobcard from "@/components/Jobcard";
import MotionWrapper from "@/components/MotionWrapper";
import SearchBar from "@/components/SearchBar";
import axiosClient from "@/utils/axios";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [links, setLinks] = useState([]);
  const [metadata, setMetadata] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    setLoading(true);
    const response = await axiosClient.get("/jobs/list");
    setJobs(response.data.jobs.data);
    setLinks(response.data.jobs.links);
    setMetadata(response.data.jobs);
    setLoading(false);
  };

  const handlePagination = async (url) => {
    const response = await axiosClient.get(`${url}`);
    setJobs(response.data.jobs.data);
    setLinks(response.data.jobs.links);
    setMetadata(response.data.jobs);
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MotionWrapper>
        <main className="bg-white max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
          <header className="sm:text-center pt-40 pb-20">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
              Discover Your Dream Job in Kenya
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              Your Ultimate Destination for Premier Employment Opportunities!
            </p>
            <SearchBar />
          </header>
          <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))] min-h-300 ">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
            {loading && <div>Loading ...</div>}
            {!loading && (
              <div className="space-y-16">
                {jobs.map((job) => (
                  <Jobcard job={job} key={job.id} />
                ))}
              </div>
            )}
          </div>
          {!loading && (
            <>
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
                      <span className="font-medium">{metadata.total}</span>{" "}
                      results
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
            </>
          )}
        </main>
      </MotionWrapper>
    </>
  );
};

export default JobListings;
