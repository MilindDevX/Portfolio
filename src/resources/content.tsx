import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, SmartLink } from "@once-ui-system/core";

const person: Person = {
  firstName: "Milind",
  lastName: "Bansal",
  name: "Milind Bansal",
  role: "Full-Stack Developer",
  avatar: "/images/avatar-male.png",
  email: "milindsk8r@gmail.com",
  location: "Asia/India",
  languages: ["English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let's build something great</>,
  description: <>Reach out via email or connect on social media.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MilindDevX",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/milind-bansal-177606244/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og-image.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Milind Bansal is a Full-Stack Developer specializing in Next.js, Node.js, and PostgreSQL. View my portfolio of scalable AI and web applications.`,
  headline: <>Building scalable full-stack applications</>,
  headlineData: <>Turning complex data into actionable insights</>,
  sublineText: <>I design systems that solve real problems, from AI-powered feedback triage to compliant digital marketplaces and zero-backend developer tools.</>,
  sublineDataText: <>I build machine learning pipelines, predictive forecasting models, and interactive visualizations that transform raw data into strategic business value.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">MedMarket</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/medmarket",
  },
  latestWork: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">APIDiff</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest work
        </Text>
      </Row>
    ),
    href: "/work/apidiff",
  },
};


const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn more about ${person.name}, a Full-Stack Architect from India building robust digital products.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I build systems where the architecture is the product. Whether it's enforcing pharmaceutical price compliance at the database level in MedMarket, designing a secure AI triage pipeline in FeedbackOS, or shipping a zero-backend diff engine in RouteLens — I treat every layer of the stack as a craft decision, not a checkbox. Currently a B.Tech CS/AI student at Newton School of Technology (2024–2028), shipping production-grade systems.
      </>
    ),
    descriptionData: (
      <>
        I work at the point where data becomes decisions. In TruthLens, I built an NLP pipeline that classifies AI-generated text at 91.3% F1 — then visualized token-level confidence so users understand why, not just what. In BudgetFlow, I turned transaction history into forward-looking cash-flow forecasts with {"<"} 8% MAPE. My instinct is to push past dashboards and build systems that produce insight automatically — then make that insight impossible to ignore.
      </>
    ),
  },
  work: {
    display: true,
    title: "Project Experience",
    experiences: [
      {
        company: "FeedbackOS",
        timeframe: "2026",
        role: "Lead Developer",
        achievements: [
          <>
            Designed and built an AI-powered customer feedback triage system using Next.js and Groq LLaMA, achieving low-latency tagging and categorization.
          </>,
          <>
            Implemented robust security layers including AES-256-GCM encryption for webhooks and comprehensive Zod validation.
          </>,
        ],
        images: [],
      },
      {
        company: "MedMarket India",
        timeframe: "2026",
        role: "Full-Stack Architect",
        achievements: [
          <>
            Architected a multi-sided marketplace connecting pharmacies and consumers with strict CDSCO compliance and DPCO price enforcement.
          </>,
          <>
            Built with React 19, Express.js 5, and PostgreSQL. Designed robust Role-Based Access Control and complex inventory workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "RouteLens (API Diff)",
        timeframe: "2026",
        role: "Frontend Engineer",
        achievements: [
          <>
            Developed a fully client-side, zero-backend API directory and structural JSON diffing tool using Next.js 14 and Tailwind CSS.
          </>,
          <>
            Implemented complex OpenAPI spec parsing and local storage sync with zero outbound network calls.
          </>,
        ],
        images: [],
      },
      {
        company: "TruthLens",
        timeframe: "2025",
        role: "Machine Learning Engineer",
        achievements: [
          <>
            Engineered a complete text analysis pipeline utilizing advanced NLP models to detect AI-generated content and misinformation.
          </>,
          <>
            Deployed a highly concurrent FastAPI backend orchestrated with Docker, serving inference requests to a sleek React frontend.
          </>,
        ],
        images: [],
      },
      {
        company: "BudgetFlow",
        timeframe: "2024 - 2025",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Built a comprehensive personal finance dashboard with predictive Simple Moving Average (SMA) forecasting algorithms.
          </>,
          <>
            Ensured strict data integrity utilizing Prisma ORM and PostgreSQL within a Node.js and React architecture.
          </>,
        ],
        images: [],
      },
      {
        company: "SignalStack",
        timeframe: "2024",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Delivered a real-time team collaboration workspace using WebSockets (Socket.io) for low-latency bidirectional communication.
          </>,
          <>
            Designed a highly polished, responsive dark-mode interface with Tailwind CSS and advanced analytics aggregation pipelines.
          </>,
        ],
        images: [],
      },
      {
        company: "QuickNotes",
        timeframe: "2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Engineered a blazingly fast, distraction-free markdown note-taking application with real-time rendering.
          </>,
          <>
            Implemented efficient local state updates and seamless folder organization within a minimalist glassmorphism-inspired UI.
          </>,
        ],
        images: [],
      },
    ],
    experiencesData: [
      {
        company: "Beijing PM2.5 Air Quality Analysis",
        timeframe: "April 2026",
        role: "Project & ETL Lead",
        achievements: [
          <>
            Engineered an end-to-end analytics pipeline on 43,824 hourly observations, handling datetime synthesis, advanced imputation for 2,067 nulls, and complex feature engineering.
          </>,
          <>
            Produced 11 EDA visualizations and a dual-view Tableau dashboard with a 6-KPI framework, translating statistical analysis into 3 operational recommendations for emission curtailment.
          </>,
        ],
        images: [],
      },
      {
        company: "Adani Total Gas Ltd.",
        timeframe: "2025",
        role: "Financial Modeler",
        achievements: [
          <>
            Constructed a 4-year consolidated financial model (FY2022–FY2025) from raw annual reports, computing 12+ financial ratios across liquidity, efficiency, and profitability dimensions.
          </>,
          <>
            Built a comprehensive DCF valuation model using FCFF and FCFE frameworks, estimating Cost of Equity via CAPM and quantifying valuation ranges through 5x5 grid sensitivity analysis.
          </>,
        ],
        images: [],
      },
      {
        company: "TruthLens",
        timeframe: "2025",
        role: "Machine Learning Engineer",
        achievements: [
          <>
            Engineered a complete text analysis pipeline utilizing advanced NLP models to detect AI-generated content and misinformation.
          </>,
          <>
            Designed scalable data architectures for training models, reducing data ingestion latency by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "BudgetFlow",
        timeframe: "2024 - 2025",
        role: "Data Analyst",
        achievements: [
          <>
            Developed predictive forecasting models using Simple Moving Averages to project financial health and optimize budgets.
          </>,
          <>
            Created dynamic interactive dashboards using Python and Tableau to visualize transaction trends and key performance indicators.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Rishihood University & Newton School of Technology",
        description: <>B.Tech in Computer Science and Artificial Intelligence (2024 - 2028)</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Digital Heroes Co.",
        description: (
          <>
            Completed an intensive Full-Stack Development Training Program.{" "}
            <SmartLink href="/docs/digital-heroes-certificate.pdf">View Certificate</SmartLink>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: <>React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, Figma</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css3" },
          { name: "Figma", icon: "figma" },
        ],
        images: [],
      },
      {
        title: "Backend & Database",
        description: <>Node.js, Express.js, PostgreSQL, MongoDB, Redis, REST API, Prisma ORM, SQL, NoSQL</>,
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Redis", icon: "redis" },
          { name: "Prisma", icon: "prisma" },
        ],
        images: [],
      },
      {
        title: "Data Science & AI",
        description: <>Python, NumPy, Pandas, Matplotlib, Machine Learning, OpenAI API, LangChain, Generative AI Tools, Tableau, Data Visualization, MS-Excel</>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "NumPy", icon: "numpy" },
          { name: "Pandas", icon: "pandas" },
          { name: "Tableau", icon: "tableau" },
          { name: "OpenAI API", icon: "openai" },
          { name: "Generative AI", icon: "sparkles" },
        ],
        images: [],
      },
      {
        title: "Infra & Security",
        description: <>Git, GitHub, Unit Testing, OAuth, JWT, AWS, Vercel, Docker, Linux</>,
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "OAuth & JWT", icon: "lock" },
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
    skillsData: [
      {
        title: "Data Science & Analysis",
        description: <>Python, NumPy, Pandas, Matplotlib, Scikit-Learn, Statistical Analysis, Data Cleaning, EDA</>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "NumPy", icon: "numpy" },
          { name: "Pandas", icon: "pandas" },
          { name: "Scikit-Learn", icon: "scikit" },
        ],
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: <>Predictive Modeling, NLP, OpenAI API, LangChain, Generative AI Tools</>,
        tags: [
          { name: "Machine Learning", icon: "sparkles" },
          { name: "OpenAI API", icon: "openai" },
          { name: "Generative AI", icon: "sparkles" },
        ],
        images: [],
      },
      {
        title: "Database & Tools",
        description: <>SQL, PostgreSQL, Tableau, Data Visualization, Excel, Docker, Git</>,
        tags: [
          { name: "SQL", icon: "postgresql" },
          { name: "Tableau", icon: "tableau" },
          { name: "Git", icon: "git" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Things I've Built",
  description: `A showcase of my recent design and development work.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
