import Navbar from "./components/tailwindNavbar";
import HeroSection from "./components/tailwindHero";
import Template from "./components/templates";
import FeaturePack from "./components/featurePack";
import FeedBack from "./components/feedback";
import CallOut from "./components/callout";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Template></Template>
      <FeaturePack></FeaturePack>
      <FeedBack></FeedBack>
      <CallOut></CallOut>
      <Footer></Footer>
    </div>
  );
} 
 

 
