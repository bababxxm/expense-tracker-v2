import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 className="font-bold text-4xl">Hello</h1>
      </div>
    </Provider>
  );
}

export default App;
