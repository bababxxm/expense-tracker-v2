import { Provider } from "react-redux";
import store from "./store/store";
import ExpenseHeader from "./components/ExpenseHeader";
import AddExpense from "./components/AddExpense";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseTableToolBar from "./components/ExpenseToolBar";
import ExpenseDashboard from "./components/ExpenseDashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center">
        <div className="py-4">
          <ExpenseHeader />
          <AddExpense />
          <ExpenseTableToolBar />
          <ExpenseTable />
          <ExpenseDashboard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
