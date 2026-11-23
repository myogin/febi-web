# febi-web

Portofolio pribadi Febi Maharani — dua bahasa (Inggris di `/`, Indonesia di `/id/`), bergaya sketchbook, penuh animasi.
Dibangun dengan Astro + Tailwind CSS + GSAP; hasilnya situs statis untuk Cloudflare Pages.

## Menjalankan di komputer

Butuh Node.js 22.23.4 atau lebih baru (disarankan 24) dan pnpm.

```bash
pnpm install
pnpm dev       # buka http://localhost:4321
pnpm build     # periksa tipe + build ke folder dist/
pnpm preview   # lihat hasil build
```

## Mengubah isi

| Yang diubah | File |
|---|---|
| Teks bahasa Inggris | `src/i18n/en.ts` |
| Teks bahasa Indonesia | `src/i18n/id.ts` (strukturnya harus sama dengan `en.ts`) |
| Nama, Instagram, email, tahun angkatan | `src/i18n/site.ts` |
| Warna dan font | `src/styles/global.css` (bagian `@theme`) |
| Foto di halaman pertama | ganti `src/assets/febi.jpeg`; atur potongan di `.hero__photo-crop` dalam `src/components/Hero.astro` |
| Alamat situs (saat pakai domain sendiri) | `SITE` di `astro.config.mjs` dan `public/robots.txt` |

Section yang isinya masih contoh punya `sample: true` dan menampilkan label "sample content".
Setelah isinya diganti dengan data asli, ubah menjadi `sample: false`.

Gambar preview saat link dibagikan ada di `public/og.png` (1200×630). Buat ulang bila tampilan Hero berubah.

## Deploy ke Cloudflare Pages

Sekali saja:

1. Push repo ini ke GitHub (`myogin/febi-web`).
2. Buka dashboard Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, lalu pilih repo `febi-web`.
3. Isi pengaturan build:
   - Framework preset: **Astro**
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Production branch: `main`
4. Di **Environment variables** tambahkan `NODE_VERSION` = `24` (Astro butuh Node 22.23.4+; file `.node-version` di repo juga berisi `24`).
5. Klik **Save and Deploy**. Situs tayang di `https://febi-web.pages.dev` (nama bisa berbeda bila sudah terpakai — kalau berbeda, perbarui `SITE` di `astro.config.mjs` dan `public/robots.txt`).

Setelah itu setiap push ke `main` otomatis ter-deploy, dan setiap branch lain mendapat URL preview sendiri.

Jika build gagal di langkah instalasi karena versi pnpm, ganti build command menjadi
`npx pnpm@12 install --frozen-lockfile && npx pnpm@12 build`.

### Domain sendiri (opsional)

Di proyek Pages → **Custom domains** → **Set up a custom domain**, ikuti petunjuknya, lalu ganti `SITE` di
`astro.config.mjs` dan alamat sitemap di `public/robots.txt` ke domain baru.

### Analytics (opsional)

Di proyek Pages → **Metrics** → aktifkan **Web Analytics**. Tidak perlu mengubah kode.
