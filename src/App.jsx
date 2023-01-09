import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/propath/:index" element={<Profile />} />
        </Routes>
        <Home />
      </BrowserRouter>
    </div>
  );
};
export default App;