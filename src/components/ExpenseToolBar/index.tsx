export default function ExpenseTableToolBar() {
  return (
    <div className="flex justify-between items-center p-4 text-1xl font-semibold text-center">
      <div className="flex flex-row gap-4 items-center">
        <div>Filter:</div>
        {/* <Select
          value={flagFilter}
          onValueChange={(value) => {
            setflagFilter(value);
          }}
        >
          <SelectTrigger className="w-[125px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">All</SelectItem>
            <SelectItem value="1">January</SelectItem>
            <SelectItem value="2">February</SelectItem>
            <SelectItem value="3">March</SelectItem>
            <SelectItem value="4">April</SelectItem>
            <SelectItem value="5">May</SelectItem>
            <SelectItem value="6">June</SelectItem>
            <SelectItem value="7">July</SelectItem>
            <SelectItem value="8">August</SelectItem>
            <SelectItem value="9">September</SelectItem>
            <SelectItem value="10">October</SelectItem>
            <SelectItem value="11">November</SelectItem>
            <SelectItem value="12">December</SelectItem>
          </SelectContent>
        </Select> */}
      </div>
    </div>
  );
}
