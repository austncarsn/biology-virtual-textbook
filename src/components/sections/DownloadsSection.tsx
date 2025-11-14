export default function DownloadsSection() {
  return (
    <section className="py-12 sm:py-16" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <label
            style={{
              color: "var(--brand)",
              fontSize: "var(--text-label)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Resources
          </label>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>
            Downloads & References
          </h2>
        </div>

        <div className="p-5 sm:p-6 rounded-lg" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 style={{ fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 600, color: "var(--text)", marginBottom: "8px" }}>
                Available Formats
              </h3>
              <ul style={{ fontSize: "clamp(13px, 1.5vw, 14px)", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                <li>• Complete PDF (A4 & US Letter)</li>
                <li>• Individual PNG exports (300 DPI)</li>
                <li>• Interactive web version</li>
                <li>• Printable worksheets</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 600, color: "var(--text)", marginBottom: "8px" }}>
                Citation Information
              </h3>
              <p
                style={{
                  fontSize: "clamp(12px, 1.5vw, 13px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  fontFamily: "monospace",
                  background: "var(--surface)",
                  padding: "12px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                }}
              >
                Cell Biology Module (2025).
                <br />
                Essential Organelles.
                <br />
                License: CC-BY-SA 4.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}