import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBitbucket,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-700"
            href="/learning-lab/tailwind-starter-kit/presentation"
          >
            The Syntax
          </a>
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
            <li className="nav-item">
              <a
                href="https://twitter.com/ProfNanguti"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold text-slate-700 hover:text-slate-500"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 20 }} />
                <span className="ml-2">Tweet</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-slate-700 hover:text-slate-500"
                href="https://bitbucket.org/nanguti/workspace/overview/"
              >
                <FontAwesomeIcon icon={faBitbucket} style={{ fontSize: 20 }} />
                <span className="ml-2">Bitbucket</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/kevin-w-wanyonyi/"
                className="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-slate-700 hover:text-slate-500"
              >
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 20 }} />
                <span className="ml-2">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
