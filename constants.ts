import { ShieldCheck, BookOpen, Globe, UserCheck, Network, Zap } from "lucide-react";
import { FeatureItem, ProductDetail, TrustPoint } from "./types";

export const NAV_LINKS = [
  { label: "Focus Areas", href: "#focus" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
];

export const HERO_CONTENT = {
  headline: "Building Intelligent Tools for Modern Learning, Careers, and Collaboration.",
  subheadline: "Transnode AI, LLC develops cross-border AI products that enhance credibility, accelerate research, and streamline workflows—trusted by students, researchers, and global SMEs.",
  ctaPrimary: "Join Early Access",
  ctaSecondary: "Investor Inquiry",
  ctaCrowdfund: "1 Dollar Crowdfunding Appreciation",
};

export const FEATURES: FeatureItem[] = [
  {
    title: "AI Verification Tech",
    description: "Leveraging computer vision and NLP to validate credentials, skills, and professional milestones with high accuracy.",
    icon: ShieldCheck,
    challenge: "Resume fraud and unverified skills cost companies billions annually and undermine the integrity of academic institutions.",
    solution: "Our multi-modal AI models instantly verify documents and assess practical skills, reducing verification turnaround time by 90%."
  },
  {
    title: "AI Edu",
    description: "Creating adaptive learning environments that personalize content delivery based on real-time student performance metrics.",
    icon: BookOpen,
    challenge: "Traditional one-size-fits-all education models fail to address individual learning gaps and pace differences effectively.",
    solution: "Adaptive AI tutors analyze performance patterns to provide personalized curriculum adjustments and targeted remediation in real-time."
  },
  {
    title: "AI Matching",
    description: "Utilizing graph neural networks to optimally pair researchers, volunteers, and organizations for high-impact collaborations.",
    icon: Network,
    challenge: "Connecting the right talent to the right opportunity is manually intensive, inefficient, and often prone to unconscious bias.",
    solution: "Deep learning matching algorithms analyze compatibility beyond keywords, considering potential synergy and complementary skill sets."
  },
  {
    title: "AI Workflow Optimization",
    description: "Automating complex operational workflows in cross-border commerce and academic administration using autonomous agents.",
    icon: Zap,
    challenge: "Cross-border operations are often bogged down by language barriers, complex compliance documentation, and administrative friction.",
    solution: "Autonomous agents handle translation, scheduling, and compliance workflows, allowing teams to focus on high-value strategy."
  },
];

export const TRUST_POINTS: TrustPoint[] = [
  { text: "U.S.-based company founded by UCSD alumni in California" },
  { text: "Bridging U.S.–China technical and research ecosystems" },
  { text: "AI-first product philosophy with ethical safeguards" },
  { text: "Commitment to strict data privacy & confidentiality" },
];

export const TARGET_AUDIENCE = [
  { title: "Students", text: "Undergraduate students seeking research experience", icon: UserCheck },
  { title: "Job Seekers", text: "Early career professionals improving resume credibility", icon: Zap },
  { title: "Researchers", text: "Professors & labs looking for research collaborators", icon: Network },
  { title: "SMEs", text: "Cross-border businesses expanding into the U.S.", icon: Globe },
];

export const PRODUCTS: ProductDetail[] = [
  {
    name: "USVerif",
    tagline: "Credibility Engine",
    points: [
      "AI credibility scoring",
      "Skill-based verification tasks",
      "Personalized career insight"
    ]
  },
  {
    name: "Research Pipe",
    tagline: "Collaboration Platform",
    points: [
      "Cross-university matching",
      "AI workflow & research task planner",
      "Confidentiality + collaboration pipeline"
    ]
  },
  {
    name: "US-China E-Commerce AI Tools",
    tagline: "Market Enablement",
    points: [
      "Content generation",
      "Low-cost storefront setup",
      "Market analytics"
    ]
  }
];