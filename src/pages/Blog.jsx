import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://eytoryygkxjslfvsqanl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5dG9yeXlna3hqc2xmdnNxYW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NDA5MTUsImV4cCI6MjA5MDMxNjkxNX0.txYTl0Q06mKSfWGmWc8cOTmCN46tLcxF9_7RhBUHBRY"
);

const THEME_COLORS = {
  buyers_guide: { bg: "#e7f0fd", color: "#1877F2", label: "Buyer's Guide" },
  science:      { bg: "#dcfce7", color: "#166534", label: "Science" },
  sourcing:     { bg: "#fef3c7", color: "#92400e", label: "Sourcing Guide" },
  market_trends:{ bg: "#ede9fe", color: "#6d28d9", label: "Market Trends" },
  formulation:  { bg: "#ccfbf1", color: "#0f766e", label: "Formulation" },
  supplier:     { bg: "#ffe4e6", color: "#be123c", label: "Supplier Guide" },
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("id,title,slug,excerpt,product_name,theme,keywords,published_at")
      .eq("status", "published")
      .contains("site", ["purecolostrum"])
      .order("published_at", { ascending: false })
      .then(({ data }) => { setPosts(data || []); setLoading(false); });
  }, []);

  return (
    <div style={{ minHeight: "70vh" }}>
      {/* Header */}
      <div style={{ background: "#1877F2", padding: "52px 0" }}>
        <div className="container">
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Resources</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, fontWeight: 400, color: "white", letterSpacing: -0.5, marginBottom: 10 }}>
            PureColostrum Blog
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, maxWidth: 500 }}>
            Expert guides on bovine colostrum sourcing, science, quality standards and market trends for supplement brands worldwide.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div style={{ padding: "52px 0", background: "#f0f2f5" }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>Loading articles…</div>
          ) : posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📝</div>
              <div>Articles coming soon.</div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 18 }}>
              {posts.map(post => {
                const theme = THEME_COLORS[post.theme] || THEME_COLORS.buyers_guide;
                return (
                  <Link key={post.id} to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ background: "white", border: "1px solid #e4e6eb", borderRadius: 12, overflow: "hidden", height: "100%", transition: "all 0.15s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#1877F2"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(24,119,242,0.1)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#e4e6eb"; e.currentTarget.style.boxShadow = "none"; }}>
                      <div style={{ background: "#1877F2", padding: "16px 18px" }}>
                        <span style={{ background: theme.bg, color: theme.color, borderRadius: 20, padding: "3px 10px", fontSize: 10, fontWeight: 600 }}>
                          {theme.label}
                        </span>
                      </div>
                      <div style={{ padding: "16px 18px 18px" }}>
                        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 400, color: "#1c1e21", lineHeight: 1.3, marginBottom: 8 }}>
                          {post.title}
                        </h2>
                        <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7, marginBottom: 12 }}>{post.excerpt}</p>
                        {post.keywords?.slice(0, 3).map(k => (
                          <span key={k} style={{ display: "inline-block", background: "#f0f2f5", border: "1px solid #e4e6eb", borderRadius: 4, padding: "2px 7px", fontSize: 9, color: "#64748b", marginRight: 4, marginBottom: 4 }}>{k}</span>
                        ))}
                        <div style={{ paddingTop: 10, marginTop: 8, borderTop: "1px solid #f0f2f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: 11, color: "#94a3b8" }}>
                            {post.published_at ? new Date(post.published_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : ""}
                          </span>
                          <span style={{ fontSize: 12, color: "#1877F2", fontWeight: 600 }}>Read →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
