# Nexora

Paper trading desk — live FX/crypto/gold anchors, Firebase login, deposits, admin desk.

**Live:** [https://rchaurasiya1075.github.io/Nexora_yuvi_trade/](https://rchaurasiya1075.github.io/Nexora_yuvi_trade/)

This is a Nexora-branded **demo / paper** desk. It is not FOREX.com and not a licensed broker.

## Firebase (`nexora-bb654`)

Do this once in [Firebase Console](https://console.firebase.google.com/project/nexora-bb654):

1. **Authentication → Get started → Email/Password → Enable**
2. **Firestore Database → Create** (production mode is fine; rules are in `firestore.rules`)
3. **Authentication → Settings → Authorized domains** add:
   - `rchaurasiya1075.github.io`
   - your custom domain (after you buy it), e.g. `trade.yourdomain.com`
4. First signed-in account can **claim admin** on `/#/admin`

Web config lives in `src/lib/firebase/config.ts`.

## Custom domain

After you buy a domain, pick one:

**GitHub Pages**

1. Repo → Settings → Pages → Custom domain
2. At your registrar, add a CNAME: `www` → `rchaurasiya1075.github.io`
3. Add that host to Firebase authorized domains

**Firebase Hosting** (same project as login)

```bash
npm run build:pages
npx firebase-tools login
npx firebase-tools deploy --only hosting,firestore:rules
```

Then add the domain in Firebase Hosting. Point the DNS records Firebase shows you.

## Local

```bash
npm install
npm run dev          # Grok / TanStack Start preview
npm run build:pages  # static GitHub Pages + Firebase Hosting bundle
```
