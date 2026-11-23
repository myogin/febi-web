# febi-web

## Agent skills

### Issue tracker

Issues live in GitHub Issues for myogin/febi-web (via `gh`). See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Project

Bilingual personal portfolio for Febi Maharani. Astro + Tailwind v4 + GSAP, fully static, deployed on Cloudflare Pages.

- Commands (pnpm): `pnpm dev`, `pnpm build` (runs `astro check` first), `pnpm preview`.
- Languages: English at `/`, Indonesian at `/id/`. All copy lives in `src/i18n/en.ts` and `src/i18n/id.ts` (same shape); shared data in `src/i18n/site.ts`. Never hardcode copy in components.
- Design rules: `design-system/febi-web/MASTER.md`. Tokens: `src/styles/global.css`.
- Animation lives in `src/scripts/main.ts`; content must stay readable without JS and under `prefers-reduced-motion`.
- Content marked `PLACEHOLDER` is not real data about Febi; keep it marked until replaced.
