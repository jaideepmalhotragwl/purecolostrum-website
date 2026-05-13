export default function Quality() {
  return (
    <div style={{ minHeight: "70vh" }}>
      <div style={{ background: "#1877F2", padding: "52px 0" }}>
        <div className="container">
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Quality & Certifications</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 400, color: "white" }}>Tested, Certified, Trusted</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginTop: 8, maxWidth: 500 }}>Every batch of PureColostrum is independently tested and certified before it leaves our facility.</p>
        </div>
      </div>

      <div style={{ padding: "64px 0", background: "white" }}>
        <div className="container">
          {/* Certifications */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#1877F2", marginBottom: 10 }}>Certifications</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 400, color: "#1c1e21", marginBottom: 32 }}>Our Quality Credentials</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 14 }}>
              {[
                ["🏭","WHO-GMP","Good Manufacturing Practice certified facility"],
                ["🌿","Non-GMO","Verified non-genetically modified ingredients"],
                ["☪️","Halal","Halal certified for Muslim markets"],
                ["✡️","Kosher","Kosher certified on request"],
                ["🔬","ISO 17025","Third-party lab testing standard"],
                ["📋","FSSAI","Indian food safety certification"],
              ].map(([icon, cert, desc]) => (
                <div key={cert} style={{ background: "#f8f9fa", border: "1px solid #e4e6eb", borderRadius: 10, padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1877F2", marginBottom: 4 }}>{cert}</div>
                  <div style={{ fontSize: 10, color: "#64748b", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testing */}
          <div style={{ background: "#f0f2f5", borderRadius: 16, padding: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 400, color: "#1c1e21", marginBottom: 8 }}>Batch Testing Protocol</h2>
            <p style={{ fontSize: 13, color: "#64748b", marginBottom: 28 }}>Every batch is tested for the following parameters before dispatch:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                ["IgG Concentration","ELISA method — primary quality marker"],
                ["Total Protein","Kjeldahl method — nutritional label compliance"],
                ["Moisture Content","Karl Fischer titration — stability assurance"],
                ["Heavy Metals","ICP-MS — lead, arsenic, mercury, cadmium"],
                ["Microbial Count","TPC, E.coli, Salmonella, Listeria, Staph"],
                ["Fat Content","Soxhlet extraction — label accuracy"],
                ["Lactose Content","HPLC — for lactose-sensitive formulations"],
                ["Ash Content","Muffle furnace — mineral content verification"],
              ].map(([test, method]) => (
                <div key={test} style={{ background: "white", border: "1px solid #e4e6eb", borderRadius: 8, padding: "12px 16px", display: "flex", gap: 12 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1877F2", flexShrink: 0, marginTop: 4 }}/>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#1c1e21", marginBottom: 2 }}>{test}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{method}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 400, color: "#1c1e21", marginBottom: 8 }}>Documentation Provided</h2>
            <p style={{ fontSize: 13, color: "#64748b", marginBottom: 24 }}>Every order and sample shipment is accompanied by a full documentation package:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
              {[
                ["📋","Certificate of Analysis (CoA)","Batch-specific test results for all parameters"],
                ["📄","Technical Data Sheet (TDS)","Full product specifications and usage guidance"],
                ["⚠️","MSDS / SDS","Material safety data for regulatory compliance"],
                ["🌏","Country of Origin","For customs and regulatory requirements"],
                ["🚢","Export Documentation","Commercial invoice, packing list, phytosanitary"],
                ["🔒","NDA / CDA","Available on request before sample dispatch"],
              ].map(([icon, doc, desc]) => (
                <div key={doc} style={{ background: "#e7f0fd", border: "1px solid #b3cef7", borderRadius: 10, padding: "16px" }}>
                  <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#1877F2", marginBottom: 4 }}>{doc}</div>
                  <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
