# Sanity setup for MLRC Website

This site embeds **Sanity Studio** at route **`/studio`** (`app/studio/[[...tool]]/page.tsx`). Your Sanity Cloud project is:

- **Project ID:** `qfalq9hj`
- **Dataset:** `production`

You do **not** need a separate folder created by `npm create sanity@latest` for day-to-day work. That command scaffolds a **standalone** Studio; this repo already defines schemas and Studio in one app.

If you already ran `npm create sanity@latest -- --project qfalq9hj --dataset production --template clean` **inside this repo**, the **clean** template may have reset `sanity/schemaTypes/index.ts` to an empty `types: []` array and replaced `sanity/env.ts` with strict env-only values. That leads to an empty Studio (“Get started”) and broken builds without env vars. **This repo is restored** with MLRC schemas (`teamMember`, `event`, `blogPost`) and safe defaults for project **qfalq9hj** / dataset **production**.

---

## 1. Environment variables

Create `.env.local` in the project root (copy from `.env.example`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=qfalq9hj
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_IDEATHON_REGISTER_URL=https://your-registration-form-url
```

- `NEXT_PUBLIC_*` vars are safe to expose in the browser (they are not secrets).
- [`sanity/env.ts`](../sanity/env.ts) defaults `sanityProjectId` to **`qfalq9hj`** if `NEXT_PUBLIC_SANITY_PROJECT_ID` is unset. Use `.env.local` (or host env) in production to override.

---

## 2. Install and run locally

```bash
cd d:\MLRC
npm install
npm run dev
```

- **Website:** http://localhost:3000  
- **Studio:** http://localhost:3000/studio  

### First-time Studio sign-in

If you opened Studio but did not finish signing in: go to **http://localhost:3000/studio**, choose **Continue with Google/GitHub/etc.**, and complete the redirect. You must use an account that is a **member** of project **qfalq9hj** (invite collaborators in [sanity.io/manage](https://www.sanity.io/manage) if needed).

---

## 3. CORS (required for the browser)

The Next.js app loads content from Sanity’s API. Add your origins in the Sanity project:

1. Open [sanity.io/manage](https://www.sanity.io/manage) and select project **qfalq9hj**.
2. Go to **API** → **CORS origins**.
3. Add:
   - `http://localhost:3000` (allow credentials if prompted).
4. After deployment, add your production URL (e.g. `https://your-domain.com`).

Alternatively, from the repo (after `npx sanity login`):

```bash
npx sanity cors add http://localhost:3000 --credentials
```

---

## 4. CLI login (optional but useful)

```bash
npx sanity login
```

Helpful commands (this repo includes `sanity.cli.ts`):

```bash
npx sanity manage
npx sanity cors list
```

---

## 5. Content types (schemas)

Defined in [`sanity/schemaTypes/`](../sanity/schemaTypes/):

| Type         | Purpose                                      |
| ------------ | -------------------------------------------- |
| `teamMember` | Leadership grid (name, role, photo, order) |
| `event`      | Events feed + Ideathon / registration URL  |
| `blogPost`   | Blog (infrastructure)                        |

After you **Publish** documents in Studio, the site picks them up via GROQ with **ISR** (about 1 minute cache). Until you add content, **fallback** copy and team names still show on the site.

---

## 6. First content checklist (Studio)

### Team (`teamMember`)

Create one document per person. Set **Display order** so leadership appears in the intended sequence (e.g. 1–6). Upload **Photo** for grayscale→color hover on the About page.

### Events (`event`)

For **ML IDEATHON 1.0**, set:

- **Status:** `upcoming`
- **Start / end date:** your Summer 2026 window
- **Format:** e.g. `2-day event, 6 hours each day`
- **Summary:** deep-dive challenge copy; prizes **TBA** in text if you like
- **Registration URL:** same as `NEXT_PUBLIC_IDEATHON_REGISTER_URL` or your live form
- **Highlight:** on if you want to emphasize in the CMS later

### Blog (`blogPost`)

Optional. With no posts, `/blog` shows the welcome placeholder.

---

## 7. Dataset and API tokens

- For a **public** `production` dataset, the site typically needs **no read token** (CDN + public dataset).
- If you switch to a **private** dataset or use drafts, you will need a token and must wire it securely (not covered in v1; use [Sanity docs on tokens](https://www.sanity.io/docs/http-auth)).

---

## 8. Deploy

1. Set the same `NEXT_PUBLIC_*` variables on your host (Vercel, etc.).
2. Add your production URL under **CORS origins**.
3. Deploy the Next.js app; Studio stays at `/studio` on the same domain.

---

## Troubleshooting

| Issue | What to try |
| ----- | ----------- |
| Studio loads but API errors in the site | Check CORS for `http://localhost:3000` / production URL. |
| Old content after publish | Wait ~1 minute (revalidate) or redeploy if needed. |
| Images broken | Ensure `next.config.ts` allows `cdn.sanity.io` (already set in this repo). |
| Wrong project | Confirm `.env.local` and [manage](https://www.sanity.io/manage) project **qfalq9hj**. |

---

## Relationship to `npm create sanity@latest ...`

That command is one way Sanity onboards you. For **this** codebase:

- Schemas live in **`d:\MLRC\sanity\schemaTypes`**.
- Studio config is **`sanity.config.ts`** with `basePath: "/studio"`.

Use the embedded Studio here so the website and CMS stay in sync in one deployment.
