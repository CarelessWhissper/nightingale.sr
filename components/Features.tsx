import SectionReveal from "./SectionReveal";

export default function Features() {
  const features = [
    {
      title: "Modern Aesthetic",
      desc: "Soft gradients, clean layouts, focus on typography.",
    },
    {
      title: "Smooth Interaction",
      desc: "Scroll-based animations with frictionless motion.",
    },
    {
      title: "Flexible Components",
      desc: "Built for expansion and custom UI theme.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        {features.map((f, i) => (
          <SectionReveal key={i}>
            <div className="p-8 border border-neutral-200 rounded-3xl hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="opacity-70">{f.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
