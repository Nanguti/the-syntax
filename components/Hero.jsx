import Link from "next/link";
import Reveal from "./Reveal";

function Hero() {
  return (
    <Reveal>
      <section
        className="header relative  items-center flex h-screen"
        style={{ maxHeight: 860 }}
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-slate-600">
                Developer insights.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Dive into the world of Laravel, Next.js, React.js, Django,
                Vue.js, Nodejs & Express.js, MySQL, DevOps, CI/CD pipelines, Git
                cheatsheets, and Q&A. Your one-stop destination for tech
                tutorials and insights.
              </p>
              <div className="mt-12">
                <Link
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  href="/blog"
                >
                  Get started
                </Link>
                <Link
                  href="/jobs"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Browser jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"
          src="/images/the-syntax-react-logo.png"
          alt="..."
          style={{ maxHeight: 860 }}
        />
      </section>
    </Reveal>
  );
}

export default Hero;
