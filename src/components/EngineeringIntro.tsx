const buildAreas = [
  {
    title: "Full-stack products",
    detail: "Interfaces, APIs, authentication, and databases designed as one system.",
  },
  {
    title: "Desktop applications",
    detail: "Local client integrations and live workflows driven by real-time events.",
  },
  {
    title: "AI-integrated tools",
    detail: "Practical discovery and assistance features grounded in application data.",
  },
  {
    title: "APIs & data systems",
    detail: "Search, validation, relational models, and service boundaries behind the UI.",
  },
];

export function EngineeringIntro() {
  return (
    <section className="engineering-intro page-shell" id="about" aria-labelledby="intro-title">
      <p className="section-label">How I think</p>
      <h2 id="intro-title">
        I like building software where the interface, backend, and underlying system
        have to <em>work together.</em>
      </h2>

      <div className="build-areas">
        {buildAreas.map((area) => (
          <article key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
