export interface Project {
  id: string;
  slug?: string;
  externalUrl?: string;
  projectName?: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  impacts: { icon: string; text: string }[];
  visible: boolean;
  titleGhost?: string;
  titleBold?: string;
  boldFirst?: boolean;
}

export const projects: Project[] = [
  {
    id: '7',
    slug: 'project7',
    projectName: 'AI Coding Assistant',
    title: 'Advanced Context Engineering',
    titleGhost: 'Advanced',
    titleBold: 'Context Engineering',
    description: 'Identified why AI coding assistants hit adoption ceilings and designed context controls that improved suggestion accuracy by 56% in testing',
    tags: ['AI-assisted Design', 'Developer Experience', 'UX Strategy', 'Prototyping'],
    imageUrl: '/images/projects/project7-thumbnail.png',
    impacts: [
      { icon: 'TrendingUp', text: '56% higher suggestion accuracy' },
      { icon: 'Zap', text: '2x faster task completion' },
    ],
    visible: true,
  },
  {
    id: '6',
    slug: 'project6',
    projectName: 'EVBox',
    title: 'Installer Experience. Reimagined',
    titleGhost: 'Reimagined',
    titleBold: 'Installer Experience.',
    boldFirst: true,
    description: 'Help professional electricians configure and manage EVBox charging stations',
    tags: ['Design Leadership', 'Full Stack UX', 'UI Design'],
    imageUrl: '/images/projects/project6-thumbnail.png',
    impacts: [
      { icon: 'CloudCheck', text: '96.5% Connectivity success' },
      { icon: 'Zap', text: '3x Faster configuration' },
      { icon: 'FileBadge', text: '88.7/100 Installer experience score' }
    ],
    visible: true,
  },
  {
    id: '5',
    slug: 'project5',
    projectName: 'EVBox',
    title: 'Strategic Rebranding',
    titleGhost: 'Strategic',
    titleBold: 'Rebranding',
    description: 'Reimagined the EVBox product portfolio with a bold new brand identity under tight resource constraints',
    tags: ['Design Leadership','Visual Design', 'Design System'],
    imageUrl: '/images/projects/project5-thumbnail.png',
    impacts: [
      { icon: 'Megaphone', text: '40% Stronger brand recognition' },
      { icon: 'SwatchBook', text: 'White label support' },
      { icon: 'CircleCheck', text: 'WCAG 2.1 compliant accessibility'}
    ],
    visible: false,
  },
  {
    id: '4',
    slug: 'project4',
    projectName: 'EVBox Everon',
    title: 'From Broken Onboarding to Freemium Growth',
    titleGhost: 'From Broken Onboarding',
    titleBold: 'to Freemium Growth',
    description: 'Transformed the onboarding experience and introduced a freemium model to drive adoption, reduce support load, and unlock new revenue streams',
    tags: ['Design Leadership', 'Cross-platform UX', 'UI Design', 'Prototyping', 'User testing'],
    imageUrl: '/images/projects/project4-thumbnail.png',
    impacts: [
      { icon: 'TrendingDown', text: '75% fewer support tickets' },
      { icon: 'Zap', text: '66% faster onboarding' },
      { icon: 'Gem', text: 'Freemium Model Launch' },
    ],
    visible: true,
  },
  {
    id: '3',
    slug: 'project3',
    projectName: 'EVBox Everon app',
    title: 'Turning Around the EV App Experience',
    titleGhost: 'Turning Around the',
    titleBold: 'EV App Experience',
    description: 'Drove the EVBox Everon app from 3.2 to 4.4 stars by owning UX strategy, shipping key features, and fixing systemic gaps across the product',
    tags: ['Design Leadership', 'Research', 'UI Design', 'Prototyping', 'User testing'],
    imageUrl: '/images/projects/project3-thumbnail.png',
    impacts: [
      { icon: 'Star', text: '3.2 → 4.4 App Store rating uplift' },
      { icon: 'Trophy', text: 'Smartest charger award' },
      { icon: 'TrendingUp', text: 'Fewer support cases over time' }
    ],
    visible: true,
  },
  {
    id: '2',
    externalUrl: 'https://www.behance.net/gallery/99952295/Favreka-Part-II-UIUX-Case-study',
    projectName: 'Favreka App',
    title: 'Your Favorites. All in One Place',
    description: 'Seamless app experience to help users discover, save, and share things they love, from books to coffee shops to cult movies',
    tags: ['UX Design', 'UI Design', 'Animations', 'Prototyping', 'User testing'],
    imageUrl: '/images/projects/project2-thumbnail.png',
    impacts: [
      { icon: 'Timer', text: '0 → 1 mobile app in 10 weeks' },
      { icon: 'Component', text: 'Created scalable UI kit' },
      { icon: 'Heart', text: 'Loved for clean, intuitive UI'}
    ],
    visible: true,
  },
  {
    id: '1',
    externalUrl: 'https://www.behance.net/gallery/66465445/Creamly-website-design-UXUI-case-study',
    projectName: 'Cream.ly Website',
    title: 'All Your Skin Needs',
    description: 'Brand identity and website experience to recommend natural skincare tailored to each user\'s unique skin',
    tags: ['Visual Identity', 'UX Design', 'UI Design', 'Illustrations', 'User testing'],
    imageUrl: '/images/projects/project1-thumbnail.png',
    impacts: [
      { icon: 'PartyPopper', text: '0 → 1 brand launch' },
      { icon: 'CircleCheck', text: '89% quiz completion rate' },
      { icon: 'Coins', text: '39% quiz-to-purchase conversion' }
    ],
    visible: false,
  },
]; 