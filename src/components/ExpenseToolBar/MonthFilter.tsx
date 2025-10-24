import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function MonthFilter() {
  const dispatch = useDispatch();
  const filterMonth = useSelector((state: any) => state.expense.filterMonth);
  return (
    <div className="flex flex-row gap-4 items-center">
      <div>Filter:</div>
      <Select
        value={filterMonth}
        onValueChange={(value) => {
          dispatch({ type: "expense/filterByMonth", payload: value });
        }}
      >
        <SelectTrigger className="w-[125px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">All</SelectItem>
          <SelectItem value="1">January</SelectItem>
          <SelectItem value="2">February</SelectItem>
          <SelectItem value="3">March</SelectItem>
          <SelectItem value="4">April</SelectItem>
          <SelectItem value="5">May</SelectItem>
          <SelectItem value="6">June</SelectItem>
          <SelectItem value="7">July</SelectItem>
          <SelectItem value="8">August</SelectItem>
          <SelectItem value="9">September</SelectItem>
          <SelectItem value="10">October</SelectItem>
          <SelectItem value="11">November</SelectItem>
          <SelectItem value="12">December</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
