"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/jobs", text: "Jobs" },
  { href: "/blog", text: "Blog" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

function Header() {
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
    </nav>
  );
}

export default Header;
