import './index.css'
import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';

const MyWalletContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>] | null>(null);
function App() {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <MyWalletContext.Provider value={[walletAddress, setWalletAddress]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyWalletContext.Provider>
  )
}

export default App
export {MyWalletContext}
