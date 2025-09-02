export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: `Sveta is one of the most talented UX design professionals I've worked with. She fundamentally transformed how our customers experienced our products, making complex functionalities accessible and enjoyable to use.
            When our team faced challenging circumstances and needed strong leadership, Sveta stepped up without hesitation to manage the design team. She did a remarkable job ensuring everyone worked in the same direction with consistency and purpose.`,
    name: "Natasa Jovanovic",
    title: "VP of Product and Engineering",
    company: "EVBox"
  },
  {
    id: '2',
    quote: `Working closely with Sveta is great - she always asks the right questions, brings in-depth product and user sense, and - based on minimal set of inputs - quickly generates production-ready designs and design ideas. 
            I am impressed by Sveta's focus on the actual user experience and her dedication to quality. This work ethic is “contagious” - it invites everyone around to do their best.`,
    name: "Dino Sepac",
    title: "Product Manager, Installer Experience",
    company: "EVBox"
  },
  {
    id: '3',
    quote: `One of the things I admire most about Sveta is that she shows a great deal of analytical thinking, helping us identify problems and improve our solutions for them. She excels at both worlds, showing qualities inherent to designers and engineers.`,
    name: "Mauro Garcia Junior",
    title: "Senior Software Engineer",
    company: "EVBox"
  },
  {
    id: '4',
    quote: `It's a pleasure to work with Sveta, and I am impressed by the amount and quality of the work that she gets done in a short time. 
            Sveta is fantastic at balancing between engineering limitations and optimising user experience, which in the end means that we get the maximum value out of the product within the given time-frame.`,
    name: "Jelle van Doornik",
    title: "Senior Product Manager, Smart Charging",
    company: "EVBox"
  },
  {
    id: '5',
    quote: `Whether I have blockers or not, I know I can reach out to Sveta for help. She always makes herself available through meetings or Slack and helps me understand or provide feedback on any subject I bring to her knowledge.`,
    name: "Adelaide Chaold ",
    title: "Junior UI Designer",
    company: "EVBox"
  },
  {
    id: '6',
    quote: `Svetlana did an amazing job helping us with design work on an ongoing project. She consistently produced high quality mock ups, was great at incorporating feedback and coming up with creative solutions. In short, a very talented person to work with that I can highly recommend.`,
    name: "Peter Elst",
    title: "Senior Technical Solution Engineer",
    company: "Google"
  }
];
