import { Bell, Plus, Tag } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants, Button } from "./ui/button";

type Props = {};

const NavigationHeader = (props: Props) => {
  return (
    <nav className="flex items-center w-full border-b shadow b h-14">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <span className="text-xl font-bold text-primary flex gap-1.5 items-center">
          <Tag size={18} />
          Ticketscoup
        </span>
        <div className="flex items-center gap-4">
          <div className="hidden gap-2 md:flex">
            <a href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
              Overview
            </a>
            <a href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
              Tickets
            </a>
            <a href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
              Staff
            </a>
            <a href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
              Organization
            </a>
          </div>
          <Button size={"sm"} className="gap-2 rounded-full">
            <Plus size={16} /> Create
          </Button>
          <a
            href=""
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <Bell size={16} />
          </a>

          <Avatar className={"w-8 h-8"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
