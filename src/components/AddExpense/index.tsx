import AddButton from "./AddButton";
import CategoryInput from "./CategoryInput";
import DateInput from "./DateInput";
import NameInput from "./NameInput";
import PriceInput from "./PriceInput";

function AddExpense() {
  return (
    <div className="flex justify-center items-center my-2 py-4">
      <div className="flex gap-4 items-center">
        <NameInput />
        <PriceInput />
        <CategoryInput />
        <DateInput />
        <AddButton />
      </div>
    </div>
  );
}

export default AddExpense;
