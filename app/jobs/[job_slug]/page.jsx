import MotionWrapper from "@/components/MotionWrapper";
import axiosClient from "@/utils/axios";
import parse from "html-react-parser";

const JobDetails = async ({ params }) => {
  const slug = params.job_slug;
  const res = await axiosClient.post(`/job/details`, { slug });
  const jobDetails = res.data.jobDetails;
  return (
    <MotionWrapper>
      <div className="bg-white py-20">
        <div className="relative mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mb-10 items-center">
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              {jobDetails.title}
            </h1>
            <nav
              aria-label="Breadcrumbs"
              className="order-first flex space-x-2 text-sm font-semibold"
            >
              <a
                className="text-slate-500 hover:text-slate-600"
                href="/components#product-application-ui"
              >
                Application UI
              </a>
              <div aria-hidden="true" className="select-none text-slate-400">
                /
              </div>
              <a
                className="text-slate-500 hover:text-slate-600"
                href="/components#product-application-ui-data-display"
              >
                Data Display
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
