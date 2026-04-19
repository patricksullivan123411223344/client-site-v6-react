/*
Name: Patrick Sullivan
Date: 4/19/2026
File: OfficeMapSection.jsx
Description: About page map section using React state, refs, and effects.
*/
import { useEffect, useRef, useState } from "react";

const API_KEY = "AIzaSyCcJfQtl7zxKFtpISZ4Uza01Yx_4kX1oN0";
const OFFICE_ADDRESS = "181 Post Road West, Westport, CT";

export default function OfficeMapSection() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [geoStatus, setGeoStatus] = useState("Ready");
  const [geoResult, setGeoResult] = useState("");
  const [officeLoc, setOfficeLoc] = useState(null);
  const [mapsReady, setMapsReady] = useState(false);

  async function geocodeAddress(address) {
    setGeoStatus("Loading office coordinates...");
    setGeoResult("");

    const params = new URLSearchParams({
      address,
      key: API_KEY,
    });

    const url = `https://maps.googleapis.com/maps/api/geocode/json?${params.toString()}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.results?.length) {
      throw new Error(`Geocode status: ${data.status}`);
    }

    return data.results[0].geometry.location;
  }

  function applyLocationToMapAndMarker(loc) {
    const mapEl = mapRef.current;
    const markerEl = markerRef.current;

    if (!mapEl) return;

    const position = {
      lat: Number(loc.lat),
      lng: Number(loc.lng),
    };

    mapEl.center = position;
    mapEl.zoom = 10;

    if (markerEl) {
      markerEl.position = position;
    }
  }

  function handleRecenter() {
    if (!officeLoc) return;

    setGeoStatus("Recentered to office");
    applyLocationToMapAndMarker(officeLoc);
  }

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com/maps/api/js"]'
    );

    function markReady() {
      setMapsReady(true);
    }

    if (existingScript) {
      if (existingScript.getAttribute("data-loaded") === "true") {
        markReady();
      } else {
        existingScript.addEventListener("load", markReady, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=maps,marker&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      markReady();
    };

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!mapsReady) return;

    async function loadOfficeCoords() {
      try {
        const loc = await geocodeAddress(OFFICE_ADDRESS);
        setOfficeLoc(loc);
        setGeoStatus("Office coordinates loaded");
        setGeoResult(`Lat: ${loc.lat.toFixed(5)} Lng: ${loc.lng.toFixed(5)}`);
        applyLocationToMapAndMarker(loc);
      } catch (err) {
        setGeoStatus("Couldn't load office coordinates.");
        setGeoResult(`Error: ${err.message}`);
      }
    }

    loadOfficeCoords();
  }, [mapsReady]);

  useEffect(() => {
    if (!mapsReady) return;

    const mapEl = mapRef.current;
    if (!mapEl) return;

    function handleMapClick(e) {
      const ll = e?.detail?.latLng;
      if (!ll) return;

      const lat = typeof ll.lat === "function" ? ll.lat() : ll.lat;
      const lng = typeof ll.lng === "function" ? ll.lng() : ll.lng;

      if (typeof lat !== "number" || typeof lng !== "number") return;

      setGeoStatus("Clicked on map:");
      setGeoResult(`Lat: ${lat.toFixed(5)} Lng: ${lng.toFixed(5)}`);
    }

    mapEl.addEventListener("gmp-click", handleMapClick);

    return () => {
      mapEl.removeEventListener("gmp-click", handleMapClick);
    };
  }, [mapsReady]);

  return (
    <section className="mapLocationSection">
    <h2 className="mapTitle">Tap for Directions to Office:</h2>

    <div className="googleMapWrapper">
        <gmp-map
        ref={mapRef}
        id="officeMap"
        className="googleMapRender"
        style={{ height: "500px" }}
        >
        <gmp-marker
            ref={markerRef}
            id="officeMarker"
            title="Katherine's Office"
        ></gmp-marker>
        </gmp-map>
    </div>

    <div className="mapStatus">
        <p id="geoStatus">{geoStatus}</p>
        <p id="geoResult">{geoResult}</p>
        <button id="recenterBtn" type="button" onClick={handleRecenter}>
        Recenter to Office
        </button>
    </div>
    </section>
  );
}