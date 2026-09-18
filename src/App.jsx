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


import {
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import { Toaster } from "react-hot-toast"   

import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./components/pages/Auth";


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
          success: {
            iconTheme: {
              primary: "#d4af37",
              secondary: "#111",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#111",
            },
          },
        }}
      />




      <Routes>

        {/* Public */}
        <Route
          path="/"
          element={<Auth />}

        />


        <Route
          path="/login"
          element={<Auth />}
        />

        <Route
          path="/signup"
          element={<Auth />}
        />


        {/* Protected */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Route>

      </Routes>
    </>
  );
}

export default App;