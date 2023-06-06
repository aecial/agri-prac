import React from "react";
import NavigationBar from "./NavigationBar";
import AuctionNav from "./AuctionNav";
import AuctionListing from "./AuctionListing";
import { data } from "./data";
const Listings = () => {
  return (
    <>
      <NavigationBar />
      <h1>Auction Page</h1>
      <AuctionNav />
      <h1>Listings</h1>
      <p id="p-id"></p>
      {console.log(data)}
      {data.map((item) => {
        return (
          <AuctionListing
            name={item.itemName}
            price={item.itemPrice}
            volume={1}
          />
        );
      })}
    </>
  );
};

export default Listings;
