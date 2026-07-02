// ---------------------------------------------------------------------------
// Sveta Beauty Studio all site content in one place (Hebrew, RTL).
//
// This is the FIRST version, built from market research before Sveta's intake
// answers. Anything marked  // TODO  is a placeholder to confirm/replace via the
// characterization questionnaire (שאלון איפיון). Update `site` first every CTA
// on the site reads the phone/WhatsApp from here.
// ---------------------------------------------------------------------------

export const site = {
  brand: 'Sveta Beauty Studio',
  owner: 'סבטה פשייב',
  city: 'חדרה',
  areaServed: 'חדרה והסביבה',
  tagline: 'מבט טבעי שנשאר איתך',

  // TODO confirm the real business number (with country code, digits only).
  // Used for both the WhatsApp deep-links and click-to-call.
  phone: '972500000000',
  // Pre-filled WhatsApp opener (research: lowers friction, captures intent).
  waMessage: 'היי סבטה 🙂 הגעתי מהאתר ואשמח לתאם תור ל',

  instagram: '', // TODO @username
  instagramUrl: '', // TODO
  facebookUrl: '', // TODO
  email: '', // TODO
  address: '', // TODO full studio address in Hadera for the map pin
  hours: [
    { d: 'ראשון – חמישי', h: '09:00 – 19:00' }, // TODO confirm
    { d: 'שישי', h: '09:00 – 13:00' },
    { d: 'שבת', h: 'סגור' },
  ],
}

// Small helpers for links (kept here so content stays declarative).
export const telHref = () => `tel:+${site.phone}`
export const waHref = (suffix = '') => {
  const text = encodeURIComponent(site.waMessage + (suffix ? suffix : '...'))
  return `https://wa.me/${site.phone}?text=${text}`
}

export const nav = [
  { id: 'about', label: 'עליי' },
  { id: 'services', label: 'שירותים' },
  { id: 'gallery', label: 'לפני ואחרי' },
  { id: 'process', label: 'איך זה עובד' },
  { id: 'reviews', label: 'המלצות' },
  { id: 'faq', label: 'שאלות נפוצות' },
  { id: 'contact', label: 'יצירת קשר' },
]

export const hero = {
  eyebrow: 'איפור קבוע · עיצוב גבות · ריסים חדרה',
  title: 'מבט טבעי\nשנשאר איתך',
  lead:
    'איפור קבוע ומיקרופיגמנטציה במכשור מתקדם, עיצוב גבות טבעיות, הרמת גבות והדבקת ריסים. ' +
    'עבודה עדינה ומדויקת שמדגישה את מה שכבר יפה בך בלי מראה "מצויר", רק את, מטופחת.',
  stats: [
    { n: 'טבעי', t: 'תוצאה שאף אחד לא "יתפוס"' },
    { n: 'סטרילי', t: 'מחטים חד-פעמיות שנפתחות מולך' },
    { n: 'מדויק', t: 'את מאשרת צורה וצבע לפני שמתחילים' },
  ],
}

// Trust strip under the hero. Replace values with the real numbers after intake.
export const trustBar = [
  { icon: 'star', label: 'לקוחות ממליצות', value: 'דירוג 5★' }, // TODO real GBP rating+count
  { icon: 'gem', label: 'מכשור מתקדם', value: 'טכנולוגיה מהדור החדש' },
  { icon: 'shield', label: 'סטריליזציה מלאה', value: 'תקן היגיינה קפדני' },
  { icon: 'heart', label: 'יחס אישי', value: 'סטודיו בוטיק, לא פס ייצור' },
]

export const about = {
  kicker: 'נעים להכיר',
  title: 'סבטה פשייב',
  role: 'מומחית לאיפור קבוע ועיצוב גבות',
  // TODO replace with Sveta's real first-person story from the questionnaire.
  paragraphs: [
    'אני מאמינה שאיפור קבוע טוב הוא כזה שלא רואים פשוט מתעוררים בבוקר מטופחות, בלי מאמץ ובלי איפור. ' +
      'כל טיפול אצלי מתחיל בהקשבה: מה מפריע לך, מה החלום, ואיזו צורה תחמיא דווקא לפנים שלך.',
    'אני עובדת במכשור מתקדם ובשיטות עדינות שמכבדות את העור, עם דגש אובססיבי על סימטריה, צבע נכון ותוצאה טבעית. ' +
      'לפני שנוגעים בפיגמנט נסקיצה יחד את הגבות, ורק כשאת מאושרת לגמרי, מתחילים.',
    'המטרה שלי אחת: שתצאי מהסטודיו מרגישה יותר את עצמך. יפה, בטוחה, ורגועה.',
  ],
  signature: 'סבטה',
}

// Services the light services are framed as the low-risk "first date".
export const services = [
  {
    id: 'pmu',
    name: 'איפור קבוע לגבות',
    sub: 'מיקרופיגמנטציה במכשור מתקדם',
    desc:
      'גבות מלאות, סימטריות וטבעיות בשיטת השערה, פודרה או שיטה משולבת מותאם למבנה הפנים ולצבע שלך. ' +
      'מושלם לגבות דלילות, פערים או צורה שאבדה עם השנים.',
    meta: ['משך: כ-2.5 שעות', 'מחזיק כ-1–3 שנים', 'כולל השלמה'],
    featured: true,
  },
  {
    id: 'lips',
    name: 'איפור קבוע לשפתיים',
    sub: 'הדגשת קו וגוון טבעי',
    desc:
      'צבע בריא ואחיד לשפתיים, הדגשת הקו והחזרת נפח ויטלי עדין, לא "מצויר", בגוון שנבחר יחד.',
    meta: ['משך: כ-2 שעות', 'מחזיק כ-1–2 שנים'],
  },
  {
    id: 'brows-design',
    name: 'עיצוב גבות טבעיות',
    sub: 'סידור, מדידה ותכנון צורה',
    desc:
      'עיצוב מדויק לפי קווי הפנים והזהב שלך הבסיס לכל מבט מטופח. ידני, נקי ומחמיא.',
    meta: ['משך: כ-30 דק׳'],
  },
  {
    id: 'brow-lift',
    name: 'הרמת גבות (למינציה)',
    sub: 'מראה מלא ומורם בלי מחט',
    desc:
      'יישור והרמה של שערות הגבה למראה מסודר, מלא וטבעי לכמה שבועות. הכניסה הרכה לעולם הגבות בלי מחויבות.',
    meta: ['משך: כ-45–60 דק׳', 'מחזיק כ-8–12 שבועות'],
  },
  {
    id: 'brow-tint',
    name: 'צביעת גבות',
    sub: 'צבע / חינה',
    desc:
      'העמקת צבע והשלמת פערים למראה מלא יותר, לרוב בשילוב עיצוב או למינציה.',
    meta: ['משך: כ-20 דק׳'],
  },
  {
    id: 'lashes',
    name: 'ריסים',
    sub: 'הרמת ריסים / הדבקת ריסים',
    desc:
      'מבט פקוח ומוגדר הרמת ריסים טבעית שמדגישה את הריסים שלך, או הדבקת ריסים לנפח ואורך.',
    meta: ['הרמה מחזיקה כ-6–8 שבועות'],
  },
]

// "What to expect" removes fear of the unknown (top booking blocker).
export const process = [
  { n: 1, t: 'ייעוץ והקשבה', d: 'מבינים מה מפריע, מה החלום ומה יתאים למבנה הפנים שלך.' },
  { n: 2, t: 'סקיצה ואישור', d: 'משרטטים יחד את הצורה והצבע. מתחילים רק כשאת מאושרת לגמרי.' },
  { n: 3, t: 'הרדמה מקומית', d: 'חומר הרדמה עדין שהופך את התהליך לנוח אי-נוחות קלה בלבד.' },
  { n: 4, t: 'הטיפול', d: 'עבודה מדויקת ורגועה במכשור מתקדם, בקצב שלך.' },
  { n: 5, t: 'הנחיות אחרי', d: 'מלווה אותך עם הוראות טיפול ברורות להחלמה חלקה.' },
  { n: 6, t: 'השלמה (רטוש)', d: 'פגישת השלמה לאחר ההחלמה כדי שהתוצאה תהיה מושלמת.' },
]

// Healing timeline mini-explainer (research-recommended reassurance).
export const healing = [
  { when: 'ימים 1–3', what: 'הצבע כהה יותר ונפיחות קלה לגמרי נורמלי.' },
  { when: 'ימים 5–10', what: 'קילוף עדין; חשוב לא לגעת ולתת לעור לעשות את שלו.' },
  { when: 'שבועות 3–6', what: 'הצבע מתבהר ומתייצב לגוון הסופי, הטבעי.' },
]

export const hygiene = {
  title: 'בטיחות והיגיינה בלי פשרות',
  lead: 'זו עבודה על הפנים שלך. אני מתייחסת אליה בדיוק ברצינות שהיא דורשת.',
  points: [
    { t: 'מחטים חד-פעמיות סטריליות', d: 'נפתחות מולך בתחילת כל טיפול, ונזרקות בסיום.' },
    { t: 'פיגמנטים מאושרים', d: 'חומרים איכותיים בתקן מוכר, מותאמים לגוון העור.' }, // TODO name standard/brand
    { t: 'עמדה מחוטאת', d: 'חיטוי מלא של העמדה והכלים לפני ואחרי כל לקוחה, כפפות חד-פעמיות.' },
    { t: 'מקצועיות ואחריות', d: 'הכשרה מקצועית וליווי צמוד לאורך כל התהליך.' }, // TODO license/insurance
  ],
}

// Placeholder reviews replace with real, verifiable Google/Instagram/WhatsApp
// testimonials (with permission) after intake. Kept realistic in tone.
export const reviews = [
  {
    name: 'ד׳',
    city: 'חדרה',
    text: 'הגעתי בפחד שיצא מלאכותי ויצא הכי טבעי שיש. חברות שאלו אם עשיתי משהו, ולא הצליחו להבין מה השתנה.',
  },
  {
    name: 'מ׳',
    city: 'פרדס חנה',
    text: 'סבטה מקצוענית וסבלנית. הראתה לי את הצורה לפני, הרגישה אותי לגמרי. הסטודיו נקי ומפנק וקיבלתי יחס אישי.',
  },
  {
    name: 'ל׳',
    city: 'קיסריה',
    text: 'סוף סוף גבות שאני לא צריכה לצייר כל בוקר. חוסך לי זמן, ואני מרגישה מטופחת כל היום.',
  },
]

export const faq = [
  {
    q: 'האם זה כואב?',
    a: 'רוב הלקוחות מתארות אי-נוחות קלה בלבד. אני עובדת עם חומר הרדמה מקומי שהופך את התהליך לנוח מאוד.',
  },
  {
    q: 'כמה זמן התוצאה מחזיקה?',
    a: 'איפור קבוע לגבות מחזיק בדרך כלל בין שנה לשלוש, בהתאם לעור, לאורח החיים ולחשיפה לשמש. השלמה תקופתית שומרת על הרעננות.',
  },
  {
    q: 'איך נראה תהליך ההחלמה?',
    a: 'בימים הראשונים הצבע כהה יותר, אחר כך יש קילוף עדין, ותוך 3–6 שבועות הצבע מתבהר ומתייצב לגוון הסופי והטבעי.',
  },
  {
    q: 'מי לא מתאימה לטיפול?',
    a: 'בין היתר: הריון והנקה, סוכרת לא מאוזנת, טיפול ברוקוטן, נטילת מדללי דם ומחלות עור פעילות באזור. בייעוץ נעבור על ההתאמה האישית שלך.', // TODO Sveta to confirm her list
  },
  {
    q: 'האם צריך פגישת השלמה?',
    a: 'כן. השלמה (רטוש) לאחר ההחלמה היא חלק טבעי מהתהליך ומאפשרת לדייק את התוצאה. היא כלולה בטיפול איפור קבוע.',
  },
  {
    q: 'איך מתאמים תור?',
    a: 'הכי פשוט בוואטסאפ לוחצים על הכפתור, כותבים לאיזה טיפול, ואני חוזרת אליך לתיאום ולכל שאלה.',
  },
]

// Areas served supports local phrasing without thin doorway pages.
export const areas = [
  'חדרה', 'פרדס חנה-כרכור', 'קיסריה', 'אור עקיבא', 'בנימינה', 'גבעת עדה', 'זכרון יעקב', 'אזור השרון',
]

// Gallery placeholders (before/after). Drop real, consented pairs into
// /public/gallery and list them here. `img` empty => elegant placeholder tile.
export const gallery = [
  { id: 1, service: 'איפור קבוע · שיטת השערה', before: '', after: '' },
  { id: 2, service: 'הרמת גבות (למינציה)', before: '', after: '' },
  { id: 3, service: 'איפור קבוע · פודרה', before: '', after: '' },
  { id: 4, service: 'עיצוב וצביעת גבות', before: '', after: '' },
  { id: 5, service: 'איפור קבוע לשפתיים', before: '', after: '' },
  { id: 6, service: 'הרמת ריסים', before: '', after: '' },
]
