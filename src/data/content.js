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

  // Real business number (country code, digits only) for WhatsApp + click-to-call.
  phone: '972545412644',
  phoneDisplay: '054-541-2644',
  // Pre-filled WhatsApp opener (research: lowers friction, captures intent).
  waMessage: 'היי סבטה 🙂 הגעתי מהאתר ואשמח לתאם תור ל',

  instagram: '', // TODO @username
  instagramUrl: '', // TODO
  facebookUrl: '', // TODO
  email: '', // TODO
  address: 'הרברט סמואל 59, חדרה',
  hours: [
    { d: 'ראשון – חמישי', h: '09:00 – 19:00' }, // TODO confirm hours with Sveta
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
  eyebrow: 'עיצוב גבות · הרמת גבות · איפור קבוע — חדרה',
  title: 'מבט טבעי\nשנשאר איתך',
  lead:
    'קליניקה מקצועית בחדרה המתמחה בעיצוב גבות טבעיות, הרמת גבות, איפור קבוע במכשור מתקדם והסרת שיער פנים. ' +
    'כל טיפול מותאם אישית למבנה הפנים, לגוון העור ולסגנון שלך — למראה טבעי, מחמיא ומדויק.',
  stats: [
    { n: 'טבעי', t: 'מראה מחמיא שנראה כמו שלך' },
    { n: 'מותאם אישית', t: 'לכל מבנה פנים וגוון עור' },
    { n: 'מקצועי', t: 'מכשור מתקדם והיגיינה גבוהה' },
  ],
}

// Trust strip under the hero. Replace values with the real numbers after intake.
export const trustBar = [
  { icon: 'gem', label: 'מכשור מתקדם', value: 'טכנולוגיה לאיפור קבוע' },
  { icon: 'shield', label: 'היגיינה ברמה גבוהה', value: 'חומרים איכותיים ומאושרים' },
  { icon: 'heart', label: 'יחס אישי', value: 'טיפול מותאם לכל לקוחה' },
  { icon: 'star', label: 'תוצאה טבעית', value: 'מחמיאה ומדויקת' },
]

export const about = {
  kicker: 'נעים להכיר',
  title: 'סבטה פשייב',
  role: 'עיצוב גבות · הרמת גבות · איפור קבוע',
  paragraphs: [
    'ברוכה הבאה לקליניקה שלי בחדרה. אני מתמחה בעיצוב גבות טבעיות, הרמת גבות, איפור קבוע במכשור מתקדם והסרת שיער פנים.',
    'כל טיפול מותאם באופן אישי למבנה הפנים, לגוון העור ולסגנון של כל לקוחה — במטרה ליצור מראה טבעי, מחמיא ומדויק.',
    'אני מקפידה על עבודה מקצועית, שימוש בחומרים איכותיים, היגיינה ברמה גבוהה ושירות אישי באווירה נעימה. מוזמנת לקבוע תור וליהנות מטיפול מקצועי ותוצאה טבעית ומחמיאה.',
  ],
  signature: 'סבטה',
}

// Services — Sveta's actual offering (provided by her).
export const services = [
  {
    id: 'pmu',
    name: 'איפור קבוע',
    sub: 'מיקרופיגמנטציה במכשור מתקדם',
    desc:
      'איפור קבוע עדין ומדויק במכשור מתקדם — קו טבעי ומחמיא שנשאר איתך. ' +
      'מותאם למבנה הפנים ולגוון העור, לתוצאה שנראית כמו שלך.',
    meta: ['מכשור מתקדם', 'מחזיק כ-1–3 שנים', 'כולל השלמה'],
    featured: true,
  },
  {
    id: 'brows-design',
    name: 'עיצוב גבות טבעיות',
    sub: 'חוט, פינצטה ומספריים',
    desc:
      'עיצוב גבות מדויק בעבודת יד — חוט, פינצטה ומספריים — לפי קווי הפנים שלך. ' +
      'הבסיס למבט מטופח, נקי ומחמיא.',
    meta: ['עבודת יד מדויקת', 'משך: כ-30 דק׳'],
  },
  {
    id: 'brow-lift',
    name: 'הרמת גבות וצביעה',
    sub: 'מראה מלא, מורם וטבעי',
    desc:
      'הרמה ויישור של שערות הגבה יחד עם צביעה בגוון מותאם — למראה מסודר, מלא וטבעי לאורך שבועות, בלי מאמץ יומיומי.',
    meta: ['משך: כ-45–60 דק׳', 'מחזיק כ-6–8 שבועות'],
  },
  {
    id: 'hair-removal',
    name: 'הסרת שיער פנים',
    sub: 'עדין ומדויק',
    desc:
      'הסרת שיער פנים עדינה ומדויקת לעור חלק ונקי — מראה מוקפד שמשלים כל טיפול.',
    meta: ['משך: כ-15–25 דק׳'],
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
  { id: 1, service: 'איפור קבוע · גבות', before: '', after: '' },
  { id: 2, service: 'עיצוב גבות טבעיות', before: '', after: '' },
  { id: 3, service: 'הרמת גבות וצביעה', before: '', after: '' },
  { id: 4, service: 'איפור קבוע', before: '', after: '' },
  { id: 5, service: 'עיצוב גבות טבעיות', before: '', after: '' },
  { id: 6, service: 'הרמת גבות וצביעה', before: '', after: '' },
]
