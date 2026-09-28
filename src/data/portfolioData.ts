import heroPortrait from '../assets/images/hero_portrait_tahiru_1790599180542.jpg';
import cloudArchImg from '../assets/images/cloud_system_architecture_1790599190786.jpg';
import neuralNetImg from '../assets/images/neural_capsule_network_1790599201934.jpg';
import attendanceImg from '../assets/images/attendance_system_mockup_1790599213762.jpg';
import { Project, Experience, LeadershipRole, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shaibu Tahiru',
  role: 'Computer Scientist · Cloud & Backend Engineer',
  institution: 'Simon Diedong Dombo University of Business and Integrated Development Studies (UBIDS)',
  location: 'Wa, Upper West Region, Ghana',
  email: 'Shaibutahiru2000@gmail.com',
  phone: '+233593501415',
  github: 'https://github.com/Tahiru2000',
  githubUsername: 'Tahiru2000',
  avatarUrl: 'https://avatars.githubusercontent.com/u/138148430?v=4',
  heroImage: heroPortrait,
  summary:
    'Computer Science graduate specializing in Cloud Architecture and Python Backend Development. Experienced in designing scalable distributed services and investigating Machine Learning models—including Convolutional Neural Networks (CNNs) and Capsule Networks—to build intelligent, reliable, data-driven systems.',
  stats: [
    { label: 'Public Repositories', value: '16+' },
    { label: 'AWS Certification', value: 'Cloud Practitioner' },
    { label: 'Student Governance', value: 'Faculty President & MP' },
    { label: 'Academic Standing', value: 'BSc. Computer Science' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'university-attendance-system',
    title: 'University Attendance Management System',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Systems',
    summary:
      'Scalable web-based lecture attendance management platform engineered with Django and PostgreSQL, automating real-time student check-in, authentication, and reporting.',
    description:
      'Engineered a complete enterprise-grade attendance solution for academic institutions. Replaced manual roll-call overhead with an automated, role-based web interface designed for university administrators, department deans, and course lecturers. Designed normalized relational database schemas in PostgreSQL to handle high-concurrency lecture sessions without race conditions.',
    image: attendanceImg,
    technologies: ['Python', 'Django', 'PostgreSQL', 'RESTful APIs', 'Bootstrap', 'Session Auth'],
    githubUrl: 'https://github.com/Tahiru2000/University-Attendance-System',
    featured: true,
    highlights: [
      'Eliminated manual roll-call paperwork across departmental courses, speeding up lecture start times by over 80%.',
      'Architected normalized PostgreSQL schema optimizing multi-student batch attendance logs with sub-100ms response times.',
      'Constructed role-based permission tiers distinguishing administrators, lecturers, and class representatives.',
      'Automated semester-wide eligibility calculation and exportable audit reports for university examination boards.',
    ],
    metrics: [
      { label: 'Latency', value: '<100ms' },
      { label: 'Data Engine', value: 'PostgreSQL' },
      { label: 'Architecture', value: 'RESTful Django' },
    ],
    date: '2025',
  },
  {
    id: 'deep-learning-capsnet-cnn',
    title: 'Capsule Networks & CNN Research',
    category: 'ml',
    categoryLabel: 'AI & Machine Learning',
    summary:
      'Investigative machine learning research exploring viewpoint invariance, dynamic routing by agreement in Capsule Networks, and transfer learning with Convolutional Neural Networks.',
    description:
      'Applied advanced deep learning architectures to overcome the spatial relationship limitations inherent in standard pooling operations. Evaluated routing-by-agreement algorithms in Capsule Networks (CapsNets) against traditional CNN baselines, evaluating accuracy, parameter efficiency, and robustness under visual perturbations and transformations.',
    image: neuralNetImg,
    technologies: ['Python', 'PyTorch / TensorFlow', 'CNNs', 'Capsule Networks', 'Transfer Learning', 'NumPy'],
    githubUrl: 'https://github.com/Tahiru2000',
    featured: true,
    highlights: [
      'Evaluated vector-based capsule representation preserving affine transformation properties versus scalar neuron activation.',
      'Implemented iterative routing-by-agreement mechanisms to model spatial hierarchies between visual components.',
      'Benchmarked transfer learning pipelines to adapt pre-trained feature extractors onto domain-specific datasets.',
      'Conducted comparative error analyses highlighting generalization performance across perturbed inputs.',
    ],
    metrics: [
      { label: 'Architecture', value: 'CapsNet & CNN' },
      { label: 'Domain', value: 'Computer Vision' },
      { label: 'Methodology', value: 'Dynamic Routing' },
    ],
    date: '2025 – 2026',
  },
  {
    id: 'aws-cloud-infrastructure',
    title: 'Scalable Cloud Architecture & Backend Operations',
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    summary:
      'Production-ready cloud deployment patterns using AWS services, containerized Python microservices, and system troubleshooting protocols.',
    description:
      'Developed during intensive AWS Cloud Practitioner training with Amalitech and ongoing infrastructure research. Covers VPC subnet isolation, IAM least-privilege role policies, automated backup strategies, and containerized deployment pipelines designed for zero downtime.',
    image: cloudArchImg,
    technologies: ['AWS EC2', 'AWS S3', 'AWS IAM', 'VPC', 'Docker', 'Linux', 'CloudWatch'],
    githubUrl: 'https://github.com/Tahiru2000/App-Ops',
    featured: true,
    highlights: [
      'Formulated strict AWS IAM policy templates preventing credential exposure across development and production tiers.',
      'Designed multi-tier network topologies with public ingress and private subnet database isolation in AWS VPC.',
      'Implemented automated Linux service health monitoring and error logging utilizing CloudWatch and shell scripts.',
      'Completed practical troubleshooting scenarios addressing Linux system performance bottlenecks and memory constraints.',
    ],
    metrics: [
      { label: 'Standard', value: 'AWS Well-Architected' },
      { label: 'Certification', value: 'Amalitech AWS' },
      { label: 'Uptime Focus', value: '99.9%' },
    ],
    date: '2025',
  },
  {
    id: 'ecommerce-momo-platform',
    title: 'Full-Stack E-Commerce with Mobile Money & PayPal',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Systems',
    summary:
      'Dynamic web storefront developed in Flask integrating dual payment gateways: local African Mobile Money (MoMo) and international PayPal.',
    description:
      'Designed an e-commerce platform addressing regional commerce realities in Ghana. Bridged traditional banking and mobile wallet ecosystems by integrating MoMo APIs alongside international payments, giving local merchants access to global and regional consumers.',
    image: cloudArchImg,
    technologies: ['Python', 'Flask', 'MoMo API', 'PayPal SDK', 'SQLite / PostgreSQL', 'HTML5/Tailwind'],
    githubUrl: 'https://github.com/Tahiru2000/Ecommerce--website',
    featured: false,
    highlights: [
      'Integrated MTN / Telecel Mobile Money webhook validation for real-time transaction confirmation.',
      'Engineered persistent shopping cart session handling with automated inventory deduction on verified payment.',
      'Designed intuitive merchant administrative panel for inventory uploads, order tracking, and sales analytics.',
    ],
    metrics: [
      { label: 'Payments', value: 'MoMo + PayPal' },
      { label: 'Framework', value: 'Flask' },
    ],
    date: '2025',
  },
  {
    id: 'jac-genai-ouk',
    title: 'Generative AI & Agentic Workflows (OUK Masterclass)',
    category: 'ml',
    categoryLabel: 'AI & Machine Learning',
    summary:
      'Exploration of generative AI architectures, prompt pipeline design, and agentic workflows conducted through Open University of Kenya masterclasses.',
    description:
      'Hands-on implementation of modern language model paradigms, structured generation pipelines, and agent reasoning loops using TypeScript and Python.',
    image: neuralNetImg,
    technologies: ['TypeScript', 'Generative AI', 'Jac Cloud', 'LLM Prompt Engineering', 'Vector Embeddings'],
    githubUrl: 'https://github.com/Tahiru2000/Jac-and-generative-AI-by-OUK',
    featured: false,
    highlights: [
      'Engineered agent pipelines connecting LLM inference with deterministic backend services.',
      'Studied prompt chaining and schema-enforced JSON structured output validation.',
      'Explored emerging domain-specific AI frameworks for African education and civic technology.',
    ],
    date: '2025',
  },
  {
    id: 'rural-socioeconomic-data-analysis',
    title: 'Community Field Data Collection & Analysis',
    category: 'research',
    categoryLabel: 'Field Research & Analytics',
    summary:
      'Primary field research conducted in rural Ghanaian communities as part of UBIDS Practical Training, translating field data into actionable development insights.',
    description:
      'Field-based research project engaging grassroots rural populations. Structured primary questionnaires, collected qualitative and quantitative data, and applied statistical modeling to evaluate development opportunities in community infrastructure and education.',
    image: attendanceImg,
    technologies: ['Python', 'Data Analytics', 'Statistical Sampling', 'Socio-economic Modeling'],
    featured: false,
    highlights: [
      'Conducted field interviews and structured questionnaires across rural Upper West Region communities.',
      'Cleaned, normalized, and evaluated heterogeneous survey responses to identify socio-economic bottlenecks.',
      'Synthesized empirical findings into policy recommendations presented to faculty advisors.',
    ],
    date: '2024 – 2025',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'aws-amalitech',
    role: 'AWS Certified Cloud Practitioner Trainee',
    organization: 'Amalitech',
    location: 'Takoradi / Remote, Ghana',
    period: 'Aug 2025 – Nov 2025',
    type: 'Professional Certification & Training',
    bulletPoints: [
      'Acquired comprehensive competency in core cloud computing concepts, AWS foundational services, networking, cloud security, and IAM governance.',
      'Developed hands-on skills deploying, configuring, and troubleshooting scalable cloud resources supporting enterprise workloads.',
      'Collaborated on cloud architecture case studies emphasizing cost optimization, reliability, and security compliance under the AWS Well-Architected Framework.',
      'Strengthened cross-functional engineering communication and collaborative troubleshooting through real-world team deliverables.',
    ],
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'VPC Networking', 'Cloud Security', 'Linux Sysadmin'],
  },
  {
    id: 'yison-tech',
    role: 'Software Development & IT Support Intern',
    organization: 'Yison Tech',
    location: 'Wa, Upper West Region, Ghana',
    period: 'Jun 2025 – Sept 2025',
    type: 'Industrial Attachment Internship',
    bulletPoints: [
      'Gained practical software engineering and IT infrastructure experience in commercial client environments.',
      'Diagnosed and resolved critical hardware, software, and local network connectivity issues across workstations and client systems.',
      'Assisted senior engineering staff in implementing feature enhancements and backend code improvements for internal system applications.',
      'Applied core computer science theory to real-world debugging workflows and routine system maintenance.',
    ],
    skills: ['Python', 'System Troubleshooting', 'Software Quality Assurance', 'IT Support', 'Network Configuration'],
  },
  {
    id: 'cpi-intern',
    role: 'Research & Development Intern',
    organization: 'Coalition for Positive Impact (CPI)',
    location: 'Wa, Ghana',
    period: 'Feb 2025 – May 2025',
    type: 'Research & Development Internship',
    bulletPoints: [
      'Assisted in conducting quantitative field research, data aggregation, and analysis to support youth-focused community development programs.',
      'Contributed to drafting technical reports, project proposals, and strategic frameworks addressing regional social and economic challenges.',
      'Collaborated with interdisciplinary project leads to evaluate the efficacy of civic innovation initiatives across the Upper West Region.',
    ],
    skills: ['Data Collection', 'Quantitative Analysis', 'Proposal Writing', 'Community Advocacy', 'Field Research'],
  },
  {
    id: 'gyec-board',
    role: 'Executive Board Member',
    organization: 'Ghana Youth Engagement Center (GYEC), Wa Regional Library',
    location: 'Wa, Ghana',
    period: '2023 – 2024',
    type: 'Governance & Civic Leadership',
    bulletPoints: [
      'Served on executive board steering youth-focused empowerment programs fostering digital literacy and active civic engagement.',
      'Collaborated with regional library leadership and educational stakeholders to design and coordinate community technology workshops.',
      'Mentored emerging student leaders in digital literacy, computer science exploration, and academic preparation.',
    ],
    skills: ['Youth Leadership', 'Digital Literacy Advocacy', 'Stakeholder Management', 'Public Speaking'],
  },
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: 'fict-president',
    title: 'President — Faculty of Information & Communication Technology (FICT)',
    institution: 'Simon Diedong Dombo University of Business and Integrated Development Studies (UBIDS)',
    period: 'July 2024 – June 2025',
    scope: 'Faculty Executive Leadership',
    summary:
      'Chief student executive representing undergraduate and postgraduate students in the Faculty of ICT at UBIDS. Led faculty-wide academic initiatives, student welfare representation, and technical skill development workshops.',
    achievements: [
      'Organized faculty-wide software development bootcamps, code review circles, and industry tech seminars.',
      'Championed student resource access in high-level university administrative councils, securing enhanced computer lab hours.',
      'Bridged collaboration between academic department heads, faculty lecturers, and the student body to resolve curriculum feedback.',
    ],
  },
  {
    id: 'src-parliament',
    title: 'Member of Parliament — 5th SRC Parliament',
    institution: 'Simon Diedong Dombo University of Business and Integrated Development Studies (UBIDS)',
    period: 'Aug 2024 – May 2025',
    scope: 'Student Parliamentary Governance',
    summary:
      'Elected legislative representative actively formulating university student governance policies, evaluating budget appropriations, and safeguarding student interests.',
    achievements: [
      'Debated and sponsored student welfare bills ensuring transparency and accountability in student council expenditures.',
      'Chaired and served on legislative committees auditing campus student services, housing amenities, and digital infrastructure.',
      'Maintained consistent constituent communication, translating campus-wide student feedback into official parliamentary motions.',
    ],
  },
  {
    id: 'aspire-harvard',
    title: 'Leadership Fellow — Aspire Leaders Program',
    institution: 'Harvard University (Leadership Training)',
    period: '2023 – 2024',
    scope: 'Global Leadership & Cross-Cultural Innovation',
    summary:
      'Selected for prestigious global leadership training founded by Harvard University faculty, focused on social innovation, systemic problem-solving, and ethical leadership.',
    achievements: [
      'Mastered case-study frameworks addressing complex social challenges through innovation and collaborative problem-solving.',
      'Participated in cross-cultural workshops with young leaders across 50+ countries, sharpening strategic decision-making skills.',
      'Designed and pitched community-oriented technology initiative concepts targeting youth educational equity in Northern Ghana.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Simon Diedong Dombo University of Business and Integrated Development Studies (UBIDS)',
    degree: 'BSc. Computer Science',
    period: '2022 – 2026',
    location: 'Wa, Upper West Region, Ghana',
    details: [
      'Core Coursework: Data Structures & Algorithms, Database Systems, Cloud Computing Concepts, Machine Learning & Neural Networks, Operating Systems, Computer Architecture, Software Engineering Principles.',
      'Leadership: President of Faculty of ICT (2024-2025) and Member of Parliament in 5th SRC Parliament (2024-2025).',
    ],
  },
  {
    institution: 'Nandom Senior High School',
    degree: 'West African Senior School Certificate (WASSCE)',
    period: '2019 – 2022',
    location: 'Nandom, Upper West Region, Ghana',
    details: [
      'Elective Science curriculum with mathematics, physics, and chemistry foundations.',
      'Active participant in science club and mathematics competitions.',
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: 'Cloud & Infrastructure',
    description: 'Cloud design, infrastructure security, and system administration',
    skills: [
      { name: 'AWS Cloud Services', level: 85, detail: 'EC2, S3, IAM, VPC, CloudWatch' },
      { name: 'Linux System Administration', level: 90, detail: 'Troubleshooting, Bash, Cron, Permissions' },
      { name: 'Cloud Security & IAM', level: 88, detail: 'Least-privilege policies, security groups' },
      { name: 'Docker & Containers', level: 80, detail: 'Containerization, microservice deployment' },
      { name: 'Networking Fundamentals', level: 82, detail: 'Subnets, CIDR, DNS, routing tables' },
    ],
  },
  {
    name: 'Backend & APIs',
    description: 'Server-side architecture, API design, and system logic',
    skills: [
      { name: 'Python Engineering', level: 92, detail: 'Object-oriented, clean code, typing, async' },
      { name: 'Django & REST Framework', level: 90, detail: 'ORM, authentication, serializers, signals' },
      { name: 'Flask', level: 85, detail: 'Microservices, RESTful endpoints, Jinja templating' },
      { name: 'PostgreSQL & SQL', level: 88, detail: 'Normalized schemas, indexing, complex joins' },
      { name: 'API Authentication & RBAC', level: 86, detail: 'Session, JWT, role-based access' },
    ],
  },
  {
    name: 'Machine Learning & Deep Learning',
    description: 'Advanced neural networks, computer vision, and experimental modeling',
    skills: [
      { name: 'Convolutional Neural Networks', level: 84, detail: 'Feature extraction, spatial hierarchies' },
      { name: 'Capsule Networks (CapsNets)', level: 82, detail: 'Dynamic routing by agreement, pose matrices' },
      { name: 'Transfer Learning', level: 86, detail: 'Fine-tuning, pre-trained feature representations' },
      { name: 'Generative AI Pipelines', level: 80, detail: 'Agent loops, prompt orchestration (Jac/OUK)' },
      { name: 'Data Preprocessing & NumPy', level: 88, detail: 'Tensor manipulation, cleaning, normalization' },
    ],
  },
  {
    name: 'Leadership & Research',
    description: 'Institutional governance, stakeholder consensus, and community impact',
    skills: [
      { name: 'Faculty & Student Governance', level: 95, detail: 'President FICT, Member of Parliament' },
      { name: 'Cross-Cultural Problem Solving', level: 92, detail: 'Harvard Aspire Leaders Program' },
      { name: 'Field Research & Analytics', level: 86, detail: 'Rural community surveys, data modeling' },
      { name: 'Technical Workshop Delivery', level: 90, detail: 'Mentoring, student bootcamps, advocacy' },
    ],
  },
];
