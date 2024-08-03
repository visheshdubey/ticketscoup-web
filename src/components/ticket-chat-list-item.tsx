import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  index: number;
};

const TicketChatListItem = (props: Props) => {
  return (
    <a
      key={`ticket-chat-list-${props.index}`}
      className="flex border-b py-2.5 items-center gap-4"
      href={"#"}
    >
      <Avatar className={"w-8 h-8"}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full ">
        <div className="flex">
          <span className="flex font-medium grow">Vishesh Dubey</span>
          <span className="text-sm truncate  text-muted-foreground">
            5 mins
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="text-sm truncate w-fit text-muted-foreground">
            # Ggv8G_6
          </span>
          <span className="text-sm text-muted-foreground">•</span>

          <span className="text-sm truncate grow text-muted-foreground">
            Rajeev Pandey
          </span>
          <span className="text-sm text-muted-foreground">•</span>

          <span className="text-sm font-medium truncate  text-primary">
            In-Progress
          </span>
        </div>
      </div>
    </a>
  );
};

export default TicketChatListItem;
