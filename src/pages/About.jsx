import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ minHeight: "70vh" }}>
      <div style={{ background: "#1877F2", padding: "52px 0" }}>
        <div className="container">
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Our Story</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 400, color: "white" }}>About PureColostrum</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginTop: 8, maxWidth: 520 }}>Indian manufacturer with a mission to supply the world's cleanest, most potent colostrum powder.</p>
        </div>
      </div>

      <div style={{ padding: "64px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 64, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#1877F2", marginBottom: 12 }}>Who We Are</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 400, color: "#1c1e21", marginBottom: 16, lineHeight: 1.2 }}>
                India's dedicated bovine colostrum manufacturer
              </h2>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.9, marginBottom: 14, fontWeight: 300 }}>
                PureColostrum was established with a single focus: to produce and supply the highest quality bovine colostrum powder from India to nutraceutical brands, supplement manufacturers and private label companies worldwide.
              </p>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.9, marginBottom: 14, fontWeight: 300 }}>
                India is one of the world's largest dairy producers, with a rich tradition of bovine farming. Our manufacturing facility is located close to major dairy farming regions, giving us direct access to fresh, first-milking colostrum from certified farms.
              </p>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.9, fontWeight: 300 }}>
                We operate a WHO-GMP certified facility and supply to markets across North America, Europe, the Middle East and Asia Pacific. Every batch is independently tested and comes with full documentation.
              </p>
            </div>
            <div style={{ background: "#f0f2f5", borderRadius: 16, padding: 36 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1c1e21", marginBottom: 24, fontStyle: "italic" }}>Our numbers</div>
              {[["3","Colostrum grades — 15%, 30%, 40% IgG"],["20+","Countries supplied worldwide"],["GMP","WHO-certified manufacturing facility"],["48h","Sample dispatch turnaround"],["100%","Batch testing before dispatch"],["6h","First-milking collection window"]].map(([v, l]) => (
                <div key={l} style={{ display: "flex", gap: 16, alignItems: "center", paddingBottom: 14, marginBottom: 14, borderBottom: "1px solid #e4e6eb" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1877F2", fontWeight: 600, width: 48, flexShrink: 0 }}>{v}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div style={{ background: "#1877F2", borderRadius: 16, padding: "40px 48px", textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>Our Mission</div>
            <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: "white", fontStyle: "italic", lineHeight: 1.5, maxWidth: 640, margin: "0 auto" }}>
              "To make India's finest bovine colostrum accessible to every nutraceutical brand in the world — with uncompromising quality, full transparency and dedicated service."
            </blockquote>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 400, color: "#1c1e21", marginBottom: 12 }}>
              Ready to work with us?
            </h3>
            <p style={{ fontSize: 13, color: "#64748b", marginBottom: 24 }}>Request a free sample and let the product speak for itself.</p>
            <Link to="/contact">
              <button style={{ background: "#1877F2", border: "none", color: "white", borderRadius: 8, padding: "13px 32px", fontSize: 14, fontWeight: 600 }}>
                Request a Sample →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
