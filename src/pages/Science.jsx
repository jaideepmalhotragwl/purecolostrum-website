export default function Science() {
  return (
    <div style={{ minHeight: "70vh" }}>
      <div style={{ background: "#1877F2", padding: "52px 0" }}>
        <div className="container">
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>The Science</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 400, color: "white" }}>Understanding Bovine Colostrum</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginTop: 8, maxWidth: 520 }}>The science behind nature's most bioactive first food and why IgG concentration matters.</p>
        </div>
      </div>

      <div style={{ padding: "64px 0", background: "white" }}>
        <div className="container">
          {[
            {
              title: "What is Bovine Colostrum?",
              body: "Bovine colostrum is the first milk produced by cows immediately after calving, typically collected within the first 6 hours. It is nature's most concentrated source of immunoglobulins (IgG), growth factors, lactoferrin, proline-rich polypeptides (PRPs) and bioactive peptides. Unlike regular milk, colostrum contains up to 100× more immune-supporting compounds, making it one of the most researched functional ingredients in nutraceuticals.",
            },
            {
              title: "Why IgG Concentration Matters",
              body: "Immunoglobulins — particularly IgG — are the key bioactive markers in colostrum. IgG concentration is the primary quality indicator and determines the potency of the ingredient. PureColostrum offers 15%, 30% and 40% IgG grades to meet different formulation requirements. Higher IgG grades are produced through additional ultrafiltration steps, concentrating the immunoglobulin fraction while maintaining the full spectrum of co-factors.",
            },
            {
              title: "First-Milking Collection — Why It Matters",
              body: "IgG concentration drops dramatically after the first few milkings. Colostrum collected in the first 6 hours contains significantly higher IgG levels than colostrum collected at 12 or 24 hours. PureColostrum sources exclusively from first-milking colostrum, ensuring the highest possible bioactive content in every batch. All our partner farms are certified and operate under strict collection protocols.",
            },
            {
              title: "Low-Temperature Processing",
              body: "Immunoglobulins and growth factors are heat-sensitive proteins. PureColostrum uses carefully controlled low-temperature spray drying (below 60°C) to convert liquid colostrum into a stable powder without degrading the bioactive compounds. This process preserves the full immunological activity of the raw material through to the finished powder.",
            },
            {
              title: "Research & Clinical Evidence",
              body: "Bovine colostrum is one of the most extensively researched nutraceutical ingredients, with hundreds of peer-reviewed studies supporting its role in immune modulation, gut health, athletic performance and antimicrobial activity. The IgG fraction has demonstrated effectiveness in supporting mucosal immunity, while growth factors including IGF-1 and TGF-β are linked to tissue repair and muscle recovery.",
            },
          ].map((s, i) => (
            <div key={s.title} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, marginBottom: 48, paddingBottom: 48, borderBottom: i < 4 ? "1px solid #f0f2f5" : "none" }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#e7f0fd", fontWeight: 600 }}>0{i + 1}</div>
              </div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: "#1c1e21", marginBottom: 14 }}>{s.title}</h2>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.9, fontWeight: 300 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
