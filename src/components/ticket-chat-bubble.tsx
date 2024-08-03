import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Props = {};

const TicketChatBubble = (props: Props) => {
  return (
    <div className="w-full ">
      <div className="flex gap-2 p-4">
        <Avatar className={"w-8 h-8"}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 5">
          <div className="flex flex-col gap-1 p-4 max-w-[50%] text-sm bg-primary rounded-lg text-white">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              esse nobis deleniti.
            </span>
          </div>
          <span className="text-secondary-foreground/50 text-xs p-1">
            26-08-2023 08:23 AM
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketChatBubble;
