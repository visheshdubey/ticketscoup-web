import { SendHorizontal } from "lucide-react";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";

type Props = {};

const TicketChatSendBottomBar = (props: Props) => {
  return (
    <div className="flex items-center w-full h-16 gap-4 p-4 bg-background">
      <ScrollArea className="flex h-10 border rounded-md grow">
        <Textarea
          placeholder="Search ..."
          className="h-full overflow-hidden border-0 ring-0 bg-background"
        />
      </ScrollArea>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email
        </label>
      </div>
      <Input
        type="file"
        className="block p-0 text-sm truncate border-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-blue-50 w-28 file:cursor-pointer "
      />
      <Button size={"lg"} className="gap-2 rounded-full">
        <span className="hidden md:block">Send</span>{" "}
        <SendHorizontal size={16} />
      </Button>
    </div>
  );
};

export default TicketChatSendBottomBar;
