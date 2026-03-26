export default function FeatureCard({ title, description, delay }) {
  return (
    <div 
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10 transition-all duration-300 h-full"
    >
      <h3 className="text-xl font-bold text-indigo-400">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-base">{description}</p>
    </div>
  );
}
