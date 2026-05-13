import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo.jsx";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/science", label: "Science" },
    { to: "/quality", label: "Quality" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav style={{
        background: "white", borderBottom: "1px solid #e4e6eb",
        height: 64, display: "flex", alignItems: "center",
        padding: "0 40px", position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
      }}>
        <Link to="/"><Logo/></Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 2, marginLeft: 32, flex: 1 }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontSize: 13, color: loc.pathname === l.to ? "#1877F2" : "#64748b",
              padding: "6px 12px", borderRadius: 6,
              fontWeight: loc.pathname === l.to ? 500 : 400,
              background: loc.pathname === l.to ? "#e7f0fd" : "none"
            }}>{l.label}</Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
          <a href="mailto:sales@purecolostrum.co">
            <button style={{ background: "none", border: "1px solid #1877F2", color: "#1877F2", borderRadius: 6, padding: "7px 16px", fontSize: 12, fontWeight: 500 }}>
              Email Us
            </button>
          </a>
          <Link to="/contact">
            <button style={{ background: "#1877F2", border: "none", color: "white", borderRadius: 6, padding: "8px 18px", fontSize: 12, fontWeight: 600 }}>
              Request Sample →
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(o => !o)} style={{ display: "none", background: "none", border: "none", fontSize: 22, marginLeft: 12 }} className="nav-burger">
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "white", borderBottom: "1px solid #e4e6eb", padding: "12px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ fontSize: 14, color: "#1c1e21", padding: "10px 0", borderBottom: "1px solid #f0f2f5" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button style={{ width: "100%", background: "#1877F2", border: "none", color: "white", borderRadius: 6, padding: "10px", fontSize: 13, fontWeight: 600, marginTop: 8 }}>
              Request Sample →
            </button>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
