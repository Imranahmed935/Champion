import { useContext } from 'react';
import Banner from '../Components/Banner';
import ProductSection from '../Components/ProductSection';
import Slider from '../Components/Slider';
import SportsCategory from '../Components/SportsCategory';
import ContactUs from './ContactUs';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
  const {darkMode} = useContext(AuthContext);
  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : ''}`}>
        <Banner />
        <ProductSection />
        <SportsCategory/>
        <Slider/>
        <ContactUs/>
    </div>
  );
};

export default Home;
