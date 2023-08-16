import { useState, useEffect } from "react";
import ListingsTable from "./components/ListingsTable";

async function getListings() {
  const res = await fetch(`http://localhost:3000/api/listings`);
  return res.json();
}

export default function Home() {
  const [listingData, setListingData] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      const data = await getListings();
      console.log("Received data:", data); // You should see your object here
      setListingData(data.listings); // Set state to the array, not the object
    };
    fetchListings();
  }, []);

  // If data hasn't loaded yet, render a loading message
  if (!listingData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ListingsTable listingData={listingData} />
    </>
  );
}
