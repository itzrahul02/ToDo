// import React, { useState } from "react";

// function Home() {
//   const [value, setValue] = useState("");
//   const [listdata, setListdata] = useState([]);

//   function add() {
//     setListdata([...listdata, value]);
//     setValue(""); // Clear input after adding 
//   }
        
//   function removeActivity(index) {
//     const updatedList = listdata.filter((_, id) => id !== index);
//     setListdata(updatedList);
//   }

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={value} // Set value to input for controlled component
//           className="border-2 border-black"
//           onChange={(e) => setValue(e.target.value)}
//         /> 
//         <button className="border-2 border-black" onClick={add}>
//           Add
//         </button>
//       </div>
//       {listdata.map((data, index) => (
//         <div key={index} className="flex items-center">
//           <div className="border-black border-2">{data}</div>
//           <button onClick={() => removeActivity(index)}>
//             Remove(-)
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Home;

// ToDo using ContextAPI
