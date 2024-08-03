import { ScrollArea } from "@/components/ui/scroll-area";

import { columns } from "./_components/components/columns";
import { DataTable } from "./_components/components/data-table";
import { tasks } from "./_components/data/tasks";

type Props = {};

const TicketTable = (props: Props) => {
  return (
    <div className="container flex flex-col w-full gap-4 p-4 py-8 mx-auto">
      <span className="text-2xl font-medium">All Tickets</span>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};

export default TicketTable;
