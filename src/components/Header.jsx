export default function Header() {
  return (
    <header className="text-center mb-12 animate-[fadeUp_0.6s_ease-out_forwards]">
      <h1 className="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 text-5xl md:text-6xl font-extrabold tracking-tight pb-2">Antigravity Tailwind App</h1>
      <p className="text-gray-400 text-lg md:text-xl font-medium">
        Building your first modern React + Tailwind CSS app, component by component.
      </p>
    </header>
  );
}
