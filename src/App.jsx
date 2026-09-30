import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Help from "./pages/Help";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Nav />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
