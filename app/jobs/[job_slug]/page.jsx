import MotionWrapper from "@/components/MotionWrapper";
import axiosClient from "@/utils/axios";
import parse from "html-react-parser";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.job_slug;
  const res = await axiosClient.post(`/job/details`, { slug });
  const title = res.data.jobDetails.title;

  return {
    title: `The Syntax - ${title}`,
  };
}

const JobDetails = async ({ params }) => {
  const slug = params.job_slug;
  const res = await axiosClient.post(`/job/details`, { slug });
  const jobDetails = res.data.jobDetails;
  return (
    <MotionWrapper>
      <div className="bg-white pt-10 pb-20">
        <div className="relative mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="flex px-4 pb-10 lg:px-8">
              <Link
                className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                href="/jobs"
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
          <div className="flex flex-col mb-10 items-center">
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
              {jobDetails.title}
            </h1>
            <nav
              aria-label="Breadcrumbs"
              className="order-first flex space-x-2 text-sm font-semibold"
            >
              <a className="text-slate-500 hover:text-slate-600" href="#">
                Description
              </a>
              <div aria-hidden="true" className="select-none text-slate-400">
                /
              </div>
              <a className="text-slate-500 hover:text-slate-600" href="#">
                Requirements
              </a>
            </nav>
          </div>

          <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8 mb-10 job-details-card">
            <div className="mx-auto max-w-4xl">
              <div>
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    About Company
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {parse(jobDetails.description)}
                  </p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm leading-6 text-gray-900 font-bold">
                        Key Information
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {parse(jobDetails.job_key_info)}
                      </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-bold leading-6 text-gray-900">
                        Job Details
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {parse(jobDetails.job_details)}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-bold leading-6 text-gray-900">
                        Method of application
                      </dt>
                      <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {parse(jobDetails.application_method)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default JobDetails;
