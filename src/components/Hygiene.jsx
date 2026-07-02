import { hygiene } from '../data/content.js'
import { Shield, Check } from '../lib/icons.jsx'

export default function Hygiene() {
  return (
    <section className="section hygiene">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">בטיחות מעל הכול</span>
          <h2><span className="gold-text">{hygiene.title}</span></h2>
          <p>{hygiene.lead}</p>
        </div>

        <div className="hyg-grid">
          {hygiene.points.map((p, i) => (
            <div className="hyg reveal" key={i}>
              {i === 0 ? <Shield className="hyg__ic" /> : <Check className="hyg__ic" />}
              <div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
