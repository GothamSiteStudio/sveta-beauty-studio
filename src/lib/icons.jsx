// Lightweight inline SVG icons (stroke-based, currentColor). No dependency.
const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Whatsapp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.15-1.65-.8-1.9-.9-.26-.1-.44-.15-.63.15-.18.3-.72.9-.88 1.08-.16.18-.32.2-.6.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.02-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.63-1.52-.87-2.08-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.5.07-.75.36-.26.3-.98.96-.98 2.33 0 1.38 1 2.7 1.15 2.9.14.2 1.98 3.02 4.8 4.24.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.55-.34z" />
      <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.02.8.8-2.95-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  )
}

export function Phone({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z" />
    </svg>
  )
}

export function Instagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Facebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.8.4-1.3 1.4-1.3H17V3h-2.3c-2.3 0-3.4 1.3-3.4 3.4v2.1H9.3V11h2v9h3v-9h2.1l.4-2.5h-2.3z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Location({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.6 12 21 12 21z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </svg>
  )
}

export function Clock({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  )
}

export function Star({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3l2.4 5.3 5.8.5-4.4 3.8 1.4 5.7L12 15.9 6.8 18.3l1.4-5.7-4.4-3.8 5.8-.5z" />
    </svg>
  )
}

export function Gem({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M6 4h12l3 4-9 12L3 8z" />
      <path d="M3 8h18M9 4l-3 4 6 12 6-12-3-4M9 8l3 12 3-12" />
    </svg>
  )
}

export function Shield({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M12 3l7 2.5v5.5c0 4.6-3 8-7 9.5-4-1.5-7-4.9-7-9.5V5.5L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function Heart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M12 20s-7-4.6-7-9.4A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 3.6C19 15.4 12 20 12 20z" />
    </svg>
  )
}

export function Sparkle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c.4 3.9 1.1 6.6 2.5 8 1.4 1.4 4.1 2.1 8 2.5-3.9.4-6.6 1.1-8 2.5-1.4 1.4-2.1 4.1-2.5 8-.4-3.9-1.1-6.6-2.5-8-1.4-1.4-4.1-2.1-8-2.5 3.9-.4 6.6-1.1 8-2.5C10.9 8.6 11.6 5.9 12 2z" />
    </svg>
  )
}

export function Brow({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M3 12c3.2-3.5 8-4.8 12.5-3.6 2 .5 3.8 1.5 5.5 2.9" />
      <path d="M6 11c2-.5 3.7-.4 5 .3M12 10.5c2.2-.3 4.2.2 6 1.4" opacity="0.7" />
    </svg>
  )
}

export function Lips({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M3 11s2.5-2.5 4.5-2.5S11 10 12 10s2.5-1.5 4.5-1.5S21 11 21 11s-3.5 5-9 5-9-5-9-5z" />
      <path d="M3 11h18" />
    </svg>
  )
}

export function Lash({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M3 14c3-3.5 6-5.2 9-5.2s6 1.7 9 5.2" />
      <path d="M6.5 12.6 5.5 9M12 11.5V7.7M17.5 12.6l1-3.6M9 11.7 8.4 8.3M15 11.7l.6-3.4" />
    </svg>
  )
}

export function Palette({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M12 3a9 9 0 0 0 0 18c1.7 0 2-1.2 1.3-2-.7-.9-.2-2 1-2H16a5 5 0 0 0 5-5c0-4.4-4-6-9-6z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Check({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export function Plus({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M12 6v12M6 12h12" />
    </svg>
  )
}

export function Menu({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function Close({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function Razor({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...s} aria-hidden="true">
      <path d="M14 3l7 7-4 4-7-7z" />
      <path d="M10 7l-6.5 6.5a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0L14 11" />
      <path d="M6 13.5l2 2M8.5 11l2 2M11 8.5l2 2" opacity="0.7" />
    </svg>
  )
}

export const serviceIcon = {
  pmu: Palette,
  'brows-design': Brow,
  'brow-lift': Sparkle,
  'hair-removal': Razor,
}

export const trustIcon = { star: Star, gem: Gem, shield: Shield, heart: Heart }
