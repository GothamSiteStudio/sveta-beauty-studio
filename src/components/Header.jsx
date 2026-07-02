import { useEffect, useState } from 'react'
import { nav, waHref, telHref } from '../data/content.js'
import { Whatsapp, Phone, Menu, Close } from '../lib/icons.jsx'
import { asset } from '../lib/asset.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="header__logo" href="#top" aria-label="Sveta Beauty Studio">
          <img src={asset('logo/sveta-logo-mark.svg')} alt="Sveta Beauty Studio" />
          <b>Sveta&nbsp;Beauty&nbsp;Studio</b>
        </a>

        <nav className="header__nav">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="iconbtn" href={telHref()} aria-label="חיוג">
            <Phone className="ico" />
          </a>
          <a className="btn btn--gold header__cta-btn" href={waHref()} target="_blank" rel="noopener">
            <Whatsapp className="ico" />
            <span>תיאום תור</span>
          </a>
          <button
            className="iconbtn burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="תפריט"
            aria-expanded={open}
          >
            {open ? <Close className="ico" /> : <Menu className="ico" />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={close}>{n.label}</a>
        ))}
        <a className="btn btn--gold btn--block" href={waHref()} target="_blank" rel="noopener" onClick={close}>
          <Whatsapp className="ico" /> לתיאום תור בוואטסאפ
        </a>
      </div>
    </header>
  )
}
