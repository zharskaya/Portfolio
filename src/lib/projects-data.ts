export interface Project {
  id: string;
  slug?: string;
  externalUrl?: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  impacts: { icon: string; text: string }[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'project1',
    title: 'EVBox Install App',
    description: 'Help professional electricians configure and manage EVBox charging stations',
    tags: ['Design Leadership', 'Full Stack UX', 'UI Design'],
    imageUrl: '/images/projects/project1-thumbnail.png',
    impacts: [
      { icon: 'CloudCheck', text: '96.5% Connectivity success' },
      { icon: 'Zap', text: '3x Faster configuration' },
      { icon: 'FileBadge', text: '88.7/100 Installer experience score' }
    ],
  },
  {
    id: '2',
    slug: 'project2',
    title: 'Strategic Rebranding of the EVBox Product Portfolio',
    description: 'Reimagined the EVBox product portfolio with a bold new brand identity under tight resource constraints',
    tags: ['Design Leadership','Visual Design', 'Design System'],
    imageUrl: '/images/projects/project2-thumbnail.png',
    impacts: [
      { icon: 'Megaphone', text: '40% Stronger brand recognition' },
      { icon: 'SwatchBook', text: 'White label support' },
      { icon: 'CircleCheck', text: 'WCAG 2.1 compliant accessibility'}
    ],
  },
  {
    id: '3',
    slug: 'project3',
    title: 'EVBox Everon. Optimizing First-Time Use',
    description: 'Transformed the onboarding experience and introduced a freemium model to drive adoption, reduce support load, and unlock new revenue streams',
    tags: ['Design Leadership', 'Cross-platform UX', 'UI Design', 'Prototyping', 'User testing'],
    imageUrl: '/images/projects/project3-thumbnail.png',
    impacts: [
      { icon: 'TrendingDown', text: '75% fewer support tickets' },
      { icon: 'Zap', text: '66% faster onboarding' },
      { icon: 'Gem', text: 'Freemium Model Launch' },
    ],
  },
  {
    id: '4',
    slug: 'project4',
    title: 'EVBox Everon app. Smart Charging',
    description: 'Enabled EV charging with solar energy, smart scheduling, and other user-focused improvements for station owners',
    tags: ['Design Leadership', 'Research', 'UI Design', 'Prototyping', 'User testing'],
    imageUrl: '/images/projects/project4-thumbnail.png',
    impacts: [
      { icon: 'Star', text: '3.2 → 4.4 App Store rating uplift' },
      { icon: 'Trophy', text: 'Smartest charger award' },
      { icon: 'TrendingUp', text: 'Better user experience' }
    ],
  },
  {
    id: '5',
    externalUrl: 'https://www.behance.net/gallery/99952295/Favreka-Part-II-UIUX-Case-study',
    title: 'Favreka App. Your Favorites, All in One Place',
    description: 'Seamless app experience to help users discover, save, and share things they love, from books to coffee shops to cult movies',
    tags: ['UX Design', 'UI Design', 'Animations', 'Prototyping', 'User testing'],
    imageUrl: '/images/projects/project5-thumbnail.png',
    impacts: [
      { icon: 'Timer', text: '0 → 1 mobile app in 10 weeks' },
      { icon: 'Component', text: 'Created scalable UI kit' },
      { icon: 'Heart', text: 'Loved for clean, intuitive UI'}
    ],
  },
  {
    id: '6',
    externalUrl: 'https://www.behance.net/gallery/66465445/Creamly-website-design-UXUI-case-study',
    title: 'Cream.ly Website. All Your Skin Needs',
    description: 'Crafted a minimal web experience to recommend natural skincare tailored to each user’s unique skin',
    tags: ['Visual Identity', 'UX Design', 'UI Design', 'Illustrations', 'User testing'],
    imageUrl: '/images/projects/project6-thumbnail.png',
    impacts: [
      { icon: 'PartyPopper', text: '0 → 1 brand launch' },
      { icon: 'ClipboardCheck', text: '89% quiz completion rate' },
      { icon: 'Coins', text: '39% quiz-to-purchase conversion' }
    ],
  },
]; 