import {ethers, Contract} from 'ethers';
import PayLiskAbi from '../ABI/PayLiskAbi.json';






export const connectWallet = async () => {
 try {
      let [signer, provider, PayLiskContract,chainId] = [null, null, null, null]
      if(window.ethereum === null){
            throw new Error("Metamask is not installed")
      }
      const accounts = await window.ethereum.request({
            method:"eth_requestAccounts"
      })

      let chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
      })

      chainId = parseInt(chainIdHex, 16)

      let selectedAccount = accounts[0];
      if(!selectedAccount){
            throw new Error('no ethereum accounts is available')
      }

      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner()

      const PayLiskContractAddress="0x04832298a74f9937D7251d5B5e88C6213C0B946d"


      PayLiskContract = new Contract(PayLiskContractAddress, PayLiskAbi, signer)
   

      return {provider, selectedAccount, PayLiskContract,chainId}




      
 } catch (error) {
      console.error(error);
      throw error
      
 }
}

