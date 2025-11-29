import { ShieldCheck, BookOpen, Globe, UserCheck, Network, Lock, Zap } from "lucide-react";

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
    earlyAccessBtn: string;
    roadmapTitle: string;
    roadmapDesc: string;
  };
  team: {
    label: string;
    title: string;
    description: string;
    members: { name: string; role: string; bio: string }[];
    network: { title: string; desc: string }[];
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
        title: "AI Matching",
        description: "Utilizing graph neural networks to optimally pair researchers, volunteers, and organizations for high-impact collaborations.",
        challenge: "Connecting the right talent to the right opportunity is manually intensive.",
        solution: "Deep learning matching algorithms analyze compatibility beyond keywords."
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
      { title: "Researchers", text: "Professors & labs looking for research collaborators" },
      { title: "SMEs", text: "Cross-border businesses expanding into the U.S." }
    ]
  },
  products: {
    label: "Innovation Pipeline",
    title: "What We're Building (Preview)",
    roadmapBtn: "View Roadmap",
    items: [
      {
        name: "USVerif",
        tagline: "Credibility Engine",
        points: ["AI credibility scoring", "Skill-based verification tasks", "Personalized career insight"]
      },
      {
        name: "Research Pipe",
        tagline: "Collaboration Platform",
        points: ["Cross-university matching", "AI workflow & research task planner", "Confidentiality + collaboration pipeline"]
      },
      {
        name: "US-China E-Commerce AI Tools",
        tagline: "Market Enablement",
        points: ["Content generation", "Low-cost storefront setup", "Market analytics"]
      }
    ],
    waitlistBtn: "Join Waitlist",
    earlyAccessBtn: "Get Early Access",
    roadmapTitle: "Product Roadmap",
    roadmapDesc: "Our intelligent tools are designed to empower the next generation of professionals with verification, collaboration, and market access."
  },
  team: {
    label: "Leadership",
    title: "Meet the Builders",
    description: "A diverse team of engineers and researchers united by a passion for ethical AI and global connectivity.",
    members: [
      {
        name: "Founder Name",
        role: "Founder & CEO",
        bio: "UCSD Alumnus. Founded Transnode AI to bridge the gap between academic research and commercial application."
      },
      {
        name: "Co-Founder Name",
        role: "Co-Founder & CTO",
        bio: "Expert in distributed systems and AI model optimization. Leading the technical architecture and research integration."
      },
      {
        name: "Engineer Name",
        role: "Founding Software Engineer",
        bio: "Full-stack specialist architecting secure, real-time data pipelines and intuitive user experiences."
      }
    ],
    network: [
      { title: "Research Network", desc: "Collaborating with labs and PhDs from top-tier universities including UCSD and SDSU." },
      { title: "Engineering", desc: "A distributed team of full-stack engineers and AI specialists across the U.S. and Asia." },
      { title: "Advisors", desc: "Guided by industry veterans in EdTech, Cross-border Commerce, and Venture Capital." }
    ]
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
        "Transnode AI, LLC ('Transnode', 'we', 'us', or 'our') respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website, transnode.ai, and our associated products including USVerif, Research Pipe, and AI Edu (collectively, the 'Services'). By accessing or using our Services, you agree to the collection and use of information in accordance with this policy.",
        "2. INFORMATION WE COLLECT",
        "We collect several different types of information for various purposes to provide and improve our Services to you:",
        "a. Personal Identification Information: When you register for our Services, request information, or subscribe to our materials, we may ask you to provide certain personally identifiable information, including but not limited to: Email address, First and last name, Phone number, Address, State, Province, ZIP/Postal code, City.",
        "b. Verification Data (USVerif): To provide credibility and verification services, we may collect and process sensitive information such as government-issued identification documents, academic transcripts, professional certifications, and biometric data (specifically facial scans for identity matching). This data is processed strictly for the purpose of verification and is handled with the highest level of security.",
        "c. Academic and Research Data (Research Pipe & AI Edu): We collect information regarding your research interests, academic history, publication records, and institutional affiliations to facilitate accurate matching and collaboration recommendations.",
        "d. Usage Data: We may also collect information on how the Service is accessed and used ('Usage Data'). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.",
        "3. HOW WE USE YOUR INFORMATION",
        "Transnode AI, LLC uses the collected data for the following purposes:",
        "• To provide and maintain our Services, including the verification of credentials and facilitation of research collaborations.",
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
        "Thanks for your interest in Transnode AI, LLC (“Transnode,” “we,” or “us”) and our website transnode.ai, as well as our related websites (collectively, our “Site”). These terms and conditions, together with Transnode’s Privacy Policy (together, these “Terms”), govern your access to and use of the Site, so please read everything carefully. These Terms expressly do not govern your access to or use of Transnode’s Software Platform or Services, which are subject to the Transnode Master Software and Services Agreement, the Transnode End User Terms and Conditions, or other written agreement in place between you and Transnode.",
        "BY CLICKING “AGREE,” OR BY OTHERWISE ACCESSING OR USING THE SITE, you are agreeing to be bound by these Terms, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you are an entity, organization, or company, the individual accepting these Terms on your behalf represents and warrants that they have the authority to bind you to these Terms and you agree to be bound by these Terms. If you do not agree with any of the terms in these Terms, you are prohibited from using or accessing the Site.",
        "1. Use License: Subject to your complete and ongoing compliance with these Terms, Transnode hereby grants you a non-exclusive, non-transferable, non-sublicensable, revocable, worldwide right to (a) access and use the Site, solely with supported browsers through the Internet for your own internal purposes. You may not permit the Site to be used by or for the benefit of unauthorized third parties. Nothing in these Terms will be construed to grant you any right to transfer or assign rights to access or use the Site. All rights not expressly granted to you are reserved by Transnode and its licensors. You may not (i) modify or make derivative works based upon the Sites; (ii) reverse engineer the Site or access the Sites in order to (a) build a competitive product or service, or (b) build a product using similar features, functions, or graphics of the Sites, or (c) copy any features, functions, or graphics of the Sites. You further acknowledge and agree that, as between the parties, Transnode owns all right, title, and interest in and to the Sites, including the visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the Site, and all intellectual property rights therein.",
        "2. Feedback: If you choose to provide input and suggestions regarding problems with or proposed modifications or improvements to the Site (“Feedback”), then you hereby grant Transnode an unrestricted, perpetual, irrevocable, non-exclusive, fully paid, royalty-free right to exploit the Feedback in any manner and for any purpose, including to improve the Sites and create other products and services.",
        "3. Third Party Software: The Site may include or incorporate third party software components that are generally available free of charge under licenses granting recipients broad rights to copy, modify, and distribute those components (“Third Party Components”). Although the Site is provided to you subject to these Terms, nothing in these Terms prevents, restricts, or is intended to prevent or restrict you from obtaining Third Party Components under the applicable third-party licenses or to limit your use of the Third Party Components under those third party licenses. The Site may also contain links to third party websites. Such linked websites are not under Transnode’s control, and Transnode is not responsible for their content.",
        "4. Monitoring Content: Transnode does not control and does not have any obligation to monitor any content made available by third parties or the use of the Site by its users. You acknowledge and agree that Transnode reserves the right to, and may from time to time, monitor any and all information transmitted or received through the Site for operational or other purposes. If at any time Transnode chooses to monitor the content, Transnode still assumes no responsibility or liability for content or any loss or damage incurred as a result of the use of content. During monitoring, information may be examined, recorded, copied, and used in accordance with our Privacy Policy.",
        "5. Term and Termination: These Terms are effective beginning when you accept these Terms or first access or use the Site, and ending when terminated as described below. If you violate any provision of these Terms, your authorization to access the Site and these Terms automatically terminate. In addition, Transnode may, at its sole discretion, terminate these Terms or suspend or terminate your access to the Site, at any time for any reason or no reason, with or without notice. You may terminate these Terms at any time by emailing legal@transnode.ai. Upon termination of these Terms: (a) your license rights will terminate and you must immediately cease all use of the Site. Sections 2, 6, 7, 8, and 10 will survive.",
        "6. Indemnification: To the fullest extent permitted by law, you agree to defend, hold harmless and indemnify Transnode and its officers, directors, employees, consultants, affiliates, subsidiaries and agents (together, the “Transnode Entities”) from and against any and all claims brought by a third party, and any related losses, costs, expenses, damages or other liabilities incurred arising from or related to: (a) your unauthorized use of, or misuse of, the Sites; (b) your breach of any provision of these Terms; (c) your violation of any applicable law or regulation; (d) your violation of any third party right, including any intellectual property right or publicity, confidentiality, other property, or privacy right; or (e) any dispute or issue between you and any third party. Any such indemnification will be conditioned on our notifying you in writing of any such claim, demand, action, cost, liability, loss or threat of any thereof. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by (without limiting your indemnification obligations with respect to that matter), and in that case, you agree to cooperate with our defense of those claims. We reserve the right to report any wrongdoing of which we become aware to the applicable government agencies or otherwise.",
        "7. Disclaimer: THE SITE AND ALL MATERIALS AND CONTENT ON AND AVAILABLE THROUGH THE SITE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS. Transnode makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, non-infringement of intellectual property or other violation of rights, and any warranty arising out of course of dealing, usage, or trade. Transnode does not warrant that the Site or any portion of the Site, or any materials or content offered through the Site, are accurate, complete, or current, or will be uninterrupted, secure, or free of errors, viruses, or other harmful components; and Transnode does not warrant that any of those issues will be corrected. Transnode may make changes to the Sites at any time without notice, including by limiting or discontinuing certain features of the Sites. Transnode does not, however, make any commitment to update the Sites. Transnode will have no liability for any change to the Site or any suspension or termination of your access to or use of the Site.",
        "THE LIMITATIONS, EXCLUSIONS, AND DISCLAIMS IN THIS SECTION APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. Transnode does not disclaim any warranty or other right that Transnode is prohibited from disclaiming under applicable law.",
        "8. Limitations of Liability: TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL TRANSNODE OR ITS SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA OR PROFIT, OR DUE TO BUSINESS INTERRUPTION,) ARISING OUT OF THE USE OR INABILITY TO USE THE SITE OR THE MATERIALS ON THE SITE, EVEN IF TRANSNODE OR A TRANSNODE AUTHORIZED REPRESENTATIVE HAS BEEN NOTIFIED ORALLY OR IN WRITING OF THE POSSIBILITY OF SUCH DAMAGE. TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGGREGATE LIABILITY OF TRANSNODE AND ITS SUPPLIERS TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE ANY PORTION OF THE SITE OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO $100. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
        "Each provision of these Terms that provides for a limitation of liability, disclaimer of warranties, or exclusion of damages is intended to and does allocate the risks between the parties under these Terms. This allocation is an essential element of the basis of the bargain between the parties. Each of these provisions is severable and independent of all other provisions of these Terms. The limitations in this Section 8 will apply even if any limited remedy fails of its essential purpose.",
        "9. Modifications: Transnode may revise these Terms at any time without notice; provided that, if we make any material changes to these Terms, we will use commercially reasonable efforts to notify you. By continuing to use the Site, you are agreeing to be bound by the then current version of these Terms.",
        "10. Governing Law: Any claim relating to the Sites or these Terms will be governed by the laws of the State of California without regard to its conflict of law provisions.",
        "11. Support: We are under no obligation to provide support for the Site. In instances where we may offer support, the support will be subject to published policies.",
        "12. Contact Information: You may contact us by emailing us at legal@transnode.ai."
      ]
    },
    confidentiality: {
      title: "Confidentiality & Security Agreement",
      content: [
        "1. DEFINITION OF CONFIDENTIAL INFORMATION",
        "'Confidential Information' means all non-public information disclosed by Transnode AI, LLC ('Disclosing Party') to the user or partner ('Receiving Party'), or vice versa, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.",
        "Transnode's Confidential Information specifically includes, but is not limited to: proprietary AI algorithms, model weights, training datasets, source code, product roadmaps, business plans, financial projections, customer lists, and research data generated via Research Pipe.",
        "2. OBLIGATIONS OF THE RECEIVING PARTY",
        "The Receiving Party agrees to: (i) hold all Confidential Information in strict confidence and not disclose it to any third party except as specifically authorized herein; (ii) use the Confidential Information solely for the purpose of using the Service or evaluating a potential business relationship with Transnode; and (iii) use at least the same degree of care to protect the Confidential Information as it uses to protect its own most confidential information, but in no event less than a reasonable degree of care.",
        "3. PROTECTION OF USER RESEARCH DATA",
        "Transnode AI, LLC acknowledges that researchers and students using our platform (specifically Research Pipe) may upload unpublished data, hypotheses, and manuscripts. Transnode agrees to treat all such user-generated research content as Confidential Information. We will not sell, license, or share this data with third parties for marketing purposes. We will not use this data to train public-facing foundational models without explicit, written consent from the user.",
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
    tagline: "Building the future of research and career credibility through intelligent systems.",
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
    badge: "AI 全球影响力",
    headlineStart: "构建",
    headlineHighlight: "智能工具",
    headlineEnd: "赋能现代协作",
    subheadline: "Transnode AI, LLC 开发跨境 AI 产品，提升可信度，加速科研，并优化工作流程——深受学生、研究人员和全球中小企业的信赖。",
    ctaPrimary: "加入早期体验",
    ctaSecondary: "投资者咨询",
    ctaCrowdfund: "1美元众筹支持"
  },
  aiModels: {
    title: "基于领先的 AI 模型"
  },
  features: {
    title: "核心关注领域",
    items: [
      {
        title: "AI 验证技术",
        description: "利用计算机视觉和 NLP 技术，高精度验证证书、技能和职业里程碑。",
        challenge: "简历造假和未经验证的技能每年给公司造成数十亿美元的损失。",
        solution: "我们的多模态 AI 模型可即时验证文档并评估实际技能。"
      },
      {
        title: "AI 教育",
        description: "创建自适应学习环境，根据实时学生表现指标个性化内容交付。",
        challenge: "传统的“一刀切”教育模式无法有效解决个人学习差距。",
        solution: "自适应 AI 导师分析表现模式，提供个性化课程调整。"
      },
      {
        title: "AI 匹配",
        description: "利用图神经网络优化研究人员、志愿者和组织之间的配对，实现高影响力协作。",
        challenge: "将合适的人才与合适的机会联系起来是劳动密集型且低效的。",
        solution: "深度学习匹配算法超越关键词分析兼容性，考虑协同效应。"
      },
      {
        title: "AI 工作流优化",
        description: "使用自主代理自动化跨境商务和学术管理中的复杂运营工作流。",
        challenge: "跨境运营经常因语言障碍和复杂的合规文件而陷入困境。",
        solution: "自主代理处理翻译、日程安排和合规工作流。"
      }
    ]
  },
  trust: {
    title: "为什么学生、研究人员和企业信任我们",
    points: [
      "总部位于加州，由 UCSD 校友创立的美国公司",
      "连接中美技术和研究生态系统",
      "坚持 AI 优先的产品理念与道德保障",
      "致力于严格的数据隐私和保密"
    ],
    nda: "所有项目合作均包含 NDA（保密协议）和安全的数据处理实践。",
    collaborationTitle: "卓越协作",
    collaborationBadge: "已验证合作伙伴"
  },
  audience: {
    title: "我们服务的人群",
    subtitle: "赋能下一代研究人员、专业人士和全球创新者。",
    items: [
      { title: "学生", text: "寻求研究经验的本科生" },
      { title: "求职者", text: "提高简历可信度的早期职业人士" },
      { title: "研究人员", text: "寻找研究合作者的教授和实验室" },
      { title: "中小企业", text: "扩展到美国的跨境企业" }
    ]
  },
  products: {
    label: "创新管道",
    title: "我们正在构建什么（预览）",
    roadmapBtn: "查看路线图",
    items: [
      {
        name: "USVerif",
        tagline: "信誉引擎",
        points: ["AI 信誉评分", "基于技能的验证任务", "个性化职业洞察"]
      },
      {
        name: "Research Pipe",
        tagline: "协作平台",
        points: ["跨高校匹配", "AI 工作流和研究任务规划器", "保密 + 协作管道"]
      },
      {
        name: "美中电商 AI 工具",
        tagline: "市场赋能",
        points: ["内容生成", "低成本店面设置", "市场分析"]
      }
    ],
    waitlistBtn: "加入候补名单",
    earlyAccessBtn: "获取早期体验",
    roadmapTitle: "产品路线图",
    roadmapDesc: "我们的智能工具旨在通过验证、协作和市场准入赋能下一代专业人士。"
  },
  team: {
    label: "领导层",
    title: "认识构建者",
    description: "由工程师和研究人员组成的多元化团队，因对道德 AI 和全球连接的热情而团结一致。",
    members: [
      {
        name: "创始人",
        role: "创始人兼 CEO",
        bio: "UCSD 校友。创立 Transnode AI 以弥合学术研究与商业应用之间的差距。"
      },
      {
        name: "联合创始人",
        role: "联合创始人兼 CTO",
        bio: "分布式系统和 AI 模型优化专家。领导技术架构和研究整合。"
      },
      {
        name: "工程师",
        role: "创始软件工程师",
        bio: "全栈专家，架构安全、实时的数据管道和直观的用户体验。"
      }
    ],
    network: [
      { title: "研究网络", desc: "与包括 UCSD 和 SDSU 在内的顶尖大学的实验室和博士合作。" },
      { title: "工程团队", desc: "分布在美国和亚洲的全栈工程师和 AI 专家团队。" },
      { title: "顾问", desc: "由教育科技、跨境商务和风险投资领域的行业资深人士指导。" }
    ]
  },
  careers: {
    title: "欢迎实习生和贡献者",
    description: "我们提供 AI、数据、软件工程和产品设计方面的实践经验。非常适合寻求实际项目和作品集开发的学生。远程友好，基于项目，灵活的时间表。",
    btnApply: "申请实习",
    btnStudent: "UCSD 学生 → 直接联系"
  },
  contact: {
    tagline: "取得联系",
    title: "联系我们",
    description: "无论您是寻找机会的学生、寻求合作的研究人员，还是对我们愿景感兴趣的投资者，我们都希望能听到您的声音。",
    emailTitle: "发送邮件",
    emailDesc: "一般咨询、合作和支持。",
    locationTitle: "总部",
    locationDesc: "加利福尼亚州圣地亚哥",
    socialTitle: "社交媒体",
    socialDesc: "关注我们的旅程，获取产品发布的最新更新，并加入我们不断壮大的创新者社区。",
    formTitle: "发送消息",
    formName: "您的姓名",
    formEmail: "电子邮件地址",
    formSubject: "主题",
    formMessage: "消息内容",
    formButton: "发送消息",
    sentTitle: "消息已发送！",
    sentDesc: "我们将尽快回复您。",
    investorTitle: "投资者？",
    investorDesc: "订阅我们"
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "你们如何确保 AI 模型的数据隐私？",
        answer: "我们严格遵守 GDPR 和 CCPA 标准。数据在静态和传输过程中均经过匿名化和加密处理，确保用户隐私不受损害。"
      },
      {
        question: "你们是否为开发者提供 API 访问？",
        answer: "我们目前处于内测阶段。您可以通过我们的产品页面申请早期访问权限，将我们的技术集成到您自己的平台中。"
      },
      {
        question: "验证模型的准确率如何？",
        answer: "我们的多模态验证系统在文档验证和深度伪造检测基准测试中达到了 98% 以上的准确率。"
      },
      {
        question: "我可以将你们的工具用于学术研究吗？",
        answer: "可以，我们为学术机构和个人研究人员提供特殊许可和合作机会。"
      },
      {
        question: "目前的开发状况如何，志愿者如何参与？",
        answer: "我们目前处于测试阶段，正在主要大学进行现场试点项目。我们欢迎志愿者和实习生加入我们的工程和研究团队，帮助扩大我们的影响力并完善我们的核心算法。"
      },
      {
        question: "对投资者的长期愿景是什么？",
        answer: "我们的目标是成为 AI 验证的学术和职业身份的全球标准。通过弥合教育与就业之间的差距，我们旨在减少招聘摩擦并为学生和中小企业释放数十亿的经济价值。"
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
      content: [
        "TRANSNODE AI, LLC 隐私政策",
        "1. 简介",
        "Transnode AI, LLC（以下简称“Transnode”、“我们”或“我们的”）尊重您的隐私，并致力于保护您的个人数据。本隐私政策告知您我们在您使用我们的网站 transnode.ai 以及包括 USVerif、Research Pipe 和 AI Edu 在内的相关产品（统称“服务”）时收集、使用和披露个人数据的政策。访问或使用我们的服务，即表示您同意按照本政策收集和使用信息。",
        "2. 我们收集的信息",
        "为了向您提供和改进我们的服务，我们收集多种不同类型的信息：",
        "a. 个人身份信息：当您注册我们的服务、请求信息或订阅我们的资料时，我们可能会要求您提供某些个人身份信息，包括但不限于：电子邮件地址、姓名、电话号码、地址、省/市/自治区、邮政编码、城市。",
        "b. 验证数据 (USVerif)：为了提供信誉和验证服务，我们可能会收集和处理敏感信息，如政府颁发的身份证件、学历成绩单、专业证书和生物识别数据（特别是用于身份匹配的面部扫描）。此数据仅用于验证目的，并以最高级别的安全性进行处理。",
        "c. 学术和研究数据 (Research Pipe & AI Edu)：我们收集有关您的研究兴趣、学术历史、出版记录和机构隶属关系的信息，以促进准确的匹配和合作推荐。",
        "d. 使用数据：我们还可能收集有关如何访问和使用服务的信息（“使用数据”）。此使用数据可能包括诸如您的计算机的互联网协议地址（例如 IP 地址）、浏览器类型、浏览器版本、您访问的我们服务的页面、您访问的时间和日期、在这些页面上花费的时间、唯一的设备标识符和其他诊断数据。",
        "3. 我们如何使用您的信息",
        "Transnode AI, LLC 将收集的数据用于以下目的：",
        "• 提供和维护我们的服务，包括凭证验证和促进研究合作。",
        "• 通知您有关我们服务的变更。",
        "• 允许您在选择时参与我们服务的互动功能。",
        "• 提供客户支持并回应您的询问。",
        "• 收集分析或有价值的信息，以便我们改进服务。",
        "• 监控我们服务的使用情况。",
        "• 检测、预防和解决技术问题及欺诈行为。",
        "4. 数据保留",
        "Transnode AI, LLC 仅在本隐私政策规定的目的所需的时间内保留您的个人数据。我们将在遵守我们的法律义务（例如，如果我们被要求保留您的数据以遵守适用法律）、解决争议以及执行我们的法律协议和政策所需的范围内保留和使用您的个人数据。验证数据仅在完成验证过程所需的时间内保留，并在法律要求的审计追踪期后安全归档或删除。",
        "5. 数据传输",
        "您的信息（包括个人数据）可能会被传输至并保存在您所在的州、省、国家或其他政府管辖区之外的计算机上，这些地方的数据保护法可能与您所在的管辖区不同。特别是作为一家连接美国和全球市场的公司，数据可能会在我们的运营区域之间传输。Transnode 采取所有合理必要的步骤，确保您的数据得到安全处理并符合本隐私政策，除非有适当的控制措施（包括您的数据和其他个人信息的安全性），否则不会将您的个人数据传输到任何组织或国家。",
        "6. 数据披露",
        "如果我们真诚地认为此类行动是必要的，我们可能会披露您的个人数据：",
        "• 遵守法律义务。",
        "• 保护和捍卫 Transnode AI, LLC 的权利或财产。",
        "• 防止或调查与服务有关的可能的不当行为。",
        "• 保护服务用户或公众的人身安全。",
        "• 防止法律责任。",
        "7. 数据安全",
        "您的数据安全对我们很重要。我们使用行业标准的加密协议（TLS/SSL）进行传输中的数据加密，并使用 AES-256 进行静态数据加密。但是，请记住，通过互联网传输的方法或电子存储的方法都不是 100% 安全的。虽然我们努力使用商业上可接受的方法来保护您的个人数据，但我们不能保证其绝对安全。",
        "8. 您的数据保护权利",
        "根据您所在的位置，您可能拥有以下关于您个人数据的权利：",
        "• 访问、更新或删除我们拥有的关于您的信息的权利。",
        "• 更正权。",
        "• 反对权。",
        "• 限制权。",
        "• 数据可携带权。",
        "• 撤回同意的权利。",
        "如果您希望行使这些权利，请通过 legal@transnode.ai 联系我们。",
        "9. 联系我们",
        "如果您对本隐私政策有任何疑问，请通过电子邮件联系我们：legal@transnode.ai。"
      ]
    },
    terms: {
      title: "服务条款",
      content: [
        "欢迎来到 Transnode AI。访问或使用我们的网站和服务，即表示您同意受这些服务条款以及所有适用法律和法规的约束。",
        "您被授予有限的、非排他性的、不可转让的许可，以访问和使用服务用于您的个人或内部业务目的。未经我们明确书面许可，您同意不复制、修改、分发、出售或利用服务的任何部分。",
        "我们的服务按“原样”和“可用”基础提供，不作任何形式的明示或暗示保证，包括但不限于适销性、特定用途适用性和不侵权的暗示保证。",
        "在任何情况下，Transnode AI, LLC 均不对任何间接、附带、特殊、后果性或惩罚性损害负责，包括但不限于利润损失、数据丢失、使用损失、商誉或其他无形损失。"
      ]
    },
    confidentiality: {
      title: "保密与安全协议",
      content: [
        "1. 机密信息的定义",
        "“机密信息”是指 Transnode AI, LLC（“披露方”）向用户或合作伙伴（“接收方”）披露的（反之亦然），无论是口头还是书面形式，被指定为机密或根据信息的性质和披露情况合理应被理解为机密的所有非公开信息。",
        "Transnode 的机密信息具体包括但不限于：专有 AI 算法、模型权重、训练数据集、源代码、产品路线图、商业计划、财务预测、客户名单以及通过 Research Pipe 生成的研究数据。",
        "2. 接收方的义务",
        "接收方同意：(i) 严格保密所有机密信息，除本协议特别授权外，不得向任何第三方披露；(ii) 仅为使用服务或评估与 Transnode 的潜在业务关系之目的使用机密信息；(iii) 采取至少与保护其自身最高机密信息相同程度的谨慎措施来保护机密信息，但在任何情况下都不得低于合理的谨慎程度。",
        "3. 用户研究数据的保护",
        "Transnode AI, LLC 承认，使用我们平台（特别是 Research Pipe）的研究人员和学生可能会上传未发表的数据、假设和手稿。Transnode 同意将所有此类用户生成的研究内容视为机密信息。我们不会出于营销目的向第三方出售、许可或分享此数据。未经用户明确书面同意，我们不会使用此数据来训练面向公众的基础模型。",
        "4. 例外情况",
        "机密信息不应包括以下任何信息：(i) 在不违反对应披露方义务的情况下已为公众所知或成为公众所知的信息；(ii) 在披露方披露之前已为接收方所知的信息；(iii) 从第三方收到且不违反对应披露方义务的信息；或 (iv) 接收方在未使用或参考披露方机密信息的情况下独立开发的信息。",
        "5. 强制披露",
        "如果法律、法规或法院命令强制要求，接收方可以披露机密信息，前提是接收方在法律允许的范围内提前通知披露方，并在披露方希望对披露提出异议时，由披露方承担费用提供合理协助。",
        "6. 信息的归还或销毁",
        "在用户账户终止或应披露方书面请求时，接收方应立即归还或销毁其拥有或控制的所有机密信息副本，并书面证明已这样做。",
        "7. 补救措施",
        "接收方承认，披露机密信息可能会对披露方造成实质性损害，仅凭损害赔偿可能不足以作为补救措施。因此，披露方有权寻求适当的衡平法救济，包括禁令，以及其在法律上可能拥有的任何其他补救措施。",
        "8. 期限",
        "本协议项下的保密义务应在您停止使用服务后继续有效，有效期为披露之日起五（5）年，对于商业秘密，则在适用法律下该信息保持为商业秘密的期间内有效。"
      ]
    }
  },
  footer: {
    tagline: "通过智能系统构建研究和职业信誉的未来。",
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
    contact: "Contáctanos"
  },
  hero: {
    badge: "IA para Impacto Global",
    headlineStart: "Construyendo",
    headlineHighlight: "Herramientas Inteligentes",
    headlineEnd: "para la Colaboración Moderna.",
    subheadline: "Transnode AI, LLC desarrolla productos de IA transfronterizos que mejoran la credibilidad, aceleran la investigación y optimizan los flujos de trabajo, con la confianza de estudiantes, investigadores y PYMES globales.",
    ctaPrimary: "Acceso Anticipado",
    ctaSecondary: "Inversionistas",
    ctaCrowdfund: "Crowdfunding de 1 Dólar"
  },
  aiModels: {
    title: "CONSTRUIDO CON MODELOS DE IA LÍDERES"
  },
  features: {
    title: "Nuestras Áreas de Enfoque",
    items: [
      {
        title: "Tecnología de Verificación IA",
        description: "Aprovechando la visión por computadora y PNL para validar credenciales, habilidades e hitos profesionales con alta precisión.",
        challenge: "El fraude en currículos y habilidades no verificadas cuestan miles de millones anualmente.",
        solution: "Nuestros modelos de IA multimodal verifican instantáneamente documentos y evalúan habilidades prácticas."
      },
      {
        title: "IA Educativa",
        description: "Creando entornos de aprendizaje adaptativos que personalizan la entrega de contenido basado en métricas de rendimiento en tiempo real.",
        challenge: "Los modelos educativos tradicionales de talla única no abordan las brechas de aprendizaje individuales.",
        solution: "Los tutores de IA adaptativa analizan patrones de rendimiento para proporcionar ajustes curriculares."
      },
      {
        title: "Emparejamiento por IA",
        description: "Utilizando redes neuronales gráficas para emparejar óptimamente investigadores, voluntarios y organizaciones.",
        challenge: "Conectar el talento adecuado con la oportunidad adecuada es intensivo manualmente e ineficiente.",
        solution: "Los algoritmos de emparejamiento de aprendizaje profundo analizan la compatibilidad más allá de las palabras clave."
      },
      {
        title: "Optimización de Flujo de Trabajo",
        description: "Automatizando flujos de trabajo operativos complejos en el comercio transfronterizo y la administración académica.",
        challenge: "Las operaciones transfronterizas a menudo se ven obstaculizadas por las barreras del idioma.",
        solution: "Agentes autónomos manejan la traducción, la programación y los flujos de trabajo de cumplimiento."
      }
    ]
  },
  trust: {
    title: "Por qué estudiantes, investigadores y empresas confían en nosotros",
    points: [
      "Empresa con sede en EE. UU. fundada por exalumnos de UCSD en California",
      "Uniendo los ecosistemas técnicos y de investigación de EE. UU. y China",
      "Filosofía de producto basada en IA con salvaguardas éticas",
      "Compromiso con la estricta privacidad y confidencialidad de los datos"
    ],
    nda: "Todas las colaboraciones de proyectos incluyen NDA (Acuerdos de Confidencialidad) y prácticas seguras de manejo de datos.",
    collaborationTitle: "Excelencia Colaborativa",
    collaborationBadge: "Asociaciones Verificadas"
  },
  audience: {
    title: "A Quién Ayudamos",
    subtitle: "Empoderando a la próxima generación de investigadores, profesionales e innovadores globales.",
    items: [
      { title: "Estudiantes", text: "Estudiantes universitarios que buscan experiencia en investigación" },
      { title: "Buscadores de empleo", text: "Profesionales principiantes que mejoran la credibilidad del currículum" },
      { title: "Investigadores", text: "Profesores y laboratorios que buscan colaboradores de investigación" },
      { title: "PYMES", text: "Empresas transfronterizas que se expanden a los EE. UU." }
    ]
  },
  products: {
    label: "Tubería de Innovación",
    title: "Lo que estamos construyendo (Vista previa)",
    roadmapBtn: "Ver Hoja de Ruta",
    items: [
      {
        name: "USVerif",
        tagline: "Motor de Credibilidad",
        points: ["Puntuación de credibilidad IA", "Tareas de verificación basadas en habilidades", "Perspectiva profesional personalizada"]
      },
      {
        name: "Research Pipe",
        tagline: "Plataforma de Colaboración",
        points: ["Emparejamiento interuniversitario", "Planificador de tareas de investigación y flujo de trabajo de IA", "Tubería de confidencialidad + colaboración"]
      },
      {
        name: "Herramientas de IA para comercio electrónico EE. UU.-China",
        tagline: "Habilitación del Mercado",
        points: ["Generación de contenido", "Configuración de escaparate de bajo costo", "Analítica de mercado"]
      }
    ],
    waitlistBtn: "Unirse a la lista de espera",
    earlyAccessBtn: "Obtener Acceso Anticipado",
    roadmapTitle: "Hoja de Ruta del Producto",
    roadmapDesc: "Nuestras herramientas inteligentes están diseñadas para empoderar a la próxima generación de profesionales con verificación, colaboración y acceso al mercado."
  },
  team: {
    label: "Liderazgo",
    title: "Conoce a los Creadores",
    description: "Un equipo diverso de ingenieros e investigadores unidos por la pasión por la IA ética y la conectividad global.",
    members: [
      {
        name: "Nombre del Fundador",
        role: "Fundador y CEO",
        bio: "Exalumno de UCSD. Fundó Transnode AI para cerrar la brecha entre la investigación académica y la aplicación comercial."
      },
      {
        name: "Nombre del Cofundador",
        role: "Cofundador y CTO",
        bio: "Experto en sistemas distribuidos y optimización de modelos de IA. Liderando la arquitectura técnica y la integración de investigación."
      },
      {
        name: "Nombre del Ingeniero",
        role: "Ingeniero de Software Fundador",
        bio: "Especialista full-stack diseñando tuberías de datos seguras en tiempo real y experiencias de usuario intuitivas."
      }
    ],
    network: [
      { title: "Red de Investigación", desc: "Colaborando con laboratorios y doctorados de universidades de primer nivel, incluidas UCSD y SDSU." },
      { title: "Ingeniería", desc: "Un equipo distribuido de ingenieros full-stack y especialistas en IA en los EE. UU. y Asia." },
      { title: "Asesores", desc: "Guiados por veteranos de la industria en EdTech, Comercio Transfronterizo y Capital de Riesgo." }
    ]
  },
  careers: {
    title: "Bienvenidos Pasantes y Colaboradores",
    description: "Ofrecemos experiencia práctica en IA, datos, ingeniería de software y diseño de productos. Perfecto para estudiantes que buscan proyectos del mundo real y desarrollo de portafolios. Amigable con el trabajo remoto, basado en proyectos, horarios flexibles.",
    btnApply: "Aplicar como Pasante",
    btnStudent: "Para estudiantes de UCSD → Contacto Directo"
  },
  contact: {
    tagline: "Ponerse en Contacto",
    title: "Contáctanos",
    description: "Ya seas un estudiante buscando oportunidades, un investigador buscando colaboración o un inversor interesado en nuestra visión, nos encantaría saber de ti.",
    emailTitle: "Envíanos un Correo",
    emailDesc: "Para consultas generales, asociaciones y soporte.",
    locationTitle: "Sede",
    locationDesc: "San Diego, California",
    socialTitle: "Conéctate en Redes Sociales",
    socialDesc: "Sigue nuestro viaje, obtén las últimas actualizaciones sobre nuestros lanzamientos y únete a nuestra comunidad.",
    formTitle: "Enviar Mensaje",
    formName: "Tu Nombre",
    formEmail: "Correo Electrónico",
    formSubject: "Asunto",
    formMessage: "Mensaje",
    formButton: "Enviar Mensaje",
    sentTitle: "¡Mensaje Enviado!",
    sentDesc: "Te responderemos en breve.",
    investorTitle: "¿Inversores?",
    investorDesc: "Suscríbete en"
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Cómo garantizan la privacidad de los datos con modelos de IA?",
        answer: "Cumplimos estrictamente con los estándares GDPR y CCPA. Los datos se anonimizan y cifran tanto en reposo como en tránsito para garantizar que la privacidad del usuario nunca se vea comprometida."
      },
      {
        question: "¿Ofrecen acceso a API para desarrolladores?",
        answer: "Actualmente estamos en beta privada. Puede solicitar acceso anticipado a través de nuestra página de Productos para integrar nuestra tecnología en sus propias plataformas."
      },
      {
        question: "¿Qué tan preciso es el modelo de verificación?",
        answer: "Nuestro sistema de verificación multimodal logra más del 98% de precisión en la verificación de documentos y puntos de referencia de detección de deepfakes."
      },
      {
        question: "¿Puedo usar sus herramientas para investigación académica?",
        answer: "Sí, ofrecemos licencias especiales y oportunidades de colaboración para instituciones académicas e investigadores individuales."
      },
      {
        question: "¿Cuál es el estado actual y cómo pueden contribuir los voluntarios?",
        answer: "Actualmente estamos en fase beta con programas piloto activos. Invitamos a voluntarios y pasantes a unirse a nuestros equipos de ingeniería e investigación para ayudar a escalar nuestro impacto."
      },
      {
        question: "¿Cuál es la visión de impacto a largo plazo para los inversores?",
        answer: "Nuestro objetivo es convertirnos en el estándar global para la identidad académica y profesional verificada por IA, reduciendo la fricción en la contratación y desbloqueando valor económico."
      }
    ]
  },
  legalPage: {
    title: "Información Legal",
    updated: "Última actualización: 28 de noviembre de 2025",
    sidebar: {
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      confidentiality: "Confidencialidad"
    },
    privacy: {
      title: "Política de Privacidad",
      content: [
        "POLÍTICA DE PRIVACIDAD DE TRANSNODE AI, LLC",
        "1. INTRODUCCIÓN",
        "Transnode AI, LLC ('Transnode', 'nosotros' o 'nuestro') respeta su privacidad y se compromete a proteger sus datos personales. Esta Política de Privacidad le informa sobre nuestras políticas con respecto a la recopilación, el uso y la divulgación de datos personales cuando utiliza nuestro sitio web, transnode.ai, y nuestros productos asociados, incluidos USVerif, Research Pipe y AI Edu (colectivamente, los 'Servicios'). Al acceder o utilizar nuestros Servicios, acepta la recopilación y el uso de información de acuerdo con esta política.",
        "2. INFORMACIÓN QUE RECOPILAMOS",
        "Recopilamos varios tipos diferentes de información para diversos fines para brindarle y mejorar nuestros Servicios:",
        "a. Información de identificación personal: cuando se registra en nuestros Servicios, solicita información o se suscribe a nuestros materiales, podemos pedirle que nos proporcione cierta información de identificación personal, que incluye, entre otros: Dirección de correo electrónico, Nombre y apellido, Número de teléfono, Dirección, Estado, Provincia, Código postal, Ciudad.",
        "b. Datos de Verificación (USVerif): Para brindar servicios de credibilidad y verificación, podemos recopilar y procesar información confidencial como documentos de identificación emitidos por el gobierno, expedientes académicos, certificaciones profesionales y datos biométricos (específicamente escaneos faciales para la coincidencia de identidad). Estos datos se procesan estrictamente con el fin de verificación y se manejan con el más alto nivel de seguridad.",
        "c. Datos Académicos y de Investigación (Research Pipe y AI Edu): Recopilamos información sobre sus intereses de investigación, historial académico, registros de publicaciones y afiliaciones institucionales para facilitar una coincidencia precisa y recomendaciones de colaboración.",
        "d. Datos de Uso: También podemos recopilar información sobre cómo se accede y utiliza el Servicio ('Datos de Uso'). Estos Datos de Uso pueden incluir información como la dirección de Protocolo de Internet de su computadora (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visita, la hora y fecha de su visita, el tiempo dedicado a esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.",
        "3. CÓMO UTILIZAMOS SU INFORMACIÓN",
        "Transnode AI, LLC utiliza los datos recopilados para diversos fines:",
        "• Para proporcionar y mantener nuestros Servicios, incluida la verificación de credenciales y la facilitación de colaboraciones de investigación.",
        "• Para notificarle sobre cambios en nuestros Servicios.",
        "• Para permitirle participar en funciones interactivas de nuestros Servicios cuando elija hacerlo.",
        "• Para brindar atención al cliente y responder a sus consultas.",
        "• Para recopilar análisis o información valiosa para que podamos mejorar nuestros Servicios.",
        "• Para monitorear el uso de nuestros Servicios.",
        "• Para detectar, prevenir y abordar problemas técnicos y fraudes.",
        "4. RETENCIÓN DE DATOS",
        "Transnode AI, LLC retendrá sus Datos Personales solo durante el tiempo que sea necesario para los fines establecidos en esta Política de Privacidad. Retendremos y utilizaremos sus Datos Personales en la medida necesaria para cumplir con nuestras obligaciones legales (por ejemplo, si estamos obligados a retener sus datos para cumplir con las leyes aplicables), resolver disputas y hacer cumplir nuestros acuerdos y políticas legales. Los datos de verificación se retienen solo durante el tiempo necesario para completar el proceso de verificación y para los seguimientos de auditoría exigidos por la ley, después de lo cual se archivan o eliminan de forma segura.",
        "5. TRANSFERENCIA DE DATOS",
        "Su información, incluidos los Datos Personales, puede transferirse a computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción. Específicamente, como empresa que une los mercados de EE. UU. y globales, los datos pueden transferirse entre nuestras regiones operativas. Transnode toma todas las medidas razonablemente necesarias para garantizar que sus datos se traten de forma segura y de acuerdo con esta Política de Privacidad y no se realizará ninguna transferencia de sus Datos Personales a una organización o país a menos que existan controles adecuados, incluida la seguridad de sus datos y otra información personal.",
        "6. DIVULGACIÓN DE DATOS",
        "Podemos divulgar sus Datos Personales si creemos de buena fe que dicha acción es necesaria para:",
        "• Cumplir con una obligación legal.",
        "• Proteger y defender los derechos o propiedad de Transnode AI, LLC.",
        "• Prevenir o investigar posibles irregularidades en relación con el Servicio.",
        "• Proteger la seguridad personal de los usuarios del Servicio o del público.",
        "• Proteger contra responsabilidad legal.",
        "7. SEGURIDAD DE LOS DATOS",
        "La seguridad de sus datos es importante para nosotros. Utilizamos protocolos de cifrado estándar de la industria (TLS/SSL) para datos en tránsito y cifrado AES-256 para datos en reposo. Sin embargo, recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos Personales, no podemos garantizar su seguridad absoluta.",
        "8. SUS DERECHOS DE PROTECCIÓN DE DATOS",
        "Dependiendo de su ubicación, puede tener los siguientes derechos con respecto a sus datos personales:",
        "• El derecho a acceder, actualizar o eliminar la información que tenemos sobre usted.",
        "• El derecho de rectificación.",
        "• El derecho a oponerse.",
        "• El derecho de restricción.",
        "• El derecho a la portabilidad de datos.",
        "• El derecho a retirar el consentimiento.",
        "Si desea ejercer alguno de estos derechos, contáctenos en legal@transnode.ai.",
        "9. CONTÁCTENOS",
        "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos por correo electrónico: legal@transnode.ai."
      ]
    },
    terms: {
      title: "Términos de Servicio",
      content: [
        "Bienvenido a Transnode AI. Al acceder o utilizar nuestro sitio web y servicios, usted acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables.",
        "Se le otorga una licencia limitada, no exclusiva e intransferible para acceder y utilizar los servicios para sus fines comerciales personales o internos. Usted acepta no reproducir, modificar, distribuir, vender ni explotar ninguna parte de los servicios sin nuestro permiso expreso por escrito.",
        "Nuestros servicios se proporcionan 'tal cual' y 'según disponibilidad' sin garantías de ningún tipo, ya sean expresas o implícitas, incluidas, entre otras, las garantías implícitas de comerciabilidad, idoneidad para un propósito particular y no infracción.",
        "En ningún caso Transnode AI, LLC será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, pérdida de ganancias, datos, uso, buena voluntad u otras pérdidas intangibles."
      ]
    },
    confidentiality: {
      title: "Acuerdo de Confidencialidad y Seguridad",
      content: [
        "1. DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL",
        "'Información Confidencial' significa toda la información no pública divulgada por Transnode AI, LLC ('Parte Reveladora') al usuario o socio ('Parte Receptora'), o viceversa, ya sea oralmente o por escrito, que se designe como confidencial o que razonablemente deba entenderse como confidencial dada la naturaleza de la información y las circunstancias de la divulgación.",
        "La Información Confidencial de Transnode incluye específicamente, entre otros: algoritmos de IA patentados, pesos de modelos, conjuntos de datos de entrenamiento, código fuente, hojas de ruta de productos, planes de negocios, proyecciones financieras, listas de clientes y datos de investigación generados a través de Research Pipe.",
        "2. OBLIGACIONES DE LA PARTE RECEPTORA",
        "La Parte Receptora acepta: (i) mantener toda la Información Confidencial en estricta confidencialidad y no divulgarla a ningún tercero, excepto según lo autorizado específicamente en este documento; (ii) utilizar la Información Confidencial únicamente con el fin de utilizar el Servicio o evaluar una posible relación comercial con Transnode; y (iii) utilizar al menos el mismo grado de cuidado para proteger la Información Confidencial que utiliza para proteger su propia información más confidencial, pero en ningún caso menos que un grado razonable de cuidado.",
        "3. PROTECCIÓN DE DATOS DE INVESTIGACIÓN DEL USUARIO",
        "Transnode AI, LLC reconoce que los investigadores y estudiantes que utilizan nuestra plataforma (específicamente Research Pipe) pueden cargar datos no publicados, hipótesis y manuscritos. Transnode acepta tratar todo ese contenido de investigación generado por el usuario como Información Confidencial. No venderemos, licenciaremos ni compartiremos estos datos con terceros con fines de marketing. No utilizaremos estos datos para entrenar modelos fundamentales orientados al público sin el consentimiento explícito y por escrito del usuario.",
        "4. EXCEPCIONES",
        "La Información Confidencial no incluirá ninguna información que: (i) sea o se haga generalmente conocida por el público sin incumplimiento de ninguna obligación con la Parte Reveladora; (ii) fuera conocida por la Parte Receptora antes de su divulgación por la Parte Reveladora; (iii) se reciba de un tercero sin incumplimiento de ninguna obligación con la Parte Reveladora; o (iv) fuera desarrollada independientemente por la Parte Receptora sin uso o referencia a la Información Confidencial de la Parte Reveladora.",
        "5. DIVULGACIÓN OBLIGATORIA",
        "La Parte Receptora puede divulgar Información Confidencial en la medida en que lo exija la ley, el reglamento o una orden judicial, siempre que la Parte Receptora notifique previamente a la Parte Reveladora sobre la divulgación obligatoria (en la medida en que lo permita la ley) y brinde asistencia razonable, a costo de la Parte Reveladora, si la Parte Reveladora desea impugnar la divulgación.",
        "6. DEVOLUCIÓN O DESTRUCCIÓN DE INFORMACIÓN",
        "Al finalizar la cuenta del usuario o previa solicitud por escrito de la Parte Reveladora, la Parte Receptora devolverá o destruirá inmediatamente todas las copias de la Información Confidencial que estén en su posesión o control y certificará por escrito que lo ha hecho.",
        "7. RECURSOS",
        "La Parte Receptora reconoce que la divulgación de Información Confidencial puede causar un daño sustancial a la Parte Reveladora para el cual los daños por sí solos pueden no ser un remedio suficiente. Por lo tanto, la Parte Reveladora tendrá derecho a buscar una reparación equitativa adecuada, incluidas medidas cautelares, además de cualquier otro recurso que pueda tener por ley.",
        "8. DURACIÓN",
        "Las obligaciones de confidencialidad en virtud de este Acuerdo sobrevivirán a la terminación de su uso del Servicio y permanecerán vigentes por un período de cinco (5) años a partir de la fecha de divulgación, o para secretos comerciales, mientras dicha información siga siendo un secreto comercial según la ley aplicable."
      ]
    }
  },
  footer: {
    tagline: "Construyendo el futuro de la investigación y la credibilidad profesional a través de sistemas inteligentes.",
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
    headlineStart: "구축합니다,",
    headlineHighlight: "지능형 도구",
    headlineEnd: "현대적 협업을 위해.",
    subheadline: "Transnode AI, LLC는 신뢰성을 높이고 연구를 가속화하며 업무 흐름을 간소화하는 국경 없는 AI 제품을 개발합니다. 학생, 연구원 및 글로벌 중소기업이 신뢰합니다.",
    ctaPrimary: "조기 액세스 참여",
    ctaSecondary: "투자자 문의",
    ctaCrowdfund: "1달러 크라우드펀딩 후원"
  },
  aiModels: {
    title: "최첨단 AI 모델 기반"
  },
  features: {
    title: "핵심 중점 분야",
    items: [
      {
        title: "AI 검증 기술",
        description: "컴퓨터 비전과 NLP를 활용하여 자격 증명, 기술 및 전문 경력을 높은 정확도로 검증합니다.",
        challenge: "이력서 위조와 검증되지 않은 기술은 기업에 매년 수십억 달러의 손실을 입힙니다.",
        solution: "당사의 멀티모달 AI 모델은 문서를 즉시 검증하고 실제 기술을 평가합니다."
      },
      {
        title: "AI 교육",
        description: "실시간 학생 성과 지표를 기반으로 콘텐츠 전달을 개인화하는 적응형 학습 환경을 조성합니다.",
        challenge: "기존의 획일적인 교육 모델은 개인별 학습 격차를 효과적으로 해결하지 못합니다.",
        solution: "적응형 AI 튜터가 성과 패턴을 분석하여 맞춤형 커리큘럼을 제공합니다."
      },
      {
        title: "AI 매칭",
        description: "그래프 신경망을 활용하여 연구원, 자원봉사자 및 조직을 최적으로 연결하여 영향력 있는 협업을 이끌어냅니다.",
        challenge: "적합한 인재를 적합한 기회에 연결하는 것은 수동적이고 비효율적입니다.",
        solution: "딥러닝 매칭 알고리즘은 단순 키워드를 넘어 호환성과 시너지를 분석합니다."
      },
      {
        title: "AI 워크플로우 최적화",
        description: "자율 에이전트를 사용하여 국경 간 상거래 및 학사 행정의 복잡한 운영 워크플로우를 자동화합니다.",
        challenge: "국경 간 운영은 언어 장벽과 복잡한 규정 준수 문제로 인해 지체되는 경우가 많습니다.",
        solution: "자율 에이전트가 번역, 일정 관리 및 규정 준수 워크플로우를 처리합니다."
      }
    ]
  },
  trust: {
    title: "학생, 연구원, 기업이 우리를 신뢰하는 이유",
    points: [
      "캘리포니아 UCSD 동문이 설립한 미국 기반 기업",
      "미국-중국 기술 및 연구 생태계 연결",
      "윤리적 안전장치를 갖춘 AI 우선 제품 철학",
      "엄격한 데이터 개인정보 보호 및 기밀 유지 약속"
    ],
    nda: "모든 프로젝트 협업에는 NDA(기밀 유지 계약) 및 보안 데이터 처리 관행이 포함됩니다.",
    collaborationTitle: "협업의 우수성",
    collaborationBadge: "검증된 파트너십"
  },
  audience: {
    title: "우리가 돕는 사람들",
    subtitle: "차세대 연구원, 전문가 및 글로벌 혁신가에게 힘을 실어줍니다.",
    items: [
      { title: "학생", text: "연구 경험을 찾는 학부생" },
      { title: "구직자", text: "이력서 신뢰도를 높이는 초보 전문가" },
      { title: "연구원", text: "연구 협력자를 찾는 교수 및 연구소" },
      { title: "중소기업", text: "미국으로 확장하는 국경 간 기업" }
    ]
  },
  products: {
    label: "혁신 파이프라인",
    title: "우리가 만들고 있는 것 (미리보기)",
    roadmapBtn: "로드맵 보기",
    items: [
      {
        name: "USVerif",
        tagline: "신뢰성 엔진",
        points: ["AI 신뢰도 점수", "기술 기반 검증 작업", "맞춤형 진로 인사이트"]
      },
      {
        name: "Research Pipe",
        tagline: "협업 플랫폼",
        points: ["대학 간 매칭", "AI 워크플로우 및 연구 작업 플래너", "기밀 유지 + 협업 파이프라인"]
      },
      {
        name: "美·中 이커머스 AI 도구",
        tagline: "시장 활성화",
        points: ["콘텐츠 생성", "저비용 스토어 설정", "시장 분석"]
      }
    ],
    waitlistBtn: "대기자 명단 가입",
    earlyAccessBtn: "조기 이용권 받기",
    roadmapTitle: "제품 로드맵",
    roadmapDesc: "우리의 지능형 도구는 차세대 전문가들에게 검증, 협업 및 시장 접근성을 제공하도록 설계되었습니다."
  },
  team: {
    label: "리더십",
    title: "팀 소개",
    description: "윤리적 AI와 글로벌 연결성에 대한 열정으로 뭉친 엔지니어와 연구원들로 구성된 다양한 팀입니다.",
    members: [
      {
        name: "설립자",
        role: "설립자 겸 CEO",
        bio: "UCSD 동문. 학술 연구와 상업적 적용 간의 격차를 해소하기 위해 Transnode AI를 설립했습니다."
      },
      {
        name: "공동 설립자",
        role: "공동 설립자 겸 CTO",
        bio: "분산 시스템 및 AI 모델 최적화 전문가. 기술 아키텍처 및 연구 통합을 주도합니다."
      },
      {
        name: "엔지니어",
        role: "창립 소프트웨어 엔지니어",
        bio: "안전한 실시간 데이터 파이프라인과 직관적인 사용자 경험을 설계하는 풀스택 전문가입니다."
      }
    ],
    network: [
      { title: "연구 네트워크", desc: "UCSD 및 SDSU를 포함한 명문 대학의 연구소 및 박사들과 협력합니다." },
      { title: "엔지니어링", desc: "미국과 아시아 전역에 분포된 풀스택 엔지니어 및 AI 전문가 팀." },
      { title: "자문위원", desc: "에듀테크, 국경 간 상거래 및 벤처 캐피털 분야의 업계 베테랑들의 지도를 받습니다." }
    ]
  },
  careers: {
    title: "인턴 및 기여자 환영",
    description: "AI, 데이터, 소프트웨어 엔지니어링 및 제품 디자인 분야의 실무 경험을 제공합니다. 실제 프로젝트와 포트폴리오 개발을 원하는 학생들에게 완벽합니다. 원격 근무 가능, 프로젝트 기반, 유연한 일정.",
    btnApply: "인턴 지원하기",
    btnStudent: "UCSD 학생 → 직접 문의"
  },
  contact: {
    tagline: "연락하기",
    title: "문의하기",
    description: "기회를 찾는 학생, 협업을 원하는 연구원, 비전에 관심 있는 투자자 등 모든 분들의 연락을 환영합니다.",
    emailTitle: "이메일 문의",
    emailDesc: "일반 문의, 파트너십 및 지원.",
    locationTitle: "본사",
    locationDesc: "캘리포니아 샌디에이고",
    socialTitle: "소셜 미디어 연결",
    socialDesc: "여정을 팔로우하고, 제품 출시 최신 소식을 받고, 성장하는 혁신가 커뮤니티에 참여하세요.",
    formTitle: "메시지 보내기",
    formName: "성함",
    formEmail: "이메일 주소",
    formSubject: "제목",
    formMessage: "메시지 내용",
    formButton: "메시지 보내기",
    sentTitle: "메시지 전송됨!",
    sentDesc: "곧 답변 드리겠습니다.",
    investorTitle: "투자자이신가요?",
    investorDesc: "구독하기"
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        question: "AI 모델의 데이터 개인정보 보호를 어떻게 보장합니까?",
        answer: "우리는 GDPR 및 CCPA 표준을 엄격히 준수합니다. 데이터는 저장 및 전송 시 익명화되고 암호화되어 사용자 개인정보가 침해되지 않도록 합니다."
      },
      {
        question: "개발자를 위한 API 액세스를 제공합니까?",
        answer: "현재 비공개 베타 서비스 중입니다. 제품 페이지를 통해 조기 액세스를 요청하여 귀하의 플랫폼에 당사 기술을 통합할 수 있습니다."
      },
      {
        question: "검증 모델의 정확도는 어느 정도입니까?",
        answer: "당사의 멀티모달 검증 시스템은 문서 검증 및 딥페이크 탐지 벤치마크에서 98% 이상의 정확도를 달성합니다."
      },
      {
        question: "학술 연구에 도구를 사용할 수 있습니까?",
        answer: "예, 학술 기관 및 개인 연구원을 위한 특별 라이선스 및 협업 기회를 제공합니다."
      },
      {
        question: "현재 개발 상태는 어떠하며, 자원봉사자는 어떻게 기여할 수 있습니까?",
        answer: "현재 라이브 파일럿 프로그램과 함께 베타 테스트 단계에 있습니다. 엔지니어링 및 연구 팀에 합류하여 영향력을 확대하고 핵심 알고리즘을 개선할 자원봉사자와 인턴을 환영합니다."
      },
      {
        question: "투자자를 위한 장기적인 영향력 비전은 무엇입니까?",
        answer: "우리의 목표는 AI로 검증된 학업 및 전문 신원의 글로벌 표준이 되는 것입니다. 교육과 고용 간의 격차를 해소함으로써 채용 마찰을 줄이고 경제적 가치를 창출하는 것을 목표로 합니다."
      }
    ]
  },
  legalPage: {
    title: "법적 정보",
    updated: "최종 업데이트: 2025년 11월 28일",
    sidebar: {
      privacy: "개인정보 처리방침",
      terms: "이용 약관",
      confidentiality: "기밀 유지"
    },
    privacy: {
      title: "개인정보 처리방침",
      content: [
        "TRANSNODE AI, LLC 개인정보 처리방침",
        "1. 소개",
        "Transnode AI, LLC('Transnode', '당사', '우리' 또는 '우리의')는 귀하의 개인정보를 존중하며 귀하의 개인 데이터를 보호하기 위해 최선을 다하고 있습니다. 본 개인정보 처리방침은 귀하가 당사 웹사이트 transnode.ai 및 USVerif, Research Pipe 및 AI Edu를 포함한 관련 제품(총칭 '서비스')을 사용할 때 개인 데이터의 수집, 사용 및 공개에 관한 당사의 정책을 알립니다. 당사 서비스에 액세스하거나 서비스를 사용함으로써 귀하는 본 정책에 따른 정보 수집 및 사용에 동의하게 됩니다.",
        "2. 수집하는 정보",
        "당사는 귀하에게 서비스를 제공하고 개선하기 위해 다양한 목적으로 여러 유형의 정보를 수집합니다.",
        "a. 개인 식별 정보: 귀하가 당사 서비스에 등록하거나 정보를 요청하거나 자료를 구독할 때 당사는 다음을 포함하되 이에 국한되지 않는 특정 개인 식별 정보를 제공하도록 요청할 수 있습니다: 이메일 주소, 이름 및 성, 전화번호, 주소, 주, 도, 우편번호, 시.",
        "b. 검증 데이터 (USVerif): 신뢰성 및 검증 서비스를 제공하기 위해 정부 발급 신분증, 학업 성적 증명서, 전문 자격증 및 생체 인식 데이터(특히 신원 일치를 위한 안면 스캔)와 같은 민감한 정보를 수집하고 처리할 수 있습니다. 이 데이터는 엄격히 검증 목적으로만 처리되며 최고 수준의 보안으로 취급됩니다.",
        "c. 학술 및 연구 데이터 (Research Pipe & AI Edu): 정확한 매칭 및 협업 추천을 용이하게 하기 위해 귀하의 연구 관심사, 학력, 출판 기록 및 소속 기관에 관한 정보를 수집합니다.",
        "d. 사용 데이터: 당사는 서비스 액세스 및 사용 방법에 대한 정보('사용 데이터')를 수집할 수도 있습니다. 이 사용 데이터에는 컴퓨터의 인터넷 프로토콜 주소(예: IP 주소), 브라우저 유형, 브라우저 버전, 방문한 서비스 페이지, 방문 시간 및 날짜, 해당 페이지에서 보낸 시간, 고유 장치 식별자 및 기타 진단 데이터와 같은 정보가 포함될 수 있습니다.",
        "3. 정보 사용 방법",
        "Transnode AI, LLC는 수집된 데이터를 다음과 같은 목적으로 사용합니다.",
        "• 자격 증명 검증 및 연구 협업 촉진을 포함하여 서비스 제공 및 유지.",
        "• 서비스 변경 사항에 대해 알리기 위해.",
        "• 귀하가 선택할 때 서비스의 대화형 기능에 참여할 수 있도록 하기 위해.",
        "• 고객 지원을 제공하고 문의에 응답하기 위해.",
        "• 서비스를 개선할 수 있도록 분석 또는 귀중한 정보를 수집하기 위해.",
        "• 서비스 사용을 모니터링하기 위해.",
        "• 기술적 문제 및 사기를 탐지, 예방 및 해결하기 위해.",
        "4. 데이터 보존",
        "Transnode AI, LLC는 본 개인정보 처리방침에 명시된 목적에 필요한 기간 동안만 귀하의 개인 데이터를 보존합니다. 당사는 법적 의무를 준수하고(예: 해당 법률을 준수하기 위해 데이터를 보존해야 하는 경우) 분쟁을 해결하고 법적 계약 및 정책을 집행하는 데 필요한 범위 내에서 귀하의 개인 데이터를 보존하고 사용합니다. 검증 데이터는 검증 절차를 완료하는 데 필요한 기간과 법률에서 요구하는 감사 추적 기간 동안만 보존되며 그 후에는 안전하게 보관되거나 삭제됩니다.",
        "5. 데이터 전송",
        "개인 데이터를 포함한 귀하의 정보는 귀하가 거주하는 주, 도, 국가 또는 기타 정부 관할 구역 이외의 컴퓨터로 전송되어 유지될 수 있으며, 해당 지역의 데이터 보호법은 귀하의 관할 구역과 다를 수 있습니다. 특히 미국과 글로벌 시장을 연결하는 기업으로서 데이터는 운영 지역 간에 전송될 수 있습니다. Transnode는 귀하의 데이터가 본 개인정보 처리방침에 따라 안전하게 처리되도록 합리적으로 필요한 모든 조치를 취하며, 귀하의 데이터 및 기타 개인 정보의 보안을 포함한 적절한 통제가 이루어지지 않는 한 귀하의 개인 데이터는 어떤 조직이나 국가로도 전송되지 않습니다.",
        "6. 데이터 공개",
        "당사는 그러한 조치가 다음에 필요하다고 선의로 믿는 경우 귀하의 개인 데이터를 공개할 수 있습니다.",
        "• 법적 의무 준수.",
        "• Transnode AI, LLC의 권리 또는 재산 보호 및 방어.",
        "• 서비스와 관련된 가능한 잘못된 행위 예방 또는 조사.",
        "• 서비스 사용자 또는 대중의 개인 안전 보호.",
        "• 법적 책임으로부터 보호.",
        "7. 데이터 보안",
        "귀하의 데이터 보안은 우리에게 중요합니다. 우리는 전송 중인 데이터에 대해 업계 표준 암호화 프로토콜(TLS/SSL)을 사용하고 저장 중인 데이터에 대해 AES-256 암호화를 사용합니다. 그러나 인터넷을 통한 전송 방법이나 전자 저장 방법은 100% 안전하지 않다는 점을 기억하십시오. 당사는 귀하의 개인 데이터를 보호하기 위해 상업적으로 허용되는 수단을 사용하려고 노력하지만 절대적인 보안을 보장할 수는 없습니다.",
        "8. 귀하의 데이터 보호 권리",
        "귀하의 위치에 따라 귀하는 귀하의 개인 데이터와 관련하여 다음과 같은 권리를 가질 수 있습니다.",
        "• 당사가 귀하에 대해 보유하고 있는 정보에 액세스, 업데이트 또는 삭제할 권리.",
        "• 정정할 권리.",
        "• 반대할 권리.",
        "• 제한할 권리.",
        "• 데이터 이동 권리.",
        "• 동의를 철회할 권리.",
        "이러한 권리를 행사하려면 legal@transnode.ai로 문의하십시오.",
        "9. 문의하기",
        "본 개인정보 처리방침에 대해 질문이 있는 경우 이메일(legal@transnode.ai)로 문의하십시오."
      ]
    },
    terms: {
      title: "이용 약관",
      content: [
        "Transnode AI에 오신 것을 환영합니다. 당사 웹사이트 및 서비스에 액세스하거나 이를 사용함으로써 귀하는 본 이용 약관 및 모든 관련 법률 및 규정을 준수할 것에 동의합니다.",
        "귀하는 개인 또는 내부 비즈니스 목적으로 서비스에 액세스하고 사용할 수 있는 제한적이고 비독점적이며 양도 불가능한 라이선스를 부여받습니다. 귀하는 당사의 명시적인 서면 허가 없이 서비스의 어떤 부분도 복제, 수정, 배포, 판매 또는 악용하지 않을 것에 동의합니다.",
        "당사의 서비스는 상품성, 특정 목적에의 적합성 및 비침해에 대한 묵시적 보증을 포함하되 이에 국한되지 않는 어떠한 종류의 명시적 또는 묵시적 보증 없이 '있는 그대로' 및 '이용 가능한 대로' 제공됩니다.",
        "어떠한 경우에도 Transnode AI, LLC는 이익 손실, 데이터 손실, 사용 손실, 영업권 또는 기타 무형의 손실을 포함하되 이에 국한되지 않는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다."
      ]
    },
    confidentiality: {
      title: "기밀 유지 및 보안 계약",
      content: [
        "1. 기밀 정보의 정의",
        "'기밀 정보'란 Transnode AI, LLC('공개 당사자')가 사용자 또는 파트너('수신 당사자')에게 또는 그 반대로 구두 또는 서면으로 공개한 모든 비공개 정보로서, 기밀로 지정되거나 정보의 성격 및 공개 상황을 고려할 때 합리적으로 기밀로 이해되어야 하는 정보를 의미합니다.",
        "Transnode의 기밀 정보에는 독점 AI 알고리즘, 모델 가중치, 교육 데이터 세트, 소스 코드, 제품 로드맵, 사업 계획, 재무 예측, 고객 목록 및 Research Pipe를 통해 생성된 연구 데이터가 포함되나 이에 국한되지 않습니다.",
        "2. 수신 당사자의 의무",
        "수신 당사자는 다음 사항에 동의합니다. (i) 모든 기밀 정보를 엄격하게 기밀로 유지하고 본 계약에서 특별히 승인한 경우를 제외하고는 제3자에게 공개하지 않습니다. (ii) 기밀 정보를 서비스를 사용하거나 Transnode와의 잠재적 비즈니스 관계를 평가하는 목적으로만 사용합니다. (iii) 기밀 정보를 보호하기 위해 최소한 자신의 가장 기밀 정보를 보호하는 데 사용하는 것과 동일한 수준의 주의를 기울이지만 어떤 경우에도 합리적인 수준 이상의 주의를 기울입니다.",
        "3. 사용자 연구 데이터 보호",
        "Transnode AI, LLC는 당사 플랫폼(특히 Research Pipe)을 사용하는 연구원 및 학생이 미발표 데이터, 가설 및 원고를 업로드할 수 있음을 인정합니다. Transnode는 그러한 모든 사용자 생성 연구 콘텐츠를 기밀 정보로 취급하는 데 동의합니다. 당사는 마케팅 목적으로 이 데이터를 제3자에게 판매, 라이선스 부여 또는 공유하지 않습니다. 당사는 사용자의 명시적인 서면 동의 없이 대중을 대상으로 하는 기본 모델을 훈련하는 데 이 데이터를 사용하지 않습니다.",
        "4. 예외",
        "기밀 정보에는 다음 정보가 포함되지 않습니다. (i) 공개 당사자에 대한 의무를 위반하지 않고 대중에게 일반적으로 알려지거나 알려지게 된 정보 (ii) 공개 당사자가 공개하기 전에 수신 당사자에게 이미 알려진 정보 (iii) 공개 당사자에 대한 의무를 위반하지 않고 제3자로부터 수신한 정보 (iv) 공개 당사자의 기밀 정보를 사용하거나 참조하지 않고 수신 당사자가 독자적으로 개발한 정보.",
        "5. 강제 공개",
        "수신 당사자는 법률, 규정 또는 법원 명령에 의해 강제되는 범위 내에서 기밀 정보를 공개할 수 있습니다. 단, 수신 당사자는 법적으로 허용되는 범위 내에서 공개 당사자에게 강제 공개에 대해 사전에 통지하고 공개 당사자가 공개에 이의를 제기하고자 할 경우 공개 당사자의 비용으로 합리적인 지원을 제공해야 합니다.",
        "6. 정보의 반환 또는 파기",
        "사용자 계정이 해지되거나 공개 당사자의 서면 요청이 있는 경우, 수신 당사자는 즉시 소유하거나 통제하고 있는 기밀 정보의 모든 사본을 반환하거나 파기하고 이를 수행했음을 서면으로 증명해야 합니다.",
        "7. 구제책",
        "수신 당사자는 기밀 정보의 공개가 공개 당사자에게 손해 배상만으로는 충분한 구제책이 될 수 없는 실질적인 피해를 줄 수 있음을 인정합니다. 따라서 공개 당사자는 법률에 따라 가질 수 있는 다른 구제책 외에도 금지 명령을 포함한 적절한 형평법상의 구제를 구할 권리가 있습니다.",
        "8. 기간",
        "본 계약에 따른 기밀 유지 의무는 귀하의 서비스 사용 종료 후에도 존속하며 공개일로부터 5년 동안 유효합니다. 영업 비밀의 경우 해당 정보가 관련 법률에 따라 영업 비밀로 유지되는 한 유효합니다."
      ]
    }
  },
  footer: {
    tagline: "지능형 시스템을 통해 연구 및 경력 신뢰성의 미래를 구축합니다.",
    company: "회사",
    legal: "법적 고지",
    rights: "Transnode AI, LLC. All rights reserved."
  }
};

export const translations = { en, zh, es, ko };