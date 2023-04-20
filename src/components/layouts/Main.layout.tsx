import React from "react";
import { useSession } from "next-auth/react";
import Header from "./Header.layout";
import Sidebar from "./Sidebar.layout";
import { useRouter } from "next/router";

const Main = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const sessionData = useSession();
  if (sessionData.status === "unauthenticated") {
    void router.push("/");
  }
  return (
    <main className="h-screen text-white">
      <div className="flex-1 bg-[#2C3543] shadow-md shadow-[#2C3543]">
        <Header />
      </div>

      <div className="mb-5 flex h-full items-stretch justify-start">
        <div
          id="sidebar"
          className="flex-[0.3] bg-[#2C3543] shadow-[6px_-14px_15px_0px_#2c3543]"
        >
          <Sidebar />
        </div>
        <section className=" flex-1 self-stretch p-5 text-black">
          {children}
        </section>
      </div>
    </main>
  );
};

export default Main;
