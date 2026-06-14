import Home from "./components/pages/Home";
import ViewAll from "./components/pages/ViewAll";
import MyNavbar from "./components/inc/Navbar";
import Headsection from "./components/inc/Headsection";
import Herosection from "./components/inc/Herosection";
import Footer from "./components/inc/Footer";
import WhyBoc from "./components/inc/WhyBoc";
import Reviews from "./components/inc/Reviews";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Buy from "./components/pages/Buy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyList from "./components/pages/BuyList";
import Buy1 from "./components/pages/Buy1";
import Buy2 from "./components/pages/Buy2";
import Buy3 from "./components/pages/Buy3";
import Rent from "./components/pages/Rent";
import RentList from "./components/pages/RentList";
import Lease from "./components/pages/Lease";
import LeaseList from "./components/pages/LeaseList";
import Properties from "./components/pages/Properties";
import Rent1 from "./components/pages/Rent1";
import Rent2 from "./components/pages/Rent2";
import Rent3 from "./components/pages/Rent3";
import Lease1 from "./components/pages/Lease1";
import Lease2 from "./components/pages/Lease2";
import Lease3 from "./components/pages/Lease3";
import FeaturesBuy1 from "./components/pages/FeaturesBuy1";
import FeaturesBuy2 from "./components/pages/FeaturesBuy2";
import FeaturesBuy3 from "./components/pages/FeaturesBuy3";
import FeaturesRent1 from "./components/pages/FeaturesRent1";
import FeaturesRent2 from "./components/pages/FeaturesRent2";
import FeaturesRent3 from "./components/pages/FeaturesRent3";
import FeaturesLease1 from "./components/pages/FeaturesLease1";
import FeaturesLease2 from "./components/pages/FeaturesLease2";
import FeaturesLease3 from "./components/pages/FeaturesLease3";
import LocationBuy1 from "./components/pages/LocationBuy1";
import LocationBuy2 from "./components/pages/LocationBuy2";
import LocationBuy3 from "./components/pages/LocationBuy3";
import LocationRent1 from "./components/pages/LocationRent1";
import LocationRent2 from "./components/pages/LocationRent2";
import LocationRent3 from "./components/pages/LocationRent3";
import LocationLease1 from "./components/pages/LocationLease1";
import LocationLease2 from "./components/pages/LocationLease2";
import LocationLease3 from "./components/pages/LocationLease3";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewAll" element={<ViewAll />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buyList" element={<BuyList />} />
        <Route path="/buy1" element={<Buy1 />} />
        <Route path="/buy2" element={<Buy2 />} />
        <Route path="/buy3" element={<Buy3 />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/lease" element={<Lease />} />
        <Route path="/rentList" element={<RentList />} />
        <Route path="/leaseList" element={<LeaseList />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/rent1" element={<Rent1 />} />
        <Route path="/rent2" element={<Rent2 />} />
        <Route path="/rent3" element={<Rent3 />} />
        <Route path="/lease1" element={<Lease1 />} />
        <Route path="/lease2" element={<Lease2 />} />
        <Route path="/lease3" element={<Lease3 />} />
        <Route path="/featuresbuy1" element={<FeaturesBuy1 />} />
        <Route path="/featuresbuy2" element={<FeaturesBuy2 />} />
        <Route path="/featuresbuy3" element={<FeaturesBuy3 />} />
        <Route path="/featuresrent1" element={<FeaturesRent1 />} />
        <Route path="/featuresrent2" element={<FeaturesRent2 />} />
        <Route path="/featuresrent3" element={<FeaturesRent3 />} />
        <Route path="/featureslease1" element={<FeaturesLease1 />} />
        <Route path="/featureslease2" element={<FeaturesLease2 />} />
        <Route path="/featureslease3" element={<FeaturesLease3 />} />
        <Route path="/locationbuy1" element={<LocationBuy1 />} />
        <Route path="/locationbuy2" element={<LocationBuy2 />} />
        <Route path="/locationbuy3" element={<LocationBuy3 />} />
        <Route path="/locationrent1" element={<LocationRent1 />} />
        <Route path="/locationrent2" element={<LocationRent2 />} />
        <Route path="/locationrent3" element={<LocationRent3 />} />
        <Route path="/locationlease1" element={<LocationLease1 />} />
        <Route path="/locationlease2" element={<LocationLease2 />} />
        <Route path="/locationlease3" element={<LocationLease3 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
