import { waHref } from '../data/content.js'
import { Whatsapp } from '../lib/icons.jsx'

export default function WhatsappFloat() {
  return (
    <a className="wa-float" href={waHref()} target="_blank" rel="noopener" aria-label="שליחת הודעה בוואטסאפ">
      <Whatsapp />
      <span className="wa-label">לתיאום תור</span>
    </a>
  )
}
