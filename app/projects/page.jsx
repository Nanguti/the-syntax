import MotionWrapper from "@/components/MotionWrapper";
import Reveal from "@/components/Reveal";
import React from "react";

const Projects = () => {
  const items = Array.from({ length: 6 }, (_, index) => index);

  return (
    <>
      <MotionWrapper>
        <main className="bg-white mt-16 sm:mt-20 relative py-20">
          <img
            alt=""
            fetchpriority="high"
            width={2170}
            height={1494}
            decoding="async"
            data-nimg={1}
            className="hidden dark:sm:hidden sm:block absolute top-[-6.25rem] left-1/2 max-w-none w-[67.8125rem] ml-[-46.875rem] pointer-events-none"
            src="/showcase/beams@75.2e4c33d3.jpg"
            style={{ color: "transparent" }}
          />
          <img
            alt=""
            fetchpriority="high"
            width={1318}
            height={1190}
            decoding="async"
            data-nimg={1}
            className="hidden dark:block absolute top-[-5rem] left-1/2 max-w-none w-[41.1875rem] ml-[-40rem] pointer-events-none"
            src="/showcase/beams-index-dark@75.8f02ce8a.jpg"
            style={{ color: "transparent" }}
          />
          <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
            <h1 className="text-sm leading-6 font-semibold text-sky-500">
              Showcase
            </h1>
            <p className="mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white">
              You can build anything with Tailwind CSS.
            </p>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Well not quite <em>anything</em>, like you can't build a spaceship
              with it. But you can definitely build the website for the
              spaceship —{" "}
              <a
                className="font-semibold border-b border-sky-300 text-gray-900 hover:border-b-2 dark:text-white dark:border-sky-400"
                href="/showcase/nasa"
              >
                NASA did
              </a>
              .
            </p>
          </div>
          <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
            {items.map((map) => (
              <Reveal>
                <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
                  <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                    <img
                      alt=""
                      fetchpriority="high"
                      width={672}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      className="absolute inset-0 w-full h-full"
                      src="/showcase/openai.com.86b03227.png"
                      style={{ color: "transparent" }}
                    />
                    <div>
                      <video
                        preload="none"
                        playsInline=""
                        className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                      >
                        <source
                          src="/showcase/openai.com.e55b5afbebfae62d1350968a66653eef24f49dfe.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center mt-6">
                    <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                      <a href="/showcase/openai">
                        <span className="absolute inset-0 rounded-3xl" />
                        OpenAI / ChatGPT
                      </a>
                    </h2>
                    <svg
                      className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
                        stroke="#0EA5E9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
                      Marketing website &amp; chat interface
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </main>
      </MotionWrapper>
    </>
  );
};

export default Projects;
