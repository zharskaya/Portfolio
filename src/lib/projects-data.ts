export interface Project {
  id: string;
  slug: string;
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
    title: 'EVBox Install app',
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
    title: 'EVBox Everon app. Smart charging',
    description: 'Enabled EV charging with solar energy, smart scheduling, and other user-focused improvements for station owners',
    tags: ['Design Leadership', 'Research', 'UI Design', 'Prototyping', 'User testing'],
    imageUrl: '/images/projects/project4-thumbnail.png',
    impacts: [
      { icon: 'Trophy', text: 'Smartest charger award' },
      { icon: 'TrendingUp', text: 'Better user experience' },
      { icon: 'Star', text: '4.4 App Store rating' }
    ],
  },
]; 