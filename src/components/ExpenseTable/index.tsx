import { ExpenseData, fetchExpense } from "@/slice/expenseSlice";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ExpenseRow from "./ExpenseRow";

export default function ExpenseTable() {
  const transformedData: ExpenseData[] = useSelector(
    (state: any) => state.expense.transformedData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpense() as any);
  }, []);

  return (
    <div className="flex items-center gap-2 justify-between">
      <Table>
        <TableCaption>A list of your expenses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center w-fit">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transformedData.map((item, idx) => (
            <ExpenseRow key={idx} item={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
