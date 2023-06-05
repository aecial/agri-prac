import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const AuctionNav = () => {
  return (
    <>
      <nav>
        <Link to={"/listings"}>Auction Listings</Link>
        <Link to={"/createNew"}>Create New Auction</Link>
      </nav>
    </>
  );
};

export default AuctionNav;
