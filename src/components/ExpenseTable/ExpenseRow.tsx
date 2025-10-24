import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { ExpenseData } from "@/slice/expenseSlice";

export default function ExpenseRow({ item }: { item: ExpenseData }) {
  return (
    <TableRow>
      <TableCell className="text-center">{item.date}</TableCell>
      <TableCell className="text-center">{item.name}</TableCell>
      <TableCell className="text-center">{item.category}</TableCell>
      <TableCell className="text-center">{item.price}</TableCell>
      <TableCell className="text-center">
        <Button></Button>
      </TableCell>
    </TableRow>
  );
}
