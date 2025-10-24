import numberToTHB from "@/utils/numberToTHB";
import { useSelector } from "react-redux";
import { ExpenseData } from "@/slice/expenseSlice";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function TotalSpentCard() {
  const transformedData = useSelector(
    (state: any) => state.expense.transformedData
  );
  const totalExpense = transformedData.reduce(
    (total: number, item: ExpenseData) => {
      let price = 0;
      if (item.price !== "") {
        price = Number(item.price);
      }
      return total + price;
    },
    0
  );

  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle>Total Spent</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-2xl font-semibold">
        {numberToTHB(totalExpense)}
      </CardContent>
    </Card>
  );
}
