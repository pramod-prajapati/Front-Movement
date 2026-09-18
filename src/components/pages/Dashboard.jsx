import react from 'react';
import Preloader from '../../components/Preloader';
import Navbar from '../../components/common/Navbar';
import Hero from '../../components/home/hero';
import FeatureWork from '../../components/home/FeatureWork';
import About from '../../components/home/About';
import ServicesGallery from '../../components/home/ServicesGallery';
import Booking from '../../components/common/Booking';
import FAQFooter from '../../components/home/FAQFooter';

function Dashboard() {
    return (
        <>
            <Preloader />
            <Navbar />
            <Hero />                        
            <FeatureWork />
            <About />
            <ServicesGallery />
            <Booking />
            <FAQFooter />

        </>
    )
}

export default Dashboard;