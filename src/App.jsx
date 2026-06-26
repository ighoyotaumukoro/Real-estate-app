import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from "./components/inc/Herosection";
import PropertyDetail from "./components/inc/PropertyDetails";
import FeaturesDetail from "./components/inc/FeaturesDetails";
import LocationDetail from "./components/inc/LocationDetails";
import SimilarDetail from "./components/inc/SimilarDetails";
import SimilarFeatures from "./components/inc/SimilarFeatures";
import SimilarLocation from "./components/inc/SimilarLocation";
import {
  Home,
  Contact,
  PropertyList,
  Buy1,
  Properties,
  FeaturesBuy1,
  LocationBuy1,
} from "./export";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/property/:slug", element: <PropertyDetail /> },
    { path: "/features/:slug", element: <FeaturesDetail /> },
    { path: "/location/:slug", element: <LocationDetail /> },
    { path: "/similar/:slug", element: <SimilarDetail /> },
    { path: "/similarfeatures/:slug", element: <SimilarFeatures /> },
    { path: "/similarlocation/:slug", element: <SimilarLocation /> },
    { path: "/contact", element: <Contact /> },
    { path: "/propertyList", element: <PropertyList /> },
    { path: "/buy1/:slug", element: <Buy1 /> },
    { path: "/properties", element: <Properties /> },
    { path: "/featuresbuy1/:slug", element: <FeaturesBuy1 /> },
    { path: "/locationbuy1/:slug", element: <LocationBuy1 /> },
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
