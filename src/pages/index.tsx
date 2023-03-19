import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Image from "next/image";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Aabhushan Gautam</title>
      </Head>

      <main className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-gray-800 to-[#15162c] p-5">
        <div className="mb-5 flex flex-[1.5_1_0] items-stretch justify-start gap-5 text-white">
          {/* MAIN SECTION NOW */}
          <div className="flex flex-1 items-end justify-center rounded-xl bg-gray-900 p-2 px-5 shadow-xl shadow-gray-900/50">
            <div className="mb-5">
              <h1 className="base:text-lg mb-5 font-semibold capitalize sm:text-4xl md:text-5xl">
                bringing your ideas to life through UI design and development
              </h1>

              <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
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
          <div className="second-row flex flex-1 flex-col gap-5">
            <div className="navbar relative flex w-full items-center justify-between rounded-lg bg-gray-900 p-2 shadow-md shadow-gray-900/50">
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
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                />
              </svg>

              <div
                className="rounded-mg visible absolute top-full left-0 right-0 mt-1 h-full flex-1 rounded-lg bg-black opacity-0 duration-500 ease-in-out peer-hover:visible peer-hover:opacity-100"
                id="navbar-dropdown"
              >
                XD
              </div>
            </div>

            <div className="flex flex-1 rounded-lg bg-gray-900 p-2 shadow-md shadow-gray-900/50">
              I AM HERE
            </div>
          </div>
        </div>
        <div className="flex flex-[1] items-stretch justify-start text-white">
          <div className="flex-1 ">whassup</div>
          <div className="flex-1 ">WHASSUP</div>
        </div>
      </main>
    </>
  );
};

export default Home;
