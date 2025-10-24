import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { ExpenseData, removeExpense } from "@/slice/expenseSlice";
import CrossIcon from "../icon/CrossIcon";

export default function ExpenseRow({ item }: { item: ExpenseData }) {
  const dispatch = useDispatch();
  return (
    <TableRow>
      <TableCell className="text-center">{item.date}</TableCell>
      <TableCell className="text-center">{item.name}</TableCell>
      <TableCell className="text-center">{item.category}</TableCell>
      <TableCell className="text-center">{item.price}</TableCell>
      <TableCell className="text-center">
        <Button
          className="cursor-pointer"
          onClick={() => {
            dispatch(removeExpense(item.id) as any);
          }}
        >
          <CrossIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}
