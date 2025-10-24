import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addExpense, ExpenseItem } from "@/slice/expenseSlice";

function AddButton() {
  const dispatch = useDispatch();
  const expenseItem: ExpenseItem = useSelector(
    (state: any) => state.expense.expenseItem
  );
  return (
    <Button
      size="lg"
      className="cursor-pointer"
      onClick={() => {
        dispatch(addExpense(expenseItem) as any);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      Add Expense
    </Button>
  );
}

export default AddButton;
