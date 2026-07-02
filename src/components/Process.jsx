import { process, healing } from '../data/content.js'

export default function Process() {
  return (
    <section className="section section--tight" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">התהליך</span>
          <h2>איך זה עובד — <span className="gold-text">בלי הפתעות</span></h2>
          <p>מהרגע שנכנסת ועד התוצאה הסופית. הכול רגוע, מוסבר, ובקצב שלך.</p>
        </div>

        <div className="proc-grid">
          {process.map((p) => (
            <div className="proc reveal" key={p.n}>
              <div className="proc__n">{String(p.n).padStart(2, '0')}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </div>
          ))}
        </div>

        <div className="healing reveal">
          <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)' }}>
            <b style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-1)', fontSize: 17 }}>
              מה קורה בהחלמה?
            </b>
          </div>
          {healing.map((h, i) => (
            <div className="healing__row" key={i}>
              <b>{h.when}</b>
              <span>{h.what}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
