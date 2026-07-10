/* Async Forest website — Footer */
const afFooterStyles = {
  wrap: { background: 'var(--surface-dark)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(2.5rem,5vw,4rem) var(--gutter) 2.5rem' },
  top: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.08)' },
  brand: { display: 'inline-flex', alignItems: 'baseline', gap: 9 },
  name: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 24, color: 'var(--gray-50)' },
  async: { color: 'var(--gray-400)' },
  desc: { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray-400)' },
  tag: { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--gray-400)', lineHeight: 1.6, maxWidth: '34ch', marginTop: 14 },
  colTitle: { fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: 14 },
  link: { display: 'block', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--gray-50)', textDecoration: 'none', marginBottom: 10, cursor: 'pointer', opacity: 0.85 },
  cols: { display: 'flex', gap: 64, flexWrap: 'wrap' },
  bottom: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 22, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-500)' },
};

function Footer({ onNav }) {
  return (
    <footer style={afFooterStyles.wrap}>
      <div style={afFooterStyles.inner}>
        <div style={afFooterStyles.top}>
          <div style={{ maxWidth: 360 }}>
            <span style={afFooterStyles.brand}>
              <span style={afFooterStyles.name}><span style={afFooterStyles.async}>Async</span> Forest</span>
              <span style={afFooterStyles.desc}>Advisory</span>
            </span>
            <p style={afFooterStyles.tag}>Independent, accountable technical assurance and advisory for founders building on systems that have to hold.</p>
          </div>
          <div style={afFooterStyles.cols}>
            <div>
              <div style={afFooterStyles.colTitle}>Services</div>
              <a style={afFooterStyles.link} onClick={() => onNav('services')}>Assurance review</a>
              <a style={afFooterStyles.link} onClick={() => onNav('services')}>Architecture & AI</a>
              <a style={afFooterStyles.link} onClick={() => onNav('services')}>Security & scale</a>
              <a style={afFooterStyles.link} onClick={() => onNav('services')}>Exposure flagging</a>
            </div>
            <div>
              <div style={afFooterStyles.colTitle}>Practice</div>
              <a style={afFooterStyles.link} onClick={() => onNav('process')}>How it works</a>
              <a style={afFooterStyles.link} onClick={() => onNav('sample')}>Sample report</a>
              <a style={afFooterStyles.link} onClick={() => onNav('contact')}>Contact</a>
            </div>
          </div>
        </div>
        <div style={afFooterStyles.bottom}>
          <span className="tnums">Async Forest Advisory Ltd · Registered in England &amp; Wales · No. 14827193</span>
          <span style={{ display: 'inline-flex', gap: 18, flexWrap: 'wrap' }}>
            <a style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)', textDecoration: 'none', cursor: 'pointer' }} href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
            <a style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)', textDecoration: 'none', cursor: 'pointer' }} href="#" onClick={(e) => e.preventDefault()}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.AFFooter = Footer;
