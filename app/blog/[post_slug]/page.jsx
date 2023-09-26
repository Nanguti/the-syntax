import MotionWrapper from "@/components/MotionWrapper";
import axiosClient from "@/utils/axios";
import Link from "next/link";
import parse from "html-react-parser";
const BlogDetails = async ({ params }) => {
  const slug = params.post_slug;
  const res = await axiosClient.post(`/post/detail/`, { slug });
  const postDetails = res.data.postDetail;
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
                  {postDetails.title}
                </h1>
                <div className="text-sm leading-6">
                  <dl>
                    <dt className="sr-only">Date</dt>
                    <dd className="absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400">
                      <time dateTime="2023-08-07T10:30:00.000Z">
                        {postDetails.created_at.substring(0, 10)}
                      </time>
                    </dd>
                  </dl>
                </div>

                <div className="mt-12 prose prose-slate dark:prose-dark">
                  {parse(postDetails.content)}
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
