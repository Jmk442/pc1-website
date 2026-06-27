export interface Product {
  id: string
  title: string
  description: string
  whoFor: string
  fileType: string
  price: string
  checkoutLink: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'pc1-book',
    title: 'PC1 Digital Book',
    description: 'The complete "How to Talk to Machines" guide. Learn the C.R.A.F.T. method, industry applications, and how to get consistent results from AI.',
    whoFor: 'Everyone — students, parents, teachers, managers, and professionals.',
    fileType: 'PDF + EPUB',
    price: '$19',
    checkoutLink: 'GUMROAD_LINK_PC1_BOOK',
    featured: true,
  },
  {
    id: 'pc1-cheatsheet',
    title: 'PC1 Cheat Sheet',
    description: 'A one-page quick reference for the C.R.A.F.T. method and D.E.T. extension. Print it, pin it, use it every day.',
    whoFor: 'Anyone who wants a fast daily reference.',
    fileType: 'PDF (A4 / US Letter)',
    price: '$5',
    checkoutLink: 'GUMROAD_LINK_PC1_CHEATSHEET',
  },
  {
    id: 'template-pack',
    title: 'PC1 Prompt Template Pack',
    description: 'Ready-to-use prompt templates organised by use case. Copy, adapt, and deploy immediately.',
    whoFor: 'Anyone who wants to skip the blank-page problem.',
    fileType: 'PDF + Markdown',
    price: '$12',
    checkoutLink: 'GUMROAD_LINK_TEMPLATE_PACK',
  },
  {
    id: 'parent-kit',
    title: 'PC1 Parent / Family AI Instruction Kit',
    description: 'Help your family use AI safely and clearly. Includes values prompts, reading-level guides, and family rules templates.',
    whoFor: 'Parents, caregivers, and families.',
    fileType: 'PDF + Worksheet',
    price: '$12',
    checkoutLink: 'GUMROAD_LINK_PARENT_KIT',
  },
  {
    id: 'classroom-pack',
    title: 'PC1 Classroom Starter Pack',
    description: 'Everything a teacher needs to introduce prompt literacy in the classroom. Lesson plans, activities, and student guides.',
    whoFor: 'Teachers, educators, and schools.',
    fileType: 'PDF + Worksheets',
    price: '$18',
    checkoutLink: 'GUMROAD_LINK_CLASSROOM_PACK',
  },
  {
    id: 'manager-pack',
    title: 'PC1 Manager Prompt Pack',
    description: 'Workplace-ready prompts for reporting, planning, communication, and decision-making. Professional tone built in.',
    whoFor: 'Managers, team leads, and workplace professionals.',
    fileType: 'PDF + Markdown',
    price: '$15',
    checkoutLink: 'GUMROAD_LINK_MANAGER_PACK',
  },
  {
    id: 'worksheets',
    title: 'PC1 Course Worksheets',
    description: 'The complete set of worksheets from all PC1 courses. Great for self-study or group learning.',
    whoFor: 'Course learners and self-study users.',
    fileType: 'PDF + Worksheet Pack',
    price: '$10',
    checkoutLink: 'GUMROAD_LINK_WORKSHEETS',
  },
  {
    id: 'audiobook',
    title: 'PC1 Audiobook Edition',
    description: 'Listen to "How to Talk to Machines" on your commute, during exercise, or wherever you learn best.',
    whoFor: 'Audio learners and busy professionals.',
    fileType: 'MP3 / Audio',
    price: '$15',
    checkoutLink: 'GUMROAD_LINK_AUDIOBOOK',
  },
  {
    id: 'bundle',
    title: 'PC1 Full Bundle',
    description: 'Everything in one: the book, cheat sheet, template pack, parent kit, classroom pack, manager pack, worksheets, and audiobook.',
    whoFor: 'Anyone who wants the complete PC1 system.',
    fileType: 'PDF + EPUB + Audio + Worksheets',
    price: '$59',
    checkoutLink: 'GUMROAD_LINK_BUNDLE',
    featured: true,
  },
]
