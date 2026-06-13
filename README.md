# Portofolio Anggi Nuraziz

This is a personal portfolio website built with Nuxt 4 and Tailwind CSS. It showcases experience, projects, skills, and contact information in a clean and responsive layout.

## Teknologi

- Nuxt 4
- Vue 3
- Tailwind CSS
- TypeScript
- @nuxt/fonts

## Fitur

- Navigasi sidebar dengan anchor scroll
- Section experience dan projects yang diload dari data terpusat
- SEO metadata terpasang melalui konfigurasi Nuxt
- Responsif untuk desktop dan mobile

## Instalasi

Jalankan perintah berikut di folder proyek:

```bash
npm install
```

## Pengembangan

Jalankan server development:

```bash
npm run dev
```

Buka browser di `http://localhost:3000`

## Build Produksi

Build aplikasi untuk produksi:

```bash
npm run build
```

Pratinjau hasil build secara lokal:

```bash
npm run preview
```

## Deploy ke GitHub Pages

1. Pastikan repository sudah terhubung ke GitHub.
2. Tambahkan remote GitHub jika belum:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

3. Commit dan push:

```bash
git add .
git commit -m "Deploy portfolio"
git push -u origin main
```

4. Aktifkan GitHub Pages di repository settings dengan branch `main` dan folder `/(root)`.

## Catatan

- Jika memakai custom domain, update `https://your-portfolio-domain.com` di `nuxt.config.ts`.
- Pastikan `public/favicon.ico` sudah diganti sesuai favicon yang diinginkan.

## Disclaimer untuk Fork

Jika kamu ingin fork project ini, harap hapus semua data pribadi saya sebelum digunakan kembali. Ini termasuk nama, email, tautan LinkedIn, GitHub, experience, project, dan informasi kontak lain.

## Lisensi

Project ini dibuat untuk kebutuhan portofolio pribadi.
