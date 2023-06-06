import React from "react";

const AuctionListing = ({ name, price, volume }) => {
  return (
    <>
      <div className="auction-listing">
        <h1>{name}</h1>
        <h2>{price} pesos</h2>
        <h4>{volume} kilogram(s)</h4>
      </div>
    </>
  );
};

export default AuctionListing;
