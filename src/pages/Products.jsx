import { Link } from "react-router-dom";

const PRODUCTS = [
  { grade:"Standard", igG:"15%", name:"Bovine Colostrum Powder 15% IgG", desc:"Entry-level grade for general wellness and daily immune support formulations. Suitable for capsules, tablets, sachets and blended supplements.", specs:{"IgG Content":"Min 15%","Moisture":"Max 5%","Protein":"Min 50%","Fat":"Max 15%","Ash":"Max 10%","Particle Size":"60–80 mesh"}, apps:["Daily immune support","General wellness blends","Sports recovery","Children's supplements"], moq:"25 kg", popular:false, origin:["IN"] },
  { grade:"Most Popular", igG:"25%", name:"Bovine Colostrum Powder 25% IgG", desc:"Our most widely used grade globally — the sweet spot between potency and cost. Available from both Indian manufacturing and US distribution stock for faster NA delivery.", specs:{"IgG Content":"Min 25%","Moisture":"Max 5%","Protein":"Min 52%","Fat":"Max 13%","Ash":"Max 9%","Particle Size":"60–80 mesh"}, apps:["Immune health blends","Sports nutrition","Private label","Functional food & drinks"], moq:"25 kg", popular:true, origin:["IN","US"] },
  { grade:"Premium", igG:"30%", name:"Bovine Colostrum Powder 30% IgG", desc:"High-potency grade for clinical and sports nutrition formulations. Popular with premium supplement brands in USA and Europe. Available from both Indian and US stock.", specs:{"IgG Content":"Min 30%","Moisture":"Max 5%","Protein":"Min 55%","Fat":"Max 12%","Ash":"Max 8%","Particle Size":"60–80 mesh"}, apps:["Clinical immune formulas","Sports nutrition","Premium supplements","EU regulatory markets"], moq:"25 kg", popular:false, origin:["IN","US"] },
  { grade:"High Potency", igG:"40%", name:"Bovine Colostrum Powder 40% IgG", desc:"Ultra-concentrated grade for pharmaceutical-grade applications. Ultra-filtered from first-milking colostrum for maximum bioactive potency.", specs:{"IgG Content":"Min 40%","Moisture":"Max 4%","Protein":"Min 60%","Fat":"Max 10%","Ash":"Max 6%","Particle Size":"80 mesh"}, apps:["Pharmaceutical formulas","High-potency immune products","Clinical research","Premium private label"], moq:"10 kg", popular:false, origin:["IN"] },
  { grade:"Ultra", igG:"50%", name:"Bovine Colostrum Powder 50% IgG", desc:"Premium ultra-grade for specialist applications requiring very high immunoglobulin concentration. Produced via advanced ultrafiltration from certified first-milking colostrum.", specs:{"IgG Content":"Min 50%","Moisture":"Max 4%","Protein":"Min 65%","Fat":"Max 8%","Ash":"Max 5%","Particle Size":"80 mesh"}, apps:["Specialist immune therapy","Clinical nutrition","High-end sports recovery","Veterinary applications"], moq:"10 kg", popular:false, origin:["IN"] },
  { grade:"Elite", igG:"60%", name:"Bovine Colostrum Powder 60% IgG", desc:"Our most concentrated grade — the pinnacle of colostrum technology. Reserved for pharmaceutical and clinical applications requiring maximum IgG purity and potency.", specs:{"IgG Content":"Min 60%","Moisture":"Max 3%","Protein":"Min 70%","Fat":"Max 6%","Ash":"Max 4%","Particle Size":"100 mesh"}, apps:["Pharmaceutical grade only","Clinical research","Custom formulation","Veterinary medicine"], moq:"5 kg", popular:false, origin:["IN"] },
];

const OB = {
  IN:{ flag:"🇮🇳", label:"India (Manufacturer)", color:"#166534", bg:"#dcfce7", border:"#bbf7d0" },
  US:{ flag:"🇺🇸", label:"USA (Distributor)", color:"#1877F2", bg:"#e7f0fd", border:"#b3cef7" },
};

export default function Products() {
  return (
    <div style={{ minHeight:"70vh" }}>
      {/* Header */}
      <div style={{ background:"#1877F2", padding:"52px 0" }}>
        <div className="container">
          <div style={{ fontSize:10, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:"rgba(255,255,255,0.6)", marginBottom:10 }}>Our Range</div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:40, fontWeight:400, color:"white", letterSpacing:-0.5 }}>Bovine Colostrum Powder</h1>
          <p style={{ color:"rgba(255,255,255,0.65)", fontSize:14, marginTop:8, maxWidth:540 }}>
            Six grades from 15% to 60% IgG. Indian-origin manufactured and US-origin distributed. All first-milking, GMP certified, batch tested and export ready.
          </p>
          <div style={{ display:"flex", gap:12, marginTop:18, flexWrap:"wrap" }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:20, padding:"5px 14px" }}>
              <span>🇮🇳</span><span style={{ fontSize:11, color:"white" }}>India — We are the manufacturer</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:20, padding:"5px 14px" }}>
              <span>🇺🇸</span><span style={{ fontSize:11, color:"white" }}>USA — We distribute from Chicago warehouse</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div style={{ padding:"56px 0", background:"#f0f2f5" }}>
        <div className="container">
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
            {PRODUCTS.map(p => (
              <div key={p.name} style={{ background:"white", border:`1px solid ${p.popular?"#1877F2":"#e4e6eb"}`, borderRadius:16, overflow:"hidden" }}>
                {p.popular && <div style={{ background:"#1877F2", color:"white", fontSize:10, letterSpacing:1.5, textTransform:"uppercase", padding:"6px 0", textAlign:"center", fontWeight:600 }}>⭐ Most Popular Grade — Highest Global Demand</div>}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:0 }}>

                  {/* Info */}
                  <div style={{ padding:"24px 28px", borderRight:"1px solid #f0f2f5" }}>
                    <div style={{ display:"inline-block", background:p.popular?"#1877F2":"#f0f2f5", color:p.popular?"white":"#64748b", fontSize:9, fontWeight:700, letterSpacing:2, textTransform:"uppercase", padding:"3px 10px", borderRadius:4, marginBottom:10 }}>
                      {p.grade} Grade
                    </div>
                    <div style={{ display:"flex", gap:6, marginBottom:12, flexWrap:"wrap" }}>
                      {p.origin.map(o => (
                        <span key={o} style={{ display:"inline-flex", alignItems:"center", gap:4, background:OB[o].bg, border:`1px solid ${OB[o].border}`, borderRadius:4, padding:"2px 8px", fontSize:9, fontWeight:600, color:OB[o].color }}>
                          {OB[o].flag} {OB[o].label}
                        </span>
                      ))}
                    </div>
                    <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:400, color:"#1c1e21", marginBottom:8, lineHeight:1.2 }}>{p.name}</h2>
                    <p style={{ fontSize:12, color:"#64748b", lineHeight:1.8, marginBottom:14 }}>{p.desc}</p>
                    <div style={{ display:"flex", alignItems:"baseline", gap:6, marginBottom:16 }}>
                      <span style={{ fontFamily:"'Playfair Display',serif", fontSize:32, color:"#1877F2" }}>{p.igG}</span>
                      <span style={{ fontSize:11, color:"#64748b" }}>min IgG concentration</span>
                    </div>
                    <div style={{ fontSize:10, color:"#94a3b8", fontWeight:600, letterSpacing:1.5, textTransform:"uppercase", marginBottom:8 }}>Applications</div>
                    {p.apps.map(a => (
                      <div key={a} style={{ fontSize:12, color:"#475569", marginBottom:5, display:"flex", alignItems:"center", gap:6 }}>
                        <span style={{ width:4, height:4, borderRadius:"50%", background:"#1877F2", display:"inline-block", flexShrink:0 }}/>
                        {a}
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <div style={{ padding:"24px 28px", borderRight:"1px solid #f0f2f5" }}>
                    <div style={{ fontSize:10, color:"#94a3b8", fontWeight:600, letterSpacing:1.5, textTransform:"uppercase", marginBottom:14 }}>Technical Specifications</div>
                    {Object.entries(p.specs).map(([k,v]) => (
                      <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid #f8f9fa" }}>
                        <span style={{ fontSize:12, color:"#64748b" }}>{k}</span>
                        <span style={{ fontSize:12, fontWeight:600, color:"#1c1e21" }}>{v}</span>
                      </div>
                    ))}
                    <div style={{ marginTop:14, background:"#e7f0fd", borderRadius:8, padding:"10px 14px" }}>
                      <div style={{ fontSize:10, color:"#1877F2", fontWeight:600, marginBottom:4 }}>Included with every order</div>
                      <div style={{ fontSize:11, color:"#64748b", lineHeight:1.6 }}>Certificate of Analysis · Technical Data Sheet · MSDS · Country of Origin</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ padding:"24px 28px", display:"flex", flexDirection:"column", justifyContent:"center", gap:12 }}>
                    <div style={{ fontSize:10, color:"#94a3b8", fontWeight:600, letterSpacing:1.5, textTransform:"uppercase" }}>Ordering</div>
                    <div>
                      <div style={{ fontSize:11, color:"#64748b", marginBottom:2 }}>Minimum order quantity</div>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, color:"#1c1e21" }}>{p.moq}</div>
                    </div>
                    {p.origin.includes("US") && (
                      <div style={{ background:"#dcfce7", border:"1px solid #bbf7d0", borderRadius:8, padding:"8px 12px" }}>
                        <div style={{ fontSize:10, fontWeight:600, color:"#166534", marginBottom:2 }}>🇺🇸 US Stock Available</div>
                        <div style={{ fontSize:10, color:"#15803d" }}>Fast dispatch from Chicago, IL warehouse for North America</div>
                      </div>
                    )}
                    <div style={{ fontSize:11, color:"#64748b" }}>10kg / 20kg kraft bags with PE liner. Custom packaging available.</div>
                    <Link to="/contact" style={{ width:"100%" }}>
                      <button style={{ width:"100%", background:p.popular?"#1877F2":"#1c1e21", border:"none", color:"white", borderRadius:8, padding:"12px", fontSize:13, fontWeight:600 }}>Request Quote →</button>
                    </Link>
                    <Link to="/contact" style={{ width:"100%" }}>
                      <button style={{ width:"100%", background:"none", border:"1px solid #e4e6eb", color:"#64748b", borderRadius:8, padding:"10px", fontSize:12 }}>Request Free Sample</button>
                    </Link>
                    <div style={{ fontSize:10, color:"#94a3b8", textAlign:"center" }}>48h sample dispatch · Free CoA included</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Origin note */}
          <div style={{ background:"white", border:"1px solid #e4e6eb", borderRadius:12, padding:"24px 28px", marginTop:24, display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
            <div style={{ display:"flex", gap:14 }}>
              <span style={{ fontSize:28 }}>🇮🇳</span>
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:"#1c1e21", marginBottom:4 }}>Indian Origin — We Are the Manufacturer</div>
                <div style={{ fontSize:12, color:"#64748b", lineHeight:1.7 }}>All grades manufactured at our WHO-GMP certified facility in India from certified farm-fresh, first-milking bovine colostrum. Direct manufacturer pricing with full documentation.</div>
              </div>
            </div>
            <div style={{ display:"flex", gap:14 }}>
              <span style={{ fontSize:28 }}>🇺🇸</span>
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:"#1c1e21", marginBottom:4 }}>US Origin — We Are the Distributor</div>
                <div style={{ fontSize:12, color:"#64748b", lineHeight:1.7 }}>Selected grades (25% and 30% IgG) available from our Chicago, IL warehouse. Ideal for brands needing domestic US-origin material with shorter lead times and simpler customs.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
