import InputBox from './components/InputBox';
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0)

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConverted(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1200)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currenyOptions={options}
                amount={amount}
                onAmountChange={val => setAmount(val)}
                onCurrencyChange={curr => setFrom(curr)}
                selectCurrency={from}
              />
            </div>

            <div className="w-full mt-2 mb-4">
              <InputBox
                label="To"
                currenyOptions={options}
                amount={converted}
                onAmountChange={val => setAmount(val)}
                onCurrencyChange={curr => setTo(curr)}
                selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
