import React, { useState } from "react";

import CurrencyInput from "../CurrencyInput";
import style from "./convertForm.module.css";

const ConvertForm = () => {
  const [initialCurrency, setInitialCurrency] = useState("GBP");
  const [newCurrency, setNewCurrency] = useState("GBP");

  function updateInitialCurrency(code) {
    setInitialCurrency(code);
    console.log(initialCurrency);
  }

  function updateNewCurrency(code) {
    setNewCurrency(code);
    console.log(newCurrency);
  }

  return (
    <div className={style.container}>
      <p>Amount</p>
      <input type="text" />
      <p>From</p>
      <CurrencyInput updateCurrency={updateInitialCurrency} />
      <p>To</p>
      <CurrencyInput updateCurrency={updateNewCurrency} />
      <p>Exchange rate:</p>

      <button>Convert</button>
      <p>Converted</p>
      <div>Result</div>
    </div>
  );
};

export default ConvertForm;
