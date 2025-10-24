import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function TotalTransactions() {
  const transformedData = useSelector(
    (state: any) => state.expense.transformedData
  );
  const totalTransactions = transformedData.length;

  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle>Total Transactions</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-2xl font-semibold">
        {totalTransactions}
      </CardContent>
    </Card>
  );
}
