import { about } from '../data/content.js'
import { asset } from '../lib/asset.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div className="about__photo reveal">
          <img
            className="photo"
            src={asset('photos/studio.jpg')}
            srcSet={`${asset('photos/studio.jpg')} 900w, ${asset('photos/studio@2x.jpg')} 1300w`}
            sizes="(max-width: 980px) 88vw, 34vw"
            alt="הקליניקה של סבטה פשייב בחדרה"
          />
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
