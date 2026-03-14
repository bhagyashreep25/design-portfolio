export interface CaseStudyImage {
  alt: string;
  aspectRatio: "video" | "square" | "portrait";
  color: string;
}

export type CaseStudySection =
  | {
      id: string;
      type: "overview";
      content: string;
    }
  | {
      id: string;
      type: "text";
      title: string;
      content: string;
    }
  | {
      id: string;
      type: "image";
      title?: string;
      image: CaseStudyImage;
    }
  | {
      id: string;
      type: "images";
      title?: string;
      images: CaseStudyImage[];
    }
  | {
      id: string;
      type: "quote";
      content: string;
    }
  | {
      id: string;
      type: "metrics";
      metrics: { value: string; label: string }[];
    }
  | {
      id: string;
      type: "reflection";
      items: string[];
    };

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  team: string;
  timeline: string;
  processOverview: string;
  tools: string[];
  coverColor: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  reflection: string[];
  sections: CaseStudySection[];
}

export const projects: Project[] = [
  {
    slug: "walletwize",
    title: "WalletWize",
    subtitle: "Simplifying personal finances for young adults",
    description:
      "Manage your finances in one place, with ease.",
    tags: ["Product Design", "FinTech", "Mobile"],
    year: "2024",
    role: "Product Designer",
    team: "Product Designer + CEO + Head of Engineering",
    timeline: "Oct 2023 - Feb 2024; 5 months",
    processOverview: "Competitive Analysis + Strategy + Prototyping",
    tools: ["Figma"],
    coverColor: "#E8E0D4",
    problem:
      "Existing personal budgeting apps are not tailored for the unique needs of young adults.",
    solution:
      "WalletWize is a personal finance management app specially designed for Gen Z so that they can set budgets, achieve goals, manage investments & debts very easily.",
    outcome:
      "The app is about to launch very soon. The development team is conducting final rounds of testing.",
    metrics: [
      { value: "5k", label: "downloads in 1st month" },
      { value: "1k", label: "daily active users" },
      { value: "+20%", label: "page views per session" },
      { value: "5%", label: "user retention rate" },
    ],
    reflection: [
      "I had a seat at the table for planning the strategy and product roadmap. I often had to bring in the user\u2019s perspective & bring up the design vision.",
      "There\u2019s never time for following the process, I had to adapt and prioritize.",
      "There\u2019s a great joy in simplifying complex concepts & designing them into elegant solutions.",
    ],
    sections: [
      {
        id: "problem",
        type: "text",
        title: "THE PROBLEM",
        content:
          "Young adults are a particular audience with different financial needs than average adults. These needs are often overlooked or they go unnoticed when you consider other such budgeting apps. At WalletWize, we want to bring their needs to the forefront and create an experience specifically for young adults.",
      },
      {
        id: "why-important",
        type: "text",
        title: "WHY IS IT IMPORTANT TO SOLVE THIS PROBLEM?",
        content:
          "Over the last year, nearly 37% of Gen Z say they\u2019ve experienced a financial setback \u2014 such as decreased savings or additional debt. Based on a survey by Bank of America, Gen Z is struggling with their finances due to inflation. This indicates that Gen Z could use some help with managing their finances \u2014 a gap in the market.",
      },
      {
        id: "goals",
        type: "text",
        title: "THE GOALS",
        content:
          "A simple, delightful UX that helps young adults manage their finances & encourages them to achieve their goals. Help young adults manage finances & achieve financial goals. Design an effective, intuitive, and simple UX. Create a cohesive brand, product & visual identity.",
      },
      {
        id: "competitive",
        type: "text",
        title: "HOW DO WE STAND OUT?",
        content:
          "Given the highly saturated market of finance management apps, it is crucial that WalletWize stands out and addresses the biggest problems plaguing these apps. I did a competitive analysis of Mint, Buddy & NerdWallet. Key takeaways: Simple & logical IA, Attractive visuals, Do more with less, Intuitive user flows.",
      },
      {
        id: "competitive-visual",
        type: "image",
        title: "Competitive Analysis",
        image: {
          alt: "Competitive analysis of Mint, Buddy, and NerdWallet",
          aspectRatio: "video",
          color: "#DDD5C8",
        },
      },
      {
        id: "ia",
        type: "text",
        title: "MAKING SENSE",
        content:
          "Redesigning the Information Architecture for Gen Z to do things quickly. Before: Unnatural grouping of pages, max 5 clicks to reach any page. After: Logical grouping of pages, max 3 clicks to reach any page.",
      },
      {
        id: "ia-visual",
        type: "images",
        title: "Information Architecture: Before & After",
        images: [
          {
            alt: "Original information architecture \u2014 unnatural grouping",
            aspectRatio: "video",
            color: "#D8D0C4",
          },
          {
            alt: "Redesigned information architecture \u2014 logical grouping",
            aspectRatio: "video",
            color: "#D0C8BC",
          },
        ],
      },
      {
        id: "features",
        type: "text",
        title: "HOW THE MAGIC HAPPENS",
        content:
          "Gen Z cares about their spending habits. Your finances are in your control, and in one place. A goal has to be STAR: Specific, Timely, Action-Oriented & Realistic. Making empty states & boring screens much more attractive with illustrations.",
      },
      {
        id: "features-visual",
        type: "images",
        title: "Key Screens",
        images: [
          {
            alt: "Home page with spending breakdown",
            aspectRatio: "portrait",
            color: "#E0D8CC",
          },
          {
            alt: "Monthly finance overview tab",
            aspectRatio: "portrait",
            color: "#D8D0C4",
          },
          {
            alt: "Goal setting with STAR framework",
            aspectRatio: "portrait",
            color: "#D0C8BC",
          },
        ],
      },
      {
        id: "prototype",
        type: "image",
        title: "Interactive Prototype",
        image: {
          alt: "WalletWize interactive prototype walkthrough",
          aspectRatio: "video",
          color: "#C8C0B4",
        },
      },
    ],
  },
  {
    slug: "personal-emotions-tracker",
    title: "PET: Personal Emotions Tracker",
    subtitle: "Making mood tracking personalized & interactive",
    description:
      "Animal-avatar based app with smartwatch companion.",
    tags: ["UX Design", "UX Research", "Mobile", "Smartwatch"],
    year: "2021",
    role: "UX Designer + UX Researcher",
    team: "2 UX Designers + 3 UX Researchers",
    timeline: "Oct - Dec 2021; 3 months",
    processOverview: "Literature Review + 2 Design Iterations",
    tools: ["Figma"],
    coverColor: "#D4DDE8",
    problem:
      "Current mood tracking apps lack in-depth tracking capabilities, have a high input overhead, and do not support long-term behavior change.",
    solution:
      "Personal Emotions Tracker is a mobile app that allows users to interact with the app & log their mood using 3 different modalities, view and interact with their past mood & trends, customize & view realtime mood on their animal avatar, and connect a smartwatch interface for quick mood prompts.",
    outcome:
      "Delivered an interactive working prototype that made mood tracking personalized & interactive. This design was selected to be featured in The Best Illustrated App Designs by DesignRush.",
    metrics: [
      { value: "65%", label: "usability issues resolved" },
      { value: "+35%", label: "user satisfaction scores" },
    ],
    reflection: [
      "Conducting literature review led to a stronger concept and well-thought out functionalities for the app.",
      "Being my first time conducting user testing, I was able to realize its value and witnessed first-hand the impact it has on a product.",
      "Designing for the Apple Watch compelled me to prioritize and showcase only the most essential elements on the interface.",
      "More time and resources would\u2019ve added a layer of customization, pertaining to the animal avatars and depicting user\u2019s real-time mood on the animal.",
    ],
    sections: [
      {
        id: "problem",
        type: "text",
        title: "THE PROBLEM",
        content:
          "Existing mood trackers limit users to fixed interaction methods, restricting flexibility of use. Many mood-tracking apps require extensive journal input, hence discouraging long-term adoption by users. Current mood trackers lack engaging mood trends & insights, hindering self-reflection. Moreover, current mood trackers lack personalization and adaptability, providing a generic user experience.",
      },
      {
        id: "challenge",
        type: "text",
        title: "THE CHALLENGE",
        content:
          "It was a challenge to find a tracking method with a low-input overhead to gather comprehensive mood data. Incorporating contextual data about the user to provide an engaging user experience also proved to be difficult. Moreover, building the foundation for long-term behavior change through self-reflection turned out be the biggest challenge.",
      },
      {
        id: "research",
        type: "text",
        title: "RESEARCH",
        content:
          "I looked at the Play Store and academic papers to find opportunities for improvement and current research efforts in this domain. Automated mood sensing via smartwatches has a low-input overhead for the user & provides quality sleep, activity, stress data. Advancements in NLP enable the creation of a powerful chatbot that can conduct conversational surveys and extract emotions from responses. Data visualizations and usage trends offer closeness with the user\u2019s past mood, inviting opportunities for self-reflection & behaviour change. Custom avatars and contextual data about the user\u2019s daily events drastically add to the personalized user experience.",
      },
      {
        id: "storyboard",
        type: "image",
        title: "THE STORYBOARD",
        image: {
          alt: "Storyboard of primary persona Zachary using the app in real time",
          aspectRatio: "video",
          color: "#C8D4E0",
        },
      },
      {
        id: "solution",
        type: "text",
        title: "SOLUTION",
        content:
          "PET offers users a holistic approach to mood tracking: Interact with the app using 3 modalities \u2014 Chatbot, Survey, One-Touch (tap an emoji). View charts & trends about user\u2019s past mood to promote reflection. On the smartwatch, respond to quick mood prompts & interact with chatbot. Customize animal avatar & view user\u2019s realtime mood depicted on the avatar.",
      },
      {
        id: "wireframes",
        type: "text",
        title: "ITERATING ON WIREFRAMES",
        content:
          "Users wished to see detailed trends, simpler surveys & clearer interaction options. I conducted a round of user testing on the wireframes to uncover user opinions on my preliminary thoughts. Based on their feedback, I iterated on the wireframes to further refine my designs.",
      },
      {
        id: "wireframe-visual",
        type: "images",
        title: "Wireframe Iterations",
        images: [
          {
            alt: "Initial wireframes with basic layout",
            aspectRatio: "portrait",
            color: "#C0CCD8",
          },
          {
            alt: "Iterated wireframes based on user feedback",
            aspectRatio: "portrait",
            color: "#B8C4D0",
          },
        ],
      },
      {
        id: "design-home",
        type: "image",
        title: "A personalized & informative home page",
        image: {
          alt: "PET home page design with animal avatar and mood overview",
          aspectRatio: "video",
          color: "#D0D8E4",
        },
      },
      {
        id: "design-modalities",
        type: "image",
        title: "PET helps you on your terms via Chatbot, Surveys & One-Tap",
        image: {
          alt: "Three input modalities \u2014 chatbot, survey, and one-tap emoji",
          aspectRatio: "video",
          color: "#C8D0DC",
        },
      },
      {
        id: "design-trends",
        type: "image",
        title: "Trends help you stay on top of your mood",
        image: {
          alt: "Mood trends and charts view",
          aspectRatio: "video",
          color: "#C0C8D4",
        },
      },
      {
        id: "design-watch",
        type: "images",
        title: "Stay updated on the go with a smartwatch companion app",
        images: [
          {
            alt: "Smartwatch design to log mood",
            aspectRatio: "square",
            color: "#B8C0CC",
          },
          {
            alt: "Smartwatch design of mood insights",
            aspectRatio: "square",
            color: "#B0B8C4",
          },
        ],
      },
      {
        id: "prototype",
        type: "images",
        title: "Interactive Prototypes",
        images: [
          {
            alt: "Mobile prototype walkthrough",
            aspectRatio: "portrait",
            color: "#C8D0DC",
          },
          {
            alt: "Smartwatch prototype walkthrough",
            aspectRatio: "portrait",
            color: "#C0C8D4",
          },
        ],
      },
    ],
  },
  {
    slug: "clover-ai",
    title: "Clover.ai",
    subtitle: "Enhancing health literacy through AI",
    description:
      "Clear doubts, book appointments, understand documents & prescriptions easily.",
    tags: ["UX Design", "UX Research", "AI", "Mobile"],
    year: "2021",
    role: "UX Designer + UX Researcher",
    team: "2 UX Designers + UX Researchers",
    timeline: "Oct - Dec 2021; 3 months",
    processOverview: "User Interviews + Prototyping",
    tools: ["Figma"],
    coverColor: "#C8E0D0",
    problem:
      "How might we use AI to support people with limited health literacy to better manage their health?",
    solution:
      "Clover.ai is a single health information source that answers user queries & books appointments, helps access health/insurance documentation easily, helps understand & keep up with prescriptions, and sends distress messages in times of emergency.",
    outcome:
      "CommunicateHealth has a research-backed prototype ready to inform their other AI-based projects involving health literacy.",
    metrics: [],
    reflection: [
      "I learned the value of quickly sketching screens to jot down ideas before I forget them.",
      "I realized that talking to real users is the best way to validate data and ideate features.",
      "When in doubt, go back to the participant responses.",
      "I learned that less is more when it comes to keeping designs simple, especially when the project demands it.",
    ],
    sections: [
      {
        id: "client",
        type: "text",
        title: "THE CLIENT",
        content:
          "CommunicateHealth \u2014 \u201CWe\u2019re in business to better lives by designing health information that\u2019s easy to understand and use.\u201D",
      },
      {
        id: "problem",
        type: "text",
        title: "THE PROBLEM",
        content:
          "The problem was how can we use artificial intelligence to support people with limited health literacy to better manage their health? I was trying to enhance the health literacy of individuals with low health literacy and how they access their health information using artificial intelligence.",
      },
      {
        id: "why-important",
        type: "text",
        title: "WHY IS IT IMPORTANT TO SOLVE THIS PROBLEM?",
        content:
          "Nearly 9 out of 10 adults struggle to understand and use personal and public health information when it\u2019s filled with unfamiliar or complex terms. Health literacy is the degree to which individuals have the ability to find information to inform health-related decisions & actions.",
      },
      {
        id: "stat-quote",
        type: "quote",
        content:
          "Nearly 9 out of 10 adults struggle to understand and use personal and public health information when it\u2019s filled with unfamiliar or complex terms.",
      },
      {
        id: "research",
        type: "text",
        title: "USER INTERVIEWS",
        content:
          "I learned about users\u2019 pain points around navigating health information and suggestions to improve their experience. I conducted interviews with a varied audience touching on general questions about health literacy, biggest pain points around acquiring and navigating health information, and suggestions to improve their health information experience.",
      },
      {
        id: "research-findings",
        type: "text",
        title: "MAKING SENSE OF THE DATA",
        content:
          "Participants expressed a desire to have a reliable one-stop shop for all their medical information. Users want a simple streamlined online service that clarifies all their medical doubts & provides straightforward advice. Users find insurance information to be confusing & want a cheat-sheet to navigate it. Keeping up with medication, especially remembering to take them, is a pain point for users.",
      },
      {
        id: "affinity",
        type: "image",
        title: "Affinity Diagram",
        image: {
          alt: "Affinity diagram from user interview analysis",
          aspectRatio: "video",
          color: "#B8D0C0",
        },
      },
      {
        id: "solution-detail",
        type: "text",
        title: "SOLUTION",
        content:
          "A health-assistant bot that answers queries, analyzes documents & manages prescriptions. Clover.ai addresses all of the user needs: Answer user queries (text or voice based) & perform basic medical information look up. Store medical documents/insurance files securely & answer questions about its content. Upload prescriptions, get reminders & access a calendar view of upcoming medications. Send distress messages to emergency contacts.",
      },
      {
        id: "branding",
        type: "image",
        title: "BRANDING",
        image: {
          alt: "Clover.ai brand identity \u2014 friendly neighborhood health-assistant buddy",
          aspectRatio: "video",
          color: "#C0D8C8",
        },
      },
      {
        id: "design-chat",
        type: "image",
        title: "An AI Bot for your multi-modal needs: text & voice support",
        image: {
          alt: "Voice and text chat interface design",
          aspectRatio: "video",
          color: "#B8D0C0",
        },
      },
      {
        id: "design-simple",
        type: "image",
        title: "Clover.ai keeps it simple & verified",
        image: {
          alt: "Clover AI suggestions and verified information interface",
          aspectRatio: "video",
          color: "#B0C8B8",
        },
      },
      {
        id: "design-calendar",
        type: "image",
        title: "Always remember your medications with Clover\u2019s calendar",
        image: {
          alt: "Medicine calendar and prescription management view",
          aspectRatio: "video",
          color: "#A8C0B0",
        },
      },
      {
        id: "design-accessibility",
        type: "image",
        title: "Have your AI Bot adapt to your accessibility needs",
        image: {
          alt: "Onboarding settings for accessibility customization",
          aspectRatio: "video",
          color: "#C0D8C8",
        },
      },
      {
        id: "prototype",
        type: "image",
        title: "Interactive Prototype",
        image: {
          alt: "Clover.ai interactive prototype walkthrough",
          aspectRatio: "video",
          color: "#B8D0C0",
        },
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
