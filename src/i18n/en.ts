// Semua teks bahasa Inggris. Edit di sini tanpa menyentuh kode komponen.
// Struktur file ini jadi acuan tipe untuk id.ts.
export const en = {
  meta: {
    title: 'Febi Maharani — debater, doodler, future business major',
    description:
      'The sketchbook-portfolio of Febi Maharani: a high school senior, award-winning debater and doodler heading for business school.',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Febi Maharani — back to top',
    language: 'Language',
  },
  intro: 'opening the sketchbook…',
  hero: {
    hello: "hello, I'm",
    // Tagline dipecah supaya kata tertentu bisa diberi stabilo / garis bawah.
    tagline: [
      { text: 'Debater, ' },
      { text: 'doodler', mark: 'underline' },
      { text: ', future ' },
      { text: 'business', mark: 'highlight' },
      { text: ' major.' },
    ],
    chips: ['Class of 2027', 'High school senior', 'Indonesia'],
    cta: 'Say hello',
    scroll: 'scroll',
    dragHint: 'psst — drag the stickers!',
    photoNote: "that's me!",
    photoAlt: 'Febi Maharani smiling in a light pink kimono on a traditional wooden street',
    stickerTag: 'biz + art',
  },
  // Label kecil yang muncul di section berisi data contoh (sample: true).
  sampleBadge: 'sample content',
  nav: {
    menu: 'Open menu',
    close: 'Close menu',
    links: [
      { id: 'about', label: 'About' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'activities', label: 'Activities' },
      { id: 'skills', label: 'Skills' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'goals', label: 'Goals' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  about: {
    kicker: 'page 01',
    title: 'A little about me',
    sample: true,
    body: "I'm Febi — a high school senior from Indonesia. On stage I'm a debater: I've led my school's debate club and brought home medals from provincial, national and international competitions. Off stage you'll find me with a sketchbook. Next stop: business school, where I want to put arguing well and drawing well to work.",
    notes: [
      { label: 'currently', text: 'Grade 12, getting ready for university' },
      { label: 'dream major', text: 'Business' },
      { label: 'hobby', text: 'Drawing' },
    ],
  },
  // Data asli (dari Febi). `level` boleh dikosongkan.
  achievements: {
    kicker: 'page 02',
    title: 'Highlights',
    sample: false,
    stats: [
      { value: 5, suffix: '', label: 'competition awards' },
      { value: 1, suffix: '', label: 'international medal' },
      { value: 3, suffix: '', label: 'years in the class top 10' },
    ],
    items: [
      {
        year: '2026',
        title: 'Silver Medal — YISF Scientific Paper Competition',
        level: 'International',
        detail: 'Scientific writing.',
      },
      {
        year: '2026',
        title: '2nd Place — LDBI Athena, Universitas Bali Internasional',
        level: 'Provincial',
        detail: 'Indonesian-language debate.',
      },
      {
        year: '2026',
        title: '2nd Place — LDBI Education Festival, Universitas Udayana',
        level: 'Provincial',
        detail: 'Indonesian-language debate.',
      },
      {
        year: '2025',
        title: '2nd Place — LDBI Education Festival, Universitas Udayana',
        level: 'National',
        detail: 'Indonesian-language debate.',
      },
      {
        year: '2024',
        title: '3rd Place — ALSA Unud Debate Speech Competition',
        level: 'National',
        detail: 'Debate and speech.',
      },
      {
        year: 'Gr. 10–12',
        title: 'Class rank — 3rd in Grade 10, top 10 in Grades 11 and 12',
        level: 'School',
        detail: 'Academic ranking.',
      },
    ],
  },
  activities: {
    kicker: 'page 03',
    title: 'Things I do',
    sample: false,
    items: [
      {
        role: 'President',
        org: "SMAPAN's Debate Club",
        period: '2025 — 2026',
        text: "Led the school's debate club after a year as a member.",
      },
      {
        role: 'Member',
        org: "SMAPAN's Debate Club",
        period: '2024 — 2025',
        text: 'Where it all started: learning to build a case and speak up.',
      },
      {
        role: 'Debater',
        org: 'Debate Competitions',
        period: '2024 — 2026',
        text: 'Four podium finishes in LDBI and ALSA competitions, at provincial and national level.',
      },
      {
        role: 'Researcher & writer',
        org: 'YISF Scientific Paper',
        period: '2026',
        text: 'Wrote a scientific paper that won a silver medal at international level.',
      },
    ],
  },
  skills: {
    kicker: 'page 04',
    title: 'Skills & interests',
    sample: false,
    note: 'still learning — always',
    groups: [
      {
        title: 'Debate brain',
        items: ['Debating', 'Public speaking', 'Critical thinking', 'Research', 'Scientific writing', 'Leadership'],
      },
      {
        title: 'Curious heart',
        items: ['Business', 'Drawing', 'Sketching', 'Big ideas', 'Current issues', 'Teamwork'],
      },
    ],
  },
  // PLACEHOLDER: karya contoh; gambar asli menyusul.
  gallery: {
    kicker: 'page 05',
    title: 'My drawings',
    sample: true,
    note: 'real drawings coming soon',
    items: [
      { title: 'Morning market', medium: 'Pencil on paper' },
      { title: 'Self-portrait, sort of', medium: 'Ink pen' },
      { title: 'Brand idea #1', medium: 'Digital' },
      { title: 'Classroom window', medium: 'Watercolour' },
      { title: 'Sticker sheet', medium: 'Markers' },
      { title: 'Late-night doodles', medium: 'Ballpoint pen' },
    ],
  },
  goals: {
    kicker: 'page 06',
    title: "Where I'm going",
    sample: true,
    statement: 'I want to build a brand people love — and draw every part of it myself.',
    listTitle: 'the plan',
    doneLabel: 'done',
    nextLabel: 'next',
    items: [
      { text: 'Finish high school strong', done: true },
      { text: 'Build a drawing portfolio', done: true },
      { text: 'Get into a business programme', done: false },
      { text: 'Start a small creative business', done: false },
    ],
  },
  contact: {
    kicker: 'last page',
    title: "Let's talk",
    body: 'For scholarships, admissions, collaborations — or just to say hi. Find me on Instagram.',
    email: 'Email me',
    instagram: 'Open Instagram',
    top: 'Back to top',
    footer: 'Designed like a sketchbook.',
  },
};

export type Dict = typeof en;
