import { useSelector } from "react-redux";
import { ChartPieLegend } from "../ui/pieChart";
import { ExpenseData } from "@/slice/expenseSlice";

export default function SummaryChart() {
  const transformedData: ExpenseData[] = useSelector(
    (state: any) => state.expense.transformedData
  );

  type CategorySummary = { [key: string]: number };

  const categorySummary: CategorySummary = {} as CategorySummary;

  for (let item of transformedData) {
    if (categorySummary[item.category]) {
      categorySummary[item.category] += Number(item.price);
    } else {
      categorySummary[item.category] = Number(item.price);
    }
  }

  type ChartDataItem = {
    category: string;
    price: number;
    fill: string;
  };

  type ChartConfig = {
    [key: string]: { label: string };
  };

  const chartData: ChartDataItem[] = [];
  const chartConfig: ChartConfig = {};

  Object.keys(categorySummary).forEach((Key, idx) => {
    chartData.push({
      category: Key,
      price: categorySummary[Key],
      fill: `var(--chart-${idx + 1})`,
    });
    chartConfig[Key] = { label: Key.charAt(0).toUpperCase() + Key.slice(1) };
  });

  return (
    <div className="w-72">
      <ChartPieLegend
        chartData={chartData}
        chartConfig={chartConfig}
        dataKey="price"
        nameKey="category"
      />
    </div>
  );
}
