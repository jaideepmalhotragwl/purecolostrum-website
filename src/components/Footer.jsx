import { Link } from "react-router-dom";
import { Logo } from "./Logo.jsx";

export function Footer() {
  return (
    <footer style={{ background: "#1c1e21", padding: "48px 0 24px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          <div>
            <Logo dark size="md"/>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginTop: 14, maxWidth: 260 }}>
              GMP certified bovine colostrum powder manufacturer and exporter based in India. 
              Supplying premium grades to nutraceutical brands across 20+ countries worldwide.
            </p>
            <p style={{ fontSize: 11, color: "#1877F2", marginTop: 12 }}>sales@purecolostrum.co</p>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Products</div>
            {["15% IgG Colostrum Powder","30% IgG Colostrum Powder","40% IgG Colostrum Powder","Custom Grades"].map(p => (
              <Link key={p} to="/products" style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>{p}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Company</div>
            {[["About Us","/about"],["Quality & Certifications","/quality"],["The Science","/science"],["Contact","/contact"]].map(([l,to]) => (
              <Link key={l} to={to} style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Markets</div>
            {["United States","United Kingdom","Germany","France","Spain","Canada","UAE","Australia"].map(m => (
              <div key={m} style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>{m}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>© 2026 PureColostrum. All rights reserved.</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Nature's First Food. Perfected.</span>
        </div>
      </div>
    </footer>
  );
}
