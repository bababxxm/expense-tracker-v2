import { Provider } from "react-redux";
import store from "./store/store";
import ExpenseHeader from "./components/ExpenseHeader";
import AddExpense from "./components/AddExpense";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center">
        <div className="w-[60%] py-4">
          <ExpenseHeader />
          <AddExpense />
          <br></br>
          {/* <ExpenseTable /> */}
          <br></br>
        </div>
      </div>
    </Provider>
  );
}

export default App;
