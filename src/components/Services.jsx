import { services, waHref } from '../data/content.js'
import { serviceIcon, Whatsapp } from '../lib/icons.jsx'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">הטיפולים שלי</span>
          <h2>שירותים מדויקים, <span className="gold-text">תוצאה טבעית</span></h2>
          <p>כל טיפול מותאם אישית למבנה הפנים, לגוון ולסגנון שלך מהמראה היומיומי ועד לשינוי שמלווה אותך לאורך זמן.</p>
        </div>

        <div className="svc-grid">
          {services.map((sv) => {
            const Ic = serviceIcon[sv.id]
            return (
              <article className={`svc reveal ${sv.featured ? 'is-featured' : ''}`} key={sv.id}>
                {sv.featured && <span className="svc__badge">הכי מבוקש</span>}
                {Ic && <Ic className="svc__ic" />}
                <h3>{sv.name}</h3>
                <div className="sub">{sv.sub}</div>
                <p>{sv.desc}</p>
                <div className="svc__meta">
                  {sv.meta.map((m, i) => <span key={i}>{m}</span>)}
                </div>
                <a className="btn btn--ghost" href={waHref(sv.name)} target="_blank" rel="noopener">
                  <Whatsapp className="ico" /> לתיאום תור
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
