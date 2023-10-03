"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { faBars, faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const links = [
  { href: "/", text: "Home" },
  { href: "/jobs", text: "Jobs Vacancies" },
  { href: "/blog", text: "Blog" },
  { href: "/projects", text: "Projects" },
  { href: "/contact-us", text: "Contact us" },
];

function Header() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const path = usePathname();
  return (
    <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className={`${
              "/" === path
                ? "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-yellow-700 "
                : "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-700"
            }`}
            href="/"
          >
            The Syntax
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 20 }} />
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center hidden"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  href={link.href}
                  className={`${
                    link.href === path
                      ? "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-yellow-700 "
                      : "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-700"
                  }`}
                >
                  <span className="ml-2">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-200 drop-shadow-lg ">
          {/* Close Icon */}
          <div className="flex justify-end py-4 px-6 bg-white">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FontAwesomeIcon
                icon={faTimesSquare}
                className="text-slate-700"
                style={{ fontSize: 32 }}
              />
            </button>
          </div>
          <div className="ml-[10%] flex flex-col gap-4">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    href={link.href}
                    className={`${
                      link.href === path
                        ? "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize text-yellow-700 "
                        : "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize text-slate-700"
                    }`}
                  >
                    <span className="ml-2">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
