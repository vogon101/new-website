export type ProjectGroup = {
  label: string;
  description: string;
  items: Project[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  year?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string; // lucide icon name
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/vogon101", icon: "github" },
  {
    label: "Twitter",
    href: "https://twitter.com/freddie_poser",
    icon: "twitter",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/freddie-poser",
    icon: "linkedin",
  },
];

export const projectGroups: ProjectGroup[] = [
  {
    label: "Things I've built",
    description: "Code that does interesting things.",
    items: [
      {
        title: "Nuclear Taskforce Tracker",
        description:
          "A live tracker monitoring the government's progress implementing the Nuclear Regulatory Taskforce's recommendations. Built for the Centre for British Progress.",
        tags: ["civic-tech", "policy", "nuclear"],
        href: "https://nuclear.britishprogress.org/",
        year: "2025",
      },
      {
        title: "Scaly",
        description:
          "A Scala-to-Python bytecode compiler. Compiles a subset of Scala directly to .pyc files.",
        tags: ["compilers", "scala", "python"],
        href: "https://github.com/vogon101/Scaly",
        year: "2020",
      },
    ],
  },
  {
    label: "Products",
    description: "Things people actually use.",
    items: [
      {
        title: "PricedOut",
        description:
          "National campaign for affordable housing. Fighting for policies to build more homes and make housing accessible.",
        tags: ["advocacy", "housing", "policy"],
        href: "https://pricedout.org.uk",
        year: "2022–2026",
      },
      {
        title: "Votr",
        description:
          "Election companion app that helped voters understand candidates and policies in the 2015 General Election.",
        tags: ["civic-tech", "elections", "app"],
        href: "https://votr.vogonjeltz.com",
        year: "2015",
      },
    ],
  },
  {
    label: "Writing & Speaking",
    description: "Words, sometimes out loud.",
    items: [
      {
        title: "Substack",
        description:
          "Occasional writing on technology, policy, and whatever else seems interesting at the time.",
        tags: ["writing", "tech", "policy"],
        href: "https://freddieposer.substack.com/",
      },
      {
        title: "Cambridge Union",
        description:
          "Competitive debating at the Cambridge Union, including appearances on TV and at national events.",
        tags: ["debating", "public-speaking"],
      },
      {
        title: "University Councillor",
        description:
          "Elected twice by students to the University Council, the governing body of the University of Cambridge, serving as a full trustee of the £3bn charity.",
        tags: ["governance", "cambridge"],
        href: "https://www.governance.cam.ac.uk/committees/council/Pages/about.aspx",
        year: "2020–22",
      },
    ],
  },
];
