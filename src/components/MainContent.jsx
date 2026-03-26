import { useState } from 'react';
import FeatureCard from './FeatureCard';

export default function MainContent() {
  const [count, setCount] = useState(0);

  const features = [
    {
      title: 'Code Generation',
      description: 'Antigravity can scaffold entire React applications from a simple prompt, creating components, state logic, and styling all at once.',
      delayClass: 'delay-1'
    },
    {
      title: 'UI Design',
      description: 'Generate stunning CSS using modern variables, gradients, and glassmorphism. It automatically builds aesthetic interfaces.',
      delayClass: 'delay-2'
    },
    {
      title: 'Refactoring',
      description: 'Need to separate your app into modular components? Antigravity seamlessly refactors tangled files into beautifully organized structures.',
      delayClass: 'delay-3'
    },
    {
      title: 'Local Debugging',
      description: 'Using its integrated browser agent, Antigravity tests the application visually, ensuring states work perfectly without manual effort.',
      delayClass: 'delay-3'
    }
  ];

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
      <div className="glass-panel animate-fade-up mb-6 text-center">
        <h2 className="mb-2">The Power of AI Coding</h2>
        <p className="mb-4 text-secondary">
          Welcome to the final step of the tutorial. Here are just a few things Antigravity accomplished autonomously to build this exact project!
        </p>
        <button className="btn delay-1 animate-fade-up" onClick={() => setCount((c) => c + 1)}>
          Level of Amazement: {count}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }} className="mb-6">
        {features.map((feature, idx) => (
          <FeatureCard 
            key={idx} 
            title={feature.title} 
            description={feature.description} 
            delayClass={feature.delayClass} 
          />
        ))}
      </div>
    </main>
  );
}
