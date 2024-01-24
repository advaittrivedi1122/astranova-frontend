import '../index.css'
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="h-screen overflow-hidden bg-landing-page-image bg-cover bg-center">
      <Navbar isLandingPage={true} />
    </div>
  )
}

export default Landing
