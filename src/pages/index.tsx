import { type NextPage } from "next";
import Head from "next/head";

import Image from "next/image";

// moved content cause it makes no sense to have SVGs occupy half the page.
import LogosHome from "~/snippets/Home.Logos";
import SocialsHome from "~/snippets/Home.Socials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aabhushan Gautam</title>
      </Head>
      {/* bg-gradient-to-b from-gray-800 to-[#15162c] */}
      <main className="flex min-h-screen flex-col overflow-hidden bg-zinc-900 p-5">
        <div className="mb-5 flex flex-[2_1_0] items-stretch justify-start gap-3 text-white">
          {/* MAIN SECTION NOW */}
          <div className="flex flex-1 items-end justify-center rounded-xl p-2 px-5 shadow-xl shadow-gray-900/50">
            <div className="mb-5">
              <h1 className="base:text-lg mb-5 font-semibold capitalize sm:text-4xl md:text-5xl">
                bringing your ideas to life through UI design and development
              </h1>

              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex h-44 flex-1 cursor-pointer flex-col items-center justify-center rounded-md bg-green-500 hover:-translate-y-1 hover:bg-green-600">
                  <h1 className="base:text-lg font-semibold capitalize sm:text-2xl md:text-3xl">
                    4+
                  </h1>

                  <h6>Years experience</h6>
                </div>
                <div className="flex h-44 flex-1 cursor-pointer flex-col items-center justify-center rounded-md bg-yellow-500 hover:-translate-y-1 hover:bg-yellow-600">
                  <h1 className="base:text-lg font-semibold capitalize sm:text-2xl md:text-3xl">
                    4+
                  </h1>

                  <h6>Years experience</h6>
                </div>
                <div className="flex h-44 flex-1 cursor-pointer flex-col items-center justify-center rounded-md bg-red-500 hover:-translate-y-1 hover:bg-red-600">
                  <h1 className="base:text-lg font-semibold capitalize sm:text-2xl md:text-3xl">
                    4+
                  </h1>

                  <h6>Happy clients</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="second-row relative flex h-full flex-1 flex-col gap-2">
            <div className="navbar flex h-16 w-full items-center justify-between rounded-lg bg-[#1e1b1e] p-2 shadow-md shadow-gray-900/50">
              <div className="flex flex-row items-center justify-start gap-4">
                <Image
                  src="/images/pp.jpg"
                  width={50}
                  height={50}
                  alt="logo"
                  className="rounded-full"
                />
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="peer h-6 w-6 cursor-pointer hover:animate-pulse hover:text-gray-300"
                onClick={() => {
                  const navbarDocument =
                    document.getElementById("navbar-dropdown");
                  if (navbarDocument) {
                    navbarDocument.classList.toggle("visible");
                    navbarDocument.classList.toggle("opacity-100");
                    navbarDocument.classList.toggle("z-20");
                  }
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                />
              </svg>

              <div
                className="rounded-mg visible absolute top-0 left-0 right-0 mt-20 h-[calc(100%-5rem)] rounded-lg bg-gradient-to-b from-gray-800 to-gray-700 px-5 opacity-0 shadow-md shadow-gray-900/90 duration-500 ease-in-out peer-hover:visible peer-hover:opacity-100 "
                id="navbar-dropdown"
              >
                MAKE ME FULL HEIGHT OF THE CONTAINER
              </div>
            </div>

            <div className="z-10 flex flex-1 items-stretch justify-start gap-2 rounded-lg pt-2 shadow-md shadow-gray-900/50">
              <div className="flex w-full flex-[0.7_1_0] flex-col items-start justify-start gap-4">
                <Image
                  src="/images/home.jpg"
                  width={500}
                  height={500}
                  alt="logo"
                  style={{
                    objectFit: "fill",
                    objectPosition: "center",
                  }}
                />

                <div className="flex w-full items-start justify-between gap-2 rounded-xl bg-[#1e1b1e] px-2 py-2">
                  <SocialsHome />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-stretch justify-start gap-2">
                <div className="flex items-center justify-between rounded-lg bg-[#1e1b1e] px-2 py-2">
                  <p className="text-sm">Name</p>
                  <h1 className="font-bold">Aabhushan</h1>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-[#1e1b1e] px-2 py-2">
                  <p className="text-sm">Age</p>
                  <h1 className="font-bold">27</h1>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-[#1e1b1e] px-2 py-2">
                  <p className="text-sm">Location</p>
                  <h1 className="font-bold">Kathmandu</h1>
                </div>

                <div className="flex items-start justify-around gap-2 rounded-lg bg-[#1e1b1e] px-2 py-2">
                  <LogosHome />
                </div>

                <div className="flex flex-col rounded-lg bg-[#1e1b1e] px-2 py-2">
                  <div className="flex items-center justify-between rounded-lg bg-[#1e1b1e] px-2 py-2">
                    <p className="text-sm">Current</p>
                    <h1 className="text-base font-bold">Software Developer</h1>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-[#1e1b1e] px-2 py-2">
                    <p className="text-sm">@</p>
                    <h1 className="text-base font-bold">Kotuko Nepal</h1>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-[#1e1b1e] px-2 py-2">
                    <p className="text-sm">Stacks</p>
                    <h1 className="text-base font-bold">
                      React JS/Native, Typescript, NodeJS
                    </h1>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-between rounded-lg bg-[#1e1b1e] px-2 py-2">
                  <p className="text-sm">Location</p>
                  <h1 className="font-bold">Kathmandu</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_1_0] items-stretch justify-start gap-5 text-white">
          <div className="flex-1 rounded-lg bg-[#1e1b1e] p-5 text-white">
            <div className="mb-5 flex items-center justify-between">
              <h1 className="font-bold">Projects</h1>

              <p className="cursor-pointer text-gray-400">See All</p>
            </div>

            <div className=" gap-4">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex h-44 flex-1 cursor-pointer flex-col items-center justify-center rounded-md bg-green-500 hover:-translate-y-1 hover:bg-green-600">
                  <h1 className="base:text-lg font-semibold capitalize sm:text-2xl md:text-3xl">
                    4+
                  </h1>

                  <h6>Years experience</h6>
                </div>
                <div className="flex h-44 flex-1 cursor-pointer flex-col items-center justify-center rounded-md bg-yellow-500 hover:-translate-y-1 hover:bg-yellow-600">
                  <h1 className="base:text-lg font-semibold capitalize sm:text-2xl md:text-3xl">
                    4+
                  </h1>

                  <h6>Years experience</h6>
                </div>
                <div className="flex h-44 flex-1 cursor-pointer flex-col items-center justify-center rounded-md bg-red-500 hover:-translate-y-1 hover:bg-red-600">
                  <h1 className="base:text-lg font-semibold capitalize sm:text-2xl md:text-3xl">
                    4+
                  </h1>

                  <h6>Happy clients</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-[#1e1b1e] p-5 text-white">
            Whassup
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
