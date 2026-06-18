import { useState, useEffect } from 'react';
import './index.css';
import { meta, quickRef, steps } from './data/content';
import QuickRefAccordion from './components/QuickRefAccordion';
import StepsAccordion from './components/StepsAccordion';

const TOOL_ID  = 'erp_framework';
const API_BASE = import.meta.env.VITE_API_URL || '';

export default function App() {
  const [dlCount,   setDlCount]   = useState(null);
  const [recording, setRecording] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('qg-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qg-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  // Fetch current count on mount
  useEffect(() => {
    fetch(`${API_BASE}/api/v1/downloads/${TOOL_ID}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => data && setDlCount(data.count))
      .catch(() => {});          // silently ignore if backend unreachable
  }, []);

  const handleDownload = async () => {
    if (recording) return;
    setRecording(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/downloads/${TOOL_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        setDlCount(data.count);
      }
    } catch (_) {
      // Backend unreachable — download still works, count just won't update
    } finally {
      setRecording(false);
    }
  };

  return (
    <>
      <div className="gov-banner">
        <span>🇺🇸</span>
        An official resource for federal grant financial management compliance
        &nbsp;·&nbsp; OMB 2 CFR Part 200 &nbsp;·&nbsp; GAO Green Book
      </div>

      <header className="site-header">
        <div className="header-inner">
          <div className="header-badge">Exhibit 19 · EB-2 NIW Petition</div>
          <h1 className="header-title">
            {meta.title}&nbsp;·&nbsp;<span>{meta.subtitle}</span>
          </h1>
          <p className="header-subtitle">{meta.fullTitle}</p>
          <div className="header-divider" />
          <div className="header-bottom-row">
            <p className="header-exhibit">{meta.exhibit}</p>
            <div className="download-wrap">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? '☀ Light' : '◑ Dark'}
              </button>
              <a
                className="download-btn"
                href="/Exhibit_19_V2_ERP_Implementation_Framework.docx"
                download="Exhibit_19_V2_ERP_Implementation_Framework.docx"
                onClick={handleDownload}
              >
                ⬇ Download Full Exhibit (.docx)
              </a>
              {dlCount !== null && (
                <span className="download-count">
                  {dlCount.toLocaleString()} {dlCount === 1 ? 'download' : 'downloads'}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrap">
        <section>
          <p className="section-label">Quick Reference</p>
          <h2 className="section-title">Framework at a Glance</h2>
          <QuickRefAccordion items={quickRef} />
        </section>

        <section>
          <p className="section-label">Section 4 · Step-by-Step Guide</p>
          <h2 className="section-title">How to Use the ERP Implementation Framework</h2>
          <p className="content-p" style={{ marginBottom: '20px' }}>
            No software purchase is required to begin. Your finance team, ERP consultant,
            or compliance officer can follow the steps below using any standard accounting
            software your organization already uses. Click any step to expand it.
          </p>
          <StepsAccordion steps={steps} />
        </section>
      </div>

      <footer className="site-footer">
        {meta.footer}
      </footer>
    </>
  );
}
