// import { useState } from "react";
// import ContextParent from './ContextParent';

// function App() {
//   const [stamina, setStamina] = useState(100);
//   const [clicks, setClicks] = useState(0);

//   const handleCode = () => {
//     let newClicks = clicks + 1;
//     setClicks(newClicks);

//     let damage = 2;

//     // Every 5th click
//     if (newClicks % 5 === 0) {
//       damage = 15;
//     }

//     let newStamina = stamina - damage;

//     // Prevent stamina below 0
//     if (newStamina < 0) {
//       newStamina = 0;
//     }

//     setStamina(newStamina);
//   };

//   return (
//     <div>
//       <h1>Developer Stamina</h1>

//       <h2>Stamina: {stamina}</h2>

//       <button
//         onClick={handleCode}
//         disabled={stamina <= 0}
//       >
//         {stamina <= 0
//           ? "Burnout! Rest Required"
//           : "Write Code"}
//       </button>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import ContextParent from './ContextParent'
import ContextData from './ContextData'


export default function App() {
  return (
    <div>
    <ContextData.Provider value="paavan">
      <ContextParent/>
    </ContextData.Provider>

    </div>
  )
}
