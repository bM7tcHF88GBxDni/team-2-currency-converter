import style from "./convertForm.module.css";

const ConvertForm = () => {
  return (
    <div className={style.container}>
      <p>Amount</p>
      <input type="text" />
      <p>From</p>

      <p>To</p>

      <p>Exchange rate:</p>

      <button>Convert</button>
      <p>Converted</p>
      <div>Result</div>
    </div>
  );
};

export default ConvertForm;
