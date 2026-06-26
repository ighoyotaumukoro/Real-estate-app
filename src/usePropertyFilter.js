import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { property2 } from "./data/Properties2";

export default function usePropertyFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "";
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");

  const name = searchParams.get("name")?.toLowerCase().trim() || "";
  const location = searchParams.get("location")?.toLowerCase().trim() || "";
  const minPrice = Number(searchParams.get("minPrice")) * 1000000 || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) * 1000000 || Infinity;
  const cleanPrice = (price) => {
    let str = String(price)
      .toUpperCase()
      .replace(/[^0-9.M]/g, "");
    if (str.includes("M")) {
      return parseFloat(str.replace("M", "")) * 1000000;
    }
    return Number(str.replace(/[^0-9]/g, ""));
  };

  const results = property2.filter((p) => {
    const priceNum = cleanPrice(p.price);
    const matchName = name ? p.name?.toLowerCase().includes(name) : true;
    const matchLocation = location
      ? p.location?.toLowerCase().includes(location)
      : true;
    const matchPrice = priceNum >= minPrice && priceNum <= maxPrice;
    return matchName && matchLocation && matchPrice;
  });
  let filteredProperty = results;
  if (sort === "low") {
    filteredProperty = [...filteredProperty].sort(
      (a, b) => cleanPrice(a.price) - cleanPrice(b.price),
    );
  } else if (sort === "high") {
    filteredProperty = [...filteredProperty].sort(
      (a, b) => cleanPrice(b.price) - cleanPrice(a.price),
    );
  }
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSearchParams((prev) => {
      if (value) {
        prev.set("sort", value);
      } else {
        prev.delete("sort");
      }
      return prev;
    });
  };
  const displayCount = filteredProperty.length;

  return { filteredProperty, sort, handleSortChange, displayCount };
}
