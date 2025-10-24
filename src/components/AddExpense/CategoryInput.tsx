import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const categories = [
  "food",
  "travel",
  "rent",
  "bills",
  "shopping",
  "savings",
  "others",
];

export default function CategoryInput() {
  const dispatch = useDispatch();
  const categoryValue = useSelector(
    (state: any) => state.expense.expenseItem.category
  );
  return (
    <Select
      value={categoryValue}
      onValueChange={(value) => {
          dispatch({
            type: "expense/inputExpenseItem",
            payload: { key: "category", data: value == "" ? "others" : value },
          });
      }}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
