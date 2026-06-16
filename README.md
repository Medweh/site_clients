# Mohamed Essahafi - Site Pro & Solutions Digitales Premium

Ce projet est une application web vitrine premium haut de gamme et un gestionnaire de leads sécurisé conçu avec **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** et **Supabase**.

Il met en avant la double expertise de Mohamed Essahafi (Ingénieur Électromécanique, Docteur et Concepteur Logiciel) auprès des PME, industries, cabinets médicaux et hôtels.

## 🚀 Stack Technique
- **Framework** : Next.js (App Router, Server Components)
- **Design & UI** : Tailwind CSS, Lucide React (Styling SaaS sombre, glassmorphism, micro-animations)
- **Base de données & Auth** : Supabase (PostgreSQL, Row-Level Security, Auth)
- **Déploiement** : Vercel

---

## 🛠️ Installation & Configuration

### 1. Cloner et installer les dépendances
```bash
npm install
```

### 2. Configurer Supabase
Dans votre console Supabase :
1. Créez un nouveau projet.
2. Allez dans le **SQL Editor** et exécutez le script complet présent dans [supabase/schema.sql](file:///supabase/schema.sql). Ce script crée les tables `profiles` et `leads`, configure les politiques de sécurité (RLS) et configure le trigger pour assigner automatiquement le rôle `'admin'` à l'adresse e-mail `mohamed.essahafi@um6p.ma` lors de son inscription.

### 3. Fichier d'environnement
Créez un fichier `.env.local` à la racine (ou utilisez celui généré automatiquement par l'agent) et configurez les variables d'environnement suivantes :
```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-anon-key-publique
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=212600000000
```
> [!IMPORTANT]
> Ne stockez jamais la clé `service_role` dans ce projet ou dans le frontend. La sécurité repose sur les politiques RLS de Supabase.

---

## 💻 Exécution en Local

Lancez le serveur de développement :
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser le site.

Pour tester le build de production localement :
```bash
npm run build
npm run start
```

---

## 🛡️ Authentification Admin

1. Allez sur la page de contact pour vous assurer que l'insertion fonctionne.
2. Pour créer votre compte administrateur :
   - Allez sur la console Supabase Auth.
   - Créez un utilisateur avec l'email `mohamed.essahafi@um6p.ma`.
   - Grâce au trigger SQL, le profil correspondant dans la table `profiles` sera automatiquement créé et configuré avec le rôle `admin`.
3. Rendez-vous sur `/admin/login` pour vous connecter. Vous serez automatiquement redirigé vers le `/admin/dashboard` privé.

---

## 🌐 Déploiement sur Vercel

### Option CLI
Si vous avez installé le CLI Vercel :
```bash
vercel
```
Puis pour la production :
```bash
vercel --prod
```

### Configuration des variables d'environnement sur Vercel
Ajoutez les variables d'environnement suivantes dans votre dashboard projet Vercel :
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL` (URL de production de votre site Vercel, ex: `https://mon-site.vercel.app`)
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

---

## 🔒 Sécurité & RLS
- **Leads** : N'importe quel visiteur anonyme peut soumettre un formulaire (droit `INSERT` public). Cependant, seuls les utilisateurs connectés ayant le rôle `admin` dans la table `profiles` peuvent lire (`SELECT`), mettre à jour (`UPDATE`) ou supprimer (`DELETE`) les leads.
- **Profiles** : RLS activé. Les utilisateurs peuvent lire et modifier uniquement leur propre profil.
- **Middleware Next.js** : Intercepte les accès à `/admin/dashboard`. Si aucune session n'est détectée, redirige vers `/admin/login`. Si une session est détectée mais que l'utilisateur n'est pas admin, le tableau de bord affiche un écran d'accès refusé.
