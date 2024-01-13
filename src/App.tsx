import './index.css'
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className='backdrop-blur-s flex flex-col h-full items-center'>
        {/* <h1 className='text-4xl mt-[9rem] text-orange-200 inline-block font-bold'>Buy, Sell and Collect NFTs</h1> */}
        <br />
        {/* <h1 className='text-3xl mt-[27rem] text-with-gradient drop-shadow-2xl inline-block font-bold'>Explore</h1> */}
      </div>
    </div>
  )
}

export default App
