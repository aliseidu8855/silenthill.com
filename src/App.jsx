import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation , BrowserRouter} from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { LoadingProvider } from "./components/Loading/Loading";

const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const WhatWeDo = React.lazy(() => import("./pages/WhatWeDo/WhatWeDo"));

const App = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsLoading(true);
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (

    <LoadingProvider>
  
      <Navbar />
      
      {/* Global Loading Spinner */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50 z-50">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      )}

      <div
        className={`page-container ${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
            setIsLoading(false);
          }
        }}
      >
        <Suspense
          fallback={
            <div className="spinner-container">
              <ClipLoader color="#36d7b7" />
            </div>
          }
        >
          <Routes location={displayLocation} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />

    </LoadingProvider>

 );
};

export default App;
