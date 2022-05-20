import ConvertForm from "../ConvertForm";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.container}>
     <h1>Currency exchange App</h1>
     <ConvertForm/>
     
    </div>
  );
}

export default App;
