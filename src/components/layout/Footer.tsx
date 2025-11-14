export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: "12px",
              }}
            >
              About This Resource
            </h3>
            <p
              style={{
                fontSize: "clamp(13px, 1.5vw, 14px)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              An educational module designed for students and educators to
              explore cellular biology through high-quality visual diagrams.
            </p>
          </div>

          {/* License */}
          <div>
            <h3
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: "12px",
              }}
            >
              License & Usage
            </h3>
            <p
              style={{
                fontSize: "clamp(13px, 1.5vw, 14px)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              All materials are provided under{" "}
              <a
                href="#"
                className="underline transition-colors duration-200"
                style={{ color: "var(--brand)" }}
              >
                CC-BY-SA 4.0
              </a>{" "}
              for educational purposes. Attribution required.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: "12px",
              }}
            >
              References
            </h3>
            <ul
              style={{
                fontSize: "clamp(13px, 1.5vw, 14px)",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
              }}
            >
              <li>
                <a
                  href="#"
                  className="underline transition-colors duration-200"
                  style={{ color: "var(--brand)" }}
                >
                  Biology Textbook v3.2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline transition-colors duration-200"
                  style={{ color: "var(--brand)" }}
                >
                  Cell Structure Database
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline transition-colors duration-200"
                  style={{ color: "var(--brand)" }}
                >
                  Educational Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            style={{
              fontSize: "clamp(12px, 1.5vw, 13px)",
              color: "var(--text-tertiary)",
              textAlign: "center",
            }}
          >
            © 2025 Cell Biology Module. Educational use only.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="transition-colors duration-200"
              style={{
                fontSize: "clamp(12px, 1.5vw, 13px)",
                color: "var(--text-tertiary)",
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors duration-200"
              style={{
                fontSize: "clamp(12px, 1.5vw, 13px)",
                color: "var(--text-tertiary)",
              }}
            >
              Terms
            </a>
            <a
              href="#"
              className="transition-colors duration-200"
              style={{
                fontSize: "clamp(12px, 1.5vw, 13px)",
                color: "var(--text-tertiary)",
              }}
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}