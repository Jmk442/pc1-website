export const craftElements = [
  {
    letter: 'C',
    word: 'Context',
    explanation: 'Give the situation, audience, constraints, and any facts the model should use.',
    example: 'This is for a Year 10 geography class. Keep it under 400 words and suitable for students who are new to the topic.',
  },
  {
    letter: 'R',
    word: 'Role',
    explanation: 'Say who the AI should act as, so it chooses the right level of expertise.',
    example: 'Act as an experienced geography tutor who explains ideas clearly without talking down to students.',
  },
  {
    letter: 'A',
    word: 'Action',
    explanation: 'Name the job. Be specific about what to produce, in what order.',
    example: 'First give a five-point outline, then write a short essay from that outline.',
  },
  {
    letter: 'F',
    word: 'Format',
    explanation: 'Shape the output so you can use it: length, structure, headings, or a list.',
    example: 'Use a heading, a numbered outline, then the essay in plain paragraphs.',
  },
  {
    letter: 'T',
    word: 'Tone',
    explanation: 'Set the voice so the result matches the reader and the setting.',
    example: 'Clear, calm, and age-appropriate. Avoid slogans and alarmist language.',
  },
]

export const craftTransformation = {
  rough: 'Help me write something about climate change for school.',
  crafted: `Context: Year 10 geography, students new to the topic, maximum 400 words.
Role: Experienced geography tutor.
Action: Give a five-point outline, then write a short essay from it.
Format: Heading, numbered outline, then plain paragraphs.
Tone: Clear, calm, and age-appropriate. No slogans.

Write the outline first, then the essay.`,
  note: 'The method does not guarantee a perfect answer. It gives the model the information it needs before it starts generating, which usually means fewer retries and a result you can actually use.',
}

export const storeShortDescription =
  'PromptCraft 1 — How to Talk to Machines is a practical guide to writing clearer AI prompts using the C.R.A.F.T. method: Context, Role, Action, Format and Tone. Built for students, educators, managers, professionals and everyday AI users.'

export const storeLongDescription = [
  'Most people do not need more AI. They need a better way to ask.',
  'PromptCraft 1 — How to Talk to Machines is a practical guide to turning rough ideas into clear instructions that AI systems can work with.',
  'At its centre is the C.R.A.F.T. method: Context. Role. Action. Format. Tone.',
  'Across 24 chapters, John Kenneally shows how those five elements can improve the way people structure requests for AI, then demonstrates what happens when the improved prompt is actually run.',
  'The book uses two reading levels: accessible explanations for students and newcomers, alongside fuller professional examples for educators, managers, government, technical users and other workplaces.',
  'It also explores practical applications in healthcare, legal work, education, finance, software and marketing, as well as the relationship between clearer prompting, unnecessary retries and the growing resource demands of AI.',
  'This is not a collection of magic prompt formulas. It is a method for thinking more clearly about what you want before asking a machine to produce it.',
  'For anyone who knows what they mean but has struggled to tell AI exactly what they need.',
]

export const audiences = [
  {
    id: 'everyday',
    title: 'Everyday AI users',
    outcome: 'Turn a vague request into a prompt you can reuse at home, in study, or at work.',
  },
  {
    id: 'students',
    title: 'Students',
    outcome: 'Turn vague ideas into clearer questions and assignments.',
  },
  {
    id: 'educators',
    title: 'Educators',
    outcome: 'Teach a repeatable structure for responsible prompt literacy.',
  },
  {
    id: 'managers',
    title: 'Managers',
    outcome: 'Give AI clearer instructions for research, planning and communication.',
  },
  {
    id: 'professionals',
    title: 'Professionals',
    outcome: 'Use a shared method so workplace prompts are specific, consistent, and reviewable.',
  },
]
