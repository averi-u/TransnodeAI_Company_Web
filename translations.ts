
import { ShieldCheck, BookOpen, Globe, UserCheck, Network, Lock, Zap, Layers } from "lucide-react";

export type Language = 'en' | 'zh' | 'es' | 'ko';

export interface ContentType {
  nav: {
    focus: string;
    products: string;
    team: string;
    contact: string;
  };
  hero: {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaCrowdfund: string;
  };
  aiModels: {
    title: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
      challenge: string;
      solution: string;
    }[];
  };
  trust: {
    title: string;
    points: string[];
    nda: string;
    collaborationTitle: string;
    collaborationBadge: string;
  };
  audience: {
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  products: {
    label: string;
    title: string;
    roadmapBtn: string;
    items: {
      name: string;
      tagline: string;
      points: string[];
    }[];
    waitlistBtn: string;
    quoteBtn: string;
    earlyAccessBtn: string;
    roadmapTitle: string;
    roadmapDesc: string;
    pastProjectsTitle: string;
    pastProjects: {
      name: string;
      desc: string;
      link: string;
      url: string;
    }[];
  };
  team: {
    hero: {
      title: string;
      subheading: string;
    };
    philosophy: {
      title: string;
      items: {
        title: string;
        description: string;
        icon: 'compass' | 'rocket' | 'shield';
      }[];
    };
    founding: {
      title: string;
      intro: string;
      bullets: string[];
      closing: string;
    };
    advisors: {
      title: string;
      description: string;
      areas: string[];
      closing: string;
    };
    opportunities: {
      title: string;
      description: string;
      roles: string[];
      closing: string;
      button: string;
    };
  };
  careers: {
    title: string;
    description: string;
    btnApply: string;
    btnStudent: string;
  };
  contact: {
    tagline: string;
    title: string;
    description: string;
    emailTitle: string;
    emailDesc: string;
    locationTitle: string;
    locationDesc: string;
    socialTitle: string;
    socialDesc: string;
    socialPlatforms: {
      linkedin: string;
      twitter: string;
      instagram: string;
      tiktok: string;
      youtube: string;
      other: string;
    };
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formButton: string;
    sentTitle: string;
    sentDesc: string;
    investorTitle: string;
    investorDesc: string;
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  legalPage: {
    title: string;
    updated: string;
    sidebar: {
      privacy: string;
      terms: string;
      confidentiality: string;
    };
    privacy: {
      title: string;
      content: string[];
    };
    terms: {
      title: string;
      content: string[];
    };
    confidentiality: {
      title: string;
      content: string[];
    };
  };
  footer: {
    tagline: string;
    company: string;
    legal: string;
    rights: string;
  }
}

const en: ContentType = {
  nav: {
    focus: "Focus Areas",
    products: "Products",
    team: "Team",
    contact: "Contact Us"
  },
  hero: {
    badge: "AI for Global Impact",
    headlineStart: "Building",
    headlineHighlight: "Intelligent Tools",
    headlineEnd: "for Modern Collaboration.",
    subheadline: "Transnode AI, LLC develops cross-border AI products that enhance credibility, accelerate research, and streamline workflows—trusted by students, researchers, and global SMEs.",
    ctaPrimary: "Join Early Access",
    ctaSecondary: "Investor Inquiry",
    ctaCrowdfund: "1 Dollar Crowdfunding Appreciation"
  },
  aiModels: {
    title: "BUILT ON LEADING AI MODELS"
  },
  features: {
    title: "Our Focus Areas",
    items: [
      {
        title: "AI Verification Tech",
        description: "Leveraging computer vision and NLP to validate credentials, skills, and professional milestones with high accuracy.",
        challenge: "Resume fraud and unverified skills cost companies billions annually.",
        solution: "Our multi-modal AI models instantly verify documents and assess practical skills."
      },
      {
        title: "AI Edu",
        description: "Creating adaptive learning environments that personalize content delivery based on real-time student performance metrics.",
        challenge: "Traditional one-size-fits-all education models fail to address individual learning gaps.",
        solution: "Adaptive AI tutors analyze performance patterns to provide personalized curriculum."
      },
      {
        title: "AI Integrations",
        description: "We use current cutting-edge AI integrations and multi-modal models to provide fastest delivery and high-performance technical solutions.",
        challenge: "Fragmented systems and outdated architectures slow down development cycles and prevent real-time intelligence.",
        solution: "Integrating state-of-the-art LLMs and vision models to accelerate time-to-market and operational speed."
      },
      {
        title: "AI Workflow Optimization",
        description: "Automating complex operational workflows in cross-border commerce and academic administration using autonomous agents.",
        challenge: "Cross-border operations are often bogged down by language barriers and compliance.",
        solution: "Autonomous agents handle translation, scheduling, and compliance workflows."
      }
    ]
  },
  trust: {
    title: "Why Students, Researchers, and Businesses Trust Us",
    points: [
      "U.S.-based company founded by UCSD alumni in California",
      "Bridging U.S.–China technical and research ecosystems",
      "AI-first product philosophy with ethical safeguards",
      "Commitment to strict data privacy & confidentiality"
    ],
    nda: "All project collaborations include NDA (Confidentiality Agreements) and secure data handling practices.",
    collaborationTitle: "Collaborative Excellence",
    collaborationBadge: "Verified Partnerships"
  },
  audience: {
    title: "Who We Help",
    subtitle: "Empowering the next generation of researchers, professionals, and global innovators.",
    items: [
      { title: "Students", text: "Undergraduate students seeking research experience" },
      { title: "Job Seekers", text: "Early career professionals improving resume credibility" },
      { title: "HR Professionals", text: "Streamlining recruitment with AI-verified candidate credentials" },
      { title: "SMEs", text: "Cross-border businesses expanding into the U.S." }
    ]
  },
  products: {
    label: "Innovation Pipeline",
    title: "What We're Building (Preview)",
    roadmapBtn: "View Roadmap",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "Credibility Engine",
        points: ["AI credibility scoring", "Skill-based verification tasks", "Personalized career insight"]
      },
      {
        name: "US-China E-Commerce AI Tools",
        tagline: "Market Enablement",
        points: ["Content generation", "Low-cost storefront setup", "Market analytics"]
      },
      {
        name: "Web Development Service & Digital Solutions",
        tagline: "Business Growth",
        points: ["Shopify", "B2B landing page", "local business", "Website Marketing Services"]
      }
    ],
    waitlistBtn: "Join Waitlist",
    quoteBtn: "Request a Quote",
    earlyAccessBtn: "Current MVP Presentation",
    roadmapTitle: "Product Roadmap",
    roadmapDesc: "Our intelligent tools are designed to empower the next generation of professionals with verification, collaboration, and market access.",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "Our Team",
      subheading: "Our founding team brings global perspectives and academic backgrounds from top U.S. and Chinese institutions such as UC San Diego and Fudan University. We combine expertise in AI systems, backend engineering, and research operations to build reliable, intelligent tools for modern work and verification."
    },
    philosophy: {
      title: "How We Work",
      items: [
        {
          title: "User-Obsessed",
          description: "We build products that solve real problems for students, researchers, and professionals navigating complex workflows.",
          icon: "compass"
        },
        {
          title: "Engineering-Driven",
          description: "Our team brings technical backgrounds from leading universities and hands-on experience building scalable, production-grade systems.",
          icon: "rocket"
        },
        {
          title: "Global & Cross-Disciplinary",
          description: "We operate across the U.S. and China, combining AI, design, and operations expertise to move fast and deliver impact.",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "Founding Team",
      intro: "Our founding team comes from:",
      bullets: [
        "UC San Diego (Computer Engineering & Economics)",
        "Fudan University (Computer Science)",
        "Experience in AI engineering, backend systems, product development, and research workflows",
        "Previously worked on machine learning, distributed systems, user research, and cross-border tech products"
      ],
      closing: "We are expanding our core team as we develop AuthenlyUSA and our broader product ecosystem."
    },
    advisors: {
      title: "Advisors & Collaborators",
      description: "We actively collaborate with researchers, engineers, and industry professionals across:",
      areas: [
        "Artificial intelligence",
        "Verification and compliance",
        "Research methodology",
        "Cross-border operations",
        "UI/UX and product strategy"
      ],
      closing: "This network helps us validate ideas quickly, refine product direction, and ensure we build solutions that truly matter."
    },
    opportunities: {
      title: "Join Our Team",
      description: "We work with talented students and early-career developers who want hands-on experience in:",
      roles: [
        "AI product development",
        "Backend engineering",
        "Research operations",
        "Product design and UX",
        "Global tech operations (U.S. + China)"
      ],
      closing: "Interns contribute directly to our MVPs, learn rapidly, and help shape the future of Transnode.",
      button: "Join Us"
    }
  },
  careers: {
    title: "Interns & Contributors Welcome",
    description: "We offer hands-on experience in AI, data, software engineering, and product design. Perfect for students seeking real-world projects and portfolio development. Remote-friendly, project-based, flexible schedules.",
    btnApply: "Apply as Intern",
    btnStudent: "For UCSD Students → Direct Contact"
  },
  contact: {
    tagline: "Get in Touch",
    title: "Contact Us",
    description: "Whether you are a student looking for opportunities, a researcher seeking collaboration, or an investor interested in our vision, we would love to hear from you.",
    emailTitle: "Email Us",
    emailDesc: "For general inquiries, partnerships, and support.",
    locationTitle: "Headquarters",
    locationDesc: "San Diego, California",
    socialTitle: "Connect on Social Media",
    socialDesc: "Follow our journey, get the latest updates on our product launches, and join our growing community of innovators.",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      other: "Other"
    },
    formTitle: "Send a Message",
    formName: "Your Name",
    formEmail: "Email Address",
    formSubject: "Subject",
    formMessage: "Message",
    formButton: "Send Message",
    sentTitle: "Message Sent!",
    sentDesc: "We'll get back to you shortly.",
    investorTitle: "Investors?",
    investorDesc: "Subscribe to us on"
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How do you ensure data privacy with AI models?",
        answer: "We strictly adhere to GDPR and CCPA standards. Data is anonymized and encrypted at rest and in transit to ensure user privacy is never compromised."
      },
      {
        question: "Do you offer API access for developers?",
        answer: "We are currently in private beta. You can request early access via our Products page to integrate our technology into your own platforms."
      },
      {
        question: "How accurate is the verification model?",
        answer: "Our multi-modal verification system achieves over 98% accuracy in document verification and deepfake detection benchmarks."
      },
      {
        question: "Can I use your tools for academic research?",
        answer: "Yes, we offer special licenses and collaborative opportunities for academic institutions and individual researchers."
      },
      {
        question: "What is the current status of the startup and how can volunteers get involved?",
        answer: "We are currently in the beta testing phase with live pilot programs. We welcome volunteers and interns to join our engineering and research teams to help scale our impact and refine our core algorithms."
      },
      {
        question: "What is the long-term impact vision for investors?",
        answer: "Our goal is to become the global standard for AI-verified academic and professional identity. By bridging the gap between education and employment, we aim to reduce hiring friction and unlock billions in economic value."
      }
    ]
  },
  legalPage: {
    title: "Legal Information",
    updated: "Last Updated: November 28, 2025",
    sidebar: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      confidentiality: "Confidentiality"
    },
    privacy: {
      title: "Privacy Policy",
      content: [
        "TRANSNODE AI, LLC PRIVACY POLICY",
        "1. INTRODUCTION",
        "Transnode AI, LLC ('Transnode', 'we', 'us', or 'our') respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website, transnode.ai, and our associated products including AuthenlyUSA and AI Edu (collectively, the 'Services'). By accessing or using our Services, you agree to the collection and use of information in accordance with this policy.",
        "2. INFORMATION WE COLLECT",
        "We collect several different types of information for various purposes to provide and improve our Services to you:",
        "a. Personal Identification Information: When you register for our Services, request information, or subscribe to our materials, we may ask you to provide certain personally identifiable information, including but not limited to: Email address, First and last name, Phone number, Address, State, Province, ZIP/Postal code, City.",
        "b. Verification Data (AuthenlyUSA): To provide credibility and verification services, we may collect and process sensitive information such as government-issued identification documents, academic transcripts, professional certifications, and biometric data (specifically facial scans for identity matching). This data is processed strictly for the purpose of verification and is handled with the highest level of security.",
        "c. Academic and Career Data (AI Edu): We collect information regarding your learning interests, academic history, and goals to facilitate accurate matching and personalized learning paths.",
        "d. Usage Data: We may also collect information on how the Service is accessed and used ('Usage Data'). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.",
        "3. HOW WE USE YOUR INFORMATION",
        "Transnode AI, LLC uses the collected data for the following purposes:",
        "• To provide and maintain our Services, including the verification of credentials and facilitation of learning tools.",
        "• To notify you about changes to our Services.",
        "• To allow you to participate in interactive features of our Services when you choose to do so.",
        "• To provide customer support and respond to your inquiries.",
        "• To gather analysis or valuable information so that we can improve our Services.",
        "• To monitor the usage of our Services.",
        "• To detect, prevent, and address technical issues and fraud.",
        "4. DATA RETENTION",
        "Transnode AI, LLC will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. Verification data is retained only for the duration required to complete the verification process and for audit trails as mandated by law, after which it is securely archived or deleted.",
        "5. TRANSFER OF DATA",
        "Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. Specifically, as a company bridging U.S. and global markets, data may be transferred between our operating regions. Transnode takes all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.",
        "6. DISCLOSURE OF DATA",
        "We may disclose your Personal Data in the good faith belief that such action is necessary to:",
        "• To comply with a legal obligation.",
        "• To protect and defend the rights or property of Transnode AI, LLC.",
        "• To prevent or investigate possible wrongdoing in connection with the Service.",
        "• To protect the personal safety of users of the Service or the public.",
        "• To protect against legal liability.",
        "7. SECURITY OF DATA",
        "The security of your data is important to us. We utilize industry-standard encryption protocols (TLS/SSL) for data in transit and AES-256 encryption for data at rest. However, please remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
        "8. YOUR DATA PROTECTION RIGHTS",
        "Depending on your location, you may have the following rights regarding your personal data:",
        "• The right to access, update, or delete the information we have on you.",
        "• The right of rectification.",
        "• The right to object.",
        "• The right of restriction.",
        "• The right to data portability.",
        "• The right to withdraw consent.",
        "If you wish to exercise any of these rights, please contact us at legal@transnode.ai.",
        "9. CONTACT US",
        "If you have any questions about this Privacy Policy, please contact us by email: legal@transnode.ai."
      ]
    },
    terms: {
      title: "Terms of Service",
      content: [
        "TRANSNODE AI, LLC TERMS OF SERVICE",
        "1. ACCEPTANCE OF TERMS",
        "By accessing or using our Services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.",
        "2. DESCRIPTION OF SERVICES",
        "Transnode AI, LLC provides various AI-driven tools and services including AuthenlyUSA and AI Edu. We reserve the right to modify or discontinue any part of the Service at any time.",
        "3. USER OBLIGATIONS",
        "You agree to use the Services only for lawful purposes and in a manner that does not infringe the rights of others. You are responsible for maintaining the confidentiality of your account credentials.",
        "4. INTELLECTUAL PROPERTY",
        "The content, features, and functionality of the Services are owned by Transnode AI, LLC and are protected by international copyright, trademark, and other intellectual property laws.",
        "5. LIMITATION OF LIABILITY",
        "Transnode AI, LLC shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the Services.",
        "6. CHANGES TO TERMS",
        "We reserve the right to update these Terms at any time. Your continued use of the Services after such changes constitutes acceptance of the new Terms.",
        "7. CONTACT",
        "For questions regarding these Terms, please contact legal@transnode.ai."
      ]
    },
    confidentiality: {
      title: "Confidentiality & Security Agreement",
      content: [
        "1. DEFINITION OF CONFIDENTIAL INFORMATION",
        "'Confidential Information' means all non-public information disclosed by Transnode AI, LLC ('Disclosing Party') to the user or partner ('Receiving Party'), or vice versa, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.",
        "Transnode's Confidential Information specifically includes, but is not limited to: proprietary AI algorithms, model weights, training datasets, source code, product roadmaps, business plans, financial projections, customer lists, and industry-specific insights generated via our products.",
        "2. OBLIGATIONS OF THE RECEIVING PARTY",
        "The Receiving Party agrees to: (i) hold all Confidential Information in strict confidence and not disclose it to any third party except as specifically authorized herein; (ii) use the Confidential Information solely for the purpose of using the Service or evaluating a potential business relationship with Transnode; and (iii) use at least the same degree of care to protect the Confidential Information as it uses to protect its own most confidential information, but in no event less than a reasonable degree of care.",
        "3. PROTECTION OF USER DATA",
        "Transnode AI, LLC acknowledges that students and professionals using our platform may upload data, credentials, and portfolios. Transnode agrees to treat all such user-generated content as Confidential Information. We will not sell, license, or share this data with third parties for marketing purposes. We not use this data to train public-facing foundational models without explicit, written consent from the user.",
        "4. EXCEPTIONS",
        "Confidential Information shall not include any information that: (i) is or becomes generally known to the public without breach of any obligation owed to the Disclosing Party; (ii) was known to the Receiving Party prior to its disclosure by the Disclosing Party; (iii) is received from a third party without breach of any obligation owed to the Disclosing Party; or (iv) was independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.",
        "5. COMPELLED DISCLOSURE",
        "The Receiving Party may disclose Confidential Information to the extent compelled by law, regulation, or court order, provided the Receiving Party gives the Disclosing Party prior notice of the compelled disclosure (to the extent legally permitted) and reasonable assistance, at the Disclosing Party's cost, if the Disclosing Party wishes to contest the disclosure.",
        "6. RETURN OR DESTRUCTION OF INFORMATION",
        "Upon termination of the user's account or upon written request by the Disclosing Party, the Receiving Party shall promptly return or destroy all copies of the Confidential Information in its possession or control and certify in writing that it has done so.",
        "7. REMEDIES",
        "The Receiving Party acknowledges that disclosure of Confidential Information may cause substantial harm to the Disclosing Party for which damages alone may not be a sufficient remedy. Therefore, the Disclosing Party shall be entitled to seek appropriate equitable relief, including injunctions, in addition to whatever other remedies it might have at law.",
        "8. DURATION",
        "The obligations of confidentiality under this Agreement shall survive the termination of your use of the Service and remain in effect for a period of five (5) years from the date of disclosure, or for trade secrets, for as long as such information remains a trade secret under applicable law."
      ]
    }
  },
  footer: {
    tagline: "Building the future of learning and career credibility through intelligent systems.",
    company: "Company",
    legal: "Legal",
    rights: "Transnode AI, LLC. All rights reserved."
  }
};

const zh: ContentType = {
  nav: {
    focus: "核心领域",
    products: "产品",
    team: "团队",
    contact: "联系我们"
  },
  hero: {
    badge: "AI 助力全球影响力",
    headlineStart: "构建",
    headlineHighlight: "智能工具",
    headlineEnd: "赋能现代协作",
    subheadline: "Transnode AI, LLC 开发跨境 AI 产品，提升可信度、加速研究并在全球范围内简化工作流程——深受学生、研究人员和全球中小企业的信赖。",
    ctaPrimary: "加入早期体验",
    ctaSecondary: "投资者咨询",
    ctaCrowdfund: "1美元众筹致谢"
  },
  aiModels: {
    title: "基于领先的 AI 模型构建"
  },
  features: {
    title: "我们的核心领域",
    items: [
      {
        title: "AI 验证技术",
        description: "利用计算机视觉和 NLP 高精度验证证书、技能和职业里程碑。",
        challenge: "简历欺诈和未经验证的技能每年给公司造成数十亿美元的损失。",
        solution: "我们的多模态 AI 模型可即时验证文档并评估实践技能。"
      },
      {
        title: "AI 教育",
        description: "创建自适应学习环境，根据实时学生表现指标个性化内容交付。",
        challenge: "传统的“一刀切”教育模式无法有效解决个体学习差距。",
        solution: "自适应 AI 导师分析表现模式，提供个性化课程调整。"
      },
      {
        title: "AI 集成",
        description: "我们利用尖端的 AI 集成和多模态模型，确保为复杂的技术工作流程提供快速交付和高性能解决方案。",
        challenge: "零散的系统和过时的架构减慢了开发周期并阻碍了实时情报。",
        solution: "集成最先进的 LLM 和视觉模型，以加速上市时间和运营速度。"
      },
      {
        title: "AI 工作流优化",
        description: "利用自主代理自动化跨境商务和学术管理中的复杂运营工作流。",
        challenge: "跨境运营经常因语言障碍和复杂的合规文件而受阻。",
        solution: "自主代理处理翻译、调度和合规工作流。"
      }
    ]
  },
  trust: {
    title: "为什么学生、研究人员和企业信任我们",
    points: [
      "总部位于美国加州的 UCSD 校友创立公司",
      "连接中美技术和研究生系统",
      "AI 优先的产品理念，具备道德保障",
      "承诺严格的数据隐私和保密性"
    ],
    nda: "所有项目合作均包含 NDA（保密协议）和安全数据处理实践。",
    collaborationTitle: "卓越协作",
    collaborationBadge: "已验证合作伙伴"
  },
  audience: {
    title: "我们服务于谁",
    subtitle: "赋能下一代研究人员、专业人士和全球创新者。",
    items: [
      { title: "学生", text: "寻求研究经验的本科生" },
      { title: "求职者", text: "提高简历可信度的早期职业人士" },
      { title: "HR 专业人士", text: "通过 AI 验证的候选人证书简化招聘流程" },
      { title: "中小企业", text: "拓展美国市场的跨境企业" }
    ]
  },
  products: {
    label: "创新管道",
    title: "我们正在构建什么（预览）",
    roadmapBtn: "查看路线图",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "可信度引擎",
        points: ["AI 可信度评分", "基于技能的验证任务", "个性化职业洞察"]
      },
      {
        name: "中美电商 AI 工具",
        tagline: "市场赋能",
        points: ["内容生成", "低成本开店", "市场分析"]
      },
      {
        name: "网站开发服务与数字解决方案",
        tagline: "业务增长",
        points: ["Shopify", "B2B 落地页", "当地业务", "网站营销服务"]
      }
    ],
    waitlistBtn: "加入候补名单",
    quoteBtn: "索取报价",
    earlyAccessBtn: "当前 MVP 演示",
    roadmapTitle: "产品路线图",
    roadmapDesc: "我们的智能工具旨在通过验证、协作和市场准入赋能下一代专业人士。",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "我们的团队",
      subheading: "我们的创始团队带来全球视野和来自加州大学圣地亚哥分校和复旦大学等中美顶尖机构的学术背景。我们结合 AI 系统、后端工程和研究运营方面的专业知识，为现代 work 和验证构建可靠의 지능형 도구。"
    },
    philosophy: {
      title: "我们的工作方式",
      items: [
        {
          title: "用户至上",
          description: "我们构建产品以解决学生、研究人员和专业人士在复杂工作流中遇到的实际问题。",
          icon: "compass"
        },
        {
          title: "工程驱动",
          description: "我们的团队拥有顶尖大学的技术背景，并在构建可扩展的生产级系统方面拥有实践经验。",
          icon: "rocket"
        },
        {
          title: "全球与跨学科",
          description: "我们跨中美运营，结合 AI、设计和运营专业知识，快速行动并交付影响力。",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "创始团队",
      intro: "我们的创始团队来自：",
      bullets: [
        "加州大学圣地亚哥分校 (计算机工程与经济学)",
        "复旦大学 (计算机科学)",
        "在 AI 工程、后端系统、产品开发和研究工作流方面拥有经验",
        "曾从事机器学习、分布式系统、用户研究和跨境科技产品工作"
      ],
      closing: "我们正在扩充核心团队，以开发 AuthenlyUSA 等产品。"
    },
    advisors: {
      title: "顾问与合作者",
      description: "我们积极与以下领域的研究人员、工程师 and 行业专业人士合作：",
      areas: [
        "人工智能",
        "验证与合规",
        "研究方法论",
        "跨境运营",
        "UI/UX 与产品战略"
      ],
      closing: "这个网络帮助我们快速验证想法，完善产品方向，并确保我们构建真正重要的解决方案。"
    },
    opportunities: {
      title: "加入我们的团队",
      description: "我们与有才华的学生和早期职业开发者合作，提供以下方面的实践经验：",
      roles: [
        "AI 产品开发",
        "后端工程",
        "研究运营",
        "产品设计与 UX",
        "全球科技运营 (美国 + 中国)"
      ],
      closing: "实习生直接参与我们的 MVP，快速学习，并帮助塑造 Transnode 的未来。",
      button: "加入我们"
    }
  },
  careers: {
    title: "欢迎实习生与贡献者",
    description: "我们提供 AI、数据、软件工程和 product 设计方面的实践经验。非常适合寻求真实项目和作品集发展的学生。支持远程、基于项目、灵活的时间安排。",
    btnApply: "申请实习",
    btnStudent: "UCSD 学生通道 → 直接联系"
  },
  contact: {
    tagline: "取得联系",
    title: "联系我们",
    description: "无论您是寻找机会的学生、寻求合作的研究人员，还是对我们愿景感兴趣的投资者，我们都希望能听到您的声音。",
    emailTitle: "给我们发邮件",
    emailDesc: "用于一般咨询、合作 and 支持。",
    locationTitle: "总部",
    locationDesc: "美国加利福尼亚州圣地亚哥",
    socialTitle: "在社交媒体上联系",
    socialDesc: "关注我们的旅程，获取产品发布的最新更新，并加入我们要不断壮大的创新者社区。",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      other: "其他"
    },
    formTitle: "Send a Message",
    formName: "您的姓名",
    formEmail: "电子邮件地址",
    formSubject: "主题",
    formMessage: "消息",
    formButton: "发送消息",
    sentTitle: "消息已发送！",
    sentDesc: "我们会尽快回复您。",
    investorTitle: "投资者？",
    investorDesc: "在 Crunchbase 上关注我们"
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "你们如何利用 AI 模型确保数据隐私？",
        answer: "我们严格遵守 GDPR 和 CCPA 标准。数据在静态和传输过程中均经过匿名化和加密处理，以确保用户隐私不受侵犯。"
      },
      {
        question: "你们为开发者提供 API 访问权限吗？",
        answer: "我们目前处于内测阶段。您可以通过我们的产品页面申请早期访问，将我们的技术集成到您自己的平台中。"
      },
      {
        question: "验证模型的准确性如何？",
        answer: "我们的多模态验证系统在文档验证和深度伪造检测基准测试中达到了超过 98% 的准确率。"
      },
      {
        question: "我可以将你们的工具用于学术研究吗？",
        answer: "可以，我们为学术机构和个人研究人员提供特别许可和合作机会。"
      },
      {
        question: "初创公司目前的状况如何，志愿者如何参与？",
        answer: "我们目前处于带有现场试点项目的 Beta 测试阶段。我们欢迎志愿者和实习生加入我们的工程和研究团队，帮助扩大我们的影响力并完善我们的核心算法。"
      },
      {
        question: "对投资者的长期影响愿景是什么？",
        answer: "我们的目标是成为 AI 验证的学术和职业身份的全球标准。通过弥合教育和就业之间的差距，我们旨在减少招聘摩擦并释放数十亿美元的经济价值。"
      }
    ]
  },
  legalPage: {
    title: "法律信息",
    updated: "最后更新：2025年11月28日",
    sidebar: {
      privacy: "隐私政策",
      terms: "服务条款",
      confidentiality: "保密协议"
    },
    privacy: {
      title: "隐私政策",
      content: ["请参阅英文版以获取完整的法律约束条款。", "Transnode AI, LLC 尊重您的隐私..."]
    },
    terms: {
      title: "服务条款",
      content: ["请参阅英文版以获取完整的法律约束条款。", "感谢您关注 Transnode AI, LLC..."]
    },
    confidentiality: {
      title: "保密与安全协议",
      content: ["请参阅英文版以获取完整的法律约束条款。", "1. 保密信息的定义..."]
    }
  },
  footer: {
    tagline: "通过智能系统构建研究和职业可信度的未来。",
    company: "公司",
    legal: "法律",
    rights: "Transnode AI, LLC. 保留所有权利。"
  }
};

const es: ContentType = {
  nav: {
    focus: "Áreas de Enfoque",
    products: "Productos",
    team: "Equipo",
    contact: "Contacto"
  },
  hero: {
    badge: "IA para Impacto Global",
    headlineStart: "Construyendo",
    headlineHighlight: "Herramientas Inteligentes",
    headlineEnd: "para la Colaboración Moderna.",
    subheadline: "Transnode AI, LLC desarrolla productos de IA transfronterizos que mejoran la credibilidad, aceleran la investigación y agilizan los flujos de trabajo, con la confianza de estudiantes, investigadores y PYMES globales.",
    ctaPrimary: "Acceso Anticipado",
    ctaSecondary: "Consulta de Inversores",
    ctaCrowdfund: "Crowdfunding de 1 Dólar"
  },
  aiModels: {
    title: "CONSTRUIDO SOBRE MODELOS DE IA LÍDERES"
  },
  features: {
    title: "Nuestras Áreas de Enfoque",
    items: [
      {
        title: "Tecnología de Verificación IA",
        description: "Aprovechando la visión por computadora y PNL para validar credenciales y habilidades con alta precisión.",
        challenge: "El fraude en currículums y habilidades no verificadas cuestan miles de millones anualmente.",
        solution: "Nuestros modelos de IA multimodales verifican instantáneamente documentos y evalúan habilidades."
      },
      {
        title: "IA Educativa",
        description: "Creando entornos de aprendizaje adaptativos que personalizan la entrega de contenido.",
        challenge: "Los modelos educativos tradicionales no abordan las brechas de aprendizaje individuales.",
        solution: "Tutores de IA adaptativos analizan patrones de rendimiento para proporcionar un plan de estudios personalizado."
      },
      {
        title: "Integraciones de IA",
        description: "Aprovechamos las integraciones de IA de vanguardia y los modelos multimodales para garantizar una entrega rápida y soluciones técnicas de alto rendimiento.",
        challenge: "Los sistemas fragmentados y las arquitecturas obsoletas ralentizan los ciclos de desarrollo y evitan la inteligencia en tiempo real.",
        solution: "Integración de LLM y modelos de visión de última generación para acelerar el tiempo de comercialización y la velocidad operativa."
      },
      {
        title: "Optimización de Flujos de Trabajo",
        description: "Automatizando flujos de trabajo operativos complejos en el comercio transfronterizo y la administración académica.",
        challenge: "Las operaciones transfronterizas a menudo se ven obstaculizadas por barreras lingüísticas.",
        solution: "Agentes autónomos manejan traducción, programación y flujos de trabajo de cumplimiento."
      }
    ]
  },
  trust: {
    title: "Por qué confían en nosotros",
    points: [
      "Empresa con sede en EE. UU. fundada por exalumnos de UCSD",
      "Uniendo ecosistemas técnicos y de investigación de EE. UU. y China",
      "Filosofía de producto primero IA con salvaguardas éticas",
      "Compromiso con la estricta privacidad y confidencialidad de los datos"
    ],
    nda: "Todas las colaboraciones incluyen NDA y prácticas seguras de manejo de datos.",
    collaborationTitle: "Excelencia Colaborativa",
    collaborationBadge: "Asociaciones Verificadas"
  },
  audience: {
    title: "A quién ayudamos",
    subtitle: "Empoderando a la próxima generación de investigadores, profesionales e innovadores globales.",
    items: [
      { title: "Estudiantes", text: "Estudiantes de pregrado que buscan experiencia en investigación" },
      { title: "Buscadores de Empleo", text: "Profesionales que mejoran la credibilidad de su currículum" },
      { title: "Profesionales de RR.HH.", text: "Agilizando la contratación con credenciales verificadas por IA" },
      { title: "PYMES", text: "Empresas transfronterizas que se expanden a los EE. UU." }
    ]
  },
  products: {
    label: "Tubería de Innovación",
    title: "Lo Que Estamos Construyendo",
    roadmapBtn: "Ver Hoja de Ruta",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "Motor de Credibilidad",
        points: ["Puntuación de credibilidad IA", "Verificación de habilidades", "Información profesional personalizada"]
      },
      {
        name: "Herramientas de IA para E-Commerce",
        tagline: "Habilitación de Mercado",
        points: ["Generación de contenido", "Configuración de tienda de bajo costo", "Analítica de mercado"]
      },
      {
        name: "Servicio de Desarrollo Web y Soluciones Digitales",
        tagline: "Crecimiento Empresarial",
        points: ["Shopify", "Página de aterrizaje B2B", "Negocio local", "Servicios de Marketing Web"]
      }
    ],
    waitlistBtn: "Unirse a la Lista de Espera",
    quoteBtn: "Solicitar Presupuesto",
    earlyAccessBtn: "Presentación MVP Actual",
    roadmapTitle: "Hoja de Ruta del Producto",
    roadmapDesc: "Nuestras herramientas inteligentes están diseñadas para empoderar a la próxima generación de profesionales.",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "Nuestro Equipo",
      subheading: "Nuestro equipo fundador aporta perspectivas globales y antecedentes académicos de las mejores instituciones de EE. UU. y China."
    },
    philosophy: {
      title: "Cómo Trabajamos",
      items: [
        {
          title: "Obsesionados con el Usuario",
          description: "Construimos productos que resuelven problemas reales.",
          icon: "compass"
        },
        {
          title: "Impulsados por la Ingeniería",
          description: "Nuestro equipo aporta experiencia técnica de universidades líderes.",
          icon: "rocket"
        },
        {
          title: "Global y Multidisciplinario",
          description: "Operamos en EE. UU. y China, combinando experiencia en IA y diseño.",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "Equipo Fundador",
      intro: "Nuestro equipo fundador proviene de:",
      bullets: [
        "UC San Diego (Ingeniería Informática y Economía)",
        "Universidad de Fudan (Ciencias de la Computación)",
        "Experiencia en ingeniería de IA y sistemas backend",
        "Trabajo previo en aprendizaje automático y productos tecnológicos transfronterizos"
      ],
      closing: "Estamos expandiendo nuestro equipo central."
    },
    advisors: {
      title: "Asesores y Colaboradores",
      description: "Colaboramos activamente con investigadores e ingenieros en:",
      areas: [
        "Inteligencia Artificial",
        "Verificación y cumplimiento",
        "Metodología de investigación",
        "Operaciones transfronterizas",
        "Estrategia de producto"
      ],
      closing: "Esta red nos ayuda a validar ideas rápidamente."
    },
    opportunities: {
      title: "Únete a Nuestro Equipo",
      description: "Trabajamos con estudiantes talentosos y desarrolladores en:",
      roles: [
        "Desarrollo de productos de IA",
        "Ingeniería backend",
        "Operaciones de investigación",
        "Diseño de producto y UX",
        "Operaciones tecnológicas globales"
      ],
      closing: "Los pasantes contribuyen directamente a nuestros MVP.",
      button: "Únete a Nosotros"
    },
  },
  careers: {
    title: "Bienvenidos Pasantes y Colaboradores",
    description: "Ofrecemos experiencia práctica en IA, datos e ingeniería de software. Perfecto para estudiantes.",
    btnApply: "Aplicar como Pasante",
    btnStudent: "Para Estudiantes UCSD"
  },
  contact: {
    tagline: "Ponte en Contacto",
    title: "Contáctanos",
    description: "Ya seas estudiante, investigador o inversor, nos encantaría saber de ti.",
    emailTitle: "Envíanos un Correo",
    emailDesc: "Para consultas generales y asociaciones.",
    locationTitle: "Sede",
    locationDesc: "San Diego, California",
    socialTitle: "Conéctate en Redes Sociales",
    socialDesc: "Sigue nuestro viaje y obtén las últimas actualizaciones.",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      other: "Otros"
    },
    formTitle: "Send a Message",
    formName: "Tu Nombre",
    formEmail: "Correo Electrónico",
    formSubject: "Asunto",
    formMessage: "Message",
    formButton: "Enviar Mensaje",
    sentTitle: "¡Mensaje Enviado!",
    sentDesc: "Te responderemos en breve.",
    investorTitle: "¿Inversores?",
    investorDesc: "Síguenos en Crunchbase"
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Cómo garantizan la privacidad de los datos?",
        answer: "Nos adherimos estrictamente a los estándares GDPR y CCPA."
      },
      {
        question: "¿Ofrecen acceso API?",
        answer: "Actualmente estamos en beta privada."
      },
      {
        question: "¿Qué tan preciso es el modelo?",
        answer: "Nuestro sistema logra más del 98% de precisión."
      },
      {
        question: "¿Puedo usar sus herramientas para investigación?",
        answer: "Sí, ofrecemos licencias especiales."
      },
      {
        question: "¿Cuál es el estado actual de la startup?",
        answer: "Estamos en fase de prueba beta."
      },
      {
        question: "¿Cuál es la visión a largo plazo?",
        answer: "Convertirnos en el estándar global para la identidad académica verificada por IA."
      }
    ]
  },
  legalPage: {
    title: "Información Legal",
    updated: "Última Actualización: 28 de Noviembre de 2025",
    sidebar: {
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      confidentiality: "Confidencialidad"
    },
    privacy: {
      title: "Política de Privacidad",
      content: ["Consulte la versión en inglés para conocer los términos legales completos.", "Transnode AI, LLC respeta su privacidad..."]
    },
    terms: {
      title: "Términos de Servicio",
      content: ["Consulte la versión en inglés para conocer los términos legales completos.", "Gracias por su interés en Transnode AI, LLC..."]
    },
    confidentiality: {
      title: "Acuerdo de Confidencialidad",
      content: ["Consulte la versión en inglés para conocer los términos legales completos.", "1. DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL..."]
    }
  },
  footer: {
    tagline: "Construyendo el futuro de la credibilidad investigadora.",
    company: "Empresa",
    legal: "Legal",
    rights: "Transnode AI, LLC. Todos los derechos reservados."
  }
};

const ko: ContentType = {
  nav: {
    focus: "핵심 분야",
    products: "제품",
    team: "팀",
    contact: "문의하기"
  },
  hero: {
    badge: "글로벌 임팩트를 위한 AI",
    headlineStart: "구축",
    headlineHighlight: "지능형 도구",
    headlineEnd: "현대적 협업을 위한",
    subheadline: "Transnode AI, LLC는 신뢰성을 높이고 연구를 가속화하며 워크플로를 간소화하는 국경 간 AI 제품을 개발합니다.",
    ctaPrimary: "초기 액세스 참여",
    ctaSecondary: "투자자 문의",
    ctaCrowdfund: "1달러 크라우드펀딩 감사"
  },
  aiModels: {
    title: "선도적인 AI 모델 기반 구축"
  },
  features: {
    title: "우리의 핵심 분야",
    items: [
      {
        title: "AI 검증 기술",
        description: "컴퓨터 비전과 NLP를 활용하여 자격 증명, 기술 및 전문 경력을 높은 정확도로 검증합니다.",
        challenge: "이력서 위조 및 검증되지 않은 기술은 기업에 막대한 비용을 초래합니다.",
        solution: "우리의 멀티모달 AI 모델은 문서를 즉시 검증하고 실무 기술을 평가합니다."
      },
      {
        title: "AI 교육",
        description: "실시간 학생 성과 지표를 기반으로 콘텐츠 전달을 개인화하는 적응형 학습 환경을 조성합니다.",
        challenge: "전통적인 교육 모델은 개별 학습 격차를 효과적으로 해결하지 못합니다.",
        solution: "적응형 AI 튜터가 성과 패턴을 분석하여 맞춤형 커리큘럼을 제공합니다."
      },
      {
        title: "AI 통합",
        description: "최첨단 AI 통합 및 멀티모달 모델을 활용하여 가장 빠른 제공과 고성능 기술 솔루션을 보장합니다.",
        challenge: "파편화된 시스템과 오래된 아키텍처는 개발 주기를 늦추고 실시간 지능을 방해합니다.",
        solution: "최신 LLM 및 비전 모델을 통합하여 시장 출시 기간과 운영 속도를 가속화합니다."
      },
      {
        title: "AI 워크플로우 최적화",
        description: "자율 에이전트를 사용하여 국경 간 상거래 및 학사 관리의 복잡한 운영 워크플로를 자동화합니다.",
        challenge: "국경 간 운영은 언어 장벽과 복잡한 규정 준수로 인해 종종 지연됩니다.",
        solution: "자율 에이전트가 번역, 일정 관리 및 규정 준수 워크플로를 처리합니다."
      }
    ]
  },
  trust: {
    title: "신뢰하는 이유",
    points: [
      "캘리포니아 UCSD 동문이 설립한 미국 기반 회사",
      "미국-중국 기술 및 연구 생태계 연결",
      "윤리적 안전장치를 갖춘 AI 우선 제품 철학",
      "엄격한 데이터 개인 정보 보호 및 기밀 유지 약속"
    ],
    nda: "모든 프로젝트 협업에는 NDA(기밀 유지 계약) 및 보안 데이터 처리 관행이 포함됩니다.",
    collaborationTitle: "협업의 우수성",
    collaborationBadge: "검증된 파트너십"
  },
  audience: {
    title: "우리의 대상",
    subtitle: "차세대 연구원, 전문가 및 글로벌 혁신가에게 권한 부여.",
    items: [
      { title: "학생", text: "연구 경험을 원하는 학부생" },
      { title: "구직자", text: "이력서 신뢰성을 높이는 초기 경력 전문가" },
      { title: "HR 전문가", text: "AI로 검증된 자격 증명을 통해 채용 프로세스 간소화" },
      { title: "중소기업", text: "미국으로 확장하는 국경 간 기업" }
    ]
  },
  products: {
    label: "혁신 파이프라인",
    title: "우리가 만들고 있는 것",
    roadmapBtn: "로드맵 보기",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "신뢰성 엔진",
        points: ["AI 신뢰성 점수", "기술 기반 검증 과제", "개인화된 진로 통찰력"]
      },
      {
        name: "미중 전자상거래 AI 도구",
        tagline: "시장 활성화",
        points: ["콘텐츠 생성", "저비용 상점 설정", "시장 분석"]
      },
      {
        name: "웹 개발 서비스 및 디지털 솔루션",
        tagline: "비즈니스 성장",
        points: ["Shopify", "B2B 랜딩 페이지", "현지 비즈니스", "웹사이트 마케팅 서비스"]
      }
    ],
    waitlistBtn: "대기자 명단 가입",
    quoteBtn: "견적 요청",
    earlyAccessBtn: "현재 MVP 프레젠테이션",
    roadmapTitle: "제품 로드맵",
    roadmapDesc: "우리의 지능형 도구는 차세대 전문가에게 권한을 부여하도록 설계되었습니다.",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "우리 팀",
      subheading: "창립 팀은 UC San Diego 및 Fudan University와 같은 미국 및 중국 최고의 기관에서 글로벌 관점과 학문적 배경을 제공합니다."
    },
    philosophy: {
      title: "우리의 업무 방식",
      items: [
        {
          title: "사용자 집착",
          description: "우리는 실제 문제를 해결하는 제품을 만듭니다.",
          icon: "compass"
        },
        {
          title: "엔지니어링 주도",
          description: "우리 팀은 선도적인 대학의 기술적 배경을 가지고 있습니다.",
          icon: "rocket"
        },
        {
          title: "글로벌 및 학제 간",
          description: "우리는 미국과 중국 전역에서 운영되며 AI와 디자인 전문 지식을 결합합니다.",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "창립 팀",
      intro: "창립 팀 출신:",
      bullets: [
        "UC San Diego (컴퓨터 공학 및 경제학)",
        "Fudan University (컴퓨터 과학)",
        "AI 엔지니어링 및 백엔드 시스템 경험",
        "머신 러닝 및 국경 간 기술 제품 경험"
      ],
      closing: "우리는 핵심 팀을 확장하고 있습니다."
    },
    advisors: {
      title: "자문 및 협력자",
      description: "우리는 다음 분야의 연구원 및 엔지니어와 적극적으로 협력합니다:",
      areas: [
        "인공 지능",
        "검증 및 규정 준수",
        "연구 방법론",
        "국경 간 운영",
        "UI/UX 및 제품 전략"
      ],
      closing: "이 네트워크는 아이디어를 빠르게 검증하는 데 도움이 됩니다."
    },
    opportunities: {
      title: "팀에 합류하세요",
      description: "우리는 재능 있는 학생들과 함께 다음 분야에서 일합니다:",
      roles: [
        "AI 제품 개발",
        "백엔드 엔지니어링",
        "연구 운영",
        "제품 디자인 및 UX",
        "글로벌 기술 운영"
      ],
      closing: "인턴은 MVP에 직접 기여합니다.",
      button: "함께하기"
    }
  },
  careers: {
    title: "인턴 및 기여자 환영",
    description: "AI, 데이터, 소프트웨어 엔지니어링 실무 경험을 제공합니다.",
    btnApply: "인턴 지원",
    btnStudent: "Direct Contact"
  },
  contact: {
    tagline: "연락하기",
    title: "문의하기",
    description: "학생, 연구원, 투자자 모두의 연락을 환영합니다.",
    emailTitle: "이메일 보내기",
    emailDesc: "일반 문의 및 제휴.",
    locationTitle: "본사",
    locationDesc: "캘리포니아 샌디에이고",
    socialTitle: "소셜 미디어 연결",
    socialDesc: "우리의 여정을 팔로우하고 최신 업데이트를 받으세요.",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      other: "기타"
    },
    formTitle: "Send a Message",
    formName: "이름",
    formEmail: "이메일 주소",
    formSubject: "주제",
    formMessage: "메시지",
    formButton: "메시지 보내기",
    sentTitle: "메시지 전송됨!",
    sentDesc: "곧 답변 드리겠습니다.",
    investorTitle: "투자자?",
    investorDesc: "Crunchbase에서 팔로우"
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        question: "데이터 개인 정보 보호는 어떻게 보장합니까?",
        answer: "우리는 GDPR 및 CCPA 표준을 엄격히 준수합니다."
      },
      {
        question: "API 액세스를 제공합니까?",
        answer: "현재 비공개 베타 버전입니다."
      },
      {
        question: "모델의 정확도는 얼마나 됩니까?",
        answer: "우리의 시스템은 98% 이상의 정확도를 달성합니다."
      },
      {
        question: "학술 연구에 도구를 사용할 수 있습니까?",
        answer: "예, 특별 라이선스를 제공합니다."
      },
      {
        question: "스타트업의 현재 상태는 어떠합니까?",
        answer: "우리는 현재 베타 테스트 단계에 있습니다."
      },
      {
        question: "장기적인 비전은 무엇입니까?",
        answer: "AI 검증 학술 및 전문 신원의 글로벌 표준이 되는 것입니다."
      }
    ]
  },
  legalPage: {
    title: "법적 정보",
    updated: "마지막 업데이트: 2025년 11월 28일",
    sidebar: {
      privacy: "개인 정보 보호 정책",
      terms: "서비스 약관",
      confidentiality: "기밀 유지"
    },
    privacy: {
      title: "개인 정보 보호 정책",
      content: ["전체 법적 구속력이 있는 조항은 영문 버전을 참조하십시오.", "Transnode AI, LLC는 귀하의 개인 정보를 존중합니다..."]
    },
    terms: {
      title: "서비스 약관",
      content: ["전체 법적 구속력이 있는 조항은 영문 버전을 참조하십시오.", "Transnode AI, LLC에 관심을 가져 주셔서 감사합니다..."]
    },
    confidentiality: {
      title: "기밀 유지 및 보안 계약",
      content: ["전체 법적 구속력이 있는 조항은 영문 버전을 참조하십시오.", "1. 기밀 정보의 정의..."]
    }
  },
  footer: {
    tagline: "지능형 시스템을 통한 연구 및 경력 신뢰성의 미래 구축.",
    company: "회사",
    legal: "법적",
    rights: "Transnode AI, LLC. 판권 소유."
  }
};

export const translations = { en, zh, es, ko };
