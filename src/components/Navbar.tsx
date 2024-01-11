import { useState } from 'react';
import '../styles/Navbar.css'
import { ethers } from 'ethers';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  const detectProvider = ()=>{
    let provider = null;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install metamask.")
    }
    console.log("provider",provider)
    return provider;
  }

  const connectWallet = async () => {
    const currentProvider = detectProvider();
    if (currentProvider) {
      const account = await currentProvider.request({method : "eth_requestAccounts"});
      console.log("🚀 ~ connectWal ~ account:", account);
      setIsConnected(true);
    }
  }

  return (
    <div className='backdrop-blur h-15 flex flex-row justify-between items-center'>
      <h1 className="text-3xl m-3 font-bold font-['Courier new'] text-cyan-200">
          AstraNova
      </h1>
      {!isConnected && (
        <button className="h-10 mr-8 p-2 text-gray-900 font-medium active:bg-slate-200/80 font-['Courier new'] bg-slate-200/70 rounded-md" onClick={()=>{connectWallet()}}>Connect Wallet</button>
      )}
      {isConnected && (
        <button className="h-10 mr-8 p-2 text-gray-900 font-medium active:bg-slate-200/80 font-['Courier new'] bg-slate-200/70 rounded-md">Wallet Connected</button>
      )}
    </div>
  )
}

export default Navbar