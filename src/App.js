import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => dispatch(actions.increment())}
        style={{ marginRight: 10 }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(actions.decrement())}
        style={{ marginRight: 10 }}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(actions.addNum(10))}>Add 10 </button>
    </div>
  );
}

export default App;
