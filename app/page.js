import Hero from "@/components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDoubleRight,
  faCodeBranch,
  faCompassDrafting,
  faFileAlt,
  faFingerprint,
  faNewspaper,
  faPaperPlane,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import MotionWrapper from "@/components/MotionWrapper";
import Reveal from "@/components/Reveal";
export const metadata = {
  title: "Jobs in Kenya | Find Employment Opportunities - The Syntax",
  description:
    "Welcome to The Syntax, the top destination for job seekers in Kenya. Discover exciting job opportunities across various industries. Start your journey today!",
};
export default function Home() {
  return (
    <MotionWrapper>
      <main className="bg-white min-h-screen">
        <Hero />

        <section className="mt-40 pb-40 relative bg-slate-100">
          <Reveal>
            <div
              className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
              style={{ height: 80 }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x={0}
                y={0}
              >
                <polygon
                  className="text-slate-100 fill-current"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </Reveal>
          <Reveal>
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block"
                        style={{ height: 95, top: "-94px" }}
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-pink-600 fill-current"
                        />
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Great for your awesome project
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Putting together a page has never been easier than
                        matching together pre-made components. From landing
                        pages presentation to login areas, you can easily
                        customise and built your pages.
                      </p>
                    </blockquote>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                      <div className="relative flex flex-col mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon
                              icon={faSitemap}
                              style={{ fontSize: 20 }}
                            />
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            CSS Components
                          </h6>
                          <p className="mb-4 text-slate-500">
                            Tailwind Starter Kit comes with a huge number of
                            Fully Coded CSS components.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon
                              icon={faCompassDrafting}
                              style={{ fontSize: 20 }}
                            />
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            JavaScript Components
                          </h6>
                          <p className="mb-4 text-slate-500">
                            We also feature many dynamic components for React,
                            Vue and Angular.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon
                              icon={faNewspaper}
                              style={{ fontSize: 20 }}
                            />
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                          <p className="mb-4 text-slate-500">
                            This extension also comes with 3 sample pages. They
                            are fully coded so you can start working instantly.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <FontAwesomeIcon
                              icon={faFileAlt}
                              style={{ fontSize: 20 }}
                            />
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            Documentation
                          </h6>
                          <p className="mb-4 text-slate-500">
                            Built by developers for developers. You will love
                            how easy is to to work with Tailwind Starter Kit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="container mx-auto overflow-hidden pb-20">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                  <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <FontAwesomeIcon
                      icon={faSitemap}
                      style={{ fontSize: 20 }}
                    />
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    CSS Components
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                    Every element that you need in a product comes built in as a
                    component. All components fit perfectly with each other and
                    can have different colours.
                  </p>
                  <div className="block pb-6">
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Buttons
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Inputs
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Labels
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Menus
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Navbars
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Pagination
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Progressbars
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Typography
                    </span>
                  </div>
                  <a
                    className="font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150"
                    href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
                  >
                    View All{" "}
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="ml-1 leading-relaxed"
                      style={{ fontSize: 20 }}
                    />
                  </a>
                </div>
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                  <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                    <img
                      alt="..."
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-btn.png"
                      className="w-full align-middle rounded absolute shadow-lg"
                      style={{
                        maxWidth: 100,
                        left: 145,
                        top: "-29px",
                        zIndex: 3,
                      }}
                    />
                    <img
                      alt="..."
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-profile-card.png"
                      className="w-full align-middle rounded-lg absolute shadow-lg"
                      style={{ maxWidth: 210, left: 260, top: "-160px" }}
                    />
                    <img
                      alt="..."
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-card.png"
                      className="w-full align-middle rounded-lg absolute shadow-lg"
                      style={{
                        maxWidth: 180,
                        left: 40,
                        top: "-225px",
                        zIndex: 2,
                      }}
                    />
                    <img
                      alt="..."
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-2.png"
                      className="w-full align-middle rounded-lg absolute shadow-2xl"
                      style={{ maxWidth: 200, left: "-50px", top: 25 }}
                    />
                    <img
                      alt="..."
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-menu.png"
                      className="w-full align-middle rounded absolute shadow-lg"
                      style={{ maxWidth: 580, left: "-20px", top: 210 }}
                    />
                    <img
                      alt="..."
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-btn-pink.png"
                      className="w-full align-middle rounded absolute shadow-xl"
                      style={{ maxWidth: 120, left: 195, top: 95 }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center pt-32">
                <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                  <div className="justify-center flex flex-wrap relative">
                    <div className="my-4 w-full lg:w-6/12 px-4">
                      <div className="bg-sky-500 shadow-lg rounded-lg text-center p-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          ReactJS
                        </p>
                        <p className="text-base text-white opacity-75 mt-2">
                          A JavaScript library for building user interfaces
                          maintaned by Facebook and community of developers.
                        </p>
                      </div>
                      <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Vue.js
                        </p>
                        <p className="text-base text-white opacity-75 mt-2">
                          An open-source Model–view–viewmodel JavaScript
                          framework for building user interfaces.
                        </p>
                      </div>
                    </div>
                    <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                      <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          JavaScript
                        </p>
                        <p className="text-base text-white opacity-75 mt-2">
                          Object-oriented programming language that conforms to
                          the ECMAScript specification.
                        </p>
                      </div>
                      <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Angular
                        </p>
                        <p className="text-base text-white opacity-75 mt-2">
                          a JavaScript-based open-source front-end web framework
                          mainly maintained by Google.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                  <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <FontAwesomeIcon
                      icon={faCompassDrafting}
                      style={{ fontSize: 20 }}
                    />
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Javascript Components
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                    In order to create a great User Experience some components
                    require JavaScript. In this way you can manipulate the
                    elements on the page and give more options to your users.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                    We created a set of Components that are dynamic and come to
                    help you.
                  </p>
                  <div className="block pb-6">
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Alerts
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Dropdowns
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Menus
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Modals
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Navbars
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Popovers
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Tabs
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Tooltips
                    </span>
                  </div>
                  <a
                    className="font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150"
                    href="/learning-lab/tailwind-starter-kit/documentation/vue/alerts"
                  >
                    View all{" "}
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="ml-1 leading-relaxed"
                      style={{ fontSize: 20 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="container mx-auto px-4 pb-32 pt-48">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                  <div className="md:pr-12">
                    <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <FontAwesomeIcon
                        icon={faFileAlt}
                        style={{ fontSize: 20 }}
                      />
                    </div>
                    <h3 className="text-3xl font-semibold">
                      Complex Documentation
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-slate-500">
                      This extension comes a lot of fully coded examples that
                      help you get started faster. You can adjust the colors and
                      also the programming language. You can change the text and
                      images and you're good to go.
                    </p>
                    <ul className="list-none mt-6">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                              <FontAwesomeIcon
                                icon={faFingerprint}
                                style={{ fontSize: 20 }}
                              />
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500">
                              Built by Developers for Developers
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                              <FontAwesomeIcon
                                icon={faHtml5}
                                style={{ fontSize: 20 }}
                              />
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500">
                              Carefully crafted code for Components
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                              <FontAwesomeIcon
                                icon={faPaperPlane}
                                style={{ fontSize: 20 }}
                              />
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500">
                              Dynamic Javascript Components
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-xl"
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/documentation.png"
                    style={{
                      transform:
                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                    }}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="justify-center text-center flex flex-wrap mt-24">
              <div className="w-full md:w-6/12 px-12 md:px-4">
                <h2 className="font-semibold text-4xl">
                  Beautiful Example Projects
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">
                  My projects include a Hospital Management System, Online
                  Stores, and a Property Listing Apps. I use MySQL for data
                  storage and Tailwind CSS for styling..
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="block relative z-1 bg-slate-600">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4 -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Hospital Managemet System
                    </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/projects/hostpital-management-system.png"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      eCommerce Store
                    </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/projects/simplifi-networks-online-store.png"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Property Listing App
                    </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/projects/property-listing-app.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-600 overflow-hidden">
          <div className="container mx-auto pb-64">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    style={{ fontSize: 20 }}
                  />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                  Open Source
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400">
                  Since{" "}
                  <a
                    href="https://tailwindcss.com/"
                    className="text-slate-300"
                    target="_blank"
                  >
                    TailwindCSS
                  </a>{" "}
                  is an open source project we wanted to continue this movement
                  too. You can give this version a try to feel the design and
                  also test the quality of the code!
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-400">
                  Get it free on Github and please help us spread the news with
                  a Star!
                </p>
                <a
                  href="https://github.com/creativetimofficial/tailwind-starter-kit"
                  target="_blank"
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Github Star
                </a>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    fontSize: "55em",
                    position: "absolute",
                    top: "-150px",
                    right: "-100%",
                    left: "auto",
                    opacity: "0.8",
                  }}
                  className="text-slate-700"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-slate-200 relative pt-32">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
            style={{ height: 80 }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-slate-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
              <div className="w-full text-center lg:w-8/12">
                <p className="text-4xl text-center">
                  <span role="img" aria-label="love">
                    😍
                  </span>
                </p>
                <h3 className="font-semibold text-3xl">
                  Do you love our work?
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed mt-4 mb-4">
                  Cause if you do, it can be yours now. Hit the buttons below to
                  navigate to get the Free version for your next project. Build
                  a new web app or give an old project a new look!
                </p>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    href="/learning-lab/tailwind-starter-kit/documentation/quick-start"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} />
                    <span>Help With a Star</span>
                  </a>
                </div>
                <div className="text-center mt-16" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MotionWrapper>
  );
}
