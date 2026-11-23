// Semua animasi situs. Konten tetap terbaca tanpa skrip ini; GSAP hanya menambah gerak.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Draggable } from 'gsap/Draggable';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable);

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

/** "Menggambar" coretan SVG: garis muncul dari 0 → penuh. */
const draw = (target: Element | Element[] | null, vars: gsap.TweenVars = {}) =>
  gsap.fromTo(
    target instanceof Element ? $$('path', target) : (target ?? []).flatMap((el) => $$('path', el)),
    { strokeDashoffset: 1 },
    { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut', stagger: 0.12, ...vars },
  );

let lenis: Lenis | null = null;

function smoothScroll() {
  lenis = new Lenis({ autoRaf: false, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

function heroIntro() {
  const intro = $('[data-intro]');
  const hero = $('[data-hero]');
  if (!hero) return;

  const chars = $$('[data-split]', hero).map((el) => new SplitText(el, { type: 'chars', aria: 'none' }).chars);
  const stickers = $$('[data-sticker]', hero);
  stickers.forEach((s) => gsap.set(s, { rotation: Number(s.dataset.rot ?? 0) }));

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  if (intro) {
    tl.add(draw($('.doodle', intro), { duration: 0.9 }))
      .from('.intro__initials', { scale: 0.4, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, 0.15)
      .from('.intro__label', { y: 16, opacity: 0, duration: 0.5 }, 0.3)
      .to(intro, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '+=0.25')
      .set(intro, { display: 'none' });
  }

  tl.addLabel('in', intro ? '-=0.45' : 0)
    .from('[data-nav] > *', { y: -80, opacity: 0, duration: 0.8, stagger: 0.08 }, 'in')
    .from(chars[0] ?? [], { yPercent: 115, rotation: 8, duration: 1, stagger: 0.05 }, 'in')
    .from(chars[1] ?? [], { yPercent: 115, rotation: -6, duration: 1, stagger: 0.04 }, 'in+=0.12')
    .from('[data-hero-hello] > span', { opacity: 0, x: -24, duration: 0.6 }, 'in+=0.5')
    .add(draw($('[data-hero-hello] .doodle'), { duration: 0.5 }), 'in+=0.7')
    .from(
      '[data-hero-photo]',
      { scale: 0.3, rotation: -25, opacity: 0, duration: 0.9, ease: 'back.out(1.6)' },
      'in+=0.45',
    )
    .from('[data-hero-fade]', { y: 30, opacity: 0, duration: 0.8, stagger: 0.12 }, 'in+=0.7')
    .from('[data-highlight]', { scaleX: 0, duration: 0.6, ease: 'power3.out' }, 'in+=1.1')
    .add(draw($('.mark-underline .doodle'), { duration: 0.6 }), 'in+=1.3')
    .from('[data-hero-chip]', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(2.2)' }, 'in+=1.1')
    .from(
      stickers,
      { scale: 0, rotation: '+=120', opacity: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.8)' },
      'in+=0.9',
    )
    .from('[data-hero-hint], [data-hero-scroll]', { opacity: 0, y: 10, duration: 0.5, stagger: 0.1 }, 'in+=1.6');

  // gerakan idle setelah intro
  tl.add(() => {
    stickers.forEach((s, i) =>
      gsap.to(s, { y: i % 2 ? 8 : -8, duration: 2 + i * 0.35, ease: 'sine.inOut', yoyo: true, repeat: -1 }),
    );
    gsap.to('[data-hero-scroll] svg', { y: 6, duration: 0.7, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  });
}

function heroScroll() {
  const hero = $('[data-hero]');
  if (!hero) return;
  gsap
    .timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 } })
    .to('[data-hero-line="1"]', { xPercent: -8, ease: 'none' }, 0)
    .to('[data-hero-line="2"]', { xPercent: 6, ease: 'none' }, 0)
    .to('[data-hero-photo]', { yPercent: -35, rotation: '+=14', ease: 'none' }, 0)
    .to('.hero__stickers', { yPercent: -18, ease: 'none' }, 0);
}

function stickers() {
  const hero = $('[data-hero]');
  const hint = $('[data-hero-hint]');
  Draggable.create('[data-sticker]', {
    bounds: hero,
    zIndexBoost: true,
    onPress(this: Draggable) {
      gsap.killTweensOf(this.target, 'y');
      gsap.to(this.target, { scale: 1.15, duration: 0.2 });
    },
    onDragStart() {
      if (hint) gsap.to(hint, { opacity: 0, duration: 0.3 });
    },
    onRelease(this: Draggable) {
      gsap.to(this.target, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      gsap.fromTo(this.target, { rotation: '-=10' }, { rotation: '+=10', duration: 0.7, ease: 'elastic.out(1, 0.3)' });
    },
  });
}

/** Animasi section — semuanya digerakkan atribut data-* supaya komponen tetap bersih. */
function sections() {
  // garis progres baca
  gsap.fromTo('[data-progress]', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

  // judul section: kata naik satu-satu + garis bawah tergambar
  $$('[data-head]').forEach((head) => {
    const title = $('[data-head-title]', head);
    const words = title ? new SplitText(title, { type: 'words', aria: 'none' }).words : [];
    gsap
      .timeline({ scrollTrigger: { trigger: head, start: 'top 82%' }, defaults: { ease: 'expo.out' } })
      .from($('[data-head-kicker]', head), { x: -30, opacity: 0, duration: 0.6 })
      .from(words, { yPercent: 90, opacity: 0, rotation: 5, duration: 0.9, stagger: 0.07 }, 0.1)
      .add(draw($('.doodle', head), { duration: 0.8 }), 0.5);
  });

  // paragraf yang "terisi tinta" kata demi kata mengikuti scroll
  $$('[data-words]').forEach((el) => {
    const { words } = new SplitText(el, { type: 'words', aria: 'none' });
    gsap.fromTo(
      words,
      { opacity: 0.14 },
      { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 55%', scrub: true } },
    );
  });

  // anak-anak elemen muncul memantul
  $$('[data-pop]').forEach((group) => {
    gsap.from(group.children, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.9)',
      stagger: 0.06,
      scrollTrigger: { trigger: group, start: 'top 86%' },
    });
  });

  $$('[data-rise]').forEach((el) => {
    gsap.from(el, { y: 70, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  // angka menghitung naik
  $$('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count ?? 0);
    const state = { v: 0 };
    el.textContent = '0';
    gsap.to(state, {
      v: end,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => (el.textContent = String(Math.round(state.v))),
    });
  });

  // baris buku besar: garis ditarik, lalu isi naik
  $$('[data-rows] > li').forEach((row) => {
    gsap
      .timeline({ scrollTrigger: { trigger: row, start: 'top 88%' } })
      .from($('[data-row-line]', row), { scaleX: 0, duration: 0.9, ease: 'expo.inOut' })
      .from($$(':scope > :is(p, h3)', row), { y: 28, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'expo.out' }, 0.25);
  });

  // kegiatan: section di-pin, kartu bergeser ke samping mengikuti scroll
  $$('[data-hscroll]').forEach((pin) => {
    const track = $('[data-hscroll-track]', pin);
    if (!track) return;
    track.style.overflow = 'visible';
    track.removeAttribute('tabindex');
    const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        pin: true,
        start: 'top top',
        end: () => `+=${distance()}`,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });
  });

  // galeri: karya "dilempar" ke meja lalu mendarat di tempatnya
  $$('[data-scatter] > li').forEach((item, i) => {
    gsap.from(item, {
      x: gsap.utils.random(-160, 160),
      y: gsap.utils.random(120, 260),
      rotation: gsap.utils.random(-35, 35),
      opacity: 0,
      duration: 1.1,
      delay: (i % 3) * 0.08,
      ease: 'expo.out',
      scrollTrigger: { trigger: item, start: 'top 96%' },
    });
  });

  // daftar rencana: centang digambar satu per satu
  $$('[data-checklist]').forEach((list) => {
    gsap
      .timeline({ scrollTrigger: { trigger: list, start: 'top 80%' } })
      .from(list.children, { x: -24, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out' })
      .fromTo(
        $$('[data-check]', list),
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 0.45, stagger: 0.25, ease: 'power2.out' },
        0.4,
      );
  });

  // judul raksasa di kontak
  $$('[data-giant]').forEach((el) => {
    const { chars } = new SplitText(el, { type: 'chars', aria: 'none' });
    gsap.from(chars, {
      yPercent: 110,
      rotation: 10,
      duration: 1,
      stagger: 0.05,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  // coretan lepas: tergambar saat terlihat, sebagian melayang mengikuti scroll
  $$('[data-draw]').forEach((el) => {
    draw(el, { duration: 1, scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  $$('[data-float]').forEach((el) => {
    gsap.to(el, {
      y: Number(el.dataset.float),
      rotation: 25,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    });
  });

  // pin mengubah tinggi halaman: urutkan lalu hitung ulang semua posisi
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
}

/** Menu (Popover API): tutup saat link diklik, lalu gulir ke section tujuan. */
function menu() {
  const el = $('[data-menu]');
  if (!el) return;
  const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  el.addEventListener('toggle', (e) => {
    const open = (e as ToggleEvent).newState === 'open';
    if (open) lenis?.stop();
    else lenis?.start();
    if (open && motionOK) {
      gsap.from($$('li', el), { y: 60, opacity: 0, rotation: -4, duration: 0.7, stagger: 0.05, ease: 'expo.out' });
    }
  });

  $$<HTMLAnchorElement>('[data-menu-link]', el).forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector<HTMLElement>(link.hash);
      if (!target) return;
      e.preventDefault();
      el.hidePopover();
      history.pushState(null, '', link.hash);
      if (lenis) {
        lenis.start();
        lenis.scrollTo(target, { duration: 1.4 });
      } else {
        target.scrollIntoView();
      }
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

/** Kursor pengikut + tombol magnetik — hanya untuk mouse. */
function pointerFx() {
  const cursor = $('.cursor');
  if (cursor) {
    const x = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3' });
    const y = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3' });
    window.addEventListener('pointermove', (e) => {
      gsap.to(cursor, { opacity: 1, duration: 0.2, overwrite: 'auto' });
      x(e.clientX);
      y(e.clientY);
    });
    document.addEventListener('pointerover', (e) => {
      const hot = (e.target as Element).closest('a, button, [data-sticker]');
      gsap.to(cursor, { scale: hot ? 3.2 : 1, duration: 0.3, ease: 'power3.out', overwrite: 'auto' });
    });
  }

  $$('[data-magnetic]').forEach((el) => {
    const mx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    const my = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      mx((e.clientX - (r.left + r.width / 2)) * 0.35);
      my((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener('pointerleave', () => {
      mx(0);
      my(0);
    });
  });
}

async function start() {
  // tunggu font supaya pemecahan huruf & ukuran akurat (maks. 1,5 dtk)
  await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]);

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const stopScroll = smoothScroll();
    heroIntro();
    heroScroll();
    stickers();
    sections();
    return stopScroll;
  });
  mm.add('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)', pointerFx);
  menu();
}

start();
