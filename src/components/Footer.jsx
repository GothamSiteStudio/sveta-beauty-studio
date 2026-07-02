import { site, nav, waHref, telHref } from '../data/content.js'
import { Whatsapp, Phone, Instagram, Facebook, Location } from '../lib/icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo/sveta-logo.svg" alt="Sveta Beauty Studio" />
            <p>
              איפור קבוע, עיצוב גבות טבעיות והדבקת ריסים ב{site.city}. מבט טבעי, יחס אישי, ותוצאה שנשארת איתך.
            </p>
            <div className="footer__soc">
              {site.instagramUrl && (
                <a className="iconbtn" href={site.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram">
                  <Instagram className="ico" />
                </a>
              )}
              {site.facebookUrl && (
                <a className="iconbtn" href={site.facebookUrl} target="_blank" rel="noopener" aria-label="Facebook">
                  <Facebook className="ico" />
                </a>
              )}
              <a className="iconbtn" href={waHref()} target="_blank" rel="noopener" aria-label="WhatsApp">
                <Whatsapp className="ico" />
              </a>
            </div>
          </div>

          <div>
            <h5>ניווט</h5>
            <ul>
              {nav.map((n) => (
                <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5>יצירת קשר</h5>
            <ul>
              <li><a href={waHref()} target="_blank" rel="noopener"><Whatsapp className="ico" /> וואטסאפ</a></li>
              <li><a href={telHref()}><Phone className="ico" /> {site.phone.replace(/^972/, '0')}</a></li>
              <li><Location className="ico" /> {site.city}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Sveta Beauty Studio · כל הזכויות שמורות</span>
          <span>עוצב ונבנה על ידי Gotham Site Studio</span>
        </div>
      </div>
    </footer>
  )
}
