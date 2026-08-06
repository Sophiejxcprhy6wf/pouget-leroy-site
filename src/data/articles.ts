export interface Article {
  slug: string;
  rubrique: 'Penser' | 'Toucher' | 'Résonances';
  rubriqueClass: 'penser' | 'toucher' | 'resonances';
  date: string; // YYYY-MM-DD, utilisé pour trier — pas forcément affiché tel quel
  dateLabel: string; // ex. "Juillet 2026"
  title: string;
  excerpt: string;
  image?: string;
  alt?: string;
  objectPosition?: string;
  imageOpacity?: number;
  icon?: boolean; // true = pas de visuel dédié, icône générique (à éviter, cf. règle vignette)
}

// Un article publié = une entrée ici. L'accueil et les pages de rubrique
// piochent dans ce même tableau — plus besoin de dupliquer les cartes à la main.
export const articles: Article[] = [
  {
    slug: 'nuvole-bianche',
    rubrique: 'Résonances',
    rubriqueClass: 'resonances',
    date: '2026-08-06',
    dateLabel: 'Août 2026',
    title: 'Nuvole Bianche',
    excerpt: "Un paysage sec sous la lumière, une musique déjà là sans qu'on l'écoute. Ce qui se croise sans se choisir.",
    image: '/nuvole-bianche.jpg',
    alt: 'Lever de soleil sur la vallée du Haras du Pin',
    objectPosition: 'center 55%',
  },
  {
    slug: 'ce-qui-essaime',
    rubrique: 'Penser',
    rubriqueClass: 'penser',
    date: '2026-08-02',
    dateLabel: 'Août 2026',
    title: 'Ce qui essaime',
    excerpt: "Une course avant l'aube, une amie qui doute, et une ruche qui n'a jamais eu besoin de grossir son cœur pour tenir.",
    image: '/ce-qui-essaime.jpg',
    alt: 'Ombre projetée sur un chemin de terre, lumière filtrée par les feuilles',
    objectPosition: 'center 30%',
  },
  {
    slug: 'dix-sept-virgule-deux',
    rubrique: 'Toucher',
    rubriqueClass: 'toucher',
    date: '2026-07-25',
    dateLabel: 'Juillet 2026',
    title: 'Dix-sept virgule deux',
    excerpt: "Une récolte de miel après une sécheresse, un couteau, une main qui dose sans y penser. Ce jour-là, quelque chose ne nous était pas dû.",
    image: '/dix-sept-virgule-deux.jpg',
    alt: "Désoperculage d'un cadre au-dessus du bac, récolte de miel 2026",
    objectPosition: '55% 8%',
  },
  {
    slug: 'ce-qui-na-pas-eu-lieu',
    rubrique: 'Penser',
    rubriqueClass: 'penser',
    date: '2026-07-18',
    dateLabel: 'Juillet 2026',
    title: "Ce qui n'a pas eu lieu",
    excerpt: "Je m'attendais à me battre dans l'eau à 4 degrés. Ce qui ne s'est pas passé m'a appris plus que ce que j'étais venue chercher.",
    image: '/ce-qui-na-pas-eu-lieu.jpg',
    alt: "Immersion dans un bain d'eau glacée à 4 degrés",
    objectPosition: 'center 20%',
  },
  {
    slug: 'temps-suspendu',
    rubrique: 'Toucher',
    rubriqueClass: 'toucher',
    date: '2026-06-30',
    dateLabel: 'Juin 2026',
    title: 'Le temps suspendu',
    excerpt: "Une jument de quatre ans, un box, un nid d'hirondelles au-dessus. Ce matin-là, quelque chose s'est dilaté.",
    image: '/temps-suspendu.jpg',
    alt: 'Palpation sans licol',
    objectPosition: 'center 30%',
  },
  {
    slug: 'sommes-nous-des-osteopathes',
    rubrique: 'Penser',
    rubriqueClass: 'penser',
    date: '2026-06-28',
    dateLabel: 'Juin 2026',
    title: 'Sommes-nous des ostéopathes ?',
    excerpt: 'Notre identité professionnelle ne se construit pas malgré les tensions qui la traversent. Elle tient par elles.',
    image: '/matrice-tensegrale.svg',
    alt: 'Carte mentale matrice tenségrale',
    objectPosition: 'center',
    imageOpacity: 0.85,
  },
  {
    slug: 'humilite-expert',
    rubrique: 'Penser',
    rubriqueClass: 'penser',
    date: '2026-06-27',
    dateLabel: 'Juin 2026',
    title: "L'humilité de l'expert",
    excerpt: 'Quand un praticien aguerri ne trouve plus ses mots. Ce que ce silence révèle sur la construction de nos perceptions.',
    image: '/Humilité_expert.jpg',
    alt: 'Mains sur un poulain',
    objectPosition: 'center 20%',
  },
  {
    slug: 'sonny-rollins',
    rubrique: 'Résonances',
    rubriqueClass: 'resonances',
    date: '2026-05-27',
    dateLabel: 'Mai 2026',
    title: "Sonny Rollins et l'improvisation maîtrisée",
    excerpt: "Ce que le jazz enseigne sur l'expertise incarnée. Et pourquoi le praticien qui ne sait plus où sont ses mains joue mieux que celui qui les surveille.",
    icon: true,
  },
];

export function articlesByRubrique(rubriqueClass: Article['rubriqueClass']): Article[] {
  return articles
    .filter((a) => a.rubriqueClass === rubriqueClass)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function latestArticles(count: number): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
}
