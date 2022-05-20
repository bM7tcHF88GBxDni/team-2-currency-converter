import ConvertForm from "../ConvertForm";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.container}>
      <h1>CURRENCY CONVERSION APP</h1>
      <ConvertForm />
    </div>
  );
}

export default App;
