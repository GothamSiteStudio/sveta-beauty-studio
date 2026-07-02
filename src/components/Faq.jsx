import { useId, useRef, useState } from 'react'
import { faq, waHref } from '../data/content.js'
import { Plus, Whatsapp } from '../lib/icons.jsx'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  const body = useRef(null)
  const uid = useId()
  const panelId = `faq-panel-${uid}`
  const btnId = `faq-btn-${uid}`
  return (
    <div className={`faq__item ${open ? 'open' : ''}`}>
      <button
        id={btnId}
        className="faq__q"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{q}</span>
        <span className="pm" aria-hidden="true"><Plus className="ico" /></span>
      </button>
      <div
        id={panelId}
        className="faq__a"
        role="region"
        aria-labelledby={btnId}
        ref={body}
        style={{ maxHeight: open ? `${body.current?.scrollHeight || 300}px` : 0 }}
      >
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">מה שחשוב לדעת</span>
          <h2>שאלות <span className="gold-text">נפוצות</span></h2>
          <p>ריכזתי כאן את השאלות שהכי חוזרות. לא מצאת תשובה? אני כאן בוואטסאפ.</p>
        </div>

        <div className="faq reveal">
          {faq.map((f, i) => <Item key={i} {...f} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 34 }} className="reveal">
          <a className="btn btn--ghost btn--lg" href={waHref('שאלה')} target="_blank" rel="noopener">
            <Whatsapp className="ico" /> יש לי עוד שאלה
          </a>
        </div>
      </div>
    </section>
  )
}
