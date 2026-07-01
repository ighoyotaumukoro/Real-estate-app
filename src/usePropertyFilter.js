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
  const [selectedAmenities, setSelectedAmenities] = useState(() =>
    searchParams.getAll("amenities").filter(Boolean),
  );
  const [showAmenities, setShowAmenities] = useState(false);
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  const bathroomOptions = [
    { label: "Any", value: 0 },
    { label: "1+", value: 1 },
    { label: "2+", value: 2 },
    { label: "3+", value: 3 },
    { label: "4+", value: 4 },
    { label: "5+", value: 5 },
    { label: "6+", value: 6 },
    { label: "7+", value: 7 },
  ];

  const allAmenities = useMemo(
    () =>
      [...new Set((properties || []).flatMap((p) => p.amenities || []))].sort(),
    [properties],
  );

  const filteredProperty = useMemo(() => {
    if (
      !name &&
      !location &&
      !minPrice &&
      !maxPrice &&
      bedroom === 0 &&
      bathroom === 0 &&
      !sort &&
      selectedAmenities.length === 0
    ) {
      return properties;
    }

    const min = parsePrice(minPrice);
    const max = parsePrice(maxPrice);
    const bed = bedroom ? Number(bedroom) : null;
    const bath = bathroom ? Number(bathroom) : null;

    let list = properties.filter((p) => {
      const price = parsePrice(p.price);
      const matchName =
        !name ||
        String(p.name || "")
          .toLowerCase()
          .includes(name.toLowerCase());
      const matchLocation =
        !location ||
        String(p.location || "")
          .toLowerCase()
          .includes(location.toLowerCase());
      const matchMin = min === null || price === null || price >= min;
      const matchMax = max === null || price === null || price <= max;
      const bedNum = parseInt(String(p.bedroom).replace(/[^0-9]/g, ""));
      const bathNum = parseInt(String(p.bathroom).replace(/[^0-9]/g, ""));
      const matchBedroom = bed === null || isNaN(bedNum) || bedNum >= bed;
      const matchBathroom = bath === null || isNaN(bathNum) || bathNum >= bath;
      const matchAmenities =
        (selectedAmenities?.length ?? 0) === 0 ||
        (selectedAmenities || []).every((a) =>
          (p.amenities || [])
            .map((x) => String(x || "").toLowerCase())
            .includes(String(a || "").toLowerCase()),
        );
      return (
        matchName &&
        matchLocation &&
        matchMin &&
        matchMax &&
        matchBedroom &&
        matchBathroom &&
        matchAmenities
      );
    });

    if (sort === "low") {
      list = [...list].sort(
        (a, b) => (parsePrice(a.price) || 0) - (parsePrice(b.price) || 0),
      );
    }
    if (sort === "high") {
      list = [...list].sort(
        (a, b) => (parsePrice(b.price) || 0) - (parsePrice(a.price) || 0),
      );
    }

    return list;
  }, [
    properties,
    name,
    location,
    minPrice,
    maxPrice,
    bedroom,
    bathroom,
    sort,
    selectedAmenities,
  ]);

  const updateParam =
  (key, setter, isNumber = false, isArray = false) =>
  (value) => {
    // Accept either a raw value (e.g. toggleAmenity("Pool"))
    // or a DOM event (e.g. onChange={handlers.setName})
    const val = value && value.target !== undefined ? value.target.value : value;

    const newParams = new URLSearchParams(searchParams);

    if (isArray) {
      const current = searchParams.getAll(key);
      const next = current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val];
      newParams.delete(key);
      next.forEach((v) => newParams.append(key, v));
      setter(next);
    } else {
      if (!val || val === "") {
        newParams.delete(key);
        setter(isNumber ? "" : "");
      } else {
        newParams.set(key, val);
        setter(isNumber ? Number(val) : val);
      }
    }
    setSearchParams(newParams);
  };

  return {
    filteredProperty,
    filters: {
      name,
      location,
      bathroomOptions,
      minPrice,
      maxPrice,
      bedroom,
      bathroom,
      sort,
      selectedAmenities: selectedAmenities || [],
      allAmenities: allAmenities || [],
      showAmenities,
    },
    handlers: {
      setName: updateParam("name", setName),
      setLocation: updateParam("location", setLocation),
      setMinPrice: updateParam("minPrice", setMinPrice),
      setMaxPrice: updateParam("maxPrice", setMaxPrice),
      setBedroom: updateParam("bedroom", setBedroom),
      setBathroom: updateParam("bathroom", setBathroom),
      setSort: updateParam("sort", setSort),
      toggleAmenity: updateParam("amenities", setSelectedAmenities, false, true),
      setShowAmenities,
      resetAll: () => {
        setName("");
        setLocation("");
        setMinPrice("");
        setMaxPrice("");
        setBedroom("");
        setBathroom("");
        setSort("");
        setSelectedAmenities([]);
        setShowAmenities(false);
        setSearchParams(new URLSearchParams());
      },
    },
  };
};