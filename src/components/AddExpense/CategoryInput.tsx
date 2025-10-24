import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

export default function CategoryInput() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Food">Food</SelectItem>
        <SelectItem value="Bills">Bills</SelectItem>
        <SelectItem value="Others">Others</SelectItem>
      </SelectContent>
    </Select>
  );
}
