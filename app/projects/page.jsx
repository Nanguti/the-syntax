import MotionWrapper from "@/components/MotionWrapper";
import React from "react";

const Projects = () => {
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
                  src="/showcase/app.lemonsqueezy.com.d4b9142d.png"
                  style={{ color: "transparent" }}
                />
                <div
                  style={{ opacity: 0, transition: "opacity 0.5s linear 0s" }}
                >
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                    __idm_id__={10428422}
                  >
                    <source
                      src="/showcase/app.lemonsqueezy.com.b6810fcdff5bfcc6ae3e6a1396d6b60eb2259048.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/lemon-squeezy">
                    <span className="absolute inset-0 rounded-3xl" />
                    Lemon Squeezy
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
                  SaaS application
                </p>
              </div>
            </li>
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
                  src="/showcase/shopify.com.776c655e.png"
                  style={{ color: "transparent" }}
                />
                <div
                  style={{ opacity: 0, transition: "opacity 0.5s linear 0s" }}
                >
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                    __idm_id__={10428421}
                  >
                    <source
                      src="/showcase/shopify.com.9bf0272db187c142959f8b08cce0a1461f0017f7.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/shopify">
                    <span className="absolute inset-0 rounded-3xl" />
                    Shopify
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
                  Ecommerce platform website
                </p>
              </div>
            </li>
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
                  src="/showcase/wealthfront.com.27ff17b3.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/wealthfront.com.805387a1156b2e67eb260919834f4ab632763d44.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/wealthfront">
                    <span className="absolute inset-0 rounded-3xl" />
                    Wealthfront
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
                  Fintech marketing website
                </p>
              </div>
            </li>
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
                  src="/showcase/top10.netflix.com.49685c79.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/top10.netflix.com.4b14a7cc67c09a962bf1b3e659a4c9c413797295.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/netflix">
                    <span className="absolute inset-0 rounded-3xl" />
                    Netflix Global Top 10
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
                  Microsite
                </p>
              </div>
            </li>
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
                  src="/showcase/loom.com.ba8916fb.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/loom.com.924ddad5c7e9f74998ec405ed06fa8fd47e36f6e.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/loom">
                    <span className="absolute inset-0 rounded-3xl" />
                    Loom
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
                  SaaS marketing website
                </p>
              </div>
            </li>
            <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <img
                  alt=""
                  loading="lazy"
                  width={672}
                  height={494}
                  decoding="async"
                  data-nimg={1}
                  className="absolute inset-0 w-full h-full"
                  src="/showcase/theverge.com.99e6f69e.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/theverge.com.c5112a2ad6ac0bb64738615724037a9527467c97.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/the-verge">
                    <span className="absolute inset-0 rounded-3xl" />
                    The Verge
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
                  News website
                </p>
              </div>
            </li>
            <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <img
                  alt=""
                  loading="lazy"
                  width={672}
                  height={494}
                  decoding="async"
                  data-nimg={1}
                  className="absolute inset-0 w-full h-full"
                  src="/showcase/laracon.net.e060e9a5.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/laracon.net.703e95a9c4ed7b9f43212b0fdb80e5f8dee01aa9.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/laracon">
                    <span className="absolute inset-0 rounded-3xl" />
                    Laracon Online
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
                  Conference website
                </p>
              </div>
            </li>
            <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <img
                  alt=""
                  loading="lazy"
                  width={672}
                  height={494}
                  decoding="async"
                  data-nimg={1}
                  className="absolute inset-0 w-full h-full"
                  src="/showcase/turbo.build.2dd8cd73.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/turbo.build.9eaa14e5d8d591066464c77141d880796f9420f0.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/turbo">
                    <span className="absolute inset-0 rounded-3xl" />
                    Turbo
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
                  Developer tool website
                </p>
              </div>
            </li>
            <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <img
                  alt=""
                  loading="lazy"
                  width={672}
                  height={494}
                  decoding="async"
                  data-nimg={1}
                  className="absolute inset-0 w-full h-full"
                  src="/showcase/candycode.com.2456af4b.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/candycode.com.7359877259c24a3ffaa7f2e8fbb6434a1e0541f8.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/candycode">
                    <span className="absolute inset-0 rounded-3xl" />
                    candycode
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
                  Agency website
                </p>
              </div>
            </li>
            <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <img
                  alt=""
                  loading="lazy"
                  width={672}
                  height={494}
                  decoding="async"
                  data-nimg={1}
                  className="absolute inset-0 w-full h-full"
                  src="/showcase/column.com.3fc3b172.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/column.com.c642048813e19f7c5369523f85282f45a38a4401.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/column">
                    <span className="absolute inset-0 rounded-3xl" />
                    Column
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
                  Fintech marketing website
                </p>
              </div>
            </li>

            <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <img
                  alt=""
                  loading="lazy"
                  width={672}
                  height={494}
                  decoding="async"
                  data-nimg={1}
                  className="absolute inset-0 w-full h-full"
                  src="/showcase/planetscale.com.052414b1.png"
                  style={{ color: "transparent" }}
                />
                <div>
                  <video
                    preload="none"
                    playsInline=""
                    className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                  >
                    <source
                      src="/showcase/planetscale.com.489970edce5fad8684a8109485a85be58863d1ef.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                  <a href="/showcase/planetscale">
                    <span className="absolute inset-0 rounded-3xl" />
                    PlanetScale
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
                  SaaS marketing website
                </p>
              </div>
            </li>
          </ul>
        </main>
      </MotionWrapper>
    </>
  );
};

export default Projects;
