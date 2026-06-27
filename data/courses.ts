export type CourseStatus = 'Draft' | 'Ready' | 'Coming Soon'
export type CourseLevel = 'Year 7' | 'Year 10' | 'Managerial / Industry' | 'Technical'

export interface Course {
  id: string
  title: string
  audience: string
  level: CourseLevel
  lessonCount: string
  status: CourseStatus
  description: string
  downloadLink?: string
  classroomLink: string
  buyLink?: string
}

export const courses: Course[] = [
  {
    id: 'pc1-foundations',
    title: 'PromptCraft One Foundations',
    audience: 'Everyone',
    level: 'Year 7',
    lessonCount: '8 lessons',
    status: 'Draft',
    description: 'The starting point. Learn why prompts matter, what goes wrong, and how the PC1 method fixes it.',
    classroomLink: '/classroom',
  },
  {
    id: 'how-to-talk-to-machines',
    title: 'How to Talk to Machines',
    audience: 'General / Adult learners',
    level: 'Year 10',
    lessonCount: '10 lessons',
    status: 'Draft',
    description: 'Walk through the full "How to Talk to Machines" book as a course. Practical exercises at every step.',
    classroomLink: '/classroom',
  },
  {
    id: 'craft-essentials',
    title: 'C.R.A.F.T. Method Essentials',
    audience: 'Anyone learning prompt structure',
    level: 'Year 10',
    lessonCount: '6 lessons',
    status: 'Draft',
    description: 'Deep dive into Context, Role, Action, Format, and Tone. Build reliable prompts for any task.',
    classroomLink: '/classroom',
  },
  {
    id: 'prompt-literacy-students',
    title: 'Prompt Literacy for Students',
    audience: 'Students (secondary and tertiary)',
    level: 'Year 7',
    lessonCount: '7 lessons',
    status: 'Coming Soon',
    description: 'Designed for students. Learn how to use AI for study, research, and creative projects — clearly and ethically.',
    classroomLink: '/classroom',
  },
  {
    id: 'prompt-literacy-teachers',
    title: 'Prompt Literacy for Teachers',
    audience: 'Teachers and educators',
    level: 'Year 10',
    lessonCount: '8 lessons',
    status: 'Coming Soon',
    description: 'How to teach prompt literacy in class. Includes C.R.A.F.T. lesson plans and classroom activities.',
    classroomLink: '/classroom',
  },
  {
    id: 'promptcraft-parents',
    title: 'PromptCraft for Parents and Families',
    audience: 'Parents and caregivers',
    level: 'Year 7',
    lessonCount: '5 lessons',
    status: 'Coming Soon',
    description: 'A family-safe guide to AI. Set values, reading levels, boundaries, and clear instructions together.',
    classroomLink: '/classroom',
  },
  {
    id: 'promptcraft-managers',
    title: 'PromptCraft for Managers',
    audience: 'Managers, team leads, workplace professionals',
    level: 'Managerial / Industry',
    lessonCount: '8 lessons',
    status: 'Coming Soon',
    description: 'Use AI for reports, planning, communication, and decisions. Professional-grade prompt skills.',
    classroomLink: '/classroom',
  },
  {
    id: 'promptcraft-industry',
    title: 'PromptCraft for Industry Use',
    audience: 'Industry professionals, compliance, governance',
    level: 'Managerial / Industry',
    lessonCount: '10 lessons',
    status: 'Coming Soon',
    description: 'Structured prompt use for regulated industries. Includes compliance-aware language and audit trails.',
    classroomLink: '/classroom',
  },
  {
    id: 'promptcraft-software',
    title: 'PromptCraft for Software and Automation',
    audience: 'Developers, technical users, automation builders',
    level: 'Technical',
    lessonCount: '10 lessons',
    status: 'Coming Soon',
    description: 'The D.E.T. extension in practice. Build, test, and deploy with AI-powered development prompts.',
    classroomLink: '/classroom',
  },
  {
    id: 'pc1-platform-future',
    title: 'PC1 Platform and Future Thinking',
    audience: 'Leaders, innovators, and future planners',
    level: 'Managerial / Industry',
    lessonCount: '6 lessons',
    status: 'Coming Soon',
    description: 'Where PC1 is going. Platform thinking, SaaS futures, vertical applications, and what comes after PC1.',
    classroomLink: '/classroom',
  },
]
