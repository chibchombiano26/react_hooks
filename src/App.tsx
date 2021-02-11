import "./styles.css";
import Counter from "./components/counter";
import { CounterProvider } from "./Provider/Provider";

export default function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <Counter />
      </CounterProvider>
    </div>
  );
}
