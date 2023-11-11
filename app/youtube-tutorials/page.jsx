"use client";
import axiosClient from "@/utils/axios";
import MotionWrapper from "@/components/MotionWrapper";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { TabsDefault } from "@/components/TabsDefault";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const YoutubeTutorials = async () => {
  const res = await axiosClient.get(`/youtube-tutorials`);
  const categories = res.data.categories;
  const videos = res.data.tutorials.data;

  const getCategoryVideos = async (slug) => {};
  return (
    <MotionWrapper>
      <header className="sm:text-center pt-20">
        <div>
          <div className="container-fluid">
            <Tabs value="html">
              <TabsHeader className="bg-slate-200">
                {categories.map((category) => {
                  return (
                    <Tab
                      key={category.id}
                      value={category.id}
                      onClick={() => getCategoryVideos(category.slug)}
                    >
                      <span className="z-999 sub-cat-tabs">
                        {category.name}
                      </span>
                    </Tab>
                  );
                })}
              </TabsHeader>
              {/* <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody> */}
            </Tabs>
          </div>
        </div>
      </header>
      <div className="p-14">
        <div className="flex flex-wrap -mx-4">
          {videos.map((video) => (
            <div className="w-1/3 px-4 mb-4">
              <div className="relative overflow-hidden rounded-lg">
                <iframe
                  src={video.link}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-56 md:h-64 lg:h-72"
                ></iframe>
              </div>
              <div className="mt-2">
                <p className="text-lg font-semibold">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default YoutubeTutorials;
