# Febi Web — Design System (sumber kebenaran)

Titik awal dari UI UX Pro Max (pola *Scroll-Triggered Storytelling*, gaya neubrutal, motion tier *Complex*),
lalu disesuaikan ke konsep yang disepakati: **"sketchbook seorang calon pebisnis"** — bold & playful.
Nilai token yang berlaku ada di `src/styles/global.css` (`@theme`); file ini menjelaskan aturannya.

## Warna
| Token | Hex | Pakai untuk |
|---|---|---|
| `paper` | `#fff6e3` | latar (kertas krem, dot-grid) |
| `paper-deep` | `#f5e7c8` | permukaan sekunder |
| `ink` | `#1a1814` | teks, garis tepi 3px, bayangan keras |
| `ink-soft` | `#5a5348` | teks sekunder |
| `pop` | `#ff4f7b` | aksen utama, CTA |
| `sun` | `#ffc83d` | stabilo, hover, bintang |
| `sky` | `#3d5afe` | tulisan tangan, fokus |
| `leaf` | `#19c38b` | aksen stiker |

Teks selalu `ink` di atas `paper`/aksen cerah (putih hanya di atas `sky`). Satu tema; tanpa mode gelap.

## Tipografi
- Display: Bricolage Grotesque (800, huruf besar, tracking rapat) — judul.
- Tulisan tangan: Caveat — aksen pendek saja (sapaan, catatan, label stiker).
- Body: DM Sans, minimal 16px.

## Bentuk
Garis tepi `ink` 2.5–3px, bayangan keras tanpa blur (`shadow-hard`), sudut membulat, elemen sedikit dimiringkan (±2–6°).
Motif: coretan SVG (`Doodle.astro`), stiker, selotip. Ikon selalu SVG, bukan emoji.

## Gerak (GSAP + ScrollTrigger + Lenis; `src/scripts/main.ts`)
- Konten harus terbaca tanpa JS; GSAP hanya memakai `from`/`fromTo`.
- Semua gerak di dalam `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`.
- SplitText hanya untuk judul pendek. Maksimal 1–2 section di-pin per halaman.
- Coretan "digambar" lewat `stroke-dashoffset` 1 → 0 (helper `draw`).
- Kursor pengikut & tombol magnetik hanya untuk pointer halus. Tanpa 3D/WebGL.

## Wajib sebelum selesai
Kontras ≥ 4.5:1 · target sentuh ≥ 44px · fokus terlihat · tanpa scroll horizontal di 360–1440px.
