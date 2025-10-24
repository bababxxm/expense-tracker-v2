import formatedDate from "@/utils/formatedDate";
import { DatePicker } from "../ui/datePicker";
import { useDispatch, useSelector } from "react-redux";

export default function DateInput() {
  const dispatch = useDispatch();
  const dateValue = useSelector((state: any) => state.expense.expenseItem.date);

  const handleDateChange = (date: Date) => {
    dispatch({
      type: "expense/inputExpenseItem",
      payload: { key: "date", data: formatedDate(date.toLocaleDateString()) },
    });
  };

  return (
    <DatePicker
      selectedDate={new Date(dateValue)}
      selectHandler={handleDateChange}
    />
  );
}
