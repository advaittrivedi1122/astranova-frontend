import Navbar from "../components/Navbar"

function Home () {
    return (
        <div className="bg-gray-900 h-screen">
            <Navbar isLandingPage={false} />
            <div className="h-[calc(100%_-_3.5rem)] flex items-center justify-center">
            <h1 className="text-white text-2xl font-bold">NFTs Here</h1>
            </div>
        </div>
    )
}

export default Home