import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center animate-fade-up">
      <h1 className="mb-2">Antigravity React Tutorial</h1>
      <p className="mb-6 delay-1 animate-fade-up text-secondary">
        Welcome to your beautiful new React app. This layout uses a dynamic dark UI with glassmorphism.
      </p>

      <div className="glass-panel delay-2 animate-fade-up mb-6" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="mb-2">Interactive Component</h2>
        <p className="mb-4">
          Click the button below to see React state in action!
        </p>
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
      
      <p className="delay-3 animate-fade-up">
        Ready for Step 3? We will start building out reusable components.
      </p>
    </div>
  )
}

export default App
