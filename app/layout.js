import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import "@/styles/styles.css";
import "@/styles/prism.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Syntax - Developer insights & Job Vacancies in Kenya",
  description:
    "Dive into the world of Laravel, Next.js, React.js, Django, Vue.js, Nodejs & Express.js, MySQL, DevOps, CI/CD pipelines, Git cheatsheets, and Q&A. Your one-stop destination for tech tutorials and insights.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Script src="/node_modules/@material-tailwind/html/scripts/tabs.js" />
        <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js" />
      </body>
    </html>
  );
}
