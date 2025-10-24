import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui/input";

export default function NameInput() {
  const dispatch = useDispatch();
  const nameValue = useSelector((state: any) => state.expense.expenseItem.name);

  return (
    <div>
      <Input
        className="w-[200px]"
        placeholder="Name"
        value={nameValue}
        onChange={(e) => {
          dispatch({
            type: "expense/inputExpenseItem",
            payload: { key: "name", data: e.target.value },
          });
        }}
      />
    </div>
  );
}
