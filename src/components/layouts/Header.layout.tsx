import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const sessionData = useSession();

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // toggle the menu when the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target instanceof Node) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!event.target.closest("#menu-button")) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const userImage =
    (sessionData.data && sessionData.data.user.image) || "/images/home.jpg";
  return (
    <div className="flex items-center justify-between py-2 px-7">
      <div className="flex items-center justify-between gap-5">
        <Image
          src="/images/home.jpg"
          width={1000}
          height={1000}
          alt="logo"
          className="h-9 w-9 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between gap-5">
        <span className="text-base">
          {" "}
          {sessionData.data && sessionData.data.user.name}{" "}
        </span>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggle}
            >
              <Image
                src={userImage}
                width={1000}
                height={1000}
                alt="logo"
                className="h-9 w-9 rounded-full object-cover "
              />
            </button>
          </div>

          <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isOpen ? "block" : "hidden"
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <span
                className="block cursor-pointer px-4 py-2 text-sm text-white hover:bg-zinc-800"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-5"
                onClick={() => void router.push("/")}
              >
                Main Site
              </span>
            </div>
            <div className="py-1" role="none">
              <span
                className="block cursor-pointer px-4 py-2 text-sm text-white hover:bg-zinc-800"
                role="menuitem"
                tabIndex={-1}
                onClick={() => {
                  void signOut();
                  void router.push("/");
                }}
                id="menu-item-6"
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
