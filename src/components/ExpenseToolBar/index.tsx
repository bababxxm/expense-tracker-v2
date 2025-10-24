import MonthFilter from "./MonthFilter";
import SortExpense from "./SortExpense";

export default function ExpenseTableToolBar() {
  return (
    <div className="flex justify-between items-center p-4 text-1xl font-semibold text-center">
      <SortExpense />
      <MonthFilter />
    </div>
  );
}
