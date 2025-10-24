import { ExpenseData } from "@/slice/expenseSlice";

export default function sortedExpense(data: ExpenseData[], flagSort: string) {
  const cpyData = [...data];
  cpyData.sort((a, b) => {
    return flagSort === "asc"
      ? a.date.localeCompare(b.date)
      : b.date.localeCompare(a.date);
  });
  return cpyData;
}
