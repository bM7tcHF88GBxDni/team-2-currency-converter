import React, { useState, useEffect } from "react";

import CurrencyInput from "../CurrencyInput";
import style from "./convertForm.module.css";

const ConvertForm = () => {
  const [initialCurrency, setInitialCurrency] = useState("GBP");
  const [newCurrency, setNewCurrency] = useState("GBP");
  const [amount, setAmount] = useState(100);

  const [getData, setGetData] = useState(false);

  function updateInitialCurrency(code) {
    setInitialCurrency(code);
    console.log(initialCurrency);
  }

  function updateNewCurrency(code) {
    setNewCurrency(code);
    console.log(newCurrency);
  }

  useEffect(() => {
    async function convertCurrency() {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "KEAFBM62enheqEvZwSnG6rF3V7fVCgHX");
      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };
      const response = await fetch(
        `https://api.apilayer.com/fixer/convert?to=${newCurrency}&from=${initialCurrency}&amount=${amount}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    convertCurrency();
  }, [getData]);

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
