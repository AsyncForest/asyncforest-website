/* Async Forest website — Header (sticky, translucent, mobile menu) */
const afHeaderStyles = {
  wrap: {
    position: 'sticky', top: 0, zIndex: 40,
    background: 'rgba(249,251,255,0.82)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border-subtle)',
  },
  inner: {
    maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)',
    height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  brand: { display: 'inline-flex', alignItems: 'baseline', gap: 9, textDecoration: 'none' },
  name: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.015em', color: 'var(--text-strong)' },
  async: { color: 'var(--gray-500)' },
  desc: { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' },
  nav: { display: 'flex', alignItems: 'center', gap: 28 },
  link: { fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', cursor: 'pointer', paddingBottom: 2, borderBottom: '2px solid transparent', transition: 'color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)' },
  linkActive: { color: 'var(--text-strong)', fontWeight: 600, borderBottom: '2px solid var(--gray-900)' },
};

function Header({ onNav, active }) {
  const { Button, IconButton } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const [open, setOpen] = React.useState(false);
  const links = [['Services', 'services'], ['How it works', 'process'], ['Sample report', 'sample'], ['Contact', 'contact']];
  const go = (id) => { setOpen(false); onNav && onNav(id); };
  return (
    <header style={afHeaderStyles.wrap}>
      <div style={afHeaderStyles.inner}>
        <a style={afHeaderStyles.brand} onClick={() => go('top')}>
          <span style={afHeaderStyles.name}><span style={afHeaderStyles.async}>Async</span> Forest</span>
          <span style={afHeaderStyles.desc}>Advisory</span>
        </a>
        <nav style={afHeaderStyles.nav} className="af-desktop-nav">
          {links.map(([l, id]) => (
            <a key={id} aria-current={active === id ? 'true' : undefined}
              style={{ ...afHeaderStyles.link, ...(active === id ? afHeaderStyles.linkActive : {}) }}
              onClick={() => go(id)}>{l}</a>
          ))}
          <Button size="sm" variant="primary" onClick={() => go('contact')}>Start a conversation</Button>
        </nav>
        <div className="af-mobile-nav" style={{ display: 'none' }}>
          <IconButton label="Menu" variant="secondary" onClick={() => setOpen(o => !o)}>
            <Ico n={open ? 'x' : 'menu'} s={20} />
          </IconButton>
        </div>
      </div>
      {open && (
        <div style={{ padding: '8px var(--gutter) 18px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(([l, id]) => <a key={id} style={{ ...afHeaderStyles.link, padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }} onClick={() => go(id)}>{l}</a>)}
          <div style={{ marginTop: 12 }}><Button fullWidth variant="primary" onClick={() => go('contact')}>Start a conversation</Button></div>
        </div>
      )}
    </header>
  );
}
window.AFHeader = Header;
