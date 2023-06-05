import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Listings from "./Listings";
import CreateNew from "./CreateNew";
const AuctionNav = () => {
  return (
    <>
      <nav>
        <Link to={"/listings"}>Auction Listings</Link>
        <Link to={"/createNew"}>Create New Auction</Link>
        <Routes>
          <Route path="/listings" element={<Listings />} />
          <Route path="/createNew" element={<CreateNew />} />
        </Routes>
      </nav>
    </>
  );
};

export default AuctionNav;
