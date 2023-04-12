import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="h-full p-5">
      <ul>
        <li
          className="mb-3 flex w-full cursor-pointer items-center justify-start gap-4 p-2 hover:rounded-lg hover:bg-gray-700 hover:text-white"
          onClick={() => {
            void router.push("/admin/dashboard");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21 21h-8v-6h8v6Zm-10 0H3V11h8v10Zm10-8h-8V3h8v10ZM11 9H3V3h8v6Z"
            />
          </svg>

          <span className="text-base">Dashboard</span>
        </li>

        <li
          className="mb-3 flex w-full cursor-pointer items-center justify-start gap-4 p-2 hover:rounded-lg hover:bg-gray-700 hover:text-white"
          onClick={() => {
            void router.push("/admin/posts");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21 21h-8v-6h8v6Zm-10 0H3V11h8v10Zm10-8h-8V3h8v10ZM11 9H3V3h8v6Z"
            />
          </svg>

          <span className="text-base">Posts</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
