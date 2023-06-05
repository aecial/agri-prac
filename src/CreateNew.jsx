import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import AuctionNav from "./AuctionNav";
import AuctionListing from "./AuctionListing";
const CreateNew = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [volume, setVolume] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(price);
    console.log(volume);
    return <AuctionListing name={name} price={price} volume={volume} />;
  }
  return (
    <>
      <NavigationBar />
      <AuctionNav />
      <h1>Create a New Listing</h1>
      <form onSubmit={handleSubmit}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        Volume
        <input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateNew;
