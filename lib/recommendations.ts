export interface QuizAnswers {
  who: string
  goal: string
  level: string
  output: string
  safety: string
}

export interface Recommendation {
  product: string
  productId: string
  course: string
  courseId: string
  articleCategory: string
  nextStep: string
}

export function getRecommendation(answers: QuizAnswers): Recommendation {
  // Safety/family path
  if (answers.who === 'child / family' || answers.safety === 'yes, family values') {
    return {
      product: 'PC1 Parent / Family AI Instruction Kit',
      productId: 'parent-kit',
      course: 'PromptCraft for Parents and Families',
      courseId: 'promptcraft-parents',
      articleCategory: 'Parents and families',
      nextStep: 'Download the Parent / Family Kit and start with the PromptCraft for Parents course.',
    }
  }
  // Classroom path
  if (answers.who === 'classroom' || answers.safety === 'yes, classroom rules') {
    return {
      product: 'PC1 Classroom Starter Pack',
      productId: 'classroom-pack',
      course: 'Prompt Literacy for Teachers',
      courseId: 'prompt-literacy-teachers',
      articleCategory: 'Schools and classroom',
      nextStep: 'Download the Classroom Starter Pack and explore the Prompt Literacy for Teachers course.',
    }
  }
  // Workplace / manager path
  if (answers.who === 'workplace' || answers.who === 'business' || answers.safety === 'yes, workplace rules') {
    return {
      product: 'PC1 Manager Prompt Pack',
      productId: 'manager-pack',
      course: 'PromptCraft for Managers',
      courseId: 'promptcraft-managers',
      articleCategory: 'Managers and workplace',
      nextStep: 'Download the Manager Prompt Pack and start the PromptCraft for Managers course.',
    }
  }
  // Software / technical path
  if (answers.who === 'software / automation' || answers.output === 'software build prompt') {
    return {
      product: 'PC1 Prompt Template Pack',
      productId: 'template-pack',
      course: 'PromptCraft for Software and Automation',
      courseId: 'promptcraft-software',
      articleCategory: 'AI ethics and boundaries',
      nextStep: 'Download the Template Pack and start the Software and Automation course.',
    }
  }
  // Student path
  if (answers.who === 'myself' && answers.level === 'simple / Year 7') {
    return {
      product: 'PC1 Digital Book',
      productId: 'pc1-book',
      course: 'PromptCraft One Foundations',
      courseId: 'pc1-foundations',
      articleCategory: 'Prompt literacy',
      nextStep: 'Start with the PC1 book and the Foundations course.',
    }
  }
  // Bundle path
  if (answers.output === 'full bundle') {
    return {
      product: 'PC1 Full Bundle',
      productId: 'bundle',
      course: 'How to Talk to Machines',
      courseId: 'how-to-talk-to-machines',
      articleCategory: 'Articles',
      nextStep: 'Get the Full Bundle for the complete PC1 experience.',
    }
  }
  // Default
  return {
    product: 'PC1 Digital Book',
    productId: 'pc1-book',
    course: 'PromptCraft One Foundations',
    courseId: 'pc1-foundations',
    articleCategory: 'Articles',
    nextStep: 'Start with the PC1 book — it covers everything you need.',
  }
}
