import { site, areas, waHref, telHref } from '../data/content.js'
import { Whatsapp, Phone, Location, Clock, Instagram } from '../lib/icons.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">בואי נדבר</span>
          <h2>לתיאום תור <span className="gold-text">ולכל שאלה</span></h2>
          <p>הדרך הכי מהירה אליי היא בוואטסאפ. כותבת לי לאיזה טיפול, ואני חוזרת אלייך בהקדם.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__card reveal">
            <h3>מוכנה להתחיל?</h3>
            <p>לחיצה אחת — ואנחנו מתאמות. בלי טפסים מסובכים, בלי התחייבות.</p>
            <div className="contact__actions">
              <a className="btn btn--gold btn--lg btn--block" href={waHref()} target="_blank" rel="noopener">
                <Whatsapp className="ico" /> לתיאום תור בוואטסאפ
              </a>
              <a className="btn btn--ghost btn--lg btn--block" href={telHref()}>
                <Phone className="ico" /> חייגי: {site.phone.replace(/^972/, '0')}
              </a>
            </div>
            <div className="areas" style={{ marginTop: 26 }}>
              {areas.map((a) => <span key={a}>{a}</span>)}
            </div>
          </div>

          <div className="contact__meta reveal">
            <div className="cmeta">
              <span className="cm-ic"><Location className="ico" /></span>
              <div>
                <b>הסטודיו</b>
                <span>{site.address || `${site.city} · הכתובת המדויקת תישלח בתיאום`}</span>
              </div>
            </div>
            <div className="cmeta">
              <span className="cm-ic"><Clock className="ico" /></span>
              <div style={{ flex: 1 }}>
                <b style={{ marginBottom: 8 }}>שעות פעילות</b>
                {site.hours.map((h, i) => (
                  <div className="hours-row" key={i}>
                    <span>{h.d}</span>
                    <span>{h.h}</span>
                  </div>
                ))}
              </div>
            </div>
            {site.instagramUrl && (
              <div className="cmeta">
                <span className="cm-ic"><Instagram className="ico" /></span>
                <div>
                  <b>עקבו אחריי</b>
                  <a href={site.instagramUrl} target="_blank" rel="noopener">{site.instagram}</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
