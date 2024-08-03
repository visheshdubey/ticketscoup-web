import React from "react";
import { Outlet } from "react-router-dom";

import NavigationHeader from "@/components/navigation-header";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-screen max-h-screen ">
      <NavigationHeader />
      <ScrollArea style={{ width: "100vw", height: "calc(100vh-3.5rem)" }}>
        <Outlet />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RootLayout;
