import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

export default function SortExpense() {
  const dispatch = useDispatch();
  const [flagSort, setFlagSort] = useState<string>("asc");

  return (
    <div className="flex flex-row gap-4 items-center">
      <div>Sort By:</div>
      <Select
        value={flagSort}
        onValueChange={(value) => {
		  setFlagSort(value);
		  dispatch({
			type: "expense/sortExpenseData",
			payload: value,
		  });
		}}
      >
        <SelectTrigger className="w-[125px]">
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
