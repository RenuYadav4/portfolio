import { useState } from "react";
 // Your main page component
import Portfolio from "./Components/Portfolio";
import Demo from "./Components/demo";
// import FallingFlowers from "./Components/FallingFlowers";

export default function App() {
  // const [theme, setTheme] = useState("spring"); // Change theme dynamically

  return (
    // <div className="relative w-screen h-screen overflow-hidden">
    //   {/* Theme Selector */}
    //   <div className="absolute top-5 left-5 z-50">
    //     <select
    //       className="p-2 bg-white border rounded"
    //       onChange={(e) => setTheme(e.target.value)}
    //     >
    //       <option value="spring">Spring</option>
    //       <option value="autumn">Autumn</option>
    //       <option value="winter">Winter</option>
    //     </select>
    //   </div>

    //   {/* Falling Flowers Effect */}
    //   <FallingFlowers theme={theme} />

    //   {/* Portfolio Component */}
    //   <Portfolio />
    // </div>
    <>
     <Portfolio/>
     {/* <Demo/> */}
    </>
  );
}
