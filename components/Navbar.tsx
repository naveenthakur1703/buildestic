export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <a href="/" className="font-bold text-2xl">
          Buildestic
        </a>

        <div className="space-x-6">
          <a href="/">Home</a>
          <a href="/brick-calculator">Calculators</a>
        </div>
      </div>
    </nav>
  );
}