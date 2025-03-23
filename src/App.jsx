// import "./App.css";
import Layout2 from "./Components/Layout2";
import Portfolio from "./Components/Portfolio";
import BouncyButton from "./Framermotion/BouncyButton";
import Button from "./Framermotion/Button";
import FadeInButton from "./Framermotion/EntranceExit";
import LoadingEffect from "./Framermotion/LoadingEffect";
import Ripple from "./Framermotion/RippleEffect";
import GlowButton from "./Framermotion/SpecialEffect";

function App() {
  return (
    <>
     <div className="block md:hidden">
        <Layout2 /> {/*Mobile Layout (Below 768px)*/}
      </div>
      <div className="hidden md:block">
        <Portfolio /> {/* Desktop Layout (Above 1024px) */}
      </div>
    </>
  // <>
  // {/* <Button/> */}
  // {/* <Ripple/> */}
  // {/* <LoadingEffect/> */}

  // {/* <FadeInButton/> */}
  // {/* <GlowButton/> */}
  // {/* <BouncyButton/> */}
  // </>
    

  );
}

export default App;