import { Info, Link, MessageCircleMore, Paperclip } from "lucide-react";
import { Outlet } from "react-router-dom";

import TicketChatListItem from "@/components/ticket-chat-list-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const TicketLayout = (props: Props) => {
  const customTabTriggerClass = `data-[state=active]:border-b-2 gap-2 items-center px-4 md:px-8 rounded-none h-full data-[state=active]:text-primary data-[state=active]:font-medium text-sm
     data-[state=active]:shadow-none  border-primary `;
  return (
    <div className="flex w-full">
      {/* -------------------------------------------------------------------------- */
      /*                                   Sidebar                                  */
      /* -------------------------------------------------------------------------- */}
      <div className="hidden lg:flex flex-col min-w-[240px] w-[360px]  bg-background border-r shrink-0 grow-0 ">
        <div className="flex items-center w-full h-16 px-4 border-b bg-secondary">
          <Input
            type="text"
            placeholder="Search ..."
            className="h-8 bg-background"
          />
        </div>
        <ScrollArea
          className="flex-col h-full p-4 py-0 overflow-auto"
          style={{ height: "calc(100vh - 7.5rem)" }}
        >
          {new Array(100).fill(1).map((_, index) => (
            <TicketChatListItem index={index} />
          ))}
        </ScrollArea>
      </div>
      {/* -------------------------------------------------------------------------- */
      /*                                 Main Screen                                */
      /* -------------------------------------------------------------------------- */}
      <div className="flex-col overflow-hidden grow bg-primary/15">
        {/* -------------------------------------------------------------------------- */
        /*                            Chat Screen title bar                           */
        /* -------------------------------------------------------------------------- */}
        <div className="flex items-center justify-between w-full h-16 px-4 bg-blue-700">
          <div className="flex items-center gap-4">
            <Avatar className={"w-8 h-8"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium text-white">Vishesh Dubey</span>
            <span className="text-sm text-white/70"># Ggv8G_6</span>
          </div>
          <div className="hidden gap-4 lg:flex">
            <Select>
              <SelectTrigger className="w-[180px] h-8 bg-background">
                <SelectValue placeholder="Ticket status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] h-8 bg-background">
                <SelectValue placeholder="Assigned to" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] h-8 bg-background">
                <SelectValue placeholder="Assigned to" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* -------------------------------------------------------------------------- */
        /*                             Chat Screen tab bar                            */
        /* -------------------------------------------------------------------------- */}
        <div className="flex items-center justify-between w-full h-10 px-4 py-4 bg-background">
          <Tabs defaultValue="chat" className="w-full p-0">
            <TabsList className="flex justify-start w-full py-0 bg-white border-b-gray-200">
              <TabsTrigger value="chat" className={customTabTriggerClass}>
                <MessageCircleMore size={16} /> Chat
              </TabsTrigger>
              <TabsTrigger value="details" className={customTabTriggerClass}>
                <Info size={16} /> Details
              </TabsTrigger>
              <TabsTrigger value="files" className={customTabTriggerClass}>
                <Paperclip size={16} /> Files
              </TabsTrigger>
              <TabsTrigger
                value="linked_tickets"
                className={customTabTriggerClass}
              >
                <Link size={16} /> Linked Tickets
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default TicketLayout;
