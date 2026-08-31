export interface Article {
  slug: string
  title: string
  description: string
  topic: string
}

export const articles: Article[] = [
  {
    slug: 'what-makes-a-good-ai-prompt',
    title: 'What makes a good AI prompt?',
    description: 'A good prompt is a complete instruction: it tells the model the situation, the job, and the shape of the answer.',
    topic: 'Prompt literacy',
  },
  {
    slug: 'what-is-craft-prompting',
    title: 'What is C.R.A.F.T. prompting?',
    description: 'C.R.A.F.T. is a five-part method for writing clearer AI prompts: Context, Role, Action, Format and Tone.',
    topic: 'C.R.A.F.T.',
  },
  {
    slug: 'why-context-matters',
    title: 'Why does context matter when using AI?',
    description: 'Without context, a model has to guess. A short situation note is often the difference between a usable answer and another retry.',
    topic: 'Prompt literacy',
  },
]
