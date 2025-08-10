export const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A description of Project Alpha.',
    image: 'https://via.placeholder.com/300',
    aiEvidence: {
      beforeAfter: [
        { before: 'https://via.placeholder.com/300/ff0000', after: 'https://via.placeholder.com/300/00ff00' },
      ],
      codeGens: [
        { title: 'AI-Generated Code', code: 'console.log("Hello from AI!");' },
      ],
      prompts: [
        { title: 'Image Generation Prompt', prompt: 'A futuristic cityscape at night, with flying cars and neon signs.' },
      ],
    },
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'A description of Project Beta.',
    image: 'https://via.placeholder.com/300',
    aiEvidence: {
      beforeAfter: [],
      codeGens: [],
      prompts: [],
    },
  },
];
