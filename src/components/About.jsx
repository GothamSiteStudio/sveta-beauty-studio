import { about } from '../data/content.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div className="about__photo reveal">
          <img className="mark" src="/logo/sveta-logo-mark.svg" alt="" />
        </div>
        <div className="about reveal">
          <span className="kicker">{about.kicker}</span>
          <h2><span className="gold-text">{about.title}</span></h2>
          <div className="role">{about.role}</div>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="sign">{about.signature}</div>
        </div>
      </div>
    </section>
  )
}
