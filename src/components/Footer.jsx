import { site, nav, waHref, telHref } from '../data/content.js'
import { Whatsapp, Phone, Instagram, Facebook, Location } from '../lib/icons.jsx'
import { asset } from '../lib/asset.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={asset('logo/sveta-logo.svg')} alt="Sveta Beauty Studio" />
            <p>
              עיצוב גבות טבעיות, הרמת גבות, איפור קבוע במכשור מתקדם והסרת שיער פנים ב{site.city}. מבט טבעי, יחס אישי, ותוצאה שנשארת איתך.
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
            <h3>ניווט</h3>
            <ul>
              {nav.map((n) => (
                <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>יצירת קשר</h3>
            <ul>
              <li><a href={waHref()} target="_blank" rel="noopener"><Whatsapp className="ico" /> וואטסאפ</a></li>
              <li><a href={telHref()}><Phone className="ico" /> {site.phoneDisplay}</a></li>
              <li><Location className="ico" /> {site.address}</li>
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
