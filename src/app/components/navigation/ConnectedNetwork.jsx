// import { useContext } from "react";
// import Web3Context from "../../context/Web3Context";


// const ConnectedNetwork = () => {
//   const { chainId } = useContext(Web3Context);
//   if (chainId === 4202) {
//     return (
//       <>
//         <p>Connected Account</p>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <>Connected Account</>
//         <>Unsupported</>
//       </>
//     );
//   }
// };

// export default ConnectedNetwork;


import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const ConnectedNetwork = () => {
  const { chainId } = useContext(Web3Context);
  if (chainId === 4202) {
    return (
      <div className="p-5">
        <h2 className="text-lg font-semibold">Connected Account</h2>
        <p className="py-2">Sepolia Lisk</p>
      </div>
    );
  } else {
    return (
      <div className="p-5">
        <h2 className="text-lg font-semibold">Connected Account</h2>
        <p className="py-2">Unsupported</p>
      </div>
    );
  }
};

export default ConnectedNetwork;
