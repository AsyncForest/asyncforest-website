# StyleSeed — Design Lock
<!-- Locked design decisions for this project. The agent re-reads this every prompt and
     must obey it. Change a value here to change it project-wide. -->
- App domain:        independent technical assurance (B2B professional services)
- Surface:           desktop-web (B2B)
- Mood:              soft · minimal · airy · calm
- Skin:              custom — "Async Forest" (ink-on-paper monochrome, design-system tokens)
- Key color (accent): #234a8f   # the only accent family — everything else greyscale ink.
                     Brand artwork (mark, hero landscape) may use the full accent ramp
                     (#234a8f → #1b3c76 → #142c58) plus tints (#cdd9ee, #eef2fb);
                     UI chrome still gets accent as rare emphasis only
- Font:              Hanken Grotesk (display + body) · JetBrains Mono (eyebrows/labels/code)
- Radius personality: soft      # 10px controls · 14px cards · larger media blocks
- Elevation:         solid blur-free offset block shadow (2–6px grey), presses in on interaction
- Motion seed:       Silk       # 200ms ease-out fades/shifts · no bounce · reduced-motion respected.
                     Homepage hero exception: orchestrated ~1s grow-in (back row first),
                     gentle idle sway (±0.45–0.85° by depth), scroll-driven gust (≤3°,
                     smooth decay) — all ease-out/ease-in-out, all off under reduced-motion
- Type scale:        desktop (body 16–18px)
- Density:           comfortable
- Semantic resolve:  accent #234a8f = emphasis/action highlights only; success = forest green
                     (functional, confirmation moments only); info shares the blue family but muted
- Brand mark:        fir silhouette in three flush thirds — hatched / pixelated / solid —
                     stepping the accent ramp top to bottom, with a second tint tree
                     (#cdd9ee) behind, offset up-right, knocked out with a breathing gap.
                     Favicon = same mark; dark mode goes near-white (textures carry the states)
- Brand states:      three texture states carry the identity everywhere: 45° hatch,
                     pixel checker, solid. Use them as a set (the mark) or mapped to
                     depth/distance (hero: crosshatch far, stripe mid, solid front)
- Signature move:    the mark motif appears ONCE per page (header lockup), never as
                     decoration elsewhere. Homepage-only exception: the hero landscape —
                     full-width strata (blue-50 → accent-border → accent-active) with 45°
                     hatch dissolve edges, plus the brand-tree treeline (every tree keeps
                     the tint-behind offset)
- Voice:             sentence case everywhere · "you"/"I", never royal "we" · no emoji ·
                     warm, crisp, no hype · "technical observations, not legal advice"
- Locked:            2026-07-12  (mark, brand states, hero landscape + motion added)
