import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout";
import Basket from "./components/basket";
import Profile from "./components/profile";
import Orderhistory from "./components/order-history";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Basket />} />
        <Route path="/order-history" element={<Orderhistory />} />
      </Route>
    </Routes>
  );
}

export default App;
