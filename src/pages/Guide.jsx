import { Link } from "react-router-dom";

const SECTIONS = [
  {
    id: "what-is",
    title: "What is Bovine Colostrum?",
    content: `Bovine colostrum is the first milk produced by cows immediately after calving. It is collected in the first 6 to 12 hours post-birth — a narrow window during which it contains its highest concentration of bioactive compounds.

Unlike regular cow's milk, colostrum is exceptionally rich in immunoglobulins (IgG, IgA, IgM), lactoferrin, growth factors (IGF-1, TGF-β), proline-rich polypeptides (PRPs) and bioactive peptides. Once collected, it is spray-dried at low temperatures to produce a stable, shelf-ready powder for supplement manufacturers worldwide.`
  },
  {
    id: "igg",
    title: "Why IgG Concentration is the Key Quality Marker",
    content: `When you see a colostrum powder labelled "25% IgG" or "30% IgG", that percentage refers to the proportion of immunoglobulin G in the powder by weight.

IgG is the most abundant immunoglobulin in bovine colostrum and the primary bioactive marker that determines potency. Higher IgG concentration means more immune-supporting activity per gram, smaller serving sizes and suitability for premium or clinical applications. Lower grades offer better value for general wellness and high-volume formulations.`
  },
  {
    id: "origin",
    title: "Indian Origin vs USA Origin — What's the Difference?",
    content: `India is one of the world's largest dairy producers. Indian manufacturers offer direct pricing, the full range of grades (15%–60% IgG), WHO-GMP certification and complete documentation. Increasingly the preferred source for European and Asian brands.

For North American brands, US-based distribution offers domestic supply with no import duties, faster lead times (3–7 days from warehouse) and US country of origin for label claims. The key is choosing a distributor who sources from verified, GMP-certified manufacturers and can provide the original CoA.`
  },
  {
    id: "documents",
    title: "Documents to Request Before Buying",
    content: `Never purchase colostrum powder without: (1) a batch-specific Certificate of Analysis showing IgG concentration tested by ELISA, microbial counts and heavy metals; (2) Technical Data Sheet with full specifications and storage conditions; (3) MSDS for shipping compliance; (4) Country of Origin certificate for customs and label claims. Request Halal, Kosher or Organic certificates if applicable to your market.`
  },
  {
    id: "red-flags",
    title: "Red Flags When Choosing a Supplier",
    content: `Watch out for: generic CoAs without batch numbers; IgG tested by inaccurate methods (should be ELISA); in-house-only testing without third-party verification; unclear collection window (true first-milking is within 6 hours); no GMP certification; and pricing that seems too low for the stated IgG grade. Genuine high-grade colostrum powder has real manufacturing costs that are reflected in pricing.`
  },
];

const GRADES = [
  { igG:"15%", grade:"Standard", desc:"General wellness, daily immune support, children's supplements", moq:"25 kg", popular:false },
  { igG:"25%", grade:"Most Popular", desc:"The global bestseller. Immune health, sports nutrition, private label", moq:"25 kg", popular:true },
  { igG:"30%", grade:"Premium", desc:"Clinical immune formulas, sports nutrition, EU regulatory markets", moq:"25 kg", popular:false },
  { igG:"40%", grade:"High Potency", desc:"Pharmaceutical formulas, high-potency immune products, clinical research", moq:"10 kg", popular:false },
  { igG:"50%", grade:"Ultra", desc:"Specialist immune therapy, clinical nutrition, veterinary applications", moq:"10 kg", popular:false },
  { igG:"60%", grade:"Elite", desc:"Pharmaceutical grade only, clinical research, custom formulation", moq:"5 kg", popular:false },
];

export default function Guide() {
  return (
    <div style={{ minHeight:"70vh" }}>
      {/* Hero */}
      <div style={{ background:"#1877F2", padding:"52px 0" }}>
        <div className="container">
          <div style={{ display:"flex", gap:8, marginBottom:14, flexWrap:"wrap" }}>
            <Link to="/" style={{ fontSize:11, color:"rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ fontSize:11, color:"rgba(255,255,255,0.3)" }}>→</span>
            <span style={{ fontSize:11, color:"rgba(255,255,255,0.7)" }}>Buyer's Guide</span>
          </div>
          <div style={{ display:"inline-block", background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", color:"white", fontSize:9, fontWeight:600, letterSpacing:2, textTransform:"uppercase", padding:"4px 12px", borderRadius:20, marginBottom:14 }}>
            Updated May 2026
          </div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:400, color:"white", letterSpacing:-0.5, lineHeight:1.15, marginBottom:14, maxWidth:640 }}>
            Bovine Colostrum Powder:<br/>
            <em style={{ fontStyle:"italic" }}>The Complete Buyer's Guide 2026</em>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.65)", fontSize:14, lineHeight:1.8, maxWidth:520, marginBottom:20 }}>
            Everything supplement brands need to know before buying bovine colostrum powder in bulk — IgG grades explained, quality testing, sourcing from India vs USA, and how to choose a reliable supplier.
          </p>
          <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
            {["~12 min read","2,800 words","6 IgG grades covered","India & USA sourcing"].map(t => (
              <span key={t} style={{ fontSize:11, color:"rgba(255,255,255,0.5)", display:"flex", alignItems:"center", gap:5 }}>
                <span style={{ width:3, height:3, borderRadius:"50%", background:"rgba(255,255,255,0.4)", display:"inline-block" }}/>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding:"56px 0", background:"white" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 280px", gap:48, alignItems:"start" }}>

            {/* Article */}
            <article>
              {/* Intro */}
              <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:32, fontWeight:300, borderLeft:"3px solid #1877F2", paddingLeft:20 }}>
                Whether you're formulating an immune supplement, a sports recovery product or a functional food — bovine colostrum powder is one of the most powerful ingredients you can source. But with grades ranging from 15% to 60% IgG, suppliers across three continents and a wide range of quality certifications, buying colostrum powder in bulk requires careful due diligence.
              </p>

              {/* Table of contents */}
              <div style={{ background:"#e7f0fd", border:"1px solid #b3cef7", borderRadius:10, padding:"20px 24px", marginBottom:40 }}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:"#1877F2", marginBottom:12 }}>In This Guide</div>
                {["What is Bovine Colostrum?","IgG Concentration — The Key Quality Marker","The Six IgG Grades Explained","Indian Origin vs USA Origin","Documents to Request","Red Flags to Watch Out For","How to Request a Sample","Pricing Guide 2026"].map((t,i) => (
                  <div key={t} style={{ fontSize:13, color:"#1877F2", marginBottom:6, display:"flex", gap:8 }}>
                    <span style={{ color:"#94a3b8", minWidth:20 }}>{i+1}.</span>{t}
                  </div>
                ))}
              </div>

              {/* Section 1 */}
              <section style={{ marginBottom:48 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:400, color:"#1c1e21", marginBottom:16, letterSpacing:-0.3 }}>What is Bovine Colostrum?</h2>
                <p style={{ fontSize:13, color:"#4b5563", lineHeight:1.9, marginBottom:14, fontWeight:300 }}>
                  Bovine colostrum is the first milk produced by cows immediately after calving. It is collected in the first 6 to 12 hours post-birth — a narrow window during which it contains its highest concentration of bioactive compounds.
                </p>
                <p style={{ fontSize:13, color:"#4b5563", lineHeight:1.9, marginBottom:20, fontWeight:300 }}>
                  Unlike regular cow's milk, colostrum is rich in immunoglobulins (IgG, IgA, IgM), lactoferrin, growth factors (IGF-1, TGF-β), proline-rich polypeptides (PRPs) and bioactive peptides. Once collected, it is spray-dried at low temperatures to produce a stable, shelf-ready powder.
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  {[["Immunoglobulins (IgG)","Primary immune-supporting proteins — up to 100× more than regular milk"],["Lactoferrin","Antimicrobial glycoprotein with broad immune and gut health benefits"],["Growth Factors (IGF-1)","Linked to tissue repair, muscle recovery and gut integrity"],["Proline-Rich Polypeptides","Immune modulators with anti-inflammatory properties"]].map(([title,desc]) => (
                    <div key={title} style={{ background:"#f8f9fa", border:"1px solid #e4e6eb", borderRadius:8, padding:"14px 16px" }}>
                      <div style={{ fontSize:12, fontWeight:600, color:"#1877F2", marginBottom:4 }}>{title}</div>
                      <div style={{ fontSize:11, color:"#64748b", lineHeight:1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 — IgG */}
              <section style={{ marginBottom:48 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:400, color:"#1c1e21", marginBottom:16, letterSpacing:-0.3 }}>Why IgG Concentration is the Key Quality Marker</h2>
                <p style={{ fontSize:13, color:"#4b5563", lineHeight:1.9, marginBottom:14, fontWeight:300 }}>
                  When you see a colostrum powder labelled "25% IgG" or "30% IgG", that percentage refers to the proportion of immunoglobulin G in the powder by weight. IgG is the most abundant immunoglobulin in bovine colostrum and the primary bioactive marker that determines potency.
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:20 }}>
                  <div style={{ background:"#e7f0fd", border:"1px solid #b3cef7", borderRadius:10, padding:"18px 20px" }}>
                    <div style={{ fontSize:12, fontWeight:700, color:"#1877F2", marginBottom:10 }}>Higher IgG Grade Means</div>
                    {["More immune activity per gram","Smaller serving sizes on label","Premium and clinical positioning","Higher price per kg"].map(t => <div key={t} style={{ fontSize:12, color:"#374151", marginBottom:6, display:"flex", gap:6 }}><span style={{ color:"#1877F2" }}>✓</span>{t}</div>)}
                  </div>
                  <div style={{ background:"#f8f9fa", border:"1px solid #e4e6eb", borderRadius:10, padding:"18px 20px" }}>
                    <div style={{ fontSize:12, fontWeight:700, color:"#64748b", marginBottom:10 }}>Lower IgG Grade Means</div>
                    {["General wellness formulations","Larger serving sizes needed","Better value for high-volume production","Lower cost per kilogram"].map(t => <div key={t} style={{ fontSize:12, color:"#374151", marginBottom:6, display:"flex", gap:6 }}><span style={{ color:"#94a3b8" }}>→</span>{t}</div>)}
                  </div>
                </div>
              </section>

              {/* Section 3 — Grades */}
              <section style={{ marginBottom:48 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:400, color:"#1c1e21", marginBottom:20, letterSpacing:-0.3 }}>The Six IgG Grades Explained</h2>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {GRADES.map(g => (
                    <div key={g.igG} style={{ border:`1px solid ${g.popular?"#1877F2":"#e4e6eb"}`, borderRadius:10, overflow:"hidden" }}>
                      {g.popular && <div style={{ background:"#1877F2", color:"white", fontSize:9, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", padding:"4px 0", textAlign:"center" }}>⭐ Most Popular Grade Globally</div>}
                      <div style={{ display:"flex", alignItems:"center", gap:16, padding:"16px 20px" }}>
                        <div style={{ textAlign:"center", minWidth:56 }}>
                          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:24, color:"#1877F2", fontWeight:600 }}>{g.igG}</div>
                          <div style={{ fontSize:8, color:"#94a3b8", fontWeight:600, letterSpacing:1 }}>IgG</div>
                        </div>
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:11, fontWeight:700, color:g.popular?"#1877F2":"#64748b", letterSpacing:1.5, textTransform:"uppercase", marginBottom:3 }}>{g.grade}</div>
                          <div style={{ fontSize:13, color:"#374151", lineHeight:1.6 }}>{g.desc}</div>
                        </div>
                        <div style={{ textAlign:"right", minWidth:60 }}>
                          <div style={{ fontSize:10, color:"#94a3b8", marginBottom:2 }}>MOQ</div>
                          <div style={{ fontSize:13, fontWeight:600, color:"#1c1e21" }}>{g.moq}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 — Origin */}
              <section style={{ marginBottom:48 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:400, color:"#1c1e21", marginBottom:16, letterSpacing:-0.3 }}>Indian Origin vs USA Origin</h2>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  <div style={{ background:"#dcfce7", border:"1px solid #bbf7d0", borderRadius:10, padding:"20px" }}>
                    <div style={{ fontSize:20, marginBottom:8 }}>🇮🇳</div>
                    <div style={{ fontSize:13, fontWeight:700, color:"#166534", marginBottom:10 }}>Indian Origin — Manufacturer</div>
                    {["Direct manufacturer pricing","Full range — 15% to 60% IgG","WHO-GMP certified facility","Complete documentation","Halal & Kosher available","2–4 week lead time"].map(t => <div key={t} style={{ fontSize:12, color:"#166534", marginBottom:5, display:"flex", gap:6 }}><span>✓</span>{t}</div>)}
                  </div>
                  <div style={{ background:"#e7f0fd", border:"1px solid #b3cef7", borderRadius:10, padding:"20px" }}>
                    <div style={{ fontSize:20, marginBottom:8 }}>🇺🇸</div>
                    <div style={{ fontSize:13, fontWeight:700, color:"#1877F2", marginBottom:10 }}>USA Origin — Distributor</div>
                    {["Domestic supply — no import duties","US country of origin for labels","3–7 day warehouse dispatch","25% and 30% IgG in stock","Simplified North America logistics","Chicago, IL warehouse"].map(t => <div key={t} style={{ fontSize:12, color:"#1877F2", marginBottom:5, display:"flex", gap:6 }}><span>✓</span>{t}</div>)}
                  </div>
                </div>
              </section>

              {/* Section 5 — Documents */}
              <section style={{ marginBottom:48 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:400, color:"#1c1e21", marginBottom:16, letterSpacing:-0.3 }}>Documents to Request Before Buying</h2>
                <p style={{ fontSize:13, color:"#4b5563", lineHeight:1.9, marginBottom:16, fontWeight:300 }}>Never purchase colostrum powder without the following documentation from your supplier:</p>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {[
                    ["📋","Certificate of Analysis (CoA)","Most important document. Must be batch-specific with IgG by ELISA, microbial counts and heavy metals. Reject generic or template CoAs."],
                    ["📄","Technical Data Sheet (TDS)","Full product specifications, storage conditions, shelf life and formulation guidance. Essential for product development."],
                    ["⚠️","MSDS / SDS","Required for regulatory compliance, workplace safety and shipping. Your logistics provider needs this."],
                    ["🌏","Country of Origin","For customs clearance and label claims. Mandatory if marketing Indian or USA origin material."],
                  ].map(([icon,title,desc]) => (
                    <div key={title} style={{ display:"flex", gap:14, background:"#f8f9fa", border:"1px solid #e4e6eb", borderRadius:8, padding:"14px 16px" }}>
                      <span style={{ fontSize:20 }}>{icon}</span>
                      <div>
                        <div style={{ fontSize:13, fontWeight:600, color:"#1c1e21", marginBottom:3 }}>{title}</div>
                        <div style={{ fontSize:12, color:"#64748b", lineHeight:1.6 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 — Red flags */}
              <section style={{ marginBottom:48 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:400, color:"#1c1e21", marginBottom:16, letterSpacing:-0.3 }}>Red Flags When Choosing a Supplier</h2>
                <div style={{ background:"#fef2f2", border:"1px solid #fecaca", borderRadius:10, padding:"20px 24px" }}>
                  {[
                    ["No batch-specific CoA","Generic CoAs without batch numbers may not reflect the actual product you receive."],
                    ["IgG not tested by ELISA","IgG should be measured by ELISA. Less accurate methods can inflate reported values."],
                    ["In-house testing only","Reputable suppliers use accredited third-party ISO 17025 laboratories for verification."],
                    ["Unclear collection window","True first-milking colostrum is collected within 6 hours. Ask specifically about this."],
                    ["No GMP certification","Any ingredient entering a finished supplement requires GMP-certified manufacturing."],
                    ["Suspiciously low pricing","Genuine high-grade colostrum has real production costs. Too-low pricing is a quality red flag."],
                  ].map(([title,desc]) => (
                    <div key={title} style={{ display:"flex", gap:10, marginBottom:12, paddingBottom:12, borderBottom:"1px solid #fecaca" }}>
                      <span style={{ color:"#ef4444", fontSize:14, flexShrink:0, marginTop:1 }}>⚠️</span>
                      <div>
                        <div style={{ fontSize:12, fontWeight:600, color:"#991b1b", marginBottom:2 }}>{title}</div>
                        <div style={{ fontSize:12, color:"#7f1d1d" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7 — Pricing */}
              <section style={{ marginBottom:48 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:400, color:"#1c1e21", marginBottom:16, letterSpacing:-0.3 }}>Typical Pricing Guide 2026</h2>
                <p style={{ fontSize:13, color:"#4b5563", lineHeight:1.9, marginBottom:16, fontWeight:300 }}>Colostrum powder pricing varies by grade, origin and volume. As a general market guide:</p>
                <div style={{ border:"1px solid #e4e6eb", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", background:"#1877F2", padding:"10px 20px" }}>
                    {["Grade","IgG %","Typical Price (USD/kg)"].map(h => <div key={h} style={{ fontSize:10, fontWeight:700, color:"white", letterSpacing:1, textTransform:"uppercase" }}>{h}</div>)}
                  </div>
                  {[["Standard","15%","$18 – $28"],["Most Popular","25%","$28 – $42"],["Premium","30%","$38 – $55"],["High Potency","40%","$55 – $80"],["Ultra","50%","$80 – $120"],["Elite","60%","$120 – $180"]].map(([g,igG,price],i) => (
                    <div key={g} style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"10px 20px", background:i%2===0?"white":"#f8f9fa", borderBottom:"1px solid #f0f2f5" }}>
                      <div style={{ fontSize:12, color:"#374151", fontWeight:igG==="25%"?600:400 }}>{g}</div>
                      <div style={{ fontSize:12, color:"#1877F2", fontWeight:600 }}>{igG}</div>
                      <div style={{ fontSize:12, color:"#374151" }}>{price}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize:11, color:"#94a3b8", marginTop:10 }}>*Prices are indicative. Contact us for current pricing based on volume and specifications.</p>
              </section>

              {/* CTA box */}
              <div style={{ background:"#1877F2", borderRadius:14, padding:"32px 36px", textAlign:"center" }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:24, color:"white", marginBottom:10 }}>Ready to Source Colostrum Powder?</div>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.75)", marginBottom:20, lineHeight:1.7 }}>
                  PureColostrum supplies all six IgG grades from India (manufacturer) and USA (distributor). 
                  Free samples dispatched within 48 hours with full CoA, TDS and MSDS.
                </p>
                <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
                  <Link to="/contact">
                    <button style={{ background:"white", border:"none", color:"#1877F2", borderRadius:7, padding:"11px 28px", fontSize:13, fontWeight:700 }}>Request Free Sample →</button>
                  </Link>
                  <Link to="/products">
                    <button style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.3)", color:"white", borderRadius:7, padding:"11px 24px", fontSize:13 }}>View All Grades</button>
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position:"sticky", top:80 }}>
              <div style={{ background:"#f0f2f5", borderRadius:12, padding:20, marginBottom:16 }}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:"#1877F2", marginBottom:14 }}>Quick Grade Comparison</div>
                {GRADES.map(g => (
                  <div key={g.igG} style={{ display:"flex", justifyContent:"space-between", padding:"7px 0", borderBottom:"1px solid #e4e6eb" }}>
                    <span style={{ fontSize:12, color:"#374151", fontWeight:g.popular?600:400 }}>{g.igG} {g.popular?"⭐":""}</span>
                    <span style={{ fontSize:11, color:"#64748b" }}>MOQ {g.moq}</span>
                  </div>
                ))}
              </div>
              <div style={{ background:"#1877F2", borderRadius:12, padding:20 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"white", marginBottom:8 }}>Request a Free Sample</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.7)", marginBottom:14, lineHeight:1.6 }}>All grades available. CoA, TDS and MSDS included. 48h dispatch.</div>
                <Link to="/contact">
                  <button style={{ width:"100%", background:"white", border:"none", color:"#1877F2", borderRadius:6, padding:"10px", fontSize:12, fontWeight:700 }}>Get Sample →</button>
                </Link>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.5)", marginTop:10, textAlign:"center" }}>No commitment required</div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
