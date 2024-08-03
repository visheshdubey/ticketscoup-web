import { Info, Link, MessageCircleMore, Paperclip } from "lucide-react";

import NavigationHeader from "@/components/navigation-header";
import TicketChatSendBottomBar from "@/components/ticket-chat-bottom-bar";
import TicketChatBubble from "@/components/ticket-chat-bubble";
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

function Chat() {
  const customTabTriggerClass = `data-[state=active]:border-b-2 gap-2 items-center px-4 md:px-8 rounded-none h-full data-[state=active]:text-primary data-[state=active]:font-medium text-sm
   data-[state=active]:shadow-none  border-primary `;
  return (
    <>
      {/* -------------------------------------------------------------------------- */
      /*                               ChatScrollArea                               */
      /* -------------------------------------------------------------------------- */}
      <ScrollArea
        className="flex flex-col w-full h-full grow"
        style={{ height: "calc(100vh - 14rem)" }}
      >
        <TicketChatBubble />
      </ScrollArea>
      <TicketChatSendBottomBar />
    </>
  );
}

export default Chat;
