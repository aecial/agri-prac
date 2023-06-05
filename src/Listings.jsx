import React from "react";
import NavigationBar from "./NavigationBar";
import AuctionNav from "./AuctionNav";
import AuctionListing from "./AuctionListing";

const Listings = () => {
  return (
    <>
      <NavigationBar />
      <AuctionNav />
      <h1>Listings</h1>
      <AuctionListing name="garlic" price={12} volume={12} />
    </>
  );
};

export default Listings;
