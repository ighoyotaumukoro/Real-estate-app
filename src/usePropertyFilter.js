import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const parsePrice = (val) => {
  if (val == null || val === "") return null;
  const str = String(val).toUpperCase().replace(/,/g, "");
  const num = parseFloat(str.replace(/[^0-9.]/g, ""));
  if (isNaN(num)) return null;
  if (str.includes("M")) return num * 1_000_000;
  if (str.includes("K")) return num * 1_000;
  if (num < 1000) return num * 1_000_000;
  return num;
};

export const usePropertyFilter = (properties = []) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [bedroom, setBedroom] = useState(searchParams.get("bedroom") || "");
  const [bathroom, setBathroom] = useState(searchParams.get("bathroom") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  const filteredProperty = useMemo(() => {
    
    if (!name && !location && !minPrice && !maxPrice && !bedroom && !bathroom && !sort) {
      console.log("No filters active. Result count:", properties.length);
      return properties;
    }

    const min = parsePrice(minPrice);
    const max = parsePrice(maxPrice);
    const bed = bedroom ? Number(bedroom) : null;
    const bath = bathroom ? Number(bathroom) : null;

    let list = properties.filter((p) => {
      const price = parsePrice(p.price);
      const matchName = !name || String(p.name || "").toLowerCase().includes(name.toLowerCase());
      const matchLocation = !location || String(p.location || "").toLowerCase().includes(location.toLowerCase());
      const matchMin = min === null || price === null || price >= min;
      const matchMax = max === null || price === null || price <= max;
      const bedNum = parseInt(String(p.bedroom).replace(/[^0-9]/g, ""));
      const bathNum = parseInt(String(p.bathroom).replace(/[^0-9]/g, ""));
      const matchBedroom = bed === null || isNaN(bedNum) || bedNum >= bed;
      const matchBathroom = bath === null || isNaN(bathNum) || bathNum >= bath; 

      
      return (
        matchName &&
        matchLocation &&
        matchMin &&
        matchMax &&
        matchBedroom &&
        matchBathroom
      );
    });

    if (sort === "low") {
      list = [...list].sort((a, b) => (parsePrice(a.price) || 0) - (parsePrice(b.price) || 0));
    }
    if (sort === "high") {
      list = [...list].sort((a, b) => (parsePrice(b.price) || 0) - (parsePrice(a.price) || 0));
    }

    console.log("Filters:", { name, location, minPrice, maxPrice, bedroom, bathroom, sort });
    console.log("Result count:", list.length);
    return list;
  }, [properties, name, location, minPrice, maxPrice, bedroom, bathroom, sort]);

  const updateParam = (key, setter) => (e) => {
    const val = e.target.value;
    setter(val);
    const newParams = new URLSearchParams(searchParams);
    val ? newParams.set(key, val) : newParams.delete(key);
    setSearchParams(newParams);
  };

  return {
    filteredProperty,
    filters: { name, location, minPrice, maxPrice, bedroom, bathroom, sort },
    handlers: {
      setName: updateParam("name", setName),
      setLocation: updateParam("location", setLocation),
      setMinPrice: updateParam("minPrice", setMinPrice),
      setMaxPrice: updateParam("maxPrice", setMaxPrice),
      setBedroom: updateParam("bedroom", setBedroom),
      setBathroom: updateParam("bathroom", setBathroom),
      setSort: updateParam("sort", setSort),
      resetAll: () => {
        setName("");
        setLocation("");
        setMinPrice("");
        setMaxPrice("");
        setBedroom("");
        setBathroom("");
        setSort("");
        setSearchParams(new URLSearchParams());
      },
    },
  };
};