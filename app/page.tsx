import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Buildestic",
  url: "https://buildestic.com",
  logo: "https://buildestic.com/android-chrome-512x512.png",
  description:
    "Professional online construction calculators for builders, contractors, engineers and homeowners.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Buildestic",
  url: "https://buildestic.com",
  description:
    "Free online construction calculators for brick, concrete, cement, steel, paint, tile and more.",
};

const calculators = [
  {
    title: "Brick Calculator",
    description: "Estimate the number of bricks required for your wall.",
    href: "/brick-calculator",
    available: true,
    icon: "🧱",
  },
  {
    title: "Concrete Calculator",
    description: "Calculate concrete volume and material requirements.",
    href: "/concrete-calculator",
    available: true,
    icon: "🏗️",
  },
  {
    title: "Cement Calculator",
    description: "Estimate cement bags for your construction project.",
    href: "#",
    available: false,
    icon: "🪣",
  },
  {
    title: "Paint Calculator",
    description: "Find the paint quantity required for walls and ceilings.",
    href: "#",
    available: false,
    icon: "🎨",
  },
  {
    title: "Tile Calculator",
    description: "Estimate floor and wall tile requirements.",
    href: "#",
    available: false,
    icon: "🟫",
  },
  {
    title: "Plaster Calculator",
    description: "Calculate plaster material requirements.",
    href: "#",
    available: false,
    icon: "🧰",
  },
];

const benefits = [
  "Accurate Construction Calculations",
  "Free to Use",
  "Fast Results",
  "Mobile Friendly",
  "No Registration Required",
  "Designed for Builders & Engineers",
];

const categories = [
  "Concrete",
  "Masonry",
  "Flooring",
  "Paint",
  "Steel",
  "Roofing",
  "Plaster",
  "Civil Engineering",
];

const faqs = [
  {
    question: "Are Buildestic calculators free?",
    answer:
      "Yes. All Buildestic construction calculators are completely free to use.",
  },
  {
    question: "Who can use Buildestic?",
    answer:
      "Builders, contractors, engineers, architects, students, and homeowners can all use our calculators.",
  },
  {
    question: "Are the calculations accurate?",
    answer:
      "Our calculators provide reliable estimates based on standard engineering formulas. Actual material requirements may vary depending on site conditions.",
  },
  {
    question: "Do the calculators work on mobile?",
    answer:
      "Yes. Every calculator is fully responsive and works on phones, tablets, and desktops.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      {/* Header */}
      {/* <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/android-chrome-512x512.png"
              alt="Buildestic Logo"
              width={42}
              height={42}
              priority
            />

            <div>
              <div className="text-xl font-bold text-slate-900">
                Buildestic
              </div>

              <div className="text-xs text-slate-500">
                Construction Calculators
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/brick-calculator"
              className="text-slate-700 hover:text-black"
            >
              Brick
            </Link>

            <Link
              href="/concrete-calculator"
              className="text-slate-700 hover:text-black"
            >
              Concrete
            </Link>

            <a
              href="#"
              className="text-slate-700 cursor-default"
            >
              More Tools
            </a>
          </nav>
        </div>
      </header> */}

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Free Construction Calculators
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
          Construction Calculators for Faster & Accurate Estimates
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Buildestic provides free online construction calculators for builders,
          contractors, engineers, architects, students, and homeowners.
          Calculate bricks, concrete, cement, plaster, tiles, paint, steel and
          much more within seconds.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/brick-calculator"
            className="rounded-lg bg-black px-8 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Brick Calculator
          </Link>

          <Link
            href="/concrete-calculator"
            className="rounded-lg border border-gray-300 bg-white px-8 py-3 font-medium hover:bg-gray-100 transition"
          >
            Concrete Calculator
          </Link>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Featured Construction Calculators
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <div
              key={calc.title}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl">{calc.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">{calc.title}</h3>

              <p className="mt-3 text-gray-600">{calc.description}</p>

              {calc.available ? (
                <Link
                  href={calc.href}
                  className="mt-6 inline-block rounded-lg bg-black px-5 py-2 text-white"
                >
                  Open Calculator
                </Link>
              ) : (
                <span className="mt-6 inline-block rounded-lg bg-gray-200 px-5 py-2 text-gray-600">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Buildestic?
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border bg-gray-50 p-5 text-center font-medium"
              >
                ✓ {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Construction Categories
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-slate-100 px-5 py-3 font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            About Buildestic Construction Calculators
          </h2>

          <div className="mt-6 space-y-5 text-gray-600 leading-8">
            <p>
              Buildestic is a free online platform that helps builders,
              contractors, civil engineers, architects, students, and homeowners
              perform accurate construction calculations. Whether you are
              estimating bricks for a wall, concrete for a slab, cement bags for
              a project, or planning future material requirements, our tools are
              designed to save time and improve accuracy.
            </p>

            <p>
              Our calculators use standard construction formulas and are built
              with a clean, mobile-friendly interface that works across all
              devices. We continuously add new construction calculators to help
              professionals and DIY users estimate material quantities quickly
              and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border bg-white p-6">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}