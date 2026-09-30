import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "15px 30px",
      backgroundColor: "#1a1a2e",
      borderBottom: "2px solid #16213e"
    }}>
      <Link to="/products" style={{
        color: "#e94560",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>🛒 Sản phẩm</Link>
      <Link to="/help" style={{
        color: "#0f3460",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>❓ Help</Link>
      <Link to="/about" style={{
        color: "#0f3460",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>ℹ️ About</Link>
    </nav>
  );
}

export default Nav;