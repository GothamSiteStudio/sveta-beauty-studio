# Sveta Beauty Studio — אתר תדמית

אתר תדמית (portfolio) לסטודיו **Sveta Beauty Studio** של סבטה פשייב — עיצוב גבות
טבעיות, הרמת גבות וצביעה, איפור קבוע במכשור מתקדם והסרת שיער פנים. הרברט סמואל 59, חדרה.

עיצוב יוקרתי כהה (זהב על שחור), עברית RTL, mobile-first, ו-CTA מרכזי לוואטסאפ.

## סטאק

- **React 19** + **Vite 6** (JSX, ללא TypeScript)
- CSS טהור עם משתני עיצוב (`src/styles/global.css`) — ללא תלות עיצובית חיצונית
- פונטים מאורחים מקומית (`public/fonts`): Assistant (טקסט), Frank Ruhl Libre (כותרות),
  Cormorant Garamond (מותג לטיני) — ללא בקשות לגוגל, מהיר ופרטי

## הרצה

```bash
npm install      # התקנת תלויות
npm run dev      # שרת פיתוח (http://localhost:5173)
npm run build    # בנייה לפרודקשן -> dist/
npm run preview  # תצוגה מקדימה של הבנייה
```

## מבנה

```
public/
  logo/            הלוגו (SVG + PNG) + favicons
  fonts/           פונטים מאורחים מקומית + fonts.css
  gallery/         תמונות לפני/אחרי (להכניס כאן)
src/
  data/content.js  ⭐ כל תוכן האתר במקום אחד (עברית) — כאן עורכים טקסטים ופרטים
  styles/global.css מערכת העיצוב (צבעים, טיפוגרפיה, רספונסיביות)
  lib/             אייקונים (icons.jsx) + hook לאנימציית reveal
  components/      Header, Hero, TrustBar, About, Services, Gallery, Process,
                   Hygiene, Reviews, Faq, Contact, Footer, WhatsappFloat
  App.jsx          הרכבת הסקשנים
design/            מקורות הלוגו (Python + פונט) — ליצירת הלוגו מחדש
```

## הלוגו

מונוגרמה **SP** זהובה + הכיתוב "SVETA BEAUTY STUDIO / SVETA PASHAEV". וקטורי טהור,
רקע שקוף. קבצים ב-`public/logo/`:

- `sveta-logo.svg` / `.png` — הלוקאפ המלא
- `sveta-logo-mark.svg` / `.png` — המונוגרמה בלבד (favicon / אווטאר)

הלוגו נבנה מחדש מקווי מתאר של הפונט (`design/`):

```bash
python design/extract_glyphs.py   # מחלץ outlines (דורש: pip install fonttools)
python design/build_logo.py       # בונה logo.svg + logo-mark.svg
```

צבעי המותג (מתוך `global.css`): רקע `#0b0b0d`, זהב ראשי `#d8b463`, זהב בהיר `#f2dea6`.

## ⚠️ להשלמה (מגיע משאלון האיפיון)

הגרסה הזו נבנתה על סמך מחקר שוק, לפני תשובות סבטה. חפשו `TODO` בקוד. עיקר הדברים:

1. **מספר טלפון/וואטסאפ אמיתי** — `src/data/content.js` → `site.phone` (כל כפתורי ה-CTA
   קוראים מכאן). כרגע placeholder.
2. כתובת הסטודיו, שעות, אינסטגרם, פייסבוק, אימייל — `site` ב-`content.js`.
3. **תמונות לפני/אחרי** אמיתיות (עם אישור לקוחות) → `public/gallery` + עדכון מערך `gallery`.
4. תמונת פורטרט של סבטה ל-Hero ולסקשן "עליי".
5. סיפור אישי אמיתי, המלצות אמיתיות (עם קישור לפרופיל גוגל), מחירים, תעודות/פיגמנטים.

השאלון (שאלון איפיון) יושב במערכת גוטהם — כרטיסיית "📋 שאלון איפיון" של הלקוחה.

---

נבנה על ידי **Gotham Site Studio**.
