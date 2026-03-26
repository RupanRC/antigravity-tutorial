export default function FeatureCard({ title, description, delayClass }) {
  return (
    <div className={`glass-panel ${delayClass} animate-fade-up`} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%' }}>
      <h3 style={{ marginBottom: '0', fontSize: '1.25rem', color: 'var(--primary)' }}>{title}</h3>
      <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
}
