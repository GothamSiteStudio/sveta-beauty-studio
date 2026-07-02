import { reviews } from '../data/content.js'
import { Star } from '../lib/icons.jsx'

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">מה אומרות הלקוחות</span>
          <h2>המלצות <span className="gold-text">מהלב</span></h2>
          <p>הדבר הכי חשוב לי הוא שתצאי מרוצה ובטוחה. אלו כמה מהמילים של מי שכבר עברה את התהליך.</p>
        </div>

        <div className="rev-grid">
          {reviews.map((r, i) => (
            <blockquote className="rev reveal" key={i}>
              <span className="rev__quote">”</span>
              <div className="rev__stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="ico" />
                ))}
              </div>
              <p>{r.text}</p>
              <div className="rev__by">
                <span className="rev__av">{r.name.trim().charAt(0)}</span>
                <div>
                  <b>{r.name}</b>
                  <span>{r.city}</span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        <p className="gallery-note" style={{ marginTop: 34 }}>
          ★ יתווספו כאן המלצות אמיתיות מגוגל / אינסטגרם / וואטסאפ (עם קישור לפרופיל בגוגל לאימות).
        </p>
      </div>
    </section>
  )
}
