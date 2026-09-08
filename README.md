# Ridho Yoss Pratama — Portfolio

Portfolio pribadi bertema Linux, cybersecurity, dan networking. Dibangun dengan
**Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## 1. Instalasi

Pastikan Node.js 18.17+ terpasang, lalu di root folder project:

```bash
npm install
```

## 2. Menjalankan project (development)

```bash
npm run dev
```

Buka `http://localhost:3000`.

## 3. Build production

```bash
npm run build
npm start
```

---

## 4. Mengganti foto profil

1. Siapkan foto profesional (disarankan rasio potret, min. 800×1000px).
2. Simpan sebagai `public/profile.jpg` (timpa file placeholder yang sudah ada).
3. Tidak perlu mengubah kode — path sudah diatur lewat `photoPath` di `data/profile.ts`.

Ingin pakai nama file lain? Ubah `photoPath` di `data/profile.ts`.

## 5. Mengganti data pribadi (lokasi, email, dsb.)

Edit `data/profile.ts`:

```ts
export const profile = {
  ...
  location: "Bandung, Indonesia",
  email: "kamu@email.com",
  education: "SMK Jurusan TKJ",
  ...
  social: {
    github: "https://github.com/username-kamu",
    linkedin: "https://linkedin.com/in/username-kamu",
    email: "mailto:kamu@email.com",
  },
  cvPath: "/cv/CV-Ridho-Yoss-Pratama.pdf",
};
```

Untuk CV: letakkan file PDF di `public/cv/` lalu sesuaikan `cvPath`.

## 6. Mengganti / menambah project

Edit `data/projects.ts`. Setiap project berbentuk objek:

```ts
{
  id: "nama-unik",
  number: "04",
  title: "Judul Project",
  status: "Lab / Learning Project", // atau "Project" jika sudah production
  description: "Deskripsi singkat...",
  technologies: ["Linux", "Bash"],
  githubUrl: "https://github.com/...",
  demoUrl: "https://...", // opsional
  thumbnail: "/projects/nama-file.svg", // atau .jpg/.png
}
```

Letakkan thumbnail di `public/projects/`.

## 7. Mengganti skill

Edit `data/skills.ts`. Setiap grup punya `title`, `command` (label kecil ala
terminal), dan `items` (array string). Tambah/hapus item sesuai skill yang
benar-benar kamu kuasai.

## 8. Mengganti "My Journey" / timeline

Edit array `journey` di `data/profile.ts`. Kalau belum ada pengalaman formal,
ubah judul section di `components/Experience.tsx` menjadi "Learning Journey"
sesuai kebutuhan.

## 9. Mengisi Certifications (opsional)

Edit array `certifications` di `data/profile.ts`. Jika array kosong, section
ini otomatis tersembunyi — tidak perlu menghapus komponen.

## 10. Mengganti social media

Semua link sosial (GitHub, LinkedIn, Email) diatur dari satu tempat:
`profile.social` di `data/profile.ts`. Navbar, Hero, dan Contact section semua
membaca dari sini.

## 11. Contact form

Form di `components/Contact.tsx` saat ini hanya menampilkan status "terkirim"
secara lokal (belum terhubung ke backend). Untuk membuatnya benar-benar
mengirim pesan, sambungkan `handleSubmit` ke salah satu dari:

- Next.js API Route (`app/api/contact/route.ts`) + layanan email (Resend, Nodemailer, dll.)
- Formspree / Getform (form action ke endpoint mereka)

## 12. Deploy ke Vercel

**Opsi A — lewat Vercel CLI:**

```bash
npm install -g vercel
vercel
```

Ikuti prompt (login, pilih scope, konfirmasi folder project). Untuk deploy ke
production:

```bash
vercel --prod
```

**Opsi B — lewat dashboard Vercel:**

1. Push project ini ke repository GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new), import repository tersebut.
3. Framework preset akan otomatis terdeteksi sebagai **Next.js** — biarkan default.
4. Klik **Deploy**.

Setelah deploy, update `siteUrl` di `app/layout.tsx` (dan metadata Open Graph)
dengan domain asli kamu.

---

## Struktur Folder

```
app/            → routing, layout, metadata, global CSS
components/     → semua UI section (Hero, About, Skills, dst.)
data/           → SEMUA konten yang bisa kamu edit tanpa sentuh JSX
  profile.ts    → data diri, social links, journey, certifications
  skills.ts     → daftar skill per kategori
  projects.ts   → daftar project
public/         → aset statis (foto, thumbnail, favicon, CV)
```

## File paling penting untuk kustomisasi

Kalau hanya ingin mengganti **isi konten** (bukan desain), kamu hanya perlu
menyentuh 3 file ini:

1. **`data/profile.ts`** — nama, bio, kontak, social links, journey, certifications, path foto & CV.
2. **`data/projects.ts`** — daftar project beserta thumbnail dan link.
3. **`data/skills.ts`** — daftar skill per kategori.

Ganti file gambar di `public/` (profile.jpg, project thumbnails, favicon, CV)
sesuai kebutuhan. Tidak perlu mengedit komponen React sama sekali untuk
update konten sehari-hari.

Jika ingin mengubah **desain** (warna, tipografi, layout), sumber utamanya:

- `tailwind.config.ts` — palet warna (`base`, `ink`, `signal`) dan font.
- `app/globals.css` — variabel global dan reduced-motion handling.
- Masing-masing file di `components/` untuk struktur & markup tiap section.
