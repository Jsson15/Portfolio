Henric Johanssons Portfolio
Detta är mitt personliga portfolio-projekt byggt i Next.js och TypeScript. Sidan innehåller bland annat:

En Landing-sektion som presenterar mig och mitt arbete.
WorkProjects-sektionen med projekt från arbetslivet.
SchoolProjects-sektionen med projekt från studier.
En AboutMe-sektion med kortfattad information om mig och mina erfarenheter, inklusive interaktiva kort (InfoCards).
En Contact-sektion där besökare kan hitta länkar till mina sociala medier eller skicka e-post.
Innehållsförteckning
Teknikstack
Installation och körning
Struktur
Konfiguration
Deploy
Kontakt
Teknikstack
Next.js 13 – React-ramverk för fullstack-appar.
TypeScript – Ger typning för säkrare kod.
Tailwind CSS – För snabb och smidig styling.
Framer Motion – Används för animerade övergångar och effekter.
React Icons – Ikoner för kontaktlänkar och UI-element.
Installation och körning
Kloning:

bash
Kopiera
git clone https://github.com/DittAnvändarnamn/my-portfolio.git
cd my-portfolio
Installera beroenden:

bash
Kopiera
npm install
eller

bash
Kopiera
yarn
Starta utvecklingsservern:

bash
Kopiera
npm run dev
eller

bash
Kopiera
yarn dev
Öppna sedan http://localhost:3000 i din webbläsare.

Struktur
En förenklad vy av mappstrukturen:

kotlin
Kopiera
my-portfolio
├─ app
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ (ev. no-repo)/page.tsx  // Fallback-sida för icke-existerande repos
│  └─ ...
├─ components
│  ├─ Landing.tsx
│  ├─ WorkProjects.tsx
│  ├─ SchoolProjects.tsx
│  ├─ AboutMe.tsx
│  ├─ Contact.tsx
│  └─ InfoCards.tsx
├─ data
│  └─ projectsData.ts
├─ public
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ README.md
└─ ...
app/layout.tsx – Huvudlayout för Next.js 13.
app/page.tsx – Startsida som importerar Landing, Projects-sektioner osv.
components – Alla återanvändbara komponenter.
data/projectsData.ts – Hårdkodade projekt med kategori (work/school), länkar, etc.
no-repo/page.tsx (exempel) – Fallback-sida för projekt som saknar GitHub-repo.
InfoCards.tsx – Interaktiva kort i AboutMe-sektionen.
Konfiguration
Tailwind: Konfigureras i tailwind.config.js.
Typings: Ställs in i tsconfig.json.
Metadata: app/layout.tsx kan innehålla metadata för SEO, t.ex. sidtitel och beskrivning.
Deploy
Vercel (rekommenderas):

Logga in på vercel.com med GitHub-konto.
Importera ditt repo och klicka på “Deploy”.
Vercel konfigurerar automatiskt en Next.js-app.
Netlify:

Byggkommando: npm run build
Publik mapp: .next (eller out om du använder next export)
Andra plattformar:

Du kan även köra Docker, Azure eller traditionella servrar.
Kontakt
Har du frågor eller vill veta mer?

E-post: henric.k.johansson@telia.com
LinkedIn: [linkedin.com/in/dinlinkedin](https://www.linkedin.com/in/henric-johansson-112a03237/)
GitHub: [github.com/dingithub](https://github.com/Jsson15)
Tack för att du tittar på mitt portfolio-projekt! Har du feedback eller förslag, hör gärna av dig.