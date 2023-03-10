// import components that makes the Landing Page

import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import HeroSection from "../components/hero-section/hero-section";
import SplashSection from "../components/splash-section/splash-section";

const LandingPage = () => {
    return (
      <div className="landing">
        <div className="bg">
         <Header/>
         <SplashSection/>
        </div>
        <HeroSection />
        <Footer/>
      </div>
      );
}

export default LandingPage;

