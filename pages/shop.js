import products from "../data/products";

export default function Shop() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>🛍️ Shop</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.5rem",
        marginTop: "2rem"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "1rem",
            textAlign: "center",
            background: "#fff"
          }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: "100%", borderRadius: "8px" }} />
            <h2 style={{ fontSize: "1.2rem", margin: "1rem 0" }}>{product.name}</h2>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
