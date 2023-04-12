import { useRouter } from "next/router";
import type { ReactElement } from "react";
import Main from "~/components/layouts/Main.layout";

const Posts_List = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          void router.push("/admin/posts/create");
        }}
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Create
      </button>
    </div>
  );
};

Posts_List.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Posts_List;
