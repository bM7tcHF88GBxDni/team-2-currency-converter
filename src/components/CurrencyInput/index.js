import { countries } from "./countries.js";

function CurrencyInput({ updateCurrency }) {
  const currencyCodes = Object.keys(countries);
  const currencyNames = Object.values(countries);

  return (
    <>
      <input
        list="currencies"
        onChange={(e) => {
          updateCurrency(e.target.value);
        }}
      />
      <datalist id="currencies">
        {currencyCodes.map((code, index) => (
          <option key={code} value={code}>
            {code + " - " + currencyNames[index]}
          </option>
        ))}
      </datalist>
    </>
  );
}

export default CurrencyInput;
