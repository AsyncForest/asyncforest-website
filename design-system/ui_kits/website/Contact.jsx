/* Async Forest website — Contact form (interactive → thank-you) */
const afContactStyles = {
  section: { maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' },
  head: { textAlign: 'center', maxWidth: '48ch', margin: '0 auto 36px' },
  h2: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'clamp(1.9rem,3.5vw,2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: '14px 0 12px' },
  lead: { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  thanks: { textAlign: 'center', padding: '20px 0' },
  tIcon: { width: 56, height: 56, borderRadius: '50%', background: 'var(--gray-100)', color: 'var(--gray-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  tH: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 26, color: 'var(--text-strong)', margin: '0 0 8px' },
  tP: { fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-muted)', margin: 0 },
};

function Contact() {
  const { Card, Field, Input, Textarea, Select, Checkbox, Button, Eyebrow } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const [sent, setSent] = React.useState(false);
  const [nda, setNda] = React.useState(false);
  return (
    <section style={afContactStyles.section} id="contact">
      <div style={afContactStyles.head}>
        <Eyebrow>Start a conversation</Eyebrow>
        <h2 style={afContactStyles.h2}>Tell me what you’re about to bet on</h2>
        <p style={afContactStyles.lead}>A few sentences is plenty. I’ll reply with whether I can help, and how I’d scope it.</p>
      </div>
      <Card padding="clamp(1.5rem,4vw,2.5rem)">
        {sent ? (
          <div style={afContactStyles.thanks}>
            <span style={afContactStyles.tIcon}><Ico n="check" s={26} /></span>
            <h3 style={afContactStyles.tH}>Thanks — that’s with me.</h3>
            <p style={afContactStyles.tP}>I read every message myself and usually reply within a couple of working days.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={afContactStyles.row} className="af-contact-row">
              <Field label="Your name" htmlFor="n"><Input id="n" placeholder="Alex Rivera" required /></Field>
              <Field label="Work email" htmlFor="e" hint="I’ll only use this to reply."><Input id="e" type="email" placeholder="you@company.com" required /></Field>
            </div>
            <Field label="What kind of engagement?" htmlFor="t">
              <Select id="t" defaultValue="assurance">
                <option value="assurance">Technical assurance review</option>
                <option value="architecture">Architecture & AI in production</option>
                <option value="security">Security & scalability audit</option>
                <option value="exposure">Regulatory exposure flagging</option>
                <option value="other">Something else</option>
              </Select>
            </Field>
            <Field label="What would you like reviewed?" htmlFor="m">
              <Textarea id="m" rows={4} placeholder="A few sentences on the system, the stack, and what’s worrying you." />
            </Field>
            <Checkbox id="nda" checked={nda} onChange={(e) => setNda(e.target.checked)} label="This may need to be covered by an NDA before we talk specifics." />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
              <Button type="submit" size="lg" variant="primary" iconRight={<Ico n="arrow-right" s={18} />}>Send it over</Button>
            </div>
          </form>
        )}
      </Card>
    </section>
  );
}
window.AFContact = Contact;
