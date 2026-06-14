import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Head from "./Head";

const Body = () => {
  return (
    <div className="h-screen flex flex-col">
      <Head />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;