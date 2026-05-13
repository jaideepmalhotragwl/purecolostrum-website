import { Link } from "react-router-dom";

const PRODUCTS = [
  { grade: "Standard", name: "15% IgG Colostrum Powder", desc: "Entry-level grade for general wellness formulations. Ideal for daily immune support blends.", specs: ["15% min IgG","Spray dried","Non-GMO","Halal available"], moq: "25 kg" },
  { grade: "Premium", name: "30% IgG Colostrum Powder", desc: "High-potency grade for clinical and sports nutrition formulations. Our most popular export product.", specs: ["30% min IgG","First milking","CoA included","Kosher available"], moq: "25 kg", popular: true },
  { grade: "Ultra", name: "40% IgG Colostrum Powder", desc: "Maximum concentration for pharmaceutical-grade applications. Ultra-filtered from first-milking colostrum.", specs: ["40% min IgG","Ultra filtered","Pharma grade","Custom packaging"], moq: "10 kg" },
];

const WHY = [
  { icon: "🐄", title: "Farm-verified sourcing", desc: "Collected from certified Indian dairy farms within 6 hours of calving. Full farm-to-powder traceability on every batch." },
  { icon: "🔬", title: "Batch IgG testing", desc: "Every batch independently tested for IgG concentration, microbial safety and heavy metals before dispatch." },
  { icon: "🏭", title: "GMP certified facility", desc: "WHO-GMP certified manufacturing facility in India. Full documentation — CoA, TDS, MSDS — with every order." },
  { icon: "✈️", title: "Global export ready", desc: "Export documentation, customs support and cold-chain logistics to USA, EU, UK, Middle East and Asia Pacific." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "#1877F2", padding: "72px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }}/>
        <div style={{ position: "absolute", bottom: -60, left: "5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }}/>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: 9, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 20, marginBottom: 20 }}>
            🇮🇳 GMP Certified Manufacturer · India
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 400, color: "white", lineHeight: 1.15, letterSpacing: -1, marginBottom: 16, maxWidth: 640 }}>
            The World's Most Complete<br/>
            <em style={{ fontStyle: "italic", color: "#e7f0fd" }}>Immune Nutrition</em><br/>
            Starts Here
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, maxWidth: 500, marginBottom: 28, fontWeight: 300 }}>
            Premium bovine colostrum powder sourced from certified Indian farms. 
            Tested for IgG potency, free of antibiotics and hormones. 
            Trusted by nutraceutical brands across 20+ countries.
          </p>
          <div style={{ display: "flex", gap: 32, marginBottom: 32, flexWrap: "wrap" }}>
            {[["40%+","Max IgG Grade"],["GMP","Certified Facility"],["20+","Countries Supplied"],["48h","Sample Dispatch"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "white", letterSpacing: -0.5 }}>{v}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
            <Link to="/contact">
              <button style={{ background: "white", border: "none", color: "#1877F2", borderRadius: 7, padding: "12px 28px", fontSize: 13, fontWeight: 600 }}>
                Request a Sample →
              </button>
            </Link>
            <Link to="/products">
              <button style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "white", borderRadius: 7, padding: "12px 24px", fontSize: 13 }}>
                View Products
              </button>
            </Link>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            {["First-milking colostrum only","CoA & TDS available","Non-GMO verified","Halal & Kosher options"].map(t => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "white", display: "inline-block" }}/>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Science strip */}
      <section style={{ background: "#e7f0fd", padding: "20px 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            {["100× more IgG than regular milk","Collected within 6h of calving","Low-temp spray drying preserves bioactivity","Every batch third-party tested"].map(t => (
              <span key={t} style={{ fontSize: 12, color: "#1877F2", fontWeight: 500 }}>✓ {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: "72px 0", background: "#f0f2f5" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#1877F2", marginBottom: 8 }}>Our Range</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 400, color: "#1c1e21", letterSpacing: -0.5 }}>
              Bovine Colostrum Powder — Grade Selection
            </h2>
            <p style={{ fontSize: 13, color: "#64748b", marginTop: 10, maxWidth: 500, margin: "10px auto 0" }}>
              All grades sourced from first-milking colostrum. Spray dried, tested and certified.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {PRODUCTS.map(p => (
              <div key={p.name} style={{ background: "white", border: `1px solid ${p.popular ? "#1877F2" : "#e4e6eb"}`, borderRadius: 12, overflow: "hidden" }}>
                {p.popular && <div style={{ background: "#1877F2", color: "white", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 0", textAlign: "center", fontWeight: 600 }}>Most Popular</div>}
                <div style={{ background: p.popular ? "#e7f0fd" : "#f8f9fa", height: 100, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6 }}>
                  <svg width="36" height="48" viewBox="0 0 32 40" fill="none">
                    <path d="M16 2 C16 2 2 18 2 26 C2 34 8.3 38 16 38 C23.7 38 30 34 30 26 C30 18 16 2 16 2Z" fill={p.popular ? "#1877F2" : "#94a3b8"} opacity="0.7"/>
                    <ellipse cx="11" cy="24" rx="3" ry="5" fill="rgba(255,255,255,0.5)" transform="rotate(-20 11 24)"/>
                  </svg>
                  <span style={{ fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: p.popular ? "#1877F2" : "#94a3b8", fontWeight: 600 }}>{p.grade} Grade</span>
                </div>
                <div style={{ padding: "16px 18px" }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#1877F2", marginBottom: 4 }}>Bovine Colostrum</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "#1c1e21", marginBottom: 8, lineHeight: 1.3 }}>{p.name}</h3>
                  <p style={{ fontSize: 11, color: "#64748b", lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
                    {p.specs.map(s => <span key={s} style={{ background: "#e7f0fd", border: "1px solid #b3cef7", borderRadius: 4, padding: "2px 8px", fontSize: 9, color: "#1877F2", fontWeight: 500 }}>{s}</span>)}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #f0f2f5" }}>
                    <span style={{ fontSize: 10, color: "#94a3b8" }}>MOQ: {p.moq}</span>
                    <Link to="/contact">
                      <button style={{ background: p.popular ? "#1877F2" : "#1c1e21", color: "white", border: "none", borderRadius: 5, padding: "6px 14px", fontSize: 10, fontWeight: 600 }}>Request Quote</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science section */}
      <section style={{ padding: "72px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#1877F2", marginBottom: 10 }}>The Science</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 400, color: "#1c1e21", letterSpacing: -0.5, marginBottom: 14, lineHeight: 1.2 }}>
                Why Colostrum is Nature's Most Powerful Bioactive
              </h2>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.85, marginBottom: 14, fontWeight: 300 }}>
                Bovine colostrum is the first milk produced by cows after calving — a concentrated source of immunoglobulins, growth factors, lactoferrin and bioactive peptides. It contains up to 100× more immune factors than regular milk.
              </p>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.85, marginBottom: 24, fontWeight: 300 }}>
                PureColostrum is collected exclusively within the first 6 hours of calving, spray-dried at low temperatures to preserve bioactivity, and tested for IgG concentration at every batch.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[["100×","More IgG than regular milk"],["6h","First-milking collection window"],["<60°C","Low-temp spray drying"],["100%","Batch tested for IgG"]].map(([v, l]) => (
                  <div key={l} style={{ background: "#e7f0fd", border: "1px solid #b3cef7", borderRadius: 8, padding: "14px 16px" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#1877F2", letterSpacing: -0.5 }}>{v}</div>
                    <div style={{ fontSize: 10, color: "#64748b", marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#1877F2", borderRadius: 16, padding: 32 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "white", marginBottom: 20, fontStyle: "italic" }}>Bioactive composition per 100g</div>
              {[["Immunoglobulins (IgG)","up to 40g",90],["Lactoferrin","~1.5g",60],["Growth Factors (IGF-1)","~0.1g",45],["Proline-Rich Polypeptides","~0.05g",35],["Total Protein","~55g",75]].map(([name, val, w]) => (
                <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", width: 160, flexShrink: 0 }}>{name}</span>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.15)", borderRadius: 3, height: 4 }}>
                    <div style={{ width: `${w}%`, height: 4, borderRadius: 3, background: "white" }}/>
                  </div>
                  <span style={{ fontSize: 11, color: "white", fontWeight: 600, width: 60, textAlign: "right", flexShrink: 0 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ padding: "72px 0", background: "#1877F2" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Why Choose Us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 400, color: "white" }}>The PureColostrum Difference</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 8 }}>Indian-origin, globally trusted</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {WHY.map(w => (
              <div key={w.title} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{w.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 8 }}>{w.title}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 0", background: "#e7f0fd", textAlign: "center" }}>
        <div className="container">
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#1877F2", marginBottom: 10 }}>Get Started</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 400, color: "#1c1e21", marginBottom: 12 }}>
            Request a Free Sample Today
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 28, maxWidth: 460, margin: "12px auto 28px" }}>
            Send us your requirement and we'll dispatch a certified sample within 48 hours. CoA, TDS and MSDS included. No commitment required.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact">
              <button style={{ background: "#1877F2", border: "none", color: "white", borderRadius: 7, padding: "13px 32px", fontSize: 14, fontWeight: 600 }}>
                Request a Sample →
              </button>
            </Link>
            <a href="mailto:sales@purecolostrum.co">
              <button style={{ background: "white", border: "1px solid #b3cef7", color: "#1877F2", borderRadius: 7, padding: "13px 28px", fontSize: 14, fontWeight: 500 }}>
                Email Us Directly
              </button>
            </a>
          </div>
          <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 14 }}>CoA, TDS and MSDS included · No minimum order for samples · 48h dispatch</p>
        </div>
      </section>
    </div>
  );
}
