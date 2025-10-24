import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui/input";
import { parsePriceInput } from "@/utils/input";

export default function PriceInput() {
  const dispatch = useDispatch();
  const priceValue = useSelector(
    (state: any) => state.expense.expenseItem.price
  );

  return (
    <div>
      <Input
        className="w-[200px]"
        placeholder="Price"
        value={priceValue}
        onChange={(e) => {
          dispatch({
            type: "expense/inputExpenseItem",
            payload: { key: "price", data: parsePriceInput(e.target.value) },
          });
        }}
      />
    </div>
  );
}
