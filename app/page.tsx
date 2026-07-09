export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Buildestic Construction Calculators
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Free construction calculators for bricks, concrete, cement,
          steel, plaster, tiles and more.
        </p>

        <a
          href="/brick-calculator"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Try Brick Calculator
        </a>
      </section>
    </main>
  );
}