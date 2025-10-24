import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

export default function SortExpense() {
  const dispatch = useDispatch();
  const flagSort = useSelector((state: any) => state.expense.flagSort);

  return (
    <div className="flex flex-row gap-4 items-center">
      <div>Sort By:</div>
      <Select
        value={flagSort}
        onValueChange={(value) => {
          dispatch({
            type: "expense/sortExpenseData",
            payload: { value},
          });
        }}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="dsc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
