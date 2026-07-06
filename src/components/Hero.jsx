import { hero, waHref, telHref } from '../data/content.js'
import { Whatsapp, Phone } from '../lib/icons.jsx'
import { asset } from '../lib/asset.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy reveal">
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <h1>
            <span className="gold-text">{hero.title}</span>
          </h1>
          <p className="hero__lead">{hero.lead}</p>
          <div className="hero__cta">
            <a className="btn btn--gold btn--lg" href={waHref()} target="_blank" rel="noopener">
              <Whatsapp className="ico" /> לתיאום תור בוואטסאפ
            </a>
            <a className="btn btn--ghost btn--lg" href={telHref()}>
              <Phone className="ico" /> חייגי אליי
            </a>
          </div>
          <div className="hero__stats">
            {hero.stats.map((s, i) => (
              <div className="hero__stat" key={i}>
                <b>{s.n}</b>
                <span>{s.t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__art reveal">
          <div className="halo" />
          <div className="frame">
            <img
              className="photo"
              src={asset('photos/studio.jpg')}
              srcSet={`${asset('photos/studio.jpg')} 900w, ${asset('photos/studio@2x.jpg')} 1300w`}
              sizes="(max-width: 980px) 92vw, 40vw"
              alt="הקליניקה של Sveta Beauty Studio בחדרה"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
