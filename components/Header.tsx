export function Header() {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          fontSize: "11px",
          color: "var(--green)",
          fontFamily: "var(--font-dm-mono)",
          letterSpacing: "0.04em",
          marginBottom: "18px",
          opacity: 0,
          animation: "fadeIn 0.4s ease 0.1s forwards",
        }}
      >
        <div
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--green)",
            boxShadow: "0 0 8px var(--green)",
            animation: "pulse 2s ease infinite",
            flexShrink: 0,
          }}
        />
        Available for new roles
      </div>

      <div
        style={{
          fontSize: "26px",
          fontWeight: 500,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "6px",
          opacity: 0,
          animation: "fadeUp 0.5s ease 0.15s forwards",
        }}
      >
        Imani Paul
      </div>

      <div
        style={{
          fontSize: "13px",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-dm-mono)",
          marginBottom: "4px",
          opacity: 0,
          animation: "fadeUp 0.5s ease 0.25s forwards",
        }}
      >
        Software Engineer
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          fontFamily: "var(--font-dm-mono)",
          marginBottom: "22px",
          opacity: 0,
          animation: "fadeUp 0.5s ease 0.3s forwards",
        }}
      >
        Previously{" "}
        <span style={{ color: "var(--accent)" }}>Nike / S23NYC</span>
      </div>

      <div
        style={{
          fontSize: "13px",
          lineHeight: 1.75,
          color: "var(--text-muted)",
          maxWidth: "200px",
          marginBottom: "36px",
          opacity: 0,
          animation: "fadeUp 0.5s ease 0.35s forwards",
        }}
      >
        I build accessible, pixel-perfect digital experiences that bridge
        technical complexity and human need.
      </div>
    </div>
  );
}
