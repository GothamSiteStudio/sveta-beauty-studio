import { gallery, waHref } from '../data/content.js'
import { Whatsapp } from '../lib/icons.jsx'

function Half({ src, tag }) {
  return (
    <div className="ba__half">
      {src ? <img src={src} alt={tag} /> : <span className="ph">תמונה</span>}
      <span className="tag">{tag}</span>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">תיק עבודות</span>
          <h2>לפני <span className="gold-text">ואחרי</span></h2>
          <p>התוצאה מדברת בעד עצמה. גלריה של עבודות אמיתיות — כל תמונה מתפרסמת באישור הלקוחה.</p>
        </div>
        <p className="gallery-note">
          ✦ אלו מסגרות להמחשה. כאן ייכנסו תמונות אמיתיות של לפני/אחרי (רצוי תוצאה מרפאה, 30 יום אחרי).
        </p>

        <div className="ba-grid">
          {gallery.map((g) => (
            <figure className="ba reveal" key={g.id}>
              <div className="ba__pair">
                <Half src={g.before} tag="לפני" />
                <Half src={g.after} tag="אחרי" />
              </div>
              <figcaption className="ba__cap">
                <span className="dot" /> {g.service}
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} className="reveal">
          <a className="btn btn--gold btn--lg" href={waHref('טיפול שראיתי בגלריה')} target="_blank" rel="noopener">
            <Whatsapp className="ico" /> אני רוצה תוצאה כזאת
          </a>
        </div>
      </div>
    </section>
  )
}
