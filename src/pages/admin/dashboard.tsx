import type { ReactElement } from "react";
import Main from "~/components/layouts/Main.layout";

const Dashboard = () => {
  return <div>Dash</div>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};
export default Dashboard;
