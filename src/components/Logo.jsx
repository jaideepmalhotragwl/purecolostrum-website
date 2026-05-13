export function Logo({ dark = false, size = "md" }) {
  const s = size === "sm" ? 22 : size === "lg" ? 36 : 28;
  const fs = size === "sm" ? 15 : size === "lg" ? 22 : 18;
  const sub = size === "sm" ? 7 : 8;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={s} height={Math.round(s * 1.25)} viewBox="0 0 32 40" fill="none">
        <path d="M16 2 C16 2 2 18 2 26 C2 34 8.3 38 16 38 C23.7 38 30 34 30 26 C30 18 16 2 16 2Z"
          fill={dark ? "rgba(255,255,255,0.9)" : "#1877F2"}/>
        <path d="M16 10 C16 10 6 22 6 28 C6 34 10.5 37 16 37 C21.5 37 26 34 26 28 C26 22 16 10 16 10Z"
          fill={dark ? "rgba(255,255,255,0.5)" : "#4a9af5"}/>
        <ellipse cx="11" cy="24" rx="3" ry="5"
          fill={dark ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.5)"}
          transform="rotate(-20 11 24)"/>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: fs,
          fontWeight: 600,
          color: dark ? "white" : "#1877F2",
          letterSpacing: -0.5
        }}>PureColostrum</span>
        <span style={{
          fontSize: sub,
          fontWeight: 500,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.5)" : "#64748b",
          marginTop: 2
        }}>India · Premium</span>
      </div>
    </div>
  );
}
