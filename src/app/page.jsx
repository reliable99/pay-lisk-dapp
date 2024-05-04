'use client'
import Wallet from "./components/wallet/Wallet";
import Navigation from "../app/components/navigation/Navigation";
import { PayLiskProvider } from "./context/PayLiskContext";




export default function Home() {
  return (
    <main>
      <Wallet>
        <Navigation />
        <PayLiskProvider></PayLiskProvider>
      </Wallet>
    </main>
  );
}

// // Home.jsx
// import { useClient } from 'next/client';
// import Wallet from './components/wallet/Wallet';
// import Navigation from '../app/components/navigation';
// import { PayLiskProvider } from './context/PayLiskContext';

// export default function Home() {
//   // Mark Home component as a client-side component
//   useClient();

//   return (
//     <main>
//       <Wallet>
//         <Navigation />
//         <PayLiskProvider></PayLiskProvider>
//       </Wallet>
//     </main>
//   );
// }

