// Semua teks bahasa Indonesia. Strukturnya harus sama dengan en.ts.
import type { Dict } from './en';

export const id: Dict = {
  meta: {
    title: 'Febi Maharani — debater, tukang gambar, calon mahasiswi bisnis',
    description:
      'Portofolio ala sketchbook milik Febi Maharani: siswi kelas 12, debater berprestasi, dan hobi menggambar yang ingin kuliah bisnis.',
  },
  a11y: {
    skip: 'Langsung ke konten',
    home: 'Febi Maharani — kembali ke atas',
    language: 'Bahasa',
  },
  intro: 'membuka sketchbook…',
  hero: {
    hello: 'halo, aku',
    tagline: [
      { text: 'Debater, tukang ' },
      { text: 'gambar', mark: 'underline' },
      { text: ', calon mahasiswi ' },
      { text: 'bisnis', mark: 'highlight' },
      { text: '.' },
    ],
    chips: ['Angkatan 2027', 'Siswi kelas 12', 'Indonesia'],
    cta: 'Sapa aku',
    scroll: 'gulir',
    dragHint: 'psst — stikernya bisa digeser!',
    photoNote: 'ini aku!',
    photoAlt: 'Febi Maharani tersenyum memakai kimono merah muda di jalan tradisional berdinding kayu',
    stickerTag: 'bisnis + seni',
  },
  sampleBadge: 'konten contoh',
  nav: {
    menu: 'Buka menu',
    close: 'Tutup menu',
    links: [
      { id: 'about', label: 'Tentang' },
      { id: 'achievements', label: 'Prestasi' },
      { id: 'activities', label: 'Kegiatan' },
      { id: 'skills', label: 'Keahlian' },
      { id: 'gallery', label: 'Galeri' },
      { id: 'goals', label: 'Cita-cita' },
      { id: 'contact', label: 'Kontak' },
    ],
  },
  about: {
    kicker: 'halaman 01',
    title: 'Sedikit tentang aku',
    sample: true,
    body: 'Aku Febi — siswi kelas 12 dari Indonesia. Di atas panggung aku seorang debater: pernah memimpin klub debat sekolah dan membawa pulang medali dari lomba tingkat provinsi, nasional, dan internasional. Di luar panggung, aku biasanya ditemani sketchbook. Tujuan berikutnya: kuliah bisnis, tempat aku ingin memakai kemampuan berargumen dan menggambar sekaligus.',
    notes: [
      { label: 'sekarang', text: 'Kelas 12, bersiap masuk kuliah' },
      { label: 'jurusan impian', text: 'Bisnis' },
      { label: 'hobi', text: 'Menggambar' },
    ],
  },
  // Data asli (dari Febi). `level` boleh dikosongkan.
  achievements: {
    kicker: 'halaman 02',
    title: 'Prestasi',
    sample: false,
    stats: [
      { value: 5, suffix: '', label: 'penghargaan lomba' },
      { value: 1, suffix: '', label: 'medali internasional' },
      { value: 3, suffix: '', label: 'tahun di 10 besar kelas' },
    ],
    items: [
      {
        year: '2026',
        title: 'Silver Medal — Lomba Karya Tulis Ilmiah YISF',
        level: 'Internasional',
        detail: 'Karya tulis ilmiah.',
      },
      {
        year: '2026',
        title: 'Juara 2 — LDBI Athena Universitas Bali Internasional',
        level: 'Provinsi',
        detail: 'Lomba debat bahasa Indonesia.',
      },
      {
        year: '2026',
        title: 'Juara 2 — LDBI Education Festival Universitas Udayana',
        level: 'Provinsi',
        detail: 'Lomba debat bahasa Indonesia.',
      },
      {
        year: '2025',
        title: 'Juara 2 — LDBI Education Festival Universitas Udayana',
        level: 'Nasional',
        detail: 'Lomba debat bahasa Indonesia.',
      },
      {
        year: '2024',
        title: 'Juara 3 — ALSA Unud Debate Speech Competition',
        level: 'Nasional',
        detail: 'Debat dan pidato.',
      },
      {
        year: 'Kls 10–12',
        title: 'Juara kelas — juara 3 di kelas 10, 10 besar di kelas 11 dan 12',
        level: 'Sekolah',
        detail: 'Peringkat akademik.',
      },
    ],
  },
  activities: {
    kicker: 'halaman 03',
    title: 'Kegiatanku',
    sample: false,
    items: [
      {
        role: 'Ketua',
        org: 'Klub Debat SMAPAN',
        period: '2025 — 2026',
        text: 'Memimpin klub debat sekolah setelah setahun menjadi anggota.',
      },
      {
        role: 'Anggota',
        org: 'Klub Debat SMAPAN',
        period: '2024 — 2025',
        text: 'Awal semuanya: belajar menyusun argumen dan berani bicara.',
      },
      {
        role: 'Debater',
        org: 'Lomba Debat',
        period: '2024 — 2026',
        text: 'Empat kali naik podium di lomba LDBI dan ALSA, tingkat provinsi dan nasional.',
      },
      {
        role: 'Peneliti & penulis',
        org: 'Karya Tulis Ilmiah YISF',
        period: '2026',
        text: 'Menulis karya ilmiah yang meraih silver medal di tingkat internasional.',
      },
    ],
  },
  skills: {
    kicker: 'halaman 04',
    title: 'Keahlian & minat',
    sample: false,
    note: 'masih terus belajar',
    groups: [
      {
        title: 'Otak debat',
        items: ['Debat', 'Public speaking', 'Berpikir kritis', 'Riset', 'Menulis ilmiah', 'Kepemimpinan'],
      },
      {
        title: 'Hati penasaran',
        items: ['Bisnis', 'Menggambar', 'Sketsa', 'Ide besar', 'Isu terkini', 'Kerja tim'],
      },
    ],
  },
  // PLACEHOLDER: karya contoh; gambar asli menyusul.
  gallery: {
    kicker: 'halaman 05',
    title: 'Gambar-gambarku',
    sample: true,
    note: 'gambar asli segera menyusul',
    items: [
      { title: 'Pasar pagi', medium: 'Pensil di atas kertas' },
      { title: 'Potret diri, kira-kira', medium: 'Pena tinta' },
      { title: 'Ide brand #1', medium: 'Digital' },
      { title: 'Jendela kelas', medium: 'Cat air' },
      { title: 'Lembar stiker', medium: 'Spidol' },
      { title: 'Doodle tengah malam', medium: 'Pulpen' },
    ],
  },
  goals: {
    kicker: 'halaman 06',
    title: 'Mau ke mana',
    sample: true,
    statement: 'Aku ingin membangun brand yang disukai banyak orang — dan menggambar setiap bagiannya sendiri.',
    listTitle: 'rencananya',
    doneLabel: 'selesai',
    nextLabel: 'berikutnya',
    items: [
      { text: 'Lulus SMA dengan hasil terbaik', done: true },
      { text: 'Menyusun portofolio gambar', done: true },
      { text: 'Diterima di jurusan bisnis', done: false },
      { text: 'Memulai bisnis kreatif kecil', done: false },
    ],
  },
  contact: {
    kicker: 'halaman terakhir',
    title: 'Ngobrol yuk',
    body: 'Untuk beasiswa, penerimaan mahasiswa, kolaborasi — atau sekadar menyapa. Temui aku di Instagram.',
    email: 'Kirim email',
    instagram: 'Buka Instagram',
    top: 'Kembali ke atas',
    footer: 'Dirancang seperti sketchbook.',
  },
};
