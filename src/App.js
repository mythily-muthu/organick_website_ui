import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import Pages from "./Pages/Pages.jsx";
import ContactUs from "./Pages/ContactUs.jsx";


function App() {
  return (
    <div className="flex flex-col h-screen w-screen" >
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );


}

export default App;
