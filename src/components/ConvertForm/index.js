
import style from "./convertForm.module.css"
const ConvertForm = () => {
  return (
    <div className={style.container}>
        <label>Amount:</label>
        <input type="text"/>
        <p>From:</p>
        <p>To:</p>
        <p>Exchange rate:</p>
        <button>Convert</button>
        <p>Result</p>
    </div>
  )
}

export default ConvertForm