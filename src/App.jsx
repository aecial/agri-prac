import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Listings from "./Listings";
import CreateNew from "./CreateNew";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/createNew" element={<CreateNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
