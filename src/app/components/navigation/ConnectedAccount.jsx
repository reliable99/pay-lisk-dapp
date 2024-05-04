import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const ConnectedAccount = () => {
 const { selectedAccount } = useContext(Web3Context);
 console.log(selectedAccount);
 return (
   <div className="p-5">
     <h2 className="text-lg font-semibold">Connected Account</h2>
     <p className="py-2">{selectedAccount}</p>
   </div>
 );
};

export default ConnectedAccount;
