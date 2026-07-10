/* Async Forest website — Hero */
const afHeroStyles = {
  section: { background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(3.5rem,7vw,6.5rem) var(--gutter)' },
  grid: { display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'center' },
  h1: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'clamp(2.4rem,5vw,3.75rem)', lineHeight: 1.06, letterSpacing: '-0.03em', color: 'var(--text-strong)', margin: '18px 0 20px', textWrap: 'balance' },
  u: { boxShadow: 'inset 0 -0.12em 0 var(--accent)' },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem,1.5vw,1.175rem)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '52ch', margin: '0 0 28px' },
  ctas: { display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 26 },
  trust: { fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.02em', color: 'var(--text-subtle)', display: 'flex', flexWrap: 'wrap', gap: '6px 14px' },
  card: { background: 'var(--surface-dark)', borderRadius: 'var(--radius-2xl)', padding: 30, color: 'var(--gray-50)', boxShadow: 'var(--shadow-offset-lg)' },
  cardHead: { fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 16 },
  line: { display: 'flex', gap: 12, padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.09)', alignItems: 'flex-start' },
  lineT: { fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--gray-50)', marginBottom: 2 },
  lineS: { fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--gray-400)', lineHeight: 1.5 },
};

function Hero({ onNav }) {
  const { Button, Eyebrow } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const rows = [
    ['What was in scope', 'A precise boundary — no vague "full audit" promises.'],
    ['What I found', 'Verified myself, hands-on, not a generated checklist.'],
    ['What to fix first', 'Prioritised, actionable, and explained plainly.'],
  ];
  return (
    <section style={afHeroStyles.section} className="af-hero">
      <div style={afHeroStyles.inner}>
        <div style={afHeroStyles.grid} className="af-hero-grid">
          <div>
            <Eyebrow tick>Independent technical assurance</Eyebrow>
            <h1 style={afHeroStyles.h1}>An expert who verifies it themselves — and <span style={afHeroStyles.u}>stands behind the answer.</span></h1>
            <p style={afHeroStyles.sub}>I'm an independent technical consultant. I review the systems founders are about to bet on — architecture, AI in production, security, and scale — and give you a point-in-time report with prioritised, actionable fixes.</p>
            <div style={afHeroStyles.ctas}>
              <Button size="lg" variant="primary" onClick={() => onNav('contact')} iconRight={<Ico n="arrow-right" s={18} />}>Start a conversation</Button>
              <Button size="lg" variant="secondary" onClick={() => onNav('process')}>See how it works</Button>
            </div>
            <div style={afHeroStyles.trust}>
              <span>UK limited company</span><span>·</span><span>PI insured</span><span>·</span><span>Technical observations, not legal advice</span>
            </div>
          </div>
          <div style={afHeroStyles.card}>
            <div style={afHeroStyles.cardHead}>A report you can show a board</div>
            {rows.map(([t, s], i) => (
              <div key={i} style={{ ...afHeroStyles.line, borderBottom: i === rows.length - 1 ? 'none' : afHeroStyles.line.borderBottom }}>
                <span style={{ color: 'var(--gray-100)', marginTop: 2 }}><Ico n="check" s={17} /></span>
                <span><div style={afHeroStyles.lineT}>{t}</div><div style={afHeroStyles.lineS}>{s}</div></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.AFHero = Hero;
