// import react from 'react'

// import './App.css'
// import Navbar from './components/common/Navbar'
// import Hero from './components/home/hero'
// import FeatureWork from './components/home/FeatureWork'
// import About from './components/home/About'
// import ServicesGallery from './components/home/ServicesGallery'
// import Booking from './components/common/Booking'
// import FAQFooter from './components/home/FAQFooter'
// import Preloader from './components/Preloader'
// import Auth from './components/pages/Auth'

// function App() {


//   return (
//     <>

//     <Auth />
//     {/* <Preloader />
//      <Navbar />
//      <Hero />
//      <FeatureWork />
//      <About />
//      <ServicesGallery />
//      <Booking />
//      <FAQFooter /> */}
//     </>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Auth from "./components/pages/Auth";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid rgba(212,175,55,0.35)",
            borderRadius: "14px",
            padding: "14px 18px",
          },
        }}
      />

      <Routes>
        {/* Direct access */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Login */}
        <Route path="/login" element={<Auth />} />

        {/* Signup */}
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;