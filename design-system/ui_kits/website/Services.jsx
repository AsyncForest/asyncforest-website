/* Async Forest website — Services */
const afSvcStyles = {
  section: { maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' },
  head: { maxWidth: '56ch', marginBottom: 44 },
  h2: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'clamp(1.9rem,3.5vw,2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: '14px 0 12px' },
  lead: { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 },
  icon: { width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--gray-100)', color: 'var(--gray-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  cardH: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 21, letterSpacing: '-0.01em', color: 'var(--text-strong)', margin: '0 0 8px' },
  cardP: { fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
};

function Services() {
  const { Card, Eyebrow, Badge } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const items = [
    ['shield-check', 'Technical assurance review', 'Independent, accountable verification of the thing you’re about to ship or raise on. I do the checking myself and stand behind the conclusion.', 'Core'],
    ['workflow', 'Architecture & AI in production', 'Responsible, practical ML and GenAI quality drivers. Concurrency, resilience, and cost for AI-integrated systems under real conditions.', null],
    ['gauge', 'Security & scalability audits', 'Security review and load/scalability testing — where the system bends, where it breaks, and what to harden first.', null],
    ['scale', 'Regulatory exposure flagging', 'UK GDPR & Children’s Code, Online Safety Act, EU AI Act — surfaced as technical observations, not legal advice.', 'Emerging'],
  ];
  return (
    <section style={afSvcStyles.section} id="services">
      <div style={afSvcStyles.head}>
        <Eyebrow>What I do</Eyebrow>
        <h2 style={afSvcStyles.h2}>A portfolio of hands-on technical work</h2>
        <p style={afSvcStyles.lead}>Every engagement ends in a written, point-in-time report: scope-limited, prioritised, and honest about what I did and didn’t verify.</p>
      </div>
      <div style={afSvcStyles.grid} className="af-svc-grid">
        {items.map(([ic, t, d, tag], i) => (
          <Card key={i} interactive style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={afSvcStyles.icon}><Ico n={ic} s={22} /></span>
              {tag && <Badge tone={tag === 'Emerging' ? 'warning' : 'brand'}>{tag}</Badge>}
            </div>
            <h3 style={afSvcStyles.cardH}>{t}</h3>
            <p style={afSvcStyles.cardP}>{d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
window.AFServices = Services;
