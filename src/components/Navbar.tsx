import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyWalletContext } from '../App';
import '../styles/Navbar.css'

const Navbar = ({isLandingPage}:Record<string, boolean>) => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentProvider, setCurrentProvider] = useState(null);
  const [walletAddress, setWalletAddress]: [string, React.Dispatch<React.SetStateAction<string>>] | any = useContext(MyWalletContext)
  const navigate = useNavigate();

  useEffect(()=>{
    let provider = null;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install metamask.")
    }
    setCurrentProvider(provider)
    if (walletAddress) {
      // setWalletAddress(walletAddress);
      setIsConnected(true);
    }
  }, [currentProvider])

  const connectWallet = async () => {
    if (currentProvider) {
      const account = await currentProvider.request({method : "eth_requestAccounts"});
      setIsConnected(true);
      setWalletAddress(account[0])
      console.log("🚀 ~ connectWal ~ account[0]:", account[0])
      navigate("/home")
    }
  }

  return (
    <div className='backdrop-blur-2xl h-14 flex flex-row justify-between items-center'>
      <h1 className="text-3xl m-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          AstraNova
      </h1>
      {isLandingPage && (
        <h1 className='text-3xl text-with-gradient drop-shadow-2xl inline-block font-bold'>Buy, Sell & Collect NFTs</h1>
      )}
      {!isConnected && (
        <button className="h-10 w-30 mr-8 p-2 text-gray-900 font-medium active:bg-slate-200/80 font-['Courier new'] bg-slate-200/70 rounded-md" onClick={()=>{connectWallet()}}>Connect Wallet</button>
      )}
      {isConnected && (
        <button className="h-10 w-30 mr-8 p-2 text-gray-900 font-medium font-['Courier new'] bg-slate-200/70 rounded-md">{`${walletAddress.slice(0,7)}...${walletAddress.slice(walletAddress.length-5, walletAddress.length-1)}`}</button>
      )}
    </div>
  )
}

export default Navbar