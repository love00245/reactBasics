// // import { useState } from 'react';
// // import './App.css';

// // // function App() {
// // //   const [colour, setColour] = useState("grey");

// // //   return (
// // //     <>
// // //       <div className='relative h-screen flex justify-evenly items-end' style={{ backgroundColor: colour }}>
// // //         <div
// // //           className='bg-blue-500 button rounded-lg hover:bg-blue-300 border-black p-2 px-10 mb-20 cursor-pointer'
// // //           onClick={() => setColour('blue')}
// // //         >
// // //           Blue
// // //         </div>
// // //         <div
// // //           className='bg-blue-500 button rounded-lg hover:bg-blue-300 border-black p-2 px-10 mb-20 cursor-pointer'
// // //           onClick={() => setColour('red')}
// // //         >
// // //           Red
// // //         </div>
// // //         <div
// // //           className='bg-blue-500 button rounded-lg hover:bg-blue-300 border-black p-2 px-10 mb-20 cursor-pointer'
// // //           onClick={() => setColour('green')}
// // //         >
// // //           Green
// // //         </div>
// // //         <div
// // //           className='bg-blue-500 button rounded-lg hover:bg-blue-300 border-black p-2 px-10 mb-20 cursor-pointer'
// // //           onClick={() => setColour('cyan')}
// // //         >
// // //           Cyan
// // //         </div>
// // //         <div
// // //           className='bg-blue-500 button rounded-lg hover:bg-blue-300 border-black p-2 px-10 mb-20 cursor-pointer'
// // //           onClick={() => setColour('grey')}
// // //         >
// // //           Grey
// // //         </div>
// // //         <div
// // //           className='bg-blue-500 button rounded-lg hover:bg-blue-300 border-black p-2 px-10 mb-20 cursor-pointer'
// // //           onClick={() => setColour('pink')}
// // //         >
// // //           Pink
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }


// // function App() {

// //   const dummy = passGenerator({})
// //   const [length, setLength] = useState(10);
// //   const [useChars, setCharProp] = useState(false);
// //   const [useNumber, setNumberProp] = useState(false);
// //   const [pass, setPass] = useState(dummy);

// //   console.log(dummy)
// //   function passGenerator({ useChars = false, length = 10, useNumber = false }) {
// //     console.log(length);

// //     let chars = "qwertyuiopasdfghjklzxcvbnm";
// //     let numbers = "0987654321";
// //     let generatedPass = '';  // Renamed this variable to avoid conflict
// //     let all_useables = "";

// //     if (useChars) {
// //       all_useables += chars;
// //     }
// //     if (useNumber) {
// //       all_useables += numbers;
// //     }
// //     if (!all_useables) {
// //       return "134jbuh8u2e";
// //     }

// //     for (let i = 0; i < length; i++) {
// //       const rand_char = all_useables[Math.floor(Math.random() * all_useables.length)];
// //       generatedPass += rand_char;
// //     }

// //     return generatedPass;
// //   }

// //   function handleNumberCheckboxChange(event) {
// //     const isChecked = event.target.checked;
// //     setNumberProp(isChecked);
// //     return isChecked;
// //   }

// //   function handleCharsCheckboxChange(event) {
// //     const isChecked = event.target.checked;
// //     setCharProp(isChecked);
// //     return isChecked;
// //   }
// //   function handleLengthChange(event) {
// //     const length = event.target.value;
// //     setLength(length);
// //     return length;
// //   }


// //   return (<>
// //     <div className='flex justify-center h-screen flex-row'>
// //       <div className='bg-slate-500 mt-10 w-[700px] h-36 rounded-lg flex '>
// //         <span className='absolute bg-black border-2 border-b-orange-300 mt-2 rounded-2xl w-[400px] h-9 pt-1 ml-24 text-white text-center '>Pass generator</span>

// //         <span className='absolute mt-[100px] ml-[35px]'>
// //           <span className='mr-10'> <input type="text" className='bg-slate-200 rounded-xl mr-10' onInput={(e) => {
// //             let len = handleLengthChange(e);
// //             console.log(len);

// //             let pass = passGenerator({ length: len, useNumber, useChars })

// //             console.log(pass);
// //             setPass(pass)

// //           }} /> Length({length})</span>
// //           <input type="checkbox" className='mr-1 size-4' onChange={(e) => {
// //             console.log(e);
// //             let checked = handleNumberCheckboxChange(e)
// //             let pass = passGenerator({ length, useNumber: checked, useChars })
// //             setPass(pass)
// //           }} /> Numbers
// //           <input type="checkbox" className='mr-1 ml-2 size-4' onChange={(e) => {
// //             let checked = handleCharsCheckboxChange(e)
// //             let pass = passGenerator({ useChars: checked, length, useNumber })
// //             setPass(pass)
// //           }} /> Characters
// //         </span>

// //         <div className=' bg-white  w-[500px] ml-8 h-10 rounded-xl mt-12' placeholder='PASSWORD HERE'>
// //           {pass}
// //         </div>
// //         <div className=' bg-blue-400  w-[50px] ml-8 h-10 rounded-xl mt-9 text-center pt-2 hover:bg-blue-600 cursor-pointer'>
// //           Copy
// //         </div>

// //       </div>

// //     </div>
// //   </>)
// // }

// // export default App;

// import { useState ,useEffect , useCallback } from "react";
// import { InputBox } from "./components/index";
// import useCurrencyInfo from "./hooks/useCurrencyInfo";


// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   // This hook should return currency conversion rates
//   const currencyInfo = useCurrencyInfo(from);

//   // Ensure currencyInfo is available before accessing it
//   const allOptions = currencyInfo ? Object.keys(currencyInfo) : [];

//   useEffect(() => {
//     // Convert amount when 'amount', 'from', or 'to' changes
//     convert();
//   }, [amount, convert, from, to]);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   const convert = useCallback(() => {
//     if (currencyInfo && currencyInfo[to]) {
//       setConvertedAmount(amount * currencyInfo[to]);
//     }
//   }, [amount, currencyInfo, to]);

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?cs=tinysrgb&w=1200')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault(); // Prevent the default form submission
//               convert(); // Call convert function
//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={allOptions} // Fixed typo from 'currecyOptions' to 'currencyOptions'
//                 onCurrencyChange={(cur) => setFrom(cur)}
//                 selectCurrency={from}
//                 onAmountChange={(amt) => setAmount(amt)}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 Swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={allOptions} // Fixed typo
//                 onCurrencyChange={(cur) => setTo(cur)}
//                 selectCurrency={to}
//                 onAmountChange={(amt) => setAmount(amt)}
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert
//             </button>
//           </form>

//       </div>
//     </div>
//   );
// }

// export default App;
