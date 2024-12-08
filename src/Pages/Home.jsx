import Banner from '../Components/Banner';
import ProductSection from '../Components/ProductSection';
import Slider from '../Components/Slider';
import SportsCategory from '../Components/SportsCategory';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div>
        <Banner />
        <ProductSection />
        <SportsCategory/>
        <ContactUs/>
        <Slider/>
    </div>
  );
};

export default Home;
