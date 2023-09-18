import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBitbucket,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
            <i className="fas fa-bars" />
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center hidden"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Tailwind%20Starter%20Kit%2C%20a%20beautiful%20extension%20of%20%23TailwindCSS%20made%20by%20%40CreativeTim%20%23webdesign%20%23starterkit&url=https%3A%2F%2Fwww.creative-tim.com%2Flearning-lab%2Ftailwind-starter-kit%23%2Fpresentation"
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
                href="/learning-lab/tailwind-starter-kit/documentation/download"
              >
                <FontAwesomeIcon icon={faBitbucket} style={{ fontSize: 20 }} />
                <span className="ml-2">Bitbucket</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/creativetimofficial/tailwind-starter-kit/archive/designer-files.zip?ref=tsk-navbar"
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
