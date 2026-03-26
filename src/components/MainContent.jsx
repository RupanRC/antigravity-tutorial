import { useState } from 'react';
import FeatureCard from './FeatureCard';

export default function MainContent() {
  const [count, setCount] = useState(0);

  const features = [
    {
      title: 'Code Generation',
      description: 'Antigravity can scaffold entire React applications from a simple prompt, creating components, state logic, and styling all at once.'
    },
    {
      title: 'UI Design',
      description: 'Generate stunning CSS using modern variables, gradients, and glassmorphism. It automatically builds aesthetic interfaces.'
    },
    {
      title: 'Refactoring',
      description: 'Need to separate your app into modular components? Antigravity seamlessly refactors tangled files into beautifully organized structures.'
    },
    {
      title: 'Local Debugging',
      description: 'Using its integrated browser agent, Antigravity tests the application visually, ensuring states work perfectly without manual effort.'
    },
    {
      title: 'Intelligent Autocomplete',
      description: 'Context-aware suggestions that predict your next lines of code based on project patterns.'
    },
    {
      title: 'Documentation Generation',
      description: 'Automatically write comprehensive documentation and inline comments for complex functions.'
    },
    {
      title: 'Bug Detection & Fixing',
      description: 'Real-time analysis of your code to spot potential bugs and vulnerabilities before they run.'
    },
    {
      title: 'Test Case Generation',
      description: 'Instantly create robust unit and integration tests to ensure code reliability and coverage.'
    },
    {
      title: 'Version Control Integration',
      description: 'Seamlessly manage your commits, branches, and PRs right from the chat interface.'
    },
    {
      title: 'Architecture Planning',
      description: 'Collaborate with the agent to design scalable system architectures before writing a single line of code.'
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 w-full">
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center mb-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-white">The Power of AI Coding</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Welcome to the final step of the tutorial. Here are just a few things Antigravity accomplished autonomously to build this exact project!
        </p>
        <button className="rounded-lg px-6 py-3 font-semibold bg-indigo-500 text-white cursor-pointer transition-all duration-300 hover:bg-indigo-400 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] active:translate-y-0" onClick={() => setCount((c) => c + 1)}>
          Level of Amazement: {count}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </main>
  );
}
