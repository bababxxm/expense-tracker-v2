import SummaryChart from "./SummaryChart";
import TotalSpentCard from "./TotalSpentCard";
import TotalTransactions from "./TotalTransactions";

export default function ExpenseDashboard() {
  return (
    <div className="w-full flex justify-center items-center gap-8 my-4 pt-4">
      <div className="flex flex-col gap-7">
        <TotalTransactions />
        <TotalSpentCard />
      </div>
      <SummaryChart />
    </div>
  );
}
