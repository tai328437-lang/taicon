import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setQuantity("");
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1 style={{ color: "#e94560" }}>🛒 Quản lý sản phẩm</h1>

      {/* Form nhập sản phẩm */}
      <div style={{
        background: "#1a1a2e",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "30px",
        border: "1px solid #16213e"
      }}>
        <h2 style={{ color: "#e94560", marginTop: 0 }}>📝 Nhập sản phẩm</h2>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "flex-end"
        }}>
          <div style={{ flex: "1", minWidth: "180px" }}>
            <label style={{ display: "block", marginBottom: "6px", color: "#a0a0b0", fontSize: "14px" }}>
              Tên sản phẩm
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên sản phẩm..."
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #2e303a",
                background: "#16171d",
                color: "#f3f4f6",
                fontSize: "15px",
                boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ flex: "1", minWidth: "140px" }}>
            <label style={{ display: "block", marginBottom: "6px", color: "#a0a0b0", fontSize: "14px" }}>
              Giá (VNĐ)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Nhập giá..."
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #2e303a",
                background: "#16171d",
                color: "#f3f4f6",
                fontSize: "15px",
                boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ flex: "1", minWidth: "120px" }}>
            <label style={{ display: "block", marginBottom: "6px", color: "#a0a0b0", fontSize: "14px" }}>
              Số lượng
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Nhập SL..."
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #2e303a",
                background: "#16171d",
                color: "#f3f4f6",
                fontSize: "15px",
                boxSizing: "border-box"
              }}
            />
          </div>
          <button type="submit" style={{
            padding: "10px 28px",
            background: "#e94560",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
            minWidth: "120px"
          }}>
            ➕ Thêm
          </button>
        </form>
      </div>

      {/* Danh sách sản phẩm đã nhập */}
      <div style={{
        background: "#1a1a2e",
        padding: "25px",
        borderRadius: "12px",
        border: "1px solid #16213e"
      }}>
        <h2 style={{ color: "#e94560", marginTop: 0 }}>
          📋 Sản phẩm đã nhập ({products.length})
        </h2>

        {products.length === 0 ? (
          <p style={{ color: "#a0a0b0", fontStyle: "italic" }}>
            Chưa có sản phẩm nào. Hãy nhập sản phẩm ở form bên trên!
          </p>
        ) : (
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left"
          }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e94560" }}>
                <th style={{ padding: "12px", color: "#f3f4f6" }}>STT</th>
                <th style={{ padding: "12px", color: "#f3f4f6" }}>Tên sản phẩm</th>
                <th style={{ padding: "12px", color: "#f3f4f6" }}>Giá (VNĐ)</th>
                <th style={{ padding: "12px", color: "#f3f4f6" }}>Số lượng</th>
                <th style={{ padding: "12px", color: "#f3f4f6" }}>Thành tiền</th>
                <th style={{ padding: "12px", color: "#f3f4f6" }}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} style={{
                  borderBottom: "1px solid #2e303a",
                  transition: "background 0.2s"
                }}>
                  <td style={{ padding: "12px", color: "#a0a0b0" }}>{index + 1}</td>
                  <td style={{ padding: "12px", color: "#f3f4f6", fontWeight: "500" }}>{product.name}</td>
                  <td style={{ padding: "12px", color: "#c084fc" }}>
                    {product.price.toLocaleString("vi-VN")} ₫
                  </td>
                  <td style={{ padding: "12px", color: "#a0a0b0" }}>{product.quantity}</td>
                  <td style={{ padding: "12px", color: "#4ade80", fontWeight: "bold" }}>
                    {(product.price * product.quantity).toLocaleString("vi-VN")} ₫
                  </td>
                  <td style={{ padding: "12px" }}>
                    <button
                      onClick={() => handleDelete(product.id)}
                      style={{
                        padding: "6px 16px",
                        background: "#dc2626",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "13px"
                      }}
                    >
                      🗑️ Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ borderTop: "2px solid #e94560" }}>
                <td colSpan="4" style={{
                  padding: "12px",
                  color: "#f3f4f6",
                  fontWeight: "bold",
                  textAlign: "right"
                }}>
                  Tổng cộng:
                </td>
                <td style={{
                  padding: "12px",
                  color: "#4ade80",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>
                  {products
                    .reduce((sum, p) => sum + p.price * p.quantity, 0)
                    .toLocaleString("vi-VN")} ₫
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}

export default Products;
