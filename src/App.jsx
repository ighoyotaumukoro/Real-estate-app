import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ViewAll,
  Contact,
  About,
  Buy,
  BuyList,
  Buy1,
  Buy2,
  Buy3,
  Rent,
  Rent1,
  Rent2,
  Rent3,
  RentList,
  Lease,
  Lease1,
  Lease2,
  Lease3,
  LeaseList,
  Properties,
  FeaturesBuy1,
  FeaturesBuy2,
  FeaturesBuy3,
  FeaturesLease1,
  FeaturesLease2,
  FeaturesLease3,
  FeaturesRent1,
  FeaturesRent2,
  FeaturesRent3,
  LocationBuy1,
  LocationBuy2,
  LocationBuy3,
  LocationRent1,
  LocationRent2,
  LocationRent3,
  LocationLease1,
  LocationLease2,
  LocationLease3,
} from "./export";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/viewAll", element: <ViewAll /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/buy", element: <Buy /> },
    { path: "/buyList", element: <BuyList /> },
    { path: "/buy1", element: <Buy1 /> },
    { path: "/buy2", element: <Buy2 /> },
    { path: "/buy3", element: <Buy3 /> },
    { path: "/rent", element: <Rent /> },
    { path: "/lease", element: <Lease /> },
    { path: "/rentList", element: <RentList /> },
    { path: "/leaseList", element: <LeaseList /> },
    { path: "/properties", element: <Properties /> },
    { path: "/rent1", element: <Rent1 /> },
    { path: "/rent2", element: <Rent2 /> },
    { path: "/rent3", element: <Rent3 /> },
    { path: "/lease1", element: <Lease1 /> },
    { path: "/lease2", element: <Lease2 /> },
    { path: "/lease3", element: <Lease3 /> },
    { path: "/featuresbuy1", element: <FeaturesBuy1 /> },
    { path: "/featuresbuy2", element: <FeaturesBuy2 /> },
    { path: "/featuresbuy3", element: <FeaturesBuy3 /> },
    { path: "/featuresrent1", element: <FeaturesRent1 /> },
    { path: "/featuresrent2", element: <FeaturesRent2 /> },
    { path: "/featuresrent3", element: <FeaturesRent3 /> },
    { path: "/featureslease1", element: <FeaturesLease1 /> },
    { path: "/featureslease2", element: <FeaturesLease2 /> },
    { path: "/featureslease3", element: <FeaturesLease3 /> },
    { path: "/locationbuy1", element: <LocationBuy1 /> },
    { path: "/locationbuy2", element: <LocationBuy2 /> },
    { path: "/locationbuy3", element: <LocationBuy3 /> },
    { path: "/locationrent1", element: <LocationRent1 /> },
    { path: "/locationrent2", element: <LocationRent2 /> },
    { path: "/locationrent3", element: <LocationRent3 /> },
    { path: "/locationlease1", element: <LocationLease1 /> },
    { path: "/locationlease2", element: <LocationLease2 /> },
    { path: "/locationlease3", element: <LocationLease3 /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
