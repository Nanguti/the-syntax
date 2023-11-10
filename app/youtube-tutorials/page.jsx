"use client";
import axiosClient from "@/utils/axios";
import MotionWrapper from "@/components/MotionWrapper";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { TabsDefault } from "@/components/TabsDefault";
const YoutubeTutorials = async () => {
  const tutorials = await axiosClient.get(`/youtube-tutorials`);
  return (
    <MotionWrapper>
      <header className="sm:text-center pt-20">
        <p className="text-lg text-slate-700 dark:text-slate-400">
          <TabsDefault />
        </p>
      </header>
      <div className="p-14">
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/3 px-4 mb-4">
            <div className="relative overflow-hidden rounded-lg">
              {/* Replace the iframe source with the YouTube embed URL */}
              <iframe
                src="https://www.youtube.com/embed/zuXgaVFqcn0"
                frameBorder="0"
                allowFullScreen
                className="w-full h-56 md:h-64 lg:h-72"
              ></iframe>
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold">News</p>
            </div>
          </div>

          <div className="w-1/3 px-4 mb-4">
            <div className="relative overflow-hidden rounded-lg">
              {/* Replace the iframe source with the YouTube embed URL */}
              <iframe
                src="https://www.youtube.com/embed/6zb6CtcM8Hs"
                frameBorder="0"
                allowFullScreen
                className="w-full h-56 md:h-64 lg:h-72"
              ></iframe>
            </div>

            <div className="mt-2">
              <p className="text-lg font-semibold">Articles</p>
              <p className="text-gray-500">
                Wifi 6 will continue to grow at huge levels - By Ken Stober
              </p>
            </div>
          </div>

          {/* Add more pairs of video elements as needed */}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default YoutubeTutorials;
