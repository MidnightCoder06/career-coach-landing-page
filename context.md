# Link in Bio Funnel Documentation

## Overview

This is an isolated multi-step funnel designed for Instagram and TikTok "link in bio" traffic. It is separate from the main site navigation and optimized for mobile/in-app browsers.

## Funnel Flow

```
Instagram/TikTok Bio Link
         ↓
/win-with-jean (Landing Page)
         ↓
   [Get Started Button]
         ↓
   Modal: Collect First Name & Last Name
         ↓
   [Submit Button]
         ↓
   Redirect to Calendly (name pre-filled)
         ↓
   User schedules call on Calendly
         ↓
/win-with-jean/scheduled (Confirmation Page)
         ↓
   Videos + Social Media Links
```

---

## Pages

### 1. Landing Page: `/win-with-jean`

**File:** `src/app/win-with-jean/page.tsx`

**Purpose:** Capture attention from social media traffic and collect basic info before sending to Calendly.

**Features:**
- Standalone page (no header/footer from main site)
- Mobile-first design optimized for Instagram/TikTok in-app browsers
- Blue gradient background matching brand
- Compelling headline: "Stop Competing for SWE Jobs. Start Winning."
- Social proof badges ($110K-$220K roles, 90-day guarantee)
- "Get Started" CTA button opens modal

**Modal:**
- Collects: First Name, Last Name
- On submit: Redirects to Calendly with name pre-filled via URL parameter

**Calendly URL format:**
```
https://calendly.com/jleconte36/30min?name=FirstName%20LastName
```

---

### 2. Confirmation Page: `/win-with-jean/scheduled`

**File:** `src/app/win-with-jean/scheduled/page.tsx`

**Purpose:** Thank user after scheduling and provide additional value while keeping them engaged.

**Features:**
- Success message with checkmark icon
- "What to expect on our call" section
- Video section with mock video frames (to be replaced with real videos)
- Social media links at bottom (Instagram, X, LinkedIn, TikTok)

**Videos (mock placeholders):**
1. "Why Hybrid Roles Are the Future" (3:24)
2. "How I Landed My First $150K Offer" (5:12)
3. "The #1 Mistake Engineers Make" (2:47)

**Social Links (placeholders):**
- Instagram: `href="#"` (update when ready)
- X (Twitter): `href="#"` (update when ready)
- LinkedIn: `href="#"` (update when ready)
- TikTok: `href="#"` (update when ready)

---

## Calendly Configuration

**Event:** 30-minute Strategy Call

**Redirect Settings:**
- Location: Calendly Dashboard → Event Types → 30min → Confirmation Page
- Setting: "Redirect to an external site"
- Redirect URL: `https://www.notjustadev.com/win-with-jean/scheduled`
- "Pass event details" checkbox: Unchecked

---

## URLs

| Page | URL |
|------|-----|
| Landing Page | `https://www.notjustadev.com/win-with-jean` |
| Confirmation | `https://www.notjustadev.com/win-with-jean/scheduled` |
| Calendly | `https://calendly.com/jleconte36/30min` |

---

## Link in Bio

Use this URL for Instagram and TikTok bio:
```
https://www.notjustadev.com/win-with-jean
```

---

## TODO

- [ ] Replace mock video frames with real embedded videos
- [ ] Add real social media profile URLs
- [ ] Consider adding email collection for future follow-up
- [ ] Track conversions (optional: add analytics)

