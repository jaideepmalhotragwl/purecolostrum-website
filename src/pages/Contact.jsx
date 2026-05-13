import { useState } from "react";
import { supabase } from "../supabase.js";

export default function Contact() {
  const [form, setForm] = useState({
    company: "", contact: "", email: "", phone: "", country: "",
    product: "", quantity: "", message: ""
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function setF(k, v) { setForm(f => ({ ...f, [k]: v })); }

  async function submit(e) {
    e.preventDefault();
    if (!form.email || !form.company) { setError("Company name and email are required"); return; }
    setSending(true); setError("");
    try {
      // Insert into Ingredientz Enquiry CRM with source = PureColostrum
      await supabase.from("enquiries").insert({
        customer_name: form.company,
        contact_person: form.contact,
        email: form.email,
        phone: form.phone,
        country: form.country,
        source: "PureColostrum",
        stage: "New Enquiry",
        priority: "Medium",
        products: form.product ? [{ name: form.product, qty: form.quantity, unit: "kg" }] : [],
        notes: form.message,
        created_by: "Website"
      });
      setDone(true);
    } catch(e) {
      setError("Something went wrong. Please email us directly at sales@purecolostrum.co");
    } finally {
      setSending(false);
    }
  }

  const inp = {
    width: "100%", border: "1px solid #e4e6eb", borderRadius: 7,
    padding: "10px 12px", fontSize: 13, outline: "none",
    fontFamily: "'Inter', sans-serif", background: "white"
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      {/* Header */}
      <div style={{ background: "#1877F2", padding: "52px 0" }}>
        <div className="container">
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Get In Touch</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 400, color: "white" }}>Request a Sample or Quote</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginTop: 8 }}>Our team will respond within 24 hours with pricing and sample details.</p>
        </div>
      </div>

      <div style={{ padding: "56px 0", background: "#f0f2f5" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 32 }}>

            {/* Form */}
            <div style={{ background: "white", border: "1px solid #e4e6eb", borderRadius: 16, padding: 32 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: "#1c1e21", marginBottom: 8 }}>Send us your enquiry</h2>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 24 }}>Fill in your details and we'll get back to you within 24 hours.</p>

              {done ? (
                <div style={{ textAlign: "center", padding: "48px 24px" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✓</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1c1e21", marginBottom: 8 }}>Enquiry Received!</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>
                    Thank you for your interest. Our team will contact you within 24 hours with pricing, sample availability and documentation.
                  </p>
                  <p style={{ fontSize: 12, color: "#1877F2", marginTop: 12 }}>sales@purecolostrum.co · +91 XXX XXX XXXX</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    {[
                      ["Company Name *","company","text","Acme Nutrition Ltd"],
                      ["Contact Person","contact","text","John Smith"],
                      ["Business Email *","email","email","john@acmenutrition.com"],
                      ["Phone Number","phone","tel","+1 234 567 8900"],
                      ["Country *","country","text","United States"],
                      ["Product of Interest","product","text","30% IgG Colostrum Powder"],
                    ].map(([label, key, type, ph]) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#475569", letterSpacing: 0.5, marginBottom: 5 }}>{label}</label>
                        <input type={type} value={form[key]} onChange={e => setF(key, e.target.value)} placeholder={ph} style={inp}/>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#475569", letterSpacing: 0.5, marginBottom: 5 }}>Estimated Quantity (kg/month)</label>
                    <input type="text" value={form.quantity} onChange={e => setF("quantity", e.target.value)} placeholder="e.g. 100 kg/month" style={inp}/>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#475569", letterSpacing: 0.5, marginBottom: 5 }}>Additional Message</label>
                    <textarea value={form.message} onChange={e => setF("message", e.target.value)} rows={4}
                      placeholder="Tell us about your formulation requirements, certifications needed, packaging preferences…"
                      style={{ ...inp, resize: "vertical" }}/>
                  </div>
                  {error && <div style={{ fontSize: 12, color: "#ef4444", marginBottom: 12 }}>{error}</div>}
                  <button type="submit" disabled={sending} style={{
                    width: "100%", background: "#1877F2", border: "none", color: "white",
                    borderRadius: 8, padding: "13px", fontSize: 14, fontWeight: 600,
                    cursor: sending ? "not-allowed" : "pointer", opacity: sending ? 0.7 : 1
                  }}>
                    {sending ? "Sending…" : "Send Enquiry →"}
                  </button>
                  <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 10, textAlign: "center" }}>
                    We respond within 24 hours · All enquiries are confidential
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["📧","Email Us","sales@purecolostrum.co","For product enquiries and quotations"],
                ["📦","Free Samples","48h dispatch","CoA, TDS and MSDS included"],
                ["🇮🇳","India — Manufacturing","GMP Certified Facility, India","Direct manufacturer · All 6 grades"],
                ["🇺🇸","USA — Warehouse","13825 W Business Center Drive, Suite B\nGreen Oaks, IL 60045, USA","Fast dispatch for North America · 25% & 30% IgG in stock"],
                ["🌍","Export Markets","USA, EU, UK, UAE, Australia","We handle all export documentation"],
              ].map(([icon, title, value, desc]) => (
                <div key={title} style={{ background: "white", border: "1px solid #e4e6eb", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e7f0fd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1c1e21", marginBottom: 2, whiteSpace: "pre-line" }}>{value}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{desc}</div>
                  </div>
                </div>
              ))}

              <div style={{ background: "#1877F2", borderRadius: 12, padding: "20px 18px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "white", marginBottom: 8 }}>What's included with every sample</div>
                {["Certificate of Analysis (CoA)","Technical Data Sheet (TDS)","Material Safety Data Sheet (MSDS)","Country of Origin Certificate","Suggested usage and formulation guidance"].map(i => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: 12, color: "rgba(255,255,255,0.8)" }}>
                    <span style={{ color: "white", fontSize: 10 }}>✓</span>{i}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
