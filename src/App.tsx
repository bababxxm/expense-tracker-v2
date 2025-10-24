import { Provider } from "react-redux";
import store from "./store/store";
import ExpenseHeader from "./components/ExpenseHeader";
import AddExpense from "./components/AddExpense";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseTableToolBar from "./components/ExpenseToolBar";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center">
        <div className="py-4">
          <ExpenseHeader />
          <AddExpense />
          <br></br>
          <ExpenseTableToolBar />
          <ExpenseTable />
          <br></br>
        </div>
      </div>
    </Provider>
  );
}

export default App;
