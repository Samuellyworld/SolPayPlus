// import components that makes the Landing Page
import Footer from "../components/footer/footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/hero-section/hero-section";
import SplashSection from "../components/splash-section/splash-section";

// landing page JSX Component
const LandingPage: () => JSX.Element = () => {
  return (
    <div className="landing">
      <div className="bg">
        <Header />
        <SplashSection />
      </div>
      <HeroSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
