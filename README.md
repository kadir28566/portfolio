# Portfolyo Sitesi

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile hazırlanmış, terminal/developer temalı
portfolyo + blog sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Yapı

```
app/
  page.tsx              → Ana sayfa (interaktif terminal hero)
  projects/page.tsx      → Proje listesi
  projects/[slug]/page.tsx → Proje case study sayfası
  blog/page.tsx           → Blog listesi
  blog/[slug]/page.tsx    → Blog yazısı (markdown'dan render)
  contact/page.tsx        → İletişim + CV indirme

content/blog/*.md        → Blog yazıları (frontmatter: title, description, date, tags)
lib/projects.ts           → Proje verileri (case study içerikleri)
lib/posts.ts               → Markdown okuma / HTML'e çevirme
components/                → Nav, Footer, TerminalWindow, HeroTerminal, ProjectRow, PostRow
```

## Kendi bilgilerinle özelleştirme

1. **Projeler:** `lib/projects.ts` içindeki `links` alanlarındaki `href: "#"` değerlerini
   kendi GitHub / canlı demo linklerinle değiştir. İçerikleri de dilediğin gibi güncelle.
2. **Blog yazıları:** `content/blog/` klasörüne yeni bir `.md` dosyası eklemen yeterli,
   liste ve detay sayfaları otomatik günceller. Üstteki frontmatter kısmını
   (title, description, date, tags) doldurmayı unutma.
3. **İletişim bilgileri:** `app/contact/page.tsx` içindeki `CONTACT` objesini güncelle.
4. **CV dosyaları:** `Abdulkadir_Yilmaz_CV_TR.pdf` ve `_EN.pdf` dosyalarını `public/`
   klasörüne koy, indirme linkleri otomatik çalışır.
5. **Renk paleti / fontlar:** `tailwind.config.ts` içindeki `colors` ve `fontFamily`
   alanlarından değiştirilebilir.

## Deploy

En kolay yol [Vercel](https://vercel.com): repoyu GitHub'a push edip Vercel'de import etmen
yeterli, ekstra ayar gerekmez.
