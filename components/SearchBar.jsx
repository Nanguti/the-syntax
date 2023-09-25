"use client";
import axiosClient from "@/utils/axios";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getSuggestions();
  }, [inputValue]);

  const getSuggestions = async () => {
    const response = await axiosClient.post(`/search/job?query=${inputValue}`);
    setSuggestions(response.data.suggestions);
  };

  const handleJobDetail = async (slug) => {
    router.push(`/jobs/${slug}`);
  };

  return (
    <>
      <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
        <form action="#" method="post" className="flex flex-wrap -mx-2">
          <div className="px-2 grow-[9999] basis-64 mt-20">
            <div className="group relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                aria-label="Search ..."
                className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
                placeholder="Search. E.g Software Developer ..."
              />
            </div>
          </div>
        </form>
      </section>
      <ul
        role="list"
        className="mx-auto max-w-2xl px-12 divide-y divide-gray-100"
      >
        {suggestions.map((suggestion) => (
          <li key={suggestion.id} className="py-5">
            <div
              onClick={() => handleJobDetail(suggestion.slug)}
              className="flex items-start cursor-pointer "
            >
              <div className="min-w-0 flex-auto">
                <p className="text-sm text-left font-semibold leading-6 text-gray-900">
                  {parse(suggestion.label)}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {suggestion.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;
