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
    earlyAccessBtn: "Current MVP Presentation",
    roadmapTitle: "Product Roadmap",
    roadmapDesc: "Our intelligent tools are designed to empower the next generation of professionals with verification, collaboration, and market access."
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
      closing: "We are expanding our core team as we develop USVerif and ResearchPipe."
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
  ...en
};

const es: ContentType = {
  ...en
};

const ko: ContentType = {
  ...en
};

export const translations = { en, zh, es, ko };