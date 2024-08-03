import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { columns } from "../tickets/_components/components/columns";
import { DataTable } from "../tickets/_components/components/data-table";
import { tasks } from "../tickets/_components/data/tasks";

type Props = {};

const OverviewPage = (props: Props) => {
  return (
    <div className="container flex flex-col gap-8 p-4 py-12">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-medium">Overview</span>
          <span className="text-muted-foreground">
            Learn more about your new dashboard and get started
          </span>
        </div>
        <Select>
          <SelectTrigger className="w-[180px] h-8 bg-background">
            <SelectValue placeholder="Last Week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card className="shadow-none ounded-md ">
        <CardContent className="p-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-medium">Summary</span>
                <span className="text-sm font-medium text-primary">{`See all tickets > `}</span>
              </div>
              <span className="text-muted-foreground">
                Sun Apr 21 2024 - Mon Apr 29 2024
              </span>
            </div>

            <div className="grid w-full grid-cols-6 gap-4">
              <KPICard label="Total" value="18" color="border-gray-900" />
              <KPICard label="Unassigned" value="2" />
              <KPICard label="In-progress" value="13" color="border-primary" />
              <KPICard label="Hold" value="1" color="border-yellow-500" />
              <KPICard label="Done" value="2" color="border-green-500" />
              <KPICard
                label="Avg. Time (hrs.)"
                value="2"
                color="border-red-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-medium">Unassigned tickets</span>
        <span className="text-muted-foreground">
          Learn more about your new dashboard and get started
        </span>
      </div>
      <DataTable columns={columns} data={tasks} />
    </div>
  );
};

export default OverviewPage;

function KPICard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex flex-col gap-2.5 p-2 ">
      <span className="text-5xl font-semibold ">{value}</span>
      <div className={cn("py-2 border-b-8  ", color)}>{label}</div>
    </div>
  );
}
