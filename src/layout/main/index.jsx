import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import { Separator } from "@/components/ui/separator";

const MainLayout = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <section className="flex bg-white">
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <div className="w-full h-dvh flex flex-col overflow-hidden">
        <Header setIsSidebar={setIsSidebar} />
        <div className="px-5">
          <Separator className="bg-primary" />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default MainLayout;
