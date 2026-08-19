import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

const topics = [
  {
    title: 'Critical Evaluations of AI Frameworks',
    description:
      'Practical, unfiltered analyses of popular orchestration tools, including hands-on critiques of retrieval-augmented generation platforms, with attention to retrieval quality, answer faithfulness, and AI observability.',
  },
  {
    title: 'RAG and Chatbot Architecture',
    description:
      'UX and architectural workflows for building RAG chatbots, from knowledge upload sequences to precise retrieval tuning.',
  },
  {
    title: 'Prompt Engineering Workflows',
    description:
      'Deep dives into transforming AI-generated code and tests into reliable, production-grade outputs, including workflows that use advanced command ecosystems like Claude Code.',
  },
  {
    title: 'Developer Productivity & Tools',
    description:
      'Optimized developer environments, user interface configurations, and comprehensive platform guides.',
  },
] as const

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About
        </h1>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <p>
          Artificial Intelligence &amp; APIs serves as a technical blog and informational portal
          designed for software developers, system architects, and AI practitioners. The platform
          focuses on deep dives, hands-on critiques, and best practices for building robust,
          AI-driven applications.
        </p>
        <h2>Key Content &amp; Topics Covered</h2>
        <ul>
          {topics.map(({ title, description }) => (
            <li key={title}>
              <strong>{title}:</strong> {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
