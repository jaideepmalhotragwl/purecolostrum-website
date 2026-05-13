import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    grade: "Standard", igG: "15%", name: "Bovine Colostrum Powder 15% IgG",
    desc: "Our entry-level grade is ideal for general wellness and daily immune support formulations. Suitable for capsules, tablets, sachets and blended supplements.",
    specs: { "IgG Content": "Min 15%", "Moisture": "Max 5%", "Protein": "Min 50%", "Fat": "Max 15%", "Ash": "Max 10%", "Particle Size": "60–80 mesh" },
    apps: ["Daily immune support","General wellness blends","Sports recovery","Children's supplements"],
    moq: "25 kg", popular: false
  },
  {
    grade: "Premium", igG: "30%", name: "Bovine Colostrum Powder 30% IgG",
    desc: "Our most popular export grade. High IgG potency makes it ideal for clinical immune formulations, sports nutrition and premium supplement brands.",
    specs: { "IgG Content": "Min 30%", "Moisture": "Max 5%", "Protein": "Min 55%", "Fat": "Max 12%", "Ash": "Max 8%", "Particle Size": "60–80 mesh" },
    apps: ["Sports nutrition","Immune health formulas","Premium supplements","Clinical nutrition"],
    moq: "25 kg", popular: true
  },
  {
    grade: "Ultra", igG: "40%", name: "Bovine Colostrum Powder 40% IgG",
    desc: "Ultra-concentrated grade for maximum immunoglobulin potency. Produced from first-milking colostrum only, with additional filtration steps for pharmaceutical applications.",
    specs: { "IgG Content": "Min 40%", "Moisture": "Max 4%", "Protein": "Min 60%", "Fat": "Max 10%", "Ash": "Max 6%", "Particle Size": "80 mesh" },
    apps: ["Pharmaceutical-grade formulas","High-potency immune products","Clinical research","Private label premium"],
    moq: "10 kg", popular: false
  },
];

export default function Products() {
  return (
    <div style={{ minHeight: "70vh" }}>
      {/* Header */}
      <div style={{ background: "#1877F2", padding: "52px 0" }}>
        <div className="container">
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Our Range</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 400, color: "white", letterSpacing: -0.5 }}>Bovine Colostrum Powder</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginTop: 8, maxWidth: 500 }}>
            Three grades of premium bovine colostrum powder. All sourced from first-milking, GMP manufactured, batch tested and export ready.
          </p>
        </div>
      </div>

      {/* Products */}
      <div style={{ padding: "56px 0", background: "#f0f2f5" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PRODUCTS.map((p, i) => (
              <div key={p.name} style={{ background: "white", border: `1px solid ${p.popular ? "#1877F2" : "#e4e6eb"}`, borderRadius: 16, overflow: "hidden" }}>
                {p.popular && <div style={{ background: "#1877F2", color: "white", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 0", textAlign: "center", fontWeight: 600 }}>⭐ Most Popular Export Grade</div>}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
                  {/* Info */}
                  <div style={{ padding: "28px 28px", borderRight: "1px solid #f0f2f5" }}>
                    <div style={{ display: "inline-block", background: p.popular ? "#1877F2" : "#f0f2f5", color: p.popular ? "white" : "#64748b", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "3px 10px", borderRadius: 4, marginBottom: 12 }}>
                      {p.grade} Grade
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: "#1c1e21", marginBottom: 10, lineHeight: 1.2 }}>{p.name}</h2>
                    <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.8, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ fontSize: 28, fontFamily: "'Playfair Display', serif", color: "#1877F2", marginBottom: 4 }}>{p.igG}</div>
                    <div style={{ fontSize: 10, color: "#64748b" }}>Minimum IgG concentration</div>
                    <div style={{ marginTop: 20 }}>
                      <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Applications</div>
                      {p.apps.map(a => (
                        <div key={a} style={{ fontSize: 12, color: "#475569", marginBottom: 5, display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#1877F2", display: "inline-block", flexShrink: 0 }}/>
                          {a}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div style={{ padding: "28px 28px", borderRight: "1px solid #f0f2f5" }}>
                    <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Technical Specifications</div>
                    {Object.entries(p.specs).map(([k, v]) => (
                      <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f8f9fa" }}>
                        <span style={{ fontSize: 12, color: "#64748b" }}>{k}</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#1c1e21" }}>{v}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 16, background: "#e7f0fd", borderRadius: 8, padding: "10px 14px" }}>
                      <div style={{ fontSize: 10, color: "#1877F2", fontWeight: 600 }}>Included with every order</div>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 4, lineHeight: 1.6 }}>Certificate of Analysis · Technical Data Sheet · MSDS · Country of Origin</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ padding: "28px 28px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Ordering</div>
                    <div>
                      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 2 }}>Minimum order quantity</div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1c1e21" }}>{p.moq}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 8 }}>Packaging: 10kg / 20kg kraft bags with inner PE liner. Custom packaging available.</div>
                    </div>
                    <Link to="/contact" style={{ width: "100%" }}>
                      <button style={{ width: "100%", background: p.popular ? "#1877F2" : "#1c1e21", border: "none", color: "white", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 600 }}>
                        Request Quote →
                      </button>
                    </Link>
                    <Link to="/contact" style={{ width: "100%" }}>
                      <button style={{ width: "100%", background: "none", border: "1px solid #e4e6eb", color: "#64748b", borderRadius: 8, padding: "10px", fontSize: 12 }}>
                        Request Free Sample
                      </button>
                    </Link>
                    <div style={{ fontSize: 10, color: "#94a3b8", textAlign: "center", width: "100%" }}>48h sample dispatch · Free CoA included</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
