import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://eytoryygkxjslfvsqanl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5dG9yeXlna3hqc2xmdnNxYW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NDA5MTUsImV4cCI6MjA5MDMxNjkxNX0.txYTl0Q06mKSfWGmWc8cOTmCN46tLcxF9_7RhBUHBRY"
);

const THEME_LABELS = {
  buyers_guide: "Buyer's Guide", science: "Science & Benefits",
  sourcing: "Wholesale Sourcing", market_trends: "Market Trends",
  formulation: "Formulation Tips", supplier: "Supplier Guide",
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .contains("site", ["purecolostrum"])
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
        if (data?.theme) {
          supabase.from("blog_posts")
            .select("id,title,slug,excerpt,theme,published_at")
            .eq("status", "published")
            .contains("site", ["purecolostrum"])
            .eq("theme", data.theme)
            .neq("slug", slug)
            .limit(3)
            .then(({ data: rel }) => setRelated(rel || []));
        }
      });
  }, [slug]);

  if (loading) return <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>Loading…</div>;

  if (!post) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 40 }}>📄</div>
      <div style={{ color: "#64748b" }}>Article not found</div>
      <Link to="/blog" style={{ color: "#1877F2", fontSize: 13 }}>← Back to Blog</Link>
    </div>
  );

  return (
    <div style={{ minHeight: "70vh" }}>
      {/* Header */}
      <div style={{ background: "#1877F2", padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <Link to="/" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Home</Link>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>→</span>
            <Link to="/blog" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Blog</Link>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>→</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{THEME_LABELS[post.theme] || "Article"}</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "white", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", padding: "3px 12px", borderRadius: 20, marginBottom: 14 }}>
            {THEME_LABELS[post.theme] || "Article"}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px,4vw,38px)", fontWeight: 400, color: "white", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 14, maxWidth: 700 }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>PureColostrum Editorial</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
              {post.published_at ? new Date(post.published_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "52px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 48, alignItems: "start" }}>

            <article>
              {post.excerpt && (
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.9, marginBottom: 32, fontWeight: 300, borderLeft: "3px solid #1877F2", paddingLeft: 20 }}>
                  {post.excerpt}
                </p>
              )}
              <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.9, fontWeight: 300 }}
                dangerouslySetInnerHTML={{ __html: post.content }}/>

              {post.keywords?.length > 0 && (
                <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid #f0f2f5" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Topics</div>
                  {post.keywords.map(k => (
                    <span key={k} style={{ display: "inline-block", background: "#f0f2f5", border: "1px solid #e4e6eb", borderRadius: 4, padding: "2px 9px", fontSize: 11, color: "#64748b", marginRight: 5, marginBottom: 5 }}>{k}</span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div style={{ background: "#1877F2", borderRadius: 12, padding: "24px 28px", marginTop: 36, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: "white", marginBottom: 5 }}>Source Premium Colostrum Powder</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>GMP certified · 15–60% IgG grades · 48h sample dispatch</div>
                </div>
                <Link to="/contact">
                  <button style={{ background: "white", border: "none", color: "#1877F2", borderRadius: 7, padding: "10px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
                    Request Sample →
                  </button>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: 80 }}>
              <div style={{ background: "#f0f2f5", borderRadius: 12, padding: 18, marginBottom: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#1877F2", marginBottom: 12 }}>Our Products</div>
                {[["15% IgG Powder","/products"],["25% IgG Powder","/products"],["30% IgG Powder","/products"],["40% IgG Powder","/products"],["50% IgG Powder","/products"],["60% IgG Powder","/products"]].map(([label, to]) => (
                  <Link key={label} to={to} style={{ display: "block", fontSize: 12, color: "#1877F2", marginBottom: 8, fontWeight: 500 }}>{label} →</Link>
                ))}
              </div>

              {related.length > 0 && (
                <div style={{ background: "#f0f2f5", borderRadius: 12, padding: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#94a3b8", marginBottom: 12 }}>Related Articles</div>
                  {related.map(r => (
                    <Link key={r.id} to={`/blog/${r.slug}`} style={{ display: "block", marginBottom: 12, textDecoration: "none" }}>
                      <div style={{ fontSize: 12, fontWeight: 500, color: "#1c1e21", marginBottom: 2, lineHeight: 1.4 }}>{r.title}</div>
                      <div style={{ fontSize: 10, color: "#94a3b8" }}>{r.published_at ? new Date(r.published_at).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : ""}</div>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>

      <div style={{ background: "#f0f2f5", padding: "20px 0", borderTop: "1px solid #e4e6eb" }}>
        <div className="container">
          <Link to="/blog" style={{ fontSize: 13, color: "#1877F2", fontWeight: 500 }}>← Back to all articles</Link>
        </div>
      </div>

      <style>{`
        article h2{font-family:'Playfair Display',serif;font-size:22px;font-weight:400;color:#1c1e21;margin:28px 0 10px;letter-spacing:-0.3px;}
        article h3{font-size:15px;font-weight:600;color:#1c1e21;margin:20px 0 8px;}
        article p{margin-bottom:14px;}
        article ul,article ol{padding-left:18px;margin-bottom:14px;}
        article li{margin-bottom:5px;}
        article strong{font-weight:600;color:#1c1e21;}
      `}</style>
    </div>
  );
}
