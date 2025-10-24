import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addExpense, ExpenseItem } from "@/slice/expenseSlice";
import PlusIcon from "../icon/PlusIcon";

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
        const expenseItemCpy = { ...expenseItem };
        if (expenseItemCpy.name === null || expenseItemCpy.name.trim() === "") {
          alert("Please fill in valid name");
          return;
        }
        if (
          expenseItemCpy.price === "" ||
          (!isNaN(+expenseItemCpy.price) && +expenseItemCpy.price <= 0)
        ) {
          alert("Please fill in valid  price.");
          return;
        }
        if (expenseItemCpy.category.trim() === "") {
          expenseItemCpy.category = "others";
        }
        dispatch(addExpense(expenseItemCpy) as any);
      }}
    >
      <PlusIcon />
      Add Expense
    </Button>
  );
}

export default AddButton;
