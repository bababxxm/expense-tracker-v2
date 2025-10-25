import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a legend";

export function ChartPieLegend({
  chartData,
  chartConfig,
  dataKey,
  nameKey,
}: {
  chartData: any[];
  chartConfig: ChartConfig;
  dataKey: string;
  nameKey: string;
}) {
  return (
    <Card className="flex ">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square ">
          <PieChart>
            <Pie data={chartData} dataKey={dataKey} />
            <ChartLegend
              content={<ChartLegendContent nameKey={nameKey} />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
