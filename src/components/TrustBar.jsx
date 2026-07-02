import { trustBar } from '../data/content.js'
import { trustIcon } from '../lib/icons.jsx'

export default function TrustBar() {
  return (
    <div className="container" style={{ marginTop: '-34px', position: 'relative', zIndex: 2 }}>
      <div className="trust reveal">
        {trustBar.map((t, i) => {
          const Ic = trustIcon[t.icon]
          return (
            <div className="trust__item" key={i}>
              {Ic && <Ic className="ti-ic" />}
              <div>
                <b>{t.value}</b>
                <span>{t.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
