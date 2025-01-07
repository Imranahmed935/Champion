import { useContext } from "react";
import Banner from "../Components/Banner";
import ProductSection from "../Components/ProductSection";
import Slider from "../Components/Slider";
import SportsCategory from "../Components/SportsCategory";
import ContactUs from "./ContactUs";
import { AuthContext } from "../Provider/AuthProvider";
import Offer from "../Components/NewOffer/Offer";
import Football from "../Components/Football/Football";
import Cricket from "../Components/Cricket/Cricket";
import Badminton from "../Components/Badminton/Badminton";

const Home = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : ""}`}>
      <Banner />
      <Offer />
      <ProductSection />
      <Football/>
      <Cricket/>
      <Badminton/>
      {/* <SportsCategory /> */}
      {/* <Slider /> */}
      <ContactUs />
    </div>
  );
};

export default Home;
