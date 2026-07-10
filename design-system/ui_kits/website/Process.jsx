/* Async Forest website — Process (how it works) on warm surface */
const afProcStyles = {
  band: { background: 'var(--surface-warm)', borderTop: '1px solid var(--border-warm)', borderBottom: '1px solid var(--border-warm)' },
  section: { maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' },
  head: { maxWidth: '52ch', marginBottom: 44 },
  h2: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'clamp(1.9rem,3.5vw,2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: '14px 0 12px' },
  lead: { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, borderTop: '1px solid var(--gray-300)' },
  step: { padding: '26px 22px 26px 0', borderRight: '1px solid var(--gray-300)' },
  num: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-500)', letterSpacing: '0.1em' },
  st: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 20, color: 'var(--text-strong)', margin: '14px 0 8px' },
  sp: { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
};

function Process() {
  const { Eyebrow } = window.AsyncForestDesignSystem_6656fd;
  const steps = [
    ['01', 'Scope', 'We agree exactly what’s in and out — a precise boundary, in writing.'],
    ['02', 'Verify', 'I do my own hands-on verification against the real system, not a self-assessment or a generated checklist.'],
    ['03', 'Report', 'Point-in-time findings, prioritised, each with an actionable fix and the reasoning behind it.'],
    ['04', 'Stand behind it', 'I walk you and your stakeholders through it, and I’m accountable for the conclusion.'],
  ];
  return (
    <div style={afProcStyles.band} id="process">
      <section style={afProcStyles.section}>
        <div style={afProcStyles.head}>
          <Eyebrow>How it works</Eyebrow>
          <h2 style={afProcStyles.h2}>Independent, and accountable</h2>
          <p style={afProcStyles.lead}>The difference is simple: a qualified expert checks it and puts their name to the result.</p>
        </div>
        <div style={afProcStyles.grid} className="af-proc-grid">
          {steps.map(([n, t, d], i) => (
            <div key={i} style={{ ...afProcStyles.step, borderRight: i === steps.length - 1 ? 'none' : afProcStyles.step.borderRight, paddingLeft: i === 0 ? 0 : 22 }}>
              <span style={afProcStyles.num}>{n}</span>
              <h3 style={afProcStyles.st}>{t}</h3>
              <p style={afProcStyles.sp}>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
window.AFProcess = Process;
