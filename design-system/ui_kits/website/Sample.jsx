/* Async Forest website — Sample report excerpt (credibility, dark band) */
const afSampleStyles = {
  band: { background: 'var(--surface-dark)' },
  section: { maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' },
  grid: { display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'center' },
  h2: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'clamp(1.9rem,3.5vw,2.6rem)', lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--gray-50)', margin: '14px 0 16px' },
  p: { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65, color: 'var(--gray-400)', margin: '0 0 14px', maxWidth: '46ch' },
  paper: { background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-offset-dark)', overflow: 'hidden' },
  paperHead: { padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  paperTitle: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 17, color: 'var(--text-strong)' },
  meta: { fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', color: 'var(--text-subtle)', textTransform: 'uppercase' },
  body: { padding: 22, display: 'flex', flexDirection: 'column', gap: 12 },
};

function Sample() {
  const { Eyebrow, Callout, Badge } = window.AsyncForestDesignSystem_6656fd;
  return (
    <div style={afSampleStyles.band} id="sample">
      <section style={afSampleStyles.section}>
        <div style={afSampleStyles.grid} className="af-sample-grid">
          <div>
            <Eyebrow color="var(--gray-400)">The deliverable</Eyebrow>
            <h2 style={afSampleStyles.h2}>A written report, not a rubber stamp</h2>
            <p style={afSampleStyles.p}>You get a scope-limited document you can hand to a board, an investor, or your own team. Every finding is prioritised, verified, and paired with a fix.</p>
            <p style={afSampleStyles.p}>Here’s the shape of it — a couple of findings from a fictional payment-path review.</p>
          </div>
          <div style={afSampleStyles.paper}>
            <div style={afSampleStyles.paperHead}>
              <span style={afSampleStyles.paperTitle}>Payment path — assurance review</span>
              <Badge tone="success">Verified</Badge>
            </div>
            <div style={afSampleStyles.body}>
              <div style={afSampleStyles.meta}>Findings · prioritised</div>
              <Callout tone="risk" title="Priority 1 · Correctness">No idempotency key on the charge endpoint. A client retry after a timeout can double-charge. Fix: derive a key from the order id and enforce it at the gateway.</Callout>
              <Callout tone="caution" title="Priority 2 · Resilience">Retries on the downstream call are unbounded. A single stall amplifies load. Fix: cap attempts, add jittered backoff and a circuit breaker.</Callout>
              <Callout tone="note" title="Observation · Exposure">Card-holder data is logged at debug. Flagged as a technical observation for your DPO — not legal advice.</Callout>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.AFSample = Sample;
